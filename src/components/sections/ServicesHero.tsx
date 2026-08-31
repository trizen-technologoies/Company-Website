"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown, PhoneCall } from "lucide-react";
import { gsap } from "gsap";
import { servicesHero } from "@/lib/content";
import MagneticButton from "@/components/ui/MagneticButton";
import Sparkle from "@/components/ui/Sparkle";

/** Floating tag positions (desktop)   [top, left] as %, with parallax depth. */
const TAG_POS = [
  { top: "20%", left: "10%", depth: -30 },
  { top: "30%", left: "82%", depth: 34 },
  { top: "62%", left: "14%", depth: 26 },
  { top: "70%", left: "80%", depth: -22 },
  { top: "14%", left: "40%", depth: 18 },
  { top: "86%", left: "22%", depth: -16 },
  { top: "40%", left: "91%", depth: 22 },
];

/**
 * Premium full-screen Services hero. The keyword in "Full-spectrum ___ services."
 * rotates through the disciplines (blur-slide transition); warm aurora blobs,
 * grain and floating service tags parallax with the cursor. Reduced-motion:
 * first word only, no parallax.
 */
export default function ServicesHero() {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const words = servicesHero.words;

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const id = setInterval(
      () => setActive((a) => (a + 1) % words.length),
      3200
    );

    const onMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;
      gsap.to("[data-parallax]", {
        x: (i, el) => dx * (Number((el as HTMLElement).dataset.depth) || 10),
        y: (i, el) => dy * (Number((el as HTMLElement).dataset.depth) || 10),
        duration: 0.9,
        ease: "power2.out",
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      clearInterval(id);
      window.removeEventListener("mousemove", onMove);
    };
  }, [words.length]);

  return (
    <section
      ref={root}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden pt-20 pb-16"
    >
      {/* Full-bleed amber-graded video + dark scrims (readable in both themes) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/media/services-hero-poster.jpg"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/media/services-hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/55" />
      <div className="absolute inset-0 bg-accent/10 mix-blend-overlay" />
      <div className="noise pointer-events-none absolute inset-0 opacity-40" />

      {/* Floating service tags (desktop) */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        {servicesHero.tags.map((t, i) => {
          const p = TAG_POS[i % TAG_POS.length];
          return (
            <span
              key={t}
              data-parallax
              data-depth={p.depth}
              className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur"
              style={{ top: p.top, left: p.left }}
            >
              {t}
            </span>
          );
        })}
      </div>

      {/* Content */}
      <div className="container-x relative z-10 text-center">
        <div className="mx-auto mb-6 w-fit">
          <Sparkle className="mx-auto h-8 w-8 animate-breathe text-accent" />
        </div>
        <span className="eyebrow justify-center" style={{ color: "var(--accent-3)" }}>
          <span className="h-1 w-1 rounded-full bg-accent" />
          {servicesHero.eyebrow}
        </span>

        <h1 className="font-display mx-auto mt-5 max-w-4xl text-balance text-[clamp(2.6rem,7vw,5.5rem)] font-semibold leading-[0.98] tracking-[-0.02em] text-white">
          <span className="block">{servicesHero.prefix}</span>
          <span className="relative block py-1">
            <span
              key={active}
              className="rotator-word"
              style={{
                background: "linear-gradient(100deg, var(--accent), var(--accent-3) 55%, var(--accent-2))",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              {words[active]}
            </span>{" "}
            <span className="text-white">{servicesHero.suffix}</span>
          </span>
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-white/80">
          {servicesHero.subtitle}
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton href={servicesHero.primary.href}>
            {servicesHero.primary.label}
            <ArrowDown className="h-4 w-4" />
          </MagneticButton>
          <MagneticButton href={servicesHero.secondary.href} variant="ghost">
            <PhoneCall className="h-4 w-4" />
            {servicesHero.secondary.label}
          </MagneticButton>
        </div>
      </div>

    </section>
  );
}
