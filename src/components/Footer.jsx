import React from "react";

export default function Footer() {
  return (
    <footer className="bg-band py-6 mt-16">
      <div className="max-w-3xl mx-auto px-4 flex flex-col items-center gap-2">
        <span className="w-8 h-8 rounded-full bg-ink text-white text-[12px] font-semibold flex items-center justify-center">
          R.
        </span>
        <span className="text-[11px] text-white/85">© 2026 Ranjit Kumar</span>
      </div>
    </footer>
  );
}
