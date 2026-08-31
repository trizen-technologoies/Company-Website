import Image from "next/image";
import { aboutTeam } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";
import SplitReveal from "@/components/ui/SplitReveal";

/** Team / people   copy on one side, an image collage on the other. */
export default function AboutTeam() {
  return (
    <section className="section overflow-hidden">
      <div className="container-x">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Copy */}
          <div>
            <Reveal>
              <span className="eyebrow">
                <span className="h-1 w-1 rounded-full bg-accent" />
                {aboutTeam.eyebrow}
              </span>
            </Reveal>
            <h2 className="font-display mt-4 text-balance text-4xl font-semibold leading-[1.03] tracking-tight sm:text-5xl">
              {aboutTeam.heading.map((line, i) => (
                <span key={i} className="block overflow-hidden">
                  <SplitReveal
                    text={line}
                    delay={i * 0.08}
                    className={i === aboutTeam.heading.length - 1 ? "text-gradient" : ""}
                  />
                </span>
              ))}
            </h2>
            <Reveal delay={140}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
                {aboutTeam.body}
              </p>
            </Reveal>
            <Reveal delay={220}>
              <ul className="mt-7 flex flex-wrap gap-2.5">
                {aboutTeam.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-line bg-fill px-4 py-1.5 text-sm font-medium text-mist"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Collage   two offset columns */}
          <div className="grid grid-cols-2 gap-4">
            {[0, 1].map((col) => (
              <div key={col} className={`flex flex-col gap-4 ${col === 1 ? "mt-8" : ""}`}>
                {aboutTeam.images
                  .filter((_, idx) => idx % 2 === col)
                  .map((img, i) => (
                    <Reveal key={img.src} delay={col * 120 + i * 120}>
                      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-line">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          sizes="(max-width: 1024px) 50vw, 25vw"
                          className="object-cover transition-transform duration-700 hover:scale-105"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/40 to-transparent" />
                      </div>
                    </Reveal>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
