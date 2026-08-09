import React, { useEffect } from "react";
import { X, Download } from "./icons.jsx";

const PROFILE =
  "Senior/Lead UX Designer with 12+ years of experience designing intuitive, user-centered digital experiences across benefits management, IoT, AI, e-commerce, and decentralized (dApp) platforms. Skilled at translating complex, cross-functional requirements into scalable design solutions that improve usability, accessibility, and business outcomes. Proven track record of driving measurable gains in task efficiency, completion rates, and customer satisfaction through research-led design and design-system leadership.";

const EXPERIENCE = [
  {
    role: "Lead UX Designer",
    company: "ValueLabs — Plansource Account",
    dates: "Aug 2025 – Present",
    bullets: [
      "Promoted to Lead UX Designer as the Plansource account transitioned to ValueLabs. Continue to partner closely with product managers, product owners, and engineering teams to drive UX from research through implementation, and lead the redesign and governance of the product design system to strengthen consistency, scalability, and accessibility platform-wide.",
    ],
  },
  {
    role: "Senior UX Designer",
    company: "Plansource Operations",
    dates: "Jul 2021 – Aug 2025",
    bullets: [
      "Partnered closely with product managers, product owners, and engineering teams to drive UX from research through implementation. Led the redesign and planning of the product design system to strengthen consistency, scalability, and accessibility platform-wide.",
      "Spearheaded a complete overhaul of the HSA experience, simplifying employer setup and ensuring IRS compliance with clear contribution guidelines — cut average admin task time from 38 to 21 minutes and reduced support tickets by 38%.",
      "Engineered prebuilt templates and automated messaging flows that reduced average task time from 69 to 47 minutes and raised feature CSAT from 2.9 to 4.1, while improving clarity and consistency in employee communications.",
      "Designed and launched an AI- and voice-enabled chatbot to handle benefit queries and manage life-event workflows, reducing human agent handoffs by 13% within six months and improving support efficiency and user satisfaction.",
      "Optimized the benefits enrollment flow through usability testing and research, streamlining navigation and reducing friction — driving a 22% increase in completion rates, enhancing the onboarding experience, and cutting average task time by 30%.",
      "Unified two disparate design systems into a single framework, establishing principles that improved consistency, accessibility, and scalability while accelerating design decision-making.",
    ],
  },
  {
    role: "Senior UX Designer",
    company: "Dataway Solutions",
    dates: "Aug 2016 – Jul 2021",
    bullets: [
      "Led end-to-end UX design for high-impact government and IoT initiatives, including the design and development of a next-generation IoT platform.",
      "Delivered the MeitY-funded “Emergency Citizen Safety” initiative, establishing a centralized command center at the Rajasthan Skill Center headquarters that monitored 2,300+ cameras in real time.",
      "Rolled out a face-recognition-based attendance system across approximately 400 skill centers, streamlining workforce tracking at scale.",
      "Earned the India Today Digital Trailblazer Award from the IT Minister in recognition of the initiative's digital innovation impact.",
    ],
  },
  {
    role: "Sr. Web & Graphics Designer",
    company: "Paskon Inc",
    dates: "Oct 2013 – Jun 2016",
    bullets: [
      "Contributed to the core product team, creating low-fidelity prototypes, detailed mockups, design principles, and web/graphic designs.",
      "Translated input from business and creative directors into simple, elegant design solutions, collaborating closely with product managers, developers, and marketing teams.",
    ],
  },
  {
    role: "Web & Graphics Designer",
    company: "Wifi Networks",
    dates: "Nov 2012 – Oct 2013",
    bullets: [
      "Designed and delivered a range of projects including print ads, branding, web and email promotions, illustrations, iconography, and motion graphics videos.",
    ],
  },
  {
    role: "Design Consultant",
    company: "Startup from the Himalayas",
    dates: "",
    bullets: [
      "Guided a startup's transformation into a lean, design-led organization aligned with the United Nations Sustainable Development Goals (UN SDGs).",
      "Conducted user research and diary studies to ground decisions in real user needs, accelerating design cycles and strengthening adoption.",
      "Led branding for a new product concept and partnered with the founder to shape the product vision and roadmap, accelerating time-to-market.",
    ],
  },
];

const SKILL_GROUPS = [
  {
    label: "Research & Strategy",
    items: ["User Research", "Usability Testing", "Value Proposition", "Competitive Analysis", "Personas", "Journey Mapping", "UX Strategy"],
  },
  {
    label: "Design & Experience",
    items: ["Information Architecture", "Wireframing", "Interactive Prototyping", "Visual Design", "Iconography", "Web Development"],
  },
  {
    label: "Methods & Management",
    items: ["Accessibility (WCAG)", "Design Thinking", "Problem Solving", "Empathy", "Leadership & Mentoring", "Product Strategy & Collaboration", "Design Systems"],
  },
  {
    label: "Software & Languages",
    items: ["Figma", "InVision", "Adobe CC", "Axure", "HTML", "CSS", "JavaScript"],
  },
];

const EDUCATION = ["Bachelor of Computer Applications", "Professional Diploma in 3D", "UX Certification (IXDF)"];

export default function ResumeOverlay({ onClose }) {
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 bg-mint flex flex-col animate-fadeIn font-poppins">
      <button
        type="button"
        onClick={onClose}
        aria-label="Close resume"
        className="absolute top-5 right-5 sm:top-8 sm:right-10 w-8 h-8 rounded-full bg-[#484848] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
      >
        <X size={14} />
      </button>

      <div className="flex-1 overflow-y-auto px-5 sm:px-10 pt-16 sm:pt-14 pb-10">
        <div className="max-w-3xl mx-auto w-full">
          <h1 className="text-[28px] sm:text-[36px] font-semibold text-heading">Ranjit Kumar</h1>
          <p className="mt-1 text-[15px] sm:text-[16px] text-accent font-medium">Lead UX Designer</p>

          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] text-heading">
            <a href="mailto:postranjitk@gmail.com" className="hover:text-heading transition-colors">
              postranjitk@gmail.com
            </a>
            <span className="w-px h-[14px] bg-body/30" />
            <a href="tel:+919738729691" className="hover:text-heading transition-colors">
              +91-9738729691
            </a>
            <span className="w-px h-[14px] bg-body/30" />
            <a
              href="https://www.linkedin.com/in/ranjit-kumar-kar-3a3b7931/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-heading transition-colors"
            >
              LinkedIn
            </a>
            <span className="w-px h-[14px] bg-body/30" />
            <a href="https://www.ranjitkumar.me" target="_blank" rel="noreferrer" className="hover:text-heading transition-colors">
              www.ranjitkumar.me
            </a>
          </div>

          <p className="mt-6 text-[14px] leading-relaxed text-heading max-w-2xl">{PROFILE}</p>

          <a
            href="/ranjit-resume.pdf"
            download
            className="mt-6 inline-flex items-center gap-2 text-[13px] font-medium text-accent bg-card border border-accent rounded-[24px] px-4 py-2 hover:opacity-80 transition-opacity"
          >
            <Download size={13} />
            DOWNLOAD PDF
          </a>

          <div className="mt-10 pt-8 border-t border-band/30">
            <h2 className="text-[12px] font-semibold uppercase tracking-[0.06em] text-muted mb-6">
              Professional Experience
            </h2>
            <div className="space-y-8">
              {EXPERIENCE.map((job, i) => (
                <div key={i} className={i > 0 ? "pt-8 border-t border-band/30" : ""}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-[16px] sm:text-[17px] font-semibold text-heading">{job.role}</h3>
                    {job.dates && <span className="text-[12px] font-mono text-muted">{job.dates}</span>}
                  </div>
                  <p className="text-[13px] text-accent font-medium mt-0.5">{job.company}</p>
                  <ul className="mt-3 space-y-2">
                    {job.bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-3 text-[14px] leading-relaxed text-heading">
                        <span className="w-1.5 h-1.5 rounded-full bg-live shrink-0 mt-2" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-band/30">
            <h2 className="text-[12px] font-semibold uppercase tracking-[0.06em] text-muted mb-5">Skills</h2>
            <div className="space-y-4">
              {SKILL_GROUPS.map((group) => (
                <div key={group.label}>
                  <p className="text-[12px] font-semibold text-heading mb-2">{group.label}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span key={skill} className="text-[12px] text-heading border border-band/40 rounded-full px-3.5 py-1.5">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-band/30 pb-2">
            <h2 className="text-[12px] font-semibold uppercase tracking-[0.06em] text-muted mb-4">
              Education & Certifications
            </h2>
            <ul className="space-y-2">
              {EDUCATION.map((item) => (
                <li key={item} className="flex gap-3 text-[14px] text-heading">
                  <span className="w-1.5 h-1.5 rounded-full bg-live shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[#ced7d9] dark:border-white/10 py-8 flex items-center justify-center gap-3 font-poppins">
        <span className="bg-[#dee2e3] dark:bg-card border border-[#9fa6ab] dark:border-white/20 rounded text-[14px] text-heading px-[9px] py-[2px]">
          ESC
        </span>
        <span className="text-[16px] font-medium text-heading">CLOSE</span>
      </div>
    </div>
  );
}
