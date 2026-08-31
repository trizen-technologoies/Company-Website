import { statsBand } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";
import Counter from "@/components/ui/Counter";

/** By-the-numbers band with scroll-triggered count-ups. */
export default function StatsBand() {
  return (
    <section className="relative overflow-hidden border-y border-line bg-fill py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{ background: "var(--wash)" }}
      />
      <div className="container-x relative">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {statsBand.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} className="text-center">
              <div className="font-display text-5xl font-semibold tracking-tight text-gradient sm:text-6xl">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-3 text-sm uppercase tracking-[0.16em] text-muted">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
