import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Check, ArrowRight } from "lucide-react";
import { services, serviceExtra } from "@/lib/content";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import SplitReveal from "@/components/ui/SplitReveal";
import Sparkle from "@/components/ui/Sparkle";
import MagneticButton from "@/components/ui/MagneticButton";
import CTABand from "@/components/sections/CTABand";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.id === slug);
  if (!s) return {};
  return { title: s.title, description: s.desc };
}

export default async function ServiceDetailPage({ params }: Params) {
  const { slug } = await params;
  const s = services.find((x) => x.id === slug);
  const extra = serviceExtra[slug];
  if (!s || !extra) notFound();

  const idx = services.findIndex((x) => x.id === slug);
  const next = services[(idx + 1) % services.length];

  return (
    <>
      {/* ---------- Hero (video) ---------- */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={extra.poster}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={extra.video} type="video/mp4" />
        </video>
        {/* Fixed dark scrims   readable in both themes */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/55" />
        <div className="absolute inset-0 bg-accent/10 mix-blend-overlay" />

        <div className="container-x relative z-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> All services
          </Link>

          <div className="mt-6 flex items-center gap-3">
            <Sparkle className="h-7 w-7 animate-breathe text-accent" />
            <span
              className="text-sm font-semibold uppercase tracking-[0.2em]"
              style={{ color: "var(--accent-3)" }}
            >
              Service {s.n}
            </span>
          </div>

          <h1 className="font-display mt-4 max-w-3xl text-balance text-[clamp(2.4rem,6vw,4.6rem)] font-semibold leading-[1.02] tracking-tight text-white">
            <SplitReveal text={s.title} immediate delay={0.1} />
          </h1>
          <p className="mt-5 max-w-xl text-xl leading-relaxed text-white/80">
            {extra.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <MagneticButton href="/contact">
              Start a project <ArrowUpRight className="h-4 w-4" />
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* ---------- Overview + outcomes ---------- */}
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="eyebrow">
                <span className="h-1 w-1 rounded-full bg-accent" />
                Overview
              </span>
            </Reveal>
            <h2 className="font-display mt-4 text-balance text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
              {s.subtitle}
            </h2>
            <div className="mt-6 space-y-5">
              {extra.intro.map((p, i) => (
                <Reveal key={i} delay={80 + i * 80}>
                  <p className="max-w-xl text-lg leading-relaxed text-muted">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 lg:col-span-5 lg:grid-cols-1">
            {extra.outcomes.map((o, i) => (
              <Reveal key={o.label} delay={i * 90}>
                <div className="card p-6 text-center lg:text-left">
                  <div className="font-display text-4xl font-semibold text-gradient">
                    {o.value}
                  </div>
                  <div className="mt-1.5 text-sm text-muted">{o.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- What we do ---------- */}
      <section className="section pt-0">
        <div className="container-x">
          <SectionHeading
            eyebrow="What we do"
            title={
              <>
                Our approach to{" "}
                <span className="text-gradient">{s.title.toLowerCase()}</span>
              </>
            }
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {extra.whatWeDo.map((w, i) => (
              <Reveal key={w.title} delay={i * 90}>
                <div className="card card-glow group h-full p-8">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl border border-line bg-fill text-accent transition-transform duration-300 group-hover:-translate-y-0.5">
                    <Sparkle className="h-5 w-5" />
                  </span>
                  <h3 className="font-display mt-5 text-xl font-semibold text-ink">
                    {w.title}
                  </h3>
                  <p className="mt-2.5 leading-relaxed text-muted">{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Deliverables + gallery ---------- */}
      <section className="section pt-0">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="eyebrow">
              <span className="h-1 w-1 rounded-full bg-accent" />
              What&apos;s included
            </span>
            <h2 className="font-display mt-4 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Everything you get
            </h2>
            <ul className="mt-7 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {s.includes.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-mist">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-2">
              {extra.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-line bg-fill px-4 py-1.5 text-sm font-medium text-mist"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-line">
                <Image src={extra.gallery[0]} alt="" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
              </div>
              {extra.gallery.slice(1, 3).map((g) => (
                <div key={g} className="relative aspect-square overflow-hidden rounded-2xl ring-1 ring-line">
                  <Image src={g} alt="" fill sizes="(max-width:1024px) 50vw, 25vw" className="object-cover" />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Next service ---------- */}
      <section className="section pt-0">
        <div className="container-x">
          <Reveal>
            <Link
              href={`/services/${next.id}`}
              className="card card-glow group flex items-center justify-between gap-6 overflow-hidden p-8 sm:p-10"
            >
              <div>
                <span className="text-sm font-medium text-muted">Next service</span>
                <h3 className="font-display mt-2 text-2xl font-semibold text-ink sm:text-3xl">
                  {next.title}
                </h3>
                <p className="mt-1 text-muted">{next.subtitle}</p>
              </div>
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-line-strong text-ink transition-all duration-300 group-hover:translate-x-1 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-accent group-hover:to-accent-2 group-hover:text-[var(--accent-contrast)]">
                <ArrowRight className="h-5 w-5" />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
