"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { showreel } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";
import Sparkle from "@/components/ui/Sparkle";

/**
 * Scroll-driven sparkle reveal. Heading, star and caption are STACKED (never
 * overlapping) so text stays readable in both themes. As you scroll, the
 * star-clipped video ROTATES while it SCALES UP into its reserved space,
 * revealing a looping clip framed by a gold edge.
 * Reduced-motion / mobile: static, full-size star (no pin, no scale).
 */
export default function ShowreelReveal() {
  const section = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const clip = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    if (reduce || !isDesktop || !section.current || !stage.current) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.set(clip.current, { scale: 0.28, rotate: -160 });
      gsap.to(clip.current, {
        scale: 1,
        rotate: 0,
        ease: "none",
        scrollTrigger: {
          trigger: section.current,
          pin: stage.current,
          scrub: 1,
          start: "top top",
          end: () => "+=" + window.innerHeight * 1.5,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={section} className="relative bg-bg-2">
      {/* Normalized curved-sparkle clip path (bezier   matches the logo mark) */}
      <svg className="absolute h-0 w-0" aria-hidden="true">
        <defs>
          <clipPath id="srSparkle" clipPathUnits="objectBoundingBox">
            <path d="M.5 .02 C.52 .28 .72 .48 .98 .5 C.72 .52 .52 .72 .5 .98 C.48 .72 .28 .52 .02 .5 C.28 .48 .48 .28 .5 .02 Z" />
          </clipPath>
        </defs>
      </svg>

      <div
        ref={stage}
        className="relative flex min-h-[100svh] flex-col items-center justify-center gap-6 overflow-hidden py-24"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{ background: "var(--wash)" }}
        />

        {/* Heading (above the star, on page background) */}
        <div className="relative z-10 px-6 text-center">
          <Reveal>
            <span className="eyebrow justify-center">
              <span className="h-1 w-1 rounded-full bg-accent" />
              {showreel.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display mt-4 text-balance text-4xl font-semibold leading-[1.02] tracking-tight text-ink sm:text-5xl md:text-6xl">
              {showreel.title[0]}{" "}
              <span className="text-gradient">{showreel.title[1]}</span>
            </h2>
          </Reveal>
        </div>

        {/* Rotating + scaling sparkle-clipped video (reserves its own space) */}
        <div
          ref={clip}
          className="relative aspect-square w-[46vh] max-w-[84vw] shrink-0 will-change-transform"
        >
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: "url(#srSparkle)" }}
          >
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/media/showreel-poster.jpg"
            >
              <source src="/media/showreel.mp4" type="video/mp4" />
              <source src="/media/showreel.webm" type="video/webm" />
            </video>
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, transparent 45%, rgba(16,13,9,0.5) 100%)",
              }}
            />
            <div className="absolute inset-0 bg-accent/10 mix-blend-overlay" />
          </div>

          {/* Gold edge   same silhouette, drawn on top */}
          <Sparkle
            filled={false}
            className="absolute inset-0 h-full w-full text-accent/70 drop-shadow-[0_0_24px_var(--glow)]"
          />
        </div>

        {/* Caption (below the star, on page background) */}
        <div className="relative z-10 px-6 text-center">
          <p className="mx-auto max-w-xl text-lg leading-relaxed text-muted">
            {showreel.caption}
          </p>
        </div>
      </div>
    </section>
  );
}
