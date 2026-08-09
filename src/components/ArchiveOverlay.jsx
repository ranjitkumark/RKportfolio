import React, { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "./icons.jsx";
import { ARCHIVE_PROJECTS } from "../data/archiveProjects.js";
import OptageCaseStudy from "../pages/OptageCaseStudy.jsx";

const COVERS = import.meta.glob("../assets/archive/*/cover.png", { eager: true, import: "default" });
const SLIDES = import.meta.glob("../assets/archive/*/slide-*.png", { eager: true, import: "default" });

function getCover(projectId) {
  return COVERS[`../assets/archive/${projectId}/cover.png`];
}

function getSlide(projectId, slideNumber) {
  return SLIDES[`../assets/archive/${projectId}/slide-${slideNumber}.png`];
}

function HintBar({ showNav }) {
  return (
    <div className="border-t border-band/30 py-6 flex items-center justify-center gap-8 font-poppins">
      <span className="flex items-center gap-2">
        <kbd className="bg-[#dee2e3] dark:bg-card border border-[#9fa6ab] dark:border-white/20 rounded text-[13px] text-body px-[8px] py-[2px]">
          ESC
        </kbd>
        <span className="text-[13px] font-medium text-body">CLOSE</span>
      </span>
      {showNav && (
        <>
          <span className="flex items-center gap-2">
            <kbd className="bg-[#dee2e3] dark:bg-card border border-[#9fa6ab] dark:border-white/20 rounded text-[13px] text-body px-[8px] py-[2px]">
              Z
            </kbd>
            <span className="text-[13px] font-medium text-body">ZOOM</span>
          </span>
          <span className="flex items-center gap-2">
            <kbd className="bg-[#dee2e3] dark:bg-card border border-[#9fa6ab] dark:border-white/20 rounded text-[13px] text-body px-[8px] py-[2px]">
              ← →
            </kbd>
            <span className="text-[13px] font-medium text-body">NAVIGATE</span>
          </span>
        </>
      )}
    </div>
  );
}

function ProjectSlider({ project, onClose }) {
  const [index, setIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + project.slideCount) % project.slideCount);
      else if (e.key === "ArrowRight") setIndex((i) => (i + 1) % project.slideCount);
      else if (e.key.toLowerCase() === "z") setZoomed((z) => !z);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose, project.slideCount]);

  return (
    <>
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-16 pt-6 flex items-center justify-between font-poppins">
        <span className="text-[13px] tracking-[0.15em] uppercase text-muted">
          {project.name} <span className="mx-1">•</span> {index + 1}/{project.slideCount}
        </span>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 sm:px-10 relative">
        <button
          type="button"
          onClick={() => setIndex((i) => (i - 1 + project.slideCount) % project.slideCount)}
          aria-label="Previous image"
          className="absolute left-4 sm:left-10 w-11 h-11 rounded-full border border-band/60 bg-card flex items-center justify-center hover:opacity-80 transition-opacity"
        >
          <ChevronLeft size={18} className="text-heading" />
        </button>

        <div
          className={`w-full max-w-3xl aspect-video rounded-2xl overflow-hidden bg-card border border-band/40 transition-transform duration-300 ${
            zoomed ? "scale-110" : ""
          }`}
        >
          <img
            src={getSlide(project.id, index + 1)}
            alt={`${project.name} — slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>

        <button
          type="button"
          onClick={() => setIndex((i) => (i + 1) % project.slideCount)}
          aria-label="Next image"
          className="absolute right-4 sm:right-10 w-11 h-11 rounded-full border border-band/60 bg-card flex items-center justify-center hover:opacity-80 transition-opacity"
        >
          <ChevronRight size={18} className="text-heading" />
        </button>
      </div>

      <HintBar showNav />
    </>
  );
}

function ProjectGrid({ onSelect, onOpenCaseStudy }) {
  return (
    <>
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-16 pt-6 font-poppins">
        <span className="text-[13px] tracking-[0.15em] uppercase text-muted">
          Earlier Work <span className="mx-1">•</span> 2012 – 2021
        </span>
      </div>

      <div className="flex-1 overflow-y-auto px-4 sm:px-16 py-10 font-poppins">
        <div className="max-w-[1600px] mx-auto w-full">
          <p className="text-[15px] sm:text-[16px] text-heading mb-6">
            across E commerce, Govt, B2B, and enterprise IoT.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {ARCHIVE_PROJECTS.map((project) => (
              <button
                key={project.id}
                type="button"
                onClick={() => (project.id === "optage" ? onOpenCaseStudy(project.id) : onSelect(project))}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden text-left hover:opacity-90 transition-opacity"
              >
                <img
                  src={getCover(project.id)}
                  alt={project.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                <div className="relative h-full p-4 flex flex-col justify-end">
                  <span className="text-white text-[15px] font-semibold">{project.name}</span>
                  <span className="text-white/70 text-[12px] mt-1">{project.description}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <HintBar showNav={false} />
    </>
  );
}

export default function ArchiveOverlay({ onClose }) {
  const [activeProject, setActiveProject] = useState(null);
  const [optageOpen, setOptageOpen] = useState(false);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    if (activeProject || optageOpen) return; // slider/Optage own their own Escape handling while active
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeProject, optageOpen, onClose]);

  if (optageOpen) {
    return <OptageCaseStudy onClose={onClose} />;
  }

  return (
    <div className="fixed inset-0 z-50 bg-mint flex flex-col animate-fadeIn">
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-5 right-5 sm:top-6 sm:right-10 w-8 h-8 rounded-full bg-[#484848] text-white flex items-center justify-center hover:opacity-90 transition-opacity z-10"
      >
        <X size={14} />
      </button>

      {activeProject ? (
        <ProjectSlider project={activeProject} onClose={onClose} />
      ) : (
        <ProjectGrid onSelect={setActiveProject} onOpenCaseStudy={() => setOptageOpen(true)} />
      )}
    </div>
  );
}
