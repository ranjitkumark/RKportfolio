// /api/select-context.js
// Decides which case-study deep dives to include in a given request, based on what the
// conversation has actually touched. The alias map is plain data — tune it here without
// reading the matching logic below.

export const CASE_STUDY_ALIASES = {
  deliveryHub: [
    "delivery hub",
    "guided implementation",
    "one path",
    "onboarding",
    "implementation",
    "configuration",
    "branding",
    "legacy",
    "design system adoption",
  ],
  hsa: [
    "hsa",
    "setup to enrolled",
    "health savings",
    "compliance",
    "irs",
    "contribution",
    "tax",
    "proration",
    "enrollment",
  ],
  communication: [
    "communication",
    "one setup every channel",
    "campaign",
    "template",
    "messaging",
    "notification",
    "heuristic",
    "nielsen",
    "usability test",
  ],
  chatbot: [
    "chatbot",
    "one click every answer",
    "virtual assistant",
    "ai ux",
    "conversational",
    "escalation",
    "voice",
    "trust",
  ],
};

const MAX_CASE_STUDIES = 2;
const LOOKBACK_MESSAGES = 3;

// Message content is either a plain string or an array of Claude-style content blocks
// (used when an image is attached) — pull the text out of either shape.
export function extractText(content) {
  if (typeof content === "string") return content;
  if (Array.isArray(content)) {
    return content
      .filter((block) => block && block.type === "text" && typeof block.text === "string")
      .map((block) => block.text)
      .join(" ");
  }
  return "";
}

// Looks at the last few user messages (not just the newest) so a follow-up like "why did
// that work?" keeps the case study from the previous turn loaded. Matches against generous
// aliases since visitors won't use internal project names. Caps at two studies, keeping the
// ones with the most keyword hits if more than two match.
export function selectCaseStudies(messages) {
  const userMessages = (messages || []).filter((m) => m.role === "user").slice(-LOOKBACK_MESSAGES);
  const haystack = userMessages
    .map((m) => extractText(m.content).toLowerCase())
    .join(" \n ");

  if (!haystack.trim()) return [];

  const scored = Object.entries(CASE_STUDY_ALIASES)
    .map(([key, aliases]) => {
      const hits = aliases.reduce((count, alias) => (haystack.includes(alias) ? count + 1 : count), 0);
      return { key, hits };
    })
    .filter((entry) => entry.hits > 0)
    .sort((a, b) => b.hits - a.hits);

  return scored.slice(0, MAX_CASE_STUDIES).map((entry) => entry.key);
}
