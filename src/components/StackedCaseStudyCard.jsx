import React from "react";
import { MOCKS } from "./mocks.jsx";

export default function StackedCaseStudyCard({ cs }) {
  const Mock = MOCKS[cs.mock];
  return (
    <div className="rounded-[28px] overflow-hidden shadow-[0_2px_24px_rgba(20,20,26,0.06)] border border-black/[0.04] bg-white">
      <div className="p-6 sm:p-8 md:p-10">
        <span
          className="inline-flex w-fit items-center px-3 py-1 rounded-full text-[11px] font-medium tracking-wide mb-4"
          style={{ background: cs.badgeBg, color: cs.badgeText }}
        >
          {cs.badge}
        </span>
        <h3 className="text-xl sm:text-2xl font-semibold text-[#14141A] mb-1">{cs.title}</h3>
        <p className="text-[14px] sm:text-[15px] text-[#5B5B66] mb-3">{cs.subtitle}</p>
        <p className="text-[13px] sm:text-[14px] leading-relaxed text-[#6C6C76] mb-6 max-w-lg">{cs.body}</p>
        <div className="flex items-center gap-4">
          <div>
            <div className="text-xl sm:text-2xl font-bold" style={{ color: cs.statColor }}>
              {cs.stat}
            </div>
            <div className="text-[10px] tracking-wide text-[#9A9AA5]">{cs.statLabel}</div>
          </div>
          <button className="ml-auto inline-flex items-center gap-1.5 bg-[#17213E] text-white text-[13px] font-medium px-4 py-2.5 rounded-full hover:bg-[#232F55] transition-colors shrink-0">
            Case Study
            <span className="text-[15px] leading-none">↗</span>
          </button>
        </div>
      </div>
      <div
        className="flex items-center justify-center p-6 sm:p-8 md:p-10"
        style={{ background: cs.panelBg }}
      >
        <Mock />
      </div>
    </div>
  );
}
