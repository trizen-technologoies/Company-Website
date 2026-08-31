"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { homeProcess } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";
import SplitReveal from "@/components/ui/SplitReveal";

/**
 * "How we work"   a four-step engagement timeline. A connecting line draws
 * across (desktop) / down (mobile) as the section scrolls in, while each
 * numbered step reveals in sequence. Reduced-motion: line pre-drawn, steps
 * visible (Reveal handles its own fallback).
 */
export default function HowWeWork() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !root.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-hww-line]",
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          transformOrigin: "left center",
          scrollTrigger: {
            trigger: "[data-hww-grid]",
            start: "top 85%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );
      gsap.fromTo(
        "[data-hww-node]",
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
          stagger: 0.15,
          scrollTrigger: { trigger: "[data-hww-grid]", start: "top 72%", once: true },
        }
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="section">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="eyebrow justify-center">
              <span className="h-1 w-1 rounded-full bg-accent" />
              {homeProcess.eyebrow}
            </span>
          </Reveal>
          <h2 className="font-display mt-4 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl">
            {homeProcess.heading.map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <SplitReveal
                  text={line}
                  delay={i * 0.08}
                  className={i === homeProcess.heading.length - 1 ? "text-gradient" : ""}
                />
              </span>
            ))}
          </h2>
          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
              {homeProcess.sub}
            </p>
          </Reveal>
        </div>

        <div data-hww-grid className="relative mt-16">
          {/* Connecting line (horizontal on desktop) */}
          <div className="absolute left-8 right-8 top-8 hidden h-px overflow-hidden lg:block">
            <div className="h-px w-full bg-line-strong opacity-40" />
            <div
              data-hww-line
              className="absolute inset-0 h-px bg-gradient-to-r from-accent via-accent-2 to-accent-3"
            />
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {homeProcess.steps.map((s) => (
              <div key={s.n} className="relative">
                <span
                  data-hww-node
                  className="font-display relative z-10 grid h-16 w-16 place-items-center rounded-2xl border border-line bg-surface text-2xl font-semibold text-gradient shadow-[0_10px_30px_-12px_var(--glow)]"
                >
                  {s.n}
                </span>
                <Reveal delay={80}>
                  <h3 className="font-display mt-6 text-xl font-semibold text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">{s.desc}</p>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
