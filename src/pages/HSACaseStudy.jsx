import React, { useState } from "react";
import {
  Quote,
  SectionHeading,
  SubHeading,
  Label,
  List,
  PlaceholderImage,
  IssueCard,
  TextColumn,
  useScrollSpy,
  CaseStudyNav,
  CaseStudyPageShell,
  ViewToggle,
} from "../components/CaseStudyKit.jsx";
import valuePropImg from "../assets/case-studies/hsa/value-proposition.png";
import mindmapImg from "../assets/case-studies/hsa/mindmap.png";
import taskflowImg from "../assets/case-studies/hsa/taskflow.png";
import prototypeImg from "../assets/case-studies/hsa/prototype.png";
import finalImg from "../assets/case-studies/hsa/final-product.png";

const NAV_SECTIONS = [
  { id: "background", label: "Background" },
  { id: "research", label: "Research" },
  { id: "problems", label: "Problems" },
  { id: "ideate", label: "Ideate" },
  { id: "prototype", label: "Prototype" },
  { id: "testing", label: "Testing" },
  { id: "end", label: "End" },
];

function PersonaColumn({ role, painPoints, goals, needs, motivations }) {
  return (
    <div className="bg-card border border-band/30 rounded-2xl p-6 text-left">
      <Label>{role}</Label>
      <SubHeading>Key pain points</SubHeading>
      <List items={painPoints} />
      <SubHeading>Goals</SubHeading>
      <List items={goals} />
      <SubHeading>Needs</SubHeading>
      <List items={needs} />
      <SubHeading>Motivations</SubHeading>
      <List items={motivations} />
    </div>
  );
}

const SKIM_META = [
  {
    label: "SCOPE",
    value: "2 Experiences - 2 different user base | 50+ Screens",
  },
  {
    label: "TIMELINE",
    value: "18 weeks Research | 6 months iterations",
  },
  {
    label: "OUTCOME",
    value: "90% felt secure enrolling · Trust rebuilt end-to-end",
  },
];

const SKIM_STATS = [
  { value: "38 – 21 MIN", label: "Average time on task (Employee Experience)" },
  { value: "179 – 97", label: "Support tickets, Open Enrollment" },
];

function SkimView() {
  return (
    <div>
      <h1 className="text-[32px] sm:text-[44px] leading-[1.15] font-semibold text-heading mb-6 max-w-3xl">
        HSA had the most bugs and the least trust of any benefit we offered.
      </h1>
      <p className="text-[15px] sm:text-[16px] leading-relaxed text-body max-w-2xl">
        It was broken enough that admins found their own workaround - building 72 fake employee populations just to
        apply a single IRS rule the system couldn't support. I rebuilt the calculation logic, the enrollment flow,
        and the trust that came with it.
      </p>
      <p className="text-[14px] font-medium text-accent mt-4">Senior UX Designer &nbsp;| End to End</p>

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
            The Health Savings Account (HSA) feature quickly became one of the most problematic parts of the
            platform, with more bugs and complaints than any other spending account. Employers lacked the basic
            configuration tools they needed, employees had little flexibility in managing contributions, and
            incorrect calculations often caused downstream errors. As client expectations and contribution
            strategies matured, it became clear the existing architecture could no longer support them. A complete
            redesign was the only viable path forward.
          </p>
          <Quote>
            HSA was broken for both employees and admins. Redesigning it wasn't optional — it was necessary.
          </Quote>
        </section>

        {/* RESEARCH */}
        <section id="research" className="py-16 border-t border-band/30">
          <SectionHeading eyebrow="Understanding begins here.">Research</SectionHeading>

          <SubHeading>Field study</SubHeading>
          <p className="text-[15px] leading-relaxed text-body">
            To uncover how HSAs were actually being configured in practice, I conducted a field study with the
            configuration team responsible for managing benefits setup for organizations with 1,500+ employees.
            Observing them in their day-to-day environment gave me a deeper understanding of the challenges they
            faced that weren't always visible through bug reports or client complaints.
          </p>
          <div>
            <Label>Findings</Label>
            <List
              items={[
                "Coverage tiers (Employee Only, Employee + Family) and 55+ catch-up rules were missing, making IRS compliance difficult.",
                <>
                  Admins created <strong className="font-semibold text-heading">72 separate employee populations</strong> as a
                  workaround, leading to wasted time and errors.
                </>,
                "Rigid configuration with no validation or preview allowed mistakes to scale across hundreds of employees.",
                "Admins relied on memory and external documents to apply IRS rules, increasing cognitive load and risk.",
              ]}
            />
          </div>
          <Quote>
            System gaps forced configuration teams into time-consuming workarounds, making large-scale setup
            inefficient, error-prone, and difficult to keep compliant.
          </Quote>

          <SubHeading>UX audit</SubHeading>
          <p className="text-[15px] leading-relaxed text-body">
            As part of the HSA revamp, I conducted a comprehensive UX audit of the existing Health Savings Account
            experience — covering both the employee enrollment flow and the administrator configuration tools —
            identifying usability issues, compliance risks, and misalignments between system logic and real-world
            benefit plan designs.
          </p>
          <Label>Key issues identified</Label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
            <IssueCard title="Limited flexibility for employees">
              Employees couldn't update contributions mid-year without HR involvement, leading to frustration and
              unnecessary reliance on administrators.
            </IssueCard>
            <IssueCard title="Inaccurate contribution calculations">
              The system used only the most recent benefit tier to calculate YTD contributions, causing significant
              errors when employees changed coverage types mid-year.
            </IssueCard>
            <IssueCard title="Lack of transparency and guidance">
              There was little clarity around how contributions were calculated. Employer contributions weren't
              clearly shown, and there was no in-flow education to guide decisions.
            </IssueCard>
            <IssueCard title="Administrator tool limitations">
              Admins lacked the tools to view or adjust HSA values accurately. Manual corrections were common but
              risky, leading to data inconsistencies and time-consuming true-ups.
            </IssueCard>
            <IssueCard title="Insufficient employer contribution options">
              Employers had no way to configure flexible funding schedules like monthly, quarterly, or off-cycle
              contributions, forcing unreliable workarounds that often broke downstream calculations.
            </IssueCard>
          </div>

          <SubHeading>Competitive analysis</SubHeading>
          <p className="text-[15px] leading-relaxed text-body">
            I looked outward to see how competitors approach benefit communications. Platforms like Bswift,
            Benefitfocus, and Workday showed stronger integration with scheduling and multi-channel delivery — but
            still lacked intelligence, customization, and analytics, confirming both where PlanSource was behind and
            where it could leap ahead.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div className="bg-card border border-band/30 rounded-xl p-4 text-left">
              <p className="text-[13px] font-semibold text-heading mb-2">Strengths</p>
              <List
                items={[
                  "Real-time notifications of employee contributions.",
                  "Lump-sum contributions, giving some level of flexibility.",
                  "Suggested contribution amounts based on eligibility during annual enrollment.",
                ]}
              />
            </div>
            <div className="bg-card border border-band/30 rounded-xl p-4 text-left">
              <p className="text-[13px] font-semibold text-heading mb-2">Weaknesses</p>
              <List
                items={[
                  "No automatic IRS contribution cap functionality, risking overages.",
                  "No scheduling options for employer contributions or lump-sum payments.",
                  "No flexibility for employees to select only employer contributions.",
                  "No customizable pay periods or options to skip contributions.",
                ]}
              />
            </div>
          </div>

          <SubHeading>User interviews</SubHeading>
          <p className="text-[15px] leading-relaxed text-body">
            To better understand HSA experiences across roles, I interviewed three employees, two benefit
            administrators, and two resellers using the Rose, Bud, Thorn method — uncovering not just data points
            but stories of frustration, opportunity, and relief.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            <TextColumn title="Roses — what's working">
              <List
                items={[
                  "Employees can elect contributions during open enrollment without manual HR intervention.",
                  "HSAs are valued as an essential benefit by employers and resellers alike.",
                  "Payroll integration works reliably for standard deductions.",
                ]}
              />
            </TextColumn>
            <TextColumn title="Buds — opportunities">
              <List
                items={[
                  "Educate employees on IRS limits, catch-up contributions, and employer matching.",
                  "Give employers more flexible contribution scheduling.",
                  "Smooth mid-year adjustment workflows.",
                  "Automate recalculation to reduce manual corrections.",
                ]}
              />
            </TextColumn>
            <TextColumn title="Thorns — pain points">
              <List
                items={[
                  "Tier changes mid-year produce inaccurate YTD values.",
                  "No support for catch-up contribution special cases.",
                  "Employer vs. employee contribution amounts aren't transparent.",
                  "Manual recalculations are time-consuming and error-prone.",
                ]}
              />
            </TextColumn>
          </div>

          <SubHeading>Key research insights</SubHeading>
          <p className="text-[15px] leading-relaxed text-body">
            The field study and user research naturally grouped into two perspectives — employee and
            employer/admin — highlighting where both sides experience friction.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div className="text-left">
              <Label>Employee</Label>
              <List
                items={[
                  "Limited flexibility to adjust contributions mid-year without HR/admin intervention.",
                  "Unclear breakdown of employer vs. employee contributions.",
                  "Inaccurate mid-year calculations across tier changes.",
                  "Lack of guidance on IRS rules and contribution strategies.",
                  "Motivation to maximize benefits, but no tools to support it.",
                ]}
              />
            </div>
            <div className="text-left">
              <Label>Employer / Administrator</Label>
              <List
                items={[
                  "Rigid configuration forces manual creation of multiple populations.",
                  "Time-consuming workarounds — 40 to 70+ populations to simulate rules.",
                  "Limited employer contribution frequency options.",
                  "Motivation to automate and reduce manual effort without custom fixes.",
                ]}
              />
            </div>
          </div>
        </section>

        {/* PROBLEMS */}
        <section id="problems" className="py-16 border-t border-band/30">
          <SectionHeading eyebrow="Spot the trouble.">Problems</SectionHeading>
          <p className="text-[15px] leading-relaxed text-body">
            For many employees, managing an HSA can be confusing and limiting — contribution changes are often
            restricted, account breakdowns are unclear, and mid-year updates frequently miscalculate. Employers, in
            turn, spend hours dealing with inflexible configurations and manual adjustments that lead to reporting
            errors. Both sides needed a complete re-evaluation of the HSA experience.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            <PersonaColumn
              role="Employee"
              painPoints={[
                "Inaccurate mid-year calculations leading to wrong deductions.",
                "Limited flexibility after initial enrollment.",
                "Confusion around employer funding schedules.",
                "No clear guidance on IRS rules (catch-up, family limits).",
                "Low confidence in system accuracy.",
              ]}
              goals={["Confidently manage contributions year-round.", "Clearly understand employer support and match."]}
              needs={[
                "A simple, guided enrollment flow.",
                "Mid-year flexibility to change contribution amounts.",
                "A clear breakdown of employer vs. employee contributions.",
                "Accurate real-time calculations across tier changes.",
                "Easy access to balances and contribution history.",
              ]}
              motivations={[
                "Build financial confidence with accurate contributions and balances.",
                "Gain control and flexibility to adjust contributions anytime.",
                "Ensure transparency between employee and employer contributions.",
              ]}
            />
            <PersonaColumn
              role="Employer"
              painPoints={[
                "Inflexible structure leading to time-consuming workarounds.",
                "Inaccurate downstream calculations following changes.",
                "Limited adjustment tools for accurate corrections.",
                "Error-prone reporting and true-ups.",
                "Manual steps necessary for contribution management.",
              ]}
              goals={["Confidently manage contributions year-round.", "Clearly understand employer support and match."]}
              needs={[
                "Flexible configuration options (per paycheck, lump sum, quarterly).",
                "Accurate calculations for coverage tier and mid-year changes.",
                "Self-service adjustment tools to reduce admin workload.",
                "Detailed reporting of employer vs. employee contributions.",
              ]}
              motivations={[
                "Reduce manual work and errors in setup and reporting.",
                "Stay compliant with IRS rules and contribution limits.",
                "Enable flexible contribution strategies.",
              ]}
            />
          </div>
        </section>

        {/* IDEATE */}
        <section id="ideate" className="py-16 border-t border-band/30">
          <SectionHeading eyebrow="Ideas take flight.">Ideate</SectionHeading>
          <p className="text-[15px] leading-relaxed text-body">
            Building on research insights, I defined a value proposition aimed at bridging the gap between employee
            usability and HR admin efficiency — using a mindmap to capture downstream system impacts, user flows to
            trace employee and admin journeys, and scenario-based task flows to test real-world conditions like
            mid-year changes or IRS compliance.
          </p>

          <SubHeading>Value proposition</SubHeading>
          <p className="text-[15px] leading-relaxed text-body">
            The solution bridges the gap between employee experience and HR admin efficiency, offering clarity,
            automation, and flexibility in HSA management.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <TextColumn title="For employees">
              <List
                items={[
                  "A simple, intuitive interface that removes confusion and fear of making mistakes.",
                  "Workflow transparency — clear contribution history, mid-year adjustments, customizable schedules.",
                  "Actionable insight into employer contributions and IRS compliance.",
                ]}
              />
            </TextColumn>
            <TextColumn title="For admin">
              <List
                items={[
                  "Flexible funding schedules configurable without workarounds.",
                  "Self-service adjustment tools that cut manual correction time.",
                  "Automated, accurate reporting across employer and employee contributions.",
                ]}
              />
            </TextColumn>
          </div>
          <PlaceholderImage src={valuePropImg} alt="Value proposition diagram" />

          <SubHeading>Mindmap: exploring downstream impacts</SubHeading>
          <p className="text-[15px] leading-relaxed text-body">
            To ensure the redesign considered the entire ecosystem, I ran a collaborative mind-mapping session with
            the Product Manager, Product Owner, and Engineering Manager, identifying every downstream system and
            dependency that changes to enrollment, contributions, and reporting would touch — payroll, APIs, data
            exchange, and compliance rules. It aligned stakeholders on the complexity of the ecosystem and gave a
            clear lens for designing task flows, scenarios, and recalculation logic.
          </p>
          <PlaceholderImage src={mindmapImg} alt="Downstream impact mindmap" />

          <SubHeading>Task flow</SubHeading>
          <p className="text-[15px] leading-relaxed text-body">
            To reveal how people actually navigate HSA contributions, I mapped scenario-based task flows rather than
            a single linear path — first enrollment, annual Open Enrollment changes, mid-year contribution tweaks,
            a missed paycheck, and employer contribution updates. Each flow exposed moments of hesitation,
            uncertainty, or manual effort that weren't obvious from surface-level usability feedback.
          </p>
          <Quote>Users weren't struggling to decide — they were struggling to understand the impact of their decisions.</Quote>
          <PlaceholderImage src={taskflowImg} alt="HSA scenario-based task flow" />
        </section>

        {/* PROTOTYPE */}
        <section id="prototype" className="py-16 border-t border-band/30">
          <SectionHeading eyebrow="A project comes to life.">Prototype</SectionHeading>
          <SubHeading>Wireframing to final design</SubHeading>
          <p className="text-[15px] leading-relaxed text-body">
            I started with low-fidelity wireframes to structure the core HSA experience, guided by scenario-based
            task flows and user research — focusing on the hardest choices: contributions, employer match
            visibility, IRS caps, and mid-year adjustments for both administrators and employees.
          </p>
          <p className="text-[15px] leading-relaxed text-body mt-4">
            To lower risk and operational overhead, the experience was validated through usability testing and
            matched against current design standards as it developed into high-fidelity designs. The finished
            design delivers a scalable, compliant HSA solution that minimizes calculation errors, reduces
            administrative burden, and boosts employee trust — with measurable efficiency gains and higher client
            satisfaction.
          </p>
          <PlaceholderImage src={prototypeImg} alt="Wireframe-to-final prototype gallery" />
        </section>

        {/* TESTING */}
        <section id="testing" className="py-16 border-t border-band/30">
          <SectionHeading eyebrow="Truth meets the idea.">Testing</SectionHeading>
          <SubHeading>Usability testing</SubHeading>
          <p className="text-[15px] leading-relaxed text-body">
            To validate the redesigned HSA employee experience, I ran a usability preference test focused on how
            employees understand employer contributions and configure their own HSA contributions during Open
            Enrollment — comparing a progressive step-by-step flow against a single-page layout before committing to
            a final direction.
          </p>
          <div>
            <Label>Testing objectives</Label>
            <List
              items={[
                "Which HSA experience do employees prefer: progressive step-by-step, or all details on one page?",
                "Can users easily find and understand contribution limits and employer contribution details?",
                "Do users feel confident and secure while enrolling and configuring HSA contributions?",
                "Does the interface guide users through setup without hesitation or confusion?",
              ]}
            />
            <div className="mt-6">
              <Label>Findings</Label>
              <List
                items={[
                  <>
                    <strong className="font-semibold text-heading">64% of users preferred all details on one page</strong>,
                    citing better visibility and easier comparison of employer and employee contributions.
                  </>,
                  <><strong className="font-semibold text-heading">70%</strong> strongly agreed the experience was easy to use.</>,
                  <><strong className="font-semibold text-heading">70%</strong> strongly agreed they felt confident while enrolling.</>,
                  <><strong className="font-semibold text-heading">90%</strong> strongly agreed they felt secure during HSA enrollment.</>,
                ]}
              />
            </div>
          </div>
          <p className="text-[15px] leading-relaxed text-body mt-4">
            These results showed that information visibility and transparency mattered more than step-by-step pacing
            when users made HSA decisions.
          </p>
          <SubHeading>Summary</SubHeading>
          <p className="text-[15px] leading-relaxed text-body">
            Employees are more confident when they can see all important HSA information clearly and easily. The
            findings shaped the final interaction model — clarity, trust, and confident decision-making over
            unnecessary complexity — lowering hesitation, improving satisfaction, and supporting informed financial
            choices during Open Enrollment.
          </p>
        </section>

        {/* END */}
        <section id="end" className="pt-16">
          <SectionHeading eyebrow="Impact begins.">End</SectionHeading>
          <SubHeading>Final product</SubHeading>
          <p className="text-[15px] leading-relaxed text-body">
            The HSA redesign set out to solve ongoing usability problems and calculation errors affecting both
            employees and administrators. Through research, testing, and iteration, the experience was rebuilt
            around clarity, compliance, and flexibility — replacing manual workarounds with guided workflows and
            built-in checks. Making contribution logic clear and consistent rebuilt user trust, and gave the
            platform a scalable HSA foundation that supports evolving employer strategies and long-term product
            growth.
          </p>
          <PlaceholderImage src={finalImg} alt="Final product screens" />

          <div>
            <SubHeading>Project takeaways</SubHeading>
            <List
              items={[
                <>
                  <strong className="font-semibold text-heading">Design clarity reduces risk.</strong> Simplifying
                  contribution decisions and making system feedback clear significantly lowered user hesitation and
                  calculation errors.
                </>,
                <>
                  <strong className="font-semibold text-heading">Flexibility must be intentional.</strong> Supporting
                  real-world scenarios — mid-year changes, skips, employer funding variations — required designing
                  guardrails, not just options.
                </>,
                <>
                  <strong className="font-semibold text-heading">Admin experience is product experience.</strong>{" "}
                  Improving configuration workflows directly impacted downstream accuracy, support volume, and
                  operational efficiency.
                </>,
                <>
                  <strong className="font-semibold text-heading">Collaboration enabled scale.</strong> Working closely
                  with Product and Engineering ensured design decisions matched technical constraints and business
                  goals.
                </>,
              ]}
            />
          </div>
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
