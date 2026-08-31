"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials, testimonialsIntro } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";
import SplitReveal from "@/components/ui/SplitReveal";

/**
 * Auto-advancing testimonial carousel with crossfade. Pauses on hover,
 * dots to jump. Reduced-motion still works (instant swap, manual dots).
 */
export default function Testimonials() {
  const [i, setI] = useState(0);
  const paused = useRef(false);
  const n = testimonials.length;

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || n <= 1) return;
    const id = setInterval(() => {
      if (!paused.current) setI((v) => (v + 1) % n);
    }, 5200);
    return () => clearInterval(id);
  }, [n]);

  const prev = () => setI((v) => (v - 1 + n) % n);
  const next = () => setI((v) => (v + 1) % n);

  return (
    <section className="section overflow-hidden">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="eyebrow justify-center">
              <span className="h-1 w-1 rounded-full bg-accent" />
              {testimonialsIntro.eyebrow}
            </span>
          </Reveal>
          <h2 className="font-display mt-4 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl">
            {testimonialsIntro.heading.map((line, li) => (
              <span key={li} className="block overflow-hidden">
                <SplitReveal
                  text={line}
                  delay={li * 0.08}
                  className={li === testimonialsIntro.heading.length - 1 ? "text-gradient" : ""}
                />
              </span>
            ))}
          </h2>
        </div>

        <div
          className="relative mx-auto mt-14 max-w-3xl"
          onMouseEnter={() => (paused.current = true)}
          onMouseLeave={() => (paused.current = false)}
        >
          <div className="card card-glow p-8 sm:p-12">
            <Quote className="h-9 w-9 text-accent/40" />
            <div className="relative mt-7 grid sm:mt-8">
              {testimonials.map((item, idx) => (
                <blockquote
                  key={idx}
                  aria-hidden={idx !== i}
                  className="col-start-1 row-start-1 transition-opacity duration-700"
                  style={{ opacity: idx === i ? 1 : 0, pointerEvents: idx === i ? "auto" : "none" }}
                >
                  <p className="font-display text-xl font-medium leading-relaxed text-ink sm:text-2xl">
                    “{item.quote}”
                  </p>
                  <footer className="mt-7 flex items-center gap-4">
                    <span className="relative h-12 w-12 overflow-hidden rounded-full ring-1 ring-line">
                      <Image src={item.avatar} alt={item.name} fill sizes="48px" className="object-cover" />
                    </span>
                    <span>
                      <span className="block font-semibold text-ink">{item.name}</span>
                      <span className="block text-sm text-muted">{item.role}</span>
                    </span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>

          {/* Controls: prev arrow · dots · next arrow (only needed with 2+ testimonials) */}
          {n > 1 && (
            <div className="mt-8 flex items-center justify-center gap-5">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={prev}
                className="grid h-10 w-10 place-items-center rounded-full border border-line bg-fill text-muted transition-all hover:-translate-x-0.5 hover:border-line-strong hover:text-ink"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-2.5">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    aria-label={`Show testimonial ${idx + 1}`}
                    onClick={() => setI(idx)}
                    className="h-2 rounded-full transition-all duration-300"
                    style={{
                      width: idx === i ? 28 : 8,
                      background: idx === i ? "var(--accent)" : "var(--line-strong)",
                    }}
                  />
                ))}
              </div>

              <button
                type="button"
                aria-label="Next testimonial"
                onClick={next}
                className="grid h-10 w-10 place-items-center rounded-full border border-line bg-fill text-muted transition-all hover:translate-x-0.5 hover:border-line-strong hover:text-ink"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
