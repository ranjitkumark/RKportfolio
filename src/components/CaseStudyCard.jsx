import React from "react";
import { Eye } from "lucide-react";

const ROWS = [
  { name: "Design Team", meta: "12 members · 3 updates" },
  { name: "Engineering", meta: "40 members · 12 updates" },
  { name: "Product", meta: "8 members · 1 update" },
  { name: "QA Team", meta: "6 members · 2 updates" },
];

function CommHubMock() {
  return (
    <div className="w-full max-w-[210px] rounded-xl bg-white shadow-sm border border-black/5 overflow-hidden">
      <div className="flex items-center justify-between bg-accent px-3 py-2.5">
        <span className="text-white text-[11px] font-medium">Comm Hub</span>
        <span className="w-4 h-4 rounded-full bg-white/20" />
      </div>
      <div className="divide-y divide-black/5">
        {ROWS.map((row) => (
          <div key={row.name} className="flex items-center gap-2 px-3 py-2.5">
            <span className="w-6 h-6 rounded-full bg-accent/10 shrink-0" />
            <div className="min-w-0 flex-1">
              <div className="text-[11px] font-medium text-ink truncate">{row.name}</div>
              <div className="text-[9px] text-muted truncate">{row.meta}</div>
            </div>
            <span className="w-4 h-4 rounded-full border-2 border-accent/30 shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CaseStudyCard({ study }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-5 md:gap-10 items-center">
      <div className="relative rounded-2xl bg-card px-6 py-8 sm:px-8 sm:py-10 flex items-center justify-center">
        <CommHubMock />
        <span className="absolute left-4 bottom-3 flex items-center gap-1 text-[10px] text-muted">
          <Eye size={11} /> Hover for a quick look
        </span>
      </div>

      <div>
        <div className="flex items-center gap-1.5 mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-live" />
          <span className="text-[10px] font-medium tracking-wide text-live uppercase">{study.status}</span>
        </div>
        <p className="text-[15px] sm:text-[16px] leading-relaxed text-body max-w-md">
          <span className="font-semibold text-ink">{study.title}</span> - {study.description}
        </p>
        <a
          href={study.href}
          className="inline-flex items-center gap-1 mt-3 text-[13px] text-accent font-medium hover:underline"
        >
          Read the case study <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}
