"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Oversized "Trizen" wordmark that fills gold left→right AS YOU SCROLL.
 * Performance: two stacked layers keep the gradient static (rasterized once);
 * the reveal is a cheap clip-path inset driven by scroll. The container is
 * promoted to its own compositor layer and `contain: paint` confines repaints
 * to the wordmark, so scrubbing no longer re-rasterizes the footer's blurred
 * glow / noise overlay (which was the source of the scroll jank).
 * Reduced-motion: fully revealed instantly.
 *
 * The footer lives in the root layout, so it never unmounts on client-side
 * navigation - only `pathname` changes. Re-running this effect per route
 * (instead of once on initial mount) rebuilds the ScrollTrigger against the
 * new page's height and resets the CSS var up front, so the wordmark can't
 * get stuck showing the previous page's fully-revealed state.
 */
export default function FooterWordmark() {
  const ref = useRef<HTMLDivElement>(null);
  const gold = useRef<HTMLSpanElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const el = ref.current;
    const g = gold.current;
    if (!el || !g) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      g.style.setProperty("--rv", "0");
      return;
    }

    // Reset immediately so a route change never shows a stale, fully-gilded
    // wordmark before the scroll-linked ScrollTrigger below re-evaluates.
    g.style.setProperty("--rv", "100");

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        g,
        { ["--rv" as string]: 100 },
        {
          ["--rv" as string]: 0,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top bottom", end: "top center", scrub: 0.8 },
        }
      );
      // Positions/current scroll may still be settling right after navigation;
      // force a recompute once layout has had a frame to catch up.
      requestAnimationFrame(() => ScrollTrigger.refresh());
    }, el);
    return () => ctx.revert();
  }, [pathname]);

  const wordClass =
    "font-display text-[19vw] font-bold leading-[0.85] tracking-tight";

  return (
    <div ref={ref} className="select-none text-center" aria-hidden="true">
      {/* Own compositor layer + paint containment isolates the scrub repaint */}
      <div
        className="relative inline-block"
        style={{
          contain: "paint",
          isolation: "isolate",
          transform: "translateZ(0)",
        }}
      >
        {/* Faint base (visible enough that the gold fill clearly reads as a sweep) */}
        <span className={`block text-faint/70 ${wordClass}`}>Trizen</span>
        {/* Gold layer   static gradient, revealed by clip-path on scroll */}
        <span
          ref={gold}
          className={`absolute inset-0 block ${wordClass}`}
          style={{
            ["--rv" as string]: 100,
            clipPath: "inset(0 calc(var(--rv) * 1%) 0 0)",
            WebkitClipPath: "inset(0 calc(var(--rv) * 1%) 0 0)",
            background:
              "linear-gradient(90deg, var(--accent), var(--accent-3) 55%, var(--accent-2))",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            willChange: "clip-path",
          }}
        >
          Trizen
        </span>
      </div>
      <div className="font-display mt-3 pl-[0.4em] text-[clamp(0.7rem,2.4vw,2rem)] font-medium uppercase tracking-[0.4em] text-muted">
        Technologies
      </div>
    </div>
  );
}
