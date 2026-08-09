import React from "react";
import { ArrowLeft } from "lucide-react";
import { SectionHeading, Label, List, PlaceholderImage, useScrollSpy, CaseStudyNav } from "../components/CaseStudyKit.jsx";
import LetsTalk from "../components/LetsTalk.jsx";
import Footer from "../components/Footer.jsx";
import visualDesignImg from "../assets/case-studies/optage/visual-design.png";

const NAV_SECTIONS = [
  { id: "problem", label: "Problem" },
  { id: "roles", label: "Roles" },
  { id: "insights", label: "Insights" },
  { id: "solution", label: "Solution" },
  { id: "visuals", label: "Visuals" },
];

export default function OptageCaseStudy({ onBack, onOpenResume }) {
  const active = useScrollSpy(
    NAV_SECTIONS.map((s) => s.id),
    true
  );

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
        <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-10 md:gap-16 items-start">
          <CaseStudyNav sections={NAV_SECTIONS} active={active} />

          <div className="w-full md:w-[80%]">
            <h1 className="text-[32px] sm:text-[44px] leading-[1.15] font-semibold text-heading mb-2 max-w-3xl">
              Optage
            </h1>
            <p className="text-[14px] font-medium text-accent mb-6">Version — Base, Xtended</p>
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-body max-w-2xl">
              A stable, effective, and robust system built on new technology to stop fraudulent activity and mark
              student attendance using face recognition — a solution that could monitor centers remotely and save
              on operational cost.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {["Live Streaming", "Face Recognition", "Analytics"].map((k) => (
                <span key={k} className="text-[12px] font-medium text-accent bg-accent/10 rounded-full px-3 py-1">
                  {k}
                </span>
              ))}
            </div>

            <section id="problem" className="pt-16 pb-16 border-t border-band/30 mt-14">
              <SectionHeading eyebrow="Spot the trouble.">The problem</SectionHeading>
              <p className="text-[15px] leading-relaxed text-body">
                Roughly 400 skill centers were spread across the state of Rajasthan, with no easy way to monitor
                them — actual enrolled students versus who was actually present in each classroom, fake student
                enrollment, automated attendance, or remote surprise inspection. Some centers misused the funds
                allocated to them, so the client needed a robust, stable solution that addressed all of these
                concerns at once.
              </p>
            </section>

            <section id="roles" className="py-16 border-t border-band/30">
              <SectionHeading>Roles and responsibility</SectionHeading>
              <p className="text-[15px] leading-relaxed text-body">
                Branding, user research, interaction and visual design, prototyping and testing, UI design, and UI
                development.
              </p>
            </section>

            <section id="insights" className="py-16 border-t border-band/30">
              <SectionHeading eyebrow="Understanding begins here.">Gathering insights</SectionHeading>
              <p className="text-[15px] leading-relaxed text-body">
                After the initial meetings with government officials, the real work was gathering insights from the
                team actually living the problem day to day. They were responsive because we understood their pain
                points clearly, and a quick proof of concept gave them confidence early. Some of the useful insights
                we identified:
              </p>
              <Label>Findings</Label>
              <List
                items={[
                  "There was an urgent need for a solution — the issues were serious enough to affect the business.",
                  "Most work was done manually in spreadsheets, generating reports by hand (time-consuming, unreliable data).",
                  "Headquarters had no visibility into which students were actually registered, or actually present at a center on any given day.",
                  "Significant operational cost was lost to process misuse.",
                  "Surprise inspections were nearly impossible across centers spread throughout the state.",
                ]}
              />
            </section>

            <section id="solution" className="py-16 border-t border-band/30">
              <SectionHeading eyebrow="A system comes together.">The solution</SectionHeading>
              <p className="text-[15px] leading-relaxed text-body">
                We built a simple but powerful solution — automated face recognition, live video recording, and
                one-click image capture and sharing — deployed across all 234 centers. A command center at
                headquarters let admins monitor any classroom remotely, capture footage the moment something looked
                suspicious, and share it with the center head for immediate remediation.
              </p>
              <p className="text-[15px] leading-relaxed text-body mt-4">
                Surprise inspections no longer required a site visit — superusers could run them online and generate
                reports across parameters. The system worked well enough in practice that it was installed at every
                center's entry and exit gates too.
              </p>
            </section>

            <section id="visuals" className="pt-16">
              <SectionHeading eyebrow="What it looked like.">Visual design</SectionHeading>
              <p className="text-[15px] leading-relaxed text-body">
                A confident blue for trust and clarity, paired with neutral greys and warm accent tones for status
                and alerts, set in Lato across the interface.
              </p>
              <PlaceholderImage src={visualDesignImg} alt="Optage visual design" />
            </section>
          </div>
        </div>
      </div>

      <LetsTalk onOpenResume={onOpenResume} />
      <Footer />
    </div>
  );
}
