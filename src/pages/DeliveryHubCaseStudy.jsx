import React, { useState } from "react";
import {
  Quote,
  SectionHeading,
  SubHeading,
  Label,
  List,
  PlaceholderImage,
  IssueCard,
  StatGrid,
  useScrollSpy,
  CaseStudyNav,
  CaseStudyPageShell,
  ViewToggle,
} from "../components/CaseStudyKit.jsx";
import deliveryHubImg from "../assets/case-studies/mocks/mock-delivery-hub.png";

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

function CycleTimeTable() {
  const rows = [
    ["Small", "90–95 days", "70 days", "~22–26%"],
    ["Medium", "120–140 days", "90 days", "~25–36%"],
    ["Large", "200–220 days", "160 days", "~20–27%"],
  ];
  return (
    <div className="bg-card border border-band/30 rounded-xl p-4 text-left overflow-x-auto">
      <table className="w-full text-[13.5px] text-body min-w-[420px]">
        <thead>
          <tr className="text-left text-muted">
            <th className="pb-2 font-medium">Client size</th>
            <th className="pb-2 font-medium">Before</th>
            <th className="pb-2 font-medium">After</th>
            <th className="pb-2 font-medium">Reduction</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]}>
              <td className="py-1 pr-2 align-top font-medium text-heading">{row[0]}</td>
              <td className="py-1 pr-2 align-top">{row[1]}</td>
              <td className="py-1 pr-2 align-top">{row[2]}</td>
              <td className="py-1 align-top">{row[3]}</td>
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
    value: "~32 configuration modules · three user types on one surface",
  },
  {
    label: "TIMELINE",
    value: "2024–2026",
  },
  {
    label: "OUTCOME",
    value: "Cycle time down 20–36% across all client segments",
  },
];

const SKIM_STATS = [{ value: "35%", label: "Of implementation effort spent on configuration and QA" }];

function SkimView() {
  return (
    <div>
      <h1 className="text-[32px] sm:text-[44px] leading-[1.15] font-semibold text-heading mb-6 max-w-3xl">
        Configuration and QA consumed 35% of implementation effort — on a surface nobody had redesigned in a
        decade.
      </h1>
      <p className="text-[15px] sm:text-[16px] leading-relaxed text-body max-w-2xl">
        Step completion was a self-attested checkbox with no validation behind it. A step could be marked complete
        while being wrong, and the error surfaced weeks later at system testing, after everything downstream had
        been built on it. I moved validation out of the sequence entirely, held the first release to zero new
        components, and measured the result across small, medium and large clients to keep it honest.
      </p>
      <p className="text-[14px] font-medium text-accent mt-4">
        Sole Designer &nbsp;| Research, IA, Interaction Design, Design Specification
      </p>

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
          Delivery Hub is the configuration surface where implementation analysts, reseller partners, and employer
          HR admins set up a benefits plan year — benefits, plans, rates, eligibility, populations, integrations,
          compliance. It is the step between a signed contract and a working enrollment site.
        </p>
        <p className="text-[15px] leading-relaxed text-body mt-4">
          The core of it hadn't been meaningfully redesigned in roughly a decade. Tools had accumulated around it —
          a guided renewal tool, a separate branding page, a separate employee experience configuration — but each
          was built as its own destination, and none was grounded in research into what admins actually needed.
        </p>
        <Quote>
          The result wasn't one bad screen. It was a configuration surface spread across two design eras, where the
          same setting could be changed in three places under three different rules.
        </Quote>
        <PlaceholderImage
          src={deliveryHubImg}
          alt="The legacy 24-step configuration table — flat list, three-state status icons, three empty columns"
        />
      </section>

      {/* STAKES */}
      <section id="stakes" className="py-16 border-t border-band/30">
        <SectionHeading eyebrow="Why it mattered.">Stakes</SectionHeading>
        <p className="text-[15px] leading-relaxed text-body">
          An internal Customer Excellence workshop mapped implementation across People, Process, and Technology,
          covering both the direct and partner channels. Its effort distribution framed everything I did
          afterward:
        </p>
        <StatGrid
          cols={3}
          stats={[
            { value: "9%", label: "Planning" },
            { value: "15%", label: "Implementation Discovery" },
            { value: "35%", label: "Configuration + QA" },
            { value: "23%", label: "System Testing" },
            { value: "12%", label: "Data" },
            { value: "6%", label: "Active site / Add-on" },
          ]}
        />
        <Quote>
          Configuration and QA was the single largest block of implementation effort, and it was the part of the
          product nobody had redesigned.
        </Quote>
        <p className="text-[15px] leading-relaxed text-body">
          The workshop's recurring findings pointed at the same surface from different angles:
        </p>
        <List
          items={[
            "Missing wizard functionality.",
            "Deprecated features never cleaned up.",
            "Duplicated and badly ordered steps.",
            "No pre-validation.",
            "Routine rework from bad configuration.",
            "No audit trail.",
            "Too many clicks to reach common data.",
          ]}
        />
        <p className="text-[15px] leading-relaxed text-body mt-4">
          That gave me a problem worth solving. It did not tell me what to build — the workshop was run with SMEs
          and process owners, not with the analysts who sit in the tool all day.
        </p>

        <SubHeading>The mechanism was a checkbox</SubHeading>
        <p className="text-[15px] leading-relaxed text-body">
          The legacy system was a flat table of 24 configuration steps. No grouping, no phases, no expressed
          dependencies — so nothing indicated that Define Benefits gates Define Benefit Plans, which gates Define
          Costs. Status was a three-state icon with no legend. On a live implementation more than half the rows
          showed red, and a default state of <em>mostly alarming</em> trains people to stop reading it. Three
          columns sat permanently empty, consuming most of the table's width. No progress indicator, and no answer
          to "what is blocking me."
        </p>
        <p className="text-[15px] leading-relaxed text-body mt-4">
          Inside each step, the same 24-item list reappeared as a left navigation, so the overview and the detail
          duplicated one another. The styling was roughly 2005-era: bevelled tabs, fieldset borders, icon-only
          affordances, disabled controls that gave no indication of what would enable them.
        </p>
        <p className="text-[15px] leading-relaxed text-body mt-4">
          And completion was a checkbox: <strong className="font-semibold text-heading">Mark as Completed</strong>,
          self-attested, with no validation behind it.
        </p>
        <p className="text-[15px] leading-relaxed text-body mt-4">
          That last detail became the foundation of the redesign. A step could be marked complete while being
          wrong. Everything configured afterward would be built on top of it, and the error would surface at system
          testing — weeks later, after the dependent work was already done.
        </p>
        <Quote>
          The 35% figure and the rework complaints were not two problems. They were the same problem, and its
          mechanism was a checkbox.
        </Quote>
      </section>

      {/* STRATEGY */}
      <section id="strategy" className="py-16 border-t border-band/30">
        <SectionHeading eyebrow="Discovery first, validation second.">Strategy</SectionHeading>

        <SubHeading>Discovery first, validation second — deliberately</SubHeading>
        <p className="text-[15px] leading-relaxed text-body">
          Alongside the workshop evidence and SME input, I interviewed implementation specialists and sat in on
          client onboarding calls before the first release. What they described was consistent across modules:
        </p>
        <List
          items={[
            "They couldn't find things.",
            "They couldn't tell what was safe to change.",
            "They didn't know what to do next.",
            "They found out they'd got something wrong far too late.",
          ]}
        />
        <p className="text-[15px] leading-relaxed text-body mt-4">
          Those four complaints, applied across 32 modules, became the principles the redesign is built from.
        </p>
        <p className="text-[15px] leading-relaxed text-body mt-4">
          Validation came second, and by design. Once the beta was usable, I ran a structured comparison with four
          to five implementation analysts from the operations team: the same configuration work, done the legacy
          way and then the redesigned way, across small, medium and large client profiles.
        </p>

        <SubHeading>The control that made the comparison mean something</SubHeading>
        <p className="text-[15px] leading-relaxed text-body">
          <strong className="font-semibold text-heading">The first pass introduced no new components.</strong>{" "}
          Holding the interaction vocabulary constant meant any difference in completion time could be attributed
          to structure — grouping, retrieval, validation placement — rather than to novelty or to the simple fact
          of a screen being newer. It also meant analysts could work the redesigned flow without training, which is
          what made comparing the two fair at all.
        </p>
        <p className="text-[15px] leading-relaxed text-body mt-4">
          This cost me the more impressive-looking first release. It bought a result I could actually defend, and
          it's the methodological decision I'd repeat.
        </p>

        <SubHeading>Principles over screens</SubHeading>
        <p className="text-[15px] leading-relaxed text-body">
          Redesigning 32 configuration modules one at a time would have produced 32 unrelated screens. The work
          only held together because a small number of decisions applied everywhere.
        </p>
      </section>

      {/* DECISIONS */}
      <section id="decisions" className="py-16 border-t border-band/30">
        <SectionHeading eyebrow="Seven principles, stated once.">Decisions</SectionHeading>
        <p className="text-[15px] leading-relaxed text-body">
          Each principle is stated once and illustrated with the module where it's clearest.
        </p>

        <SubHeading>1. Validation is ambient, not terminal</SubHeading>
        <p className="text-[15px] leading-relaxed text-body">
          In the legacy system, correctness was asserted by the person doing the work. In the beta, error checking
          existed as a module positioned above Testing — so you encountered it when you reached it, which is to say
          after the damage.
        </p>
        <p className="text-[15px] leading-relaxed text-body mt-4">
          Validation moved out of the sequence entirely and became a persistent panel, visible while you work,
          listing specific errors and warnings — a plan with no costs configured, a benefit with no plans attached
          — each linking directly to the step that caused it. Detect, locate, fix, without hunting.
        </p>
        <Quote>
          This is the change I'd defend first. It converts a self-attested checkbox into continuous feedback, and
          it attacks the rework cost at its source rather than catching it at the end.
        </Quote>
        <PlaceholderImage
          src={deliveryHubImg}
          alt="The persistent validation panel, showing linked errors and warnings alongside the configuration work"
        />

        <SubHeading>2. Solve retrieval, not volume</SubHeading>
        <p className="text-[15px] leading-relaxed text-body">
          With 31 cards on the dashboard and 94 entries inside a single module, analysts were scanning rather than
          navigating. The instinct is to cut the list. But the configuration steps map to genuine domains and the
          population entries are real client data — neither was padded.
        </p>
        <p className="text-[15px] leading-relaxed text-body mt-4">
          So the answer everywhere was retrieval: search, filters by status and by type, counts by state, and
          domain grouping into five sections. Nothing was removed to make things findable; the tools to find things
          were added instead.
        </p>

        <SubHeading>3. Put the answer in the row</SubHeading>
        <p className="text-[15px] leading-relaxed text-body">
          The question an analyst has before touching almost anything is <em>what depends on this?</em> The legacy
          system consistently made that answer expensive — a usage icon to click, a separate report to run, a
          history buried behind a button.
        </p>
        <p className="text-[15px] leading-relaxed text-body mt-4">
          Wherever that question existed, the answer moved inline: a visible column showing where a population is
          referenced, per-step attribution and timestamps on the dashboard, a change history recording who changed
          what and when. This also delivered the audit trail the workshop had asked for, which matters when
          analysts and reseller partners share a client record.
        </p>

        <SubHeading>4. Merge what is one job; separate what is genuinely different scope</SubHeading>
        <p className="text-[15px] leading-relaxed text-body">
          Several modules existed as separate steps because of internal data model splits rather than because the
          work was two jobs. Field captions and field permissions were the clearest case — what a field is called
          and who can see it, configured in two different places with no shared view.
        </p>
        <p className="text-[15px] leading-relaxed text-body mt-4">
          Merging those was right. But the same instinct, applied to scope, was wrong: collapsing four audience
          scopes into one view produced a long scroll instead of a simpler screen. The correction kept the merge
          and reinstated the scope dimension as tabs.
        </p>
        <p className="text-[15px] leading-relaxed text-body mt-4">
          The distinction is the point. Merge things that are one task. Preserve boundaries that reflect genuinely
          different scopes.
        </p>

        <SubHeading>5. Density is correct for reference work; decoration is not</SubHeading>
        <p className="text-[15px] leading-relaxed text-body">
          The beta twice replaced tables with more contemporary-looking containers — accordions in one module, a
          card grid in another — and both made the task slower. These are dense reference lists that analysts scan
          and compare, not catalogues they browse. Names truncated, scan distance doubled, and the information
          people actually needed moved behind menus.
        </p>
        <p className="text-[15px] leading-relaxed text-body mt-4">
          Both corrections went back to tables, and spent the effort on what the table exposes: a fourth permission
          column separating update from insert, because adding a value and editing one are different rights; a
          usage column answering the deletion question inline.
        </p>
        <Quote>Tables were not the dated choice. They were the correct one.</Quote>
        <PlaceholderImage
          src={deliveryHubImg}
          alt="The card grid and accordion attempts alongside the table they were reverted to"
        />

        <SubHeading>6. One concept, one destination — and the old door closes</SubHeading>
        <p className="text-[15px] leading-relaxed text-body">
          Not every module in Delivery Hub is a redesign of something that existed in Classic. Several settings had
          no configuration home at all: scattered across system administration areas, buried in unrelated screens,
          or handled outside the product entirely. Bringing them in wasn't parity work — it was establishing a
          single source of configuration for a plan year, so the answer to "where is this set up?" is always the
          same answer.
        </p>
        <p className="text-[15px] leading-relaxed text-body mt-4">
          The fragmentation was worst in branding, which lived in{" "}
          <strong className="font-semibold text-heading">four destinations across two design eras</strong> with no
          cross-references between them: an Enrollment UI tab holding five structural colors as raw hex plus
          free-text custom CSS; a branding card holding logo, colors, login URL and background; an employee
          experience section holding colors <em>again</em>, login URL <em>again</em>, a different background, and a
          QR code; and a logo upload page holding the logo <em>again</em> plus per-population logos.
        </p>
        <p className="text-[15px] leading-relaxed text-body mt-4">
          No single screen could answer "what does our branding currently look like?"
        </p>
        <p className="text-[15px] leading-relaxed text-body mt-4">
          Mapping every setting against every destination produced contradictions that were observable in the
          product rather than matters of opinion:
        </p>
        <List
          items={[
            <>
              The logo was capped at <strong className="font-semibold text-heading">280×70</strong> in one place
              and <strong className="font-semibold text-heading">300×50</strong> in another. A 300×70 file satisfies
              neither, and nothing indicated which upload wins on which surface.
            </>,
            <>
              <strong className="font-semibold text-heading">Two custom login URLs</strong> existed on two
              different domains, with nothing to say which one employees receive.
            </>,
            <>
              <strong className="font-semibold text-heading">Three color models</strong> described one brand, with
              no precedence defined.
            </>,
          ]}
        />
        <p className="text-[15px] leading-relaxed text-body mt-4">
          And compliance was a disclaimer rather than a check. Two screens carried a panel stating that the
          platform's default colors meet WCAG 2.1 AA per the ADA and ACA — then offered a single button to replace
          those verified defaults with unverified ones, with no contrast feedback at any point.
        </p>
        <p className="text-[15px] leading-relaxed text-body mt-4">
          The consolidation is a single Branding &amp; Styling page — with decommissioning the legacy screens as an
          explicit condition of the work. Consolidation only counts if the old destinations close. Otherwise you
          haven't replaced four places; you've added a fifth.
        </p>
        <p className="text-[15px] leading-relaxed text-body mt-4">
          It opens with three ways in, because admins arrive with different amounts of preparation: upload a brand
          kit, give a company URL and let the product pull logo and colors from it, or enter everything manually.
          Colors carry inline accessibility ratings. Where a color fails, the product offers fixes that preserve
          the hue — darken to the nearest passing value, or keep the color and change the label — because a brand
          color is often non-negotiable, and telling a client their brand is wrong is not a design solution. The
          page previews before publishing, which ends the save-and-log-out inspection loop.
        </p>
        <PlaceholderImage
          src={deliveryHubImg}
          alt="The four legacy branding destinations mapped against each other, showing the contradictions"
        />

        <SubHeading>7. Automation proposes; the admin decides</SubHeading>
        <p className="text-[15px] leading-relaxed text-body">
          Two capabilities in the branding work are deterministic mathematics — contrast ratios and hue-preserving
          color adjustment are formulas, not models. Two are genuinely inferred: identifying which image on a web
          page is the logo, and ranking which colors represent a brand.
        </p>
        <p className="text-[15px] leading-relaxed text-body mt-4">
          Being precise about that distinction is why nothing auto-applies. The same rule governs AI-assisted
          configuration extraction from uploaded documents on the dashboard, which ships with an explicit
          instruction to review extracted values before accepting them. Every inferred result is a proposal the
          admin confirms, never a silent change.
        </p>
      </section>

      {/* IMPACT */}
      <section id="impact" className="py-16 border-t border-band/30">
        <SectionHeading eyebrow="What changed.">Impact</SectionHeading>
        <p className="text-[15px] leading-relaxed text-body">
          Implementation analysts working in the redesigned flow reported the following cycle times.
        </p>
        <div className="mt-4">
          <CycleTimeTable />
        </div>
        <p className="text-[15px] leading-relaxed text-body mt-6">
          The consistency across segments matters more than any single figure. A gain concentrated in one client
          size would suggest the redesign happened to suit one profile. A comparable gain across all three suggests
          the changes addressed something structural in how configuration work is done.
        </p>
        <p className="text-[15px] leading-relaxed text-body mt-4">
          On a large implementation, roughly two months came off the calendar.
        </p>
        <MethodNote>
          These are practitioner-reported figures gathered from the operations team after hands-on use of the beta,
          not instrumented system measurements.
        </MethodNote>

        <SubHeading>What this doesn't yet solve</SubHeading>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3">
          <IssueCard title="Parity before polish — and more than parity.">
            The redesign shipped without full feature parity with the legacy system, and parity is closing release
            by release. But some modules had no equivalent in Classic at all — consolidating those scattered
            settings was net-new work, not migration.
          </IssueCard>
          <IssueCard title="Grouping is organizational, not enforced.">
            The sections order and cluster the work, but nothing prevents an analyst configuring costs before plans
            exist. The validation panel catches the consequence rather than the sequence preventing the mistake.
          </IssueCard>
          <IssueCard title="Three personas, one surface.">
            Analysts, reseller partners, and employer HR admins all use Delivery Hub, and modules appear or hide
            based on capability and licensing. The IA had to hold up against a module set that varies by user.
          </IssueCard>
        </div>
      </section>

      {/* GROWTH */}
      <section id="growth" className="pt-16">
        <SectionHeading eyebrow="What I'd carry forward.">Growth</SectionHeading>
        <List
          items={[
            "The numbers are estimates, and I'd instrument next time. The comparison exercise was the right method for the moment — cheap, fast, defensible — but the figures are practitioner-reported rather than measured. Delivery Hub now records per-step timing, so the next release should be evaluated against it rather than against recall.",
            "Modernity is not usability, and I learned that twice. Accordions in one module, a card grid in another, both replacing tables, both slower for the people doing the work. Two independent corrections in the same direction taught me more than either would alone.",
            "My own proposals don't resolve everything. Tracking each branding problem against its proposed fix, fourteen questions remain open — including whether two of the branding screens are backed by the same record, which determines whether consolidation is a merge or a migration with conflict resolution.",
            <>
              Lifecycle is still unsolved. Populations named "(dont use or alter)", duplicates distinguished only by
              a numeric suffix, roles nobody can safely delete — analysts have been encoding governance into the
              naming field because the product offers nowhere else to put it. Nothing in this redesign addresses
              that, and it should.
            </>,
            "The most valuable finding was the cheapest to produce. No usability lab was needed to discover a logo with two contradictory size limits, or a product asserting WCAG compliance while offering one click to break it. It needed someone to open all four screens at once and write down what each one claimed.",
          ]}
        />

        <SubHeading>Current status</SubHeading>
        <p className="text-[15px] leading-relaxed text-body">
          Released and iterating. Feature parity with the legacy system is closing release by release. The
          branding consolidation is specified, evidenced, and awaiting build, with legacy screen deprecation as an
          explicit condition. Further table and change-history improvements are specified and pending development.
        </p>
      </section>
    </>
  );
}

export default function DeliveryHubCaseStudy({ onBack, onOpenResume }) {
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
