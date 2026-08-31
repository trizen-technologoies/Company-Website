"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/content";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              align="left"
              eyebrow="FAQ"
              title={
                <>
                  Questions,{" "}
                  <span className="text-gradient">answered</span>
                </>
              }
              subtitle="Everything you need to know about working with an AI-first partner. Still curious? Talk to our team."
            />
          </div>

          <div className="lg:col-span-7">
            <div className="divide-y divide-line border-y border-line">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <Reveal key={f.q} delay={i * 50}>
                    <div>
                      <button
                        onClick={() => setOpen(isOpen ? null : i)}
                        className="flex w-full items-center justify-between gap-6 py-6 text-left"
                        aria-expanded={isOpen}
                      >
                        <span
                          className={cn(
                            "font-display text-lg font-medium transition-colors",
                            isOpen ? "text-ink" : "text-mist"
                          )}
                        >
                          {f.q}
                        </span>
                        <span
                          className={cn(
                            "grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-500",
                            isOpen
                              ? "rotate-180 border-transparent bg-gradient-to-br from-blue to-violet text-[var(--accent-contrast)]"
                              : "border-line-strong text-muted"
                          )}
                        >
                          <ChevronDown className="h-4 w-4" />
                        </span>
                      </button>
                      <div
                        className="grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                        style={{
                          gridTemplateRows: isOpen ? "1fr" : "0fr",
                        }}
                      >
                        <div className="overflow-hidden">
                          <p className="pb-6 pr-12 leading-relaxed text-muted">
                            {f.a}
                          </p>
                        </div>
                      </div>
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
