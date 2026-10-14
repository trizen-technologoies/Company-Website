"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { aboutHero } from "@/lib/content";
import Sparkle from "@/components/ui/Sparkle";
import SplitReveal from "@/components/ui/SplitReveal";

/**
 * Copy colours picked by how bright the unscrimmed footage is behind it:
 * headline by `tone`, subtitle by `subTone`. White subtitles get a soft glow.
 */
const TONE = {
  light: { text: "text-ink", accent: "text-accent", sub: "text-ink" },
  dark: {
    text: "text-white",
    accent: "text-[color:var(--accent-3)]",
    sub: "text-white [text-shadow:0_0_12px_rgba(255,255,255,0.45)]",
  },
} as const;

/**
 * Apple-style scroll-scrub hero. A pinned section where the video's playback
 * is driven by scroll (video.currentTime = progress × duration) while the
 * headline copy crossfades through stages around it and the footage subtly
 * scales. Reduced-motion / mobile: the video just loops and the first stage's
 * text sits statically (no pin, no scrub).
 */
export default function AboutScrollHero() {
  const section = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const media = useRef<HTMLDivElement>(null);

  const stages = aboutHero.stages;
  const n = stages.length;

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    const vid = video.current;

    // Fallback: just loop the video, show first stage.
    if (reduce || !isDesktop || !section.current || !vid) {
      if (vid) {
        vid.loop = true;
        vid.play().catch(() => {});
      }
      const first = section.current?.querySelector<HTMLElement>('[data-stage="0"]');
      if (first) first.style.opacity = "1";
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    let duration = 0;
    const onMeta = () => {
      duration = vid.duration || 0;
    };
    vid.addEventListener("loadedmetadata", onMeta);
    if (vid.readyState >= 1) onMeta();

    // Intro: let the video actually PLAY for ~1.1s on entry, then hand control
    // to the scroll scrub (so it doesn't open on a frozen frame).
    vid.muted = true;
    let introDone = false;
    let introTime = 0;
    vid.currentTime = 0;
    vid.play().catch(() => {});
    const introTimer = window.setTimeout(() => {
      introTime = vid.currentTime || 0;
      introDone = true;
      vid.pause();
    }, 2000);

    const stageEls = gsap.utils.toArray<HTMLElement>("[data-stage]");

    const ctx = gsap.context(() => {
      const st = ScrollTrigger.create({
        trigger: section.current,
        pin: stage.current,
        start: "top top",
        end: () => "+=" + window.innerHeight * (n + 0.5),
        scrub: 0.6,
        onUpdate: (self) => {
          const p = self.progress;
          // Scrub the video (only after the intro playback has finished)   scrub
          // FORWARD from where the intro paused, so scrolling never rewinds it.
          if (introDone && duration)
            vid.currentTime = Math.min(
              duration - 0.05,
              introTime + p * (duration - introTime)
            );
          // Subtle scale on the footage
          if (media.current) gsap.set(media.current, { scale: 1 + p * 0.12 });
          // Vertical reel: one stage centered at a time, neighbours fade out
          // fast AND slide away, so stages never overlap in place.
          const active = p * (n - 1);
          const slide = window.innerHeight * 0.4;
          stageEls.forEach((el, i) => {
            const d = i - active;
            const op = gsap.utils.clamp(0, 1, 1 - Math.abs(d) * 1.5);
            gsap.set(el, {
              opacity: op,
              y: d * slide,
              pointerEvents: op > 0.5 ? "auto" : "none",
            });
          });
        },
      });
      return () => st.kill();
    }, section);

    return () => {
      vid.removeEventListener("loadedmetadata", onMeta);
      window.clearTimeout(introTimer);
      ctx.revert();
    };
  }, [n]);

  return (
    <section ref={section} className="relative">
      <div
        ref={stage}
        className="relative flex h-[100svh] items-center justify-center overflow-hidden bg-void"
      >
        {/* Video, shown as-is (no scrims); each stage's copy adapts to it instead */}
        <div ref={media} className="absolute inset-0 will-change-transform">
          <video
            ref={video}
            className="h-full w-full object-cover"
            muted
            playsInline
            preload="auto"
            poster={aboutHero.poster}
          >
            <source src={aboutHero.video} type="video/mp4" />
          </video>
        </div>

        {/* Stage copy (crossfades on scroll) */}
        <div className="container-x relative z-10 mt-[18vh] text-center">
          <div className="mx-auto mb-6 w-fit">
            <Sparkle className="mx-auto h-8 w-8 animate-breathe text-accent" />
          </div>
          <span className="eyebrow justify-center" style={{ color: "var(--accent-3)" }}>
            <span className="h-1 w-1 rounded-full bg-accent" />
            {aboutHero.eyebrow}
          </span>

          <div className="relative mt-5 h-[42vh] min-h-[20rem]">
            {stages.map((s, i) => (
              <div
                key={i}
                data-stage={i}
                className={`absolute inset-x-0 top-0 ${i === 0 ? "opacity-100 mt-[6vh]" : "opacity-0"}`}
              >
                <h1
                  className={`font-display mx-auto max-w-4xl text-balance text-center text-[clamp(2.4rem,6vw,4.6rem)] font-semibold leading-[1.02] tracking-[-0.02em] ${TONE[s.tone].text}`}
                >
                  {i === 0 ? (
                    <>
                      <SplitReveal text={s.title[0]} immediate delay={0.25} />{" "}
                      <SplitReveal
                        text={s.title[1]}
                        className={TONE[s.tone].accent}
                        immediate
                        delay={0.45}
                      />
                    </>
                  ) : (
                    <>
                      {s.title[0]}{" "}
                      <span className={TONE[s.tone].accent}>{s.title[1]}</span>
                    </>
                  )}
                </h1>
                <p className={`mx-auto mt-6 max-w-xl text-lg leading-relaxed ${TONE[s.subTone].sub}`}>
                  {"subLead" in s && (
                    <>
                      <span className="text-ink [text-shadow:none]">{s.subLead}</span>{" "}
                    </>
                  )}
                  {s.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
