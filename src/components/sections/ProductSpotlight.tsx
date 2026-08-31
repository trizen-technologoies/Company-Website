import Link from "next/link";
import { Phone, Mail, MessageCircle, ArrowUpRight, Sparkles } from "lucide-react";
import { Linkedin } from "@/components/ui/SocialIcons";
import { product } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";

const channelIcons = [Phone, Mail, MessageCircle, Linkedin];

export default function ProductSpotlight() {
  return (
    <section id="ai-sdr" className="section overflow-hidden">
      <div className="blob left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 bg-violet/15" />
      <div className="container-x relative">
        <div className="card relative overflow-hidden rounded-[2rem] p-8 sm:p-12 lg:p-16">
          <div className="grid-bg absolute inset-0 opacity-60" />
          <div className="blob right-[-10%] bottom-[-20%] h-[360px] w-[360px] bg-blue/20" />

          <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <Reveal>
                <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-cyan">
                  <Sparkles className="h-3.5 w-3.5" />
                  {product.badge}
                </span>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="font-display mt-6 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
                  {product.title}
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-4 text-lg font-medium text-gradient">
                  {product.tagline}
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-5 max-w-lg leading-relaxed text-muted">
                  {product.desc}
                </p>
              </Reveal>

              <Reveal delay={260}>
                <div className="mt-9 flex flex-wrap gap-8">
                  {product.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="font-display text-3xl font-semibold text-ink">
                        {m.value}
                      </div>
                      <div className="mt-1 text-xs text-muted">{m.label}</div>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={320}>
                <Link href="/products" className="btn btn-primary mt-9 px-7 py-3.5">
                  See the full product <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Reveal>
            </div>

            {/* Channel cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              {product.channels.map((c, i) => {
                const Icon = channelIcons[i];
                return (
                  <Reveal key={c.title} delay={i * 90}>
                    <div
                      data-cursor="hover"
                      className="card card-glow group h-full p-6"
                    >
                      <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-blue/20 to-violet/20 text-blue-bright ring-1 ring-line transition-all group-hover:from-blue group-hover:to-violet group-hover:text-[var(--accent-contrast)]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="font-display mt-4 text-base font-semibold text-ink">
                        {c.title}
                      </h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-muted">
                        {c.tag}
                      </p>
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
