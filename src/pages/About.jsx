import React from "react";
import StackedCaseStudyCard from "../components/StackedCaseStudyCard.jsx";
import Footer from "../components/Footer.jsx";

const HIGHLIGHTS = [
  {
    id: "spending",
    badge: "PRODUCT DESIGN",
    badgeBg: "#D8F3EA",
    badgeText: "#0E8A66",
    title: "Spending Accounts",
    subtitle: "Health Savings Account Platform",
    body:
      "Led a full revamp of the HSA experience — simplified employer setup while keeping IRS compliance, cut admin task time from 38 to 21 minutes, and reduced support tickets by 38%. Helped win new clients, contributing to a 15% revenue increase.",
    stat: "+41%",
    statLabel: "CONTRIBUTION RATE",
    statColor: "#0E8A66",
    panelBg: "#4B7A72",
    mock: "hsa",
  },
  {
    id: "communication",
    badge: "UX RESEARCH",
    badgeBg: "#DCE7FB",
    badgeText: "#2452C4",
    title: "Communication",
    subtitle: "Messaging & Notification System",
    body:
      "Shipped prebuilt templates and automated messaging flows for employee communications — cut task time from 69 to 47 minutes and lifted feature CSAT from 2.9 to 4.1, improving clarity and consistency across the board.",
    stat: "4.1",
    statLabel: "CSAT (FROM 2.9)",
    statColor: "#2452C4",
    panelBg: "#CFE0FA",
    mock: "comm",
  },
  {
    id: "guided",
    badge: "PLATFORM",
    badgeBg: "#E4E7FA",
    badgeText: "#3F4FB8",
    title: "Guided Implementation",
    subtitle: "Employee Platform Redesign",
    body:
      "Redesigned the employee platform with a modern, responsive UI for web and native mobile — informed by research with partners, power users, and internal teams, then rolled out with guided onboarding support.",
    stat: "+23%",
    statLabel: "ENGAGEMENT",
    statColor: "#3F4FB8",
    panelBg: "#DCE0F5",
    mock: "platform",
  },
];

const EXPERIENCE = [
  {
    company: "PlanSource Operations",
    role: "Senior UX Designer",
    period: "Aug 2016 — Present",
    body:
      "Collaborate closely with product managers, product owners, and engineering to ensure smooth transitions from research through implementation. Led the redesign of the product design system for consistency, scalability, and accessibility.",
  },
  {
    company: "Dataway Solutions",
    role: "Senior UX Designer",
    period: "Earlier",
    body:
      "Turned complex workflows into simple, intuitive interactions — design sprints, user research, user flows, wireframes, and prototypes of varying fidelity, start to finish.",
  },
  {
    company: "Paskon Inc",
    role: "Sr. Web & Graphics Designer",
    period: "Oct 2013 — Jun 2016",
    body:
      "Part of the product team: low-fidelity prototypes, detailed mockups, design principles, web and graphics design.",
  },
  {
    company: "Wifi Networks",
    role: "Web & Graphics Designer",
    period: "Nov 2012 — Oct 2013",
    body:
      "Designed and delivered print ads, branding, web, email promotions, illustrations, iconography, and motion graphics.",
  },
];

const SKILLS = {
  "Research & Strategy": ["User Research", "Usability Testing", "Value Proposition", "Competitive Analysis", "Personas", "Journey Mapping", "UX Strategy"],
  "Design & Experience": ["Information Architecture", "Wireframing", "Interactive Prototyping", "Visual Design", "Iconography", "Web Development"],
  "Methods & Management": ["Accessibility (WCAG)", "Design Thinking", "Problem Solving", "Empathy", "Product Strategy", "Leadership & Mentoring", "Design Systems"],
};

const TOOLS = ["Figma", "Adobe CC", "Axure RP", "InVision", "HTML", "CSS", "JavaScript"];

/* ------------------------------------------------------------------ */
/* Hero illustration — meditating "product zen" character              */
/* ------------------------------------------------------------------ */
function HeroIllustration() {
  const bubbles = [
    { label: "Product Vision", style: "top-0 left-1/2 -translate-x-1/2" },
    { label: "User Insights", style: "top-[28%] left-0" },
    { label: "Business Impact", style: "top-[28%] right-0" },
    { label: "UX Strategy", style: "top-[52%] left-[6%]" },
    { label: "Stakeholder Alignment", style: "top-[52%] right-[2%]" },
  ];
  return (
    <div className="relative w-[280px] h-[280px] mx-auto">
      {bubbles.map((b) => (
        <span
          key={b.label}
          className={`absolute ${b.style} whitespace-nowrap bg-white border border-black/5 shadow-sm rounded-full px-3 py-1.5 text-[11px] font-medium text-[#43434D] z-10`}
        >
          {b.label}
        </span>
      ))}
      {/* character */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center">
        {/* head */}
        <div className="relative w-16 h-16 rounded-full bg-[#F4C9A0] mb-[-6px] z-[1]">
          <div className="absolute -top-2 left-0 right-0 h-9 rounded-t-full bg-[#2B2320]" />
          <div className="absolute bottom-3 left-3 w-9 h-6 rounded-full bg-[#2B2320]" />
        </div>
        {/* torso */}
        <div className="relative w-32 h-24 rounded-t-[40px] bg-white border border-black/5 flex items-start justify-center pt-3">
          <div className="w-6 h-1.5 rounded-full bg-[#17213E]/20" />
          {/* arms */}
          <span className="absolute left-[-18px] top-4 w-9 h-4 rounded-full bg-[#F4C9A0] rotate-[20deg]" />
          <span className="absolute right-[-18px] top-4 w-9 h-4 rounded-full bg-[#F4C9A0] -rotate-[20deg]" />
        </div>
        {/* crossed legs */}
        <div className="w-40 h-8 rounded-full bg-[#17213E] -mt-1" />
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="animate-fadeIn">
      <section className="px-4 sm:px-6 pt-4 sm:pt-8 pb-4 max-w-5xl mx-auto grid md:grid-cols-2 items-center gap-10">
        <div className="text-center md:text-left">
          <h1 className="text-[26px] sm:text-[32px] md:text-[44px] font-semibold text-[#14141A] tracking-tight leading-tight">
            Hello <span className="font-bold">I'm Ranjit - UX Designer</span>
          </h1>
          <p className="mt-4 text-[14px] sm:text-[15px] md:text-[16px] text-[#5B5B66] max-w-md mx-auto md:mx-0">
            Designing products at the intersection of user needs, business goals, and technology constraints.
          </p>
        </div>
        <HeroIllustration />
      </section>

      <section className="max-w-3xl mx-auto px-4 md:px-6 mt-12 sm:mt-16 space-y-6 sm:space-y-8">
        {HIGHLIGHTS.map((cs) => (
          <StackedCaseStudyCard key={cs.id} cs={cs} />
        ))}
      </section>

      <section className="max-w-3xl mx-auto px-4 md:px-6 mt-16 sm:mt-20">
        <h2 className="text-xl sm:text-2xl font-semibold text-[#14141A] mb-6">Experience</h2>
        <div className="space-y-8">
          {EXPERIENCE.map((job) => (
            <div key={job.company} className="border-t border-black/5 pt-6 grid sm:grid-cols-3 gap-3 sm:gap-6">
              <div>
                <div className="text-[15px] font-medium text-[#14141A]">{job.company}</div>
                <div className="text-[12px] text-[#9A9AA5] mt-0.5">{job.period}</div>
              </div>
              <div className="sm:col-span-2">
                <div className="text-[14px] font-medium text-[#43434D] mb-1.5">{job.role}</div>
                <p className="text-[13px] sm:text-[14px] leading-relaxed text-[#6C6C76]">{job.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 md:px-6 mt-16 sm:mt-20">
        <h2 className="text-xl sm:text-2xl font-semibold text-[#14141A] mb-6">Skills</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {Object.entries(SKILLS).map(([group, items]) => (
            <div key={group}>
              <div className="text-[12px] font-medium tracking-wide text-[#9A9AA5] mb-3 uppercase">{group}</div>
              <div className="flex flex-wrap gap-1.5">
                {items.map((s) => (
                  <span key={s} className="text-[12px] text-[#43434D] bg-[#F1F1F4] rounded-full px-3 py-1">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 md:px-6 mt-16 sm:mt-20 pb-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-[#14141A] mb-6">Tools</h2>
        <div className="flex flex-wrap gap-2">
          {TOOLS.map((t) => (
            <span
              key={t}
              className="text-[13px] text-[#14141A] bg-white border border-black/5 rounded-full px-4 py-2 shadow-sm"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
