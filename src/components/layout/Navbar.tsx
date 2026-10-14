"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X, Mail, ChevronDown } from "lucide-react";
import { nav, site, services } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Linkedin, Instagram } from "@/components/ui/SocialIcons";
import Logo from "./Logo";
import NavServicesMenu from "./NavServicesMenu";

const navLinks = nav.filter((item) => item.label !== "Contact");
const contactLink = nav.find((item) => item.label === "Contact");
const SERVICES_HREF = "/services";
const SERVICES_MENU_ID = "nav-services-menu";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const [onDark, setOnDark] = useState(false);

  // Desktop services dropdown: opens on hover/focus, closes after a short
  // grace period so the pointer can cross from the link into the panel.
  const [svcOpen, setSvcOpen] = useState(false);
  const svcTimer = useRef<number | undefined>(undefined);
  const openSvc = () => {
    window.clearTimeout(svcTimer.current);
    setSvcOpen(true);
  };
  const closeSvc = (delay = 140) => {
    window.clearTimeout(svcTimer.current);
    svcTimer.current = window.setTimeout(() => setSvcOpen(false), delay);
  };

  useEffect(() => {
    if (!svcOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSvcOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [svcOpen]);

  useEffect(() => () => window.clearTimeout(svcTimer.current), []);

  // The bar is transparent, so switch it to light text while it sits over a
  // dark video hero (sections marked data-nav-dark) to keep the links legible.
  useEffect(() => {
    const check = () => {
      if (!navRef.current) return;
      const r = navRef.current.getBoundingClientRect();
      const y = r.top + r.height / 2;
      setOnDark(
        Array.from(document.querySelectorAll("[data-nav-dark]")).some((el) => {
          const b = el.getBoundingClientRect();
          return b.top <= y && b.bottom >= y;
        })
      );
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [pathname]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 py-4">
        <div className="container-x">
          <nav
            ref={navRef}
            className={cn(
              // Mostly opaque so the bar reads the same cream over light and dark heroes alike
              "relative mx-auto flex w-full items-center justify-between rounded-2xl border border-line bg-bg/85 px-4 py-2.5 backdrop-blur-xl",
              onDark && !open && "force-dark"
            )}
          >
            <div className="shrink-0">
              <Logo />
            </div>

            <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
              {navLinks.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                const isServices = item.href === SERVICES_HREF;
                return (
                  <li
                    key={item.href}
                    className={isServices ? "relative" : undefined}
                    {...(isServices
                      ? {
                          onMouseEnter: openSvc,
                          onMouseLeave: () => closeSvc(),
                          onFocus: openSvc,
                          onBlur: (e: React.FocusEvent<HTMLLIElement>) => {
                            if (!e.currentTarget.contains(e.relatedTarget as Node | null)) closeSvc(0);
                          },
                        }
                      : {})}
                  >
                    <Link
                      href={item.href}
                      onClick={isServices ? () => setSvcOpen(false) : undefined}
                      aria-haspopup={isServices ? "true" : undefined}
                      aria-expanded={isServices ? svcOpen : undefined}
                      aria-controls={isServices ? SERVICES_MENU_ID : undefined}
                      className={cn(
                        "relative whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors",
                        active || (isServices && svcOpen) ? "text-ink" : "text-muted hover:text-ink"
                      )}
                    >
                      {active && (
                        <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-accent" />
                      )}
                      <span className="relative inline-flex items-center gap-1">
                        {item.label}
                        {isServices && (
                          <ChevronDown
                            aria-hidden="true"
                            className={cn(
                              "h-3.5 w-3.5 transition-transform duration-300",
                              svcOpen && "rotate-180"
                            )}
                          />
                        )}
                      </span>
                    </Link>
                    {isServices && (
                      <NavServicesMenu
                        id={SERVICES_MENU_ID}
                        open={svcOpen}
                        pathname={pathname}
                        onNavigate={() => setSvcOpen(false)}
                      />
                    )}
                  </li>
                );
              })}
            </ul>

            {contactLink && (
              <div className="hidden shrink-0 md:block">
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
          "fixed inset-0 z-40 flex flex-col overflow-y-auto px-6 pb-8 pt-28 transition-all duration-500 md:hidden",
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
                </Link>
                {item.href === SERVICES_HREF && (
                  <ul
                    className="grid grid-cols-2 gap-x-4 gap-y-2.5 pb-5 pl-8"
                    style={{
                      transitionDelay: `${i * 40 + 20}ms`,
                      transform: open ? "none" : "translateY(16px)",
                      opacity: open ? 1 : 0,
                      transition: "transform 0.5s var(--ease-out-expo), opacity 0.5s var(--ease-out-expo)",
                    }}
                  >
                    {services.map((s) => (
                      <li key={s.id}>
                        <Link
                          href={`/services/${s.id}`}
                          onClick={() => setOpen(false)}
                          className={cn(
                            "text-sm leading-snug transition-colors",
                            pathname === `/services/${s.id}` ? "text-accent" : "text-muted hover:text-ink"
                          )}
                        >
                          {s.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
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
    </>
  );
}
