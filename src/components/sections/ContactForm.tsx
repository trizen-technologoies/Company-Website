"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Send, Check, Loader2 } from "lucide-react";
import { contactSubjects } from "@/lib/content";
import { submitContact } from "@/lib/submitContact";
import { cn } from "@/lib/utils";

type FormValues = {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const searchParams = useSearchParams();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onBlur",
    defaultValues: { email: searchParams.get("email") ?? "" },
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const onSubmit = async (data: FormValues) => {
    setStatus("sending");
    try {
      await submitContact(data);
      setStatus("sent");
      reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      console.error("Contact form submission failed", err);
      setStatus("error");
    }
  };

  const field =
    "w-full rounded-xl border border-line bg-fill px-4 py-3 text-sm text-ink outline-none transition-all placeholder:text-faint focus:border-accent focus:bg-fill-2";
  const label = "mb-2 block text-xs font-medium uppercase tracking-wider text-muted";
  const errMsg = "mt-1.5 text-xs text-rose-400";

  if (status === "sent") {
    return (
      <div className="card flex min-h-[420px] flex-col items-center justify-center rounded-3xl p-10 text-center">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-blue to-violet">
          <Check className="h-8 w-8 text-[var(--accent-contrast)]" />
        </span>
        <h3 className="font-display mt-6 text-2xl font-semibold text-ink">
          Message sent!
        </h3>
        <p className="mt-2 max-w-sm text-muted">
          Thanks for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="btn btn-ghost mt-8 px-6 py-3"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="card rounded-3xl p-6 sm:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">Full name *</label>
          <input
            id="name"
            className={cn(field, errors.name && "border-rose-400/60")}
            placeholder="Your full name"
            {...register("name", { required: "Please enter your name" })}
          />
          {errors.name && <p className={errMsg}>{errors.name.message}</p>}
        </div>
        <div>
          <label className={label} htmlFor="email">Email address *</label>
          <input
            id="email"
            type="email"
            className={cn(field, errors.email && "border-rose-400/60")}
            placeholder="your@email.com"
            {...register("email", {
              required: "Please enter your email",
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" },
            })}
          />
          {errors.email && <p className={errMsg}>{errors.email.message}</p>}
        </div>
        <div>
          <label className={label} htmlFor="phone">Phone number</label>
          <input
            id="phone"
            type="tel"
            className={cn(field, errors.phone && "border-rose-400/60")}
            placeholder="+91 00000 00000"
            {...register("phone", {
              pattern: {
                value: /^[+]?[\d\s()-]{7,17}$/,
                message: "Enter a valid phone number",
              },
            })}
          />
          {errors.phone && <p className={errMsg}>{errors.phone.message}</p>}
        </div>
        <div>
          <label className={label} htmlFor="subject">Subject *</label>
          <select
            id="subject"
            defaultValue=""
            className={cn(field, "appearance-none", errors.subject && "border-rose-400/60")}
            {...register("subject", { required: "Please select a subject" })}
          >
            <option value="" disabled>Select a subject</option>
            {contactSubjects.map((s) => (
              <option key={s} value={s} className="bg-surface">
                {s}
              </option>
            ))}
          </select>
          {errors.subject && <p className={errMsg}>{errors.subject.message}</p>}
        </div>
      </div>

      <div className="mt-5">
        <label className={label} htmlFor="message">Message *</label>
        <textarea
          id="message"
          rows={5}
          className={cn(field, "resize-none", errors.message && "border-rose-400/60")}
          placeholder="Tell us about your project or question..."
          {...register("message", { required: "Please tell us about your project" })}
        />
        {errors.message && <p className={errMsg}>{errors.message.message}</p>}
      </div>

      {status === "error" && (
        <p className={cn(errMsg, "mt-4")}>
          Something went wrong sending your message. Please try again, or email us directly at{" "}
          <a href="mailto:trizen@trizentechnologies.com" className="underline">
            trizen@trizentechnologies.com
          </a>
          .
        </p>
      )}

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
            Send message <Send className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}
