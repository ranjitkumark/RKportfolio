import React, { useState } from "react";
import {
  Quote,
  SectionHeading,
  SubHeading,
  Label,
  List,
  PlaceholderImage,
  FigmaEmbed,
  IssueCard,
  TextColumn,
  StatGrid,
  useScrollSpy,
  CaseStudyNav,
  CaseStudyPageShell,
  ViewToggle,
} from "../components/CaseStudyKit.jsx";
import valuePropImg from "../assets/case-studies/hsa/value-proposition.png";
import mindmapImg from "../assets/case-studies/hsa/mindmap.png";
import taskflowImg from "../assets/case-studies/hsa/taskflow.png";
import prototypeImg from "../assets/case-studies/hsa/prototype.png";

const HSA_FIGMA_EMBED_SRC =
  "https://www.figma.com/embed?embed_host=share&url=" +
  encodeURIComponent(
    "https://www.figma.com/design/KYWqNLUS4PVqKNDEN9KZ7b/PS?node-id=40000089-3833&t=cRXKrVX7fct1RkH2-1"
  );

const NAV_SECTIONS = [
  { id: "situation", label: "Situation" },
  { id: "stakes", label: "Stakes" },
  { id: "strategy", label: "Strategy" },
  { id: "decisions", label: "Decisions" },
  { id: "impact", label: "Impact" },
  { id: "growth", label: "Growth" },
];

function LedgerCard({ title, rows }) {
  return (
    <div className="bg-card border border-band/30 rounded-xl p-4 text-left">
      <p className="text-[13px] font-semibold text-heading mb-3">{title}</p>
      <table className="w-full text-[13.5px] text-body">
        <thead>
          <tr className="text-left text-muted">
            <th className="pb-2 font-medium">Period</th>
            <th className="pb-2 font-medium">Coverage on file</th>
            <th className="pb-2 font-medium">Limit applied</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]}>
              <td className="py-1 pr-2 align-top">{row[0]}</td>
              <td className="py-1 pr-2 align-top">{row[1]}</td>
              <td className="py-1 align-top">{row[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function MethodNote({ children }) {
  return <p className="text-[13px] italic text-muted mt-4">{children}</p>;
}

const SKIM_META = [
  {
    label: "SCOPE",
    value: "2 experiences, 2 user bases · 50+ screens",
  },
  {
    label: "TIMELINE",
    value: "18 weeks research · 6 months iteration",
  },
  {
    label: "OUTCOME",
    value: "Shipped ahead of Open Enrollment · workaround eliminated",
  },
];

const SKIM_STATS = [
  { value: "38 → 21 MIN", label: "Average time on task" },
  { value: "72 → 0", label: "Fake populations built per client" },
];

function SkimView() {
  return (
    <div>
      <h1 className="text-[32px] sm:text-[44px] leading-[1.15] font-semibold text-heading mb-6 max-w-3xl">
        HSA had the most bugs and the least trust of any benefit we offered.
      </h1>
      <p className="text-[15px] sm:text-[16px] leading-relaxed text-body max-w-2xl">
        It was broken enough that admins had built their own workaround — 72 fake employee populations per client,
        hand-assembled, purely to apply a federal rule the system couldn't hold. Nobody had ever filed a bug for it.
        To the people doing it, it wasn't a defect. It was the job.
      </p>
      <p className="text-[14px] font-medium text-accent mt-4">Senior UX Designer &nbsp;| End to end</p>

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
          HSA had the most bugs and the least trust of any benefit we offered. It was broken enough that admins had
          built their own workaround — 72 fake employee populations per client, hand-assembled, purely to apply a
          federal rule the system couldn't hold. Nobody had ever filed a bug for it.
        </p>
        <Quote>
          That last detail is the one that matters. The workaround wasn't in the backlog, wasn't in a survey, and
          wasn't in any ticket. To the people doing it, it wasn't a defect. It was the job.
        </Quote>
      </section>

      {/* STAKES */}
      <section id="stakes" className="py-16 border-t border-band/30">
        <SectionHeading eyebrow="Why it mattered.">Stakes</SectionHeading>
        <Quote>An HSA error isn't a bad experience. It's a tax event.</Quote>
        <p className="text-[15px] leading-relaxed text-body">
          Most benefits problems are comprehension problems. HSA isn't. The annual contribution limit is fixed in
          federal tax code and moves on three axes at once: coverage tier, age, and the number of months a person
          actually held qualifying coverage. Change any one of them mid-year and the ceiling moves.
        </p>
        <p className="text-[15px] leading-relaxed text-body mt-4">
          Go over that ceiling and the consequence isn't confusion. It's an excess contribution the employee has to
          unwind before their filing deadline or pay a penalty on, a corrected tax form, a call to HR, and a broker
          asking the employer why their platform allowed it.
        </p>
        <p className="text-[15px] leading-relaxed text-body mt-4">
          Our platform modelled none of the three. Not tiers, not catch-up, not proration. Every group we onboarded
          was one ordinary life event — a marriage, a birth, a new hire in March — away from a compliance problem we
          had no mechanism to detect.
        </p>
        <p className="text-[15px] leading-relaxed text-body mt-4">
          Three constraints were immovable, and I designed inside all of them:
        </p>
        <List
          items={[
            "The Open Enrollment date, which could not move.",
            "The coupling — contribution logic reaches payroll files, custodian data exchange, downstream APIs and year-end reporting.",
            "An existing platform system I was extending rather than replacing.",
          ]}
        />
      </section>

      {/* STRATEGY */}
      <section id="strategy" className="py-16 border-t border-band/30">
        <SectionHeading eyebrow="What actually happened when someone tried it.">Strategy</SectionHeading>

        <SubHeading>I went and watched somebody do it</SubHeading>
        <p className="text-[15px] leading-relaxed text-body">
          I didn't start in the backlog. I sat with the configuration team that stands up benefits for organisations
          of 1,500 employees and up, and asked them to build a real HSA plan while I watched — because the distance
          between how a feature is specced and how it survives a 4,000-person group is where the actual product
          lives.
        </p>
        <p className="text-[15px] leading-relaxed text-body mt-4">
          What surfaced wasn't a usability finding. It was an entire undocumented process:
        </p>
        <List
          items={[
            "Coverage tiers and the 55-and-over catch-up weren't supported at all, so compliance couldn't be configured — only approximated.",
            "To approximate it, admins hand-built 72 separate fake employee populations per client, one for every permutation of tier, age band and funding schedule.",
            "No validation and no preview, so one mistake propagated silently across hundreds of real people and surfaced at first payroll.",
            "Federal limits came from memory and a printed sheet taped to a monitor.",
          ]}
        />
        <p className="text-[15px] leading-relaxed text-body mt-4">
          The workaround wasn't evidence our users were resourceful. It was evidence we'd moved compliance onto the
          person least equipped to carry it.
        </p>
        <MethodNote>
          Method: contextual inquiry with the enterprise configuration team, six sessions across four live group
          configurations. Observation, not interview — the workaround only exists in the doing.
        </MethodNote>
        <PlaceholderImage src={valuePropImg} alt="The 72-population configuration structure admins built as a workaround" />

        <SubHeading>Two vocabularies, one defect</SubHeading>
        <p className="text-[15px] leading-relaxed text-body">
          Interviews with employees, administrators and resellers described the same failure from opposite ends.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div className="text-left">
            <Label>Employees — can't trust the number on screen</Label>
            <List
              items={[
                "No mid-year contribution change without going through HR.",
                "Can't tell employer money from their own.",
                "Stop trusting the balance after a tier change.",
                "No guidance on their limit or catch-up eligibility.",
              ]}
            />
          </div>
          <div className="text-left">
            <Label>Employers and admins — can't stop fighting the configuration</Label>
            <List
              items={[
                "Building dozens of fake populations per client.",
                "No flexible funding schedules — quarterly, lump sum, off-cycle.",
                "Every correction manual and risky.",
                "Reporting needs hand-repair before it goes upstream.",
              ]}
            />
          </div>
        </div>

        <SubHeading>The number was wrong, and nothing in the system said so</SubHeading>
        <p className="text-[15px] leading-relaxed text-body">
          The audit found one mechanical failure underneath every complaint we'd logged. Year-to-date contributions
          were calculated using an employee's <em>most recent</em> coverage tier. There was no concept of a coverage
          history — so the moment anyone moved from self-only to family, their year-to-date total silently became
          wrong. Not flagged. Not estimated. Wrong.
        </p>
        <p className="text-[15px] leading-relaxed text-body mt-4">
          One employee, one plan year, self-only through June and family from July:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <LedgerCard
            title="As the platform calculated it — incorrect"
            rows={[["Jan – Dec", "Family (latest tier only)", "Family cap × 12/12"]]}
          />
          <LedgerCard
            title="As the rule actually works — correct"
            rows={[
              ["Jan – Jun", "Self-only", "Self-only cap × 6/12"],
              ["Jul – Dec", "Family", "Family cap × 6/12"],
            ]}
          />
        </div>
        <p className="text-[15px] leading-relaxed text-body mt-4">
          Six months of self-only coverage are treated as family coverage. The employee is told they have more room
          than the law allows. Every dollar of the gap between these two ledgers is an excess contribution somebody
          unwinds at tax time.
        </p>
        <p className="text-[15px] leading-relaxed text-body mt-4">
          The failure chain: an employee changes coverage mid-year → year-to-date recalculates on the new tier only
          → remaining room is wrong → payroll deducts the wrong amount → manual true-up, ticket, trust gone.
        </p>
        <p className="text-[15px] leading-relaxed text-body mt-4">
          Once that was on paper, four items the team had been carrying as separate roadmap tickets collapsed into
          one problem with four faces: no mid-year self-service, no separation of employer and employee money,
          incorrect contribution math, and admin tools with no reliable way to inspect or correct any of it.
        </p>

        <SubHeading>The category gap</SubHeading>
        <p className="text-[15px] leading-relaxed text-body">
          I audited the platforms we lost deals to. None of them enforced federal caps automatically either.
        </p>
        <p className="text-[15px] leading-relaxed text-body mt-4">
          That reframed the work: not catching up, but closing a gap the whole category had normalised. It also
          became the argument I used to hold scope when the timeline tightened — this wasn't a defect backlog, it
          was the one thing nobody had.
        </p>
      </section>

      {/* DECISIONS */}
      <section id="decisions" className="py-16 border-t border-band/30">
        <SectionHeading eyebrow="Three calls I'd defend.">Decisions</SectionHeading>

        <SubHeading>1. Rebuilding the ledger instead of patching the warning</SubHeading>
        <p className="text-[15px] leading-relaxed text-body">
          With the date fixed and the coupling that wide, the real decision wasn't a visual one. It was where the
          weeks went.
        </p>
        <div className="grid grid-cols-1 gap-3 mt-4">
          <IssueCard title="Rejected — put limit warnings on the existing flow.">
            Cheapest and fastest. Minimal engineering, visible progress, comfortably inside the date. I argued
            against it: a warning computed from a year-to-date figure that's already wrong doesn't reduce anybody's
            risk. It states a wrong number more loudly and makes us accountable for having stated it.
          </IssueCard>
          <IssueCard title="Taken — rebuild the ledger to hold a coverage history.">
            Give the system the concept it was missing, then rebuild configuration and enrollment on a number that's
            actually correct. The only option where every downstream fix compounds instead of papering over.
          </IssueCard>
          <IssueCard title="Deferred — real-time payroll write-back.">
            The genuinely complete answer, with contributions reconciling live rather than at cycle boundaries. Not
            reachable inside the date. Written up as a known limitation with a mitigation path, because an
            undocumented limitation is just the next team's workaround.
          </IssueCard>
        </div>
        <p className="text-[15px] leading-relaxed text-body mt-4">
          Choosing the ledger cost me visible progress. For roughly five weeks I had flow diagrams and calculation
          models to show and nothing that looked like a product — at exactly the point in the cycle when progress
          gets measured in screens. I paid for it by moving two secondary items, off-cycle funding schedules and a
          bulk-correction tool, into the following release.
        </p>
        <PlaceholderImage
          src={taskflowImg}
          alt="The contribution logic model — coverage history, headroom, catch-up, proration"
        />

        <SubHeading>2. Making the constraint visible instead of arguing for it</SubHeading>
        <p className="text-[15px] leading-relaxed text-body">
          Nobody on the team had held the full downstream picture in one view. Before ideating further, I ran a
          systems mapping session with the PM, PO and engineering manager to trace every system a change to
          contribution logic would touch — payroll files, custodian exchange, downstream APIs, year-end reporting.
        </p>
        <p className="text-[15px] leading-relaxed text-body mt-4">
          Once the coupling was visible on one wall, "just add warnings" stopped looking like the cheap option and
          started looking like the expensive one.
        </p>
        <p className="text-[15px] leading-relaxed text-body mt-4">
          I didn't win that argument by being persuasive. I won it by making the problem legible to the people who
          had to build it.
        </p>
        <p className="text-[15px] leading-relaxed text-body mt-4">
          The same thing happened at smaller scale. My flows for a mid-year tier change surfaced a case nobody had
          scoped: an employee who changes coverage <em>twice</em> in one plan year. Engineering had modelled history
          as a single prior state, which handles the common case and quietly fails the rest. Seeing the flow, they
          re-scoped to a full history. That's the difference between proration being correct and roughly correct.
        </p>
        <PlaceholderImage src={mindmapImg} alt="The systems map — every system touched by contribution logic" />

        <SubHeading>3. Shipping the design I'd argued against</SubHeading>
        <p className="text-[15px] leading-relaxed text-body">
          For enrollment I tested two directions. I expected the guided flow to win — progressive disclosure is the
          standard answer to a decision-support problem, and I'd framed this as a decision-support problem.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
          <IssueCard title="Not shipped — step-by-step.">
            One decision at a time. Lower load per screen, but the full picture only assembles at the end.
          </IssueCard>
          <IssueCard title="Shipped — everything on one page.">
            Contribution, employer match and remaining headroom together, recalculating live.
          </IssueCard>
        </div>
        <StatGrid
          cols={4}
          stats={[
            { value: "64%", label: "Preferred one page" },
            { value: "70%", label: "Found it easy to use" },
            { value: "70%", label: "Felt confident enrolling" },
            { value: "90%", label: "Felt secure enrolling" },
          ]}
        />
        <p className="text-[15px] leading-relaxed text-body mt-6">
          It lost. People weren't struggling to <em>choose</em> an amount — they were struggling to{" "}
          <em>believe</em> the amounts in front of them, and pacing made that worse, because anything a system
          withholds reads as something the system is hiding.
        </p>
        <p className="text-[15px] leading-relaxed text-body mt-4">
          So the shipped design stopped sequencing and started exposing.
        </p>
        <MethodNote>
          Method: unmoderated preference test, 18 participants, all enrolled in an employer-sponsored HDHP with an
          active HSA. Confidence and security are attitudinal measures taken immediately post-task — a directional
          read on trust, not a substitute for the behavioural data below.
        </MethodNote>
        <PlaceholderImage
          src={prototypeImg}
          alt="The two enrollment directions side by side — stepped vs single-page with live recalculation"
        />

        <SubHeading>What was mine, and what wasn't</SubHeading>
        <p className="text-[15px] leading-relaxed text-body">
          A rebuild this coupled isn't a solo act, and case studies that imply otherwise are the least believable
          kind.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          <TextColumn title="Mine">
            <List
              items={[
                "Field study and interview programme.",
                "The contribution logic model — coverage history, headroom, catch-up, proration.",
                "Admin configuration IA and validation rules.",
                "The enrollment flow, low to high fidelity.",
                "Testing.",
                "Design QA through build.",
              ]}
            />
          </TextColumn>
          <TextColumn title="Shared">
            <List
              items={[
                "The ledger-versus-validation decision — my argument, engineering's feasibility, the PM's call.",
                "Scope and sequencing against the date.",
                "Compliance interpretation, with our benefits SME.",
              ]}
            />
          </TextColumn>
          <TextColumn title="Not mine">
            <List
              items={[
                "Implementation and data migration.",
                "Payroll and custodian integration contracts.",
                "Release planning.",
                "Final compliance sign-off.",
              ]}
            />
          </TextColumn>
        </div>
      </section>

      {/* IMPACT */}
      <section id="impact" className="py-16 border-t border-band/30">
        <SectionHeading eyebrow="What changed.">Impact</SectionHeading>
        <StatGrid
          cols={4}
          stats={[
            { value: "↓ 45%", label: "Configuration time" },
            { value: "179 → 97", label: "Open Enrollment tickets" },
            { value: "38 → 21 MIN", label: "Average time on task" },
            { value: "72 → 0", label: "Fake populations per client" },
          ]}
        />
        <p className="text-[15px] leading-relaxed text-body mt-6">
          The shipped work replaced the manual apparatus — the fake populations, the memorised limits, the silent
          miscalculations — with tier-aware calculation, guided configuration, and validation at the point of entry
          instead of at first payroll.
        </p>
        <p className="text-[15px] leading-relaxed text-body mt-4">
          HSA didn't get simpler by losing capability. It got simpler because the system finally did the
          remembering.
        </p>
        <Quote>
          The metric I actually wanted, I couldn't get. Excess-contribution corrections per plan year is the number
          that would have proven the compliance case directly, and we couldn't instrument it in time.
        </Quote>
        <MethodNote>
          Measured across Open Enrollment 2024 against Open Enrollment 2025, on comparable group sizes. Ticket
          volume moves for more than design reasons; I credit the calculation fix and the validation together, not
          the interface alone.
        </MethodNote>

        <SubHeading>Final product</SubHeading>
        <p className="text-[15px] leading-relaxed text-body">
          The shipped enrollment and configuration experience, live in Figma — explore it directly rather than a
          static capture.
        </p>
        <FigmaEmbed src={HSA_FIGMA_EMBED_SRC} title="HSA final product — Figma" />
      </section>

      {/* GROWTH */}
      <section id="growth" className="pt-16">
        <SectionHeading eyebrow="What I'd carry forward.">Growth</SectionHeading>
        <List
          items={[
            "Watch the work, don't ask about it. The 72 populations were never in a ticket or a survey. They surfaced because I asked someone to configure a real plan while I watched. Nobody reports a workaround they've stopped noticing.",
            "In regulated products, the logic is the design. The most consequential decision I made was about how contribution history gets calculated. Every screen was downstream of it.",
            "Being wrong early is the cheap version. I expected the guided flow to win and it lost. A week to learn that in a preference test; a plan year to learn it at Open Enrollment.",
            "Make the constraint visible, not the argument. The systems map changed the technical direction more than any case I could have made verbally. Shared understanding beats persuasion.",
          ]}
        />

        <SubHeading>The one I'd take back</SubHeading>
        <p className="text-[15px] leading-relaxed text-body">
          I brought our compliance SME in at week six, once the logic model was already drafted. Two of her
          corrections — how proration interacts with a mid-year plan termination, and how catch-up eligibility works
          for somebody turning 55 in July — forced rework I'd have avoided by having her in the first mapping
          session.
        </p>
        <p className="text-[15px] leading-relaxed text-body mt-4">
          On regulated work I now treat compliance as a research participant, not a reviewer.
        </p>
      </section>
    </>
  );
}

export default function HSACaseStudy({ onBack, onOpenResume }) {
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
