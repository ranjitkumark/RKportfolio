import React from "react";
import { SectionHeading, PlaceholderImage } from "../components/CaseStudyKit.jsx";
import ArchiveCaseStudyShell from "../components/ArchiveCaseStudyShell.jsx";
import visualDesignImg from "../assets/case-studies/pashmina/visual-design.png";

const NAV_SECTIONS = [
  { id: "problem", label: "Problem" },
  { id: "roles", label: "Roles" },
  { id: "solution", label: "Solution" },
  { id: "visuals", label: "Visuals" },
];

export default function PashminaCaseStudy({ onClose }) {
  return (
    <ArchiveCaseStudyShell onClose={onClose} navSections={NAV_SECTIONS}>
      <h1 className="text-[32px] sm:text-[44px] leading-[1.15] font-semibold text-heading mb-2 max-w-3xl">
        PashminaGoat
      </h1>
      <p className="text-[14px] font-medium text-accent mb-6">E-commerce</p>
      <p className="text-[15px] sm:text-[16px] leading-relaxed text-body max-w-2xl">
        Bringing democratic, transparent principles to the authentic pashmina industry — translating trust for
        global consumers through technology.
      </p>
      <div className="flex flex-wrap gap-2 mt-6">
        {["Authentic luxury pashmina", "UNSDG", "Marketplace"].map((k) => (
          <span key={k} className="text-[12px] font-medium text-accent bg-accent/10 rounded-full px-3 py-1">
            {k}
          </span>
        ))}
      </div>

      <section id="problem" className="pt-16 pb-16 border-t border-band/30 mt-14">
        <SectionHeading eyebrow="Spot the trouble.">The problem</SectionHeading>
        <p className="text-[15px] leading-relaxed text-body">
          Fake and semi-authentic pashmina scarves were being sold worldwide, online and offline. Even where the
          product was genuine, the artisans making it rarely got their due for the work involved. Both consumers and
          makers lost out, with no transparency anywhere in the pashmina supply chain.
        </p>
      </section>

      <section id="roles" className="py-16 border-t border-band/30">
        <SectionHeading>Roles and responsibility</SectionHeading>
        <p className="text-[15px] leading-relaxed text-body">
          Interaction design, visual design, prototyping, UI design, iconography, and UI development.
        </p>
      </section>

      <section id="solution" className="py-16 border-t border-band/30">
        <SectionHeading eyebrow="A marketplace with a conscience.">The solution</SectionHeading>
        <p className="text-[15px] leading-relaxed text-body">
          An initial effort to put pure, authentic handmade pashmina on the world map — directly supporting several
          of the UN's 17 Sustainable Development Goals. Every purchase sends the buyer a thank-you note, certificate,
          or short video making clear that part of the profit went straight to the artisan, in whatever form served
          them most: a shelter, a child's school admission, support for an aging artisan.
        </p>
      </section>

      <section id="visuals" className="pt-16 pb-16">
        <SectionHeading eyebrow="What it looked like.">Visual design</SectionHeading>
        <p className="text-[15px] leading-relaxed text-body">
          Set in Baloo 2, with a warm off-white base and a considered black-and-accent palette to let the product
          photography — and the artisans behind it — carry the page.
        </p>
        <PlaceholderImage src={visualDesignImg} alt="PashminaGoat visual design" />
      </section>
    </ArchiveCaseStudyShell>
  );
}
