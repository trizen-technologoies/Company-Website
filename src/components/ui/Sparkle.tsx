import { cn } from "@/lib/utils";

/**
 * Trizen 4-point sparkle mark as inline SVG (concave star).
 * Reused for the preloader, the video-reveal mask outline, and accents.
 * `pathClassName` lets callers animate the stroke/fill.
 */
export default function Sparkle({
  className,
  pathClassName,
  filled = true,
}: {
  className?: string;
  pathClassName?: string;
  filled?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={cn("block", className)}
      aria-hidden="true"
      focusable="false"
    >
      <path
        className={pathClassName}
        d="M50 2
           C52 28 72 48 98 50
           C72 52 52 72 50 98
           C48 72 28 52 2 50
           C28 48 48 28 50 2 Z"
        fill={filled ? "currentColor" : "none"}
        stroke={filled ? "none" : "currentColor"}
        strokeWidth={filled ? 0 : 2}
        strokeLinejoin="round"
      />
    </svg>
  );
}
