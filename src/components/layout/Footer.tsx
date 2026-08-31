import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { Linkedin, Instagram } from "@/components/ui/SocialIcons";
import { site, nav, services } from "@/lib/content";
import Logo from "./Logo";
import Newsletter from "./Newsletter";
import FooterWordmark from "./FooterWordmark";

export default function Footer() {
  const year = new Date().getFullYear();
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(site.email)}`;
  const mapsUrl = site.mapsUrl;

  return (
    <footer className="relative overflow-hidden border-t border-line bg-void">
      <div className="blob left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/3 bg-violet/20" />
      <div className="noise pointer-events-none absolute inset-0" />

      {/* Oversized wordmark   gradient fills on scroll */}
      <div className="container-x relative overflow-hidden pt-24">
        <FooterWordmark />
      </div>

      {/* Link columns */}
      <div className="container-x relative mt-24 grid gap-12 border-t border-line py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
            Empowering businesses with AI-driven innovation. We integrate
            intelligent solutions into your applications to unlock new
            possibilities.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { icon: Linkedin, href: site.social.linkedin, label: "LinkedIn" },
              { icon: Instagram, href: site.social.instagram, label: "Instagram" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-line bg-fill text-muted transition-all hover:-translate-y-0.5 hover:border-line-strong hover:text-ink"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-faint">
            Company
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className="text-muted transition-colors hover:text-ink"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-faint">
            Services
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {services.map((s) => (
              <li key={s.id}>
                <Link
                  href={`/services/${s.id}`}
                  className="text-muted transition-colors hover:text-ink"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-faint">
            Stay in the loop
          </h3>
          <p className="mt-5 text-sm text-muted">
            AI insights and product updates. No noise.
          </p>
          <div className="mt-4">
            <Newsletter />
          </div>
          <ul className="mt-6 space-y-3 text-sm">
            <li>
              <a
                href={gmailUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted transition-colors hover:text-ink"
              >
                <Mail className="h-4 w-4 text-blue-bright" />
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted transition-colors hover:text-ink"
              >
                <MapPin className="h-4 w-4 text-blue-bright" />
                {site.location}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-line">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-faint sm:flex-row">
          <p>
            © {year} {site.full}. All rights reserved.
          </p>
          <p>{site.location}</p>
        </div>
      </div>
    </footer>
  );
}
