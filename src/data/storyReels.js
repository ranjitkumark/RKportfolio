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
    { text: "No configuration tools. No flexibility. <mark>No trust in the math.</mark>" },
    { text: "Employees stopped trusting the balance on their own screen." },
    {
      text: "I ran a field study with the team configuring benefits for <mark>1,500+ employees.</mark>",
      tag: "72 FAKE POPULATIONS",
    },
    {
      text: "It wasn’t a UI complaint. It was an entire <mark>shadow process</mark> nobody had documented.",
      tag: "72 FAKE POPULATIONS",
    },
    { text: "The math itself was quietly wrong — broken the moment anyone <mark>changed tiers</mark> mid-year." },
    { text: "So I mapped every downstream system a change could ripple into — <mark>before designing a single screen.</mark>" },
    { text: "...and rebuilt the calculation logic, the enrollment flow, and <mark>the trust</mark> that came with it." },
    { text: "64% preferred everything visible on one page. <mark>Visibility beat pacing.</mark>", tag: "90% FELT SECURE ENROLLING" },
    { text: "38 → 21 min on task. 179 → 97 tickets.", tag: "TRUST, REBUILT" },
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
    { text: "Campaigns took <mark>69 minutes</mark> to build — and admins still weren’t sure they’d sent the right one." },
    { text: "No centralized workspace. <mark>No visibility</mark> into what had already sent." },
    { text: "Admins were rebuilding the same email, campaign after campaign, with <mark>no reusable templates.</mark>" },
    { text: "<mark>Basic tasks</mark> took too many steps." },
    { text: "Access, efficiency, and smarter support — the same three gaps kept surfacing <mark>across every interview.</mark>" },
    { text: "So before touching a screen, I mapped every workflow admins were forced to <mark>string together by hand.</mark>" },
    { text: "...and rebuilt it into one hub — <mark>templates, scheduling, and tracking</mark> in a single place." },
    { text: "85% preferred the new stepper navigation <mark>over breadcrumbs.</mark>", tag: "100% TASK SUCCESS" },
    { text: "69 → 47 min on task. CSAT 2.9 → 4.1.", tag: "CSAT UP 41%" },
    { text: "Solving small problems can lead to meaningful impact.", quote: true },
  ],
};
