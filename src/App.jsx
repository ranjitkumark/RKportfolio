import React, { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import DesignPhilosophy from "./pages/DesignPhilosophy.jsx";
import HSACaseStudy from "./pages/HSACaseStudy.jsx";
import CommunicationCaseStudy from "./pages/CommunicationCaseStudy.jsx";
import ChatbotCaseStudy from "./pages/ChatbotCaseStudy.jsx";
import ChatOverlay from "./components/ChatOverlay.jsx";
import ResumeOverlay from "./components/ResumeOverlay.jsx";
import ArchiveOverlay from "./components/ArchiveOverlay.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx";
import { useTheme } from "./hooks/useTheme.js";

export default function App() {
  const [mode, setMode] = useState("work");
  const [view, setView] = useState("home"); // "home" | "philosophy" | "case-study"
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [archiveOpen, setArchiveOpen] = useState(false);
  const { themeMode, resolvedTheme, cycleThemeMode } = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

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
        {view === "home" && (
          <Home
            mode={mode}
            onOpenPhilosophy={() => setView("philosophy")}
            onOpenResume={() => setResumeOpen(true)}
            onOpenArchive={() => setArchiveOpen(true)}
            onOpenCaseStudy={(id) => {
              setActiveCaseStudy(id);
              setView("case-study");
            }}
          />
        )}
        {view === "philosophy" && (
          <DesignPhilosophy onBack={() => setView("home")} onOpenResume={() => setResumeOpen(true)} />
        )}
        {view === "case-study" && activeCaseStudy === "setup-to-enrolled" && (
          <HSACaseStudy onBack={() => setView("home")} onOpenResume={() => setResumeOpen(true)} />
        )}
        {view === "case-study" && activeCaseStudy === "one-setup-every-channel" && (
          <CommunicationCaseStudy onBack={() => setView("home")} onOpenResume={() => setResumeOpen(true)} />
        )}
        {view === "case-study" && activeCaseStudy === "one-click-every-answer" && (
          <ChatbotCaseStudy onBack={() => setView("home")} onOpenResume={() => setResumeOpen(true)} />
        )}
      </main>
      {chatOpen && <ChatOverlay onClose={() => setChatOpen(false)} />}
      {resumeOpen && <ResumeOverlay onClose={() => setResumeOpen(false)} />}
      {archiveOpen && <ArchiveOverlay onClose={() => setArchiveOpen(false)} />}
      <ThemeToggle themeMode={themeMode} resolvedTheme={resolvedTheme} onCycle={cycleThemeMode} />
    </div>
  );
}
