import React from "react";

export default function TrafficLight({ size = "md" }) {
  const dims = size === "sm" ? "w-6 h-[52px]" : "w-7 h-[60px]";
  const dot = size === "sm" ? "w-2.5 h-2.5" : "w-3 h-3";
  return (
    <div
      className={`mx-auto ${dims} rounded-full bg-white dark:bg-card border border-black/10 dark:border-white/10 flex flex-col items-center justify-between py-2.5`}
    >
      <span className={`${dot} rounded-full bg-[#c93728]`} />
      <span className={`${dot} rounded-full bg-[#d08d00]`} />
      <span className={`${dot} rounded-full bg-[#2e6c4d]`} />
    </div>
  );
}
