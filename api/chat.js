// /api/chat.js
// Vercel serverless function (Node runtime). Deployed automatically by Vercel
// from this /api directory — no extra config needed.
//
// Env vars required (set in Vercel Project Settings → Environment Variables):
//   ANTHROPIC_API_KEY   — your Claude API key
//   OPENAI_API_KEY       — your OpenAI API key
//
// Request body:  { messages: [{ role: "user" | "assistant", content: string | Block[] }], provider?: "claude" | "openai" }
// Response body: { reply: string, provider: string }

import { KNOWLEDGE_BASE } from "./knowledge.js";
import { SYSTEM_RULES } from "./persona.js";
import { DELIVERY_HUB } from "./case-delivery-hub.js";
import { COMMUNICATION } from "./case-communication.js";
import { HSA } from "./case-hsa.js";
import { CHATBOT } from "./case-chatbot.js";
import { selectCaseStudies, extractText } from "./select-context.js";

const CASE_STUDY_CONTENT = {
  deliveryHub: DELIVERY_HUB,
  communication: COMMUNICATION,
  hsa: HSA,
  chatbot: CHATBOT,
};

const HAIKU_MODEL = "claude-haiku-4-5-20251001";
const SONNET_MODEL = "claude-sonnet-5";

// Anything that smells like reasoning, critique, comparison, opinion, or "help me with my
// own problem" goes to the strong model. Trigger list is data on purpose — tune it here.
const SONNET_TRIGGER_WORDS = [
  "why",
  "how did",
  "how does",
  "how would",
  "how do you",
  "critique",
  "review",
  "feedback",
  "audit",
  "compare",
  "comparison",
  " vs ",
  "versus",
  "opinion",
  "think about",
  "advice",
  "help me",
  "my product",
  "my design",
  "my app",
  "my screen",
  "my site",
  "my portfolio",
  "problem",
  "approach",
  "process",
  "explain",
  "walk me through",
  "trade-off",
  "tradeoff",
  "disagree",
  "argue",
  "decision",
  "would you",
  "what would",
];

// Route between a cheap model for straightforward lookups and a strong one for anything
// that needs real reasoning. When in doubt this prefers Sonnet — a bad answer costs more
// than the few cents saved by the cheap model.
export function selectModel({ hasImage, loadedCaseStudies, text }) {
  if (hasImage) return { model: SONNET_MODEL, reason: "image attached — always Sonnet" };
  if (loadedCaseStudies.length > 0) {
    return { model: SONNET_MODEL, reason: `case study loaded (${loadedCaseStudies.join(", ")})` };
  }

  const lower = (text || "").toLowerCase();
  const trigger = SONNET_TRIGGER_WORDS.find((w) => lower.includes(w));
  if (trigger) return { model: SONNET_MODEL, reason: `reasoning trigger ("${trigger.trim()}")` };

  if (lower.trim().length > 0 && lower.length < 140) {
    return { model: HAIKU_MODEL, reason: "short factual lookup" };
  }

  return { model: SONNET_MODEL, reason: "default — prefer the stronger model" };
}

function messageHasImage(message) {
  return Array.isArray(message?.content) && message.content.some((b) => b && b.type === "image");
}

function latestUserText(messages) {
  for (let i = messages.length - 1; i >= 0; i--) {
    if (messages[i].role === "user") return extractText(messages[i].content);
  }
  return "";
}

// Stable-first, variable-last: base knowledge → case studies → persona rules. Caching works
// on prefixes, so the two blocks that never change per-request carry the cache_control
// marker; whatever changes (the case study selection) sits between them.
function buildSystemBlocks(selectedKeys) {
  const blocks = [{ type: "text", text: KNOWLEDGE_BASE, cache_control: { type: "ephemeral" } }];
  for (const key of selectedKeys) {
    const content = CASE_STUDY_CONTENT[key];
    if (content) blocks.push({ type: "text", text: content });
  }
  blocks.push({ type: "text", text: SYSTEM_RULES, cache_control: { type: "ephemeral" } });
  return blocks;
}

// Sonnet handles case-study depth and full UX audits (persona.js asks for a real
// conversational review, not a one-liner). Confirmed from production logs: image requests
// were spending the *entire* token budget on an internal "thinking" block before ever
// reaching visible text — stop_reason "max_tokens" with output_tokens_details.thinking_tokens
// equal to the full budget, deterministically, every time. 1200 wasn't reasoning-then-answer
// room, it was just reasoning room. This needs enough headroom for both. Haiku never sees
// this — it's only routed short factual lookups — so it stays tight.
const MAX_TOKENS_BY_MODEL = {
  [SONNET_MODEL]: 6000,
  [HAIKU_MODEL]: 400,
};
const MAX_TOKENS_RETRY_MULTIPLIER = 1.5; // if the first attempt still hits the ceiling

async function callClaudeOnce(model, system, messages, maxTokens) {
  return fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": process.env.ANTHROPIC_API_KEY,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({ model, max_tokens: maxTokens, system, messages }),
  });
}

// One full attempt: the HTTP call, with its own retry on 429/5xx (a short backoff; 4xx
// other than 429 — bad request, auth — is not retried, since a malformed request just
// fails the same way twice). Returns the extracted text plus the raw response for logging.
async function callClaudeAttempt(model, system, messages, maxTokens) {
  let res = await callClaudeOnce(model, system, messages, maxTokens);
  if (!res.ok && (res.status === 429 || res.status >= 500)) {
    await new Promise((resolve) => setTimeout(resolve, 500));
    res = await callClaudeOnce(model, system, messages, maxTokens);
  }
  if (!res.ok) {
    const detail = await res.text();
    throw new Error(`Claude API error (${res.status}): ${detail}`);
  }

  const data = await res.json();
  const text = (data.content || [])
    .map((b) => (b.type === "text" ? b.text : ""))
    .join("\n")
    .trim();
  return { text, data };
}

function logEmptyReply(model, data, maxTokens, note) {
  console.warn(`chat.js empty reply${note}:`, {
    model,
    maxTokens,
    stop_reason: data.stop_reason,
    block_types: (data.content || []).map((b) => b.type),
    usage: data.usage,
  });
}

// A 200 response with no usable text gets one retry. If it hit the token ceiling (the
// confirmed failure mode — thinking alone consuming the full budget), the retry raises the
// ceiling instead of repeating the exact same request, which would just hit the same wall
// again deterministically. Logs every attempt either way, so a repeat failure still shows
// the real cause in Vercel's function logs.
async function callClaude(model, system, messages) {
  const baseMaxTokens = MAX_TOKENS_BY_MODEL[model] || 600;
  let { text, data } = await callClaudeAttempt(model, system, messages, baseMaxTokens);
  console.log("chat.js usage:", { model, maxTokens: baseMaxTokens, usage: data.usage, stop_reason: data.stop_reason });

  if (!text) {
    logEmptyReply(model, data, baseMaxTokens, ", retrying");
    const retryMaxTokens =
      data.stop_reason === "max_tokens" ? Math.round(baseMaxTokens * MAX_TOKENS_RETRY_MULTIPLIER) : baseMaxTokens;
    ({ text, data } = await callClaudeAttempt(model, system, messages, retryMaxTokens));
    console.log("chat.js retry usage:", { model, maxTokens: retryMaxTokens, usage: data.usage, stop_reason: data.stop_reason });
    if (!text) logEmptyReply(model, data, retryMaxTokens, " after retry");
  }

  return text;
}

async function callClaudeRouted(messages) {
  const hasImage = messages.some(messageHasImage);
  const text = latestUserText(messages);
  const selectedKeys = selectCaseStudies(messages);
  const { model, reason } = selectModel({ hasImage, loadedCaseStudies: selectedKeys, text });

  console.log("chat.js routing:", { model, reason, caseStudies: selectedKeys, hasImage });

  const system = buildSystemBlocks(selectedKeys);
  return callClaude(model, system, messages);
}

async function callOpenAIOnce(systemText, messages) {
  return fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      max_tokens: 600,
      messages: [{ role: "system", content: systemText }, ...messages],
    }),
  });
}

async function callOpenAI(messages) {
  const selectedKeys = selectCaseStudies(messages);
  const systemText = [KNOWLEDGE_BASE, ...selectedKeys.map((k) => CASE_STUDY_CONTENT[k]).filter(Boolean), SYSTEM_RULES].join(
    "\n\n---\n\n"
  );

  let res = await callOpenAIOnce(systemText, messages);
  if (!res.ok && (res.status === 429 || res.status >= 500)) {
    await new Promise((resolve) => setTimeout(resolve, 500));
    res = await callOpenAIOnce(systemText, messages);
  }
  if (!res.ok) {
    const detail = await res.text();
    throw new Error(`OpenAI API error (${res.status}): ${detail}`);
  }

  const data = await res.json();
  return data.choices?.[0]?.message?.content?.trim() || "";
}

// --- Rate limiting -----------------------------------------------------------------
// In-memory Map, pruned by timestamp. This is per-serverless-instance and resets on cold
// start, so it's imperfect on Vercel — but it's a real, zero-dependency speed bump against
// casual abuse of a funded API key while the site is public. Upgrade path if it's not
// enough: Vercel KV or Upstash Redis for a shared counter across instances.
const MINUTE_MS = 60 * 1000;
const HOUR_MS = 60 * MINUTE_MS;
const RATE_LIMIT_PER_MINUTE = 10;
const RATE_LIMIT_PER_HOUR = 40;
const MAX_HISTORY_MESSAGES = 20;
const MAX_BODY_BYTES = 8 * 1024 * 1024;

const requestLog = new Map(); // ip -> timestamps[]

function getClientIp(req) {
  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string" && forwarded.length > 0) {
    return forwarded.split(",")[0].trim();
  }
  return req.socket?.remoteAddress || "unknown";
}

function checkRateLimit(ip) {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) || []).filter((t) => now - t < HOUR_MS);

  const lastMinute = timestamps.filter((t) => now - t < MINUTE_MS).length;
  if (lastMinute >= RATE_LIMIT_PER_MINUTE || timestamps.length >= RATE_LIMIT_PER_HOUR) {
    requestLog.set(ip, timestamps);
    return false;
  }

  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return true;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed. Use POST." });
    return;
  }

  const contentLength = Number(req.headers["content-length"] || 0);
  if (contentLength > MAX_BODY_BYTES) {
    res.status(413).json({ error: "That request is too large. Try a smaller image." });
    return;
  }

  const ip = getClientIp(req);
  if (!checkRateLimit(ip)) {
    res.status(429).json({ error: "You're sending messages a bit fast — give it a few seconds and try again." });
    return;
  }

  const { messages, provider = "claude" } = req.body || {};

  if (!Array.isArray(messages) || messages.length === 0) {
    res.status(400).json({ error: "`messages` must be a non-empty array." });
    return;
  }

  const trimmedMessages = messages.slice(-MAX_HISTORY_MESSAGES);

  try {
    let reply;
    if (provider === "openai") {
      if (!process.env.OPENAI_API_KEY) throw new Error("OPENAI_API_KEY is not set on the server.");
      reply = await callOpenAI(trimmedMessages);
    } else {
      if (!process.env.ANTHROPIC_API_KEY) throw new Error("ANTHROPIC_API_KEY is not set on the server.");
      reply = await callClaudeRouted(trimmedMessages);
    }

    res.status(200).json({ reply: reply || "I couldn't quite form an answer — could you try rephrasing?", provider });
  } catch (err) {
    console.error("chat.js error:", err);
    res.status(500).json({
      error: "Something went wrong talking to the model. Reach Ranjit directly at postranjitk@gmail.com if this keeps happening.",
    });
  }
}
