import React from "react";
import { Sun, Moon } from "./icons.jsx";

const LABELS = {
  auto: "Auto (follows sunrise/sunset)",
  light: "Light",
  dark: "Dark",
};

export default function ThemeToggle({ themeMode, resolvedTheme, onCycle }) {
  const Icon = resolvedTheme === "dark" ? Moon : Sun;

  return (
    <button
      type="button"
      onClick={onCycle}
      title={`Theme: ${LABELS[themeMode]} — click to change`}
      aria-label={`Theme: ${LABELS[themeMode]}. Click to change.`}
      className="fixed bottom-5 left-5 sm:bottom-6 sm:left-6 z-40 w-11 h-11 rounded-full bg-card border border-band/60 text-heading flex items-center justify-center shadow-[0_2px_12px_rgba(0,0,0,0.12)] hover:opacity-90 transition-opacity"
    >
      <Icon size={18} />
      {themeMode === "auto" && (
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-accent text-white text-[8px] font-bold flex items-center justify-center">
          A
        </span>
      )}
    </button>
  );
}
