import React from "react";
import Footer from "../components/Footer.jsx";

const TAGLINE = "Experience Strategist.";
const PROFILE =
  "designing human-centered experiences that balance users, product strategy, and business outcomes across modern digital platforms.";

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
  "Methods & Management": ["Accessibility (WCAG)", "Design Thinking", "Problem Solving", "Empathy", "Product Strategy & Collaboration", "Leadership & Mentoring", "Design Systems"],
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
    <div className="hidden md:block w-full max-w-[420px] mx-auto">
      <img
        src="/aboutus-me.png"
        alt="Illustration of Ranjit sitting cross-legged, surrounded by labels for Product Vision, User Insights, Business Impact, UX Strategy, and Stakeholder Alignment"
        className="w-full h-auto select-none pointer-events-none animate-shakeVertical"
      />
    </div>
  );
}

/* Plain text list separated by dividers, grouped by category — no chips */
function SkillGroup({ group, items }) {
  return (
    <div>
      <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#14141A] mb-4">{group}</h3>
      <div className="flex flex-wrap gap-y-2">
        {items.map((s, i) => (
          <span
            key={s}
            className={`text-[14px] sm:text-[15px] text-[#43434D] px-3 first:pl-0 ${
              i !== items.length - 1 ? "border-r border-black/15" : ""
            }`}
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="animate-fadeIn w-full">
      {/* Full-screen hero */}
      <section className="md:min-h-[80vh] flex items-center px-4 sm:px-6 md:px-10 lg:px-16 py-10">
        <div className="w-full grid md:grid-cols-2 items-center gap-10 sm:gap-14">
          <div className="text-center md:text-left order-2 md:order-1">
            <p className="text-[22px] sm:text-[26px] md:text-[30px] text-[#17213E] tracking-tight leading-tight">
              <span className="font-light">I'm</span> <span className="font-bold">Ranjit</span>
            </p>
            <h1 className="mt-2 text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-bold text-[#DD9B21] tracking-tight leading-[1.05]">
              {TAGLINE}
            </h1>
            <p className="mt-5 text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed text-[#5B5B66] max-w-lg mx-auto md:mx-0">
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

      <section className="px-4 sm:px-6 md:px-10 lg:px-16 mt-16 sm:mt-20">
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
                <p className="text-[13px] sm:text-[14px] leading-relaxed text-[#6C6C76] max-w-3xl">{job.body}</p>
                {job.bullets && (
                  <ul className="mt-3 space-y-2 list-disc pl-4 max-w-3xl">
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

      <section className="px-4 sm:px-6 md:px-10 lg:px-16 mt-16 sm:mt-20">
        <h2 className="text-xl sm:text-2xl font-semibold text-[#14141A] mb-6 sm:mb-8">Skills</h2>
        <div className="space-y-8 sm:space-y-10">
          {Object.entries(SKILLS).map(([group, items]) => (
            <SkillGroup key={group} group={group} items={items} />
          ))}
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-10 lg:px-16 mt-16 sm:mt-20 pb-4">
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
