"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, PlayCircle, Phone, Mail, MessageCircle } from "lucide-react";
import { gsap } from "gsap";
import { Linkedin } from "@/components/ui/SocialIcons";
import { product } from "@/lib/content";
import SplitReveal from "@/components/ui/SplitReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import Counter from "@/components/ui/Counter";

/**
 * Premium full-screen AI SDR hero   copy on the left, floating "live" product
 * cards on the right that assemble on load and parallax with the cursor.
 * Reduced-motion: everything static and visible.
 */
export default function ProductHero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      if (!reduce) {
        gsap.set("[data-ph-card]", { opacity: 0, y: 40, scale: 0.96 });
        gsap.to("[data-ph-card]", {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: "expo.out",
          stagger: 0.14,
          delay: 0.3,
        });

        const onMove = (e: MouseEvent) => {
          const dx = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
          const dy = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
          gsap.to("[data-parallax]", {
            x: (i, el) => dx * (Number((el as HTMLElement).dataset.depth) || 10),
            y: (i, el) => dy * (Number((el as HTMLElement).dataset.depth) || 10),
            duration: 0.9,
            ease: "power2.out",
          });
        };
        window.addEventListener("mousemove", onMove);
        return () => window.removeEventListener("mousemove", onMove);
      } else {
        gsap.set("[data-ph-card]", { opacity: 1, y: 0, scale: 1 });
      }
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="force-dark relative flex min-h-[100svh] items-center overflow-hidden pt-20 pb-8 text-ink"
    >
      {/* Full-bleed video + dark scrims (always reads as dark mode) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/media/svc-ai-poster.jpg"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/media/svc-ai.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/55" />
      <div className="absolute inset-0 bg-accent/10 mix-blend-overlay" />
      <div className="noise pointer-events-none absolute inset-0 opacity-40" />

      <div className="container-x relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Copy */}
          <div className="lg:col-span-6">
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-accent-bright">
              <Sparkles className="h-3.5 w-3.5" />
              {product.badge}
            </span>

            <h1 className="font-display mt-5 max-w-xl text-balance text-[clamp(2.2rem,4.8vw,3.6rem)] font-semibold leading-[1.0] tracking-[-0.02em] text-white">
              <SplitReveal text={product.title} immediate delay={0.12} />
            </h1>
            <p className="mt-4 max-w-lg text-lg font-medium text-gradient">
              {product.tagline}
            </p>
            <p className="mt-3 max-w-lg leading-relaxed text-muted">{product.desc}</p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <MagneticButton href="#demo">
                Request a demo <ArrowRight className="h-4 w-4" />
              </MagneticButton>
              <MagneticButton href="#channels" variant="ghost">
                <PlayCircle className="h-4 w-4" /> See how it works
              </MagneticButton>
            </div>

            <div className="mt-6 flex flex-wrap gap-8">
              {product.metrics.map((m) => (
                <div key={m.label}>
                  <div className="font-display text-3xl font-semibold text-gradient">
                    {m.value}
                  </div>
                  <div className="mt-1 text-sm text-muted">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating live cards */}
          <div className="relative hidden h-[440px] lg:col-span-6 lg:block">
            {/* Live call */}
            <div
              data-ph-card
              data-parallax
              data-depth="16"
              className="glass absolute right-0 top-0 w-72 rounded-3xl p-5"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-xs font-medium text-muted">
                  <Phone className="h-3.5 w-3.5 text-accent" /> AI Calling · Live
                </span>
                <span className="h-2 w-2 animate-pulse-glow rounded-full bg-emerald-400" />
              </div>
              <p className="mt-4 text-sm font-medium text-ink">Handling objection…</p>
              <div className="mt-4 flex items-end gap-1">
                {[30, 55, 40, 70, 90, 60, 80, 45, 65, 50].map((h, i) => (
                  <span
                    key={i}
                    className="w-1.5 rounded-full bg-gradient-to-t from-accent/40 to-accent-2"
                    style={{ height: `${h}%`, animation: `phBar 1.1s ${i * 0.08}s ease-in-out infinite alternate` }}
                  />
                ))}
              </div>
            </div>

            {/* Meetings booked */}
            <div
              data-ph-card
              data-parallax
              data-depth="30"
              className="glass absolute left-0 top-36 w-64 rounded-3xl p-5"
            >
              <div className="text-xs text-muted">Meetings booked · this month</div>
              <div className="mt-2 font-display text-4xl font-semibold text-ink">
                <Counter value={128} /> <span className="text-lg text-muted">/ auto</span>
              </div>
              <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-fill-2">
                <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-accent to-accent-3" />
              </div>
              <p className="mt-2 text-xs text-muted">On autopilot, across every channel</p>
            </div>

            {/* Channels active */}
            <div
              data-ph-card
              data-parallax
              data-depth="12"
              className="glass absolute bottom-0 right-4 w-64 rounded-3xl p-5"
            >
              <div className="text-xs text-muted">Active channels · 24/7</div>
              <div className="mt-4 flex items-center gap-3">
                {[Phone, Mail, MessageCircle, Linkedin].map((Icon, i) => (
                  <span
                    key={i}
                    className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-accent to-accent-2 text-[var(--accent-contrast)]"
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                ))}
              </div>
              <p className="mt-3 text-xs text-muted">Voice · Email · WhatsApp · LinkedIn</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes phBar { from { transform: scaleY(0.55); } to { transform: scaleY(1); } }
        @media (prefers-reduced-motion: reduce) {
          [style*="phBar"] { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
