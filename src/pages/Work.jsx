import React from "react";
import CaseStudyCard from "../components/CaseStudyCard.jsx";
import Footer from "../components/Footer.jsx";

// Same three case studies shown on Home for now. No dedicated Work page
// design has been shared yet — this reuses the split-card style so the nav
// link isn't broken. Swap in the full project list (Optage, Onecto, Smart
// Cowork, PashminaGoat, TML, Linict, etc. from the old site) once a design
// for this page is ready.
const CASE_STUDIES = [
  {
    id: "hsa",
    badge: "PRODUCT DESIGN",
    badgeBg: "#D8F3EA",
    badgeText: "#0E8A66",
    title: "HSA",
    subtitle: "Health Savings Account Platform",
    body:
      "Redesigned the HSA dashboard and contribution flow to reduce cognitive load and increase annual contribution rates among first-time users.",
    stat: "+41%",
    statLabel: "CONTRIBUTION RATE",
    statColor: "#0E8A66",
    panelBg: "#4B7A72",
    reverse: false,
    mock: "hsa",
  },
  {
    id: "comm",
    badge: "UX RESEARCH",
    badgeBg: "#DCE7FB",
    badgeText: "#2452C4",
    title: "Communication",
    subtitle: "Messaging & Notification System",
    body:
      "Unified fragmented notification channels into a single communication hub. Reduced support tickets and improved response clarity for enterprise teams.",
    stat: "3×",
    statLabel: "FASTER RESPONSE",
    statColor: "#2452C4",
    panelBg: "#CFE0FA",
    reverse: true,
    mock: "comm",
  },
  {
    id: "deliver",
    badge: "DESIGN SYSTEM",
    badgeBg: "#FBE6C8",
    badgeText: "#B4600F",
    title: "Deliver Hub",
    subtitle: "Last-Mile Delivery Dashboard",
    body:
      "Built a real-time driver dispatch and tracking interface that cut average delivery time and gave operations teams full route visibility.",
    stat: "2 wks",
    statLabel: "SHIP TO PROD",
    statColor: "#B4600F",
    panelBg: "#F6DCB8",
    reverse: false,
    mock: "deliver",
  },
];

export default function Work() {
  return (
    <div className="animate-fadeIn">
      <section className="text-center px-4 sm:px-6 pt-6 sm:pt-10 pb-8">
        <h1 className="text-[26px] sm:text-[32px] md:text-[44px] font-semibold text-[#14141A] tracking-tight">
          The work I've done
        </h1>
        <p className="mt-4 text-[14px] sm:text-[15px] md:text-[16px] text-[#5B5B66] max-w-xl mx-auto">
          Through research-driven design and problem-solving, I create digital products that improve
          usability, adoption, and customer satisfaction.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-4 md:px-6 mt-6 space-y-6 sm:space-y-8">
        {CASE_STUDIES.map((cs) => (
          <CaseStudyCard key={cs.id} cs={cs} />
        ))}
      </section>

      <Footer />
    </div>
  );
}
