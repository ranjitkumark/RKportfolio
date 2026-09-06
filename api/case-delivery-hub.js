// /api/case-delivery-hub.js
// Deep-dive knowledge for the Delivery Hub project — the one case study with enough
// documented depth that the assistant can go several questions deep on it.
// Public title: "One Path, Not Five". Internal: Delivery Hub (earlier: Guided Implementation).

export const DELIVERY_HUB = `
# DEEP DIVE — DELIVERY HUB ("One Path, Not Five")
Sole designer · research, IA, interaction design, design specification · 2024–2026.
Use this when someone asks about this project specifically, asks for a detailed example of his
work, or asks how he handles large/legacy/complex redesigns. Refer to the client as "a leading
US benefits administration platform" in public-facing framing.

## What it is
Delivery Hub is the configuration surface where implementation analysts, reseller partners, and
employer HR admins set up a benefits plan year — benefits, plans, rates, eligibility,
populations, integrations, compliance. It's the step between a signed contract and a working
enrollment site. Roughly 32 configuration modules.

The core hadn't been meaningfully redesigned in about a decade. Tools had been bolted on around
it — a guided renewal tool, a separate branding page, a separate employee experience config —
each built as its own destination, none grounded in research. The result wasn't one bad screen:
it was a configuration surface spread across two design eras, where the same setting could be
changed in three places under three different rules.

## Where the work started
An internal Customer Excellence workshop mapped implementation across People, Process, and
Technology for both direct and partner channels. The effort distribution framed everything:
Planning 9% · Implementation Discovery 15% · **Configuration + QA 35%** · System Testing 23% ·
Data 12% · Active site/Add-on 6%.

Configuration and QA was the single largest block of implementation effort — and the part
nobody had redesigned. Recurring findings: missing wizard functionality, deprecated features
never cleaned up, duplicated and badly ordered steps, no pre-validation, routine rework from bad
configuration, no audit trail, too many clicks to reach common data.

Ranjit's note on this: the workshop gave him a problem worth solving, but it did not tell him
what to build. It was run with SMEs and process owners, not with the analysts who sit in the
tool all day. That distinction drove the research plan.

## The diagnosis — a checkbox was the root cause
The legacy system was a flat table of 24 configuration steps. No grouping, no phases, no
expressed dependencies — nothing indicated that Define Benefits gates Define Benefit Plans,
which gates Define Costs. Status was a three-state icon with no legend; on a live implementation
more than half the rows showed red, and **a default state of "mostly alarming" trains people to
stop reading it.** Three columns sat permanently empty consuming most of the width. No progress
indicator, no answer to "what is blocking me."

Inside each step, the same 24-item list reappeared as left navigation — overview and detail
duplicating each other. Styling was roughly 2005-era: bevelled tabs, fieldset borders, icon-only
affordances, disabled controls that never said what would enable them.

And completion was a checkbox: **Mark as Completed** — self-attested, no validation behind it.

That detail became the foundation of the redesign. A step could be marked complete while being
wrong. Everything configured afterward would be built on top of it, and the error surfaced at
system testing weeks later, after the dependent work was done. **The 35% figure and the rework
complaints weren't two problems. They were the same problem, and its mechanism was a checkbox.**

## Research approach
Discovery first: alongside workshop evidence and SME input, he interviewed implementation
specialists and sat in on client onboarding calls before the first release. Four consistent
complaints across modules — they couldn't find things, couldn't tell what was safe to change,
didn't know what to do next, and found out they'd got something wrong far too late. Those four,
applied across 32 modules, became the design principles.

Validation second, deliberately: once the beta was usable, he ran a structured comparison with
4–5 implementation analysts — the same configuration work done the legacy way and then the
redesigned way, across small, medium and large client profiles.

**Why the first pass introduced no new components:** holding the interaction vocabulary constant
meant any difference in completion time could be attributed to structure — grouping, retrieval,
validation placement — rather than to novelty or to a screen simply being newer. It also meant
analysts could work the redesigned flow without training, which is what made the comparison fair.
This is a good example of his research rigour — worth citing when someone asks how he validates.

## The seven principles that held 32 modules together
Redesigning 32 modules one at a time would have produced 32 unrelated screens. A small number of
decisions applied everywhere.

**1. Validation is ambient, not terminal.** In the legacy system correctness was asserted by the
person doing the work. In the beta, error checking was a module positioned above Testing — so
you met it after the damage. Validation moved out of the sequence entirely into a persistent
panel, visible while you work, listing specific errors and warnings (a plan with no costs
configured, a benefit with no plans attached), each linking directly to the causing step. Detect,
locate, fix, without hunting. *This is the change he'd defend first* — it converts a self-attested
checkbox into continuous feedback and attacks rework at its source rather than catching it at
the end.

**2. Solve retrieval, not volume.** 31 cards on the dashboard, 94 entries inside a single
module — analysts were scanning, not navigating. The instinct is to cut the list, but the
configuration steps map to genuine domains and the population entries are real client data;
neither was padded. The answer was retrieval: search, filters by status and type, counts by
state, domain grouping into five sections. **Nothing was removed to make things findable; the
tools to find things were added instead.**

**3. Put the answer in the row.** The question before touching almost anything is *what depends
on this?* The legacy system made that answer expensive — a usage icon to click, a separate
report to run, history buried behind a button. The answer moved inline: a visible column showing
where a population is referenced, per-step attribution and timestamps, a change history
recording who changed what and when. This also delivered the audit trail the workshop asked for,
which matters when analysts and reseller partners share a client record.

**4. Merge what is one job; separate what is genuinely different scope.** Several modules existed
as separate steps because of internal data-model splits, not because the work was two jobs —
field captions and field permissions were the clearest case (what a field is called and who can
see it, configured in two places with no shared view). Merging those was right. But the same
instinct applied to *scope* was wrong: collapsing four audience scopes into one view produced a
long scroll instead of a simpler screen. The correction kept the merge and reinstated scope as
tabs. **Merge things that are one task. Preserve boundaries that reflect different scopes.**

**5. Density is correct for reference work; decoration is not.** The beta twice replaced tables
with more contemporary-looking containers — accordions in one module, a card grid in another —
and both made the task slower. These are dense reference lists analysts scan and compare, not
catalogues they browse. Names truncated, scan distance doubled, needed information moved behind
menus. Both corrections went back to tables and spent the effort on what the table exposes: a
fourth permission column separating update from insert (adding a value and editing one are
different rights), a usage column answering the deletion question inline. **Tables weren't the
dated choice. They were the correct one.**

**6. One concept, one destination — and the old door closes.** Not every module was a redesign of
something existing; several settings had no configuration home at all, scattered across system
administration, buried in unrelated screens, or handled outside the product. Bringing them in
established a single source of configuration for a plan year.

Branding was the worst case — four destinations across two design eras with no cross-references:
an Enrollment UI tab with five structural colors as raw hex plus free-text custom CSS; a branding
card with logo, colors, login URL, background; an employee experience section with colors *again*,
login URL *again*, a different background, and a QR code; and a logo upload page with the logo
*again* plus per-population logos. No single screen could answer "what does our branding
currently look like?"

Mapping every setting against every destination produced contradictions observable in the
product rather than matters of opinion: the logo capped at 280×70 in one place and 300×50 in
another (a 300×70 file satisfies neither, and nothing indicated which upload wins on which
surface); two custom login URLs on two different domains with nothing to say which one employees
receive; three color models describing one brand with no precedence defined.

And compliance was a disclaimer rather than a check. Two screens carried a panel stating the
platform's default colors meet WCAG 2.1 AA per the ADA and ACA — then offered a single button to
replace those verified defaults with unverified ones, with no contrast feedback at any point.
Not hypothetical: on one live client org the primary brand color scored **1.87:1** against its
white button label, where AA requires 4.5:1. Their secondary scored 14.3:1. Nothing in the
product could tell them which was which, or that one was failing. For a benefits platform, where
enrollment is how an employee obtains health coverage, **that is a legal surface, not a polish
concern.**

The fix is a single Branding & Styling page, with decommissioning the legacy screens as an
explicit condition of the work — **consolidation only counts if the old destinations close;
otherwise you haven't replaced four places, you've added a fifth.** It opens with three ways in,
because admins arrive with different amounts of preparation: upload a brand kit, give a company
URL and let the product pull logo and colors from it, or enter everything manually. Colors carry
inline accessibility ratings. Where a color fails, the product offers hue-preserving fixes —
darken to the nearest passing value, or keep the color and change the label — **because a brand
color is often non-negotiable, and telling a client their brand is wrong is not a design
solution.** The page previews before publishing, ending the save-and-log-out inspection loop.

**7. Automation proposes; the admin decides.** Two capabilities in the branding work are
deterministic mathematics — contrast ratios and hue-preserving color adjustment are formulas,
not models. Two are genuinely inferred: identifying which image on a page is the logo, and
ranking which colors represent a brand. Being precise about that distinction is why nothing
auto-applies. The same rule governs AI-assisted configuration extraction from uploaded documents,
which ships with an explicit instruction to review extracted values before accepting them.
**Every inferred result is a proposal the admin confirms, never a silent change.** This is his
AI-UX position in practice, not theory.

## Outcomes — two separate measurements, never conflate them

**(a) Implementation analysts — cycle time.** Practitioner-reported figures gathered from the
operations team after hands-on use of the beta. **These are estimates from recall, not
instrumented system measurements** — always say so, it's part of the credibility.
| Client size | Before | After | Reduction |
| Small | 90–95 days | 70 days | ~22–26% |
| Medium | 120–140 days | 90 days | ~25–36% |
| Large | 200–220 days | 160 days | ~20–27% |
On a large implementation, roughly two months came off the calendar. **The consistency across
segments matters more than any single figure** — a gain concentrated in one client size would
suggest the redesign happened to suit one profile; a comparable gain across all three suggests
the changes addressed something structural in how configuration work is done.

**(b) Reseller partner channel — business outcomes.** Separate population, separate measurement:
self-service for reseller partners drove **17% revenue growth**, **retention +21%**, and
**acquisition costs −12%**.

These two sets measure different channels. Never present the reseller business metrics as though
they came from the analyst cycle-time exercise, or vice versa.

## Constraints and trade-offs (he volunteers these — they're not weaknesses)
- **Parity before polish, and more than parity.** Shipped without full legacy feature parity;
  parity closing release by release as modules migrate and formula entry moves in. But parity
  was never the whole target — some modules had no Classic equivalent at all, so consolidating
  scattered settings was net-new work. Treating it as both at once (migrate what exists, gather
  what was never gathered) kept releases shippable while the surface genuinely grew.
- **Grouping is organizational, not enforced.** Sections order and cluster the work, but nothing
  prevents configuring costs before plans exist. The validation panel catches the consequence
  rather than the sequence preventing the mistake. Hard dependency enforcement in a system this
  old is expensive, and blocking people mid-flow carries its own costs — but it's the most
  obvious candidate for the next iteration.
- **Three personas, one surface.** Analysts, reseller partners, and employer HR admins all use
  it, with modules appearing or hiding by capability and licensing. The IA had to hold up
  against a module set that varies by user.

## What he'd do differently
- **Instrument it.** The comparison exercise was right for the moment — cheap, ran in days, gave
  the programme a defensible reason to continue. But the figures are recall-based. Delivery Hub
  now records per-step attribution and timing, so the instrumentation exists; the next release
  should be evaluated against it rather than against recall.
- **Modernity is not usability — he learned it twice.** Accordions in one module, a card grid in
  another, both replacing tables, both slower. Two independent corrections in the same direction
  taught him more than either would alone.
- **His own proposals don't resolve everything.** In the branding work he tracked each problem
  against the proposed design and marked status honestly: contradictory specs and dual URLs
  resolved; structural color model and custom CSS still unaddressed; population logo sizing
  unspecified; the two-era problem resolved only if legacy screens genuinely close. Fourteen
  questions remain open.
- **Lifecycle is still unsolved.** The data carries evidence of a system with no deprecation
  path: populations named "(dont use or alter)", duplicates distinguished only by numeric
  suffix, roles nobody can safely delete. **Analysts have been encoding governance into the
  naming field because the product offers nowhere else to put it.** Nothing in this redesign
  addresses that, and it should.
- **The most valuable finding was the cheapest to produce.** No usability lab was needed to
  discover the same logo had two contradictory size limits, or that the product asserted WCAG
  compliance while offering one click to break it. It needed someone to open all four screens at
  once and write down what each claimed. **Auditing what already exists is undervalued, and it's
  often where the strongest evidence is sitting.**

## Current status
Released and iterating. Feature parity closing release by release. The branding consolidation is
specified, evidenced, and awaiting build, with legacy screen deprecation as an explicit
condition. Further table and change-history improvements specified and pending development.
`.trim();
