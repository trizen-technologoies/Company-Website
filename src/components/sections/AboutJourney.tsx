import { aboutJourney } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";
import SplitReveal from "@/components/ui/SplitReveal";

/** Journey / milestones   a vertical timeline with a warm rail and staggered reveals. */
export default function AboutJourney() {
  return (
    <section className="section overflow-hidden">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="eyebrow justify-center">
              <span className="h-1 w-1 rounded-full bg-accent" />
              {aboutJourney.eyebrow}
            </span>
          </Reveal>
          <h2 className="font-display mt-4 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
            {aboutJourney.heading.map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <SplitReveal
                  text={line}
                  delay={i * 0.08}
                  className={i === aboutJourney.heading.length - 1 ? "text-gradient" : ""}
                />
              </span>
            ))}
          </h2>
        </div>

        <ol className="relative mx-auto mt-16 max-w-2xl">
          {/* Rail */}
          <span
            aria-hidden="true"
            className="absolute bottom-3 left-[7px] top-2 w-px bg-gradient-to-b from-accent via-accent-2 to-transparent"
          />
          {aboutJourney.milestones.map((m, i) => (
            <li key={m.year} className="relative pb-12 pl-10 last:pb-0">
              {/* Node   stays put; only the text beside it animates in */}
              <span className="absolute left-0 top-1 grid h-4 w-4 place-items-center rounded-full bg-surface ring-2 ring-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              <Reveal delay={i * 90}>
                <span className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-accent-bright">
                  {m.year}
                </span>
                <h3 className="font-display mt-1 text-xl font-semibold text-ink">
                  {m.title}
                </h3>
                <p className="mt-2 max-w-lg leading-relaxed text-muted">{m.desc}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
