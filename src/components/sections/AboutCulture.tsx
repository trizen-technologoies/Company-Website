import { aboutCulture } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";
import SplitReveal from "@/components/ui/SplitReveal";
import Sparkle from "@/components/ui/Sparkle";

const ACCENTS = ["#c6892c", "#a85221", "#cf9836", "#b5701f"];

/** Culture section   the young/energetic/creative story + highlight cards. */
export default function AboutCulture() {
  return (
    <section className="section overflow-hidden border-y border-line bg-fill">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{ background: "var(--wash)" }}
      />
      <div className="container-x relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: heading + body */}
          <div className="lg:col-span-5">
            <Reveal>
              <span className="eyebrow">
                <span className="h-1 w-1 rounded-full bg-accent" />
                {aboutCulture.eyebrow}
              </span>
            </Reveal>
            <h2 className="font-display mt-4 text-balance text-4xl font-semibold leading-[1.03] tracking-tight sm:text-5xl">
              {aboutCulture.heading.map((line, i) => (
                <span key={i} className="block overflow-hidden">
                  <SplitReveal
                    text={line}
                    delay={i * 0.08}
                    className={i === aboutCulture.heading.length - 1 ? "text-gradient" : ""}
                  />
                </span>
              ))}
            </h2>
            <div className="mt-7 space-y-5">
              {aboutCulture.body.map((p, i) => (
                <Reveal key={i} delay={120 + i * 80}>
                  <p className="max-w-md text-lg leading-relaxed text-muted">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right: highlight cards */}
          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {aboutCulture.highlights.map((h, i) => {
                const accent = ACCENTS[i % ACCENTS.length];
                return (
                  <Reveal key={h.title} delay={i * 90}>
                    <div
                      className="card card-glow group relative h-full overflow-hidden p-7"
                      style={{ ["--section-accent" as string]: accent }}
                    >
                      <span
                        className="grid h-11 w-11 place-items-center rounded-xl"
                        style={{
                          color: accent,
                          background: `color-mix(in oklab, ${accent} 14%, transparent)`,
                        }}
                      >
                        <Sparkle className="h-5 w-5" />
                      </span>
                      <h3 className="font-display mt-5 text-lg font-semibold text-ink">
                        {h.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{h.desc}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
