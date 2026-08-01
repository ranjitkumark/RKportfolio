import React, { useEffect, useRef, useState } from "react";
import { Eye } from "lucide-react";

const DURATION = 3600;

function tokenize(html) {
  return html.match(/<mark>.*?<\/mark>|\S+/g) || [];
}

function BeatText({ beat, leaving }) {
  const tokens = tokenize(beat.text);
  return (
    <p
      className={`font-poppins text-[16px] sm:text-[18px] leading-[1.6] text-heading ${
        beat.quote ? "italic text-[15px] sm:text-[16px]" : ""
      }`}
    >
      {beat.quote && <span className="text-muted mr-0.5">&ldquo;</span>}
      {tokens.map((tok, i) => (
        <span
          key={i}
          className={`reel-word ${leaving ? "reel-word-leaving" : ""}`}
          style={{ animationDelay: `${i * 55}ms` }}
          dangerouslySetInnerHTML={{ __html: tok }}
        />
      ))}
      {beat.quote && <span className="text-muted ml-0.5">&rdquo;</span>}
    </p>
  );
}

export default function StoryReel({ mock, beats }) {
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);
  const rafRef = useRef(null);
  const prevTimeoutRef = useRef(null);
  const segStartRef = useRef(0);

  useEffect(() => {
    if (!playing) {
      setProgress(0);
      return;
    }

    setCurrent(0);
    setPrev(null);
    segStartRef.current = performance.now();

    const tick = (now) => {
      setProgress(Math.min((now - segStartRef.current) / DURATION, 1) * 100);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    intervalRef.current = setInterval(() => {
      setCurrent((c) => {
        const next = (c + 1) % beats.length;
        setPrev(c);
        clearTimeout(prevTimeoutRef.current);
        prevTimeoutRef.current = setTimeout(() => setPrev(null), 380);
        segStartRef.current = performance.now();
        return next;
      });
    }, DURATION);

    return () => {
      cancelAnimationFrame(rafRef.current);
      clearInterval(intervalRef.current);
      clearTimeout(prevTimeoutRef.current);
    };
  }, [playing, beats.length]);

  const activeTag = beats[current]?.tag;

  return (
    <div
      className="relative w-full h-[420px] rounded-[24px] bg-card border border-[#c9d7da] dark:border-white/10 overflow-hidden p-9"
      onMouseEnter={() => setPlaying(true)}
      onMouseLeave={() => setPlaying(false)}
    >
      {/* default mock UI */}
      <div
        className={`absolute top-9 left-9 right-9 bg-white rounded-2xl overflow-hidden shadow-[0_18px_40px_-20px_rgba(20,30,25,0.35)] transition-all duration-500 ${
          playing ? "opacity-0 blur-md scale-[0.97] translate-y-1.5" : "opacity-100"
        }`}
      >
        <div className="bg-gradient-to-br from-accent to-navy px-[18px] py-4 flex items-center gap-3">
          <span className="w-[34px] h-[34px] rounded-full bg-white/25 flex items-center justify-center text-white font-poppins font-bold text-[13px] shrink-0">
            {mock.avatar}
          </span>
          <div className="flex-1 min-w-0">
            <div className="text-white font-poppins font-bold text-[14px] truncate">{mock.title}</div>
            <div className="text-white/75 text-[12px] mt-0.5 truncate">{mock.subtitle}</div>
          </div>
          <span className="w-2 h-2 rounded-full bg-[#4ADE80] shadow-[0_0_0_3px_rgba(74,222,128,0.25)] shrink-0" />
        </div>
        {mock.rows.map((row, i) => (
          <div
            key={row.name}
            className={`flex items-center gap-3 px-[18px] py-[13px] border-b border-[#f0f1f6] ${
              i % 2 === 1 ? "bg-[#f3f5fa]" : "bg-white"
            }`}
          >
            <span className="w-[30px] h-[30px] rounded-full bg-[#dde3fb] text-[#3e5fe0] flex items-center justify-center font-poppins font-bold text-[12px] shrink-0">
              {row.badge}
            </span>
            <div className="flex-1 min-w-0">
              <div className="font-poppins font-bold text-[12.5px] text-[#16151a] truncate">{row.name}</div>
              <div className="text-[11.5px] text-[#9a9890] mt-px truncate">{row.sub}</div>
            </div>
            <div className="flex flex-col items-end gap-1 shrink-0">
              <span className="text-[10.5px] text-[#9a9890]">{row.time}</span>
              {row.pulse && <span className="w-1.5 h-1.5 rounded-full bg-[#3e5fe0]" />}
            </div>
          </div>
        ))}
      </div>

      {/* hint */}
      <div
        className={`absolute left-9 bottom-[30px] flex items-center gap-2 text-[13px] text-body transition-all duration-300 ${
          playing ? "opacity-0 translate-y-1.5" : "opacity-100"
        }`}
      >
        <Eye size={16} className="opacity-80" />
        Hover for a quick look
      </div>

      {/* reel layer */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          playing ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute left-1/2 top-1/2 w-[260px] h-[260px] rounded-full -translate-x-1/2 -translate-y-1/2 animate-[reel-breathe_3.4s_ease-in-out_infinite]"
          style={{
            background:
              "radial-gradient(circle, rgb(var(--c-live) / 0.16) 0%, rgb(var(--c-live) / 0) 70%)",
          }}
        />
        <div className="absolute top-[22px] left-6 z-[5] flex items-center gap-[7px] font-mono text-[10.5px] tracking-[0.14em] uppercase text-muted">
          <span className="w-[5px] h-[5px] rounded-full bg-live animate-[reel-pulse-dot_2.2s_ease-in-out_infinite]" />
          Live
        </div>
        <div className="absolute top-6 right-6 z-[5] w-[60px] h-0.5 bg-band/50 rounded-full overflow-hidden">
          <span className="block h-full bg-live" style={{ width: `${playing ? progress : 0}%` }} />
        </div>

        <div className="absolute inset-0 flex items-center justify-center px-6 sm:px-8 text-center">
          <div className="relative w-full">
            {prev !== null && (
              <div className="absolute inset-0 flex items-center justify-center px-2">
                <BeatText beat={beats[prev]} leaving />
              </div>
            )}
            <div className="flex items-center justify-center px-2">
              <BeatText key={current} beat={beats[current]} />
            </div>
          </div>
        </div>

        {activeTag && (
          <div className="absolute left-1/2 bottom-14 -translate-x-1/2 px-3 py-1.5 rounded-full bg-live/10 border border-live/30 font-mono text-[10px] tracking-[0.1em] uppercase text-live whitespace-nowrap">
            {activeTag}
          </div>
        )}

        <div className="absolute bottom-[22px] right-6 z-[6] font-mono text-[10.5px] text-muted">
          {current + 1} / {beats.length}
        </div>
      </div>
    </div>
  );
}
