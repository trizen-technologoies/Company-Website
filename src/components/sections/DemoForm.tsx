"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type Values = { name: string; company: string; email: string; phone?: string };

export default function DemoForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Values>();
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const onSubmit = async (data: Values) => {
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1400));
    console.info("Demo request", data);
    setStatus("sent");
    reset();
  };

  const field =
    "w-full rounded-xl border border-line bg-fill px-4 py-3 text-sm text-ink outline-none transition-all placeholder:text-faint focus:border-accent focus:bg-fill-2";
  const label = "mb-2 block text-xs font-medium uppercase tracking-wider text-muted";

  return (
    <section id="demo" className="section">
      <div className="container-x">
        <div className="mx-auto max-w-2xl">
          <SectionHeading
            eyebrow="Get Started"
            title={
              <>
                Request a <span className="text-gradient">demo</span>
              </>
            }
            subtitle="See the AI SDR Outreach System in action. Fill in your details and our team will reach out within 24 hours."
          />

          <Reveal delay={120} className="mt-12">
            {status === "sent" ? (
              <div className="card flex flex-col items-center rounded-3xl p-10 text-center">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-blue to-violet">
                  <Check className="h-8 w-8 text-[var(--accent-contrast)]" />
                </span>
                <h3 className="font-display mt-6 text-2xl font-semibold">
                  Demo requested!
                </h3>
                <p className="mt-2 text-muted">
                  We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="card rounded-3xl p-6 sm:p-8" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className={label}>Full name *</label>
                    <input
                      className={cn(field, errors.name && "border-rose-400/60")}
                      placeholder="Your name"
                      {...register("name", { required: true })}
                    />
                  </div>
                  <div>
                    <label className={label}>Company *</label>
                    <input
                      className={cn(field, errors.company && "border-rose-400/60")}
                      placeholder="Company name"
                      {...register("company", { required: true })}
                    />
                  </div>
                  <div>
                    <label className={label}>Email *</label>
                    <input
                      type="email"
                      className={cn(field, errors.email && "border-rose-400/60")}
                      placeholder="your@email.com"
                      {...register("email", {
                        required: true,
                        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      })}
                    />
                  </div>
                  <div>
                    <label className={label}>Phone</label>
                    <input
                      className={field}
                      placeholder="+91 00000 00000"
                      {...register("phone")}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn btn-primary mt-6 w-full py-3.5 disabled:opacity-70"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      Request demo <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
