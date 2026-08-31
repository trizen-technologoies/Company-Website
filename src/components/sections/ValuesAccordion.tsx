"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { aboutValues } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";
import SplitReveal from "@/components/ui/SplitReveal";

/**
 * Core Values as a horizontal image accordion. Panels show just their image
 * by default; hovering one enlarges it and reveals tags + title + copy. Each
 * panel carries its own fixed dark scrim, so the white text is readable on
 * BOTH light and dark site themes. On mobile the panels stack (tap to open).
 */
export default function ValuesAccordion() {
  const items = aboutValues.items;
  const [active, setActive] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const on = () => setIsDesktop(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);

  return (
    <section className="section overflow-hidden">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="eyebrow justify-center">
              <span className="h-1 w-1 rounded-full bg-accent" />
              {aboutValues.eyebrow}
            </span>
          </Reveal>
          <h2 className="font-display mt-4 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            {aboutValues.heading.map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <SplitReveal
                  text={line}
                  delay={i * 0.08}
                  className={i === aboutValues.heading.length - 1 ? "text-gradient" : ""}
                />
              </span>
            ))}
          </h2>
        </div>

        <Reveal
          as="div"
          className="mt-14 flex flex-col gap-3 md:h-[26rem] md:flex-row"
        >
          <div
            className="flex flex-col gap-3 md:h-full md:w-full md:flex-row"
            onMouseLeave={() => isDesktop && setActive(0)}
          >
            {items.map((it, i) => {
              const isActive = active === i;
              return (
                <article
                  key={it.title}
                  onMouseEnter={() => isDesktop && setActive(i)}
                  onClick={() => setActive(i)}
                  className="group relative h-60 min-w-0 cursor-pointer overflow-hidden rounded-3xl ring-1 ring-line transition-[flex-grow] duration-500 md:h-full"
                  style={isDesktop ? { flexGrow: isActive ? 4 : 1, flexBasis: 0 } : undefined}
                >
                  <Image
                    src={it.image}
                    alt={it.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Fixed dark scrim (theme-independent) + warm tint */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/5" />
                  <div className="absolute inset-0 bg-accent/10 mix-blend-overlay" />

                  {/* Expanded content */}
                  <div
                    className="absolute inset-0 flex flex-col justify-end p-7 transition-opacity duration-500"
                    style={{ opacity: !isDesktop || isActive ? 1 : 0 }}
                  >
                    <div className="mb-3 flex flex-wrap gap-2">
                      {it.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-white">
                      {it.title}
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-white/80">
                      {it.desc}
                    </p>
                  </div>

                  {/* Collapsed vertical label (desktop, inactive) */}
                  <div
                    className="pointer-events-none absolute inset-0 hidden items-end justify-center pb-7 transition-opacity duration-500 md:flex"
                    style={{ opacity: isDesktop && !isActive ? 1 : 0 }}
                  >
                    <span className="font-display rotate-180 text-lg font-semibold tracking-wide text-white [writing-mode:vertical-rl]">
                      {it.title}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
