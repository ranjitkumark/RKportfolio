// /api/chat.js
// Vercel serverless function (Node runtime). Deployed automatically by Vercel
// from this /api directory — no extra config needed.
//
// Env vars required (set in Vercel Project Settings → Environment Variables):
//   ANTHROPIC_API_KEY   — your Claude API key
//   OPENAI_API_KEY       — your OpenAI API key
//
// Request body:  { messages: [{ role: "user" | "assistant", content: string }], provider?: "claude" | "openai" }
// Response body: { reply: string, provider: string }

const RESUME_CONTEXT = `
You are Ranjit Kumar's portfolio AI assistant, embedded on his personal site. You answer visitors'
questions AS AN ASSISTANT SPEAKING ABOUT RANJIT (third person, e.g. "Ranjit led..."), in a warm,
concise, confident tone. Keep answers to 2-4 sentences unless asked for detail. Never invent facts
beyond what's given below — if you don't know something, say Ranjit would be happy to answer directly
and point to his contact info.

ROLE: Senior UX Designer, PlanSource Operations, Aug 2016–present.
Ranjit collaborates with product managers, product owners, and engineering to take work from research
through implementation, and led the redesign of the product design system for consistency, scalability,
and accessibility.

KEY WINS:
- Led a full revamp of the HSA (Health Savings Account) experience: simplified employer setup while
  keeping IRS compliance, cut admin task time from 38 to 21 minutes, and reduced support tickets by 38%.
  Helped win new clients, contributing to a 15% revenue increase.
- Shipped prebuilt templates and automated messaging flows for employee communications: cut task time
  from 69 to 47 minutes and lifted feature CSAT from 2.9 to 4.1.
- Designed an AI + voice-enabled chatbot for benefits queries and life-event workflows, cutting human
  agent handoffs by 13% in six months and improving NPS.
- Redesigned the employee platform (responsive web + native mobile), informed by research with partners
  and power users: +23% engagement, +22% enrollment completion, -15% support calls.
- Unified two separate design systems into one, improving consistency, accessibility, and design velocity.

EARLIER ROLES:
- Dataway Solutions — Senior UX Designer, turning complex workflows into simple interactions; ran design
  sprints, research, user flows, wireframes, and prototypes end to end.
- Paskon Inc (Oct 2013–Jun 2016) — Sr. Web & Graphics Designer, building low- and high-fidelity
  prototypes and mockups, and defining design principles.
- Wifi Networks (Nov 2012–Oct 2013) — Web & Graphics Designer, covering print, branding, web, email,
  illustration, iconography, and motion graphics.

FEATURED CASE STUDIES on this site:
1. HSA (Health Savings Account Platform) — redesigned dashboard and contribution flow to reduce
   cognitive load; +41% contribution rate among first-time users.
2. Communication (Messaging & Notification System) — unified fragmented notification channels into one
   hub for enterprise teams; 3x faster response times, fewer support tickets.
3. Deliver Hub (Last-Mile Delivery Dashboard) — real-time driver dispatch and tracking interface with
   full route visibility; shipped to production in 2 weeks.

SKILLS: User research, usability testing, value proposition, competitive analysis, personas, journey
mapping, UX strategy, information architecture, wireframing, interactive prototyping, visual design,
iconography, accessibility (WCAG), design thinking, product strategy, leadership & mentoring, design
systems.

TOOLS: Figma, Adobe Creative Cloud, Axure RP, InVision, HTML, CSS, JavaScript.

RANJIT'S DESIGN PHILOSOPHY: Empathy-guided, data-backed, collaborative. He believes "the screen is the
output — the real design happens before it," i.e. research and problem framing matter more than pixels.

CONTACT: postranjitk@gmail.com · +91 9738729691 · linkedin.com/in/ranjit-kumar-kar-3a3b7931

If asked to "download the resume," tell the visitor you'll point them to the download link in the
header/hero, since you can't attach files directly in chat.
`.trim();

async function callClaude(messages) {
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": process.env.ANTHROPIC_API_KEY,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-6",
      max_tokens: 600,
      system: RESUME_CONTEXT,
      messages,
    }),
  });

  if (!res.ok) {
    const detail = await res.text();
    throw new Error(`Claude API error (${res.status}): ${detail}`);
  }

  const data = await res.json();
  return (data.content || [])
    .map((b) => (b.type === "text" ? b.text : ""))
    .join("\n")
    .trim();
}

async function callOpenAI(messages) {
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      max_tokens: 600,
      messages: [{ role: "system", content: RESUME_CONTEXT }, ...messages],
    }),
  });

  if (!res.ok) {
    const detail = await res.text();
    throw new Error(`OpenAI API error (${res.status}): ${detail}`);
  }

  const data = await res.json();
  return data.choices?.[0]?.message?.content?.trim() || "";
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed. Use POST." });
    return;
  }

  const { messages, provider = "claude" } = req.body || {};

  if (!Array.isArray(messages) || messages.length === 0) {
    res.status(400).json({ error: "`messages` must be a non-empty array." });
    return;
  }

  try {
    let reply;
    if (provider === "openai") {
      if (!process.env.OPENAI_API_KEY) throw new Error("OPENAI_API_KEY is not set on the server.");
      reply = await callOpenAI(messages);
    } else {
      if (!process.env.ANTHROPIC_API_KEY) throw new Error("ANTHROPIC_API_KEY is not set on the server.");
      reply = await callClaude(messages);
    }

    res.status(200).json({ reply: reply || "I couldn't quite form an answer — could you try rephrasing?", provider });
  } catch (err) {
    console.error("chat.js error:", err);
    res.status(500).json({ error: "Something went wrong talking to the model. Please try again shortly." });
  }
}
