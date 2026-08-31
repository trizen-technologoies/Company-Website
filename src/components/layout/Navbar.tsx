"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight, Mail } from "lucide-react";
import { nav, site } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Linkedin, Instagram } from "@/components/ui/SocialIcons";
import Logo from "./Logo";

const navLinks = nav.filter((item) => item.label !== "Contact");
const contactLink = nav.find((item) => item.label === "Contact");

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const ulRef = useRef<HTMLUListElement>(null);
  const [pillWidth, setPillWidth] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Measure the (always-rendered, absolutely-positioned) links row so the
  // scrolled pill can shrink-wrap to fit it exactly, rather than guessing a
  // fixed width - keeps the "AI SDR" / "Contact" labels from wrapping.
  useLayoutEffect(() => {
    const measure = () => {
      if (ulRef.current) setPillWidth(ulRef.current.getBoundingClientRect().width);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [scrolled, pathname]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-[1400ms] ease-out",
          scrolled ? "py-2.5" : "py-4"
        )}
      >
        <div className="container-x">
          <nav
            className={cn(
              "nav-bar relative mx-auto flex items-center justify-between overflow-hidden border border-line backdrop-blur-xl backdrop-saturate-150",
              scrolled
                ? "is-scrolled px-3 py-1.5 shadow-[0_12px_40px_-20px_rgba(0,0,0,0.5)]"
                : "w-full px-4 py-2.5"
            )}
            style={{
              ...(scrolled && pillWidth ? { width: pillWidth + 40 } : {}),
              // An explicit, modest px value (not Tailwind's rounded-full ->
              // 9999px) so border-radius interpolates smoothly the whole
              // way - animating from 9999px down to 16px spends almost the
              // entire transition clamped at "fully round" (since any value
              // above ~half the pill's height looks identical), then snaps
              // in the last instant once it finally drops below that.
              borderRadius: scrolled ? 28 : 16,
              // Same duration, no relative delay: the pill's edges and the
              // logo/contact motion move together as one shrink, instead of
              // the logo disappearing before the bar itself has moved.
              transition:
                "width 1.4s var(--ease-out-expo), padding 1.4s var(--ease-out-expo), border-radius 1.4s var(--ease-out-expo), box-shadow 1.4s var(--ease-out-expo), background 1.4s var(--ease-out-expo)",
            }}
          >
            <div
              className="shrink-0 overflow-hidden"
              style={{
                maxWidth: scrolled ? 0 : 220,
                opacity: scrolled ? 0 : 1,
                // Slides toward the middle as it fades, in step with the
                // pill's own width change - not before it.
                transform: `translateX(${scrolled ? 36 : 0}px)`,
                transition:
                  "max-width 1.4s var(--ease-out-expo), opacity 1.1s var(--ease-out-expo), transform 1.4s var(--ease-out-expo)",
              }}
            >
              <Logo />
            </div>

            <ul
              ref={ulRef}
              className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex"
            >
              {(scrolled ? nav : navLinks).map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                const isContact = scrolled && item.label === "Contact";
                return (
                  <li
                    key={item.href}
                    style={
                      isContact
                        ? { animation: "navContactIn 0.9s var(--ease-out-expo) both" }
                        : undefined
                    }
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "relative whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors",
                        active ? "text-ink" : "text-muted hover:text-ink"
                      )}
                    >
                      {active && (
                        <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-accent" />
                      )}
                      <span className="relative">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            {contactLink && (
              <div
                className="hidden shrink-0 overflow-hidden md:block"
                style={{
                  maxWidth: scrolled ? 0 : 200,
                  opacity: scrolled ? 0 : 1,
                  // Detaches and slides left toward the group in step with
                  // the pill's own width change, mirroring the logo's motion
                  // on the opposite edge.
                  transform: `translateX(${scrolled ? -36 : 0}px)`,
                  transition:
                    "max-width 0.9s var(--ease-out-expo), opacity 0.7s var(--ease-out-expo), transform 0.9s var(--ease-out-expo)",
                }}
              >
                <Link
                  href={contactLink.href}
                  className={cn(
                    "btn inline-flex shrink-0 whitespace-nowrap px-5 py-2 text-sm",
                    pathname.startsWith(contactLink.href) ? "btn-primary" : "btn-ghost"
                  )}
                >
                  {contactLink.label}
                </Link>
              </div>
            )}

            <button
              className="grid h-10 w-10 place-items-center rounded-xl text-ink md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col px-6 pb-8 pt-28 transition-all duration-500 md:hidden",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
      >
        <div className="absolute inset-0 bg-void/85 backdrop-blur-2xl" />

        <ul className="relative">
          {nav.map((item, i) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <li key={item.href} className="border-b border-line/60">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "font-display flex items-center justify-between gap-4 py-4 text-2xl font-semibold tracking-tight transition-colors",
                    active ? "text-ink" : "text-muted"
                  )}
                  style={{
                    transitionDelay: `${i * 40}ms`,
                    transform: open ? "none" : "translateY(16px)",
                    opacity: open ? 1 : 0,
                    transition: "transform 0.5s var(--ease-out-expo), opacity 0.5s var(--ease-out-expo), color 0.2s",
                  }}
                >
                  <span className="flex items-baseline gap-3">
                    <span className="font-sans text-xs font-medium text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item.label}
                  </span>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-faint" />
                </Link>
              </li>
            );
          })}
        </ul>

        <div
          className="relative mt-auto flex items-center justify-between gap-4 pt-8"
          style={{
            transitionDelay: `${nav.length * 40}ms`,
            transform: open ? "none" : "translateY(16px)",
            opacity: open ? 1 : 0,
            transition: "transform 0.5s var(--ease-out-expo), opacity 0.5s var(--ease-out-expo)",
          }}
        >
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
          >
            <Mail className="h-4 w-4 text-accent" />
            {site.email}
          </a>
          <div className="flex items-center gap-3">
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
                className="grid h-9 w-9 place-items-center rounded-full border border-line text-muted transition-colors hover:border-line-strong hover:text-ink"
              >
                <Icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes navContactIn {
          from { opacity: 0; transform: translateX(18px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </>
  );
}
