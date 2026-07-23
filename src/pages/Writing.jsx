import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import { POSTS } from "../data/posts.js";

export default function Writing() {
  return (
    <div className="animate-fadeIn">
      <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-16 lg:px-32 py-10 border-b border-black/5">
        <h1 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-[#14141A] tracking-tight">
          Writing
        </h1>
        <p className="mt-4 text-[14px] sm:text-[16px] text-[#5B5B66] max-w-lg mx-auto">
          Stories, insights, and practical lessons from designing user-centered products.
        </p>
      </section>

      <section className="max-w-[48rem] lg:max-w-[68rem] mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="divide-y divide-black/5">
          {POSTS.map((post) => (
            <article key={post.slug} className="py-8 first:pt-0">
              <div className="flex items-center gap-3 text-[11px] tracking-wide text-[#9A9AA5] mb-2">
                <span className="uppercase">{post.date}</span>
                <span className="w-4 h-px bg-[#D5D5DC]" />
                <span className="uppercase">{post.readTime}</span>
              </div>
              <h2 className="text-lg sm:text-xl font-medium text-[#14141A] leading-snug mb-2">
                <Link to={`/writing/${post.slug}`} className="hover:text-[#2452C4] transition-colors">
                  {post.title}
                </Link>
              </h2>
              <p className="text-[13px] sm:text-[14px] leading-relaxed text-[#6C6C76] max-w-2xl">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
