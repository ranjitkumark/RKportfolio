import React from "react";
import Eyebrow from "../components/Eyebrow.jsx";
import { ReadMoreLink } from "../components/CaseStudyCard.jsx";

function PhotoBlock({ label }) {
  return (
    <div className="w-full max-w-[340px] aspect-[4/5] rounded-2xl bg-card border border-band/40 flex items-center justify-center text-center px-5 mx-auto md:mx-0">
      <span className="text-[12px] text-muted font-poppins">{label}</span>
    </div>
  );
}

function StoryRow({ photoLabel, title, children, reverse = false }) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center py-12 sm:py-16 border-t border-band/30`}>
      <div className={reverse ? "md:order-2" : ""}>
        <PhotoBlock label={photoLabel} />
      </div>
      <div className={reverse ? "md:order-1" : ""}>
        <h2 className="text-[24px] sm:text-[28px] font-semibold text-heading mb-3">{title}</h2>
        <div className="space-y-3 text-[15px] leading-relaxed text-body">{children}</div>
      </div>
    </div>
  );
}

export default function Life() {
  return (
    <div className="animate-fadeIn font-poppins">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-32">
        {/* HERO */}
        <div className="grid grid-cols-1 md:grid-cols-[340px_1fr] gap-8 md:gap-16 items-start pt-16 sm:pt-20 pb-16">
          <PhotoBlock label="[ Your photo here ]" />
          <div>
            <Eyebrow>Outside of Work</Eyebrow>
            <h1 className="text-[36px] sm:text-[48px] font-semibold text-heading mb-4">Outside the studio.</h1>
            <p className="text-[13px] font-medium text-accent uppercase tracking-wide mb-6">
              [ e.g. Son · Traveler · Sketcher · Reader — swap for your own ]
            </p>
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-body max-w-lg">
              [ A short paragraph in your own words — what you make or do when you're not designing. Their version:
              "I make things — with my hands, with words, with heat, with code — and I honestly can't stop." Write
              the version of that sentence that's actually true for you. ]
            </p>
            <div className="mt-5 inline-block text-[12px] font-mono text-live bg-live/10 border border-dashed border-live/40 rounded-lg px-4 py-3 max-w-lg">
              This whole page is a template — replace every bracketed line and photo block with your own.
            </div>
          </div>
        </div>

        <StoryRow photoLabel="[ Photo — parents / family of origin ]" title="The family I came from">
          <p>
            [ A line or two about your parents — who they are, what they gave you, or what shaped you before any of
            this was a career. Doesn't need to be long. Their equivalent line was two sentences. ]
          </p>
        </StoryRow>

        <StoryRow photoLabel="[ Photo — spouse / kids / the family you built ]" title="The family I built" reverse>
          <p>[ A line or two about the family you built — who they are, and what they mean to you. ]</p>
        </StoryRow>

        <StoryRow photoLabel="[ Photo — friends ]" title="The people who show up">
          <p>
            [ A line or two about your friends — who they are, how long you've known them, or what they mean to
            you. ]
          </p>
        </StoryRow>

        {/* WHAT I'M READING */}
        <div className="pt-12 sm:pt-16 border-t border-band/30">
          <h2 className="text-[24px] sm:text-[28px] font-semibold text-heading mb-6">What I'm reading</h2>
          {["[ Book title ]", "[ Book title ]", "[ Book title ]"].map((title, i) => (
            <div key={i} className="py-5 border-t border-band/30 last:border-b">
              <div className="text-[15px] font-medium text-heading">{title}</div>
              <div className="text-[12px] font-mono text-muted mt-1">[ Author ]</div>
            </div>
          ))}
        </div>

        {/* WHAT I WRITE */}
        <div className="py-12 sm:py-16 border-t border-band/30">
          <h2 className="text-[24px] sm:text-[28px] font-semibold text-heading mb-6">What I write</h2>
          {["[ Title of blog post 1 ]", "[ Title of blog post 2 ]", "[ Title of blog post 3 ]"].map((title, i) => (
            <a key={i} href="#" className="block py-5 border-t border-band/30 text-[15px] text-heading hover:text-accent transition-colors">
              {title}
            </a>
          ))}
          <a href="#" className="inline-block mt-6">
            <ReadMoreLink>Read more</ReadMoreLink>
          </a>
        </div>
      </div>
    </div>
  );
}
