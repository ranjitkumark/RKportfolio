import React, { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import ChatOverlay from "./components/ChatOverlay.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx";
import { useTheme } from "./hooks/useTheme.js";

export default function App() {
  const [mode, setMode] = useState("work");
  const [chatOpen, setChatOpen] = useState(false);
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
      <Header mode={mode} onModeChange={setMode} onAskRanjit={() => setChatOpen(true)} />
      <main>
        <Home mode={mode} />
      </main>
      {chatOpen && <ChatOverlay onClose={() => setChatOpen(false)} />}
      <ThemeToggle themeMode={themeMode} resolvedTheme={resolvedTheme} onCycle={cycleThemeMode} />
    </div>
  );
}
