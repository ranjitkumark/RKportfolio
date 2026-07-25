import React from "react";
import { Eye, ArrowRight } from "lucide-react";

const ACTIVITY_ROWS = [
  { letter: "D", name: "Design Team", status: "Figma link updated", time: "2m", unread: true },
  { letter: "E", name: "Engineering", status: "PR review needed", time: "15m", unread: true },
  { letter: "P", name: "Product", status: "Spec clarification", time: "1h", unread: false },
  { letter: "Q", name: "QA Team", status: "Test pass confirmed", time: "2h", unread: false },
];

function CommHubMock() {
  return (
    <div className="bg-white border-4 border-[#f0f6ff] rounded-[32px] w-[260px] h-[300px] overflow-hidden flex flex-col">
      <div className="bg-[#2563eb] rounded-t-[28px] px-4 py-3 flex items-center gap-2">
        <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center shrink-0">
          <span className="w-3 h-3 rounded-full bg-white/60" />
        </span>
        <div className="flex-1 min-w-0">
          <div className="text-[10px] font-semibold text-white truncate">Comm Hub</div>
          <div className="text-[8px] text-white/60 truncate">4 channels active</div>
        </div>
        <span className="w-2 h-2 rounded-full bg-[#05df72] shrink-0" />
      </div>
      <div className="bg-[#f0f6ff] flex-1 p-3 flex flex-col gap-2">
        {ACTIVITY_ROWS.map((row) => (
          <div
            key={row.name}
            className={`flex items-center gap-2 p-2 rounded-[14px] ${
              row.unread ? "bg-white shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)]" : ""
            }`}
          >
            <span className="w-8 h-8 rounded-full bg-[#2563eb]/20 flex items-center justify-center shrink-0">
              <span className="text-[8px] font-bold text-[#2563eb]">{row.letter}</span>
            </span>
            <div className="flex-1 min-w-0">
              <div className="text-[9px] font-semibold text-[#1a2e4a] truncate">{row.name}</div>
              <div className="text-[8px] text-[#1a2e4a]/50 truncate">{row.status}</div>
            </div>
            <div className="flex flex-col items-end shrink-0 gap-0.5">
              <span className="text-[8px] text-[#1a2e4a]/40">{row.time}</span>
              {row.unread && <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb]" />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ReadMoreLink({ children }) {
  return (
    <span className="inline-flex items-center gap-2 h-9 py-2">
      <span className="font-poppins font-medium text-[14px] text-accent underline decoration-solid">
        {children}
      </span>
      <ArrowRight size={14} className="text-accent shrink-0" />
    </span>
  );
}

export default function CaseStudyCard({ study }) {
  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-[60px] items-center">
      <div className="relative bg-card border border-[#c9d7da] dark:border-white/10 rounded-[24px] p-10 flex items-center justify-center shrink-0 w-full md:w-[380px] md:min-h-[420px]">
        <CommHubMock />
        <span className="absolute left-6 bottom-4 flex items-center gap-1 text-[10px] text-body">
          <Eye size={11} /> Hover for a quick look
        </span>
      </div>

      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1.5 mb-1">
          <span className="w-2 h-2 rounded-full bg-live" />
          <span className="text-[10px] font-semibold tracking-[0.5px] text-live uppercase font-poppins">
            {study.status}
          </span>
        </div>
        <p className="font-poppins text-[24px] leading-normal text-ink max-w-md">
          <span className="font-semibold">{study.title}</span>
          {study.suffix}
        </p>
        <a href={study.href} className="mt-4 inline-block">
          <ReadMoreLink>Read the case study</ReadMoreLink>
        </a>
      </div>
    </div>
  );
}
