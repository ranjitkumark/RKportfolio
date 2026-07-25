import React from "react";
import { Monitor, Heart, FileText, MessageSquare } from "lucide-react";

const MODES = [
  { id: "work", label: "Work", icon: Monitor },
  { id: "life", label: "Life", icon: Heart },
];

export default function Header({ mode, onModeChange, onAskRanjit }) {
  return (
    <header className="relative z-30 w-full px-4 sm:px-6 md:px-10 py-6">
      <div className="flex flex-col items-center gap-3 sm:relative sm:flex-row sm:justify-center">
        <div className="flex items-center gap-1 bg-white border border-black/10 rounded-full p-1 shadow-sm">
          {MODES.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => onModeChange(id)}
              aria-pressed={mode === id}
              className={`flex items-center gap-1.5 text-[11px] sm:text-[12px] font-medium tracking-wide uppercase px-3.5 sm:px-4 py-1.5 rounded-full transition-colors ${
                mode === id ? "bg-navy text-white" : "text-muted hover:text-ink"
              }`}
            >
              <Icon size={13} />
              {label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:absolute sm:right-0">
          <a
            href="/ranjit-resume.pdf"
            download
            className="hidden sm:flex items-center gap-1.5 text-[12px] font-medium text-ink border border-black/10 rounded-full px-4 py-2 hover:border-black/25 transition-colors"
          >
            <FileText size={13} />
            Resume
          </a>
          <button
            type="button"
            onClick={onAskRanjit}
            className="flex items-center gap-1.5 text-[12px] font-medium text-ink border border-black/10 rounded-full px-3.5 sm:px-4 py-2 hover:border-black/25 transition-colors"
          >
            <MessageSquare size={13} />
            Ask Ranjit
            <kbd className="hidden sm:inline text-[10px] text-muted border border-black/10 rounded px-1 ml-0.5">
              ⌘K
            </kbd>
          </button>
        </div>
      </div>
    </header>
  );
}
