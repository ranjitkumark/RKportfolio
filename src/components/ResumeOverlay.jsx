import React, { useEffect } from "react";
import { X, Download } from "lucide-react";
import Eyebrow from "./Eyebrow.jsx";

const EXPERIENCE = [
  {
    role: "Senior UX Designer",
    company: "PlanSource Operations (ValueLabs)",
    dates: "Aug 2016 – Present",
    bullets: [
      "Led a full revamp of the HSA experience: simplified employer setup while keeping IRS compliance, cut admin task time from 38 to 21 minutes, and reduced support tickets by 38% — helped win new clients, contributing to a 15% revenue increase.",
      "Shipped prebuilt templates and automated messaging flows for employee communications: cut task time from 69 to 47 minutes and lifted feature CSAT from 2.9 to 4.1.",
      "Designed an AI + voice-enabled chatbot for benefits queries and life-event workflows, cutting human agent handoffs by 13% in six months and improving NPS.",
      "Redesigned the employee platform (responsive web + native mobile): +23% engagement, +22% enrollment completion, -15% support calls.",
      "Unified two separate design systems into one, improving consistency, accessibility, and design velocity.",
    ],
  },
  {
    role: "Senior UX Designer",
    company: "Dataway Solutions",
    dates: "",
    bullets: [
      "Turned complex workflows into simple interactions; ran design sprints, research, user flows, wireframes, and prototypes end to end.",
    ],
  },
  {
    role: "Sr. Web & Graphics Designer",
    company: "Paskon Inc",
    dates: "Oct 2013 – Jun 2016",
    bullets: ["Built low- and high-fidelity prototypes and mockups, and defined design principles."],
  },
  {
    role: "Web & Graphics Designer",
    company: "Wifi Networks",
    dates: "Nov 2012 – Oct 2013",
    bullets: ["Covered print, branding, web, email, illustration, iconography, and motion graphics."],
  },
];

const SKILLS = [
  "User research",
  "Usability testing",
  "Value proposition",
  "Competitive analysis",
  "Personas",
  "Journey mapping",
  "UX strategy",
  "Information architecture",
  "Wireframing",
  "Interactive prototyping",
  "Visual design",
  "Accessibility (WCAG)",
  "Design thinking",
  "Product strategy",
  "Leadership & mentoring",
  "Design systems",
];

const TOOLS = ["Figma", "Adobe Creative Cloud", "Axure RP", "InVision", "HTML", "CSS", "JavaScript"];

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
          <Eyebrow>Resume</Eyebrow>
          <h1 className="text-[28px] sm:text-[36px] font-semibold text-heading">Ranjit Kumar</h1>
          <p className="mt-1 text-[15px] sm:text-[16px] text-accent font-medium">
            Lead UX Designer · B2B Enterprise SaaS
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] text-body">
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
          </div>

          <a
            href="/ranjit-resume.pdf"
            download
            className="mt-6 inline-flex items-center gap-2 text-[13px] font-medium text-accent bg-card border border-accent rounded-[24px] px-4 py-2 hover:opacity-80 transition-opacity"
          >
            <Download size={13} />
            DOWNLOAD PDF
          </a>

          <div className="mt-10 pt-8 border-t border-band/30">
            <h2 className="text-[12px] font-semibold uppercase tracking-[0.06em] text-muted mb-6">Experience</h2>
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
                      <li key={j} className="flex gap-3 text-[14px] leading-relaxed text-body">
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
            <h2 className="text-[12px] font-semibold uppercase tracking-[0.06em] text-muted mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <span key={skill} className="text-[12px] text-body border border-band/40 rounded-full px-3.5 py-1.5">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-band/30">
            <h2 className="text-[12px] font-semibold uppercase tracking-[0.06em] text-muted mb-4">Tools</h2>
            <div className="flex flex-wrap gap-2">
              {TOOLS.map((tool) => (
                <span key={tool} className="text-[12px] text-body border border-band/40 rounded-full px-3.5 py-1.5">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#ced7d9] dark:border-white/10 py-8 flex items-center justify-center gap-3 font-poppins">
        <span className="bg-[#dee2e3] dark:bg-card border border-[#9fa6ab] dark:border-white/20 rounded text-[14px] text-body px-[9px] py-[2px]">
          ESC
        </span>
        <span className="text-[16px] font-medium text-body">CLOSE</span>
      </div>
    </div>
  );
}
