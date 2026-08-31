import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/content";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function Capabilities() {
  return (
    <section id="capabilities" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="What We Do"
          title={
            <>
              AI that works <span className="text-gradient">for you</span>
            </>
          }
          subtitle="We don't just build software   we infuse intelligence into it, making every application smarter, faster and more capable across the full technology stack."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={(i % 3) * 90}>
              <Link
                href={`/services#${s.id}`}
                data-cursor="hover"
                className="card card-glow group flex h-full flex-col overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover opacity-70 transition-all duration-700 group-hover:scale-110 group-hover:opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full border border-line-strong bg-void/60 px-3 py-1 text-xs font-medium text-mist backdrop-blur">
                    {s.n}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl font-semibold text-ink">
                      {s.title}
                    </h3>
                    <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-faint transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {s.desc}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-12 flex justify-center">
          <Link href="/services" className="btn btn-ghost px-7 py-3.5">
            View all services <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
