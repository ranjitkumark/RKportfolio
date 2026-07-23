import React from "react";

export function HSAMock() {
  return (
    <div className="w-full max-w-[340px] rounded-2xl bg-[#1C332F] text-[#EAF3F0] p-5 shadow-xl">
      <div className="flex items-center justify-between text-[11px] tracking-wide text-[#9FC3BA] mb-4">
        <span>HSA DASHBOARD</span>
        <span className="flex gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#9FC3BA]/60" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#9FC3BA]/60" />
        </span>
      </div>
      <div className="text-[11px] text-[#9FC3BA] mb-1">AVAILABLE BALANCE</div>
      <div className="text-3xl font-semibold mb-2">$4,820.00</div>
      <div className="h-1.5 rounded-full bg-[#2E4C46] overflow-hidden mb-1">
        <div className="h-full w-2/3 rounded-full bg-[#7FD9BE]" />
      </div>
      <div className="flex justify-between text-[10px] text-[#9FC3BA] mb-4">
        <span>$0</span>
        <span>$7,300 limit</span>
      </div>
      <div className="space-y-2.5">
        {[
          { label: "Dental", date: "Jun 12", amt: "-$320" },
          { label: "Vision", date: "Jun 8", amt: "-$180" },
          { label: "Contribution", date: "Jun 1", amt: "+$500" },
        ].map((r) => (
          <div key={r.label} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7FD9BE]" />
              <div>
                <div className="leading-tight">{r.label}</div>
                <div className="text-[10px] text-[#9FC3BA] leading-tight">{r.date}</div>
              </div>
            </div>
            <span className={r.amt.startsWith("+") ? "text-[#7FD9BE]" : ""}>{r.amt}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CommMock() {
  return (
    <div className="w-full max-w-[300px] rounded-2xl bg-white shadow-xl overflow-hidden">
      <div className="bg-[#2452C4] text-white px-4 py-3 flex items-center justify-between">
        <div>
          <div className="text-sm font-medium">Comm Hub</div>
          <div className="text-[11px] text-white/70">4 channels active</div>
        </div>
        <span className="w-2 h-2 rounded-full bg-[#7FE0A0]" />
      </div>
      <div className="divide-y divide-[#EEF2FB]">
        {[
          { i: "D", c: "#7C8CF8", t: "Design Team", d: "Figma link updated", time: "2m" },
          { i: "E", c: "#F4A65E", t: "Engineering", d: "PR review needed", time: "15m" },
          { i: "P", c: "#6FCF97", t: "Product", d: "Spec clarification", time: "1h" },
          { i: "Q", c: "#E27DBA", t: "QA Team", d: "Test pass confirmed", time: "2h" },
        ].map((r) => (
          <div key={r.i} className="flex items-center gap-3 px-4 py-2.5">
            <span
              className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-medium shrink-0"
              style={{ background: r.c }}
            >
              {r.i}
            </span>
            <div className="min-w-0">
              <div className="text-sm text-[#14213B] truncate">{r.t}</div>
              <div className="text-[11px] text-[#8B92A8] truncate">{r.d}</div>
            </div>
            <span className="ml-auto text-[10px] text-[#B0B6C6] shrink-0">{r.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DeliverMock() {
  return (
    <div className="w-full max-w-[340px] rounded-2xl bg-white shadow-xl p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 text-sm font-medium text-[#3A2A16]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#E2711D]" />
          Deliver Hub
        </div>
        <div className="text-[11px] text-[#8B7A5E] flex items-center gap-2">
          <span>Live</span>
          <span className="text-[#E2711D] font-medium">12 Active</span>
        </div>
      </div>
      <div className="rounded-lg bg-[#FBF1E1] px-3 py-2 text-[11px] text-[#8B7A5E] mb-3 flex items-center justify-between">
        <span>Zone A — 4 drivers</span>
        <span className="text-[#E2711D] font-medium">ETA 14 min</span>
      </div>
      <div className="space-y-2.5">
        {[
          { id: "D-001", pct: 70, status: "En Route", time: "8m" },
          { id: "D-002", pct: 100, status: "Delivered", time: "—" },
          { id: "D-003", pct: 20, status: "Dispatched", time: "22m" },
        ].map((r) => (
          <div key={r.id} className="flex items-center gap-3 text-[11px]">
            <span className="w-12 text-[#8B7A5E] shrink-0">{r.id}</span>
            <div className="flex-1 h-1.5 rounded-full bg-[#F3E5CB] overflow-hidden">
              <div className="h-full rounded-full bg-[#E2711D]" style={{ width: `${r.pct}%` }} />
            </div>
            <span className="w-16 text-[#8B7A5E] text-right shrink-0">{r.status}</span>
            <span className="w-8 text-[#3A2A16] text-right shrink-0">{r.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* Employee platform redesign — used for the "Guided Implementation" story */
export function PlatformMock() {
  return (
    <div className="w-full max-w-[340px] rounded-2xl bg-[#1C2233] text-[#E7E9F5] p-5 shadow-xl">
      <div className="flex items-center justify-between text-[11px] tracking-wide text-[#9BA1C4] mb-4">
        <span>ENROLLMENT PLATFORM</span>
        <span className="flex gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#9BA1C4]/60" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#9BA1C4]/60" />
        </span>
      </div>
      <div className="text-[11px] text-[#9BA1C4] mb-1">ENROLLMENT COMPLETE</div>
      <div className="text-3xl font-semibold mb-2">82%</div>
      <div className="h-1.5 rounded-full bg-[#2C3350] overflow-hidden mb-4">
        <div className="h-full w-[82%] rounded-full bg-[#8FA6FF]" />
      </div>
      <div className="grid grid-cols-2 gap-3 text-center">
        {[
          { label: "Engagement", val: "+23%" },
          { label: "Support calls", val: "-15%" },
        ].map((s) => (
          <div key={s.label} className="bg-white/5 rounded-xl py-3">
            <div className="text-lg font-semibold text-[#8FA6FF]">{s.val}</div>
            <div className="text-[10px] text-[#9BA1C4] mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const MOCKS = { hsa: HSAMock, comm: CommMock, deliver: DeliverMock, platform: PlatformMock };
