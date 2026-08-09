import React from "react";
import { ArrowDown, ArrowRight, Briefcase } from "../components/icons.jsx";
import CaseStudyCard, { ReadMoreLink } from "../components/CaseStudyCard.jsx";
import Footer from "../components/Footer.jsx";
import FooterLife from "../components/FooterLife.jsx";
import LetsTalk from "../components/LetsTalk.jsx";
import TrafficLight from "../components/TrafficLight.jsx";
import Life from "./Life.jsx";
import { CASE_STUDIES } from "../data/caseStudies.js";

function WorkSection({ onOpenArchive, onOpenCaseStudy }) {
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
          <CaseStudyCard key={study.id} study={study} onOpenCaseStudy={onOpenCaseStudy} />
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
          <button type="button" onClick={onOpenArchive} className="inline-block mt-3">
            <ReadMoreLink>Browse the archive</ReadMoreLink>
          </button>
        </div>
      </section>
    </>
  );
}

export default function Home({ mode, onOpenPhilosophy, onOpenResume, onOpenArchive, onOpenCaseStudy }) {
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
            className="inline-flex items-center gap-2 mt-8 h-10 text-[13px] font-medium tracking-wide text-accent bg-card border border-accent rounded-full px-5 hover:opacity-80 transition-opacity"
          >
            SEE THE WORKS <ArrowDown size={13} />
          </a>
        </section>
      )}

      {mode === "work" ? (
        <WorkSection onOpenArchive={onOpenArchive} onOpenCaseStudy={onOpenCaseStudy} />
      ) : (
        <Life />
      )}

      {mode === "work" && (
        <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-32 py-[120px] text-center font-poppins">
          <TrafficLight />
          <p className="mt-6 mx-auto max-w-[760px] text-[22px] sm:text-[30px] leading-normal text-heading">
            “A <span className="text-[#c93728]">traffic light</span> works because you never
            <br className="hidden sm:block" /> have to think about it. That's the whole
            <br className="hidden sm:block" /> job- earn that <span className="text-[#DB7B2B]">instant trust.</span>
            <br className="hidden sm:block" /> No hesitation, no gusseing, Just <span className="text-[#2e6c4d]">knowing.</span>
            <br className="hidden sm:block" /> Everything I design is in service of that
            <br className="hidden sm:block" /> one second.”
          </p>
          <button
            type="button"
            onClick={onOpenPhilosophy}
            className="inline-flex items-center gap-2 mt-6 h-10 text-[13px] font-semibold tracking-wide text-accent bg-card border border-accent rounded-full px-5 hover:opacity-80 transition-opacity"
          >
            READ MY DESIGN PHILOSOPHY <ArrowRight size={14} />
          </button>
        </section>
      )}

      <LetsTalk onOpenResume={onOpenResume} padding={mode === "work" ? "sm:px-32" : "sm:px-48"} />

      {mode === "work" ? <Footer /> : <FooterLife />}
    </div>
  );
}
