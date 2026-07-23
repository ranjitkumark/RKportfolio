import React, { useState, useRef, useEffect } from "react";
import { ArrowUp, X, Linkedin, Phone, Mail, ArrowUpRight, Download, SkipBack, Play, SkipForward } from "lucide-react";
import CaseStudyCard from "../components/CaseStudyCard.jsx";
import Footer, { FooterContent } from "../components/Footer.jsx";

const SUGGESTIONS = [
  "What would Ranjit improve on your product?",
  "Tell me about Ranjit's experience",
  "How do you approach UX?",
];

const GREETING =
  "Hi! I'm Ranjit's AI assistant. Ask me anything about his work, process, or experience.";

const CASE_STUDIES = [
  {
    id: "hsa",
    badge: "PRODUCT DESIGN",
    badgeBg: "#D8F3EA",
    badgeText: "#0E8A66",
    title: "HSA",
    subtitle: "Health Savings Account Platform",
    body:
      "Redesigned the HSA dashboard and contribution flow to reduce cognitive load and increase annual contribution rates among first-time users.",
    stat: "+41%",
    statLabel: "CONTRIBUTION RATE",
    statColor: "#0E8A66",
    panelBg: "#4B7A72",
    reverse: false,
    mock: "hsa",
  },
  {
    id: "comm",
    badge: "UX RESEARCH",
    badgeBg: "#DCE7FB",
    badgeText: "#2452C4",
    title: "Communication",
    subtitle: "Messaging & Notification System",
    body:
      "Unified fragmented notification channels into a single communication hub. Reduced support tickets and improved response clarity for enterprise teams.",
    stat: "3×",
    statLabel: "FASTER RESPONSE",
    statColor: "#2452C4",
    panelBg: "#CFE0FA",
    reverse: true,
    mock: "comm",
  },
  {
    id: "deliver",
    badge: "DESIGN SYSTEM",
    badgeBg: "#FBE6C8",
    badgeText: "#B4600F",
    title: "Deliver Hub",
    subtitle: "Last-Mile Delivery Dashboard",
    body:
      "Built a real-time driver dispatch and tracking interface that cut average delivery time and gave operations teams full route visibility.",
    stat: "2 wks",
    statLabel: "SHIP TO PROD",
    statColor: "#B4600F",
    panelBg: "#F6DCB8",
    reverse: false,
    mock: "deliver",
  },
];

/* ------------------------------------------------------------------ */
/* Sticker / scatter band (+ embedded footer for seamless background)  */
/* ------------------------------------------------------------------ */
function StickerBand() {
  return (
    <div
      className="relative mt-16 md:mt-24 pt-14 md:pt-20 pb-8 overflow-hidden"
      style={{ backgroundImage: "radial-gradient(#DADAE2 1px, transparent 1px)", backgroundSize: "22px 22px" }}
    >
      {/* Desktop scatter layout */}
      <div className="hidden md:block relative h-[420px] max-w-5xl mx-auto">
        {/* Contact */}
        <div className="absolute left-[4%] top-[6%] -rotate-6 bg-[#B7E4C7] rounded-xl px-4 py-3 shadow-md w-[190px]">
          <div className="text-[9px] tracking-wider text-[#2E6B45] font-semibold mb-1.5">CONTACT</div>
          <a href="tel:+919738729691" className="flex items-center gap-1.5 text-[12px] text-[#1E3A2B] mb-1 hover:underline">
            <Phone size={12} /> +91-9738729691
          </a>
          <a href="mailto:postranjitk@gmail.com" className="flex items-center gap-1.5 text-[12px] text-[#1E3A2B] hover:underline">
            <Mail size={12} /> postranjitk@gmail.com
          </a>
        </div>

        {/* Music player — links out to the track (placeholder URL until you send the real one) */}
        <a
          href="https://music.youtube.com/"
          target="_blank"
          rel="noreferrer"
          className="block absolute left-1/2 -translate-x-1/2 top-0 bg-[#15151B] text-white rounded-2xl px-5 py-4 shadow-lg w-[220px] hover:opacity-90 transition-opacity"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="w-9 h-9 rounded-lg bg-[#6C4FE0] shrink-0" />
            <div className="min-w-0">
              <div className="text-[13px] font-medium truncate">David Bowie</div>
              <div className="text-[11px] text-white/50 truncate">Space Oddity</div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 mb-2 text-white/80">
            <SkipBack size={14} />
            <span className="w-7 h-7 rounded-full bg-white text-[#15151B] flex items-center justify-center">
              <Play size={12} fill="currentColor" />
            </span>
            <SkipForward size={14} />
          </div>
          <div className="w-full h-1 bg-white/15 rounded-full overflow-hidden">
            <div className="h-full w-1/3 bg-[#F5D948] rounded-full" />
          </div>
        </a>

        {/* Resume — downloads the real PDF once it's added to /public */}
        <a
          href="/ranjit-resume.pdf"
          download
          className="absolute right-[6%] top-[8%] rotate-6 bg-[#FBEBAE] rounded-xl px-4 py-3 shadow-md w-[140px] hover:opacity-90 transition-opacity"
        >
          <div className="text-[9px] tracking-wider text-[#7A6A1E] font-semibold mb-1">CV</div>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[13px] text-[#3A320C] font-medium">Resume</div>
              <div className="text-[11px] text-[#7A6A1E]">PDF · 2 pages</div>
            </div>
            <Download size={14} className="text-[#7A6A1E] shrink-0" />
          </div>
        </a>

        {/* Interests — pill chips */}
        <div className="absolute left-[6%] bottom-[8%] -rotate-3 bg-white rounded-xl px-4 py-3 shadow-md w-[220px] border border-black/5">
          <div className="text-[9px] tracking-wider text-[#8A8A93] font-semibold mb-2">INTERESTS</div>
          <div className="flex flex-wrap gap-1.5">
            {["Painting", "Reading", "Cooking", "Music", "Travelling"].map((tag) => (
              <span key={tag} className="text-[11px] text-[#3A3A42] border border-black/10 rounded-full px-2.5 py-1">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Currently reading */}
        <div className="flex flex-col items-center absolute left-1/2 -translate-x-1/2 bottom-0 rotate-[-2deg] bg-[#F5D948] rounded-xl px-5 pt-4 pb-3 shadow-lg w-[150px]">
          <div className="text-[9px] tracking-wide text-[#5A4B0A] mb-2 self-start">CURRENTLY READING</div>
          <div className="text-2xl font-black text-[#1E1B04] leading-none mb-1">HOOKED</div>
          <div className="text-[9px] text-[#5A4B0A] text-center leading-tight mb-2">How to Build Habit-Forming Products</div>
          <div className="text-[10px] text-[#5A4B0A] self-start mb-1">NIR EYAL</div>
          <div className="w-full flex items-center gap-2">
            <div className="flex-1 h-1 bg-[#00000022] rounded-full overflow-hidden">
              <div className="h-full w-[72%] bg-[#1E1B04]" />
            </div>
            <span className="text-[9px] text-[#5A4B0A] shrink-0">72%</span>
          </div>
        </div>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/ranjit-kumar-kar-3a3b7931/"
          target="_blank"
          rel="noreferrer"
          className="absolute right-[10%] bottom-[10%] rotate-3 bg-[#2452C4] text-white rounded-xl px-4 py-3 shadow-md w-[160px] hover:opacity-90 transition-opacity"
        >
          <div className="text-[9px] tracking-wider text-white/70 font-semibold mb-1.5">FIND ME ONLINE</div>
          <div className="flex items-center gap-2">
            <Linkedin size={16} />
            <div className="flex-1">
              <div className="text-[12px] font-medium leading-tight">LinkedIn</div>
              <div className="text-[11px] text-white/70 leading-tight">/ranjitkumar</div>
            </div>
            <ArrowUpRight size={13} className="text-white/70 shrink-0" />
          </div>
        </a>

        {/* Real illustration, matching the Figma character */}
        <img
          src="/footer-character.png"
          alt=""
          aria-hidden="true"
          className="absolute right-[1%] bottom-[-2%] w-[130px] h-auto select-none pointer-events-none"
        />
      </div>

      {/* Mobile: same cards, wrapped flow instead of absolute scatter */}
      <div className="md:hidden flex flex-wrap justify-center gap-3 px-5 max-w-sm mx-auto">
        <div className="bg-[#B7E4C7] rounded-xl px-4 py-3 shadow-md w-[160px]">
          <div className="text-[9px] tracking-wider text-[#2E6B45] font-semibold mb-1.5">CONTACT</div>
          <a href="tel:+919738729691" className="flex items-center gap-1.5 text-[11px] text-[#1E3A2B] mb-1">
            <Phone size={11} /> +91-9738729691
          </a>
          <a href="mailto:postranjitk@gmail.com" className="flex items-center gap-1.5 text-[11px] text-[#1E3A2B] break-all">
            <Mail size={11} /> postranjitk@gmail.com
          </a>
        </div>
        <a
          href="/ranjit-resume.pdf"
          download
          className="bg-[#FBEBAE] rounded-xl px-4 py-3 shadow-md w-[130px]"
        >
          <div className="text-[9px] tracking-wider text-[#7A6A1E] font-semibold mb-1">CV</div>
          <div className="text-[13px] text-[#3A320C] font-medium">Resume</div>
          <div className="text-[11px] text-[#7A6A1E] flex items-center gap-1">
            PDF · 2 pages <Download size={11} />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/ranjit-kumar-kar-3a3b7931/"
          target="_blank"
          rel="noreferrer"
          className="bg-[#2452C4] text-white rounded-xl px-4 py-3 shadow-md w-[160px]"
        >
          <div className="text-[9px] tracking-wider text-white/70 font-semibold mb-1.5">FIND ME ONLINE</div>
          <div className="flex items-center gap-2">
            <Linkedin size={16} />
            <div>
              <div className="text-[12px] font-medium leading-tight">LinkedIn</div>
              <div className="text-[11px] text-white/70 leading-tight">/ranjitkumar</div>
            </div>
          </div>
        </a>
        <div className="bg-white rounded-xl px-4 py-3 shadow-md w-[180px] border border-black/5">
          <div className="text-[9px] tracking-wider text-[#8A8A93] font-semibold mb-2">INTERESTS</div>
          <div className="flex flex-wrap gap-1.5">
            {["Painting", "Reading", "Cooking", "Music", "Travelling"].map((tag) => (
              <span key={tag} className="text-[11px] text-[#3A3A42] border border-black/10 rounded-full px-2.5 py-1">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <img
          src="/footer-character.png"
          alt=""
          aria-hidden="true"
          className="w-[110px] h-auto select-none pointer-events-none mt-2"
        />
      </div>

      <div className="relative text-center px-6 max-w-2xl mx-auto pt-10 md:pt-8 pb-12 md:pb-16">
        <p className="font-mono text-[22px] sm:text-[26px] md:text-[38px] leading-tight text-[#1D1D24]">
          The screen is the output.
          <br />
          The real design happens before it.
        </p>
      </div>

      <div className="relative pt-6 border-t border-black/[0.06]">
        <FooterContent />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Ask bar                                                             */
/* ------------------------------------------------------------------ */
function AskBar({ onSubmit }) {
  const [value, setValue] = useState("");
  const submit = () => {
    if (!value.trim()) return;
    onSubmit(value.trim());
    setValue("");
  };
  return (
    <div className="max-w-xl mx-auto mt-8 sm:mt-10 px-2 sm:px-0">
      <div className="flex items-center bg-white rounded-full shadow-[0_2px_20px_rgba(20,20,26,0.08)] border border-black/5 pl-4 sm:pl-5 pr-2 py-2">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && submit()}
          placeholder="Ask me anything..."
          className="flex-1 bg-transparent outline-none text-[14px] text-[#14141A] placeholder:text-[#A5A5AE]"
        />
        <button
          onClick={submit}
          aria-label="Send"
          className="w-9 h-9 shrink-0 rounded-full bg-[#17213E] text-white flex items-center justify-center hover:bg-[#232F55] transition-colors"
        >
          <ArrowUp size={16} />
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-2 mt-4">
        {SUGGESTIONS.map((s) => (
          <button
            key={s}
            onClick={() => onSubmit(s)}
            className="text-[13px] text-[#43434D] bg-white border border-black/5 rounded-full px-4 py-2 shadow-sm hover:border-black/15 transition-colors"
          >
            {s}
          </button>
        ))}
        <a href="/ranjit-resume.pdf" download className="text-[13px] text-[#43434D] bg-white border border-black/5 rounded-full px-4 py-2 shadow-sm hover:border-black/15 transition-colors">
          Download Resume ↓
        </a>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Chat view                                                           */
/* ------------------------------------------------------------------ */
const PROVIDERS = [
  { id: "claude", label: "Claude" },
  { id: "openai", label: "ChatGPT" },
];

function ChatView({ messages, loading, provider, setProvider, onSend, onClose }) {
  const [value, setValue] = useState("");
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  const submit = () => {
    if (!value.trim()) return;
    onSend(value.trim());
    setValue("");
  };

  return (
    <div className="animate-fadeIn flex flex-col h-full min-h-[70vh] max-w-2xl mx-auto w-full px-4">
      <div className="flex items-center justify-between pt-2">
        <div className="flex bg-[#EFEFF2] rounded-full p-1">
          {PROVIDERS.map((p) => (
            <button
              key={p.id}
              onClick={() => setProvider(p.id)}
              className={`text-[12px] px-3 py-1.5 rounded-full transition-colors ${
                provider === p.id ? "bg-white text-[#14141A] shadow-sm font-medium" : "text-[#7A7A85]"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
        <button
          onClick={onClose}
          aria-label="Close chat"
          className="w-9 h-9 rounded-full bg-[#EFEFF2] text-[#5B5B66] flex items-center justify-center hover:bg-[#E2E2E8] transition-colors"
        >
          <X size={16} />
        </button>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto py-6 space-y-5">
        {messages.map((m, i) =>
          m.role === "assistant" ? (
            <div key={i} className="flex items-start gap-3">
              <span className="w-7 h-7 shrink-0 rounded-full bg-[#17213E] text-white text-[11px] font-semibold flex items-center justify-center">R</span>
              <div className="bg-white border border-black/5 rounded-2xl rounded-tl-sm px-4 py-3 text-[14px] leading-relaxed text-[#2A2A32] shadow-sm max-w-[85%]">
                {m.content}
              </div>
            </div>
          ) : (
            <div key={i} className="flex justify-end">
              <div className="bg-[#17213E] text-white rounded-2xl rounded-tr-sm px-4 py-3 text-[14px] leading-relaxed max-w-[85%]">
                {m.content}
              </div>
            </div>
          )
        )}
        {loading && (
          <div className="flex items-start gap-3">
            <span className="w-7 h-7 shrink-0 rounded-full bg-[#17213E] text-white text-[11px] font-semibold flex items-center justify-center">R</span>
            <div className="bg-white border border-black/5 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
              <span className="flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B0B0BA] animate-bounce [animation-delay:-0.3s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#B0B0BA] animate-bounce [animation-delay:-0.15s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#B0B0BA] animate-bounce" />
              </span>
            </div>
          </div>
        )}

        {messages.length <= 1 && !loading && (
          <div className="flex flex-wrap gap-2 pl-10">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                onClick={() => onSend(s)}
                className="text-[13px] text-[#43434D] bg-white border border-black/5 rounded-full px-4 py-2 shadow-sm hover:border-black/15 transition-colors"
              >
                {s}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="sticky bottom-6 pb-2">
        <div className="flex items-center bg-white rounded-full shadow-[0_2px_20px_rgba(20,20,26,0.1)] border border-black/5 pl-5 pr-2 py-2">
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && submit()}
            placeholder="Ask me anything..."
            className="flex-1 bg-transparent outline-none text-[14px] text-[#14141A] placeholder:text-[#A5A5AE]"
          />
          <button
            onClick={submit}
            aria-label="Send"
            className="w-9 h-9 shrink-0 rounded-full bg-[#17213E] text-white flex items-center justify-center hover:bg-[#232F55] transition-colors"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Home page                                                            */
/* ------------------------------------------------------------------ */
export default function Home() {
  const [view, setView] = useState("home"); // 'home' | 'chat'
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [provider, setProvider] = useState("claude");

  const goHome = () => setView("home");

  const callBackend = async (history, provider) => {
    const apiMessages = history
      .filter((m) => m.role === "user" || m.role === "assistant")
      .slice(1)
      .map((m) => ({ role: m.role, content: m.content }));

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: apiMessages, provider }),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error || `Request failed with ${res.status}`);
    }
    const data = await res.json();
    return data.reply || "Sorry, I couldn't quite get that — mind rephrasing?";
  };

  const handleSend = async (text) => {
    setView("chat");
    const base = messages.length ? messages : [{ role: "assistant", content: GREETING }];
    const nextHistory = [...base, { role: "user", content: text }];
    setMessages(nextHistory);
    setLoading(true);
    try {
      const reply = await callBackend(nextHistory, provider);
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Hmm, I'm having trouble connecting right now. Feel free to reach Ranjit directly at postranjitk@gmail.com.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (view === "chat") {
    return (
      <>
        <ChatView
          messages={messages}
          loading={loading}
          provider={provider}
          setProvider={setProvider}
          onSend={handleSend}
          onClose={goHome}
        />
        <Footer />
      </>
    );
  }

  return (
    <div className="animate-fadeIn">
      <section className="text-center px-4 sm:px-6 pt-4 sm:pt-6 pb-4">
        <h1 className="text-[26px] sm:text-[32px] md:text-[44px] font-semibold text-[#14141A] tracking-tight leading-tight">
          Hello <span className="font-bold">I'm Ranjit - UX Designer</span>
        </h1>
        <p className="mt-4 text-[14px] sm:text-[15px] md:text-[16px] text-[#5B5B66] max-w-xl mx-auto">
          Designing products at the intersection of user needs, business goals, and technology constraints.
        </p>
        <AskBar onSubmit={handleSend} />
      </section>

      <section className="max-w-4xl mx-auto px-4 md:px-6 mt-12 sm:mt-16 space-y-6 sm:space-y-8">
        {CASE_STUDIES.map((cs) => (
          <CaseStudyCard key={cs.id} cs={cs} />
        ))}
      </section>

      <StickerBand />
    </div>
  );
}
