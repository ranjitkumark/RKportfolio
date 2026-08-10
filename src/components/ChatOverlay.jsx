import React, { useEffect, useRef, useState } from "react";
import { X, ArrowUp } from "./icons.jsx";

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
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
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
    <div className="fixed inset-0 z-50 bg-mint flex flex-col animate-fadeIn font-poppins">
      <button
        type="button"
        onClick={onClose}
        aria-label="Close chat"
        className="absolute top-5 right-5 sm:top-8 sm:right-10 w-8 h-8 rounded-full bg-[#484848] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
      >
        <X size={14} />
      </button>

      <div ref={scrollRef} className="flex-1 overflow-y-auto px-5 sm:px-10 pt-16 sm:pt-14 pb-6">
        <div className="max-w-2xl mx-auto w-full space-y-5">
          <div className="flex items-start gap-3">
            <span className="w-7 h-7 shrink-0 rounded-full bg-[#7b8d8d] border border-[#597171] text-white text-[11px] font-semibold flex items-center justify-center">
              R
            </span>
            <div className="bg-white dark:bg-card border border-[#b9c7c9] dark:border-white/10 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl rounded-tl-md px-[16px] py-[12px] text-[14px] leading-[22.4px] text-ink max-w-[85%]">
              {GREETING}
            </div>
          </div>

          {messages.length === 0 && (
            <div className="flex flex-wrap gap-3 pl-10">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => send(s)}
                  className="text-[12px] font-medium text-body bg-white dark:bg-card border-[0.75px] border-black/20 dark:border-white/10 rounded-full h-[30px] px-[16px] shadow-[0px_1px_1px_rgba(0,0,0,0.24)] hover:border-black/40 dark:hover:border-white/30 transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {messages.map((m, i) =>
            m.role === "assistant" ? (
              <div key={i} className="flex items-start gap-3">
                <span className="w-7 h-7 shrink-0 rounded-full bg-[#7b8d8d] border border-[#597171] text-white text-[11px] font-semibold flex items-center justify-center">
                  R
                </span>
                <div className="bg-white dark:bg-card border border-[#b9c7c9] dark:border-white/10 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl rounded-tl-md px-[16px] py-[12px] text-[14px] leading-[22.4px] text-ink max-w-[85%]">
                  {m.content}
                </div>
              </div>
            ) : (
              <div key={i} className="flex justify-end">
                <div className="bg-navy text-white rounded-tl-2xl rounded-bl-2xl rounded-br-2xl rounded-tr-md px-[16px] py-[12px] text-[14px] leading-[22.4px] max-w-[85%]">
                  {m.content}
                </div>
              </div>
            )
          )}

          {loading && (
            <div className="flex items-start gap-3">
              <span className="w-7 h-7 shrink-0 rounded-full bg-[#7b8d8d] border border-[#597171] text-white text-[11px] font-semibold flex items-center justify-center">
                R
              </span>
              <div className="bg-white dark:bg-card border border-[#b9c7c9] dark:border-white/10 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl rounded-tl-md px-[16px] py-[12px]">
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

      <div className="px-5 sm:px-10 pb-8 font-poppins">
        <div className="max-w-2xl mx-auto w-full flex items-center bg-white dark:bg-card border border-[#b9c7c9] dark:border-white/10 rounded-full shadow-[0px_0px_2.5px_rgba(32,32,32,0.1)] pl-[12px] pr-[8px] py-[8px]">
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && submit()}
            placeholder="Ask me anything…"
            className="flex-1 bg-transparent outline-none text-[14px] text-ink placeholder:text-muted"
          />
          <button
            type="button"
            onClick={submit}
            aria-label="Send"
            className="w-8 h-8 shrink-0 rounded-full bg-navy text-white flex items-center justify-center hover:opacity-90 transition-opacity"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>

      <div className="border-t border-[#ced7d9] dark:border-white/10 py-8 flex items-center justify-center gap-3 font-poppins">
        <span className="bg-[#dee2e3] dark:bg-card border border-[#9fa6ab] dark:border-white/20 rounded text-[14px] text-body px-[8px] py-[4px]">
          ESC
        </span>
        <span className="text-[16px] font-medium text-body">CLOSE</span>
      </div>
    </div>
  );
}
