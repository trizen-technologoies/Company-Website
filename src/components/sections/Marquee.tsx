import { marquee } from "@/lib/content";

/** Infinite trust marquee   doubled track for a seamless loop. */
export default function Marquee() {
  const items = [...marquee, ...marquee];
  return (
    <div className="relative overflow-hidden border-y border-line bg-fill py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-bg to-transparent" />
      <div className="flex w-max animate-marquee items-center gap-12">
        {items.map((item, i) => (
          <span
            key={i}
            className="inline-flex shrink-0 items-center gap-12 text-sm font-medium uppercase tracking-[0.18em] text-muted"
          >
            {item}
            <span className="h-1 w-1 rounded-full bg-blue/60" />
          </span>
        ))}
      </div>
    </div>
  );
}
