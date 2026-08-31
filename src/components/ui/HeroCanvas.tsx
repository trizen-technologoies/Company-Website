"use client";

import { useEffect, useRef } from "react";

type Node = { x: number; y: number; vx: number; vy: number; r: number };

/**
 * Cinematic neural-network canvas: drifting nodes linked by proximity lines,
 * with gentle cursor gravity. GPU-light, DPR-capped, and pauses when the tab
 * is hidden. Falls back to a static gradient under reduced-motion.
 */
export default function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d", { alpha: true })!;
    let w = 0;
    let h = 0;
    let dpr = 1;
    let nodes: Node[] = [];
    let raf = 0;
    const mouse = { x: -9999, y: -9999 };

    // Theme-driven colors, read from CSS tokens so the canvas re-themes.
    let rgb = "240,167,66";
    let lineAlpha = 0.35;
    const readColors = () => {
      const cs = getComputedStyle(document.documentElement);
      const triplet = cs.getPropertyValue("--canvas-rgb").trim();
      if (triplet) rgb = triplet.replace(/\s+/g, ",");
      const a = parseFloat(cs.getPropertyValue("--canvas-line-alpha"));
      if (!Number.isNaN(a)) lineAlpha = a;
    };
    readColors();

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // density scales with area, capped for performance
      const count = Math.min(Math.floor((w * h) / 15000), 110);
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        r: Math.random() * 1.6 + 0.6,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const linkDist = 130;

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        // cursor gravity
        const dxm = mouse.x - n.x;
        const dym = mouse.y - n.y;
        const dm = Math.hypot(dxm, dym);
        if (dm < 180) {
          n.vx += (dxm / dm) * 0.015;
          n.vy += (dym / dm) * 0.015;
        }

        n.x += n.vx;
        n.y += n.vy;
        n.vx *= 0.99;
        n.vy *= 0.99;

        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;

        // node glow
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb}, 0.9)`;
        ctx.fill();

        // links
        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j];
          const dx = n.x - m.x;
          const dy = n.y - m.y;
          const d = Math.hypot(dx, dy);
          if (d < linkDist) {
            const a = (1 - d / linkDist) * lineAlpha;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(m.x, m.y);
            ctx.strokeStyle = `rgba(${rgb}, ${a})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    const onVis = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
      } else {
        raf = requestAnimationFrame(draw);
      }
    };

    const mq = window.matchMedia("(prefers-color-scheme: dark)");

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove, { passive: true });
    canvas.addEventListener("mouseleave", onLeave);
    document.addEventListener("visibilitychange", onVis);
    mq.addEventListener("change", readColors);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("visibilitychange", onVis);
      mq.removeEventListener("change", readColors);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 h-full w-full"
      aria-hidden
    />
  );
}
