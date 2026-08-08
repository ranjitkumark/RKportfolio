import React from "react";
import { ArrowLeft } from "lucide-react";
import TrafficLight from "../components/TrafficLight.jsx";

function PhilosophyEyebrow({ children }) {
  return (
    <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.5px] text-muted uppercase font-poppins mb-3">
      <span className="w-1.5 h-1.5 rounded-full bg-live" />
      {children}
    </div>
  );
}

function Section({ eyebrow, title, children, divider = true }) {
  return (
    <section className={`py-12 sm:py-16 ${divider ? "border-t border-band/30" : ""}`}>
      <PhilosophyEyebrow>{eyebrow}</PhilosophyEyebrow>
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
        now the system tells them as they go, and what took <span className="font-mono font-semibold text-heading">38 → 21 min</span>{" "}
        now takes far less, with a lot fewer support calls behind it. The same fix worked on employee communications:
        prebuilt templates and automated messaging cut task time from{" "}
        <span className="font-mono font-semibold text-heading">69 → 47 min</span> and pulled feature satisfaction from{" "}
        <span className="font-mono font-semibold text-heading">2.9 → 4.1</span>, mostly by saying the same thing the
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
        <span className="font-mono font-semibold text-heading">2,300+</span> live camera feeds in real time — the
        closest I've come to designing an actual traffic light, at a scale where a wrong read isn't a bad review,
        it's a real risk. The same program rolled out face-recognition attendance across roughly{" "}
        <span className="font-mono font-semibold text-heading">400</span> skill centers. It's the work I'm proudest of,
        and it's the reason the India Today Digital Trailblazer Award still means something to me, handed to the
        project by the IT Minister himself.
      </>
    ),
  },
];

export default function DesignPhilosophy({ onBack }) {
  return (
    <div className="animate-fadeIn font-poppins min-h-screen">
      <div className="fixed top-0 inset-x-0 z-40 h-16 sm:h-20 flex items-center justify-center backdrop-blur-sm">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-2 text-[14px] font-medium text-accent bg-card border border-accent rounded-[24px] px-4 py-2 hover:opacity-80 transition-opacity shadow-[0_2px_12px_rgba(0,0,0,0.08)]"
        >
          <ArrowLeft size={14} />
          BACK
        </button>
      </div>

      <div className="w-full max-w-[1000px] mx-auto px-4 sm:px-10">
        <div className="max-w-3xl">
          {/* HERO */}
          <div className="pt-20 sm:pt-24 pb-16">
            <PhilosophyEyebrow>Design Philosophy — Ranjit Kumar</PhilosophyEyebrow>
            <h1 className="text-[32px] sm:text-[44px] leading-[1.15] font-semibold text-heading mb-5">
              I design the state, not just the screen.
            </h1>
            <p className="text-[16px] sm:text-[18px] italic text-body leading-relaxed max-w-xl mb-8">
              Twelve years spent making sure a system tells the truth about what it's doing — before someone has to
              guess.
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
              I learned two things before I learned design: what a system can actually do, and how a person figures
              out what it's doing.
            </p>
            <p>
              The first came from three years as a working web developer — HTML, CSS, JavaScript, real production
              sites. Most people learn design and then discover constraints. I met the constraints first, which is
              why I still think in components and states rather than layouts, and why I've never been able to treat
              a handoff as someone else's problem.
            </p>
            <p>
              The second came from motion graphics and a 3D diploma. Animation stops being decoration the moment you
              understand what it actually does to a person: it tells them where something came from, whether their
              action registered, whether the system is thinking or stuck, and what deserves their attention right
              now. Get the timing wrong and an interface feels broken even when every pixel is correct. Get it right
              and people stop noticing the interface at all.
            </p>
            <p>Everything since has been the same question asked in different industries:</p>
            <div className="font-mono text-[14px] text-heading bg-card border border-band/40 rounded-xl px-5 py-4 max-w-md">
              12+ years <span className="text-muted">·</span> 3 industries <span className="text-muted">·</span> 1 pattern
              <span className="block text-[12px] text-muted mt-1.5 font-poppins">
                Web Development &amp; Motion Graphics → IoT → US Benefits
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
              What that means in practice: the state is the thing I'm actually designing — is the system working,
              waiting, blocked, or done — because most of the frustration people feel with software isn't bad
              visuals, it's not knowing what's actually happening. I learned that first from motion graphics, then
              relearned it the hard way on a government safety platform, where the "screen" was a live wall of
              2,300+ camera feeds and a wrong read wasn't a bad review, it was a real-world risk.
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

          {/* FRICTION */}
          <Section eyebrow="Friction" title="What I can't stand watching happen">
            <p>
              Teams jumping straight into a polished prototype before anyone's checked whether the underlying
              problem is worth solving — weeks spent on fidelity nobody asked for, on a direction nobody validated
              first.
            </p>
            <p>
              Accessibility treated like a checklist a compliance team signs off on, instead of the actual bar for
              whether a product works at all. That gets stranger the higher the stakes — a benefits platform or a
              government system is exactly where the people relying on it can least afford to be locked out.
            </p>
            <p>
              Roadmaps that grow features faster than they grow value, until the workflow ends up optimized for the
              org chart instead of the person actually using it.
            </p>
            <p>
              And design getting pulled in only after the direction's already decided — when the biggest difference
              I can make is shaping the problem itself, not skinning an interface after the fact.
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
                  <strong className="font-semibold text-heading">
                    I know what the code costs, because I've written it.
                  </strong>{" "}
                  Three years as a working web developer — HTML, CSS, JavaScript, real production sites — before I
                  ever called myself a UX designer. I don't hand off specs that quietly become someone else's
                  problem in sprint planning, because I've been the person who inherited that problem.
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
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-live shrink-0 mt-2.5" />
                <span>
                  <strong className="font-semibold text-heading">I validate before I commit.</strong> A hunch is a
                  starting point, not a decision — research, testing, and real data are what turn a guess into
                  something worth building.
                </span>
              </li>
            </ul>
          </Section>

          {/* TRADE-OFFS */}
          <Section eyebrow="Trade-offs" title="Where user needs and business needs actually meet">
            <p>
              I don't treat user needs and business goals as opposing forces. If people can't get what they came
              for, the business loses. If the business can't sustain the product, people lose it entirely. My job is
              finding the actual overlap between what someone needs, what the business is trying to achieve, and
              what the technology can realistically support — and when a real trade-off shows up, making its cost
              visible to whoever's deciding, instead of quietly absorbing it as "a design call."
            </p>
            <p>
              The clearest version of this I keep coming back to: someone wants to find what they came for, fast.
              The business wants people to discover more. A bad answer forces an interstitial between the two. A
              better one builds search good enough that recommendations can sit inline — and both sides get what
              they wanted without either one losing.
            </p>
          </Section>
        </div>
      </div>

      {/* CALM BAND (full-bleed) */}
      <div className="w-full bg-live/[0.07] border-y border-live/20">
        <div className="w-full max-w-[1000px] mx-auto px-4 sm:px-10">
          <div className="max-w-3xl py-12 sm:py-16">
            <PhilosophyEyebrow>Personal</PhilosophyEyebrow>
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

      <div className="w-full max-w-[1000px] mx-auto px-4 sm:px-10">
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
            <p>
              One more on that last point, since it comes up a lot: AI is only worth adding if it reduces repetitive
              work, personalizes something responsibly, surfaces an insight buried in too much data, or helps
              someone find what they need faster — never because it's trendy. The best implementations don't
              announce themselves. People should always know what's happening, stay in control, and be able to tell
              the difference between AI recommending something and AI doing something.
            </p>
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
