"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms */
  delay?: number;
  as?: ElementType;
  once?: boolean;
};

/**
 * Lightweight scroll-reveal using IntersectionObserver.
 * Styling for the transition lives in globals.css ([data-reveal]).
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.setAttribute("data-inview", "true");
            if (once) io.unobserve(el);
          } else if (!once) {
            el.setAttribute("data-inview", "false");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref}
      data-reveal=""
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
      className={cn(className)}
    >
      {children}
    </Tag>
  );
}
