"use client";

import { useEffect, useRef } from "react";

/** Slim gradient progress bar pinned to the top of the viewport. */
export default function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const el = bar.current;
      if (!el) return;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const p = h > 0 ? window.scrollY / h : 0;
      el.style.transform = `scaleX(${p})`;
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      ref={bar}
      aria-hidden
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left scale-x-0 bg-gradient-to-r from-blue via-violet to-cyan"
    />
  );
}
