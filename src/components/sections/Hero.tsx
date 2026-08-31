"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { Sparkles, ArrowRight, PlayCircle } from "lucide-react";
import { hero } from "@/lib/content";
import HeroCanvas from "@/components/ui/HeroCanvas";
import MagneticButton from "@/components/ui/MagneticButton";
import Counter from "@/components/ui/Counter";

export default function Hero() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      if (!reduce) {
        gsap.set("[data-hero-line] span", { yPercent: 120 });
        const tl = gsap.timeline({ delay: 0.15 });
        tl.to("[data-hero-badge]", { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
          .to(
            "[data-hero-line] span",
            {
              yPercent: 0,
              duration: 1.1,
              ease: "expo.out",
              stagger: 0.12,
            },
            "-=0.4"
          )
          .to(
            "[data-hero-fade]",
            { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", stagger: 0.12 },
            "-=0.7"
          )
          .to(
            "[data-hero-card]",
            { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: "expo.out", stagger: 0.12 },
            "-=0.6"
          );
      } else {
        gsap.set(
          "[data-hero-badge], [data-hero-line] span, [data-hero-fade], [data-hero-card]",
          { opacity: 1, y: 0, yPercent: 0, scale: 1 }
        );
      }

      // Mouse parallax on floating layers
      if (!reduce) {
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
        return () => window.removeEventListener("mousemove", onMove);
      }
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-20 pb-12"
    >
      {/* Fallback image behind canvas (also mobile-friendly) */}
      <Image
        src="/media/hero-fallback.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="hero-media object-cover"
      />

      {/* Cinematic layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-void/60 via-bg/70 to-bg" />
      <div className="grid-bg absolute inset-0" />
      <HeroCanvas />
      <div
        data-parallax
        data-depth="-28"
        className="blob left-[8%] top-[18%] h-[380px] w-[380px] bg-blue/25"
      />
      <div
        data-parallax
        data-depth="24"
        className="blob right-[6%] top-[30%] h-[440px] w-[440px] bg-violet/25"
      />
      <div className="blob left-1/2 bottom-[-10%] h-[360px] w-[680px] -translate-x-1/2 bg-cyan/10" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg to-transparent" />

      <div className="container-x relative z-10 w-full">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          {/* Left: copy */}
          <div className="lg:col-span-7">
            <div
              data-hero-badge
              className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-mist opacity-0"
              style={{ transform: "translateY(16px)" }}
            >
              <Sparkles className="h-3.5 w-3.5 text-cyan" />
              {hero.badge}
              <span className="ml-1 h-1.5 w-1.5 animate-pulse-glow rounded-full bg-cyan" />
            </div>

            <h1 className="font-display mt-5 text-balance text-[clamp(1.9rem,4.2vw,3.6rem)] font-semibold leading-[0.98] tracking-[-0.02em]">
              {hero.titleLines.map((line, i) => (
                <span
                  key={i}
                  data-hero-line
                  className="block overflow-hidden"
                >
                  <span
                    className={
                      i === hero.titleLines.length - 1
                        ? "block text-gradient"
                        : "block text-ink"
                    }
                  >
                    {line}
                  </span>
                </span>
              ))}
            </h1>

            <p
              data-hero-fade
              className="mt-5 max-w-2xl text-base leading-relaxed text-mist opacity-0"
              style={{ transform: "translateY(20px)" }}
            >
              {hero.lead}
            </p>

            <div
              data-hero-fade
              className="mt-7 flex flex-wrap items-center gap-4 opacity-0"
              style={{ transform: "translateY(20px)" }}
            >
              <MagneticButton href={hero.primary.href}>
                {hero.primary.label}
                <ArrowRight className="h-4 w-4" />
              </MagneticButton>
              <MagneticButton href={hero.secondary.href} variant="ghost">
                <PlayCircle className="h-4 w-4" />
                {hero.secondary.label}
              </MagneticButton>
            </div>
          </div>

          {/* Right: floating glass cards */}
          <div className="relative hidden h-[520px] lg:col-span-5 lg:block">
            <FloatingCards />
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingCards() {
  return (
    <>
      <div
        data-hero-card
        data-parallax
        data-depth="18"
        className="glass absolute right-0 top-2 w-64 rounded-3xl p-5 opacity-0"
        style={{ transform: "translateY(30px) scale(0.96)" }}
      >
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-muted">AI SDR · Live</span>
          <span className="h-2 w-2 animate-pulse-glow rounded-full bg-emerald-400" />
        </div>
        <div className="mt-4 font-display text-4xl font-semibold text-ink">
          <Counter value={128} suffix="" /> <span className="text-lg text-muted">meetings</span>
        </div>
        <p className="mt-1 text-xs text-muted">booked this month · on autopilot</p>
        <div className="mt-4 flex items-end gap-1.5">
          {[40, 65, 50, 80, 70, 95, 60].map((h, i) => (
            <span
              key={i}
              className="flex-1 rounded-t bg-gradient-to-t from-blue/40 to-violet"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>

      <div
        data-hero-card
        data-parallax
        data-depth="34"
        className="glass absolute left-0 top-40 w-60 rounded-3xl p-5 opacity-0"
        style={{ transform: "translateY(30px) scale(0.96)" }}
      >
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-blue to-violet">
            <Sparkles className="h-5 w-5 text-[var(--accent-contrast)]" />
          </span>
          <div>
            <div className="text-sm font-medium text-ink">Neural Engine</div>
            <div className="text-xs text-muted">Reasoning · online</div>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          {["Analyzing intent", "Personalizing reply", "Scheduling call"].map(
            (t, i) => (
              <div key={t} className="flex items-center gap-2 text-xs text-mist">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-cyan"
                  style={{ opacity: 1 - i * 0.25 }}
                />
                {t}
              </div>
            )
          )}
        </div>
      </div>

      <div
        data-hero-card
        data-parallax
        data-depth="12"
        className="glass absolute bottom-4 right-6 w-52 rounded-3xl p-5 opacity-0"
        style={{ transform: "translateY(30px) scale(0.96)" }}
      >
        <div className="text-xs text-muted">Response rate</div>
        <div className="mt-1 font-display text-3xl font-semibold text-gradient">
          +312%
        </div>
        <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-fill-2">
          <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-blue to-cyan" />
        </div>
      </div>
    </>
  );
}
