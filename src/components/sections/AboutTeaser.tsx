"use client";

import Image from "next/image";
import Link from "next/link";
import { homeAbout } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";
import SplitReveal from "@/components/ui/SplitReveal";
import Sparkle from "@/components/ui/Sparkle";

/**
 * Editorial "who we are" block   generous whitespace, big split-reveal
 * headline and image. Hybrid editorial pacing.
 */
export default function AboutTeaser() {
  return (
    // No bottom padding on desktop: the pinned "What we do" stage below already
    // reserves space above its label (to clear the navbar when pinned)
    <section className="section overflow-hidden lg:pb-0!">
      <div className="container-x">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Copy */}
          <div className="lg:col-span-6">
            <Reveal>
              <span className="eyebrow">
                <span className="h-1 w-1 rounded-full bg-accent" />
                {homeAbout.eyebrow}
              </span>
            </Reveal>

            <h2 className="font-display mt-5 text-balance text-4xl font-semibold leading-[1.02] tracking-tight text-ink sm:text-5xl md:text-6xl">
              {homeAbout.heading.map((line, i) => (
                <span key={i} className="block overflow-hidden">
                  <SplitReveal
                    text={line}
                    delay={i * 0.1}
                    className={i === homeAbout.heading.length - 1 ? "text-gradient" : ""}
                  />
                </span>
              ))}
            </h2>

            <div className="mt-7 space-y-5">
              {homeAbout.body.map((p, i) => (
                <Reveal key={i} delay={120 + i * 80}>
                  <p className="max-w-xl text-lg leading-relaxed text-muted">{p}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={280}>
              <Link
                href="/about"
                className="btn btn-luxe mt-8 min-w-[11rem] px-9 py-3.5 text-[0.95rem]"
                data-cursor="hover"
              >
                <Sparkle className="btn-mark" />
                Our story
              </Link>
            </Reveal>
          </div>

          {/* Image */}
          <div className="lg:col-span-6">
            <Reveal className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl ring-1 ring-line">
                <Image
                  src={homeAbout.image}
                  alt={homeAbout.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/55 via-transparent to-transparent" />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
