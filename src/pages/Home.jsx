import React from "react";
import { ArrowDown, FileText, Linkedin, BookOpen } from "lucide-react";
import CaseStudyCard from "../components/CaseStudyCard.jsx";
import Footer from "../components/Footer.jsx";
import { CASE_STUDIES } from "../data/caseStudies.js";

function TrafficLight() {
  return (
    <div className="mx-auto w-6 h-14 rounded-full bg-ink flex flex-col items-center justify-between py-2">
      <span className="w-2 h-2 rounded-full bg-red-500" />
      <span className="w-2 h-2 rounded-full bg-amber-400" />
      <span className="w-2 h-2 rounded-full bg-green-500" />
    </div>
  );
}

function LifeSection() {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-10 text-center">
      <h2 className="text-[22px] sm:text-[26px] font-semibold text-ink">Outside of work</h2>
      <p className="mt-3 text-[13px] sm:text-[14px] text-body leading-relaxed max-w-md mx-auto">
        A few things that keep me curious and grounded when I'm away from the screen.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {["Painting", "Reading", "Cooking", "Music", "Travelling"].map((tag) => (
          <span key={tag} className="text-[12px] text-body border border-black/10 rounded-full px-4 py-1.5">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-8 inline-flex flex-col items-start bg-card rounded-2xl px-6 py-5 text-left">
        <span className="text-[10px] tracking-wide text-muted font-semibold uppercase mb-2">Currently Reading</span>
        <span className="text-[15px] font-bold text-ink">Hooked</span>
        <span className="text-[11px] text-muted">How to Build Habit-Forming Products · Nir Eyal</span>
      </div>
    </section>
  );
}

function WorkSection() {
  return (
    <>
      <section id="work" className="max-w-3xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-10">
        <h2 className="text-[22px] sm:text-[26px] font-semibold text-ink">
          Lead UX Designer at <span className="text-accent">Plansource</span>
        </h2>
        <p className="mt-1.5 text-[12px] sm:text-[13px] italic text-muted">
          (ValueLabs, formerly Plansource Operations) · Jul 2021 – Present
        </p>
        <p className="mt-3 text-[13px] sm:text-[14px] text-body leading-relaxed max-w-xl">
          Shaping Plansource's core benefits platform end-to-end, cutting admin task time by 45% and lifting
          enrollment completion by 22%.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-10 space-y-14 sm:space-y-16">
        {CASE_STUDIES.map((study) => (
          <CaseStudyCard key={study.id} study={study} />
        ))}
      </section>

      <section className="relative max-w-3xl mx-auto px-4 sm:px-6 pt-16 pb-16 text-center overflow-hidden">
        <span className="pointer-events-none select-none absolute inset-x-0 top-0 text-[52px] sm:text-[76px] font-black tracking-tight text-black/[0.05] leading-none">
          ARCHIVE
        </span>
        <div className="relative">
          <h2 className="text-[20px] sm:text-[24px] font-semibold text-ink">
            Earlier Work <span className="text-muted font-normal">from a Decade</span>
          </h2>
          <p className="mt-2 text-[13px] text-body max-w-md mx-auto">
            A few more projects from further back - same discipline, different stops along the way.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-1 mt-4 text-[13px] text-accent font-medium hover:underline"
          >
            Browse the archive <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>
    </>
  );
}

export default function Home({ mode }) {
  return (
    <div className="animate-fadeIn">
      <section className="text-center px-4 pt-10 sm:pt-16 pb-6 max-w-2xl mx-auto">
        <h1 className="text-[30px] sm:text-[38px] md:text-[46px] font-semibold text-ink tracking-tight leading-tight">
          Hello, I'm <span className="font-bold text-accent">Ranjit.</span>
        </h1>
        <p className="mt-3 text-[12px] sm:text-[13px] font-semibold tracking-[0.15em] text-accent uppercase">
          UX Designer <span className="text-black/20 mx-1">|</span> B2B Enterprise SaaS
        </p>
        <p className="mt-5 text-[14px] sm:text-[15px] text-body leading-relaxed max-w-md mx-auto">
          Designing products at the intersection of user needs, business goals, and technology constraints.
        </p>
        <a
          href="#work"
          className="inline-flex items-center gap-1.5 mt-8 text-[11px] font-semibold tracking-[0.15em] uppercase text-muted hover:text-ink transition-colors"
        >
          <ArrowDown size={12} /> See the works
        </a>
      </section>

      {mode === "work" ? <WorkSection /> : <LifeSection />}

      <section className="max-w-xl mx-auto px-4 sm:px-6 py-14 text-center">
        <TrafficLight />
        <p className="mt-8 text-[17px] sm:text-[21px] leading-relaxed text-ink">
          A <span className="text-red-500 font-medium">traffic light</span> works because you never have to
          think about it. That's the whole job - earn that{" "}
          <span className="text-amber-500 font-medium">instant trust</span>. No hesitation, no guessing, just{" "}
          <span className="text-live font-medium">knowing</span>. Everything I design is in service of that
          one second.
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-1 mt-6 text-[11px] font-semibold tracking-[0.15em] uppercase text-muted hover:text-ink transition-colors"
        >
          Read my design philosophy <span aria-hidden="true">→</span>
        </a>
      </section>

      <section className="max-w-xl mx-auto px-4 sm:px-6 pt-10 pb-16 text-center">
        <h2 className="text-[26px] sm:text-[30px] font-semibold text-ink">Let's Talk.</h2>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[12px] sm:text-[13px] text-body">
          <a href="mailto:postranjitk@gmail.com" className="hover:text-ink transition-colors uppercase tracking-wide">
            postranjitk@gmail.com
          </a>
          <span className="text-black/20">|</span>
          <a href="tel:+919738729981" className="hover:text-ink transition-colors">
            +91-9738729981
          </a>
        </div>
        <div className="mt-5 flex items-center justify-center gap-5 text-[12px] text-muted">
          <a href="/ranjit-resume.pdf" download className="flex items-center gap-1.5 hover:text-ink transition-colors">
            <FileText size={13} /> Resume
          </a>
          <a
            href="https://www.linkedin.com/in/ranjit-kumar-kar-3a3b7931/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 hover:text-ink transition-colors"
          >
            <Linkedin size={13} /> LinkedIn
          </a>
          <a href="#" className="flex items-center gap-1.5 hover:text-ink transition-colors">
            <BookOpen size={13} /> Medium
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
