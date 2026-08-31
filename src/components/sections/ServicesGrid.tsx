import Link from "next/link";
import {
  Globe, Smartphone, Bot, Workflow, Boxes, ShieldCheck, LineChart, ArrowUpRight,
} from "lucide-react";
import { services } from "@/lib/content";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const icons: Record<string, React.ElementType> = {
  web: Globe,
  mobile: Smartphone,
  ai: Bot,
  automation: Workflow,
  arvr: Boxes,
  qa: ShieldCheck,
  seo: LineChart,
};

export default function ServicesGrid() {
  return (
    <section id="services" className="section">
      <div className="blob right-[-6%] top-1/4 h-[420px] w-[420px] bg-indigo/15" />
      <div className="container-x relative">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            align="left"
            eyebrow="Our Services"
            title={
              <>
                Full-spectrum <span className="text-gradient">tech services</span>
              </>
            }
            subtitle="From web and mobile to AI integration, automation and QA   we cover every layer of your technology stack."
          />
          <Reveal delay={200}>
            <Link href="/services" className="btn btn-ghost shrink-0 px-6 py-3">
              View all services <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = icons[s.id] ?? Bot;
            return (
              <Reveal key={s.id} delay={(i % 3) * 80}>
                <Link
                  href={`/services#${s.id}`}
                  data-cursor="hover"
                  className="card card-glow group flex h-full flex-col p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl border border-line bg-fill text-blue-bright transition-all duration-500 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-blue group-hover:to-violet group-hover:text-[var(--accent-contrast)]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-faint transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
                  </div>
                  <h3 className="font-display mt-6 text-lg font-semibold text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {s.subtitle}.
                  </p>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
