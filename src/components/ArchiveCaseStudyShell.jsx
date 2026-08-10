import React, { useEffect } from "react";
import { X } from "./icons.jsx";
import { useScrollSpy, CaseStudyNav } from "./CaseStudyKit.jsx";

export default function ArchiveCaseStudyShell({ onClose, navSections, children }) {
  const active = useScrollSpy(
    navSections.map((s) => s.id),
    true
  );

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[60] bg-mint flex flex-col animate-fadeIn font-poppins">
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-5 right-5 sm:top-6 sm:right-10 w-8 h-8 rounded-full bg-[#484848] text-white flex items-center justify-center hover:opacity-90 transition-opacity z-10"
      >
        <X size={14} />
      </button>

      <div className="flex-1 overflow-y-auto px-5 sm:px-10 pt-16 sm:pt-14 pb-10">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-10 md:gap-16 items-start">
            <CaseStudyNav sections={navSections} active={active} />
            <div className="w-full md:w-[80%]">{children}</div>
          </div>
        </div>
      </div>

      <div className="border-t border-band/30 py-6 flex items-center justify-center gap-2 font-poppins">
        <kbd className="bg-[#dee2e3] dark:bg-card border border-[#9fa6ab] dark:border-white/20 rounded text-[13px] text-body px-[8px] py-[4px]">
          ESC
        </kbd>
        <span className="text-[13px] font-medium text-body">CLOSE</span>
      </div>
    </div>
  );
}
