import Image from "next/image";
import { ArrowRight, PlayCircle } from "lucide-react";
import { ctaBand } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";
import SplitReveal from "@/components/ui/SplitReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import Sparkle from "@/components/ui/Sparkle";

/** Closing call-to-action band with warm glow + image backdrop. */
export default function CTABand() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2rem] ring-1 ring-line">
          <Image
            src="/media/office-wide.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg/70 via-bg/85 to-bg" />
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: "var(--wash)" }}
          />

          <div className="relative px-6 py-20 text-center sm:px-12 sm:py-28">
            <Reveal className="mx-auto w-fit">
              <Sparkle className="mx-auto h-9 w-9 animate-breathe text-accent" />
            </Reveal>
            <span className="eyebrow mt-6 justify-center">
              <span className="h-1 w-1 rounded-full bg-accent" />
              {ctaBand.eyebrow}
            </span>
            <h2 className="font-display mx-auto mt-4 max-w-3xl text-balance text-4xl font-semibold leading-[1.02] tracking-tight text-ink sm:text-6xl">
              {ctaBand.title.map((line, i) => (
                <span key={i} className="block overflow-hidden">
                  <SplitReveal
                    text={line}
                    delay={i * 0.08}
                    className={i === ctaBand.title.length - 1 ? "text-gradient" : ""}
                  />
                </span>
              ))}
            </h2>
            <Reveal delay={160}>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
                {ctaBand.sub}
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <MagneticButton href={ctaBand.primary.href}>
                  {ctaBand.primary.label}
                  <ArrowRight className="h-4 w-4" />
                </MagneticButton>
                <MagneticButton href={ctaBand.secondary.href} variant="ghost">
                  <PlayCircle className="h-4 w-4" />
                  {ctaBand.secondary.label}
                </MagneticButton>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
