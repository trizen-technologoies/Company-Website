"use client";

import Link from "next/link";
import { useRef, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

type Props = {
  href?: string;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "ghost";
  strength?: number;
  onClick?: () => void;
  type?: "button" | "submit";
};

/**
 * Button/link with a subtle magnetic pull toward the cursor.
 */
export default function MagneticButton({
  href,
  children,
  className,
  variant = "primary",
  strength = 0.35,
  onClick,
  type = "button",
}: Props) {
  const ref = useRef<HTMLElement>(null);

  const move = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };
  const reset = () => {
    const el = ref.current;
    if (el) el.style.transform = "translate(0,0)";
  };

  const classes = cn(
    "btn px-6 py-3 text-[0.95rem]",
    variant === "primary" ? "btn-primary" : "btn-ghost",
    className
  );

  if (href) {
    const external = href.startsWith("http");
    return (
      <Link
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        onMouseMove={move}
        onMouseLeave={reset}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      onMouseMove={move}
      onMouseLeave={reset}
      onClick={onClick}
      className={classes}
    >
      {children}
    </button>
  );
}
