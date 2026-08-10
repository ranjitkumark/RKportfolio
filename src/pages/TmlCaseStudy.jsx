import React from "react";
import { SectionHeading, SubHeading, Label, List, PlaceholderImage } from "../components/CaseStudyKit.jsx";
import ArchiveCaseStudyShell from "../components/ArchiveCaseStudyShell.jsx";
import visualDesignImg from "../assets/case-studies/tml/visual-design.png";

const NAV_SECTIONS = [
  { id: "problem", label: "Problem" },
  { id: "research", label: "Research" },
  { id: "hypothesis", label: "Hypothesis" },
  { id: "solution", label: "Solution" },
  { id: "visuals", label: "Visuals" },
];

export default function TmlCaseStudy({ onClose }) {
  return (
    <ArchiveCaseStudyShell onClose={onClose} navSections={NAV_SECTIONS}>
      <h1 className="text-[32px] sm:text-[44px] leading-[1.15] font-semibold text-heading mb-2 max-w-3xl">
        The My Leader
      </h1>
      <p className="text-[14px] font-medium text-accent mb-6">Platform</p>
      <p className="text-[15px] sm:text-[16px] leading-relaxed text-body max-w-2xl">
        A network for the political space that helps a candidate track and analyze their own performance, while
        giving citizens a direct line to their leaders — to raise grievances and see them actually resolved.
      </p>
      <div className="flex flex-wrap gap-2 mt-6">
        {["Empowered Voters", "Connected Followers", "Connected Citizen"].map((k) => (
          <span key={k} className="text-[12px] font-medium text-accent bg-accent/10 rounded-full px-3 py-1">
            {k}
          </span>
        ))}
      </div>

      <section id="problem" className="pt-16 pb-16 border-t border-band/30 mt-14">
        <SectionHeading eyebrow="Spot the trouble.">The problem</SectionHeading>
        <p className="text-[15px] leading-relaxed text-body">
          In any democracy, three characters share the stage — citizens, public departments, and politicians — and
          none of them had a real-time interaction or feedback platform. There was no transparent, trustworthy
          environment, and people feared their identity being exposed for raising concerns about a non-performing or
          corrupt leader or officer. That trust deficit showed up as a gap between real and perceived performance,
          and closing a grievance or completing a new demand was a herculean task with no alternative system in
          sight.
        </p>
      </section>

      <section id="research" className="py-16 border-t border-band/30">
        <SectionHeading eyebrow="Understanding begins here.">Research</SectionHeading>
        <p className="text-[15px] leading-relaxed text-body">
          Quantitative research came from a citizen survey run through our representatives — 198 citizens, 68% male
          and 32% female, spanning 49% aged 18–30, 37% aged 31–60, and 14% above 60. Qualitative research came from
          interviews with 4 ministers, 10 sarpanchs, 21 ward members, and 64 karyakartas across different regions.
        </p>
        <div className="mt-4">
          <Label>Gathering insights</Label>
          <List
            items={[
              "No existing platform connected leaders and the public directly.",
              "A wide gap between ministers and the common public.",
              "A wide gap between people in authority and the common public.",
              "No transparent, trustworthy environment to raise concerns in.",
              "Real privacy concerns about being identified.",
            ]}
          />
        </div>
      </section>

      <section id="hypothesis" className="py-16 border-t border-band/30">
        <SectionHeading eyebrow="What we believed.">Hypothesis</SectionHeading>
        <p className="text-[15px] leading-relaxed text-body">
          A real-time interaction and feedback platform could connect a community with their social representative —
          something missing from every existing social media ecosystem — through a few concrete mechanisms:
        </p>
        <SubHeading>Live chat</SubHeading>
        <p className="text-[15px] leading-relaxed text-body">
          Citizens talk directly to leaders, form groups, and leaders talk to karyakartas — building emotional
          connection, image, and faith in the relationship.
        </p>
        <SubHeading>Seamless communication</SubHeading>
        <p className="text-[15px] leading-relaxed text-body">
          A structured channel for demands and grievances, aimed at voter satisfaction and trust-building.
        </p>
        <SubHeading>E-manifesto &amp; online surveys</SubHeading>
        <p className="text-[15px] leading-relaxed text-body">
          Voters create groups and manifestos together, and run their own surveys — leaving people feeling
          empowered, connected, and heard.
        </p>
        <SubHeading>Portal &amp; analytics</SubHeading>
        <p className="text-[15px] leading-relaxed text-body">
          A dashboard giving the party enough data to see how people actually spend time engaging with a leader —
          effective insight, actionable data, better-informed decisions.
        </p>
      </section>

      <section id="solution" className="py-16 border-t border-band/30">
        <SectionHeading eyebrow="Where it landed.">The solution</SectionHeading>
        <p className="text-[15px] leading-relaxed text-body">
          We mapped out why political candidates lose elections and what the best-performing candidates actually do
          differently, then built toward it. For candidates: effective insight, actionable data, trust and image
          building, faith development, emotional connection. For citizens: satisfaction, feeling genuinely connected
          to their leaders, empowerment through seamless communication, and grievances that actually get resolved.
        </p>
      </section>

      <section id="visuals" className="pt-16 pb-16">
        <SectionHeading eyebrow="What it looked like.">Visual design</SectionHeading>
        <p className="text-[15px] leading-relaxed text-body">
          Set in Montserrat, with a grounded black-and-grey base and a teal-and-navy accent pairing for trust and
          civic tone.
        </p>
        <PlaceholderImage src={visualDesignImg} alt="The My Leader visual design" />
      </section>
    </ArchiveCaseStudyShell>
  );
}
