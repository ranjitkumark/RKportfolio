import React from "react";
import { Eye, ArrowRight } from "lucide-react";
import StoryReel from "./StoryReel.jsx";
import { AIAssistantMock, CommHubStatsMock, DeliveryHubMock, CommHubContributionMock } from "./CaseStudyMocks.jsx";

const MOCK_BY_ID = {
  "one-path-not-five": DeliveryHubMock,
  "setup-to-enrolled": CommHubContributionMock,
  "one-setup-every-channel": CommHubStatsMock,
  "one-click-every-answer": AIAssistantMock,
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
  const MockComponent = MOCK_BY_ID[study.id];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
      {study.reel ? (
        <StoryReel
          mock={study.reel.mock}
          beats={study.reel.beats}
          mockNode={MockComponent ? <MockComponent /> : undefined}
        />
      ) : (
        <div className="relative bg-card border border-[#c9d7da] dark:border-white/10 rounded-[24px] p-10 flex items-center justify-center w-full md:min-h-[420px]">
          <div className="w-[300px] h-[320px]">
            <MockComponent />
          </div>
          <span className="absolute left-6 bottom-4 flex items-center gap-1 text-[10px] text-body">
            <Eye size={11} /> Hover for a quick look
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
