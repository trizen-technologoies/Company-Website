"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { kineticRows } from "@/lib/content";
import Sparkle from "@/components/ui/Sparkle";

/**
 * Two large text rows scrolling in opposite directions (CSS marquee),
 * that subtly speed up / skew with scroll velocity (GSAP ScrollTrigger).
 * Reduced-motion: rows sit still, no skew.
 */
export default function KineticMarquee() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray<HTMLElement>("[data-km-track]");
      const setSkew = rows.map((r) =>
        gsap.quickTo(r, "skewX", { duration: 0.5, ease: "power3.out" })
      );
      const setX = rows.map((r) =>
        gsap.quickTo(r, "x", { duration: 0.6, ease: "power3.out" })
      );

      const st = ScrollTrigger.create({
        trigger: root.current,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          const v = gsap.utils.clamp(-60, 60, self.getVelocity() / 60);
          setSkew.forEach((fn, i) => fn((i % 2 === 0 ? 1 : -1) * v * 0.12));
          setX.forEach((fn, i) => fn((i % 2 === 0 ? -1 : 1) * v));
        },
      });
      return () => st.kill();
    }, root);

    return () => ctx.revert();
  }, []);

  const Row = ({
    items,
    reverse,
    muted,
  }: {
    items: readonly string[];
    reverse?: boolean;
    muted?: boolean;
  }) => {
    const track = [...items, ...items];
    return (
      <div
        data-km-track
        className={`flex w-max items-center gap-8 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {track.map((item, i) => (
          <span
            key={i}
            className={`font-display inline-flex shrink-0 items-center gap-8 text-[clamp(1.6rem,4vw,3.2rem)] font-semibold tracking-tight ${
              muted ? "text-faint/70" : "text-ink"
            }`}
          >
            {item}
            <Sparkle className="h-5 w-5 shrink-0 text-accent" />
          </span>
        ))}
      </div>
    );
  };

  return (
    <div
      ref={root}
      className="relative overflow-hidden border-y border-line bg-fill py-10"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l from-bg to-transparent" />
      <div className="flex flex-col gap-3">
        <Row items={kineticRows.top} />
        <Row items={kineticRows.bottom} reverse muted />
      </div>
    </div>
  );
}
