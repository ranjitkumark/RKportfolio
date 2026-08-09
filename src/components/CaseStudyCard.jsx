import React from "react";
import { Eye, ArrowRight } from "./icons.jsx";
import StoryReel from "./StoryReel.jsx";
import deliveryHubImg from "../assets/case-studies/mocks/mock-delivery-hub.png";
import commHubContributionImg from "../assets/case-studies/mocks/mock-comm-hub-contribution.png";
import commHubStatsImg from "../assets/case-studies/mocks/mock-comm-hub-stats.png";
import aiAssistantImg from "../assets/case-studies/mocks/mock-ai-assistant.png";

const MOCK_IMG_BY_ID = {
  "one-path-not-five": deliveryHubImg,
  "setup-to-enrolled": commHubContributionImg,
  "one-setup-every-channel": commHubStatsImg,
  "one-click-every-answer": aiAssistantImg,
};

export function ReadMoreLink({ children }) {
  return (
    <span className="inline-flex items-center gap-2 h-9 py-2">
      <span className="font-poppins font-medium text-[14px] text-accent underline decoration-solid">
        {children}
      </span>
      <ArrowRight size={14} className="text-accent shrink-0" />
    </span>
  );
}

export default function CaseStudyCard({ study, onOpenCaseStudy }) {
  const mockImg = MOCK_IMG_BY_ID[study.id];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
      {study.reel ? (
        <StoryReel
          mock={study.reel.mock}
          beats={study.reel.beats}
          mockNode={mockImg ? <img src={mockImg} alt={study.title} className="w-full h-full object-contain rounded-2xl" /> : undefined}
        />
      ) : (
        <div className="relative w-full h-[420px] rounded-[24px] bg-card border border-[#c9d7da] dark:border-white/10 overflow-hidden">
          <div className="absolute top-9 left-9 right-9 bottom-16">
            <img src={mockImg} alt={study.title} className="w-full h-full object-contain rounded-2xl" />
          </div>
          <span className="absolute left-9 bottom-[30px] flex items-center gap-2 text-[13px] text-body">
            <Eye size={16} className="opacity-80" /> Hover for a quick look
          </span>
        </div>
      )}

      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1.5 mb-1">
          <span className="w-2 h-2 rounded-full bg-live" />
          <span className="text-[10px] font-semibold tracking-[0.5px] text-live uppercase font-poppins">
            {study.status}
          </span>
        </div>
        <p className="font-poppins text-[24px] leading-normal text-ink max-w-md">
          <span className="font-semibold">{study.title}</span>
          {study.suffix}
        </p>
        {study.hasPage ? (
          <button type="button" onClick={() => onOpenCaseStudy?.(study.id)} className="mt-4 inline-block text-left">
            <ReadMoreLink>Read the case study</ReadMoreLink>
          </button>
        ) : (
          <a href={study.href} className="mt-4 inline-block">
            <ReadMoreLink>Read the case study</ReadMoreLink>
          </a>
        )}
      </div>
    </div>
  );
}
