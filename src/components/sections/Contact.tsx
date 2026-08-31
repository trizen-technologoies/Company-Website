import { Suspense } from "react";
import { Mail, MapPin, Check } from "lucide-react";
import { Linkedin, Instagram } from "@/components/ui/SocialIcons";
import { site, contactPromises } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";
import Sparkle from "@/components/ui/Sparkle";
import ContactForm from "./ContactForm";

export default function Contact() {
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(site.email)}`;
  const mapsUrl = site.mapsUrl;

  return (
    <section id="contact" className="section overflow-hidden pt-4">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{ background: "var(--wash)" }}
      />
      <div className="container-x relative">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Left: info */}
          <Reveal className="lg:col-span-5">
            <div className="flex flex-col gap-4">
              <a
                href={gmailUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="card card-glow group flex items-center gap-4 p-6"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-accent to-accent-2 text-[var(--accent-contrast)]">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm font-medium text-ink">Email us</div>
                  <div className="text-sm text-muted group-hover:text-mist">
                    {site.email}
                  </div>
                </div>
              </a>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="card card-glow group flex items-center gap-4 p-6"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-accent to-accent-2 text-[var(--accent-contrast)]">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm font-medium text-ink">Location</div>
                  <div className="text-sm text-muted group-hover:text-mist">
                    {site.location} · Serving clients globally
                  </div>
                </div>
              </a>

              <div className="card relative overflow-hidden p-6">
                <Sparkle className="pointer-events-none absolute -right-4 -top-4 h-20 w-20 text-accent opacity-[0.07]" />
                <h3 className="font-display text-base font-semibold text-ink">
                  What you can expect
                </h3>
                <ul className="mt-4 space-y-3">
                  {contactPromises.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-sm text-mist">
                      <span className="grid h-5 w-5 place-items-center rounded-full bg-accent/15">
                        <Check className="h-3 w-3 text-accent" />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center gap-3 border-t border-line pt-6">
                  <span className="text-xs uppercase tracking-wider text-faint">
                    Follow us
                  </span>
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
                      className="grid h-9 w-9 place-items-center rounded-full border border-line bg-fill text-muted transition-all hover:-translate-y-0.5 hover:border-line-strong hover:text-ink"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={120} className="lg:col-span-7">
            <div className="mb-5 flex items-center gap-3">
              <Sparkle className="h-6 w-6 text-accent" />
              <h2 className="font-display text-xl font-semibold text-ink">
                Send us a message
              </h2>
            </div>
            <Suspense fallback={null}>
              <ContactForm />
            </Suspense>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
