import React from "react";
import Eyebrow from "../components/Eyebrow.jsx";
import heroPlaceholder from "../assets/life/hero.svg";
import mountainBwPlaceholder from "../assets/life/mountain-bw.png";
import mountainCollagePlaceholder from "../assets/life/mountain-collage.png";
import beachPlaceholder from "../assets/life/beach.png";

function PhotoBlock({ src, label }) {
  return (
    <div className="w-full max-w-[340px] aspect-[4/5] rounded-2xl overflow-hidden bg-card border border-band/40 mx-auto md:mx-0">
      <img src={src} alt={label} className="w-full h-full object-cover" />
    </div>
  );
}

function StoryRow({ photoSrc, photoLabel, title, children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[340px_1fr] gap-8 md:gap-12 items-center py-12 sm:py-16 border-t border-band/30">
      <PhotoBlock src={photoSrc} label={photoLabel} />
      <div>
        <h2 className="text-[24px] sm:text-[28px] font-semibold text-heading mb-3">{title}</h2>
        <div className="space-y-3 text-[15px] leading-relaxed text-body">{children}</div>
      </div>
    </div>
  );
}

export default function Life() {
  return (
    <div className="animate-fadeIn font-poppins">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-48">
        {/* HERO */}
        <div className="grid grid-cols-1 md:grid-cols-[340px_1fr] gap-8 md:gap-12 items-start pt-16 sm:pt-20 pb-16">
          <PhotoBlock src={heroPlaceholder} label="Your photo here" />
          <div>

            <h1 className="text-[36px] sm:text-[48px] font-semibold text-heading mb-4">Outside of Work</h1>
            <p className="text-[16px] sm:text-[18px] italic text-body mb-5">
              Work is only one part of how I see the world — the rest, I find in quiet places, new roads, and small
              moments.
            </p>
            <p className="text-[13px] font-medium text-accent uppercase tracking-wide mb-6">
              Traveler · Reader · Moment-Catcher · Stillness-Seeker
            </p>
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-body max-w-lg">
              Outside of work, I enjoy exploring new places, reading books that challenge my perspective, and
              spending unhurried time over chai with friends. I find myself drawn to quiet places where I can slow
              down and simply be present. Those moments often become the inspiration I bring back into my work.
            </p>
          </div>
        </div>

        <StoryRow photoSrc={mountainBwPlaceholder} photoLabel="Black & white mountain photo" title="Places That Shape Me">
          <p>
            Travel has taught me more than any classroom ever could. Every destination offers a different way of
            solving problems, communicating ideas, and living life. Whether it's a Himalayan trail, a quiet beach,
            or a small town café, I enjoy observing how people interact with the world around them. Those
            experiences remind me that great products start with understanding people.
          </p>
        </StoryRow>

        <StoryRow photoSrc={mountainCollagePlaceholder} photoLabel="Mountain collage" title="Through My Lens">
          <p>
            Somewhere on a Himalayan trail, I stopped chasing the summit for a moment and just looked around. The
            mountains don't rush — they sit still, layer after layer, letting the light shift on their own time. I
            don't click pictures to collect places; I capture moments that make me pause. A quiet sunrise, light
            breaking through the peaks, mist settling over a valley, or a trail curving into silence. It's a habit
            that reminds me to slow down, notice details, and appreciate that the smallest moments often tell the
            biggest stories.
          </p>
        </StoryRow>

        <StoryRow photoSrc={beachPlaceholder} photoLabel="Beach photo" title="Quiet Places, Clear Mind">
          <p>
            Some of my favorite moments are the quiet ones — the sound of waves, a slow walk with no destination, or
            a peaceful evening over chai. These pauses help me reflect, reset, and return with fresh ideas. They've
            taught me that clarity often comes when everything else slows down.
          </p>
        </StoryRow>
      </div>
    </div>
  );
}
