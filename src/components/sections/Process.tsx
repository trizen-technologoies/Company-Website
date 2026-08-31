"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { product } from "@/lib/content";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

/**
 * Four-step process timeline. A connecting line draws across as the section
 * scrolls in (same choreography as the homepage's HowWeWork), while each
 * numbered step pops in. Reduced-motion: line pre-drawn, steps visible.
 */
export default function Process() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !root.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-proc-line]",
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          transformOrigin: "left center",
          scrollTrigger: {
            trigger: "[data-proc-grid]",
            start: "top 85%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );
      gsap.fromTo(
        "[data-proc-node]",
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
          stagger: 0.15,
          scrollTrigger: { trigger: "[data-proc-grid]", start: "top 72%", once: true },
        }
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="How It Works"
          title={
            <>
              From leads to meetings  {" "}
              <span className="text-gradient">automatically</span>
            </>
          }
        />

        <div data-proc-grid className="relative mt-16">
          {/* Connecting line (horizontal on desktop) */}
          <div className="absolute left-8 right-8 top-9 hidden h-px overflow-hidden lg:block">
            <div className="h-px w-full bg-line-strong opacity-40" />
            <div
              data-proc-line
              className="absolute inset-0 h-px bg-gradient-to-r from-accent via-accent-2 to-accent-3"
            />
          </div>

          <div className="grid gap-8 lg:grid-cols-4">
            {product.steps.map((s) => (
              <div key={s.n} className="relative">
                <span
                  data-proc-node
                  className="font-display relative z-10 grid h-16 w-16 place-items-center rounded-2xl border border-line bg-surface text-2xl font-semibold text-gradient shadow-[0_10px_30px_-12px_var(--glow)]"
                >
                  {s.n}
                </span>
                <Reveal delay={80}>
                  <h3 className="font-display mt-6 text-lg font-semibold text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">
                    {s.desc}
                  </p>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
