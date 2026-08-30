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
  { id: "situation", label: "Situation" },
  { id: "stakes", label: "Stakes" },
  { id: "strategy", label: "Strategy" },
  { id: "decisions", label: "Decisions" },
  { id: "impact", label: "Impact" },
  { id: "growth", label: "Growth" },
];

function MethodNote({ children }) {
  return <p className="text-[13px] italic text-muted mt-4">{children}</p>;
}

function ScorecardTable() {
  const rows = [
    ["Eligibility (“Am I eligible for dental?”)", 3, 3, 3, 2, 3],
    ["Repeat question", 1, 3, 3, 2, 2],
    ["Out of scope", 1, 1, 3, 4, 1],
    ["Typo'd query", 3, 3, 3, 3, 2],
    ["Before login", 2, 2, 3, 3, 3],
  ];
  return (
    <div className="bg-card border border-band/30 rounded-xl p-4 text-left overflow-x-auto">
      <table className="w-full text-[13px] text-body min-w-[520px]">
        <thead>
          <tr className="text-left text-muted">
            <th className="pb-2 font-medium">Scenario</th>
            <th className="pb-2 font-medium text-center">Consistency</th>
            <th className="pb-2 font-medium text-center">Accuracy</th>
            <th className="pb-2 font-medium text-center">Tone</th>
            <th className="pb-2 font-medium text-center">Clarity</th>
            <th className="pb-2 font-medium text-center">Actionability</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]}>
              <td className="py-1 pr-2 align-top font-medium text-heading">{row[0]}</td>
              <td className="py-1 align-top text-center">{row[1]}</td>
              <td className="py-1 align-top text-center">{row[2]}</td>
              <td className="py-1 align-top text-center">{row[3]}</td>
              <td className="py-1 align-top text-center">{row[4]}</td>
              <td className="py-1 align-top text-center">{row[5]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

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
      {/* SITUATION */}
      <section id="situation" className="pb-16">
        <SectionHeading eyebrow="Where it started.">Situation</SectionHeading>
        <p className="text-[15px] leading-relaxed text-body">
          The assistant was already built, already launched, and already failing.
        </p>
        <p className="text-[15px] leading-relaxed text-body mt-4">
          The AI Virtual Assistant lived inside an employee benefits portal, answering questions about coverage, HSA
          balances, enrollment windows, and personal details. Its purpose was to absorb routine volume from the HR
          team. It was technically live and functioning. Employees just weren't using it — they opened it, asked
          something, didn't get what they needed, and emailed HR instead.
        </p>
        <Quote>
          That is a harder starting position than a blank canvas. A new assistant gets the benefit of the doubt. A
          returning one has to overcome a learned expectation that it won't help.
        </Quote>
      </section>

      {/* STAKES */}
      <section id="stakes" className="py-16 border-t border-band/30">
        <SectionHeading eyebrow="Why it mattered.">Stakes</SectionHeading>
        <p className="text-[15px] leading-relaxed text-body">
          Internal beta wrapped in 2025, and the product was being prepared for rollout to client organisations.
          That changed the nature of the problem. An underperforming assistant used by our own employees is an
          internal disappointment — people route around it and HR absorbs the cost. The same assistant shipped to
          client employers is a product liability. Every client company's HR team forms its impression in the first
          week, and an assistant that fails visibly damages the platform it sits inside, not just itself.
        </p>
        <Quote>
          So the work had a deadline and a bar: diagnose why it had failed, and get it to a standard worth putting
          in front of paying customers.
        </Quote>
      </section>

      {/* STRATEGY */}
      <section id="strategy" className="py-16 border-t border-band/30">
        <SectionHeading eyebrow="Separating two problems that looked like one.">Strategy</SectionHeading>
        <p className="text-[15px] leading-relaxed text-body">
          The brief described an accuracy problem. To test that, I scored the live assistant against five realistic
          scenarios — eligibility, repeated question, out-of-scope, typo'd input, pre-login — rating each on
          consistency, accuracy, tone, clarity, and actionability.
        </p>
        <div className="mt-4">
          <ScorecardTable />
        </div>
        <MethodNote>
          Every scenario failed — but accuracy was rarely the lowest score. Clarity and actionability were.
        </MethodNote>
        <p className="text-[15px] leading-relaxed text-body mt-4">
          All five failed, but for two different reasons — and separating them was the most consequential
          analytical move in the project, because the two had different owners, different timelines, and different
          fixes.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
          <IssueCard title="Model limitations (engineering)">
            Intent detection was weak. Out-of-scope recognition barely functioned — accuracy scored 1. The assistant
            held no memory across turns, so a repeated question was treated as brand new and answered identically.
            Date parsing accepted exactly one format and rejected everything else without saying what format it
            wanted. Largest of all, the data model had no concept of eligibility; it could only speak to current
            enrollment, so "am I eligible for dental?" and "show me everything I'm enrolled in" both dead-ended.
          </IssueCard>
          <IssueCard title="Experience failures (design)">
            On the rows where accuracy scored 3, clarity and actionability scored 2. The assistant frequently
            retrieved the right information and still left the user stuck.
          </IssueCard>
        </div>
        <p className="text-[15px] leading-relaxed text-body mt-4">
          The typo case isolated this cleanly. The assistant parsed the misspelled query <em>correctly</em> and
          returned <em>accurate</em> information — and still failed, because the reply was mechanical, acknowledged
          nothing, and offered no next step. Language understanding worked perfectly and the interaction failed
          anyway.
        </p>
        <p className="text-[15px] leading-relaxed text-body mt-4">
          I took the model gaps to the AI team as a documented roadmap rather than quietly designing around them. An
          interface cannot paper over a missing data model, and pretending otherwise produces a worse product and a
          promise to users the system can't keep.
        </p>
        <p className="text-[15px] leading-relaxed text-body mt-4">
          But the design half was mine, and it was substantial. The old interface proved it: every conversation
          opened with the same four fixed chips — <em>My current benefits</em>, <em>Check document status</em>,{" "}
          <em>Make a life event change</em>, <em>Question about open enrollment</em> — and after any exchange it
          asked "What else I can help you with today?" and served the identical four again. Nothing adapted to what
          had just happened. In one transcript, a user asking about a forgotten password was told to reset it from
          the navigation menu: told <em>where</em> to go rather than taken there.
        </p>
        <Quote>
          The strategic insight: design determines what a model limitation feels like. An assistant that can't
          parse a date can reject the input silently or show the expected format. One that can't answer can
          dead-end or hand off with full context. Same limitation, different product — and the better version buys
          time for the engineering work to land.
        </Quote>

        <SubHeading>The reframe</SubHeading>
        <p className="text-[15px] leading-relaxed text-body">
          This was not an FAQ bot. It was a <strong className="font-semibold text-heading">Benefits Assistant</strong>{" "}
          — a system that helps people <em>complete</em> things, not one that retrieves answers and leaves them
          holding the work.
        </p>
        <p className="text-[15px] leading-relaxed text-body mt-4">
          Five principles followed:
        </p>
        <List
          items={[
            "Understand intent rather than keywords.",
            "Guide rather than lecture.",
            "Reduce typing wherever possible.",
            "Recover gracefully from failure.",
            "Escalate with context.",
          ]}
        />

        <SubHeading>Framing the questions first</SubHeading>
        <p className="text-[15px] leading-relaxed text-body">
          Before touching any UI, I wrote down nine research questions, grouped into three concerns.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          <div className="text-left">
            <Label>Why it failed before</Label>
            <List
              items={[
                "Why was the bot idea dropped previously?",
                "What areas are most users looking for help with?",
              ]}
            />
          </div>
          <div className="text-left">
            <Label>How support works today</Label>
            <List
              items={[
                "How are users communicating with the support team now?",
                "How long does it take to resolve a query?",
                "What process is being followed to resolve tickets?",
              ]}
            />
          </div>
          <div className="text-left">
            <Label>What the assistant should own</Label>
            <List
              items={[
                "Which tickets received today can be handled by the chatbot?",
                "Which tickets shouldn't — are there constraints?",
                "Where should the chatbot be placed?",
                "What are the best practices when designing for a chatbot?",
              ]}
            />
          </div>
        </div>
        <p className="text-[15px] leading-relaxed text-body mt-4">
          Two of these did most of the work. <em>Why was the bot idea dropped previously?</em> protected me from
          redesigning into a wall someone had already hit — the failure had a history, and repeating it was the
          main risk. <em>Which tickets shouldn't go to the chatbot?</em> made scope a deliberate decision rather
          than something discovered later through failure. I wanted the boundary drawn on purpose.
        </p>

        <SubHeading>Audit</SubHeading>
        <p className="text-[15px] leading-relaxed text-body">
          I ran a UX and conversation audit across existing chatbot transcripts, failed search queries, HR
          escalation categories, enrollment and HSA support journeys, and entry points within the portal. The
          scenario scoring above came out of this — I needed the failures characterised, not just counted.
        </p>

        <SubHeading>Preference survey</SubHeading>
        <p className="text-[15px] leading-relaxed text-body">
          A survey with employees (n=7 — small, so treated as directional rather than conclusive) settled the
          placement and onboarding questions:
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
          That last result was useful precisely because it was inconclusive. It told me movability was a genuine
          preference difference rather than a consensus need, so it didn't warrant engineering investment in the
          first release.
        </p>

        <SubHeading>Comparative usability study</SubHeading>
        <p className="text-[15px] leading-relaxed text-body">
          Feedback design turned out to deserve dedicated research, so I ran an unmoderated desktop study with 6
          participants comparing two prototype variants. Participants played an employee completing real benefits
          tasks — adding a newborn as a dependent, checking an HSA balance — while the prototype deliberately
          returned incomplete or unclear answers, so I could observe reactions to genuine failure rather than
          hypothetical ones.
        </p>
        <p className="text-[15px] leading-relaxed text-body mt-4">
          The study combined direct questions, a card sorting exercise ranking four feedback patterns from most
          natural to most disruptive, and open discussion. Findings appear in Decisions below, where they drove the
          calls.
        </p>
      </section>

      {/* DECISIONS */}
      <section id="decisions" className="py-16 border-t border-band/30">
        <SectionHeading eyebrow="Documented with pros, cons, and a stated call.">Decisions</SectionHeading>
        <p className="text-[15px] leading-relaxed text-body">
          Five decisions carried real tension. I documented each with pros, cons, and a stated call, so the
          reasoning would survive after me.
        </p>

        <SubHeading>1. Specialist over generalist</SubHeading>
        <p className="text-[15px] leading-relaxed text-body">
          A generalist assistant reads as smarter, but every wrong answer damages trust across the entire system. A
          specialist has clear scope and builds trust through reliability — at the cost of possibly seeming
          limited.
        </p>
        <p className="text-[15px] leading-relaxed text-body mt-4">
          I went specialist and handled the downside through framing. The assistant opens by naming what it
          specialises in and surfaces three to five high-volume questions, positioning constraint as expertise
          rather than limitation. Those featured questions refresh periodically so it doesn't calcify into a static
          FAQ library.
        </p>
        <p className="text-[15px] leading-relaxed text-body mt-4">
          This decision was reinforced in testing: when the assistant explained <em>why</em> it was showing a
          particular recommendation, observed confidence rose. Users don't need omniscience — they need to
          understand what the system is doing.
        </p>

        <SubHeading>2. Withholding the permanent "Talk to a human" button</SubHeading>
        <p className="text-[15px] leading-relaxed text-body">
          The hardest call, and the one I'd defend most carefully.
        </p>
        <p className="text-[15px] leading-relaxed text-body mt-4">
          A dedicated button respects users' time and signals that we value it. It also depresses AI adoption —
          fewer people ever discover the assistant handles quick answers, which is the entire business case for
          building it.
        </p>
        <p className="text-[15px] leading-relaxed text-body mt-4">
          I withheld the permanent button in favour of smart escalation, and made the handoff good enough to
          justify that. Eight triggers route to a human: an explicit request, an unsolved problem, a question
          repeated twice, requests beyond capability, misunderstanding, detected errors, confidence below
          threshold, and sentiment analysis flagging frustration.
        </p>
        <p className="text-[15px] leading-relaxed text-body mt-4">
          The last two matter most, because they don't require the user to advocate for themselves. A frustrated
          employee shouldn't have to work out the magic words.
        </p>
        <p className="text-[15px] leading-relaxed text-body mt-4">
          Every trigger routes to a confirmation — <em>want to connect?</em> — rather than a forced transfer, so the
          user keeps control. On confirmation the specialist inherits the full conversation, context, and user
          metadata, continuing from where the AI stopped. Declining returns the user to the AI path. Either way the
          interaction closes with a rating and optional comments.
        </p>
        <PlaceholderImage src={escalationImg} alt="Human Support Transition flow diagram" />
        <Quote>
          This decision carried genuine risk. Making help harder to reach is hostile if the AI underneath isn't
          good enough. It was only defensible because it came coupled with the recovery design below, a
          measurement plan (AI-resolved versus transferred), and an explicit commitment to revisit within three to
          six months.
        </Quote>

        <SubHeading>3. Recovery before reporting</SubHeading>
        <p className="text-[15px] leading-relaxed text-body">
          The comparative feedback study produced the clearest signal in the project. Asked what should happen
          after a thumbs-down, <strong className="font-semibold text-heading">76% wanted the assistant to attempt
          conversational recovery first.</strong> Only 12% wanted an immediate detailed form; 8% wanted silent
          collection.
        </p>
        <p className="text-[15px] leading-relaxed text-body mt-4">
          Participants were blunt about it. They'd rather the assistant try helping before asking questions. One
          said they'd close an immediate form and move on.
        </p>
        <Quote>Why ask me why, just give me the right answer.</Quote>
        <p className="text-[15px] leading-relaxed text-body">
          So a thumbs-down doesn't log a complaint. The assistant says <em>"I may not have answered that clearly"</em>{" "}
          and offers to try again first — and the retry produces a genuinely better answer. In the prototype, a
          vague reply about reviewing the benefits portal becomes a specific explanation of qualifying life events
          and where updates are completed.
        </p>
        <PlaceholderImage src={feedbackImg} alt="Recovery sequence and redesigned feedback interface" />
        <p className="text-[15px] leading-relaxed text-body mt-4">
          Only if the user would rather explain do they get structured chips — <em>didn't answer my question</em>,{" "}
          <em>information was unclear</em>, <em>needed more details</em>, <em>skip feedback</em> — followed by
          acknowledgment and an optional detail form with checkboxes and free text. Everything stays inside the
          conversation. No modals, no interruption of the benefits task in progress.
        </p>
        <p className="text-[15px] leading-relaxed text-body mt-4">
          The same study found <strong className="font-semibold text-heading">64% expected human escalation after
          repeated failures</strong>, one participant specifying that two failures should surface support
          immediately. That validated the repeat-question trigger: two failures is the point where users stop
          believing the system can help at all.
        </p>

        <SubHeading>4. Choosing trust over tidiness when the data disagreed</SubHeading>
        <p className="text-[15px] leading-relaxed text-body">
          The feedback study contradicted itself, and resolving that contradiction is the decision I'm most
          confident in.
        </p>
        <p className="text-[15px] leading-relaxed text-body mt-4">
          I tested two variants with 6 participants on desktop, unmoderated, while they played an employee
          completing real tasks — adding a newborn as a dependent, checking an HSA balance. The prototype
          deliberately returned incomplete answers so I could observe reactions to genuine failure.{" "}
          <strong className="font-semibold text-heading">Version A</strong> revealed thumbs controls on hover;{" "}
          <strong className="font-semibold text-heading">Version B</strong> showed them below every response.
        </p>
        <p className="text-[15px] leading-relaxed text-body mt-4">
          <strong className="font-semibold text-heading">Card sorting favoured hover.</strong> Ranked most natural
          to most disruptive, hover/tap reveal was most natural for 68%. Always-visible was most natural for only
          22%, acceptable for 48%, disruptive for 30%. Post-session surveys ranked it worst — disruptive for 76%.
        </p>
        <p className="text-[15px] leading-relaxed text-body mt-4">
          <strong className="font-semibold text-heading">Stated preference favoured always-visible.</strong> Four
          of five profiled participants preferred it. They noticed the controls immediately and associated
          visibility with trust and transparency. One said it made them feel they had a voice; another that it
          showed the product cared about quality.
        </p>
        <p className="text-[15px] leading-relaxed text-body mt-4">
          Both findings were real. Always-visible improved discoverability significantly, but participants
          described repeated icons as visually repetitive over longer conversations and said the interface started
          to feel "survey-like." Hover reduced clutter and improved readability, but most participants didn't
          notice the controls at all initially — one said plainly they'd never have given feedback because they
          weren't aware it was possible.
        </p>
        <Quote>
          Averaging the two would have produced a compromise serving neither. My read: the card sort measured what
          feels pleasant moment to moment; stated preference measured what makes the system feel trustworthy. Hover
          wins on aesthetics, visibility wins on trust.
        </Quote>
        <p className="text-[15px] leading-relaxed text-body mt-4">
          For an assistant rebuilding credibility it had already lost, about to face client scrutiny, trust
          outranked tidiness. I shipped always-visible and treated the repetition finding as a constraint on the
          control's visual weight rather than a reason to hide it.
        </p>

        <SubHeading>5. Interface decisions before client rollout</SubHeading>
        <p className="text-[15px] leading-relaxed text-body">
          Small individually; together they changed how the assistant reads.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
          <IssueCard title="The name">
            The assistant had shipped under a human first name. I moved it to "AI Virtual assistant" — it removes
            the guessing game about what the thing is and is transparent about being AI. For a product being sold
            to client employers, a human-sounding name for a machine is a trust liability, not a warmth feature. It
            also shed the accumulated internal memory of an assistant that didn't work.
          </IssueCard>
          <IssueCard title="Header">
            Rebalanced icon and label to scan in one pass, rounded corners and gradient, reduced height so more
            conversation is visible without scrolling, and a more distinct close control — if someone doesn't want
            the assistant, dismissing it should be effortless rather than a dark pattern.
          </IssueCard>
          <IssueCard title="Input">
            Added voice alongside typing: faster for many users, materially more accessible for people with
            disabilities or anyone who finds typing effortful, and groundwork for multimodal input later.
          </IssueCard>
          <IssueCard title="Timestamps — removed from AI, kept for human support">
            On AI replies they cost vertical space, added repetition, and made the assistant feel like a ticketing
            system. But when someone is waiting on a specialist, a timestamp <em>is</em> accountability — how long
            they've waited, when someone last replied.
          </IssueCard>
        </div>

        <SubHeading>Decisions expressed as flows</SubHeading>
        <p className="text-[15px] leading-relaxed text-body">
          The task architecture reflects the same guide-don't-retrieve principle.
        </p>
        <p className="text-[15px] leading-relaxed text-body mt-4">
          <strong className="font-semibold text-heading">Life events and dependents:</strong> launch → report a
          life event → event type (birth/adoption, marriage, divorce or legal separation, HSA change, other) → date
          → required fields → edge cases. Rather than assuming a dependent shares the employee's address, the
          assistant asks and captures theirs if not.
        </p>
        <PlaceholderImage src={taskFlowImg} alt="Add family member flow diagram" />
        <p className="text-[15px] leading-relaxed text-body mt-4">
          <strong className="font-semibold text-heading">Adding coverage:</strong> the assistant asks whether to
          include the dependent across benefits, then shows eligible plans with ineligible ones progressively
          disclosed <em>and explained</em> rather than silently hidden. Selecting plans surfaces cost impact before
          and after, monthly premium, effective date, pre-tax and post-tax impact, and employer contributions — all
          before confirmation. Documents are collected when the event requires them; otherwise the assistant
          confirms honestly that updates are saved and sent for HR review.
        </p>
        <p className="text-[15px] leading-relaxed text-body mt-4">
          Every flow has an exit. "I'll update later," "I'll upload later," and redirects to the benefits page end
          cleanly rather than trapping users mid-task. Someone who abandons should be able to abandon gracefully.
        </p>
      </section>

      {/* IMPACT */}
      <section id="impact" className="py-16 border-t border-band/30">
        <SectionHeading eyebrow="What changed.">Impact</SectionHeading>
        <p className="text-[15px] leading-relaxed text-body">Following the redesign:</p>
        <List
          items={[
            "Chatbot adoption increased.",
            "Task completion improved.",
            "HR escalations for common questions decreased.",
            "User confidence improved.",
            "Conversation abandonment decreased.",
          ]}
        />
        <MethodNote>These are directional; I don't publish confidential business metrics.</MethodNote>
        <p className="text-[15px] leading-relaxed text-body mt-4">
          Task-based testing also confirmed two design bets.{" "}
          <strong className="font-semibold text-heading">Buttons plus typing beat typing alone</strong>, consistent
          with the 71.4% who preferred clickable onboarding in the earlier survey — open-ended input isn't freedom
          when you can't see what the system can do, it's a guessing game. And{" "}
          <strong className="font-semibold text-heading">explaining reasoning increased confidence</strong>, which
          is the mechanism underneath specialist positioning.
        </p>
        <Quote>
          One finding complicated a decision rather than confirming it. Users wanted a visible "talk to a person"
          option — but rarely used it when the AI was working. That doesn't vindicate the withheld button; it
          qualifies it. Visibility and usage are different needs. What users wanted was assurance that a human was
          reachable, and I had partly conflated that with wanting the button itself. The design still satisfies the
          underlying need, since escalation is one turn away at any of eight triggers — but a persistent line of
          copy stating a specialist is available on request might deliver the reassurance without the adoption
          cost.
        </Quote>
        <PlaceholderImage src={finalImg} alt="Final assistant interface" />
      </section>

      {/* GROWTH */}
      <section id="growth" className="pt-16">
        <SectionHeading eyebrow="What I'd carry forward.">Growth</SectionHeading>
        <List
          items={[
            "Model quality and interaction design are both necessary; neither is sufficient. Some failures needed engineering — eligibility modelling, intent detection, conversational memory — and no interface work would have substituted. But the most instructive case was one where the model performed perfectly and the interaction failed anyway. Fixing only the model would have produced an accurate assistant people still abandoned.",
            "Trust is built through recovery, not perfection. 76% wanted the assistant to try again before asking what went wrong. It will be wrong sometimes; what determines whether people return is the thirty seconds after.",
            "When research methods disagree, the disagreement is the finding. Card sorting and stated preference pointed opposite directions on feedback visibility. Working out what each method was actually measuring produced a defensible decision; averaging them would have produced a mediocre one.",
            "Conversation is navigation. An open text field isn't freedom if users can't see the shape of what's available. Chips, progressive disclosure, and featured questions are wayfinding.",
            "Escalation is part of the experience, not an admission of failure. A handoff carrying full context is a good outcome. A handoff that makes the user start over is a second failure stacked on the first.",
          ]}
        />

        <SubHeading>What I'd do differently</SubHeading>
        <List
          items={[
            "Quantify the baseline harder. I have qualitative scoring across five scenarios and directional data from small samples, but no clean pre-redesign completion rate to hold the post-redesign number against. That also weakens the AI-resolved-versus-transferred measurement plan, which needs a comparison point to mean anything.",
            "Test the withheld “talk to a human” button as an explicit A/B, the way I eventually did with feedback visibility. The reasoning was documented and sound, but it stayed a reasoned bet longer than it needed to — and the feedback study proved the team could run a clean comparison when it mattered.",
            "Surface the eligibility data gap sooner. It was a data-model constraint, not a design one, and it emerged through scenario testing rather than early technical discovery. Finding it in week one would have changed what I scoped.",
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
