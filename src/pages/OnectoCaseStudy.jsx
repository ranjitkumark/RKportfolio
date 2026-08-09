import React from "react";
import { SectionHeading, Label, List, PlaceholderImage } from "../components/CaseStudyKit.jsx";
import ArchiveCaseStudyShell from "../components/ArchiveCaseStudyShell.jsx";
import visualDesignImg from "../assets/case-studies/onecto/visual-design.png";

const NAV_SECTIONS = [
  { id: "problem", label: "Problem" },
  { id: "hypothesis", label: "Hypothesis" },
  { id: "ideation", label: "Ideation" },
  { id: "visuals", label: "Visuals" },
];

export default function OnectoCaseStudy({ onClose }) {
  return (
    <ArchiveCaseStudyShell onClose={onClose} navSections={NAV_SECTIONS}>
      <h1 className="text-[32px] sm:text-[44px] leading-[1.15] font-semibold text-heading mb-2 max-w-3xl">Onecto</h1>
      <p className="text-[15px] sm:text-[16px] leading-relaxed text-body max-w-2xl mt-4">
        An end-to-end framework supporting live streaming, face recognition, and management of our own custom
        camera hardware — built to drastically cut implementation cost.
      </p>
      <div className="flex flex-wrap gap-2 mt-6">
        {["IoT", "Sensor", "Analytics"].map((k) => (
          <span key={k} className="text-[12px] font-medium text-accent bg-accent/10 rounded-full px-3 py-1">
            {k}
          </span>
        ))}
      </div>

      <section id="problem" className="pt-16 pb-16 border-t border-band/30 mt-14">
        <SectionHeading eyebrow="Spot the trouble.">The problem</SectionHeading>
        <p className="text-[15px] leading-relaxed text-body">
          Monitoring and controlling a live stream of roughly 1,400 cameras remotely wasn't something existing IoT
          frameworks handled well — customization at that scale was slow, tedious, and expensive. Adding face
          recognition on top made server costs prohibitive and the project nearly impossible on an off-the-shelf
          platform. We needed to control camera parameters remotely, including turning individual cameras and their
          live streams on or off.
        </p>
      </section>

      <section id="hypothesis" className="py-16 border-t border-band/30">
        <SectionHeading eyebrow="What we believed.">Hypothesis</SectionHeading>
        <p className="text-[15px] leading-relaxed text-body">
          Our assumptions were grounded in the problems we'd already hit ourselves, plus market research — since we
          were our own first potential customer. Some of the questions we asked:
        </p>
        <List
          items={[
            "Why should we pay huge charges for an IoT platform built for someone else's use case?",
            "Most IoT platforms in the market are focused on industrial domains — what about a startup's needs?",
            "Is there a platform that can help us with computer vision algorithms and handle them natively?",
            "Is there a cloud-agnostic IoT platform we could deploy to any cloud or datacenter?",
            "Could one platform serve multiple domains — citizen security, video surveillance, smart city, industrial automation, smart agriculture?",
          ]}
        />
        <p className="text-[15px] leading-relaxed text-body mt-4">
          The real question after that was whether a three-person team could build this platform on our own. The
          answer was yes — with the core ingredients of a typical IoT platform, plus the missing pieces most lacked:
          blockchain and hardware-level (TPM) security, built cheap enough that any startup, small business, or
          large organization could adopt it.
        </p>
      </section>

      <section id="ideation" className="py-16 border-t border-band/30">
        <SectionHeading eyebrow="Building it out.">Ideation</SectionHeading>
        <p className="text-[15px] leading-relaxed text-body">
          We came up with a robust, scalable architecture through a series of brainstorming sessions on how to
          compete with existing platforms and shape one around our own needs — cost-effective, quickly adaptable,
          and simple enough to customize for other domains beyond our own. The proudest moment: successfully
          onboarding roughly 1,400 cameras and publishing their live streams on the frontend without serious
          technical issues.
        </p>
        <p className="text-[15px] leading-relaxed text-body mt-4">
          The whole platform was conceived and built by a three-person team, including our own bug testing — no
          dedicated QA team — and it shipped to the client working reliably. Initial testing started with our own
          phones, scaled to 10 live remote cameras, and from there kept climbing past 1,000 cameras with only minor
          firmware changes. We also proved the platform's flexibility by registering temperature, humidity, and
          proximity sensors for a coworking-space proof of concept — switching lights, AC, printers, and door
          sensors on and off through a mobile app powered by our own IoT platform.
        </p>
        <Label>Modules shipped</Label>
        <List
          items={[
            "Access control",
            "Device management",
            "Communication protocol",
            "Rule engine",
            "Security",
            "REST APIs",
            "Computer vision",
            "Blockchain",
            "Big data",
            "Streaming as a service",
          ]}
        />
      </section>

      <section id="visuals" className="pt-16 pb-16">
        <SectionHeading eyebrow="What it looked like.">Visual design</SectionHeading>
        <p className="text-[15px] leading-relaxed text-body">
          Set in Dosis and Josefin Sans, with a warm yellow anchor color against teal and neutral greys for the
          dashboard chrome.
        </p>
        <PlaceholderImage src={visualDesignImg} alt="Onecto visual design" />
      </section>
    </ArchiveCaseStudyShell>
  );
}
