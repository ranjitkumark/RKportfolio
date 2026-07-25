import React, { useEffect, useRef, useState } from "react";
import { X, ArrowUp } from "lucide-react";

const GREETING = "Hi! I'm Ranjit's AI assistant. Ask me anything about his work, process, or experience.";
const SUGGESTIONS = [
  "What would Ranjit improve on your product?",
  "Tell me about Ranjit's experience",
  "How do you approach UX?",
];

export default function ChatOverlay({ onClose }) {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  const send = async (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const nextHistory = [...messages, { role: "user", content: trimmed }];
    setMessages(nextHistory);
    setValue("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextHistory, provider: "claude" }),
      });
      if (!res.ok) throw new Error("request failed");
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply || "Sorry, I couldn't quite get that — mind rephrasing?" },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I'm having trouble connecting right now — reach Ranjit directly at postranjitk@gmail.com.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const submit = () => send(value);

  return (
    <div className="fixed inset-0 z-50 bg-mint flex flex-col animate-fadeIn">
      <button
        type="button"
        onClick={onClose}
        aria-label="Close chat"
        className="absolute top-5 right-5 sm:top-6 sm:right-6 w-9 h-9 rounded-full bg-ink/80 text-white flex items-center justify-center hover:bg-ink transition-colors"
      >
        <X size={16} />
      </button>

      <div ref={scrollRef} className="flex-1 overflow-y-auto px-5 sm:px-10 pt-16 sm:pt-20 pb-6">
        <div className="max-w-2xl mx-auto w-full space-y-5">
          <div className="flex items-start gap-3">
            <span className="w-8 h-8 shrink-0 rounded-full bg-black/10 text-ink text-[12px] font-semibold flex items-center justify-center">
              R
            </span>
            <div className="bg-white rounded-2xl rounded-tl-sm px-5 py-4 text-[14px] leading-relaxed text-ink shadow-sm max-w-[85%]">
              {GREETING}
            </div>
          </div>

          {messages.length === 0 && (
            <div className="flex flex-wrap gap-2 pl-11">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => send(s)}
                  className="text-[13px] text-body bg-white border border-black/5 rounded-full px-4 py-2 shadow-sm hover:border-black/15 transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {messages.map((m, i) =>
            m.role === "assistant" ? (
              <div key={i} className="flex items-start gap-3">
                <span className="w-8 h-8 shrink-0 rounded-full bg-black/10 text-ink text-[12px] font-semibold flex items-center justify-center">
                  R
                </span>
                <div className="bg-white rounded-2xl rounded-tl-sm px-5 py-4 text-[14px] leading-relaxed text-ink shadow-sm max-w-[85%]">
                  {m.content}
                </div>
              </div>
            ) : (
              <div key={i} className="flex justify-end">
                <div className="bg-navy text-white rounded-2xl rounded-tr-sm px-5 py-4 text-[14px] leading-relaxed max-w-[85%]">
                  {m.content}
                </div>
              </div>
            )
          )}

          {loading && (
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 shrink-0 rounded-full bg-black/10 text-ink text-[12px] font-semibold flex items-center justify-center">
                R
              </span>
              <div className="bg-white rounded-2xl rounded-tl-sm px-5 py-4 shadow-sm">
                <span className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-muted animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-muted animate-bounce" />
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="px-5 sm:px-10 pb-4">
        <div className="max-w-2xl mx-auto w-full flex items-center bg-white rounded-full shadow-[0_2px_20px_rgba(20,20,26,0.08)] pl-5 pr-2 py-2">
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && submit()}
            placeholder="Ask me anything..."
            className="flex-1 bg-transparent outline-none text-[14px] text-ink placeholder:text-muted"
          />
          <button
            type="button"
            onClick={submit}
            aria-label="Send"
            className="w-9 h-9 shrink-0 rounded-full bg-navy text-white flex items-center justify-center hover:bg-[#232F55] transition-colors"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>

      <div className="border-t border-black/5 py-3 flex items-center justify-center gap-2 text-[11px] text-muted tracking-wide">
        <kbd className="border border-black/10 rounded px-1.5 py-0.5 text-[10px]">ESC</kbd>
        <span className="uppercase">Close</span>
      </div>
    </div>
  );
}
