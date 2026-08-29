export const DELIVERY_HUB_REEL = {
  mock: {
    avatar: "DH",
    title: "Delivery Hub",
    subtitle: "32 modules · Plan Year 2026",
    rows: [
      { badge: "DB", name: "Define Benefits", sub: "Validated · no errors", time: "Now", pulse: true },
      { badge: "BP", name: "Benefit Plans", sub: "2 warnings found", time: "3m", pulse: true },
      { badge: "CO", name: "Define Costs", sub: "Blocked — plans required", time: "12m", pulse: false },
      { badge: "BR", name: "Branding & Styling", sub: "Contrast check failed", time: "1h", pulse: false },
    ],
  },
  beats: [
    { text: "The core hadn't been redesigned in a decade — <mark>the same setting</mark> could be changed in three places, under three different rules." },
    {
      text: "Completion was a self-attested checkbox. A step could be marked done while being wrong — <mark>and surface weeks later,</mark> at testing.",
      tag: "35% OF EFFORT WAS CONFIG + QA",
    },
    {
      text: "Branding lived in four destinations across two design eras. One live client's brand color scored <mark>1.87:1</mark> against AA's required 4.5:1 — and nothing in the product could tell them.",
      tag: "4 DESTINATIONS, 1 BRAND",
    },
    { text: "So I turned a terminal checkbox into an <mark>ambient validation panel</mark> — visible while you work, linking straight to the step that caused it." },
    { text: "Modernity isn't usability. Accordions and card grids both replaced tables — and both made the work slower. <mark>I reverted to tables, twice.</mark>" },
    { text: "70 → 90 → 160 days across small, medium, and large clients. <mark>Roughly two months</mark> off a large implementation.", tag: "20–36% FASTER" },
    {
      text: "The most valuable finding was the cheapest to produce — someone just had to open all four screens and write down what each one claimed.",
      quote: true,
    },
  ],
};

export const HSA_REEL = {
  mock: {
    avatar: "HS",
    title: "HSA Console",
    subtitle: "Live recalculation",
    rows: [
      { badge: "D", name: "Dana K.", sub: "Switched PPO → HDHP", time: "2m", pulse: true },
      { badge: "M", name: "Marcus T.", sub: "YTD contribution recalculated", time: "15m", pulse: true },
      { badge: "A", name: "Admin", sub: "Mid-year tier change applied", time: "1h", pulse: false },
      { badge: "P", name: "Priya S.", sub: "Enrollment confirmed", time: "2h", pulse: false },
    ],
  },
  beats: [
    { text: "The most bugs, and <mark>the least trust</mark>, of any benefit we offered." },
    { text: "No configuration tools, no flexibility — employees stopped trusting <mark>the balance on their own screen.</mark>" },
    {
      text: "I ran a field study with the team, and found an entire shadow process — <mark>72 fake employee populations</mark> nobody had documented.",
      tag: "72 FAKE POPULATIONS",
    },
    { text: "The math itself was quietly wrong — broken the moment anyone <mark>changed tiers</mark> mid-year." },
    {
      text: "So I mapped every downstream system before designing a screen — then rebuilt the calculation logic, the enrollment flow, and <mark>the trust</mark> that came with it.",
    },
    { text: "64% preferred everything visible on one page. 38 → 21 min on task. <mark>179 → 97 tickets.</mark>", tag: "TRUST, REBUILT" },
    {
      text: "This was never really a UI problem. It was a trust problem — dressed up as a calculation error.",
      quote: true,
    },
  ],
};

export const COMMUNICATION_REEL = {
  mock: {
    avatar: "CH",
    title: "Campaign Hub",
    subtitle: "4 campaigns live",
    rows: [
      { badge: "AE", name: "Annual Enrollment", sub: "Reminder — Sent", time: "2m", pulse: true },
      { badge: "NH", name: "New Hire", sub: "Welcome series — Scheduled", time: "15m", pulse: true },
      { badge: "LE", name: "Life Event", sub: "Update template ready", time: "1h", pulse: false },
      { badge: "OE", name: "Open Enrollment", sub: "Digest — Delivered", time: "2h", pulse: false },
    ],
  },
  beats: [
    { text: "Campaigns took <mark>69 minutes</mark> to build — and admins still weren't sure they'd sent the right one." },
    {
      text: "No centralized workspace, no visibility into what had already sent — admins rebuilding the same email, campaign after campaign, with <mark>no reusable templates.</mark>",
    },
    {
      text: "Basic tasks took too many steps. Access, efficiency, and smarter support were the same <mark>three gaps</mark> surfacing across every interview.",
      tag: "3 RECURRING THEMES",
    },
    {
      text: "So before touching a screen, I mapped every manual workflow — then rebuilt it into one hub: <mark>templates, scheduling, and tracking</mark> in a single place.",
    },
    { text: "85% preferred the new stepper navigation <mark>over breadcrumbs.</mark>", tag: "100% TASK SUCCESS" },
    { text: "69 → 47 min on task. CSAT 2.9 → 4.1.", tag: "CSAT UP 41%" },
    { text: "Solving small problems can lead to meaningful impact.", quote: true },
  ],
};

export const CHATBOT_REEL = {
  mock: {
    avatar: "AI",
    title: "AI Virtual Assistant",
    subtitle: "Benefits specialist",
    rows: [
      { badge: "?", name: "Am I eligible for dental?", sub: "User", time: "now", pulse: true },
      { badge: "AI", name: "Let's check your eligibility", sub: "Assistant replied", time: "now", pulse: false },
    ],
  },
  beats: [
    { text: "The chatbot was live. Employees asked once, got nothing, and <mark>emailed HR instead.</mark>" },
    {
      text: "All five test scenarios failed — and even when it found the right answer, it <mark>still left people stuck.</mark>",
      tag: "5/5 SCENARIOS FAILED",
    },
    {
      text: "It correctly parsed a typo'd question, answered accurately — and still failed. <mark>No acknowledgment, no empathy,</mark> just a mechanical reply.",
    },
    {
      text: "This wasn't one problem — model and design, wearing the same failure. So I reframed it as a <mark>specialist Benefits Assistant,</mark> and withheld the permanent “talk to a human” button, betting on recovery instead.",
      tag: "8 ESCALATION TRIGGERS",
    },
    {
      text: "76% wanted the assistant to <mark>try again</mark> before asking what went wrong — and 64% expected a human the moment they failed twice.",
      tag: "76% WANTED RECOVERY FIRST",
    },
    { text: "Adoption up. Escalations down. <mark>Confidence, rebuilt</mark> — one honest recovery at a time." },
    { text: "Trust is built through recovery, not perfection.", quote: true },
  ],
};
