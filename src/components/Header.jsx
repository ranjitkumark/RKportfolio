import React from "react";
import { Monitor, Heart, FileText, MessageSquare, Command } from "lucide-react";

const MODES = [
  { id: "work", label: "Work", icon: Monitor },
  { id: "life", label: "Life", icon: Heart },
];

export default function Header({ mode, onModeChange, onAskRanjit, onOpenResume }) {
  return (
    <header className="relative z-30 w-full max-w-[1600px] mx-auto px-4 sm:px-16 py-6 font-poppins">
      <div className="flex flex-col items-center gap-3 sm:relative sm:flex-row sm:justify-center">
        <div className="flex items-center gap-3 bg-white dark:bg-card border border-navy p-[5px] rounded-[40px]">
          {MODES.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => onModeChange(id)}
              aria-pressed={mode === id}
              className={`flex items-center gap-2 text-[14px] font-medium px-3 py-1.5 rounded-full transition-colors ${
                mode === id ? "bg-accent text-white" : "text-muted hover:text-ink"
              }`}
            >
              <Icon size={16} />
              {label.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 sm:absolute sm:right-0">
          <button
            type="button"
            onClick={onOpenResume}
            className="hidden sm:flex items-center gap-2 text-[12px] font-medium text-accent bg-card border border-accent rounded-[24px] px-3.5 py-2 hover:opacity-80 transition-opacity"
          >
            <FileText size={13} />
            RESUME
          </button>
          <button
            type="button"
            onClick={onAskRanjit}
            className="flex items-center gap-2 text-[12px] font-medium text-accent bg-card border border-accent rounded-[24px] px-3.5 py-2.5 hover:opacity-80 transition-opacity"
          >
            <MessageSquare size={16} />
            ASK RANJIT
            <span className="flex items-center gap-1 bg-card border border-band/60 rounded px-1">
              <Command size={11} />
              <span className="text-[12px]">K</span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
