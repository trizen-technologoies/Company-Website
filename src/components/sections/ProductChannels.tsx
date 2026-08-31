"use client";

import { useState } from "react";
import { Phone, Mail, MessageCircle, Check } from "lucide-react";
import { Linkedin } from "@/components/ui/SocialIcons";
import { product } from "@/lib/content";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const icons = [Phone, Mail, MessageCircle, Linkedin];

export default function ProductChannels() {
  const [active, setActive] = useState(0);
  const c = product.channels[active];
  const Icon = icons[active];

  return (
    <section className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="Outreach Channels"
          title={
            <>
              4 channels. <span className="text-gradient">One system.</span>
            </>
          }
          subtitle="Reach prospects wherever they are   with AI that personalizes every touchpoint across every channel."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          {/* Tabs */}
          <Reveal className="lg:col-span-4">
            <div className="flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
              {product.channels.map((ch, i) => {
                const TabIcon = icons[i];
                const on = i === active;
                return (
                  <button
                    key={ch.title}
                    onClick={() => setActive(i)}
                    className={cn(
                      "group flex min-w-[220px] items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-500 lg:min-w-0",
                      on
                        ? "border-transparent bg-fill-2 ring-1 ring-accent/45"
                        : "border-line bg-fill hover:bg-fill"
                    )}
                  >
                    <span
                      className={cn(
                        "grid h-11 w-11 shrink-0 place-items-center rounded-xl transition-all",
                        on
                          ? "bg-gradient-to-br from-blue to-violet text-[var(--accent-contrast)]"
                          : "bg-fill text-muted"
                      )}
                    >
                      <TabIcon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className={cn("font-medium", on ? "text-ink" : "text-mist")}>
                        {ch.title}
                      </div>
                      <div className="text-xs text-muted">{ch.tag}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* Panel */}
          <div className="lg:col-span-8">
            <div
              key={active}
              className="card relative overflow-hidden rounded-3xl p-8 sm:p-10"
              style={{ animation: "fadeInPanel 0.5s var(--ease-out-expo)" }}
            >
              <div className="blob right-0 top-0 h-64 w-64 bg-violet/15" />
              <div className="relative flex items-center gap-4">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-blue to-violet text-[var(--accent-contrast)]">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-ink">
                    {c.title}
                  </h3>
                  <p className="text-sm text-gradient">{c.tag}</p>
                </div>
              </div>
              <p className="relative mt-6 max-w-xl leading-relaxed text-muted">
                {c.desc}
              </p>

              <div className="relative mt-7 flex items-center gap-4 rounded-2xl border border-line bg-fill p-5">
                <span className="font-display shrink-0 text-3xl font-semibold text-gradient sm:text-4xl">
                  {c.stat.value}
                </span>
                <span className="text-sm leading-snug text-mist">{c.stat.label}</span>
              </div>

              <ul className="relative mt-8 grid gap-x-6 gap-y-3.5 sm:grid-cols-2">
                {c.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-mist">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-cyan/15">
                      <Check className="h-3 w-3 text-cyan" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInPanel {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: none; }
        }
      `}</style>
    </section>
  );
}
