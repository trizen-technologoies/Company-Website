"use client";

import {
  useEffect,
  useRef,
  type ElementType,
  type ReactNode,
} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

type Props = {
  text: string;
  as?: ElementType;
  className?: string;
  /** Delay before the stagger begins (s). */
  delay?: number;
  /** Per-character stagger (s). */
  stagger?: number;
  /** Start immediately on mount instead of on scroll-in. */
  immediate?: boolean;
  children?: ReactNode;
};

/**
 * Splits `text` into word/char spans and reveals each character with a
 * masked slide-up on scroll (GSAP). Falls back to plain, fully-visible
 * text under prefers-reduced-motion. Words never break mid-word.
 */
export default function SplitReveal({
  text,
  as: Tag = "span",
  className,
  delay = 0,
  stagger = 0.028,
  immediate = false,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  // Gradient text (.text-gradient etc.) is a background clipped to the text,
  // which can't paint through the chars' own transform layers, so the line
  // would render invisible. Hand each char its slice of the line's gradient.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const bg = getComputedStyle(el).backgroundImage;
    if (!bg || bg === "none") return;
    const chars = el.querySelectorAll<HTMLElement>("[data-char]");
    const paint = () => {
      const size = `${el.offsetWidth}px ${el.offsetHeight}px`;
      chars.forEach((c) => {
        // Root is `relative`, so offsets are measured from it (transforms ignored)
        c.style.backgroundImage = bg;
        c.style.backgroundSize = size;
        c.style.backgroundPosition = `${-c.offsetLeft}px ${-c.offsetTop}px`;
        c.style.backgroundRepeat = "no-repeat";
        c.style.backgroundClip = "text";
        c.style.webkitBackgroundClip = "text";
      });
    };
    paint();
    const ro = new ResizeObserver(paint);
    ro.observe(el);
    return () => ro.disconnect();
  }, [className]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const chars = el.querySelectorAll<HTMLElement>("[data-char]");
    if (reduce || chars.length === 0) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // y is pinned to 0 at both ends: when the effect re-runs (React Strict
      // Mode in dev), GSAP re-reads the leftover 115% offset as a px `y`,
      // which would otherwise keep the chars stuck below their mask.
      gsap.fromTo(
        chars,
        { yPercent: 115, y: 0 },
        {
          yPercent: 0,
          y: 0,
          duration: 0.9,
          ease: "expo.out",
          stagger,
          delay,
          scrollTrigger: immediate
            ? undefined
            : { trigger: el, start: "top 85%", once: true },
        }
      );
    }, el);
    return () => ctx.revert();
  }, [delay, stagger, immediate]);

  const words = text.split(" ");

  return (
    <Tag ref={ref} className={cn("relative inline-block", className)} aria-label={text}>
      {words.map((word, wi) => (
        <span
          key={wi}
          aria-hidden="true"
          className="inline-block overflow-hidden align-bottom"
        >
          {word.split("").map((ch, ci) => (
            <span key={ci} data-char className="inline-block will-change-transform">
              {ch}
            </span>
          ))}
          {wi < words.length - 1 && <span data-char>&nbsp;</span>}
        </span>
      ))}
    </Tag>
  );
}
