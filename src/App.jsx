import React, { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import DesignPhilosophy from "./pages/DesignPhilosophy.jsx";
import ChatOverlay from "./components/ChatOverlay.jsx";
import ResumeOverlay from "./components/ResumeOverlay.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx";
import { useTheme } from "./hooks/useTheme.js";

export default function App() {
  const [mode, setMode] = useState("work");
  const [view, setView] = useState("home"); // "home" | "philosophy"
  const [chatOpen, setChatOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const { themeMode, resolvedTheme, cycleThemeMode } = useTheme();

  useEffect(() => {
    const onKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setChatOpen(true);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="min-h-screen w-full bg-surface transition-colors duration-300">
      {view === "home" && (
        <Header
          mode={mode}
          onModeChange={setMode}
          onAskRanjit={() => setChatOpen(true)}
          onOpenResume={() => setResumeOpen(true)}
        />
      )}
      <main>
        {view === "home" ? (
          <Home mode={mode} onOpenPhilosophy={() => setView("philosophy")} onOpenResume={() => setResumeOpen(true)} />
        ) : (
          <DesignPhilosophy onBack={() => setView("home")} />
        )}
      </main>
      {chatOpen && <ChatOverlay onClose={() => setChatOpen(false)} />}
      {resumeOpen && <ResumeOverlay onClose={() => setResumeOpen(false)} />}
      <ThemeToggle themeMode={themeMode} resolvedTheme={resolvedTheme} onCycle={cycleThemeMode} />
    </div>
  );
}
