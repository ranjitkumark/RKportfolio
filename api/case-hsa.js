// /api/case-hsa.js
// Deep-dive knowledge for the HSA project.
// Public title: "Setup to Enrolled". Internal: HSA.
// Ranjit's title on this project was Senior UX Designer (he is Lead now) — say so accurately.

export const HSA = `
# DEEP DIVE — HSA ("Setup to Enrolled")
Role: Senior UX Designer, end to end (his title at the time; he is Lead UX Designer now)
Scope: 2 experiences, 2 user bases, 50+ screens
Timeline: 18 weeks research, 6 months iteration
Shipped ahead of Open Enrollment; the admin workaround was eliminated

Use this when someone asks about compliance-heavy design, research that finds things tickets
never surface, or how he argues for expensive-but-correct technical decisions.

## Situation — the workaround nobody had reported
HSA had the most bugs and the least trust of any benefit on the platform. It was broken enough
that admins had built their own workaround: **72 fake employee populations per client**,
hand-assembled, purely to apply a federal rule the system couldn't hold.

**Nobody had ever filed a bug for it.** That detail is the point of the whole case study. The
workaround wasn't in the backlog, wasn't in a survey, wasn't in any ticket. To the people doing
it, it wasn't a defect — it was the job.

## Stakes — an HSA error isn't a bad experience, it's a tax event
Most benefits problems are comprehension problems. HSA isn't. The annual contribution limit is
fixed in federal tax code and moves on three axes at once: **coverage tier, age, and the number
of months a person actually held qualifying coverage.** Change any one mid-year and the ceiling
moves.

Go over that ceiling and the consequence isn't confusion — it's an excess contribution the
employee must unwind before their filing deadline or pay a penalty on, a corrected tax form, a
call to HR, and a broker asking the employer why their platform allowed it.

The platform modelled none of the three: not tiers, not catch-up, not proration. Every group
onboarded was one ordinary life event — a marriage, a birth, a March hire — away from a
compliance problem with no mechanism to detect it.

Three immovable constraints he designed inside: the Open Enrollment date, which could not move ·
the coupling (contribution logic reaches payroll files, custodian data exchange, downstream APIs,
year-end reporting) · an existing platform system he was extending, not replacing.

## Research — he went and watched somebody do it
He didn't start in the backlog. He sat with the configuration team that stands up benefits for
organisations of 1,500+ employees and asked them to build a real HSA plan while he watched,
"because the distance between how a feature is specced and how it survives a 4,000-person group
is where the actual product lives."

*Method: contextual inquiry with the enterprise configuration team, six sessions across four
live group configurations. Observation, not interview — the workaround only exists in the doing.*

What surfaced was an entire undocumented process:
- Coverage tiers and the 55-and-over catch-up weren't supported at all, so compliance could only
  be approximated, never configured
- To approximate it, admins hand-built 72 fake populations per client — one per permutation of
  tier, age band and funding schedule
- No validation, no preview, so one mistake propagated silently across hundreds of real people
  and surfaced at first payroll
- Federal limits came from memory and a printed sheet taped to a monitor

**His read: the workaround wasn't evidence users were resourceful. It was evidence the company
had moved compliance onto the person least equipped to carry it.**

## Two vocabularies, one defect
Interviews with employees, administrators and resellers described the same failure from opposite
ends.
*Employees — can't trust the number on screen:* no mid-year contribution change without going
through HR · can't tell employer money from their own · stop trusting the balance after a tier
change · no guidance on their limit or catch-up eligibility.
*Employers and admins — can't stop fighting the configuration:* dozens of fake populations per
client · no flexible funding schedules (quarterly, lump sum, off-cycle) · every correction manual
and risky · reporting needs hand-repair before it goes upstream.

## The mechanical root cause
Year-to-date contributions were calculated using an employee's **most recent** coverage tier.
There was no concept of a coverage history — so the moment anyone moved from self-only to family,
their year-to-date total silently became wrong. Not flagged, not estimated. Wrong.

Worked example — one employee, self-only through June, family from July:
- *As the platform calculated it (incorrect):* Jan–Dec treated as family, family cap × 12/12.
  Six months of self-only coverage counted as family. The employee is told they have more room
  than the law allows.
- *As the rule actually works (correct):* Jan–Jun self-only cap × 6/12, Jul–Dec family cap × 6/12.

Every dollar of the gap is an excess contribution somebody unwinds at tax time.

Failure chain: employee changes coverage mid-year → year-to-date recalculates on the new tier
only → remaining room is wrong → payroll deducts the wrong amount → manual true-up, ticket,
trust gone.

Once on paper, **four separate roadmap tickets collapsed into one problem with four faces**: no
mid-year self-service, no separation of employer and employee money, incorrect contribution
math, and admin tools with no reliable way to inspect or correct any of it.

**The category gap:** he audited the platforms they lost deals to. None enforced federal caps
automatically either. That reframed the work from catching up to closing a gap the whole
category had normalised — and became the argument he used to hold scope when the timeline
tightened.

## Decision 1 — rebuilding the ledger instead of patching the warning
With the date fixed and the coupling that wide, the real decision was where the weeks went.
- **Rejected — limit warnings on the existing flow.** Cheapest, fastest, visible progress,
  comfortably inside the date. He argued against it: *a warning computed from a year-to-date
  figure that's already wrong doesn't reduce anybody's risk. It states a wrong number more
  loudly and makes us accountable for having stated it.*
- **Taken — rebuild the ledger to hold a coverage history.** Give the system the concept it was
  missing, then rebuild configuration and enrollment on a number that's actually correct. The
  only option where every downstream fix compounds instead of papering over.
- **Deferred — real-time payroll write-back.** The genuinely complete answer, not reachable
  inside the date. Written up as a known limitation with a mitigation path, *because an
  undocumented limitation is just the next team's workaround.*

**What it cost him:** roughly five weeks with only flow diagrams and calculation models to show
and nothing that looked like a product — at exactly the point in the cycle when progress gets
measured in screens. He paid for it by moving two secondary items (off-cycle funding schedules,
a bulk-correction tool) into the following release.

## Decision 2 — making the constraint visible instead of arguing for it
Nobody on the team had held the full downstream picture in one view. Before ideating further he
ran a **systems mapping session** with the PM, PO and engineering manager, tracing every system a
change to contribution logic would touch — payroll files, custodian exchange, downstream APIs,
year-end reporting.

Once the coupling was visible on one wall, "just add warnings" stopped looking like the cheap
option and started looking like the expensive one.

**"I didn't win that argument by being persuasive. I won it by making the problem legible to the
people who had to build it."**

Same effect at smaller scale: his flows for a mid-year tier change surfaced a case nobody had
scoped — an employee who changes coverage **twice** in one plan year. Engineering had modelled
history as a single prior state, which handles the common case and quietly fails the rest.
Seeing the flow, they re-scoped to a full history. That's the difference between proration being
correct and roughly correct.

## Decision 3 — shipping the design he'd argued against
For enrollment he tested two directions. He expected the guided flow to win — progressive
disclosure is the standard answer to a decision-support problem, and he'd framed it as one.
- *Not shipped — step-by-step.* One decision at a time, lower load per screen, but the full
  picture only assembles at the end.
- *Shipped — everything on one page.* Contribution, employer match and remaining headroom
  together, recalculating live.

Results: 64% preferred one page · 70% found it easy to use · 70% felt confident enrolling · 90%
felt secure enrolling.

**Why his hypothesis lost:** people weren't struggling to *choose* an amount — they were
struggling to *believe* the amounts in front of them, and pacing made that worse, because
anything a system withholds reads as something the system is hiding. So the shipped design
stopped sequencing and started exposing.

*Method: unmoderated preference test, 18 participants, all enrolled in an employer-sponsored HDHP
with an active HSA. Confidence and security are attitudinal measures taken immediately
post-task — a directional read on trust, not a substitute for behavioural data.*

## Credit — what was his, and what wasn't
He states this explicitly, and it's worth repeating when someone asks about scope of ownership:
*"A rebuild this coupled isn't a solo act, and case studies that imply otherwise are the least
believable kind."*
- **His:** field study and interview programme · the contribution logic model (coverage history,
  headroom, catch-up, proration) · admin configuration IA and validation rules · the enrollment
  flow low to high fidelity · testing · design QA through build.
- **Shared:** the ledger-versus-validation decision (his argument, engineering's feasibility, the
  PM's call) · scope and sequencing against the date · compliance interpretation with the
  benefits SME.
- **Not his:** implementation and data migration · payroll and custodian integration contracts ·
  release planning · final compliance sign-off.

## Impact
- Average time on task **38 → 21 minutes** (−45%)
- Configuration time **−45%**
- Support tickets **−38%** overall. Within Open Enrollment specifically, tickets went **179 → 97**
  measured OE 2024 against OE 2025 on comparable group sizes. These measure different scopes —
  don't merge them or present one as the other.
- Fake populations per client **72 → 0** (eliminated)
- Contributed to new client acquisition and 15% revenue growth

The shipped work replaced the manual apparatus — fake populations, memorised limits, silent
miscalculations — with tier-aware calculation, guided configuration, and validation at the point
of entry instead of at first payroll. **"HSA didn't get simpler by losing capability. It got
simpler because the system finally did the remembering."**

**The metric he wanted but couldn't get:** excess-contribution corrections per plan year, the
number that would have proven the compliance case directly. They couldn't instrument it in time.
He volunteers this rather than hiding it, and notes ticket volume moves for more than design
reasons — he credits the calculation fix and the validation together, not the interface alone.

## What he took from it
- **Watch the work, don't ask about it.** The 72 populations were never in a ticket or survey.
  They surfaced because he asked someone to configure a real plan while he watched. Nobody
  reports a workaround they've stopped noticing.
- **In regulated products, the logic is the design.** The most consequential decision was how
  contribution history gets calculated. Every screen was downstream of it.
- **Being wrong early is the cheap version.** He expected the guided flow to win and it lost. A
  week to learn that in a preference test; a plan year to learn it at Open Enrollment.
- **Make the constraint visible, not the argument.** The systems map changed the technical
  direction more than any verbal case could have. Shared understanding beats persuasion.
- **The one he'd take back:** he brought the compliance SME in at week six, once the logic model
  was already drafted. Two of her corrections — how proration interacts with a mid-year plan
  termination, and how catch-up eligibility works for someone turning 55 in July — forced rework
  he'd have avoided by having her in the first mapping session. **On regulated work he now treats
  compliance as a research participant, not a reviewer.**
`.trim();
