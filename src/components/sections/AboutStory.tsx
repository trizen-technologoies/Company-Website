import Image from "next/image";
import { Target, Eye } from "lucide-react";
import { about } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";
import SplitReveal from "@/components/ui/SplitReveal";
import Sparkle from "@/components/ui/Sparkle";
import ValuesAccordion from "./ValuesAccordion";

/** Warm accents per panel   read on both light + dark. */
const ACCENTS = ["#c6892c", "#a85221", "#cf9836", "#b5701f"];

export default function AboutStory() {
  return (
    <>
      {/* Story */}
      <section className="section overflow-hidden pt-4">
        <div className="container-x">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] ring-1 ring-line">
                <Image
                  src="/media/team-office.webp"
                  alt="Trizen Technologies workspace"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void/65 via-transparent to-transparent" />
              </div>
              <div className="glass absolute -right-4 bottom-8 flex w-48 items-center gap-3 rounded-3xl p-5 sm:-right-8">
                <Sparkle className="h-7 w-7 shrink-0 text-accent" />
                <div>
                  <div className="font-display text-2xl font-semibold text-gradient">
                    20+
                  </div>
                  <p className="text-xs leading-tight text-muted">
                    Happy clients worldwide
                  </p>
                </div>
              </div>
            </Reveal>

            <div>
              <Reveal>
                <span className="eyebrow">
                  <span className="h-1 w-1 rounded-full bg-accent" />
                  Our Story
                </span>
              </Reveal>
              <h2 className="font-display mt-4 text-balance text-4xl font-semibold leading-[1.03] tracking-tight sm:text-5xl">
                <span className="block overflow-hidden">
                  <SplitReveal text="Building the" />
                </span>
                <span className="block overflow-hidden">
                  <SplitReveal text="intelligent future." className="text-gradient" delay={0.08} />
                </span>
              </h2>
              <div className="mt-7 space-y-5">
                {about.story.map((p, i) => (
                  <Reveal key={i} delay={120 + i * 80}>
                    <p className="max-w-xl leading-relaxed text-muted">{p}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision   equal panels that expand on hover */}
      <section className="section pt-0">
        <div className="container-x">
          <div className="mv-row">
            {[
              {
                icon: Target,
                title: "Our Mission",
                body: about.mission,
                foot: "Why we exist",
                accent: ACCENTS[0],
              },
              {
                icon: Eye,
                title: "Our Vision",
                body: about.vision,
                foot: "Where we're headed",
                accent: ACCENTS[1],
              },
            ].map((m, i) => (
              <Reveal key={m.title} delay={i * 140} className="mv-panel">
                <div
                  className="card card-glow group relative flex h-full flex-col justify-center overflow-hidden rounded-[2rem] p-8 lg:h-[27rem]"
                  style={{ ["--section-accent" as string]: m.accent }}
                >
                  <div
                    className="pointer-events-none absolute inset-0 opacity-60"
                    style={{ background: "var(--wash)" }}
                  />
                  <Sparkle className="pointer-events-none absolute -right-12 -top-12 h-64 w-64 text-[var(--section-accent)] opacity-[0.07] transition-opacity duration-500 group-hover:opacity-[0.13]" />
                  <div className="relative">
                    <span
                      className="grid h-14 w-14 place-items-center rounded-2xl text-[var(--accent-contrast)]"
                      style={{ background: "linear-gradient(135deg, var(--section-accent), var(--accent-2))" }}
                    >
                      <m.icon className="h-6 w-6" />
                    </span>
                    <h3 className="font-display mt-6 text-2xl font-semibold text-ink sm:text-3xl">
                      {m.title}
                    </h3>
                    <p className="mt-4 max-w-xl text-balance text-lg leading-relaxed text-muted">
                      {m.body}
                    </p>
                    <div className="mt-7 flex items-center gap-3 text-sm font-medium text-muted">
                      <span
                        className="h-px w-10"
                        style={{ background: "var(--section-accent)" }}
                      />
                      {m.foot}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values   image accordion */}
      <ValuesAccordion />
    </>
  );
}
