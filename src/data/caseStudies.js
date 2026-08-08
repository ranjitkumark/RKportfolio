import { HSA_REEL, COMMUNICATION_REEL } from "./storyReels.js";

export const CASE_STUDIES = [
  {
    id: "one-path-not-five",
    status: "LIVE",
    title: "One Path, Not Five",
    suffix: " - decades-old configuration, rebuilt as a single destination",
    href: "#",
  },
  {
    id: "setup-to-enrolled",
    status: "LIVE",
    title: "Setup to Enrolled",
    suffix: "- HSA rebuilt end-to-end, from employer configuration to employee enrollment",
    href: "#",
    reel: HSA_REEL,
    hasPage: true,
  },
  {
    id: "one-setup-every-channel",
    status: "LIVE",
    title: "One Setup, Every Channel",
    suffix: " - a single hub for enrollment updates, employee communications, and PWA push notifications",
    href: "#",
    reel: COMMUNICATION_REEL,
    hasPage: true,
  },
  {
    id: "one-click-every-answer",
    status: "LIVE",
    title: "One Click, Every Answer",
    suffix: " - a chatbot for benefit questions, HSA balance, adding a dependent, and everything in between",
    href: "#",
  },
];
