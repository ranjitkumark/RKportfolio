import React from "react";
import { ArrowLeft } from "lucide-react";
import TrafficLight from "../components/TrafficLight.jsx";
import Eyebrow from "../components/Eyebrow.jsx";

function Section({ eyebrow, title, children, divider = true }) {
  return (
    <section className={`py-12 sm:py-16 ${divider ? "border-t border-band/30" : ""}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-[24px] sm:text-[28px] font-semibold text-heading mb-5">{title}</h2>
      <div className="space-y-4 text-[15px] sm:text-[16px] leading-relaxed text-body max-w-3xl">{children}</div>
    </section>
  );
}

const LAWS = [
  {
    dotClass: "bg-[#c93728]",
    title: "Red — a blocked state must announce itself before the user acts, not after.",
    body: "Nobody should hit “Submit” only to find out five fields back was wrong all along. When I redesigned the HSA experience, the real fix wasn't a prettier form — it was surfacing IRS compliance issues while someone was still mid-setup, not after. Admin work that used to eat 38 minutes started taking 21, and people stopped calling support to ask what went wrong, because the form had already told them.",
  },
  {
    dotClass: "bg-[#d08d00]",
    title: "Amber — latency without a signal reads as failure.",
    body: "If a system is thinking, it needs to say so — silence just makes people assume it's broken and try again, which makes everything worse. That's the instinct behind the AI/voice benefits chatbot I built: it didn't get smarter, it got more honest about what it did and didn't know, and within six months, far fewer people needed to escalate to a human just to get an answer it could've given them itself.",
  },
  {
    dotClass: "bg-[#2e6c4d]",
    title: "Green — once it's safe to proceed, don't make the user double-check.",
    body: "Confidence is a design decision, not a personality trait. When I stripped unnecessary confirmation steps out of the benefits enrollment flow, completion rates climbed and the whole process got noticeably faster — not because people got more patient, but because they finally had fewer reasons to hesitate.",
  },
];

const PROOF = [
  {
    title: "Benefits, made legible",
    body: (
      <>
        The HSA experience used to bury IRS compliance rules inside a setup flow people had to decode as they went —
        now the system tells them as they go, and what took <span className="text-live font-mono font-semibold">38 → 21 min</span>{" "}
        now takes far less, with a lot fewer support calls behind it. The same fix worked on employee communications:
        prebuilt templates and automated messaging cut task time from{" "}
        <span className="text-live font-mono font-semibold">69 → 47 min</span> and pulled feature satisfaction from{" "}
        <span className="text-live font-mono font-semibold">2.9 → 4.1</span>, mostly by saying the same thing the
        same way every time. The enrollment flow got the same treatment: strip the friction, keep only what earns
        its place, and completion rates went up while the whole thing got faster to finish. The chatbot I built
        followed the same rule as everything else here — say what you know, say what you don't, and let people
        trust it enough to stop escalating to a human for things it could already answer.
      </>
    ),
  },
  {
    title: "Systems, unified",
    body: "Two separate design systems governing the same product meant two separate sets of assumptions about what “correct” looked like. I merged them into one framework — not a style guide nobody opens, but the thing that lets a whole team stop arguing about a button and start shipping.",
  },
  {
    title: "A city, watched honestly",
    body: (
      <>
        On a MeitY-funded citizen safety initiative, I helped stand up a command center reading{" "}
        <span className="text-live font-mono font-semibold">2,300+</span> live camera feeds in real time — the
        closest I've come to designing an actual traffic light, at a scale where a wrong read isn't a bad review,
        it's a real risk. The same program rolled out face-recognition attendance across roughly{" "}
        <span className="text-live font-mono font-semibold">400</span> skill centers. It's the work I'm proudest of,
        and it's the reason the India Today Digital Trailblazer Award still means something to me, handed to the
        project by the IT Minister himself.
      </>
    ),
  },
];

export default function DesignPhilosophy({ onBack }) {
  return (
    <div className="animate-fadeIn font-poppins min-h-screen">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-16 py-6 flex justify-center">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-2 text-[14px] font-medium text-accent bg-card border border-accent rounded-[24px] px-4 py-2 hover:opacity-80 transition-opacity"
        >
          <ArrowLeft size={14} />
          BACK TO HOME
        </button>
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-16">
        <div className="max-w-3xl">
          {/* HERO */}
          <div className="pt-6 pb-16">
            <Eyebrow>Design Philosophy — Ranjit Kumar</Eyebrow>
            <h1 className="text-[32px] sm:text-[44px] leading-[1.15] font-semibold text-heading mb-5">
              What twelve years in traffic taught me about design.
            </h1>
            <p className="text-[16px] sm:text-[18px] italic text-body leading-relaxed max-w-xl mb-8">
              A decade-plus of building systems that tell the truth about their own state — starting with the one
              commute that never does.
            </p>

            <div className="flex gap-5">
              <div className="w-1 shrink-0 rounded-full bg-gradient-to-b from-[#c93728] from-30% via-[#d08d00] via-30% to-[#2e6c4d] to-[62%]" />
              <blockquote className="text-[19px] sm:text-[22px] italic leading-relaxed text-heading">
                I spend three hours a day in traffic that tells me nothing — no signal I can trust, no state I can
                read. Good design is the opposite of that moment. You get there by obsessing over what someone needs
                to know, right when they need to know it.
              </blockquote>
            </div>

            <div className="mt-10">
              <TrafficLight />
            </div>
          </div>

          {/* WHERE THIS BEGAN */}
          <Section eyebrow="Origin" title="Where this actually began">
            <p>
              I started in animation — a diploma in 3D, learning that a single frame of motion could carry more
              meaning than a paragraph of copy. That's not where most UX careers begin, but it's where mine did, and
              it still shows up in how I think: I don't design static screens, I design <em>sequences</em>.
            </p>
            <p>From there the path wasn't linear, it was escalating:</p>
            <div className="font-mono text-[14px] text-heading bg-card border border-band/40 rounded-xl px-5 py-4 max-w-md">
              12+ years <span className="text-muted">·</span> 4 industries <span className="text-muted">·</span> 1 pattern
              <span className="block text-[12px] text-muted mt-1.5 font-poppins">
                Animation → Web &amp; Graphics → IoT → US Benefits
              </span>
            </div>
            <p>
              By the time I'd spent a decade doing this, I'd gone from making things look right, to making things{" "}
              <em>work</em> right, to making entire systems legible to the people depending on them.
            </p>
          </Section>

          {/* BIO */}
          <Section eyebrow="Bio" title="A short, honest bio">
            <p>
              I'm a Lead UX Designer currently running design for a major US benefits platform, coming off a 12+
              year path through graphic and web design, IoT, and enterprise product work. The thread through all of
              it: I obsess over the moment someone has to make a decision and doesn't have enough information to
              make it confidently.
            </p>
            <p>
              I don't just design the screen. I design the <em>state</em> — is the system working, waiting, blocked,
              or done — because most of the frustration people feel with software isn't bad visuals, it's not
              knowing what's actually happening. That's a lesson I learned first from motion graphics, then
              relearned the hard way on a government safety platform, where the "screen" was a live wall of 2,300+
              camera feeds and a wrong read wasn't a bad review, it was a real-world risk.
            </p>
          </Section>

          {/* INTERSECTION */}
          <Section eyebrow="Philosophy" title="The intersection I keep coming back to">
            <p>
              A traffic light is one of the only pieces of infrastructure on Earth that billions of people trust
              instantly, without training, in a split second, under stress. Nobody reads instructions at an
              intersection. You just know: stop, wait, or go.
            </p>
            <p>
              That's the whole point of designing anything — to earn that same instant trust. Not because the
              system is simple, but because the <em>signal</em> is honest.
            </p>
            <p>
              I didn't invent this idea in a workshop. I live it every day in traffic that doesn't work — and I've
              spent 12 years trying to make sure the systems I build don't do to their users what Bangalore traffic
              does to me.
            </p>

            <h3 className="text-[12px] font-semibold uppercase tracking-[0.06em] text-muted mt-10 mb-4">
              Three rules I don't break
            </h3>
            <div>
              {LAWS.map((law, i) => (
                <div key={law.title} className={`flex gap-4 py-6 ${i > 0 ? "border-t border-band/30" : ""}`}>
                  <span className={`w-3.5 h-3.5 rounded-full shrink-0 mt-1 ${law.dotClass}`} />
                  <div>
                    <h4 className="text-[15px] sm:text-[16px] font-semibold text-heading mb-2">{law.title}</h4>
                    <p className="text-[15px] leading-relaxed text-body">{law.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* THREAD */}
          <Section eyebrow="Pattern" title="The thread running through all of it">
            <p>
              Every project I've shipped, underneath the surface, is the same move:{" "}
              <strong className="font-semibold text-heading">
                take a state that's invisible, and make it visible before it becomes a problem.
              </strong>
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-live shrink-0 mt-2.5" />
                <span>
                  In IoT, that was a real-time command center reading 2,300+ live camera feeds so operators could
                  act on a state instead of guessing at one.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-live shrink-0 mt-2.5" />
                <span>
                  In benefits, that was turning IRS compliance rules and life-event workflows into signals people
                  could read <em>before</em> they made a costly mistake.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-live shrink-0 mt-2.5" />
                <span>
                  In design systems, that was unifying two disconnected systems into one framework so teams stopped
                  guessing which pattern was "correct" this week.
                </span>
              </li>
            </ul>
            <p>
              I didn't set out to find this pattern — it's just how I actually notice problems. If a system can't
              tell a person what it's doing, I don't consider it finished.
            </p>
          </Section>

          {/* FIELDWORK */}
          <Section eyebrow="Fieldwork" title="Thirty days with a sheepherder and a Sozni artisan">
            <p>
              I worked with a UN-recognized NGO building an ecosystem around pashmina — trying to answer something
              nobody in the room could answer from a spreadsheet: where does the wool actually come from, and who is
              it actually being sold to. So I spent over 30 days living alongside a sheepherder and a Sozni artisan
              in the Himalayas, watching how they actually spent their days and what got in the way of it.
            </p>
            <p>
              No dashboards, no analytics, no session recordings — just tracing the real path of a single strand of
              wool, from the herder who raises it, through the artisan who hand-embroiders it for weeks, to the
              buyer at the other end who mostly never asks how it got there. Along the way I found the real friction
              points: what slows a herder down, what an artisan loses time to, where the chain quietly breaks
              between one person's work and the next person's.
            </p>
            <p>
              That's where the real lesson sat. This wasn't someone reacting to being "observed" the way a person
              reacts in a usability lab. He'd never held a tablet, never looked into a camera with intent — so his
              caution, his pace, even his body language around me changed in ways no persona template would have
              predicted. It taught me I can't carry assumptions about someone's relationship with technology from
              one project into the next. I have to actually find out, every time, what a person already knows and
              what they've genuinely never seen before, before I decide how to even watch them, let alone design for
              them.
            </p>
          </Section>

          {/* FOCUS */}
          <Section eyebrow="Focus" title="The kind of problems I chase">
            <p>
              I run toward systems where the stakes are real and the state is unclear — not toward polish for its
              own sake. A beautiful screen that hides a false state is worse than an ugly one that tells the truth.
              I've built for citizen safety, healthcare compliance, IoT monitoring, and — briefly, on a mountainside
              — a herder's actual day. Different worlds, same lesson taught from different angles.
            </p>
          </Section>

          {/* PROCESS */}
          <Section eyebrow="Process" title="The way I actually operate">
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-live shrink-0 mt-2.5" />
                <span>
                  <strong className="font-semibold text-heading">I lead with research, not opinion.</strong> Every
                  major redesign I've shipped — HSA, enrollment, the chatbot — started from usability testing and
                  real friction data, not a hunch. I've done this at enterprise scale and at the scale of one
                  sheepherder's actual day — the method doesn't change, just the room.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-live shrink-0 mt-2.5" />
                <span>
                  <strong className="font-semibold text-heading">I build the system, not just the screen.</strong>{" "}
                  Two of the biggest wins in my career are design <em>systems</em> work — unifying frameworks so
                  decisions get faster for everyone, not just prettier for one team.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-live shrink-0 mt-2.5" />
                <span>
                  <strong className="font-semibold text-heading">I know what the code costs.</strong> Starting in
                  web development means I don't hand off specs that quietly become someone else's problem in sprint
                  planning.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-live shrink-0 mt-2.5" />
                <span>
                  <strong className="font-semibold text-heading">I measure what I ship.</strong> Task time,
                  completion rate, CSAT, ticket volume — if I can't point to a number, I don't consider the redesign
                  done.
                </span>
              </li>
            </ul>
          </Section>
        </div>
      </div>

      {/* CALM BAND (full-bleed) */}
      <div className="w-full bg-live/[0.07] border-y border-live/20">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-16">
          <div className="max-w-3xl py-12 sm:py-16">
            <Eyebrow>Personal</Eyebrow>
            <h2 className="text-[24px] sm:text-[28px] font-semibold text-heading mb-5">Outside of work</h2>
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-body max-w-3xl">
              I spend three hours a day fighting traffic that neither respects nor informs me. Maybe that's exactly
              why, outside of work, I go looking for the opposite — calm, quiet, green places, where nothing is
              asking you to react to it. It's not really an aesthetic preference. It's recovery. The traffic taught
              me what a bad system feels like from the inside. The greenery reminds me what an unhurried, legible
              world actually feels like — which, not by accident, is what I'm always trying to build.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-16">
        <div className="max-w-3xl">
          {/* BELIEFS */}
          <Section eyebrow="Beliefs" title="A few things I hold as true">
            <ul className="space-y-3">
              {[
                "Clarity is not the absence of features — it's the presence of an honest state.",
                "If a user has to guess what the system is doing, the system has already failed once.",
                "Accessibility isn't a checklist item on a government or benefits platform — it's the actual bar for whether the product works at all.",
                "A design system isn't a style guide. It's how fast your whole team can stop arguing and start shipping.",
                "The best AI in a workflow is the one that tells you what it doesn't know.",
              ].map((belief) => (
                <li key={belief} className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-live shrink-0 mt-2.5" />
                  <span>{belief}</span>
                </li>
              ))}
            </ul>
          </Section>

          {/* COLLABORATION */}
          <Section eyebrow="Collaboration" title="If we end up working together">
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-live shrink-0 mt-2.5" />
                <span>
                  Bring me the research, not just the ticket. I'll move faster with the "why" than with a polished
                  mock to approve.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-live shrink-0 mt-2.5" />
                <span>Loop me in before the architecture is locked. I can save a rebuild if I see it early.</span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-live shrink-0 mt-2.5" />
                <span>
                  Tell me the real constraint, not the diplomatic version of it. I'd rather design inside a hard
                  limit than discover it in QA.
                </span>
              </li>
            </ul>
          </Section>

          {/* PROOF */}
          <Section eyebrow="Impact" title="Proof, not promises">
            <div className="space-y-8">
              {PROOF.map((block) => (
                <div key={block.title}>
                  <h4 className="text-[17px] sm:text-[19px] italic font-medium text-heading mb-2">{block.title}</h4>
                  <p className="text-[15px] leading-relaxed text-body">{block.body}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* CLOSING */}
          <div className="py-16 sm:py-20 text-center">
            <TrafficLight size="sm" />
            <blockquote className="mt-8 text-[22px] sm:text-[26px] italic leading-relaxed text-heading max-w-xl mx-auto">
              I still sit in traffic every morning. But the systems I build don't make anyone else do the same —
              they tell you what's happening, what's safe, and when to go.
            </blockquote>
          </div>
        </div>
      </div>

      <footer className="text-center pb-14 text-[11px] font-medium uppercase tracking-[0.1em] text-muted font-poppins">
        Ranjit Kumar — Lead UX Designer
      </footer>
    </div>
  );
}
