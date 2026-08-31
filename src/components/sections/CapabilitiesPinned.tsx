"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { capabilityGallery } from "@/lib/content";

/** Warm accent per capability   reads on both light + dark. */
const ACCENTS = ["#c6892c", "#a85221", "#cf9836", "#b5701f", "#9c6414", "#d0a24a"];

/**
 * Pinned horizontal storyboard. As you scroll, capability panels slide
 * across a fixed ghost word; a right-side rail tracks progress and the
 * section accent shifts per panel. Reduced-motion / small screens fall
 * back to a simple stacked grid (no pinning).
 */
export default function CapabilitiesPinned() {
  const section = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const items = capabilityGallery;
  const n = items.length;

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    if (reduce || !isDesktop || !section.current || !stage.current) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>("[data-cap-panel]");

      gsap.to(panels, {
        xPercent: -100 * (n - 1),
        ease: "none",
        scrollTrigger: {
          trigger: section.current,
          pin: stage.current,
          scrub: 1,
          snap: {
            snapTo: 1 / (n - 1),
            duration: 0.35,
            ease: "power1.inOut",
          },
          start: "top top+=56",
          end: () => "+=" + window.innerHeight * (n - 1),
          onUpdate: (self) => {
            const idx = Math.round(self.progress * (n - 1));
            setActive(idx);
            stage.current?.style.setProperty("--section-accent", ACCENTS[idx % ACCENTS.length]);
          },
        },
      });
    }, section);

    return () => ctx.revert();
  }, [n]);

  return (
    <section ref={section} id="capabilities" className="relative">
      {/* Pinned stage (desktop). On mobile this simply renders tall. */}
      <div
        ref={stage}
        className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden py-20 lg:h-[calc(100svh-3.5rem)] lg:py-0"
        style={{ ["--section-accent" as string]: ACCENTS[0] }}
      >
        {/* Warm wash */}
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{ background: "var(--wash)" }}
        />

        {/* Header */}
        <div className="container-x relative z-20 lg:absolute lg:left-1/2 lg:top-5 lg:-translate-x-1/2">
          <span className="eyebrow">
            <span className="h-1 w-1 rounded-full accent-dot" />
            What we do
          </span>
        </div>

        {/* Ghost word (desktop only) */}
        <div className="pointer-events-none absolute inset-0 z-0 hidden items-center justify-center lg:flex">
          {items.map((it, i) => (
            <h2
              key={it.id}
              aria-hidden={i !== active}
              className="font-display absolute whitespace-nowrap text-center text-[13vw] font-bold leading-none tracking-tight text-faint/25 transition-opacity duration-500"
              style={{ opacity: i === active ? 1 : 0 }}
            >
              {it.label}
            </h2>
          ))}
        </div>

        {/* Panels: horizontal on desktop, stacked on mobile */}
        <div className="relative z-10 flex flex-col lg:h-full lg:flex-row lg:flex-nowrap">
          {items.map((it, i) => (
            <article
              key={it.id}
              data-cap-panel
              className="flex w-full shrink-0 items-center px-6 py-10 lg:h-full lg:w-screen lg:px-0"
            >
              <div className="container-x grid w-full items-center gap-8 md:grid-cols-2">
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl ring-1 ring-line">
                  <Image
                    src={it.image}
                    alt={it.label}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/50 via-transparent to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full border border-line-strong bg-void/50 px-3 py-1 text-xs font-medium text-mist backdrop-blur">
                    {String(i + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
                  </span>
                </div>

                <div className="md:pl-4">
                  <span
                    className="text-sm font-semibold uppercase tracking-[0.2em] accent-text"
                    style={{ ["--section-accent" as string]: ACCENTS[i % ACCENTS.length] }}
                  >
                    Capability {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display mt-4 text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
                    {it.label}
                  </h3>
                  <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">
                    {it.line}
                  </p>
                  <Link
                    href={`/services/${it.id}`}
                    data-cursor="hover"
                    className="btn btn-ghost mt-7 px-6 py-3"
                  >
                    Explore <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Progress rail (desktop) */}
        <div className="absolute right-6 top-1/2 z-20 hidden -translate-y-1/2 flex-col items-center gap-4 lg:flex">
          {items.map((it, i) => (
            <div key={it.id} className="flex items-center gap-3">
              <span
                className={`text-xs font-medium tabular-nums transition-all duration-300 ${
                  i === active ? "accent-text" : "text-faint"
                }`}
                style={i === active ? { ["--section-accent" as string]: ACCENTS[i % ACCENTS.length] } : undefined}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className="h-px rounded-full transition-all duration-300"
                style={{
                  width: i === active ? 40 : 18,
                  background: i === active ? ACCENTS[i % ACCENTS.length] : "var(--line-strong)",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
