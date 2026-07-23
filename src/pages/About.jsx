import React from "react";
import StackedCaseStudyCard from "../components/StackedCaseStudyCard.jsx";
import Footer from "../components/Footer.jsx";

const PROFILE =
  "Senior/Lead UX Designer with 12+ years of experience designing intuitive, user-centered digital experiences across benefits management, IoT, AI, e-commerce, and decentralized (dApp) platforms. Skilled at translating complex, cross-functional requirements into scalable design solutions that improve usability, accessibility, and business outcomes.";

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
    company: "ValueLabs — Plansource Account",
    role: "Lead UX Designer",
    period: "Aug 2025 — Present",
    body:
      "Promoted to Lead UX Designer as the Plansource account transitioned to ValueLabs. Continue to partner closely with product managers, product owners, and engineering teams to drive UX from research through implementation, and lead the redesign and governance of the product design system to strengthen consistency, scalability, and accessibility platform-wide.",
  },
  {
    company: "Plansource Operations",
    role: "Senior UX Designer",
    period: "Jul 2021 — Aug 2025",
    body:
      "Partnered closely with product managers, product owners, and engineering teams to drive UX from research through implementation. Led the redesign and planning of the product design system to strengthen consistency, scalability, and accessibility platform-wide.",
    bullets: [
      "Spearheaded a complete overhaul of the HSA experience, simplifying employer setup and ensuring IRS compliance with clear contribution guidelines — cut average admin task time from 38 to 21 minutes and reduced support tickets by 38%.",
      "Engineered prebuilt templates and automated messaging flows that reduced average task time from 69 to 47 minutes and raised feature CSAT from 2.9 to 4.1.",
      "Designed and launched an AI- and voice-enabled chatbot to handle benefit queries and manage life-event workflows, reducing human agent handoffs by 13% within six months.",
      "Optimized the benefits enrollment flow through usability testing and research — driving a 22% increase in completion rates and cutting average task time by 30%.",
      "Unified two disparate design systems into a single framework, improving consistency, accessibility, and scalability while accelerating design decision-making.",
    ],
  },
  {
    company: "Dataway Solutions",
    role: "Senior UX Designer",
    period: "Aug 2016 — Jul 2021",
    body:
      "Led end-to-end UX design for high-impact government and IoT initiatives, including the design and development of a next-generation IoT platform.",
    bullets: [
      "Delivered the MeitY-funded “Emergency Citizen Safety” initiative, establishing a centralized command center at the Rajasthan Skill Center headquarters that monitored 2,300+ cameras in real time.",
      "Rolled out a face-recognition-based attendance system across approximately 400 skill centers, streamlining workforce tracking at scale.",
      "Earned the India Today Digital Trailblazer Award from the IT Minister in recognition of the initiative's digital innovation impact.",
    ],
  },
  {
    company: "Paskon Inc",
    role: "Sr. Web & Graphics Designer",
    period: "Oct 2013 — Jun 2016",
    body:
      "Contributed to the core product team, creating low-fidelity prototypes, detailed mockups, design principles, and web/graphic designs. Translated input from business and creative directors into simple, elegant design solutions.",
  },
  {
    company: "Wifi Networks",
    role: "Web & Graphics Designer",
    period: "Nov 2012 — Oct 2013",
    body:
      "Designed and delivered a range of projects including print ads, branding, web and email promotions, illustrations, iconography, and motion graphics videos.",
  },
  {
    company: "Startup from the Himalayas",
    role: "Design Consultant",
    period: "Independent",
    body:
      "Guided a startup's transformation into a lean, design-led organization aligned with the UN Sustainable Development Goals. Conducted user research and diary studies to ground decisions in real user needs, and led branding for a new product concept in partnership with the founder.",
  },
];

const SKILLS = {
  "Research & Strategy": ["User Research", "Usability Testing", "Value Proposition", "Competitive Analysis", "Personas", "Journey Mapping", "UX Strategy"],
  "Design & Experience": ["Information Architecture", "Wireframing", "Interactive Prototyping", "Visual Design", "Iconography", "Web Development"],
  "Methods & Management": ["Accessibility (WCAG)", "Design Thinking", "Problem Solving", "Empathy", "Leadership & Mentoring", "Product Strategy & Collaboration", "Design Systems"],
  "Software & Languages": ["Figma", "InVision", "Adobe CC", "Axure", "HTML", "CSS", "JavaScript"],
};

const EDUCATION = [
  { title: "Bachelor of Computer Applications", sub: "" },
  { title: "Professional Diploma in 3D", sub: "" },
  { title: "UX Certification", sub: "IXDF" },
];

/* ------------------------------------------------------------------ */
/* Hero — full-screen intro with the real illustration                 */
/* (the source image already has the "Product Vision" etc. labels)     */
/* ------------------------------------------------------------------ */
function HeroIllustration() {
  return (
    <div className="w-full max-w-[420px] mx-auto">
      <img
        src="/aboutus-me.png"
        alt="Illustration of Ranjit sitting cross-legged, surrounded by labels for Product Vision, User Insights, Business Impact, UX Strategy, and Stakeholder Alignment"
        className="w-full h-auto select-none pointer-events-none"
      />
    </div>
  );
}

export default function About() {
  return (
    <div className="animate-fadeIn">
      {/* Full-screen hero */}
      <section className="min-h-[85vh] sm:min-h-[80vh] flex items-center px-4 sm:px-6 md:px-10 lg:px-16 py-10">
        <div className="w-full max-w-5xl mx-auto grid md:grid-cols-2 items-center gap-10 sm:gap-14">
          <div className="text-center md:text-left order-2 md:order-1">
            <h1 className="text-[26px] sm:text-[34px] md:text-[42px] lg:text-[48px] font-semibold text-[#14141A] tracking-tight leading-tight">
              Hello <span className="font-bold">I'm Ranjit</span>
            </h1>
            <p className="mt-2 text-[15px] sm:text-[17px] md:text-[19px] text-[#43434D] font-medium">
              Lead UX Designer
            </p>
            <p className="mt-4 text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed text-[#5B5B66] max-w-md mx-auto md:mx-0">
              {PROFILE}
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-3">
              <a
                href="/ranjit-resume.pdf"
                download
                className="text-[13px] font-medium text-white bg-[#17213E] rounded-full px-5 py-2.5 shadow-sm hover:bg-[#232F55] transition-colors"
              >
                Download Resume ↓
              </a>
              <a
                href="mailto:postranjitk@gmail.com"
                className="text-[13px] font-medium text-[#43434D] bg-white border border-black/5 rounded-full px-5 py-2.5 shadow-sm hover:border-black/15 transition-colors"
              >
                Get in touch
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <HeroIllustration />
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 mt-4 sm:mt-8 space-y-6 sm:space-y-8">
        {HIGHLIGHTS.map((cs) => (
          <StackedCaseStudyCard key={cs.id} cs={cs} />
        ))}
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 mt-16 sm:mt-20">
        <h2 className="text-xl sm:text-2xl font-semibold text-[#14141A] mb-6 sm:mb-8">Experience</h2>
        <div className="space-y-8 sm:space-y-10">
          {EXPERIENCE.map((job) => (
            <div key={job.company + job.period} className="border-t border-black/5 pt-6 grid sm:grid-cols-3 gap-3 sm:gap-6">
              <div>
                <div className="text-[15px] font-medium text-[#14141A]">{job.company}</div>
                <div className="text-[12px] text-[#9A9AA5] mt-0.5">{job.period}</div>
              </div>
              <div className="sm:col-span-2">
                <div className="text-[14px] font-medium text-[#43434D] mb-1.5">{job.role}</div>
                <p className="text-[13px] sm:text-[14px] leading-relaxed text-[#6C6C76]">{job.body}</p>
                {job.bullets && (
                  <ul className="mt-3 space-y-2 list-disc pl-4">
                    {job.bullets.map((b, i) => (
                      <li key={i} className="text-[13px] sm:text-[14px] leading-relaxed text-[#6C6C76]">
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 mt-16 sm:mt-20">
        <h2 className="text-xl sm:text-2xl font-semibold text-[#14141A] mb-6 sm:mb-8">Skills</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
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

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 mt-16 sm:mt-20 pb-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-[#14141A] mb-6 sm:mb-8">Education & Certifications</h2>
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
          {EDUCATION.map((e) => (
            <div key={e.title} className="bg-white border border-black/5 rounded-2xl px-5 py-4 shadow-sm">
              <div className="text-[14px] font-medium text-[#14141A]">{e.title}</div>
              {e.sub && <div className="text-[12px] text-[#9A9AA5] mt-1">{e.sub}</div>}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
