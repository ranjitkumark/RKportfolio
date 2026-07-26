import React from "react";
import { ArrowDown, ArrowRight, Briefcase, Contact, Linkedin, Newspaper } from "lucide-react";
import CaseStudyCard, { ReadMoreLink } from "../components/CaseStudyCard.jsx";
import Footer from "../components/Footer.jsx";
import TrafficLight from "../components/TrafficLight.jsx";
import Life from "./Life.jsx";
import { CASE_STUDIES } from "../data/caseStudies.js";

function WorkSection() {
  return (
    <>
      <section id="work" className="w-full max-w-[1600px] mx-auto px-4 sm:px-32 pt-16 sm:pt-24 pb-10 font-poppins">
        <h2 className="text-[36px] leading-[44px] font-semibold text-heading">
          Lead UX Designer at <span className="text-accent">Plansource</span>
        </h2>
        <p className="mt-2 text-[14px] italic text-muted">
          (ValueLabs, formerly Plansource Operations) · Jul 2021 – Present
        </p>
        <p className="mt-3 text-[14px] leading-[20px] text-heading max-w-xl">
          Shaping Plansource's core benefits platform end-to-end. cutting admin task time by 45% and lifting
          enrollment completion by 22%.
        </p>
      </section>

      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-32 py-10 space-y-24">
        {CASE_STUDIES.map((study) => (
          <CaseStudyCard key={study.id} study={study} />
        ))}
      </section>

      <section className="relative w-full max-w-[1600px] mx-auto px-4 sm:px-32 pt-16 pb-16 overflow-hidden font-poppins">
        <span className="pointer-events-none select-none absolute left-4 sm:left-32 top-0 text-[64px] sm:text-[88px] font-black text-black/[0.04] dark:text-white/[0.05] leading-none">
          ARCHIVE
        </span>
        <div className="relative pt-10">
          <h2 className="text-[36px] leading-[40px] font-semibold text-heading">
            Earlier Work <span className="text-[#646464]">from a Decade</span>
          </h2>
          <p className="mt-3 text-[14px] leading-[20px] text-heading">
            A few more projects from further back - same discipline, different stops along the way.
          </p>
          <a href="#" className="inline-block mt-3">
            <ReadMoreLink>Browse the archive</ReadMoreLink>
          </a>
        </div>
      </section>
    </>
  );
}

export default function Home({ mode, onOpenPhilosophy, onOpenResume }) {
  return (
    <div className="animate-fadeIn font-poppins">
      {mode === "work" && (
        <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-32 text-center py-16 sm:py-[120px]">
          <h1 className="text-[36px] sm:text-[48px] md:text-[56px] leading-[1.2] md:leading-[84px] text-ink">
            Hello, I'm <span className="font-bold text-accent">Ranjit.</span>
          </h1>
          <div className="flex items-center justify-center gap-3 mt-5">
            <p className="text-[16px] sm:text-[18px] font-medium text-accent">UX DESIGNER</p>
            <span className="w-px h-[26px] bg-accent/40" />
            <p className="text-[16px] sm:text-[18px] font-medium text-accent">B2B ENTERPRISE SAAS</p>
          </div>
          <p className="mt-5 text-[16px] sm:text-[18px] leading-[28px] sm:leading-[32px] text-ink max-w-[515px] mx-auto">
            Designing products at the intersection of user needs, business goals, and technology constraints.
          </p>
          <a
            href="#work"
            className="inline-flex items-center gap-2 mt-8 text-[14px] font-medium text-accent hover:opacity-80 transition-opacity"
          >
            <ArrowDown size={13} /> SEE THE WORKS
          </a>
        </section>
      )}

      {mode === "work" ? <WorkSection /> : <Life />}

      {mode === "work" && (
        <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-32 py-[120px] text-center font-poppins">
          <TrafficLight />
          <p className="mt-6 mx-auto max-w-[760px] text-[22px] sm:text-[30px] leading-normal text-heading">
            “A <span className="text-[#c93728]">traffic light</span> works because you never
            <br className="hidden sm:block" /> have to think about it. That's the whole
            <br className="hidden sm:block" /> job- earn that <span className="text-[#d08d00]">instant trust.</span>
            <br className="hidden sm:block" /> No hesitation, no gusseing, Just <span className="text-[#2e6c4d]">knowing.</span>
            <br className="hidden sm:block" /> Everything I design is in service of that
            <br className="hidden sm:block" /> one second.”
          </p>
          <button
            type="button"
            onClick={onOpenPhilosophy}
            className="inline-flex items-center gap-2 mt-6 text-[14px] font-semibold text-accent hover:opacity-80 transition-opacity"
          >
            READ MY DESIGN PHILOSOPHY <ArrowRight size={14} />
          </button>
        </section>
      )}

      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-32 pt-5 pb-[60px] text-center font-poppins">
        <h2 className="text-[36px] sm:text-[40px] font-semibold text-heading">Let's Talk.</h2>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-[14px] text-body">
          <a href="mailto:postranjitk@gmail.com" className="hover:text-heading transition-colors">
            POSTRANJITK@GMAIL.COM
          </a>
          <span className="w-px h-[18px] bg-body/30" />
          <a href="tel:+919738729691" className="hover:text-heading transition-colors">
            +91-9738729691
          </a>
        </div>
        <div className="mt-8 flex items-center justify-center gap-10 text-[12px] tracking-[1px] text-accent">
          <button type="button" onClick={onOpenResume} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Contact size={12} /> RESUME
          </button>
          <a
            href="https://www.linkedin.com/in/ranjit-kumar-kar-3a3b7931/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Linkedin size={12} /> LINKEDIN
          </a>
          <a href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Newspaper size={12} /> MEDIUM
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
