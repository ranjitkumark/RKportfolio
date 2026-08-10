import React, { useState } from "react";
import {
  Quote,
  SectionHeading,
  SubHeading,
  Label,
  List,
  PlaceholderImage,
  IssueCard,
  useScrollSpy,
  CaseStudyNav,
  CaseStudyPageShell,
  ViewToggle,
} from "../components/CaseStudyKit.jsx";
import scorecardImg from "../assets/case-studies/chatbot/scenario-scorecard.png";
import escalationImg from "../assets/case-studies/chatbot/escalation-flow.png";
import taskFlowImg from "../assets/case-studies/chatbot/task-flow.png";
import feedbackImg from "../assets/case-studies/chatbot/feedback-interface.png";
import finalImg from "../assets/case-studies/chatbot/final-interface.png";

const NAV_SECTIONS = [
  { id: "background", label: "Background" },
  { id: "research", label: "Research" },
  { id: "problems", label: "Problems" },
  { id: "ideate", label: "Ideate" },
  { id: "prototype", label: "Prototype" },
  { id: "testing", label: "Testing" },
  { id: "end", label: "End" },
];

const SKIM_META = [
  {
    label: "SCOPE",
    value: "AI Virtual Assistant · Benefits, HSA, Enrollment, Escalation",
  },
  {
    label: "TIMELINE",
    value: "Internal beta through 2025 | Redesign & testing into May 2026",
  },
  {
    label: "OUTCOME",
    value: "Adoption, completion & confidence up · Escalations & abandonment down",
  },
];

const SKIM_STATS = [
  { value: "5 of 5", label: "Test scenarios failed at launch" },
  { value: "76%", label: "Wanted the assistant to retry before reporting a problem" },
];

function SkimView() {
  return (
    <div>
      <h1 className="text-[32px] sm:text-[44px] leading-[1.15] font-semibold text-heading mb-6 max-w-3xl">
        Employees opened the assistant, didn't get what they needed, and emailed HR instead.
      </h1>
      <p className="text-[15px] sm:text-[16px] leading-relaxed text-body max-w-2xl">
        An AI assistant was already live inside the benefits portal, but internal beta had wrapped and it was about
        to ship to client organizations as-is. I diagnosed why it was failing and redesigned the experience before
        an internal disappointment became a product liability.
      </p>
      <p className="text-[14px] font-medium text-accent mt-4">Lead UX Designer &nbsp;| Conversational UX, AI Assistance</p>

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
          The assistant — internally branded "Olive" — lived inside the employee benefits portal, meant to answer
          questions about coverage, HSA balances, enrollment windows, and personal details, taking routine volume
          off the HR team. It was technically live and functioning. Employees just weren't using it.
        </p>
        <p className="text-[15px] leading-relaxed text-body mt-4">
          Internal beta wrapped in 2025, and the product was being prepared for rollout to client organizations.
          That deadline defined the stakes: an underperforming assistant used by our own employees is an internal
          embarrassment, but the same assistant shipped to client employers is a product liability — every client
          HR team would form its impression in the first week. My brief was to diagnose why it had failed, redesign
          the experience, and get it to a standard worth shipping externally.
        </p>
        <Quote>The model needed work I didn't own, and the experience needed work I did.</Quote>
      </section>

      {/* RESEARCH */}
      <section id="research" className="py-16 border-t border-band/30">
        <SectionHeading eyebrow="Understanding begins here.">Research</SectionHeading>
        <p className="text-[15px] leading-relaxed text-body">
          I started by writing down what I actually needed to know, rather than what I assumed — nine research
          questions, grouped into three concerns.
        </p>
        <Label>Why it failed before</Label>
        <List
          items={[
            "Why was the bot idea dropped previously?",
            "What areas are most users looking for help with?",
          ]}
        />
        <div className="mt-4">
          <Label>How support works today</Label>
          <List
            items={[
              "How are users communicating with the support team now?",
              "How long does it take to resolve a query today?",
              "What is the process being followed today to resolve tickets?",
            ]}
          />
        </div>
        <div className="mt-4">
          <Label>What the assistant should own</Label>
          <List
            items={[
              "Which of today's tickets can be handled by the chatbot?",
              "Which tickets shouldn't go to the chatbot — are there constraints?",
              "Where should the chatbot be placed?",
              "What are the best practices to consider when designing for a chatbot?",
            ]}
          />
        </div>
        <p className="text-[15px] leading-relaxed text-body mt-4">
          Two of these mattered more than the rest. "Why was it dropped previously?" protected me from redesigning
          my way into a wall someone had already hit. And "which tickets shouldn't go to the chatbot?" made scope a
          design decision rather than an afterthought — I wanted the boundary drawn deliberately, not discovered
          later through failure.
        </p>

        <SubHeading>Preference survey</SubHeading>
        <p className="text-[15px] leading-relaxed text-body">
          Alongside a UX and conversation audit across existing transcripts, failed search queries, and HR
          escalation categories, a directional preference survey with employees (n=7) answered the placement and
          onboarding questions cleanly:
        </p>
        <List
          items={[
            "71.4% preferred the chat docked bottom-center.",
            "71.4% preferred onboarding through clickable options over open-ended typing.",
            "57.1% said both minimize and close were needed — neither alone was sufficient.",
            "Movability split almost evenly across “moderately,” “very,” and “essential” (28.6% each), with 14.3% saying it didn't matter.",
          ]}
        />
        <p className="text-[15px] leading-relaxed text-body mt-4">
          That last one was useful precisely because it was inconclusive — it told me movability was a genuine
          preference difference rather than a consensus need, so it didn't warrant engineering investment in the
          first release.
        </p>
      </section>

      {/* PROBLEMS */}
      <section id="problems" className="py-16 border-t border-band/30">
        <SectionHeading eyebrow="Spot the trouble.">Problems</SectionHeading>
        <p className="text-[15px] leading-relaxed text-body">
          To make the failure legible to stakeholders — and to myself — I scored the live assistant against five
          realistic scenarios on consistency, accuracy, tone, clarity, and actionability. All five failed. But
          accuracy was rarely the worst column — clarity and actionability were, even on rows where accuracy scored
          well.
        </p>
        <PlaceholderImage src={scorecardImg} alt="Scenario evaluation scorecard" />
        <Label>Where the design failed independently of the model</Label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
          <IssueCard title="Eligibility">
            Asked whether they were eligible for dental, the assistant returned enrollment information without
            confirming eligibility — because it could only speak to current enrollment, not eligibility at all.
          </IssueCard>
          <IssueCard title="Repeat question">
            When a user asked the same thing twice — the universal signal of frustration — the assistant treated it
            as a brand new query and returned the identical answer.
          </IssueCard>
          <IssueCard title="Out of scope">
            Off-topic questions triggered a generic fallback with no acknowledgment of intent and no redirect back
            to supported topics.
          </IssueCard>
          <IssueCard title="Typo'd query">
            The sharpest case: the assistant correctly parsed the typo, answered accurately, and still failed —
            mechanical reply, no acknowledgment, no next step.
          </IssueCard>
          <IssueCard title="Before login">
            Birthdates were validated in exactly one format, and every other format was rejected without telling
            the user what format to use.
          </IssueCard>
        </div>
        <p className="text-[15px] leading-relaxed text-body mt-4">
          The scoring separated two failure classes. Some were genuine model limitations — weak intent detection, no
          conversational memory, brittle input parsing, and a data model with no concept of eligibility at all.
          Those needed engineering, and I took them to the AI team as a roadmap rather than quietly designing around
          them. Others were independent of the model — the design determines what a model limitation{" "}
          <em>feels</em> like. An assistant that can't answer can dead-end, or it can hand off with full context.
          Same limitation, different product.
        </p>
      </section>

      {/* IDEATE */}
      <section id="ideate" className="py-16 border-t border-band/30">
        <SectionHeading eyebrow="Ideas take flight.">Ideate</SectionHeading>
        <p className="text-[15px] leading-relaxed text-body">
          The reframe followed directly: this was not an FAQ bot, it was a <strong className="font-semibold text-heading">Benefits Assistant</strong>.
          Five principles fell out of that:
        </p>
        <List
          items={[
            "Understand intent, not keywords.",
            "Guide, don't lecture.",
            "Reduce typing wherever possible.",
            "Recover gracefully from failure.",
            "Escalate with context.",
          ]}
        />

        <SubHeading>Generalist or specialist?</SubHeading>
        <p className="text-[15px] leading-relaxed text-body">
          A generalist assistant reads as smarter, but every wrong answer damages trust across the whole system. I
          went specialist, and handled the risk through framing: the assistant opens by naming what it specializes
          in and surfaces three to five high-volume questions, positioning constraint as expertise rather than
          limitation.
        </p>

        <SubHeading>Where does it live?</SubHeading>
        <p className="text-[15px] leading-relaxed text-body">
          Center on first launch, right-side on re-engagement. Center makes a strong first impression and sets
          expectations before the user types; right-side respects an in-progress task. Splitting by moment rather
          than picking one gave high impact on first impression and high usability on repeat use.
        </p>

        <SubHeading>A permanent "Talk to a human" button?</SubHeading>
        <p className="text-[15px] leading-relaxed text-body">
          This was the hardest call. A dedicated button respects users' time, but it also depresses AI adoption —
          fewer people ever discover the assistant can handle quick answers, which is the entire business case. I
          chose to withhold the permanent button in favor of smart escalation, paired with a measurement plan
          (AI-resolved versus transferred) and a commitment to revisit after three to six months of data.
        </p>
        <Quote>
          Making help harder to reach is a hostile move if the AI underneath isn't good enough. It was defensible
          only because it was coupled to the recovery and escalation work — and to a plan to reverse it if the data
          said so.
        </Quote>

        <SubHeading>Designing the handoff</SubHeading>
        <p className="text-[15px] leading-relaxed text-body">
          Because I'd removed the obvious escape hatch, escalation had to be excellent. I mapped a human support
          transition flow with eight triggers, the last two mattering most because they don't require the user to
          advocate for themselves:
        </p>
        <List
          items={[
            "The user explicitly asks to speak to an agent, or the AI can't solve the problem.",
            "The user repeats a question twice, or the request is beyond AI capabilities.",
            "Confidence score falls below threshold.",
            "Sentiment analysis flags frustration.",
          ]}
        />
        <p className="text-[15px] leading-relaxed text-body mt-4">
          Any trigger routes to a confirmation — <em>want to connect?</em> — rather than a forced transfer, so the
          user keeps control. On confirmation, the specialist receives the conversation with full context and
          continues from where the AI left off.
        </p>
        <PlaceholderImage src={escalationImg} alt="Escalation and handoff flow" />
      </section>

      {/* PROTOTYPE */}
      <section id="prototype" className="py-16 border-t border-band/30">
        <SectionHeading eyebrow="A project comes to life.">Prototype</SectionHeading>
        <SubHeading>Task flows</SubHeading>
        <p className="text-[15px] leading-relaxed text-body">
          I built the assistant around task flows rather than answer templates. For life events and dependents:
          launch → report a life event → choose event type → select date → capture required fields → resolve edge
          cases — asking for a dependent's address rather than assuming it matches the employee's. For adding
          coverage: after a dependent is added, the assistant shows eligible plans with ineligible ones
          progressively disclosed and explained rather than silently hidden, then surfaces cost impact before any
          confirmation. Every flow has a clean exit — a user who abandons should be able to abandon gracefully.
        </p>
        <PlaceholderImage src={taskFlowImg} alt="Life event and dependent task flow" />

        <SubHeading>Interface refinements</SubHeading>
        <p className="text-[15px] leading-relaxed text-body">
          Before client rollout I revisited the chat surface itself. Each change was small; together they changed
          how the assistant reads.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3">
          <IssueCard title="Header">
            Rebalanced to scan in one pass, and renamed "Olive" to "AI Virtual assistant" — removing the guessing
            game about what it is, and being transparent about it being AI ahead of client rollout.
          </IssueCard>
          <IssueCard title="Input area">
            Added a microphone alongside typing — faster for many users, materially more accessible, and groundwork
            for multimodal input later.
          </IssueCard>
          <IssueCard title="Timestamps">
            Removed from AI messages, which felt like a ticketing system rather than a conversation — but kept for
            human support messages, where a timestamp is accountability while someone waits.
          </IssueCard>
        </div>
      </section>

      {/* TESTING */}
      <section id="testing" className="py-16 border-t border-band/30">
        <SectionHeading eyebrow="Truth meets the idea.">Testing</SectionHeading>
        <SubHeading>Round one: task-based testing</SubHeading>
        <p className="text-[15px] leading-relaxed text-body">
          I tested against realistic tasks — check an HSA balance, add a dependent, understand a medical plan, reach
          a human agent. Buttons plus typing beat typing alone, explaining reasoning increased observed confidence,
          and users wanted a visible "talk to a person" option but rarely used it when the AI was working — visible
          reassurance and actual usage turned out to be different needs.
        </p>

        <SubHeading>Round two: the feedback pattern study</SubHeading>
        <p className="text-[15px] leading-relaxed text-body">
          Feedback design deserved its own study. I ran unmoderated testing with 6 participants comparing hover-only
          thumbs controls against always-visible ones. Card sorting favored hover — most natural for 68%. Stated
          preference favored always-visible — four of five profiled participants associated visibility with trust.
          Both were true: always-visible improved discoverability but felt repetitive over long conversations;
          hover was cleaner but users often didn't discover it at all.
        </p>
        <p className="text-[15px] leading-relaxed text-body mt-4">
          The card sort measured what feels pleasant moment to moment; stated preference measured what feels
          trustworthy. For an assistant rebuilding credibility it had already lost, trust outranked tidiness — I
          shipped always-visible, and treated the repetition finding as a constraint on visual weight rather than a
          reason to hide the control.
        </p>
        <Quote>Why ask me why, just give me the right answer.</Quote>
        <Label>Findings</Label>
        <List
          items={[
            <>
              <strong className="font-semibold text-heading">76%</strong> wanted the assistant to attempt
              conversational recovery first, rather than an immediate feedback form.
            </>,
            <>
              <strong className="font-semibold text-heading">64%</strong> expected human escalation after repeated
              failures.
            </>,
          ]}
        />
        <PlaceholderImage src={feedbackImg} alt="Redesigned feedback interface" />
        <p className="text-[15px] leading-relaxed text-body mt-4">
          The recovery finding is what the feedback interface was built on. A thumbs-down doesn't log a complaint —
          the assistant says "I may not have answered that clearly" and offers to try again first. Only if the user
          would rather explain do they get structured chips, followed by an optional detail form. Everything stays
          inside the conversation.
        </p>
      </section>

      {/* END */}
      <section id="end" className="pt-16">
        <SectionHeading eyebrow="Impact begins.">End</SectionHeading>
        <SubHeading>Outcome</SubHeading>
        <p className="text-[15px] leading-relaxed text-body">
          Confidential business metrics aren't published here, so these are directional rather than quantified:
        </p>
        <List
          items={[
            "Chatbot adoption increased.",
            "Task completion improved.",
            "HR escalations for common questions decreased.",
            "User confidence improved.",
            "Conversation abandonment decreased.",
          ]}
        />
        <p className="text-[15px] leading-relaxed text-body mt-4">
          <strong className="font-semibold text-heading">The shift that mattered:</strong> before, the assistant
          answered questions. After, it helped employees finish tasks.
        </p>
        <PlaceholderImage src={finalImg} alt="Final assistant interface" />

        <SubHeading>What I'd do differently</SubHeading>
        <List
          items={[
            "Quantify the baseline harder — I have qualitative scenario scoring and directional small-sample data, but no clean pre-redesign completion rate to hold the post-redesign number against.",
            "Test the withheld “talk to a human” button as an explicit A/B, the way I eventually did with feedback visibility.",
            "Bring the eligibility data gap forward sooner — it was a data-model constraint that surfaced through scenario testing rather than early technical discovery.",
          ]}
        />

        <SubHeading>What I learned</SubHeading>
        <List
          items={[
            "Model quality and interaction design are both necessary and neither is sufficient — the most instructive test case was one where the model performed perfectly and the interaction still failed.",
            "Conversation is navigation. An open text field isn't freedom if the user can't see the shape of what's available.",
            "Trust is built through recovery, not perfection — what determines whether people come back is the thirty seconds after the assistant is wrong.",
            "When research methods disagree, the disagreement is the finding — averaging the card sort and stated preference would have served neither.",
            "Escalation is part of the experience, not an admission of failure. A handoff carrying full context is a good outcome.",
          ]}
        />

        <SubHeading>My contribution</SubHeading>
        <p className="text-[15px] leading-relaxed text-body">
          UX audit and problem diagnosis · research planning and scenario evaluation · comparative usability study
          design and facilitation · conversation architecture · interaction and UI redesign · error, feedback, and
          escalation flow design · prototyping · stakeholder walkthrough.
        </p>
      </section>
    </>
  );
}

export default function ChatbotCaseStudy({ onBack, onOpenResume }) {
  const [view, setView] = useState("skim");
  const active = useScrollSpy(
    NAV_SECTIONS.map((s) => s.id),
    view === "full"
  );

  return (
    <CaseStudyPageShell onBack={onBack} onOpenResume={onOpenResume}>
      {view === "skim" ? (
        <div className="w-full md:w-[62%]">
          <ViewToggle view={view} setView={setView} />
          <SkimView />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-10 md:gap-16 items-start">
          <CaseStudyNav sections={NAV_SECTIONS} active={active} />

          <div className="w-full md:w-[80%]">
            <ViewToggle view={view} setView={setView} />
            <SkimView />
            <div className="mt-14 pt-14 border-t border-band/30">
              <FullView />
            </div>
          </div>
        </div>
      )}
    </CaseStudyPageShell>
  );
}
