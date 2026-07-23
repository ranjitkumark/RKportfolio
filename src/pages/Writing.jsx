import React from "react";
import Footer from "../components/Footer.jsx";

// Placeholder posts — swap in real titles/excerpts/dates/slugs when Ranjit's
// writing is ready. Keeping the shape here so wiring up real posts later is
// just a data change, no markup change.
const POSTS = [
  {
    id: "post-1",
    date: "February 20, 2026",
    readTime: "2 min read",
    title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966",
  },
  {
    id: "post-2",
    date: "February 20, 2026",
    readTime: "2 min read",
    title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966",
  },
  {
    id: "post-3",
    date: "February 20, 2026",
    readTime: "2 min read",
    title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966",
  },
  {
    id: "post-4",
    date: "February 20, 2026",
    readTime: "2 min read",
    title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966",
  },
];

export default function Writing() {
  return (
    <div className="animate-fadeIn">
      <section className="text-center px-4 sm:px-6 pt-6 sm:pt-10 pb-10 sm:pb-14 border-b border-black/5">
        <h1 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-[#14141A] tracking-tight">
          Writing
        </h1>
        <p className="mt-4 text-[14px] sm:text-[16px] text-[#5B5B66] max-w-lg mx-auto">
          Stories, insights, and practical lessons from designing user-centered products.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="divide-y divide-black/5">
          {POSTS.map((post) => (
            <article key={post.id} className="py-8 first:pt-0">
              <div className="flex items-center gap-3 text-[11px] tracking-wide text-[#9A9AA5] mb-2">
                <span className="uppercase">{post.date}</span>
                <span className="w-4 h-px bg-[#D5D5DC]" />
                <span className="uppercase">{post.readTime}</span>
              </div>
              <h2 className="text-lg sm:text-xl font-medium text-[#14141A] leading-snug mb-2">
                <a href="#" className="hover:text-[#2452C4] transition-colors">
                  {post.title}
                </a>
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
