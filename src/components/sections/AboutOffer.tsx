import Link from "next/link";
import { aboutOffer, services, product } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";
import SplitReveal from "@/components/ui/SplitReveal";
import Sparkle from "@/components/ui/Sparkle";

const ACCENTS = ["#c6892c", "#a85221", "#cf9836", "#b5701f"];

/** What we build   every service as a link card, plus the AI SDR product. */
export default function AboutOffer() {
  return (
    <section className="section overflow-hidden">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="eyebrow justify-center">
              <span className="h-1 w-1 rounded-full bg-accent" />
              {aboutOffer.eyebrow}
            </span>
          </Reveal>
          <h2 className="font-display mt-4 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
            {aboutOffer.heading.map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <SplitReveal
                  text={line}
                  delay={i * 0.08}
                  className={i === aboutOffer.heading.length - 1 ? "text-gradient" : ""}
                />
              </span>
            ))}
          </h2>
          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
              {aboutOffer.sub}
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const accent = ACCENTS[i % ACCENTS.length];
            return (
              <Reveal key={s.id} delay={(i % 4) * 80}>
                <Link
                  href={`/services/${s.id}`}
                  data-cursor="hover"
                  className="card card-glow group relative flex h-full flex-col p-7"
                  style={{ ["--section-accent" as string]: accent }}
                >
                  <span className="font-display text-sm font-semibold tracking-[0.15em]" style={{ color: accent }}>
                    {s.n}
                  </span>
                  <h3 className="font-display mt-4 text-lg font-semibold leading-snug text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.subtitle}</p>
                </Link>
              </Reveal>
            );
          })}

          {/* The product, set apart from the services */}
          <Reveal delay={(services.length % 4) * 80}>
            <Link
              href="/products"
              data-cursor="hover"
              className="card card-glow group relative flex h-full flex-col overflow-hidden p-7"
              style={{
                ["--section-accent" as string]: ACCENTS[0],
                background: `color-mix(in oklab, ${ACCENTS[0]} 10%, var(--card-bg))`,
              }}
            >
              <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.15em] text-accent">
                <Sparkle className="h-3.5 w-3.5" />
                OUR PRODUCT
              </span>
              <h3 className="font-display mt-4 text-lg font-semibold leading-snug text-ink">
                {product.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{product.tagline}</p>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
