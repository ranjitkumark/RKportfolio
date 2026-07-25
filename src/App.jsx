import React, { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import ChatOverlay from "./components/ChatOverlay.jsx";

export default function App() {
  const [mode, setMode] = useState("work");
  const [chatOpen, setChatOpen] = useState(false);

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
    <div className="min-h-screen w-full bg-white">
      <Header mode={mode} onModeChange={setMode} onAskRanjit={() => setChatOpen(true)} />
      <main>
        <Home mode={mode} />
      </main>
      {chatOpen && <ChatOverlay onClose={() => setChatOpen(false)} />}
    </div>
  );
}
