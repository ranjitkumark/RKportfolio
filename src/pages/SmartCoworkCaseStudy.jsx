import React from "react";
import { SectionHeading, PlaceholderImage } from "../components/CaseStudyKit.jsx";
import ArchiveCaseStudyShell from "../components/ArchiveCaseStudyShell.jsx";
import visualDesignImg from "../assets/case-studies/smart-cowork/visual-design.png";

const NAV_SECTIONS = [
  { id: "intro", label: "Introduction" },
  { id: "problem", label: "Problem" },
  { id: "research", label: "Research" },
  { id: "hypothesis", label: "Hypothesis" },
  { id: "visuals", label: "Visuals" },
];

export default function SmartCoworkCaseStudy({ onClose }) {
  return (
    <ArchiveCaseStudyShell onClose={onClose} navSections={NAV_SECTIONS}>
      <h1 className="text-[32px] sm:text-[44px] leading-[1.15] font-semibold text-heading mb-2 max-w-3xl">
        Smart Cowork
      </h1>
      <p className="text-[15px] sm:text-[16px] leading-relaxed text-body max-w-2xl mt-4">
        An intelligent energy monitoring system that lets an admin track energy usage per device, set up routines
        for appliances, get notified about devices left on, and see a timeline of daily activity.
      </p>
      <div className="flex flex-wrap gap-2 mt-6">
        {["IoT", "Sensor", "Analytics"].map((k) => (
          <span key={k} className="text-[12px] font-medium text-accent bg-accent/10 rounded-full px-3 py-1">
            {k}
          </span>
        ))}
      </div>

      <section id="intro" className="pt-16 pb-16 border-t border-band/30 mt-14">
        <SectionHeading eyebrow="Where it started.">Introduction</SectionHeading>
        <p className="text-[15px] leading-relaxed text-body">
          More electronic devices were entering every business and industry, and everyone increasingly expected to
          control something through an app. IoT was the natural next step — sensing information and passing it
          along through connected devices. This case study covers how I designed smart offices for a coworking space
          client, trying to save both time and energy for employees and the service provider: how do you manage and
          redefine a workplace, and understand energy usage well enough to actually save money?
        </p>
      </section>

      <section id="problem" className="py-16 border-t border-band/30">
        <SectionHeading eyebrow="Spot the trouble.">The problem</SectionHeading>
        <p className="text-[15px] leading-relaxed text-body">
          People spend close to 40% of their day inside an office, where temperature, light, and humidity matter for
          health and comfort — an unhealthy indoor environment is an easy problem to overlook. On top of that,
          electricity was routinely wasted when employees forgot to switch off lights and AC, custodians carried the
          extra burden of manually checking every appliance room by room, and security and surveillance across every
          floor and cabin added even more hectic manual work for guards.
        </p>
      </section>

      <section id="research" className="py-16 border-t border-band/30">
        <SectionHeading>Roles and research</SectionHeading>
        <p className="text-[15px] leading-relaxed text-body">
          User research, interaction design, visual design, prototyping and testing, UI design, and UI development.
          I ran semi-structured interviews with employees and admins to uncover their pain points, needs, and
          requirements — employees expected a smart office to recognize patterns and adapt to their behavior and
          preferences automatically, not the other way around.
        </p>
      </section>

      <section id="hypothesis" className="py-16 border-t border-band/30">
        <SectionHeading eyebrow="What we believed.">Hypothesis</SectionHeading>
        <p className="text-[15px] leading-relaxed text-body">
          Market studies showed smart devices were frequently disconnected and clunky to use — we wanted the
          experience to feel intuitive and seamless instead. We believed that letting people manage and control
          their devices from anywhere would make the whole system more desirable, usable, and convenient, and built
          the mindmap and prototype around that single idea.
        </p>
      </section>

      <section id="visuals" className="pt-16 pb-16">
        <SectionHeading eyebrow="What it looked like.">Visual design</SectionHeading>
        <p className="text-[15px] leading-relaxed text-body">
          Set in Dosis and Josefin Sans, anchored by a confident violet against black and white, with a warm accent
          range for alerts and live status.
        </p>
        <PlaceholderImage src={visualDesignImg} alt="Smart Cowork visual design" />
      </section>
    </ArchiveCaseStudyShell>
  );
}
