import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Work from "./pages/Work.jsx";
import Writing from "./pages/Writing.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen w-full bg-[#FAFAFB] flex flex-col">
        <div
          className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] opacity-70 -z-0"
          style={{ background: "radial-gradient(closest-side, rgba(210,205,245,0.35), rgba(250,250,251,0))" }}
        />

        <Header />

        <main className="relative z-10 flex-1 flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/writing" element={<Writing />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
