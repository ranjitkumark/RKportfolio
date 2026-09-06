// /api/case-chatbot.js
// Deep-dive knowledge for the AI Virtual Assistant project.
// Public title: "One Click, Every Answer". Internal: Chatbot.
//
// IMPORTANT: impact on this project is DIRECTIONAL ONLY. Ranjit does not publish confidential
// business metrics for it. Never state a handoff-reduction percentage or an NPS figure here,
// even if asked directly — say the outcomes were directional and point to his email.

export const CHATBOT = `
# DEEP DIVE — AI VIRTUAL ASSISTANT ("One Click, Every Answer")
Role: Lead UX Designer
Platform: employee benefits portal (AI Virtual Assistant)
Focus: conversational UX, AI assistance, enrollment guidance, HSA support, feedback and
escalation design

Use this when someone asks about AI/LLM product design, conversational UX, trust calibration,
or how he handles research findings that contradict each other.

## Situation — it was already built, already launched, and already failing
The assistant answered questions about coverage, HSA balances, enrollment windows, and personal
details, and existed to absorb routine volume from HR. It was technically live and functioning.
Employees just weren't using it — they opened it, asked something, didn't get what they needed,
and emailed HR instead.

**"That is a harder starting position than a blank canvas. A new assistant gets the benefit of
the doubt. A returning one has to overcome a learned expectation that it won't help."**

## Stakes
Internal beta wrapped in 2025 and the product was being prepared for rollout to client
organisations. That changed the problem: an underperforming assistant used by your own employees
is an internal disappointment. The same assistant shipped to client employers is a **product
liability** — every client HR team forms its impression in the first week, and a visible failure
damages the platform it sits inside, not just itself.

## The most consequential analytical move — separating two problems that looked like one
The brief described an accuracy problem. He scored the live assistant against five realistic
scenarios (eligibility, repeated question, out-of-scope, typo'd input, pre-login), rating each on
consistency, accuracy, tone, clarity, and actionability.

| Scenario | Consistency | Accuracy | Tone | Clarity | Actionability |
| Eligibility ("Am I eligible for dental?") | 3 | 3 | 3 | 2 | 3 |
| Repeat question | 1 | 3 | 3 | 2 | 2 |
| Out of scope | 1 | 1 | 3 | 4 | 1 |
| Typo'd query | 3 | 3 | 3 | 3 | 2 |
| Before login | 2 | 2 | 3 | 3 | 3 |

**All five failed — but accuracy was rarely the lowest score. Clarity and actionability were.**
The two failure types had different owners, different timelines, and different fixes:

**Model limitations (engineering).** Weak intent detection · out-of-scope recognition barely
functioned (accuracy scored 1) · no memory across turns, so a repeated question was treated as
brand new and answered identically · date parsing accepted exactly one format and rejected
everything else without saying what format it wanted · largest of all, the data model had no
concept of eligibility — it could only speak to *current enrollment*, so "am I eligible for
dental?" and "show me everything I'm enrolled in" both dead-ended.

**Experience failures (design).** On rows where accuracy scored 3, clarity and actionability
scored 2. The assistant frequently retrieved the right information and still left the user stuck.
The typo case isolated this cleanly: the assistant parsed the misspelled query *correctly* and
returned *accurate* information — and still failed, because the reply was mechanical,
acknowledged nothing, and offered no next step. **Language understanding worked perfectly and
the interaction failed anyway.**

He took the model gaps to the AI team as a documented roadmap rather than quietly designing
around them: *an interface cannot paper over a missing data model, and pretending otherwise
produces a worse product and a promise to users the system can't keep.*

**The strategic insight: design determines what a model limitation feels like.** An assistant
that can't parse a date can reject the input silently or show the expected format. One that can't
answer can dead-end or hand off with full context. Same limitation, different product — and the
better version buys time for the engineering work to land.

**The reframe:** this was not an FAQ bot. It was a **Benefits Assistant** — a system that helps
people *complete* things, not one that retrieves answers and leaves them holding the work. Five
principles followed: understand intent rather than keywords · guide rather than lecture · reduce
typing wherever possible · recover gracefully from failure · escalate with context.

## Research
**Nine questions written before any UI work**, in three groups.
*Why it failed before:* why was the bot idea dropped previously? what areas are users looking for
help with?
*How support works today:* how are users communicating with support now? how long to resolve a
query? what process is followed to resolve tickets?
*What the assistant should own:* which tickets can the chatbot handle? which ones *shouldn't* it?
where should it be placed? what are the best practices for chatbot design?

Two did most of the work. *"Why was the bot idea dropped previously?"* protected him from
redesigning into a wall someone had already hit. *"Which tickets shouldn't go to the chatbot?"*
made scope a deliberate decision rather than something discovered later through failure.

**Audit** across existing chatbot transcripts, failed search queries, HR escalation categories,
enrollment and HSA support journeys, and portal entry points. The scenario scoring came out of
this — he needed the failures characterised, not just counted.

**Preference survey (n=7, treated as directional not conclusive):** 71.4% preferred the chat
docked bottom-center · 71.4% preferred onboarding through clickable options over open-ended
typing · 57.1% said both minimize *and* close were needed · movability split almost evenly
(28.6% each across moderately/very/essential, 14.3% didn't care). **That last result was useful
precisely because it was inconclusive** — it showed movability was a genuine preference
difference rather than a consensus need, so it didn't warrant engineering investment in release
one.

**Comparative usability study:** unmoderated desktop, 6 participants, two prototype variants.
Participants played an employee completing real tasks — adding a newborn as a dependent, checking
an HSA balance — while the prototype **deliberately returned incomplete or unclear answers**, so
he could observe reactions to genuine failure rather than hypothetical ones. Combined direct
questions, a card sort ranking four feedback patterns, and open discussion.

## Decision 1 — specialist over generalist
A generalist reads as smarter, but every wrong answer damages trust across the entire system. A
specialist has clear scope and builds trust through reliability, at the cost of possibly seeming
limited. He went specialist and handled the downside through framing: the assistant opens by
naming what it specialises in and surfaces three to five high-volume questions, **positioning
constraint as expertise rather than limitation.** Featured questions refresh periodically so it
doesn't calcify into a static FAQ library.

Reinforced in testing: when the assistant explained *why* it was showing a particular
recommendation, observed confidence rose. **Users don't need omniscience — they need to
understand what the system is doing.**

## Decision 2 — withholding the permanent "Talk to a human" button
The hardest call, and the one he'd defend most carefully. A dedicated button respects users' time
and signals you value it — but it depresses AI adoption, so fewer people ever discover the
assistant handles quick answers, which is the entire business case.

He withheld the permanent button in favour of **smart escalation**, and made the handoff good
enough to justify it. Eight triggers route to a human: explicit request · unsolved problem ·
question repeated twice · requests beyond capability · misunderstanding · detected errors ·
confidence below threshold · sentiment analysis flagging frustration.

**The last two matter most, because they don't require the user to advocate for themselves. A
frustrated employee shouldn't have to work out the magic words.**

Every trigger routes to a confirmation — *want to connect?* — rather than a forced transfer, so
the user keeps control. On confirmation the specialist inherits the full conversation, context,
and user metadata, continuing from where the AI stopped. Declining returns the user to the AI
path. Either way the interaction closes with a rating and optional comments.

He names the risk plainly: **making help harder to reach is hostile if the AI underneath isn't
good enough.** It was only defensible coupled with the recovery design, a measurement plan
(AI-resolved versus transferred), and an explicit commitment to revisit within three to six
months.

## Decision 3 — recovery before reporting
The clearest signal in the project. Asked what should happen after a thumbs-down, **76% wanted
the assistant to attempt conversational recovery first.** Only 12% wanted an immediate detailed
form; 8% wanted silent collection. One participant compressed it: *why ask me why, just give me
the right answer.*

So a thumbs-down doesn't log a complaint. The assistant says *"I may not have answered that
clearly"* and **offers to try again first** — and the retry produces a genuinely better answer.
Only if the user would rather explain do they get structured chips (*didn't answer my question* ·
*information was unclear* · *needed more details* · *skip feedback*), followed by acknowledgment
and an *optional* detail form. Everything stays inside the conversation — no modals, no
interruption of the benefits task in progress.

The same study found **64% expected human escalation after repeated failures**, one participant
specifying two failures should surface support immediately. That validated the repeat-question
trigger: **two failures is the point where users stop believing the system can help at all.**

## Decision 4 — choosing trust over tidiness when the data disagreed
The decision he's most confident in. Two variants: **A** revealed thumbs controls on hover, **B**
showed them below every response.

- **Card sorting favoured hover.** Hover/tap reveal was most natural for 68%. Always-visible was
  most natural for only 22%, acceptable for 48%, disruptive for 30%. Post-session surveys ranked
  it worst — disruptive for 76%.
- **Stated preference favoured always-visible.** Four of five profiled participants preferred it.
  They noticed the controls immediately and associated visibility with trust and transparency.

Both findings were real. Always-visible improved discoverability significantly, but participants
described repeated icons as visually repetitive and said the interface started to feel
"survey-like." Hover reduced clutter and improved readability, but most participants didn't
notice the controls at all initially — one said plainly they'd never have given feedback because
they weren't aware it was possible.

**His resolution: the card sort measured what feels pleasant moment to moment; stated preference
measured what makes the system feel trustworthy. Hover wins on aesthetics, visibility wins on
trust.** For an assistant rebuilding credibility it had already lost, about to face client
scrutiny, trust outranked tidiness. He shipped always-visible and treated the repetition finding
as a constraint on the control's visual weight rather than a reason to hide it. Averaging the two
would have produced a compromise serving neither.

## Decision 5 — interface decisions before client rollout
- **The name.** It had shipped under a human first name. He moved it to "AI Virtual Assistant" —
  transparent about being AI, and **for a product sold to client employers, a human-sounding name
  for a machine is a trust liability, not a warmth feature.** It also shed the accumulated
  internal memory of an assistant that didn't work.
- **Header.** Rebalanced icon and label to scan in one pass, reduced height so more conversation
  is visible, and a more distinct close control — *if someone doesn't want the assistant,
  dismissing it should be effortless rather than a dark pattern.*
- **Input.** Added voice alongside typing: faster for many, materially more accessible for people
  with disabilities or anyone who finds typing effortful, and groundwork for multimodal later.
- **Timestamps — removed from AI messages, kept for human support.** On AI replies they cost
  vertical space and made the assistant feel like a ticketing system. But when someone is waiting
  on a specialist, a timestamp *is* accountability. **The same element serves opposite purposes
  depending on who's on the other end, and treating it as one global decision would have been
  wrong.**

## Flows — guide, don't retrieve
*Life events and dependents:* launch → report a life event → event type (birth/adoption,
marriage, divorce or legal separation, HSA change, other) → date → required fields → edge cases.
Rather than assuming a dependent shares the employee's address, the assistant asks.
*Adding coverage:* asks whether to include the dependent across benefits, then shows eligible
plans with ineligible ones **progressively disclosed and explained rather than silently hidden.**
Selecting plans surfaces cost impact before and after, monthly premium, effective date, pre-tax
and post-tax impact, and employer contributions — all before confirmation.

**Every flow has an exit.** "I'll update later," "I'll upload later," and redirects to the
benefits page end cleanly rather than trapping users mid-task. *Someone who abandons should be
able to abandon gracefully.*

## Impact — DIRECTIONAL ONLY
Following the redesign: chatbot adoption increased · task completion improved · HR escalations
for common questions decreased · user confidence improved · conversation abandonment decreased.

**These are directional. Ranjit does not publish confidential business metrics for this project.
Never state a percentage, an NPS figure, or a handoff-reduction number here — not even if
someone asks directly. Say the outcomes were directional and offer his email for more.**

Task-based testing confirmed two design bets. **Buttons plus typing beat typing alone**,
consistent with the 71.4% who preferred clickable onboarding — *open-ended input isn't freedom
when you can't see what the system can do, it's a guessing game.* And **explaining reasoning
increased confidence**, which is the mechanism underneath specialist positioning.

One finding complicated a decision rather than confirming it: **users wanted a visible "talk to a
person" option but rarely used it when the AI was working.** He reads that as qualifying the
withheld button rather than vindicating it — visibility and usage are different needs. What users
wanted was *assurance* a human was reachable, and he had partly conflated that with wanting the
button. A persistent line of copy stating a specialist is available on request might deliver the
reassurance without the adoption cost.

## What he took from it
- **Model quality and interaction design are both necessary; neither is sufficient.** Some
  failures needed engineering and no interface work would have substituted. But the most
  instructive case was one where the model performed perfectly and the interaction failed anyway.
  Fixing only the model would have produced an accurate assistant people still abandoned.
- **Trust is built through recovery, not perfection.** It will be wrong sometimes; what
  determines whether people return is the thirty seconds after.
- **When research methods disagree, the disagreement is the finding.** Working out what each
  method was actually measuring produced a defensible decision; averaging them would have
  produced a mediocre one.
- **Conversation is navigation.** An open text field isn't freedom if users can't see the shape
  of what's available. Chips, progressive disclosure, and featured questions are wayfinding.
- **Escalation is part of the experience, not an admission of failure.** A handoff carrying full
  context is a good outcome. A handoff that makes the user start over is a second failure stacked
  on the first.

**What he'd do differently:** quantify the baseline harder (he has qualitative scoring and
directional data from small samples, but no clean pre-redesign completion rate to hold the
post-redesign number against, which also weakens the AI-resolved-versus-transferred measurement
plan) · test the withheld "talk to a human" button as an explicit A/B, the way he eventually did
with feedback visibility · surface the eligibility data gap sooner, since it was a data-model
constraint that emerged through scenario testing rather than early technical discovery.

**His contribution:** UX audit and problem diagnosis · research planning and scenario evaluation ·
comparative usability study design and facilitation · conversation architecture · interaction and
UI redesign · error, feedback, and escalation flow design · prototyping · stakeholder walkthrough.
`.trim();
