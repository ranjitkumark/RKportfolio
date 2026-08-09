import React, { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import LetsTalk from "./LetsTalk.jsx";
import Footer from "./Footer.jsx";

export function Quote({ children }) {
  return (
    <div className="flex gap-4 my-8">
      <div className="w-1 shrink-0 rounded-full bg-accent/40" />
      <p className="text-[18px] sm:text-[20px] italic leading-relaxed text-heading">{children}</p>
    </div>
  );
}

export function SectionHeading({ eyebrow, children }) {
  return (
    <h2 className="text-[28px] sm:text-[34px] font-semibold text-heading mb-6">
      {children}
      {eyebrow && <span className="block text-[16px] sm:text-[18px] font-normal italic text-muted mt-1">{eyebrow}</span>}
    </h2>
  );
}

export function SubHeading({ children }) {
  return <h3 className="text-[15px] sm:text-[16px] font-semibold text-heading mt-8 mb-3">{children}</h3>;
}

export function Label({ children }) {
  return (
    <span className="block text-[11px] font-semibold uppercase tracking-[0.08em] text-accent mb-2">{children}</span>
  );
}

export function List({ items }) {
  return (
    <ul className="space-y-2.5 text-left">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-[14.5px] leading-relaxed text-body">
          <span className="w-1.5 h-1.5 rounded-full bg-live shrink-0 mt-2" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function PlaceholderImage({ src, alt }) {
  return (
    <div className="mt-6 rounded-2xl overflow-hidden border border-band/40 bg-card">
      <img src={src} alt={alt} className="w-full h-auto" />
    </div>
  );
}

export function IssueCard({ title, children }) {
  return (
    <div className="bg-card border border-band/30 rounded-xl p-4 text-left">
      <p className="text-[14px] font-semibold text-heading mb-1.5">{title}</p>
      <p className="text-[13.5px] leading-relaxed text-body">{children}</p>
    </div>
  );
}

export function TextColumn({ title, children }) {
  return (
    <div className="text-left">
      <p className="text-[13px] font-semibold text-heading mb-2">{title}</p>
      {children}
    </div>
  );
}

export function StatGrid({ stats, cols = 2 }) {
  const colsClass = cols === 4 ? "sm:grid-cols-4" : cols === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2";
  return (
    <div className={`grid grid-cols-2 ${colsClass} gap-6 mt-4`}>
      {stats.map((stat) => (
        <div key={stat.label}>
          <p className="text-[22px] sm:text-[26px] font-bold text-accent font-poppins leading-none">{stat.value}</p>
          <p className="text-[12px] text-muted mt-2 leading-snug">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

export function useScrollSpy(sectionIds, enabled) {
  const [active, setActive] = useState(sectionIds[0]);

  useEffect(() => {
    if (!enabled) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled]);

  return active;
}

export function CaseStudyNav({ sections, active }) {
  return (
    <nav className="hidden md:block sticky top-1/2 -translate-y-1/2">
      <ul className="space-y-1 border-l border-band/40 text-left">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={`block pl-4 py-1.5 text-[13px] font-medium -ml-px border-l-2 transition-colors ${
                active === section.id ? "border-accent text-accent" : "border-transparent text-muted hover:text-heading"
              }`}
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function CaseStudyPageShell({ onBack, onOpenResume, view, setView, children }) {
  return (
    <div className="animate-fadeIn font-poppins min-h-screen">
      <div className="fixed top-0 inset-x-0 z-40 h-16 sm:h-20 flex items-center justify-center backdrop-blur-sm">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-2 text-[13px] font-semibold text-white bg-navy rounded-full px-4 py-2 hover:opacity-90 transition-opacity shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
        >
          <ArrowLeft size={14} />
          BACK
        </button>
      </div>

      <div className="w-full max-w-[1360px] mx-auto px-6 sm:px-10 pt-24 sm:pt-28 pb-20 sm:pb-28">
        <div className="inline-flex items-center bg-card border border-band/40 rounded-full p-1 mb-10">
          <button
            type="button"
            onClick={() => setView("skim")}
            className={`text-[12px] font-semibold uppercase tracking-wide px-4 py-1.5 rounded-full transition-colors ${
              view === "skim" ? "bg-navy text-white" : "text-muted hover:text-heading"
            }`}
          >
            Skim
          </button>
          <button
            type="button"
            onClick={() => setView("full")}
            className={`text-[12px] font-semibold uppercase tracking-wide px-4 py-1.5 rounded-full transition-colors ${
              view === "full" ? "bg-navy text-white" : "text-muted hover:text-heading"
            }`}
          >
            Full
          </button>
        </div>

        {children}
      </div>

      <LetsTalk onOpenResume={onOpenResume} />
      <Footer />
    </div>
  );
}
