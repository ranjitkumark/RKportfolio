import React from "react";

/* Shared footer content — used both standalone (plain bg on About/Writing/
   chat view) and embedded inside the dotted sticker band on Home, so all
   pages stay visually consistent and only the background differs. */
export function FooterContent() {
  return (
    <div className="max-w-6xl mx-auto w-full flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3 px-4 sm:px-6 md:px-10 text-[13px] text-[#9A9AA5] text-center sm:text-left">
      <span>© 2026 Ranjit Kumar</span>
      <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
        <a
          href="https://www.linkedin.com/in/ranjit-kumar-kar-3a3b7931/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#43434D] transition-colors"
        >
          LinkedIn
        </a>
        <a href="#" className="hover:text-[#43434D] transition-colors">
          Dribbble
        </a>
        <a href="#" className="hover:text-[#43434D] transition-colors">
          Twitter
        </a>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative z-20 py-6 border-t border-black/[0.06] mt-16">
      <div className="pt-6">
        <FooterContent />
      </div>
    </footer>
  );
}
