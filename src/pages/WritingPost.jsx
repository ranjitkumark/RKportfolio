import React from "react";
import { useParams, Link } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import { POSTS } from "../data/posts.js";

const CONTENT_WIDTH = "max-w-[48rem] lg:max-w-[68rem]";

/* Minimal inline markdown: **word** -> bold, *word* -> italic */
function renderInline(text) {
  return text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={i}>{part.slice(1, -1)}</em>;
    }
    return <React.Fragment key={i}>{part}</React.Fragment>;
  });
}

function Block({ block }) {
  if (block.type === "h2") {
    return (
      <h2 className="text-[19px] sm:text-[21px] font-semibold text-[#14141A] tracking-tight pt-2">
        {renderInline(block.text)}
      </h2>
    );
  }
  if (block.type === "note") {
    return (
      <p className="text-[14px] sm:text-[15px] leading-relaxed text-[#5B5B66] italic border-t border-black/5 pt-6">
        {renderInline(block.text)}
      </p>
    );
  }
  return (
    <p className="text-[14px] sm:text-[15px] leading-relaxed text-[#2D2D2D]">
      {renderInline(block.text)}
    </p>
  );
}

function PostNav({ prevPost, nextPost }) {
  if (!prevPost && !nextPost) return null;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div>
        {prevPost && (
          <Link to={`/writing/${prevPost.slug}`} className="group block">
            <div className="text-[11px] tracking-wide text-[#9A9AA5] mb-1">← PREVIOUS</div>
            <div className="text-[14px] sm:text-[15px] font-medium text-[#14141A] group-hover:text-[#2452C4] transition-colors">
              {prevPost.title}
            </div>
          </Link>
        )}
      </div>
      <div className="sm:text-right">
        {nextPost && (
          <Link to={`/writing/${nextPost.slug}`} className="group block">
            <div className="text-[11px] tracking-wide text-[#9A9AA5] mb-1">NEXT →</div>
            <div className="text-[14px] sm:text-[15px] font-medium text-[#14141A] group-hover:text-[#2452C4] transition-colors">
              {nextPost.title}
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}

export default function WritingPost() {
  const { slug } = useParams();
  const index = POSTS.findIndex((p) => p.slug === slug);
  const post = index !== -1 ? POSTS[index] : null;
  const prevPost = index > 0 ? POSTS[index - 1] : null;
  const nextPost = index !== -1 && index < POSTS.length - 1 ? POSTS[index + 1] : null;

  if (!post) {
    return (
      <div className="animate-fadeIn">
        <section className="text-center px-4 sm:px-6 pt-16 sm:pt-24 pb-16 sm:pb-24">
          <h1 className="text-[24px] sm:text-[28px] font-semibold text-[#14141A]">Post not found</h1>
          <Link
            to="/writing"
            className="mt-4 inline-block text-[13px] text-[#43434D] bg-white border border-black/5 rounded-full px-5 py-2.5 shadow-sm hover:border-black/15 transition-colors"
          >
            ← Back to Writing
          </Link>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="animate-fadeIn">
      <section className={`${CONTENT_WIDTH} mx-auto px-4 sm:px-6 pt-8 sm:pt-12`}>
        <Link
          to="/writing"
          className="inline-flex items-center gap-1.5 text-[13px] text-[#9A9AA5] hover:text-[#43434D] transition-colors"
        >
          ← Back to Writing
        </Link>
      </section>

      <section className={`${CONTENT_WIDTH} mx-auto px-4 sm:px-6 pt-6 pb-8 sm:pb-10 border-b border-black/5`}>
        <div className="flex items-center gap-3 text-[11px] tracking-wide text-[#9A9AA5] mb-4">
          <span className="uppercase">{post.date}</span>
          <span className="w-4 h-px bg-[#D5D5DC]" />
          <span className="uppercase">{post.readTime}</span>
        </div>
        <h1 className="text-[26px] sm:text-[32px] md:text-[38px] font-bold text-[#14141A] tracking-tight leading-tight">
          {post.title}
        </h1>
      </section>

      <section className={`${CONTENT_WIDTH} mx-auto px-4 sm:px-6 py-10 sm:py-14 space-y-5`}>
        {post.body.map((block, i) => (
          <Block key={i} block={block} />
        ))}
      </section>

      <section className={`${CONTENT_WIDTH} mx-auto px-4 sm:px-6 pb-10 sm:pb-14 pt-8 border-t border-black/5`}>
        <PostNav prevPost={prevPost} nextPost={nextPost} />
      </section>

      <Footer />
    </div>
  );
}
