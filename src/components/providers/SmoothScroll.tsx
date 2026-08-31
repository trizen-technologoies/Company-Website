"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Wraps the app in Lenis smooth scrolling and syncs GSAP ScrollTrigger to it.
 * Respects prefers-reduced-motion by skipping smoothing entirely.
 * Refreshes ScrollTrigger after media loads and on route changes so
 * scroll-driven animations (e.g. the persistent footer wordmark) keep correct
 * positions when page height changes.
 */
export default function SmoothScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const reduceRef = useRef(false);
  const pathname = usePathname();

  useEffect(() => {
    // Always start a fresh load at the very top (disable browser scroll restore),
    // unless the URL points at a specific section via hash.
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    if (!window.location.hash) window.scrollTo(0, 0);

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    reduceRef.current = reduce;
    if (reduce) return;

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
    });
    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const onRaf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(onRaf);
    gsap.ticker.lagSmoothing(0);

    // Anchor links -> smooth scroll through Lenis
    const onClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest<HTMLAnchorElement>(
        'a[href^="#"]'
      );
      if (!target) return;
      const id = target.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        lenis.scrollTo(el as HTMLElement, { offset: -90 });
      }
    };
    document.addEventListener("click", onClick);

    // Recompute trigger positions once late-loading media (videos/images) settle
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);
    const settle = window.setTimeout(() => ScrollTrigger.refresh(), 1200);

    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("load", onLoad);
      window.clearTimeout(settle);
      gsap.ticker.remove(onRaf);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // On client-side navigation: jump to top (or to the URL's #hash target, e.g.
  // /contact#contact from the newsletter form) and refresh trigger positions
  // for the new page's height (the footer/global animations persist across routes).
  useEffect(() => {
    if (reduceRef.current) return;
    const hash = window.location.hash;
    const raf = requestAnimationFrame(() => {
      const target = hash ? document.querySelector<HTMLElement>(hash) : null;
      if (target) {
        lenisRef.current?.scrollTo(target, { offset: -90, immediate: true });
      } else {
        lenisRef.current?.scrollTo(0, { immediate: true });
        window.scrollTo(0, 0);
      }
      ScrollTrigger.refresh();
    });
    // second pass once route media likely settled
    const settle = window.setTimeout(() => ScrollTrigger.refresh(), 700);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(settle);
    };
  }, [pathname]);

  return <>{children}</>;
}
