"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Brain, Rocket, TrendingUp } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { whyUs } from "@/lib/content";

const icons = [Brain, Rocket, TrendingUp];

/**
 * "Why Trizen" feature section.
 * Two-column on desktop, single column on mobile.
 * Scroll-triggered GSAP animations (run once):
 *  - image fades + scales 0.9 -> 1
 *  - eyebrow + heading fade + slide up, staggered after the image
 *  - the 3 feature items fade + slide up with a 0.15s stagger
 */
export default function WhyUs() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (reduce) {
        gsap.set("[data-wt-image], [data-wt-head], [data-wt-item]", {
          opacity: 1,
          y: 0,
          scale: 1,
        });
        return;
      }

      // Image: fade + scale up
      gsap.fromTo(
        "[data-wt-image]",
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: { trigger: "[data-wt-image]", start: "top 82%", once: true },
        }
      );

      // Eyebrow + heading: slide up, slightly staggered after the image
      gsap.fromTo(
        "[data-wt-head]",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.12,
          delay: 0.15,
          scrollTrigger: { trigger: root.current, start: "top 68%", once: true },
        }
      );

      // Feature items: staggered slide up
      gsap.fromTo(
        "[data-wt-item]",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: { trigger: "[data-wt-list]", start: "top 82%", once: true },
        }
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="section overflow-hidden">
      <div className="container-x">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left: image + floating logo badge */}
          <div data-wt-image className="relative opacity-0">
            <div className="relative aspect-[5/6] overflow-hidden rounded-3xl ring-1 ring-line">
              <Image
                src="/media/enterprise-team.webp"
                alt="Trizen team celebrating a successful delivery"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/60 via-transparent to-transparent" />
            </div>
          </div>

          {/* Right: copy */}
          <div>
            <span data-wt-head className="eyebrow opacity-0">
              <span className="h-1 w-1 rounded-full bg-accent" />
              Why Trizen
            </span>

            <h2
              data-wt-head
              className="font-display mt-4 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-ink opacity-0 sm:text-5xl"
            >
              Built for the <span className="text-gradient">AI era</span>
            </h2>

            <ul data-wt-list className="mt-10 space-y-8">
              {whyUs.map((w, i) => {
                const Icon = icons[i] ?? Brain;
                return (
                  <li key={w.title} data-wt-item className="flex gap-5 opacity-0">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-line bg-fill text-accent">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-ink">
                        {w.title}
                      </h3>
                      <p className="mt-1.5 leading-relaxed text-muted">{w.desc}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
