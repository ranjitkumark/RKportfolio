import React from "react";

export default function Eyebrow({ children }) {
  return (
    <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.5px] text-live uppercase font-poppins mb-3">
      <span className="w-1.5 h-1.5 rounded-full bg-live" />
      {children}
    </div>
  );
}
