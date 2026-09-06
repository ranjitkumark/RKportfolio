// /api/knowledge.js
// Single source of truth for what the portfolio assistant knows about Ranjit.
// Consolidated from: about-me, Design_Philosophy, UX_Process, Leadership_Approach,
// UX_Audit_Framework — deduplicated and reconciled against the live site data.
//
// Edit this file to update the assistant's knowledge. Nothing else needs to change.


export const IDENTITY = `
# WHO RANJIT IS

Ranjit Kumar — Lead UX Designer, 12+ years.
Currently: Lead UX Designer, PlanSource Operations (now under ValueLabs), July 2021 – Present.
Based in Bengaluru, India.

Industries: US Benefits Management · E-commerce · IoT · GovTech · dApps
Specialization: Product UX · Design Systems · AI Workflows · Complex Enterprise UX
Education: BCA · Professional Diploma in 3D · UX Certification (IXDF)
Contact: postranjitk@gmail.com · +91 9738729691 · www.ranjitkumar.me
LinkedIn: linkedin.com/in/ranjit-kumar-kar-3a3b7931

## The short version, in his words
He thinks in systems, speaks in outcomes, and designs with code in mind. He doesn't just hand
off screens — he shapes product strategy, runs the research, builds the design system, and
measures whether the work actually moved the needle.

His sweet spot is complexity. Benefits administration, IoT command centers, government safety
platforms, AI-powered workflows — the messier the domain, the more focused he gets.

## Problems he's wired to solve
- **Compliance-heavy complexity** — regulated industries where design has to be simple for the
  user and bulletproof for the auditor. Most designers avoid this space; he thrives in it.
- **Multi-stakeholder products** — employer vs. employee vs. broker vs. reseller, all on one
  system with different goals. Designing for that tension without breaking any of them.
- **AI integration that actually works** — not AI as a feature announcement, but as a genuine
  reduction in cognitive load. AI UX lives or dies on trust calibration and fallback quality.
- **Design systems at scale** — a design system isn't a component library, it's a shared
  language. Building it is as much a cultural problem as a design one.
- **Zero-to-one in constrained environments** — real constraints, real users who can't afford
  for it to fail.
`.trim();

export const CAREER = `
# CAREER TIMELINE

## 2012–2013 · Where it started
**Web & Graphics Designer — Wifi Networks**
Print ads, branding, web layouts, email promotions, illustration, iconography, motion graphics.
Broad, fast, generalist by necessity.
*Taught him:* visual communication before UX was a job title. Every pixel had to earn its place.

## 2013–2016 · Learning to think in products
**Sr. Web & Graphics Designer — Paskon Inc**
First product team environment. Low-fidelity prototypes, detailed mockups, design principles.
Translated briefs from business leads and creative directors; first time working alongside PMs,
developers, and marketing.
*Taught him:* the gap between a visual comp and a product decision. How to extract the real
requirement underneath the stated one.

## 2016–2021 · Going deep on complexity
**Senior UX Designer — Dataway Solutions**
End-to-end UX for government and IoT projects at scale, including the MeitY-funded Emergency
Citizen Safety initiative.
- Centralized command center interface monitoring 2,300+ cameras across a city-wide network
- Face-recognition attendance system across 400+ skill centers, reducing attendance fraud
- Next-generation IoT platform from research to launch
*Taught him:* designing for high-stakes environments where a UX failure isn't friction, it's a
safety or compliance issue. You can't guess what a government operator needs at 2am managing a
city emergency.
This work received the India Today Digital Trailblazer Award, presented by the IT Minister.

## Parallel · Design consulting
**Design Consultant — Startup from the Himalayas**
Helped transform an early-stage startup into a lean, design-led organization aligned with the
UN Sustainable Development Goals. Ran user research and diary studies, led brand identity,
collaborated directly with the Founder on product vision and roadmap.

Notably: he spent 30+ days living alongside a sheepherder and a Sozni artisan in the Himalayas,
tracing the real path of a single strand of pashmina wool — from herder, to artisan, to buyer.
No dashboards, no analytics, no session recordings.
*Taught him:* he can't carry assumptions about someone's relationship with technology from one
project to the next. This wasn't a person reacting to a usability lab — the herder had never
held a tablet. Pace, caution, body language all shifted in ways no persona template predicts.

## 2021–Present · Enterprise scale, measurable impact
**Lead UX Designer — PlanSource Operations (now under ValueLabs)**
US benefits administration — one of the most compliance-heavy, stakeholder-dense, cognitively
demanding product environments there is. Employers, employees, brokers, resellers, and
regulators all interact with the same system with completely different needs.
`.trim();

export const IMPACT = `
# SHIPPED WORK & MEASURED OUTCOMES
(These numbers are real. Never invent or inflate them.)

**HSA Experience Revamp**
Simplified employer setup while maintaining full IRS compliance.
→ Admin task time 38 → 21 minutes · Support tickets down 38% · Contributed to new client
  acquisition and 15% revenue growth.

**Prebuilt Templates & Automated Messaging**
Prebuilt communication templates and automated messaging flows.
→ Task time 69 → 47 minutes · Feature CSAT 2.9 → 4.1.

**AI + Voice-Enabled Chatbot**
AI and voice-powered chatbot for benefits queries and life-event workflows.
→ Human agent handoffs down 13% in six months · NPS improved over prior year.

**Employee Experience Platform Revamp**
Rebuilt the employee-facing experience — responsive web + native mobile — through extensive
research with partners, power users, and internal stakeholders.
→ Engagement +23% · Enrollment completion +22% · Support calls −15%.

**Design System Unification**
Merged two separate design systems into one, with clear principles driving consistency,
accessibility, scalability, and faster design decisions across teams.

**Client Onboarding Workflow / Delivery Hub**
Same project as case study #1 below ("One Path, Not Five", earlier called Guided
Implementation) — never present these as two separate pieces of work. Summary metrics are in
that entry; a full deep-dive section follows the case study list.

**Citizen safety / IoT (Dataway)**
→ 2,300+ live camera feeds in a real-time command center · face-recognition attendance across
  ~400 skill centers · India Today Digital Trailblazer Award.

# FEATURED CASE STUDIES ON THIS SITE
Each has a public title and an internal name. Visitors and recruiters may use either — treat
them as the same project. Lead with the public title in your answer.

1. **One Path, Not Five** — internally "Delivery Hub" (earlier "Guided Implementation").
   Decades-old configuration surface, rebuilt as a single destination. ~32 configuration
   modules; sole designer; 2024–2026. A full deep-dive on this project is available further
   down — use it when someone wants detail.
   → Two separate measurements, from two different populations. Keep them distinct:
     • Implementation analysts (cycle time, practitioner-reported estimates, not instrumented):
       ~20–36% reduction across client sizes; roughly two months off a large implementation.
     • Reseller partner channel (business outcomes): self-service driving 17% revenue growth,
       retention +21%, acquisition costs −12%.

2. **Setup to Enrolled** — internally "HSA".
   HSA rebuilt end-to-end, from employer configuration to employee enrollment. Simplified
   employer setup while maintaining full IRS compliance.
   → Admin task time 38 → 21 min · support tickets −38% · contributed to 15% revenue growth.

3. **One Setup, Every Channel** — internally "Communication".
   A single hub for enrollment updates, employee communications, and PWA push notifications,
   with prebuilt templates and automated messaging flows.
   → Task time 69 → 47 min · feature CSAT 2.9 → 4.1.

4. **One Click, Every Answer** — internally "Chatbot".
   An AI + voice-enabled chatbot for benefit questions, HSA balance, adding a dependent,
   life-event workflows, and everything in between.
   → Human agent handoffs −13% in six months · NPS improved over prior year.
`.trim();

export const PHILOSOPHY = `
# DESIGN PHILOSOPHY

## The core line
"My goal isn't to remove all complexity — it's to organize it, guide users through it, and help
them move forward with confidence."

And: "The screen is the output — the real design happens before it."

## What makes a good user experience
Three non-negotiables:
- **Clarity over cleverness** — better a button says "Save and Continue" than something witty
  that makes users stop and think. Interfaces should communicate, not perform.
- **Speed of comprehension** — within seconds, users should understand where they are, what
  they can do, and what happens next.
- **Consistency builds trust** — the product should feel like one coherent experience, not a
  collection of screens designed by different teams at different times.

The real test: watch someone use your product for the first time without saying a word. Every
hesitation, misclick, or moment of confusion is an opportunity.

## The traffic-light frame
Ranjit spends three hours a day in Bangalore traffic — a system that neither respects nor
informs him. It's the origin of how he thinks about state:
- **Red** — a blocked state must announce itself *before* the user acts, not after. Nobody
  should hit Submit only to learn five fields back was wrong. The HSA fix wasn't a prettier
  form; it was surfacing IRS compliance issues mid-setup.
- **Amber** — latency without a signal reads as failure. If a system is thinking, it must say
  so. Silence makes people assume it's broken and try again.
- **Green** — once it's safe to proceed, don't make the user double-check. Confidence is a
  design decision. Stripping unnecessary confirmations from enrollment raised completion.

## The thread through all his work
Take a state that's invisible, and make it visible before it becomes a problem.
- In IoT: 2,300+ live feeds so operators act on a state instead of guessing at one.
- In benefits: IRS rules and life-event workflows turned into signals people can read *before*
  a costly mistake.
- In design systems: two disconnected systems unified so teams stop guessing which pattern is
  "correct" this week.

## Principles he follows
- Reduce cognitive load — every interaction should make the user's job easier.
- Solve the root problem — the requested solution is rarely the actual problem.
- Design for real-world complexity — edge cases, error states, compliance, operational
  constraints are where products succeed or fail.
- Validate assumptions early.
- Design with implementation in mind — he started in web development and knows what code costs.
- Earn trust through consistency — users should never have to guess how a product works.

## Beliefs
- Clarity is not the absence of features — it's the presence of an honest state.
- If a user has to guess what the system is doing, the system has already failed once.
- Accessibility isn't a checklist item — it's the bar for whether the product works at all.
- A design system isn't a style guide. It's how fast your team stops arguing and starts shipping.
- The best AI in a workflow is the one that tells you what it doesn't know.

## What frustrates him about product design today
- Teams jump to solutions before understanding the problem — weeks on high-fidelity prototypes
  before validating the problem is worth solving.
- Accessibility treated as a checklist rather than a design responsibility.
- Products accumulate features faster than value; roadmaps solve organizational needs more
  effectively than user needs.
- Design positioned too late. The biggest impact comes from shaping the problem, not the
  interface.

## User needs vs business needs
He doesn't see them as competing. His role is finding the overlap between what users need, what
the business wants, and what technology can realistically support. When trade-offs are
necessary, he makes them visible to stakeholders rather than absorbing them as design decisions.

Mental model — User need: "find what I'm looking for fast." Business need: "users discover more
products." A bad designer adds a forced interstitial. A good designer builds better search with
inline recommendations. Both win.

## What AI should do in products
Help people make better decisions, complete tasks faster, reduce cognitive effort — not be
added because it's trendy. The best AI feels like a capable assistant, not a replacement for
human judgment. Users should always understand what's happening, keep control, and know when AI
is recommending versus acting. Good AI doesn't draw attention to itself.

## If we work together
- Bring the research, not just the ticket. He moves faster with the "why" than with a polished
  mock to approve.
- Loop him in before the architecture is locked. He can save a rebuild if he sees it early.
- Tell him the real constraint, not the diplomatic version. He'd rather design inside a hard
  limit than discover it in QA.
`.trim();

export const PROCESS = `
# UX PROCESS

## The map
Trigger → Discovery → Define → Design → Validate → Build → Measure → Iterate
Most teams treat this as a waterfall. He treats it as a **spiral** — always pulling signal back
from the next stage to pressure-test the current one.

## 1. Discovery — where products are won or lost
First move when an idea lands: **resist the urge to open Figma.**

Understand the trigger first — user complaints? metrics drop? competitor move? executive
intuition? The source tells you what kind of validation you actually need.

Jobs-to-be-Done framing, written before any wireframe exists:
"When I'm in [situation], I want to [motivation], so I can [expected outcome]."
If he can't write it clearly, the problem isn't defined yet.

Research methods and when he uses them:
- User interviews (5–8 users) — new problem space → mental models, language, real pain
- Session recordings — known flows → where attention dies, where confusion spikes
- Support ticket analysis — any time → unfiltered frustration, the actual words users use
- Competitor teardowns — new feature space → table stakes vs. differentiation
- Analytics pull — always → confirms or kills assumptions fast

**One rule:** he never opens interviews with "what do you want?" He asks about the last time
they did the thing. Behavior over opinion, always.

In enterprise and benefits, discovery also means understanding constraints — compliance rules,
operational processes, technical limits are part of the problem space.

## 2. Define — turning noise into a problem statement
Synthesis session with the team, not alone. Insight clustering across interviews and data, not
just interesting quotes. Then a single agreed problem statement:

"[User type] struggle to [do X] because [root cause], which results in [consequence]."

This sounds simple. It takes a full day of arguing to get right — and that argument is the most
valuable meeting of the entire project.

Prioritization with the PM: impact on user, frequency of problem, feasibility signal from
engineering (he always loops in an engineer here).

## 3. Design — generating solutions
Never straight to high fidelity. The fidelity ladder:
Napkin sketch (minutes) → whiteboard flow (hours) → low-fi wireframe (1 day) → interactive
prototype (test first) → high-fi.

- **Diverge before converging** — design studio, 6 concepts in 6 minutes. Force quantity before
  quality. The first idea is rarely right; the fifth usually unlocks something.
- **Annotate decisions, not just designs** — every key screen carries a note on *why*, not just
  *what*. Saves enormous time in reviews and handoff.
- **Engineering in the room early** — not to approve, but to flag expensive assumptions. A
  10-minute conversation with a backend engineer has saved weeks of rework.

## 4. Validation — knowing it works before you build it
Every design is built on assumptions; validation replaces them with evidence. Validate as early
and cheaply as possible — the method should match the risk of the decision.

Prototype testing, moderated, 5 users minimum. The script:
1. Set context — don't explain the product
2. Give a goal, not a task ("You just signed up. Show me what you'd do.")
3. Think-aloud — "Tell me what you're thinking right now"
4. Watch hands and hesitation, not just words
5. Never answer their questions mid-test — "What would you do if I wasn't here?"

What he's looking for:
- Hesitation over 3 seconds on any step = problem
- Users inventing workarounds = wrong mental model
- Skipping what you thought was the key feature = placement or clarity issue

Desirability check afterward: "If this existed tomorrow, would you use it? What would stop
you?" The answer to the second question is gold.

Higher-stakes decisions: A/B test in production on a subset, or a painted-door test that
measures intent before anything is built.

In enterprise/benefits he watches **decision confidence** specifically — success isn't just task
completion, it's users understanding what they're doing and feeling confident about it.

"I don't validate designs to prove they're right. I validate them to uncover what's wrong while
it's still inexpensive to fix."

## 5. Build — his role during development
He doesn't throw it over the wall.
- **Weekly design QA** — live build vs. spec, deviations logged with severity
- **Edge case reviews** — 3G connection? 0 items? 10,000 items? A 60-character name?
- **Daily Slack with engineers** — to be a fast decision-maker when they hit ambiguity. "Toast
  above or below the nav?" shouldn't block someone for an hour.
- **Microcopy written with the team** — error messages, empty states, loading states. This is
  where trust is actually built.

## 6. Measure — beyond vanity metrics
Success metrics defined jointly with PM and data *before* launch. If you don't agree on what
winning looks like beforehand, you'll debate results instead of learning from them.

- **Layer 1 — Outcome:** revenue, retention, activation, NPS, operational efficiency, reduced
  support cost, enrollment completion
- **Layer 2 — Behavior:** task completion, funnel drop-off, feature adoption, time on task,
  error rates, abandonment points
- **Layer 3 — Quality:** CSAT on the specific flow, support ticket volume on related topics,
  rage clicks, session recordings showing confusion or hesitation

First two weeks post-launch: daily session recordings on the new flow, support ticket spike
monitoring, funnel comparison vs. baseline week-over-week (not day-over-day — too noisy).

At 30 days he always asks: **"What did users do that we didn't expect?"** That answer shapes the
next sprint more than any planned roadmap item.

## The meta-principle
**Move fast on learning. Move carefully on building.**
The biggest waste in product is building something quickly that solves the wrong problem. He'd
rather spend two extra weeks in discovery than two extra months rebuilding a shipped feature.
Speed in discovery, rigour in validation, decisiveness in build.
`.trim();

export const LEADERSHIP = `
# LEADERSHIP APPROACH

"After 12 years, the hardest skill in design isn't Figma. It's people."

## How he leads projects
He leads from **the middle of the room, not the front of it.** He sets the container, not the
content — the job is making sure the team is solving the right problem, has what it needs, and
isn't blocked. The best ideas should come from anywhere.

Leading compliance-heavy, multi-stakeholder projects isn't about removing constraints — it's
about helping the team make good decisions within them.

The stack:
- Start with alignment. One shared problem statement, one agreed success metric. No design
  until this exists.
- Discovery — he's in the interviews alongside the team, not reading summaries.
- Exploration — design studio. He sketches with the team, not in isolation.
- Ongoing — critiques evaluate *decisions, not designers*. Structured, not casual.
- No surprises — stakeholders shouldn't discover major design decisions in a review meeting.
- Pre-launch — he owns the QA checklist. Non-negotiable.

**What he protects hardest: decision velocity.** The most expensive thing in a product team is
indecision. He'd rather make a wrong call and course-correct in two weeks than hold four
meetings to reach consensus on a button color.

## How he mentors
**Junior designers** — the biggest mistake is jumping to solutions. His standard exercise:
"Show me the problem before you show me the design. Walk me through what you know about the
user. Now show me 3 different directions, not 1 polished one." He pairs with them on their
first 2–3 user interviews — you can't learn research from a handbook.

**Mid-level designers** — the gap is usually strategic communication, not craft. They design
great things but can't get them approved. He coaches framing decisions in business language,
reading the room in stakeholder meetings, knowing when to push back vs. adapt.

**Senior designers** — his job shifts to removing ego from the work. Seniors sometimes conflate
"my idea" with "the right idea." His challenge: *"If your name wasn't on this, would you still
defend it?"* That question cuts through a lot.

**1:1 structure, every two weeks:** their agenda first (15 min), work review (20 min), growth
thread (10 min), his one ask (5 min).

**Feedback framework:** Observation → Impact → Question.
"I noticed you didn't address the empty state." → "That created doubt in the PM's mind about
completeness." → "What was your thinking there?" Listen first. Then coach. Never lecture.

## How he handles disagreement
**Type 1 — Taste.** "I don't like that color/font/layout." Easiest. Redirect to criteria: does
it meet our accessibility standard? Does it align with the design system? Have we tested it
with users? If yes to all three, the conversation is over.

**Type 2 — Strategic.** "I don't think we should build this at all." Healthy — he makes space
for it. He writes competing positions down, not just his own, maps the assumptions behind each,
and pushes to test assumptions rather than debate positions: "We both have opinions. Neither of
us has data yet. What's the smallest thing we could do to find out who's right?"

**Type 3 — Political.** "Leadership wants X, the team believes Y." The hardest. Never framed as
designer vs. stakeholder. Find the shared goal underneath — it almost always exists. Propose a
structured test with a pre-agreed decision framework.

**The line he won't cross:** he'll advocate hard, lose professionally, and execute the decision
fully. What he won't do is silently implement something he believes will harm users without
putting his concern on record first. That's the integrity line.

## How he influences stakeholders
Most designers try to influence with design quality — necessary but not sufficient.
Stakeholders respond to **risk reduction and business outcomes**, so that's how he speaks.

1. **The pre-meeting** — he never walks into a high-stakes review cold. He talks to the most
   skeptical person first, in private where they're honest, not in the meeting where they're
   performing.
2. **Lead with the user problem, not the solution** — not "we redesigned onboarding, here's
   what changed," but "we were losing 34% of users at step 3. We know why. Here's what we
   tested. Here's what worked." The second makes them lean forward.
3. **Make the cost of inaction visible** — now it's a business conversation, not a design one.
4. **Bring options, not answers** — never one direction. Always three: Conservative (low effort,
   moderate impact), Recommended (balanced), Ambitious (high effort, high impact, more risk).
   Reframes the meeting from "approve or reject" to "which direction."
5. **Make decisions easy to reverse** — "Ship to 10% for 3 weeks. If data supports it, roll out.
   If not, revert and we've learned something." Low commitment, high learning, almost always
   approved.

## Working with PMs
Co-owners of the problem, not competitors for the roadmap.
- PM owns: priority, timeline, business requirements, stakeholder alignment
- He owns: user insight, solution quality, design consistency, experience integrity
- Shared: problem definition, success metrics, trade-off decisions

Built on radical transparency — he tells them when they're solving the wrong problem, they tell
him when a design will create a support nightmare.

**The one thing that breaks PM–designer relationships:** designers going around PMs to
stakeholders on design decisions. He never does this. He raises disagreement with the PM first,
then they escalate together if needed.

## Working with engineers
Design partners, not implementation vendors.
- He knows enough front-end architecture to have meaningful conversations
- He attends sprint planning — hears constraints before they become blockers
- He asks "what's the engineering-elegant solution?" before finalizing designs
- He never says "just make it work"

**His rule:** if an engineer says something is complex to build, he believes them. Then asks:
"What would need to change in the design for this to be simpler? Let's find the version that's
80% as good for 20% of the effort." That question has produced some of his best design
decisions — engineering constraints often force creative simplicity.

## The meta-principle
**"I optimize for the team's clarity, not my own visibility."**
The designers who fail at senior levels are the ones who need to be the smartest person in the
room. The ones who succeed make the room smarter.

A good week isn't whether he shipped something great — it's whether the team shipped something
great they're proud of, and whether they know *why* it's great, not just that it is.
Craft fades. Judgment compounds.
`.trim();

export const AUDIT_FRAMEWORK = `
# UX AUDIT FRAMEWORK
How Ranjit reviews a product. Use this whenever someone shares a screenshot, a link, or
describes a product problem.

## The 5-minute gut test — before any framework
He uses the product **as a real user would.** Cold. No briefing, no feature walkthrough. He's
timing his own comprehension:
- 0–10 sec → Do I understand what this product does?
- 10–30 sec → Do I know what to do next?
- 30–90 sec → Am I making progress toward a goal?
- 90 sec–5 min → Do I trust this enough to give it data / money / time?

If any of those fail at their timestamp, that's a priority problem — found before opening a
single spec doc.

First impressions he registers: visual hierarchy (where does my eye go, is it where it should
go?), information density (overwhelmed or underwhelmed?), tone of voice (human or legal
department?), load speed (perception of quality starts before a pixel renders), emotional
register (trustworthy, delightful, anxious, cold?).

## The 11 criteria — run simultaneously, like a diagnostic scan

**1. Clarity — can users understand what to do without assistance?**
Value proposition visible above the fold? CTAs specific ("Start your free trial") or vague ("Get
started")? Do nav labels match what's inside? Are empty states explained or just empty? Do
error messages say what went wrong AND how to fix it? Jargon that only makes sense if you
already use the product? Compliance explained in plain language, not legal copy?
*Red flag:* users opening help docs during a core task. At PlanSource, support tickets
clustering around HSA setup told him clarity had failed before a single interview confirmed it.
Fixing it cut tickets 38%.

**2. Task efficiency — does it respect the user's time?**
Clicks to complete the primary task? Redundant confirmations that add no safety value?
Re-entering information already given? Unnecessary page loads breaking one logical flow? Are
most-used actions closest to hand? Prebuilt defaults or templates reducing repetitive effort?
*Benchmark:* if a power user can't complete the core task 30% faster than a new user after one
week, friction is baked in permanently. 38→21 min and 69→47 min both came from this lens.

**3. Flow integrity — does the sequence match the user's mental model?**
Back button behaves as expected? Completing one task creating unexpected side effects? Honest
progress indicators on multi-step flows? Do modals interrupt at the right moment or the worst
one? Can users save and return without losing progress? Does the flow survive interruption —
browser close, session timeout? Clear "what happens next" at every stage ending?
*Drop-off signal:* any step where users spend more than 90 seconds without forward movement.
That's confusion, not consideration. The 32-step onboarding workflow taught him honest progress
indicators and consolidated views cut abandonment more than any visual change — onboarding
dropped by 30 days.

**4. Feedback & system status — does the product always say what's happening?**
Visual feedback within 100ms of any action? Does the user know their action worked? Error states
specific, human, non-blaming? Confirmation before irreversible steps? Form validation inline on
blur, or only on submit? Does the UI communicate background processing? Audit trails and
confirmation states explicitly shown?
*The test he runs:* do every primary action and ask — **"If I were anxious, would I know this
worked?"** Anxious users click twice. In benefits, double submissions mean duplicate
enrollments, incorrect contributions, compliance failures.

**5. Multi-stakeholder clarity — does each user type get what they need?**
Is role-based information separated without requiring navigation expertise? Does an employer
view bleed confusingly into an employee view? Are admin controls protected from accidental
access? Does each role see only relevant actions? Are permission states (what you *can't* do)
explained, not just hidden? Does onboarding calibrate to role from the first screen?
*Signal:* if a user has to ask "is this for me?" about anything on screen, the role-based
architecture has failed.

**6. Consistency — does it feel like one product?**
Consistent spacing on a grid? Typography hierarchy where the same meaning always uses the same
style? One clear primary action per screen? Same interaction patterns throughout? Icons from one
library with consistent stroke weight? Tone consistent from onboarding to settings to errors?
Loading states and transitions following one pattern?
*Quick test:* screenshot 5 random screens, cover the nav. Could you tell they're from the same
product? If not, it's a design system *adoption* problem, not a design problem — inconsistency
is never a visual issue, it's always process and governance underneath.

**7. AI & automation UX — is the intelligence trustworthy?**
Does the AI state confidence or surface uncertainty? Is human escalation always visible and one
step away? Does it explain *why* it's suggesting something, not just what? Are voice
interactions designed for failure? Does the bot know its scope and say so gracefully? Can users
correct AI errors without starting over? Are automated flows reversible within a reasonable
window?
*Trust test:* would I trust this output if I couldn't verify it? For anything affecting
healthcare or finances, the answer has to be yes — or it needs more guardrails before shipping.

**8. Support deflection — can users self-serve?**
Empty states instructional, not just empty? Do errors say what to do, not just what went wrong?
Contextual help at the moment of confusion, not a separate FAQ? Tooltips in plain language?
Do confirmation emails reduce "did it work?" follow-ups? Is search surfacing the right answers?
*Benchmark:* **every support ticket is a design failure.** He treats support volume on a flow as
a direct UX metric, not a customer success problem.

**9. Accessibility — WCAG AA as the floor, not the ceiling**
Contrast 4.5:1 body / 3:1 large text. No information by color alone. Touch targets ≥44×44px.
Full keyboard navigation. Screen reader labels on every interactive element. Meaningful alt
text. Forms with real labels, not just placeholders. Errors announced to assistive tech, not
just shown. Text scalable to 200% without breaking layout. Session timeouts with adequate
warning and extension.
*His honest note:* he's never audited a product that passed all of these. Most fail 6–8.
Accessibility debt is the most invisible, most impactful debt in the industry.

**10. Trust & emotional quality — does it feel safe to use?**
Pricing transparent or hidden until commitment? Permissions requested at the right moment with
clear rationale? Does it explain what happens to my data at point of entry? Is cancellation as
easy as signup? Does it handle mistakes gracefully or make users feel stupid? Is there a human
way out? Are sensitive fields handled with visible care?
*The cancellation flow test:* he tries to cancel, delete, or downgrade on every product he
audits. That single flow tells you everything about how much a company respects its users.

**11. Outcome measurability — can we tell if this worked?**
Every review ends here. Is there a measurable behavior we expect to change? Is there a baseline?
Are analytics instrumented on key interactions? Is there a session recording plan for the first
two weeks? Have we agreed what "working" looks like *before* shipping?

## Severity ratings
- **P0 — Blocker.** User cannot complete the task, or compliance risk exists. Ship nothing.
- **P1 — Critical.** Significant friction on the primary flow. Fix before release.
- **P2 — Moderate.** Noticeable, workaround exists. Fix within 2 sprints.
- **P3 — Minor.** Polish or edge case. Backlog with clear criteria.
- **P4 — Observation.** Future consideration, not blocking anything today.

Every P0 and P1 comes with a proposed direction — not just a problem logged. The team should be
able to move on it the same day.

## Signals that tell him a product has usability problems
- Tooltips on primary actions — if the main feature needs a tooltip, the design failed
- "Are you sure?" on non-destructive actions — that's designer anxiety, not UX clarity
- More than 2 levels of navigation depth on mobile — users get lost, guaranteed
- Search as primary navigation — search supplements navigation, it doesn't replace it
- Long forms with no progress indication — completion drops 20%+ on 5+ field forms
- Inline instructions longer than the action itself

## The underlying standard
**Did this design reduce the burden on the user — or transfer it to them?**
Complexity doesn't disappear in product design. It either gets absorbed by the design — through
clear hierarchy, smart defaults, contextual guidance, trust signals — or it gets pushed onto the
user, who pushes it onto your support team, your churn rate, and eventually your revenue.
That's the standard. Everything else is execution detail.
`.trim();

export const PERSONAL = `
# OUTSIDE OF WORK
Traveler · reader · moment-catcher · stillness-seeker.

He spends three hours a day fighting traffic that neither respects nor informs him — which is
probably why, outside work, he goes looking for the opposite: calm, quiet, green places where
nothing is asking you to react to it. It's not an aesthetic preference, it's recovery. The
traffic taught him what a bad system feels like from the inside; the greenery reminds him what
an unhurried, legible world feels like — which is what he's always trying to build.

He enjoys exploring new places, books that challenge his perspective, and unhurried chai with
friends. Travel has taught him more than any classroom — every destination offers a different
way of solving problems and living life, and watching how people interact with the world is a
reminder that great products start with understanding people.
`.trim();

export const KNOWLEDGE_BASE = [
  IDENTITY,
  CAREER,
  IMPACT,
  PHILOSOPHY,
  PROCESS,
  LEADERSHIP,
  AUDIT_FRAMEWORK,
  PERSONAL,
].join("\n\n---\n\n");
