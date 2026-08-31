"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

/**
 * "Stay in the loop" isn't a real newsletter backend   it routes the visitor
 * to the full contact form with their email pre-filled, so they land
 * somewhere we can actually follow up.
 */
export default function Newsletter() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    router.push(`/contact?email=${encodeURIComponent(email)}#contact`);
  };

  return (
    <form onSubmit={submit} className="relative max-w-sm">
      <input
        type="email"
        name="email"
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@company.com"
        aria-label="Email address"
        suppressHydrationWarning
        className="w-full rounded-full border border-line bg-fill py-3.5 pl-5 pr-14 text-sm text-ink outline-none transition-colors placeholder:text-faint focus:border-accent focus:bg-fill-2"
      />
      <button
        type="submit"
        aria-label="Continue to contact form"
        className="absolute right-1.5 top-1.5 grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-blue to-violet text-[var(--accent-contrast)] transition-transform hover:scale-105"
      >
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}
