import Link from "next/link";
import Image from "next/image";
import { Check, ArrowUpRight } from "lucide-react";
import { services } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";
import SplitReveal from "@/components/ui/SplitReveal";
import { cn } from "@/lib/utils";

/** Warm accent per service   reads on both light + dark. */
const ACCENTS = ["#c6892c", "#a85221", "#cf9836", "#b5701f", "#9c6414", "#d0a24a", "#b8632a"];

export default function ServicesDetailed() {
  return (
    <div className="space-y-28 md:space-y-40">
      {services.map((s, i) => {
        const flip = i % 2 === 1;
        const accent = ACCENTS[i % ACCENTS.length];
        return (
          <section
            key={s.id}
            id={s.id}
            className="container-x scroll-mt-28"
            style={{ ["--section-accent" as string]: accent }}
          >
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              {/* Media */}
              <Reveal className={cn("relative", flip && "lg:order-2")}>
                <Link
                  href={`/services/${s.id}`}
                  className="group relative block aspect-[4/3] overflow-hidden rounded-3xl ring-1 ring-line"
                >
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-bl from-black/55 via-transparent to-transparent" />
                  <span
                    className="font-display absolute right-5 top-3 text-7xl font-bold"
                    style={{ color: "color-mix(in oklab, var(--section-accent) 60%, white)" }}
                  >
                    {s.n}
                  </span>
                  <span className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full bg-black/45 px-4 py-2 text-sm font-medium text-white opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
                    View details <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
                {/* soft accent glow */}
                <div
                  className="pointer-events-none absolute -inset-2 -z-10 rounded-[2rem] opacity-40 blur-2xl"
                  style={{ background: "color-mix(in oklab, var(--section-accent) 22%, transparent)" }}
                />
              </Reveal>

              {/* Copy */}
              <Reveal delay={120} className={cn(flip && "lg:order-1")}>
                <span
                  className="text-sm font-semibold uppercase tracking-[0.2em]"
                  style={{ color: "var(--section-accent)" }}
                >
                  Service {s.n}
                </span>
                <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-[2.75rem] md:leading-[1.05]">
                  <SplitReveal text={s.title} />
                </h2>
                <p className="mt-3 text-lg font-medium text-gradient">{s.subtitle}</p>
                <p className="mt-5 max-w-lg leading-relaxed text-muted">{s.desc}</p>

                <ul className="mt-7 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                  {s.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-mist"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0"
                        style={{ color: "var(--section-accent)" }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link href={`/services/${s.id}`} className="btn btn-ghost mt-8 px-6 py-3">
                  Learn more <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Reveal>
            </div>
          </section>
        );
      })}
    </div>
  );
}
