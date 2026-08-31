"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Sparkle from "@/components/ui/Sparkle";

/**
 * Brand preloader: the sparkle mark draws in, breathes + rotates, the
 * wordmark rises, then the whole overlay wipes up to reveal the page.
 * Runs once per session (sessionStorage) and is skipped entirely under
 * prefers-reduced-motion. Locks scroll while visible.
 */
export default function Preloader() {
  const [show, setShow] = useState(false);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const seen = sessionStorage.getItem("trizen-intro");
    const skip = new URLSearchParams(window.location.search).has("nointro");
    if (reduce || seen || skip) return;

    setShow(true);
    document.body.style.overflow = "hidden";

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = "";
          sessionStorage.setItem("trizen-intro", "1");
          setShow(false);
        },
      });

      tl.fromTo(
        "[data-pl-mark]",
        { scale: 0.2, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: "expo.out" }
      )
        .fromTo(
          "[data-pl-word] span",
          { yPercent: 120 },
          { yPercent: 0, duration: 0.7, ease: "expo.out", stagger: 0.05 },
          "-=0.35"
        )
        .to("[data-pl-mark]", { scale: 1.12, duration: 0.7, ease: "power2.inOut" }, "-=0.2")
        .to({}, { duration: 0.25 })
        .to("[data-pl-inner]", { yPercent: -30, opacity: 0, duration: 0.5, ease: "power2.in" })
        .to("[data-pl-overlay]", { yPercent: -100, duration: 0.8, ease: "expo.inOut" }, "-=0.1");
    }, root);

    return () => {
      ctx.revert();
      document.body.style.overflow = "";
    };
  }, []);

  if (!show) return null;

  const word = "TRIZEN";

  return (
    <div ref={root}>
      <div data-pl-overlay className="preloader">
        <div data-pl-inner className="flex flex-col items-center gap-6">
          <div data-pl-mark className="text-accent drop-shadow-[0_4px_20px_var(--glow)]">
            <div className="loader-spin">
              <Sparkle className="h-16 w-16" />
            </div>
          </div>
          <div className="overflow-hidden">
            <div
              data-pl-word
              className="font-display flex text-3xl font-semibold tracking-[0.3em] text-ink"
            >
              {word.split("").map((c, i) => (
                <span key={i} className="inline-block">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
