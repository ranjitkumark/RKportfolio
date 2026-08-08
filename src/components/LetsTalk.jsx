import React from "react";
import { Contact, Linkedin, Newspaper } from "lucide-react";

export default function LetsTalk({ onOpenResume, padding = "sm:px-32" }) {
  return (
    <section className={`w-full max-w-[1600px] mx-auto px-4 ${padding} pt-5 pb-[60px] text-center font-poppins`}>
      <h2 className="text-[36px] sm:text-[40px] font-semibold text-heading">Let's Talk.</h2>
      <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-[14px] text-body">
        <a href="mailto:postranjitk@gmail.com" className="hover:text-heading transition-colors">
          POSTRANJITK@GMAIL.COM
        </a>
        <span className="w-px h-[18px] bg-body/30" />
        <a href="tel:+919738729691" className="hover:text-heading transition-colors">
          +91-9738729691
        </a>
      </div>
      <div className="mt-8 flex items-center justify-center gap-10 text-[12px] tracking-[1px] text-accent">
        <button type="button" onClick={onOpenResume} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Contact size={12} /> RESUME
        </button>
        <a
          href="https://www.linkedin.com/in/ranjit-kumar-kar-3a3b7931/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <Linkedin size={12} /> LINKEDIN
        </a>
        <a href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Newspaper size={12} /> MEDIUM
        </a>
      </div>
    </section>
  );
}
