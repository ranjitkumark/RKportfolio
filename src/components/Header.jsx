import React from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_ITEMS = [
  { to: "/about", label: "About" },
  { to: "/work", label: "Work" },
  { to: "/writing", label: "Writing" },
];

export default function Header() {
  const { pathname } = useLocation();
  return (
    <header className="relative z-20 flex items-center justify-between px-4 sm:px-6 md:px-10 py-5 sm:py-6 max-w-6xl mx-auto w-full">
      <Link to="/" className="text-[14px] sm:text-[15px] font-semibold tracking-tight text-[#14141A] lowercase shrink-0">
        ranjit kumar
      </Link>
      <nav className="flex items-center gap-4 sm:gap-6 md:gap-8 text-[13px] sm:text-[14px] text-[#43434D]">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`transition-colors hover:text-[#14141A] ${
              pathname === item.to ? "text-[#14141A] font-medium" : ""
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
