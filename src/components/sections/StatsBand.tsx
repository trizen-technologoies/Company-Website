import { statsBand } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";
import Counter from "@/components/ui/Counter";

/** By-the-numbers band with scroll-triggered count-ups. */
export default function StatsBand() {
  return (
    <section className="relative overflow-hidden border-y border-line bg-fill py-10 sm:py-12">
      <div className="container-x relative">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
          {statsBand.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} className="text-center">
              <div className="font-display text-4xl font-semibold tracking-tight text-gradient sm:text-5xl">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.16em] text-muted sm:text-sm">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
