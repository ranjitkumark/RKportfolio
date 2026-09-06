// /api/case-communication.js
// Deep-dive knowledge for the Communication project.
// Public title: "One Setup, Every Channel". Internal: Communication.
//
// Source: Ranjit's original communication.html case study. This is the project with the
// most complete research-through-testing arc — use it when someone asks how he runs
// research, how he validates, or wants proof of moderated usability testing.

export const COMMUNICATION = `
# DEEP DIVE — COMMUNICATION ("One Setup, Every Channel")
Role: UX design, research, prototyping, testing · Timeline: 11 weeks · Tools: Figma
Context: employee benefits communications at PlanSource. Users are benefit administrators.

Reach for this case study when the question is about **research method, usability testing, or
heuristic evaluation** — it's the clearest end-to-end example of Ranjit's process, and unlike
Delivery Hub the validation here was moderated testing rather than practitioner recall.

## Headline outcomes
- Task time **69 → 47 minutes** (a 32% cut)
- Feature CSAT **2.9 → 4.1** out of 5
- **100%** task completion in the final testing round, unaided
- **85%** of testers preferred stepper navigation over the original breadcrumb flow

## 01 — Analyze: where the signal came from
Feedback from the reseller summit repeatedly flagged the communication feature. Rather than act
on complaint volume alone, he triangulated three sources before committing: Pendo usage
patterns, annual enrollment engagement data, and CSAT verbatims. That confirmed both the extent
of the problem and where the workflow was actually breaking down.

Note the sequencing — this is his "understand the trigger first" principle in practice. The
trigger was customer complaints, so the validation needed was behavioural data, not more
opinion.

## 02 — Research

**Quantitative survey work.** Platform usage and campaign behaviour analysis surfaced
inefficient workflows, missing visibility, and the absence of reusable content.

**Heuristic UX audit.** A structured evaluation against Jakob Nielsen's 10 Usability Heuristics,
conducted from a benefit administrator's perspective. Scored 2 out of 4 on all five dimensions:
- Effective — accuracy and completeness users achieve carrying out tasks
- Efficient — time to complete tasks to standard
- Engaging — whether the experience matches expectations for tone and style
- Error tolerant — how well the design minimises errors and enables recovery
- Easy to learn — how quickly new users pick up core tasks
Findings: communication features were scattered across the platform, visibility of system status
was inconsistently applied, and basic tasks took too many steps.

**Competitive analysis** of Bswift, Benefitfocus, and Workday.
Strengths seen elsewhere: communication tools integrated into the platform, multi-channel
delivery (email + SMS), scheduling that saves admin time during busy periods, event-based
categorisation.
Gaps common to all of them: no unified dashboard for managing communications, no AI writing
assistant or smart suggestions, limited templates with poor customisation, no real-time
delivery or engagement analytics. The gaps mattered more than the strengths — they defined
where the product could differentiate rather than just reach parity.

**User interviews.** He refined the research plan and interview guide around what admins value,
the challenges they face, and how effective they *perceive* their communications to be. A
feedback capture grid organised findings into what participants liked, criticised, found
confusing, and suggested — separating functional gaps from engagement opportunities.

**Three research themes, each pain → finding → opportunity:**

1. *Ease of use and access.* Pain: fragmented workflows made communications hard to manage.
   Findings: no centralised place to view sent messages or performance; inconsistent UI patterns
   across workflows; limited visibility into employee actions after a send.
   → Opportunity: unified communication dashboard with real-time tracking.

2. *Workflow efficiency.* Pain: routine communications were repetitive and time-consuming.
   Findings: no scheduling or automation; no reusable scenario-based templates; no audience
   segmentation.
   → Opportunity: template libraries, smart scheduling, audience targeting.

3. *Smarter support and automation.* Pain: admins wanted guidance to reduce manual effort.
   Findings: no intelligent suggestions or defaults; no automation triggers; heavy reliance on
   manual input.
   → Opportunity: AI-assisted writing, smarter defaults, automation triggers.

## 03 — Problems and goals
Across the reseller summit, strategic partner interviews, and CSAT verbatims, feedback converged
on the same frustrations.

Pain points: no centralised workspace to track and manage communications · manual workflows
delaying critical onboarding and life-event updates · limited, non-customisable templates · no
individual targeting or timezone scheduling · poor feature discoverability · low year-round
engagement, with usage spiking only during enrollment.

Goals: centralise management and monitoring · save time through AI, automation, and reusable
templates · support year-round communication, not just enrollment season · improve targeting,
scheduling, and personalisation · raise usability and discoverability to drive adoption.

## 04 — Ideate
**Feature roadmap** built with the Product Manager using MoSCoW (Must / Should / Could / Have
later) — balancing quick wins like reusable templates and scheduling against longer-term bets
like AI-assisted content generation and delivery analytics. Note the co-ownership: prioritisation
happened *with* the PM, consistent with how he describes that relationship.

**Task and user flow.** Four core actions mapped — creating employee groups, setting up
campaigns, scheduling delivery, editing scheduled messages — then connected into one end-to-end
journey that cut repetitive steps and increased admin control and visibility.

## 05 — Prototype
- **Design system:** identified gaps (analytics visuals, steppers) and built new components
  matching the existing style — evolving the system while designing within its constraints.
- **Lo-fi wireframes:** key screens like the campaign builder, sketched from research, sitemap,
  and task-flow insights. Structure and clarity before visual detail.
- **Hi-fi wireframes:** integrated into the existing interface using established colours,
  typography, and components — modern but still familiar to existing users.

## 06 — Testing (the strongest part of this case study)
Two rounds of moderated usability testing with **10 benefit administrators**, 7 of whom had
prior product experience. Tracked task duration, completion rate, errors, and satisfaction.

**Round 1 findings:**
- Campaign creation was well received and felt easy to use
- All participants completed the primary tasks (create, design, schedule, review)
- Some options were hard to differentiate; breadcrumb navigation felt unclear
- The drag-and-drop email builder caused friction, partly due to limited prototype interactivity

**What he changed for round 2:** introduced stepper navigation alongside breadcrumbs; added a
click-and-select email builder as an alternative to the improved drag-and-drop; added realistic
transitions so participants could engage naturally with the prototype rather than fighting it.

That third change is worth calling out — he recognised that some round 1 friction was an
artifact of prototype fidelity rather than a real design problem, and fixed the instrument
instead of redesigning around a false signal.

**Round 2 findings:**
- Click-and-select builder preferred over drag-and-drop for ease of use
- Stepper navigation preferred by 85% of participants over breadcrumbs
- Functionality and features received significantly more positive feedback

**Final measures:** 100% task completion success · 80–100% rated tasks "Very Easy" or "Easy" ·
20% frustration score (lower is better) · 100% goal achievement across participants.

## 07 — Outcome and reflection
Round 2 showed fewer and less severe issues, confirming the iterations addressed the core
problems. Final refinements focused on micro-interactions and overall usability.

**Takeaways in his words:**
- Solving small problems can produce meaningful impact — participants genuinely hoped to see it
  shipped.
- Rapid iteration and validation beat chasing a "perfect" first solution.

**Next step:** automated, logic-based workflows and customisable campaign creation, letting
admins trigger event-driven personalised messages with minimal manual effort.
`.trim();
