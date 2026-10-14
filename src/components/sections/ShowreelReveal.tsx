"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { showreel } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";

/** Curved sparkle (matches the logo mark), drawn in a 0-1 unit box. */
const STAR =
  "M.5 .02 C.52 .28 .72 .48 .98 .5 C.72 .52 .52 .72 .5 .98 C.48 .72 .28 .52 .02 .5 C.28 .48 .48 .28 .5 .02 Z";
/** Closest the star's concave edge gets to its centre, as a fraction of its size. */
const STAR_INNER = 0.212;

/* Scroll budget, in viewport heights: star grows, then each scene holds, then a short rest */
const GROW = 1.5;
const SCENE = 0.75;
const REST = 0.25;

/**
 * Scroll-driven sparkle reveal. The showreel video fills the whole section,
 * seen through a star-shaped window. As you scroll, the star ROTATES and
 * GROWS until it swallows the viewport, leaving the video as the section's
 * full-bleed background. Then everyday scenes (support, sales, ops, product)
 * step in one at a time over it, with a story-style progress bar.
 * Reduced-motion / mobile: no pin; video is the background and the scenes
 * render as a static grid of cards.
 */
export default function ShowreelReveal() {
  const section = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const media = useRef<HTMLDivElement>(null);
  const scrim = useRef<HTMLDivElement>(null);
  const edgeSvg = useRef<SVGSVGElement>(null);
  const clipShape = useRef<SVGPathElement>(null);
  const edge = useRef<SVGPathElement>(null);
  const bars = useRef<(HTMLSpanElement | null)[]>([]);
  const [scene, setScene] = useState(-1);
  const scenes = showreel.scenes;
  const n = scenes.length;

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    const st = stage.current;
    const m = media.current;
    const s = scrim.current;
    const svg = edgeSvg.current;
    if (reduce || !isDesktop || !section.current || !st || !m || !s || !svg) return;

    gsap.registerPlugin(ScrollTrigger);

    let w = 0;
    let h = 0;
    let from = 0;
    let to = 0;
    const state = { p: 0 };

    const measure = () => {
      w = st.clientWidth;
      h = st.clientHeight;
      from = Math.min(h * 0.46, w * 0.84) * 0.28;
      // Big enough that the star's narrowest point clears the viewport corners
      to = (Math.hypot(w, h) / 2 / STAR_INNER) * 1.04;
    };
    const draw = () => {
      const p = state.p;
      // Exponential growth reads as a steady zoom rather than a late rush
      const size = from * Math.pow(to / from, p);
      const t = `translate(${w / 2} ${h / 2}) rotate(${-160 * (1 - p)}) scale(${size}) translate(-0.5 -0.5)`;
      clipShape.current?.setAttribute("transform", t);
      edge.current?.setAttribute("transform", t);
      // Darken the video as it grows behind the text
      s.style.opacity = String(gsap.utils.clamp(0, 1, p * 1.6));
    };
    // Which scene is showing, and how far through it the progress bars are
    const sync = (time: number) => {
      const into = time - GROW;
      setScene(into < -0.1 ? -1 : gsap.utils.clamp(0, n - 1, Math.floor(into / SCENE)));
      bars.current.forEach((bar, i) => {
        if (bar) bar.style.scale = `${gsap.utils.clamp(0, 1, (into - i * SCENE) / SCENE)} 1`;
      });
    };

    measure();
    draw();
    m.style.clipPath = "url(#srSparkle)";
    svg.style.visibility = "visible";

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section.current,
          pin: st,
          scrub: 1,
          start: "top top",
          end: () => "+=" + window.innerHeight * (GROW + n * SCENE + REST),
          onRefresh: () => {
            measure();
            draw();
          },
        },
        onUpdate: () => sync(tl.time()),
      });
      tl.to(state, { p: 1, duration: GROW, ease: "none", onUpdate: draw })
        // Scenes are driven from the timeline's time in sync(); this just reserves their scroll
        .to({}, { duration: n * SCENE + REST });
    }, section);

    return () => {
      ctx.revert();
      m.style.clipPath = "";
      s.style.opacity = "";
      svg.style.visibility = "";
      bars.current.forEach((bar) => bar && (bar.style.scale = ""));
    };
  }, [n]);

  return (
    <section ref={section} className="relative bg-bg-2">
      {/* Star clip in px (userSpaceOnUse) so it keeps its shape on any aspect ratio */}
      <svg className="absolute h-0 w-0" aria-hidden="true">
        <defs>
          <clipPath id="srSparkle" clipPathUnits="userSpaceOnUse">
            <path ref={clipShape} d={STAR} />
          </clipPath>
        </defs>
      </svg>

      <div ref={stage} className="relative min-h-[100svh] overflow-hidden md:motion-safe:h-[100svh]">
        {/* Full-bleed video, revealed through the growing star */}
        <div ref={media} className="absolute inset-0">
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/home/showreel-bg-poster.jpg"
          >
            <source src="/home/Make_looping_background_video_1080p_20261014014120.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-accent/10 mix-blend-overlay" />
          {/* Readability scrim for the text once the video is the background */}
          <div
            ref={scrim}
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.45) 38%, rgba(0,0,0,0.45) 62%, rgba(0,0,0,0.82) 100%)",
            }}
          />
        </div>

        {/* Gold edge, same transform as the clip (hidden until JS drives it) */}
        <svg
          ref={edgeSvg}
          className="pointer-events-none invisible absolute inset-0 h-full w-full overflow-visible text-accent/70 drop-shadow-[0_0_24px_var(--glow)]"
          aria-hidden="true"
        >
          <path
            ref={edge}
            d={STAR}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* Heading (top), scenes (middle) and caption (bottom), above the video */}
        <div className="relative z-10 flex min-h-[100svh] flex-col items-center px-6 pb-14 pt-28 text-center">
          <div>
            <Reveal>
              <span className="eyebrow justify-center">
                <span className="h-1 w-1 rounded-full bg-accent" />
                {showreel.eyebrow}
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display mt-4 text-balance text-4xl font-semibold leading-[1.02] tracking-tight text-ink sm:text-5xl md:text-6xl">
                {showreel.title[0]}{" "}
                <span className="text-gradient">{showreel.title[1]}</span>
              </h2>
            </Reveal>
          </div>

          <div className="flex w-full flex-1 items-center justify-center md:motion-safe:pt-8">
            {/* Pinned desktop: one scene at a time, stepped by scroll */}
            <div
              className={`hidden w-full max-w-3xl transition-opacity duration-500 md:motion-safe:block ${
                scene >= 0 ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="mx-auto flex max-w-sm gap-2" aria-hidden="true">
                {scenes.map((sc, i) => (
                  <span key={sc.area} className="h-[3px] flex-1 overflow-hidden rounded-full bg-white/15">
                    <span
                      ref={(el) => {
                        bars.current[i] = el;
                      }}
                      className="block h-full origin-left scale-x-0 bg-accent"
                    />
                  </span>
                ))}
              </div>
              <div className="mt-7 grid">
                {scenes.map((sc, i) => (
                  <div
                    key={sc.area}
                    aria-hidden={i !== scene}
                    className={`[grid-area:1/1] transition-[opacity,translate] duration-700 ease-out ${
                      i === scene
                        ? "translate-y-0 opacity-100"
                        : `pointer-events-none opacity-0 ${i < scene ? "-translate-y-6" : "translate-y-6"}`
                    }`}
                  >
                    <SceneLabel index={i} total={n} area={sc.area} href={sc.href} />
                    <h3 className="font-display mt-4 text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-ink lg:[@media(min-height:820px)]:text-5xl">
                      {sc.title}
                    </h3>
                    <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted">{sc.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile / reduced motion: all scenes as cards */}
            <div className="grid w-full max-w-6xl gap-4 py-10 text-left sm:grid-cols-2 lg:grid-cols-4 md:motion-safe:hidden">
              {scenes.map((sc, i) => (
                <div key={sc.area} className="rounded-2xl border border-line bg-black/35 p-5 backdrop-blur-sm">
                  <SceneLabel index={i} total={n} area={sc.area} href={sc.href} align="start" />
                  <h3 className="font-display mt-3 text-xl font-semibold leading-snug tracking-tight text-ink">
                    {sc.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{sc.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pinned desktop: overlays the bottom so the scenes get the full middle */}
          <p
            className={`mx-auto max-w-xl text-lg leading-relaxed text-muted transition-opacity duration-500 md:motion-safe:absolute md:motion-safe:inset-x-0 md:motion-safe:bottom-14 md:motion-safe:px-6 ${
              scene >= 0 ? "opacity-0" : "opacity-100"
            }`}
          >
            {showreel.caption}
          </p>
        </div>
      </div>
    </section>
  );
}

function SceneLabel({
  index,
  total,
  area,
  href,
  align = "center",
}: {
  index: number;
  total: number;
  area: string;
  href: string;
  align?: "center" | "start";
}) {
  return (
    <div
      className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] ${
        align === "center" ? "justify-center" : "justify-start"
      }`}
    >
      <span className="tabular-nums text-faint">
        {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </span>
      <span className="h-px w-6 bg-line-strong" />
      <Link href={href} className="text-accent transition-colors hover:text-ink">
        {area}
      </Link>
    </div>
  );
}
