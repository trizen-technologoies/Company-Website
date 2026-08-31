"use client";

import { useEffect, useRef, type ReactNode } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type ShrinkHeroProps = {
  /** Image path (in /public) or remote URL configured in next.config. */
  src: string;
  alt: string;
  /** Final scale the image shrinks to (1 = full-bleed). Default 0.68. */
  targetScale?: number;
  /** Corner radius (px) at the end of the shrink. Default 34 (reads ~24px after scale). */
  endRadius?: number;
  /**
   * How much scroll the animation consumes, as a % of viewport height.
   * 120 = the shrink scrubs across ~120vh of scrolling. Default 120.
   */
  scrollDistance?: number;
  /** Optional overlay content (headline, caption) laid over the image. */
  children?: ReactNode;
};

/**
 * Scroll-driven "shrinking hero image".
 *
 * On load the image is full-bleed (100% width, sharp corners) directly under
 * the nav. As you scroll, a pinned ScrollTrigger timeline (scrub: true) scales
 * it down toward `targetScale`, grows the corner radius, and fades in a margin
 * of page background around it   then releases and scrolls on normally.
 *
 * Perf: only `transform: scale()` and `border-radius` are animated (never
 * width/height), with `will-change: transform`. Honors prefers-reduced-motion.
 */
export default function ShrinkHero({
  src,
  alt,
  targetScale = 0.68,
  endRadius = 34,
  scrollDistance = 120,
  children,
}: ShrinkHeroProps) {
  const root = useRef<HTMLDivElement>(null);
  const pin = useRef<HTMLDivElement>(null);
  const frame = useRef<HTMLDivElement>(null);
  const overlay = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Reduced motion: land on the final resting state, no scroll animation.
      if (reduce) {
        gsap.set(frame.current, { scale: targetScale, borderRadius: endRadius });
        return;
      }

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: `+=${scrollDistance}%`,
          scrub: true,
          pin: pin.current,
          pinSpacing: true,
          anticipatePin: 1,
          // invalidateOnRefresh keeps values correct across resizes
          invalidateOnRefresh: true,
        },
      });

      tl.to(frame.current, { scale: targetScale, borderRadius: endRadius }, 0);

      // Optional: gently fade/scale the overlay text out as the image shrinks.
      if (overlay.current) {
        tl.to(overlay.current, { autoAlpha: 0, y: -24 }, 0);
      }
    }, root);

    // Recalculate once fonts/images settle so the pin measures correctly.
    const refresh = () => ScrollTrigger.refresh();
    const t = setTimeout(refresh, 300);
    window.addEventListener("load", refresh);

    return () => {
      clearTimeout(t);
      window.removeEventListener("load", refresh);
      ctx.revert();
    };
  }, [targetScale, endRadius, scrollDistance]);

  return (
    <section ref={root} className="relative">
      {/* Pinned viewport-sized stage */}
      <div
        ref={pin}
        className="relative flex h-[100svh] w-full items-center justify-center overflow-hidden"
      >
        {/* The frame is what scales + rounds. It starts full-bleed. */}
        <div
          ref={frame}
          className="absolute inset-0 origin-center overflow-hidden rounded-none will-change-transform"
          style={{ transformOrigin: "center center" }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          {/* Legibility scrim (only meaningful when children are provided) */}
          {children && (
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/70 via-void/20 to-transparent" />
          )}

          {/* Overlay content (headline / caption) */}
          {children && (
            <div
              ref={overlay}
              className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center"
            >
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
