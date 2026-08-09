import React, { useEffect, useState } from "react";
import { X } from "./icons.jsx";
import { ARCHIVE_PROJECTS } from "../data/archiveProjects.js";
import OptageCaseStudy from "../pages/OptageCaseStudy.jsx";
import OnectoCaseStudy from "../pages/OnectoCaseStudy.jsx";
import PashminaCaseStudy from "../pages/PashminaCaseStudy.jsx";
import SmartCoworkCaseStudy from "../pages/SmartCoworkCaseStudy.jsx";
import TmlCaseStudy from "../pages/TmlCaseStudy.jsx";

const COVERS = import.meta.glob("../assets/archive/*/cover.png", { eager: true, import: "default" });

function getCover(projectId) {
  return COVERS[`../assets/archive/${projectId}/cover.png`];
}

const CASE_STUDY_BY_ID = {
  optage: OptageCaseStudy,
  onecto: OnectoCaseStudy,
  pashmina: PashminaCaseStudy,
  "smart-cowork": SmartCoworkCaseStudy,
  "the-my-leader": TmlCaseStudy,
};

function HintBar() {
  return (
    <div className="border-t border-band/30 py-6 flex items-center justify-center gap-8 font-poppins">
      <span className="flex items-center gap-2">
        <kbd className="bg-[#dee2e3] dark:bg-card border border-[#9fa6ab] dark:border-white/20 rounded text-[13px] text-body px-[8px] py-[2px]">
          ESC
        </kbd>
        <span className="text-[13px] font-medium text-body">CLOSE</span>
      </span>
    </div>
  );
}

function ProjectGrid({ onSelect }) {
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
                onClick={() => onSelect(project.id)}
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

      <HintBar />
    </>
  );
}

export default function ArchiveOverlay({ onClose }) {
  const [openCaseStudyId, setOpenCaseStudyId] = useState(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    if (openCaseStudyId) return; // the case study popover owns its own Escape handling while open
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openCaseStudyId, onClose]);

  if (openCaseStudyId) {
    const CaseStudy = CASE_STUDY_BY_ID[openCaseStudyId];
    return <CaseStudy onClose={() => setOpenCaseStudyId(null)} />;
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

      <ProjectGrid onSelect={setOpenCaseStudyId} />
    </div>
  );
}
