import React, { useState } from "react";
import {
  Quote,
  SectionHeading,
  SubHeading,
  Label,
  List,
  PlaceholderImage,
  TextColumn,
  StatGrid,
  useScrollSpy,
  CaseStudyNav,
  CaseStudyPageShell,
} from "../components/CaseStudyKit.jsx";
import oeCsatImg from "../assets/case-studies/communication/oe-csat-data.png";
import heuristicsImg from "../assets/case-studies/communication/heuristics.png";
import feedbackImg from "../assets/case-studies/communication/feedback-grid.png";
import moscowImg from "../assets/case-studies/communication/moscow.png";
import taskflowImg from "../assets/case-studies/communication/taskflow.png";
import userflowImg from "../assets/case-studies/communication/userflow.png";
import designSystemImg from "../assets/case-studies/communication/design-system.png";
import lofiImg from "../assets/case-studies/communication/lofi.png";
import hifiImg from "../assets/case-studies/communication/hifi.png";
import beforeAfterImg from "../assets/case-studies/communication/beforeafter.png";
import beforeAfter2Img from "../assets/case-studies/communication/beforeafter2.png";

const NAV_SECTIONS = [
  { id: "background", label: "Background" },
  { id: "research", label: "Research" },
  { id: "problems", label: "Problems" },
  { id: "ideate", label: "Ideate" },
  { id: "prototype", label: "Prototype" },
  { id: "testing", label: "Testing" },
  { id: "end", label: "End" },
];

function InsightCard({ title, painPoint, findings, opportunity }) {
  return (
    <div className="bg-card border border-band/30 rounded-2xl p-5 text-left">
      <p className="text-[14px] font-semibold text-heading mb-3">{title}</p>
      <Label>Pain point</Label>
      <p className="text-[13.5px] leading-relaxed text-body mb-3">{painPoint}</p>
      <Label>Findings</Label>
      <List items={findings} />
      <div className="mt-3">
        <Label>Design opportunity</Label>
        <p className="text-[13.5px] leading-relaxed text-body">{opportunity}</p>
      </div>
    </div>
  );
}

const SKIM_META = [
  {
    label: "SCOPE",
    value: "Campaign Builder · Template Library · Admin Insights & Tracking",
  },
  {
    label: "TIMELINE",
    value: "11 weeks Research | Figma prototyping",
  },
  {
    label: "OUTCOME",
    value: "85% preferred stepper nav · CSAT up 41%",
  },
];

const SKIM_STATS = [
  { value: "69 – 47 MIN", label: "Average time on task" },
  { value: "2.9 – 4.1", label: "CSAT score (out of 5)" },
];

function SkimView() {
  return (
    <div>
      <h1 className="text-[32px] sm:text-[44px] leading-[1.15] font-semibold text-heading mb-6 max-w-3xl">
        Campaigns took 69 minutes to build — and admins still weren't sure they'd sent the right one.
      </h1>
      <p className="text-[15px] sm:text-[16px] leading-relaxed text-body max-w-2xl">
        Admins were rebuilding the same campaign from scratch every time, with no visibility into what had already
        shipped. I redesigned the workflow, templates, and tracking into a single hub.
      </p>
      <p className="text-[14px] font-medium text-accent mt-4">Senior UX Designer &nbsp;| UX Research, Prototyping, Testing</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 pt-8 border-t border-band/30">
        {SKIM_META.map((item) => (
          <div key={item.label}>
            <Label>{item.label}</Label>
            <p className="text-[14px] leading-relaxed text-heading">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-14">
        {SKIM_STATS.map((stat) => (
          <div key={stat.label}>
            <p className="text-[32px] sm:text-[40px] font-bold text-accent font-poppins leading-none">{stat.value}</p>
            <p className="text-[13px] text-muted mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function FullView() {
  return (
    <>
      {/* BACKGROUND */}
        <section id="background" className="pb-16">
          <SectionHeading eyebrow="Spot the trouble.">Background</SectionHeading>
          <p className="text-[15px] leading-relaxed text-body">
            During the reseller summit, we consistently heard feedback about issues and the need for improvements in
            the communication feature. To confirm the extent of the problem, I analyzed Pendo usage patterns, annual
            enrollment engagement data, and CSAT survey responses before proceeding to deeper research.
          </p>
          <PlaceholderImage src={oeCsatImg} alt="Open Enrollment engagement and CSAT data" />
        </section>

        {/* RESEARCH */}
        <section id="research" className="py-16 border-t border-band/30">
          <SectionHeading eyebrow="Understanding begins here.">Research</SectionHeading>

          <SubHeading>UX audit</SubHeading>
          <p className="text-[15px] leading-relaxed text-body">
            I ran a heuristic evaluation using Jakob Nielsen's 10 Usability Heuristics from a benefit admin's
            perspective. Communication features were scattered across the platform, making campaigns hard to locate,
            manage, or track cohesively — visibility of system status and user control were inconsistently applied,
            the UI patterns felt visually disconnected, and even basic tasks required too many steps, raising
            cognitive load and cutting efficiency.
          </p>
          <PlaceholderImage src={heuristicsImg} alt="Heuristic evaluation results" />
          <div>
            <Label>Key evaluation dimensions</Label>
            <List
              items={[
                <><strong className="font-semibold text-heading">Effective</strong> — the accuracy and completeness users achieved when carrying out tasks.</>,
                <><strong className="font-semibold text-heading">Efficient</strong> — how long it took to complete tasks to the expected standard.</>,
                <><strong className="font-semibold text-heading">Engaging</strong> — whether the experience matched user expectations of tone and style.</>,
                <><strong className="font-semibold text-heading">Error tolerant</strong> — how well the design minimized errors and enabled recovery.</>,
                <><strong className="font-semibold text-heading">Easy to learn</strong> — how quickly users could pick up the core workflow.</>,
              ]}
            />
          </div>

          <SubHeading>Competitive analysis</SubHeading>
          <p className="text-[15px] leading-relaxed text-body">
            I looked outward to see how competitors approach benefit communications. Platforms like Bswift,
            Benefitfocus, and Workday showed stronger integration with scheduling, event-based categorization, and
            multi-channel delivery — but still lacked intelligence, customization, and analytics, confirming both
            where PlanSource was behind and where it could leap ahead.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div className="bg-card border border-band/30 rounded-xl p-4 text-left">
              <p className="text-[13px] font-semibold text-heading mb-2">Strengths</p>
              <List
                items={[
                  "Integrated communication tools within the platform.",
                  "Multi-channel delivery (email, SMS).",
                  "Saves admin time during busy periods with scheduling.",
                  "Categorized based on events (annual enrollment, life event changes).",
                ]}
              />
            </div>
            <div className="bg-card border border-band/30 rounded-xl p-4 text-left">
              <p className="text-[13px] font-semibold text-heading mb-2">Weaknesses</p>
              <List
                items={[
                  "No unified dashboard for managing all communications.",
                  "No AI-powered writing assistant or smart suggestions.",
                  "Limited templates and poor customization tools.",
                  "No real-time analytics for delivery, engagement, or action tracking.",
                  "Lacks event-based automation.",
                ]}
              />
            </div>
          </div>

          <SubHeading>User interviews</SubHeading>
          <p className="text-[15px] leading-relaxed text-body">
            I refined my research plan and interview guide to better understand the benefits admins value most, the
            challenges they face, and how they perceive the effectiveness of their communication. To honor
            participants' voices, I captured insights in a feedback grid across what they liked, their criticisms,
            points of confusion, and new ideas — surfacing both functional gaps and clear opportunities for deeper
            engagement.
          </p>
          <PlaceholderImage src={feedbackImg} alt="User interview feedback capture grid" />

          <SubHeading>Key research insights</SubHeading>
          <p className="text-[15px] leading-relaxed text-body">
            The UX audit, competitive analysis, and interviews synthesized into three recurring themes that shaped
            the design direction.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            <InsightCard
              title="Ease of use and access"
              painPoint="Fragmented workflows made it hard to manage communications."
              findings={[
                "No centralized location to view sent messages or monitor performance.",
                "Inconsistent UI patterns across communication workflows.",
                "Limited visibility into employee actions after receiving a message.",
              ]}
              opportunity="Unified communication dashboard with real-time tracking."
            />
            <InsightCard
              title="Workflow efficiency"
              painPoint="Routine communications were repetitive and time-consuming."
              findings={[
                "No scheduling or automation tools.",
                "Lack of reusable templates tailored to scenarios.",
                "No audience segmentation to target specific employee groups.",
              ]}
              opportunity="Template libraries, smart scheduling, and audience targeting."
            />
            <InsightCard
              title="Smarter support & automation"
              painPoint="Admins wanted guidance and support to reduce manual effort."
              findings={[
                "No intelligent suggestions or defaults.",
                "No automation triggers.",
                "High reliance on manual input.",
              ]}
              opportunity="AI-assisted writing, smarter defaults, and automation triggers."
            />
          </div>
        </section>

        {/* PROBLEMS */}
        <section id="problems" className="py-16 border-t border-band/30">
          <SectionHeading eyebrow="Spot the trouble.">Problems</SectionHeading>
          <p className="text-[15px] leading-relaxed text-body">
            The communication experience was fragmented and inefficient, making it difficult for benefit
            administrators to engage employees effectively. Feedback from the Reseller Summit, strategic partner
            interviews, and CSAT survey verbatims consistently pointed to the same frustrations and usability gaps.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 text-left">
            <div className="bg-card border border-band/30 rounded-2xl p-6">
              <SubHeading>Key pain points</SubHeading>
              <List
                items={[
                  "No centralized workspace — admins struggled to track and manage communications.",
                  "Manual workflows delayed critical updates during onboarding, life events, and annual enrollment.",
                  "Limited templates made recurring messages inefficient.",
                  "Low flexibility — no targeting by individual or time zone.",
                  "Poor discoverability reduced confidence in the tool.",
                  "Low year-round engagement — the tool was mostly used only during OE.",
                ]}
              />
              <SubHeading>Needs</SubHeading>
              <List
                items={[
                  "A reliable system to ensure employees receive timely, accurate updates.",
                  "Tools that scale during high-volume periods while still supporting targeted campaigns year-round.",
                  "Clear visibility and tracking of who received, opened, and engaged with communications.",
                  "Simplified, automated workflows that reduce dependency on manual effort.",
                ]}
              />
            </div>
            <div className="bg-card border border-band/30 rounded-2xl p-6">
              <SubHeading>Goals</SubHeading>
              <List
                items={[
                  "Create a centralized communication hub to manage and monitor all campaigns.",
                  "Save time with AI, automation, and reusable templates.",
                  "Support both annual enrollment and year-round communications.",
                  "Drive continuous engagement, not just during annual enrollment.",
                  "Improve flexibility with targeting, scheduling, and personalization.",
                  "Enhance usability and discoverability to increase adoption.",
                ]}
              />
              <SubHeading>Motivations</SubHeading>
              <List
                items={[
                  "Benefit admins want to save time and reduce errors in high-stakes communications.",
                  "Organizations want employees engaged year-round, not just during annual enrollment.",
                  "Employees need timely, relevant updates to make better benefits decisions.",
                ]}
              />
            </div>
          </div>
        </section>

        {/* IDEATE */}
        <section id="ideate" className="py-16 border-t border-band/30">
          <SectionHeading eyebrow="Ideas take flight.">Ideate</SectionHeading>

          <SubHeading>Feature roadmap</SubHeading>
          <p className="text-[15px] leading-relaxed text-body">
            With the core problems defined, I collaborated with the Product Manager to build a feature roadmap
            grounded in user feedback and business priorities, using the MoSCoW framework (Must have, Should have,
            Could have, Have later) to balance quick wins — reusable templates, scheduling — against longer-term bets
            like AI-assisted content generation, advanced delivery analytics, and a fully integrated design system.
          </p>
          <PlaceholderImage src={moscowImg} alt="MoSCoW feature roadmap" />

          <SubHeading>Task flow</SubHeading>
          <p className="text-[15px] leading-relaxed text-body">
            I mapped the core task flows around four essential admin actions: creating employee groups for targeted
            messaging, setting up new campaigns, scheduling campaigns for future delivery, and editing existing
            scheduled messages — each simplified to cut repetition and give admins more control and visibility.
          </p>
          <PlaceholderImage src={taskflowImg} alt="Communication task flow" />

          <SubHeading>User flow</SubHeading>
          <p className="text-[15px] leading-relaxed text-body">
            I connected those task flows into one simplified end-to-end journey for benefit admins — reducing
            repetitive steps, keeping each action intuitive and trackable, and supporting year-round engagement.
          </p>
          <PlaceholderImage src={userflowImg} alt="End-to-end admin user flow" />
        </section>

        {/* PROTOTYPE */}
        <section id="prototype" className="py-16 border-t border-band/30">
          <SectionHeading eyebrow="A project comes to life.">Prototype</SectionHeading>

          <SubHeading>Design system</SubHeading>
          <p className="text-[15px] leading-relaxed text-body">
            I reviewed the existing design system, identified gaps like analytics visuals and steppers, and built new
            components that matched the established style — designing within constraints while evolving the system,
            keeping product cohesion and future readiness in mind.
          </p>
          <PlaceholderImage src={designSystemImg} alt="Design system components" />

          <SubHeading>Lo-fi wireframes</SubHeading>
          <p className="text-[15px] leading-relaxed text-body">
            Using insights from research, the sitemap, and task flows, I sketched low-fidelity wireframes to define
            the structure of key screens like the campaign builder and admin workflows, focused on clarity and
            efficiency.
          </p>
          <PlaceholderImage src={lofiImg} alt="Low-fidelity wireframes" />

          <SubHeading>Hi-fi wireframes</SubHeading>
          <p className="text-[15px] leading-relaxed text-body">
            After validating the flows, I moved into high-fidelity designs, integrating the new experience into the
            existing interface with consistent colors, typography, and components — modern, but still familiar.
          </p>
          <PlaceholderImage src={hifiImg} alt="High-fidelity designs" />
        </section>

        {/* TESTING */}
        <section id="testing" className="py-16 border-t border-band/30">
          <SectionHeading eyebrow="Truth meets the idea.">Testing</SectionHeading>
          <SubHeading>Usability testing</SubHeading>
          <p className="text-[15px] leading-relaxed text-body">
            I ran two rounds of usability testing with 10 benefit administrators, 7 of whom had prior experience with
            the product — a mix that surfaced both insider insights and fresh perspectives.
          </p>
          <div>
            <Label>Goals</Label>
            <List
              items={[
                "Evaluate initial design concepts against user needs and workflows.",
                "Explore expectations around communication tools, navigation, and task flow.",
                "Assess overall usability of core interactions.",
              ]}
            />
            <div className="mt-6">
              <Label>Round one findings</Label>
              <List
                items={[
                  "Most participants found the create-campaign features easy to use.",
                  "All participants completed the primary tasks — creation, message design, scheduling, review.",
                  "Users found similar options and buttons difficult to differentiate.",
                  "Several found breadcrumb navigation unclear and unintuitive.",
                  "Drag-and-drop email builder caused difficulty, partly from limited prototype interactivity.",
                ]}
              />
            </div>
          </div>
          <p className="text-[15px] leading-relaxed text-body mt-4">
            I refined the designs into a high-fidelity prototype for a second round — introducing stepper navigation
            alongside breadcrumbs, and both click-and-select and improved drag-and-drop builders, to compare
            preferences directly.
          </p>
          <PlaceholderImage src={beforeAfterImg} alt="Stepper vs. breadcrumb navigation comparison" />
          <PlaceholderImage src={beforeAfter2Img} alt="Click-and-select vs. drag-and-drop builder comparison" />

          <div className="mt-6">
            <Label>Round two findings</Label>
            <List
              items={[
                "Click-and-select email builder was preferred over drag-and-drop for ease of use.",
                <><strong className="font-semibold text-heading">85% of participants</strong> found stepper navigation more intuitive and structured than breadcrumbs.</>,
                "Functionality and features received significantly more positive feedback.",
              ]}
            />
          </div>

          <SubHeading>Summary</SubHeading>
          <StatGrid
            cols={4}
            stats={[
              { value: "100%", label: "Task completion success" },
              { value: "80–100%", label: '"Very Easy" or "Easy" rating' },
              { value: "20%", label: "Frustration score" },
              { value: "100%", label: "Goal achievement" },
            ]}
          />
        </section>

        {/* END */}
        <section id="end" className="pt-16">
          <SectionHeading eyebrow="Impact begins.">End</SectionHeading>
          <SubHeading>Final product</SubHeading>
          <p className="text-[15px] leading-relaxed text-body">
            The second round of testing showed fewer and less severe issues, confirming the design iterations
            addressed the main challenges. With both rounds complete, I made final refinements to micro-interactions
            and overall usability.
          </p>
          <PlaceholderImage src={hifiImg} alt="Final product screens" />

          <div>
            <SubHeading>Project takeaways</SubHeading>
            <List
              items={[
                <>
                  <strong className="font-semibold text-heading">Solving small problems can lead to meaningful impact.</strong>{" "}
                  Participants told me the communication challenges we addressed were real pain points — and the
                  solution was something they genuinely hoped to see shipped.
                </>,
                <>
                  <strong className="font-semibold text-heading">Rapid iteration and validation lead to better design decisions.</strong>{" "}
                  Two focused design cycles with testing showed the value of validating assumptions early instead of
                  chasing a "perfect" first solution.
                </>,
              ]}
            />
          </div>
          <Quote>
            The next step is integrating automated, logic-based workflows and event-driven triggers — so admins can
            deliver more personalized, targeted messages with minimal manual effort.
          </Quote>
        </section>
    </>
  );
}

export default function CommunicationCaseStudy({ onBack, onOpenResume }) {
  const [view, setView] = useState("skim");
  const active = useScrollSpy(
    NAV_SECTIONS.map((s) => s.id),
    view === "full"
  );

  return (
    <CaseStudyPageShell onBack={onBack} onOpenResume={onOpenResume} view={view} setView={setView}>
      <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-10 md:gap-16 items-start">
        <CaseStudyNav sections={NAV_SECTIONS} active={active} />

        <div className="w-full md:w-[80%]">
          <SkimView />
          {view === "full" && (
            <div className="mt-14 pt-14 border-t border-band/30">
              <FullView />
            </div>
          )}
        </div>
      </div>
    </CaseStudyPageShell>
  );
}
