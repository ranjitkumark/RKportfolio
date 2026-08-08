import React from "react";
import { Mic, ArrowUp, MessageSquare, Info, Maximize2, MoreHorizontal, ChevronDown, ChevronRight, Plus, MoreVertical, Sparkles, Headphones } from "lucide-react";

function MockShell({ id, title, children }) {
  return (
    <div
      id={id}
      className="w-full h-full bg-white rounded-2xl overflow-hidden shadow-[0_18px_40px_-20px_rgba(20,30,25,0.35)] flex flex-col"
    >
      <div className="bg-accent px-4 py-3 flex items-center justify-between shrink-0">
        <span className="text-white text-[11px] font-bold tracking-[1.2px] font-poppins">{title}</span>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-white/40" />
          <span className="w-2 h-2 rounded-full bg-white/70" />
        </div>
      </div>
      <div className="flex-1 bg-[#e9f2fa] p-3.5 overflow-hidden">{children}</div>
    </div>
  );
}

export function AIAssistantMock() {
  return (
    <MockShell id="mock-ai-assistant" title="AI ASSISTANT">
      <div className="h-full flex flex-col justify-between">
        <div className="bg-accent/85 rounded-2xl px-3 py-2.5 flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0">
            <MessageSquare size={12} className="text-accent" />
          </span>
          <span className="flex-1 text-white text-[11px] font-semibold font-poppins truncate">AI Virtual Assistant</span>
          <Info size={12} className="text-white/70 shrink-0" />
          <Maximize2 size={11} className="text-white/70 shrink-0" />
          <MoreHorizontal size={12} className="text-white/70 shrink-0" />
          <ChevronDown size={13} className="text-white/70 shrink-0" />
        </div>

        <div className="bg-accent/70 rounded-full px-3 py-2 flex items-center gap-2 self-center max-w-[85%]">
          <span className="flex items-center -space-x-1.5 shrink-0">
            <span className="w-4 h-4 rounded-full bg-white flex items-center justify-center">
              <Sparkles size={9} className="text-accent" />
            </span>
            <span className="w-4 h-4 rounded-full bg-white flex items-center justify-center">
              <Headphones size={9} className="text-accent" />
            </span>
          </span>
          <span className="text-white text-[10px] font-medium font-poppins truncate">Hand Over to Human Support…</span>
        </div>

        <div className="bg-white border border-band/40 rounded-full px-3 py-2 flex items-center justify-between">
          <span className="text-[10px] text-muted font-poppins">Type a message…</span>
          <div className="flex items-center gap-2">
            <Mic size={13} className="text-muted" />
            <span className="w-6 h-6 rounded-full bg-accent flex items-center justify-center">
              <ArrowUp size={12} className="text-white" />
            </span>
          </div>
        </div>
      </div>
    </MockShell>
  );
}

const CHANNEL_STATS = [
  { label: "EMAIL", value: "130", sub: "90 Opened" },
  { label: "SMS", value: "98", sub: "29 Opened" },
  { label: "IN APP NOTIFICATION", value: "89", sub: "46 Opened" },
  { label: "PUSH NOTIFICATION", value: "30", sub: "29 Opened" },
];

export function CommHubStatsMock() {
  return (
    <MockShell id="mock-comm-hub-stats" title="COMMUNICATION HUB">
      <div className="grid grid-cols-2 gap-2.5 h-full">
        {CHANNEL_STATS.map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-band/30 px-2.5 py-2 flex flex-col justify-center">
            <span className="text-[8px] font-semibold tracking-[0.06em] text-muted font-poppins truncate">{stat.label}</span>
            <span className="text-[20px] font-bold text-accent font-poppins leading-tight mt-0.5">{stat.value}</span>
            <span className="text-[9px] text-muted font-poppins mt-0.5">{stat.sub}</span>
          </div>
        ))}
      </div>
    </MockShell>
  );
}

export function DeliveryHubMock() {
  return (
    <MockShell id="mock-delivery-hub" title="DELIVERY HUB">
      <div className="h-full flex flex-col gap-2.5">
        <div className="bg-white rounded-xl border border-band/30 px-3 py-2.5">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <span className="text-[9px] font-bold tracking-[0.05em] text-heading font-poppins">EMPLOYER INFORMATION</span>
              <p className="text-[8.5px] text-muted font-poppins mt-0.5 leading-tight">
                Update employer details for plan year and configuration.
              </p>
            </div>
            <ChevronRight size={12} className="text-muted shrink-0 mt-0.5" />
          </div>
          <button
            type="button"
            className="mt-2 text-[8px] font-semibold text-accent border border-accent rounded-full px-2.5 py-1 font-poppins"
          >
            ✓ Mark as Complete
          </button>
        </div>

        <div className="grid grid-cols-2 gap-2.5 flex-1 min-h-0">
          <div className="bg-white rounded-xl border border-band/30 px-2.5 py-2 overflow-hidden">
            <span className="text-[8px] font-bold tracking-[0.05em] text-heading font-poppins">CURRENT &amp; UPCOMING</span>
            <div className="mt-1.5 space-y-1">
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-live shrink-0" />
                <span className="text-[7.5px] font-poppins text-heading truncate">2026 Plan Year</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d08d00] shrink-0" />
                <span className="text-[7.5px] font-poppins text-heading truncate">2025 Renewal</span>
              </div>
            </div>
            <div className="mt-1.5 pt-1.5 border-t border-band/30 flex items-center gap-1 text-muted">
              <Plus size={9} />
              <span className="text-[7.5px] font-poppins">New Plan Year</span>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-band/30 px-2.5 py-2 flex flex-col justify-between">
            <MoreVertical size={11} className="text-muted self-end" />
            <p className="text-[7.5px] text-muted font-poppins leading-tight">All set for Annual Enrollment.</p>
            <button type="button" className="text-[7.5px] font-semibold text-white bg-accent rounded-full px-2 py-1 font-poppins">
              Start Enrollment
            </button>
          </div>
        </div>
      </div>
    </MockShell>
  );
}

export function CommHubContributionMock() {
  const rows = [
    { label: "EMPLOYER CONTRIBUTION FOR 2025", value: "$580.00", pct: 55, min: "$0", max: "$1,000 limit" },
    { label: "YOUR MAX CONTRIBUTION FOR 2025", value: "$6,580.00", pct: 76, min: "$0", max: "$8,550 limit" },
  ];
  return (
    <MockShell id="mock-comm-hub-contribution" title="COMMUNICATION HUB">
      <div className="h-full flex flex-col justify-center gap-3">
        {rows.map((row) => (
          <div key={row.label} className="bg-white rounded-xl border border-band/30 px-3 py-2.5">
            <span className="text-[8px] font-semibold tracking-[0.05em] text-muted font-poppins">{row.label}</span>
            <div className="text-[18px] font-bold text-accent font-poppins leading-tight mt-0.5 mb-1.5">{row.value}</div>
            <div className="h-1 rounded-full bg-band/40 overflow-hidden">
              <div className="h-full bg-accent rounded-full" style={{ width: `${row.pct}%` }} />
            </div>
            <div className="flex items-center justify-between mt-1">
              <span className="text-[7.5px] text-muted font-poppins">{row.min}</span>
              <span className="text-[7.5px] text-muted font-poppins">{row.max}</span>
            </div>
          </div>
        ))}
      </div>
    </MockShell>
  );
}
