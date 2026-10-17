"use client";

import { useEffect, useRef, useState, type ComponentType, type KeyboardEvent, type ReactNode } from "react";
import {
  Phone,
  Mail,
  MessageCircle,
  Check,
  CheckCheck,
  CalendarCheck,
  Eye,
  Link2,
  MessageSquareText,
} from "lucide-react";
import { Linkedin } from "@/components/ui/SocialIcons";
import { product } from "@/lib/content";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type Icon = ComponentType<{ className?: string }>;

const icons: Icon[] = [Phone, Mail, MessageCircle, Linkedin];
const previews = [CallPreview, EmailPreview, WhatsAppPreview, LinkedInPreview];

/** How long each channel stays on screen while auto-advancing. */
const DURATION = 8000;

/**
 * Outreach channels: four channel tabs over one large panel. Each panel pairs
 * the channel's pitch, headline stat and features with a small live product
 * preview. Tabs auto-advance (gold progress bar) while the section is in view,
 * pause on hover, and stop for good once a tab is picked. Panels share one grid
 * cell so the section never changes height between channels.
 * Touch / small screens and reduced-motion: no auto-advance.
 */
export default function ProductChannels() {
  const root = useRef<HTMLDivElement>(null);
  const channels = product.channels;
  const n = channels.length;
  const [active, setActive] = useState(0);
  const [armed, setArmed] = useState(false);
  const [inView, setInView] = useState(false);
  const [hover, setHover] = useState(false);
  const [stopped, setStopped] = useState(false);

  useEffect(() => {
    const el = root.current;
    // Desktop pointers only: without hover there is no way to pause, and on
    // phones the panel would change under someone mid-read.
    const canAutoplay =
      window.matchMedia("(hover: hover) and (min-width: 1024px)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!el || !canAutoplay) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        setArmed(true);
        setInView(entry.isIntersecting);
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const autoplay = armed && !stopped;

  const select = (i: number) => {
    setStopped(true);
    setActive(i);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const step = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    e.preventDefault();
    const i = (active + step + n) % n;
    select(i);
    document.getElementById(`channel-tab-${i}`)?.focus();
  };

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

        <div
          ref={root}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {/* Tabs */}
          <Reveal>
            <div
              role="tablist"
              aria-label="Outreach channels"
              onKeyDown={onKeyDown}
              className="mt-14 grid grid-cols-2 gap-3 lg:grid-cols-4"
            >
              {channels.map((ch, i) => {
                const TabIcon = icons[i];
                const on = i === active;
                return (
                  <button
                    key={ch.title}
                    id={`channel-tab-${i}`}
                    type="button"
                    role="tab"
                    aria-selected={on}
                    aria-controls={`channel-panel-${i}`}
                    tabIndex={on ? 0 : -1}
                    onClick={() => select(i)}
                    className={cn(
                      "group relative flex flex-col overflow-hidden rounded-2xl border p-4 text-left transition-all duration-500 sm:p-5",
                      on
                        ? "border-accent/45 bg-surface shadow-[0_18px_40px_-24px_var(--glow)]"
                        : "border-line bg-fill hover:border-line-strong hover:bg-fill-2"
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={cn(
                          "grid h-10 w-10 place-items-center rounded-xl transition-colors duration-500",
                          on
                            ? "bg-gradient-to-br from-accent to-accent-2 text-[var(--accent-contrast)]"
                            : "bg-fill-2 text-muted group-hover:text-ink"
                        )}
                      >
                        <TabIcon className="h-[1.125rem] w-[1.125rem]" />
                      </span>
                      <span
                        className={cn(
                          "font-display text-sm font-semibold tabular-nums transition-colors duration-500",
                          on ? "text-accent-bright" : "text-faint"
                        )}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div
                      className={cn(
                        "font-display mt-4 text-base font-semibold sm:text-lg",
                        on ? "text-ink" : "text-mist"
                      )}
                    >
                      {ch.title}
                    </div>
                    <div className="mt-0.5 text-xs text-muted sm:text-sm">{ch.tag}</div>

                    {/* Active marker; doubles as the auto-advance progress bar */}
                    {on && (
                      <span
                        className="absolute inset-x-0 bottom-0 h-[3px] origin-left bg-gradient-to-r from-accent to-accent-3"
                        style={
                          autoplay
                            ? {
                                animation: `chProgress ${DURATION}ms linear forwards`,
                                animationPlayState: inView && !hover ? "running" : "paused",
                              }
                            : undefined
                        }
                        onAnimationEnd={autoplay ? () => setActive((a) => (a + 1) % n) : undefined}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* Panels */}
          <Reveal delay={120}>
            <div className="mt-6 grid">
              {channels.map((c, i) => {
                const on = i === active;
                const Preview = previews[i];
                return (
                  <div
                    key={c.title}
                    id={`channel-panel-${i}`}
                    role="tabpanel"
                    aria-labelledby={`channel-tab-${i}`}
                    className={cn(
                      "col-start-1 row-start-1 transition-[opacity,translate,visibility] duration-700 ease-[var(--ease-out-expo)]",
                      on ? "visible translate-y-0 opacity-100" : "invisible translate-y-4 opacity-0"
                    )}
                  >
                    <div className="card h-full rounded-[2rem] p-6 sm:p-10">
                      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
                        <div className="lg:col-span-7">
                          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-bright">
                            Channel {String(i + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
                          </span>
                          <h3 className="font-display mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                            {c.title}
                          </h3>
                          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">{c.desc}</p>

                          <div className="mt-7 flex items-center gap-5 border-y border-line py-5">
                            <span className="font-display shrink-0 text-5xl font-semibold leading-[1.05] tracking-tight text-gradient sm:text-6xl">
                              {c.stat.value}
                            </span>
                            <span className="max-w-xs text-sm leading-snug text-mist">{c.stat.label}</span>
                          </div>

                          <ul className="mt-7 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                            {c.points.map((p) => (
                              <li key={p} className="flex items-start gap-2.5 text-[0.95rem] text-mist">
                                <Check className="mt-1 h-4 w-4 shrink-0 text-accent" />
                                {p}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="lg:col-span-5">
                          <Preview />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        @keyframes chProgress { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @keyframes chBar { from { transform: scaleY(0.45); } to { transform: scaleY(1); } }
        @media (prefers-reduced-motion: reduce) {
          [style*="chBar"] { animation: none !important; }
        }
      `}</style>
    </section>
  );
}

/* ---------------------------------------------------------------------------
   Channel previews: small illustrative product mock-ups (decorative, so they
   are hidden from assistive tech). Always dark, like the hero's live cards.
   --------------------------------------------------------------------------- */

function PreviewShell({
  icon: Icon,
  label,
  status,
  children,
}: {
  icon: Icon;
  label: string;
  status: string;
  children: ReactNode;
}) {
  return (
    <div
      aria-hidden
      className="force-dark relative overflow-hidden rounded-3xl p-5 text-ink shadow-[0_30px_70px_-34px_rgba(60,35,10,0.6)] ring-1 ring-white/10 sm:p-6"
      style={{ background: "linear-gradient(160deg, #211b12 0%, #0f0c08 100%)" }}
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-accent/20 blur-3xl" />
      <div className="relative flex items-center justify-between gap-3 text-xs text-muted">
        <span className="inline-flex items-center gap-2 font-medium">
          <Icon className="h-3.5 w-3.5 text-accent" />
          {label}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-emerald-400" />
          {status}
        </span>
      </div>
      <div className="relative mt-5">{children}</div>
    </div>
  );
}

function Person({ initials, name, role, badge }: { initials: string; name: string; role: string; badge?: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-accent-3 to-accent-2 text-sm font-semibold text-[var(--accent-contrast)]">
        {initials}
      </span>
      <div className="min-w-0">
        <div className="flex items-center gap-2 text-sm font-medium text-ink">
          {name}
          {badge && <span className="rounded bg-white/10 px-1.5 text-[0.65rem] text-muted">{badge}</span>}
        </div>
        <div className="truncate text-xs text-muted">{role}</div>
      </div>
    </div>
  );
}

/** Chat / transcript bubble: the AI's lines sit right in amber, the prospect's left. */
function Bubble({ from, meta, children }: { from: "ai" | "them"; meta?: ReactNode; children: ReactNode }) {
  const ai = from === "ai";
  return (
    <div className={cn("flex", ai ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[85%] rounded-2xl px-3.5 py-2.5 leading-snug",
          ai ? "rounded-br-md bg-accent/15 text-ink ring-1 ring-accent/25" : "rounded-bl-md bg-white/[0.07] text-mist"
        )}
      >
        {children}
        {meta && (
          <div className="mt-1 flex items-center justify-end gap-1 text-[0.7rem] text-muted">{meta}</div>
        )}
      </div>
    </div>
  );
}

function Chip({ icon: Icon, accent, children }: { icon: Icon; accent?: boolean; children: ReactNode }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium",
        accent ? "bg-accent/15 text-accent-3 ring-1 ring-accent/30" : "bg-white/[0.07] text-mist"
      )}
    >
      <Icon className="h-3.5 w-3.5" />
      {children}
    </span>
  );
}

const WAVE = [
  30, 55, 40, 70, 90, 60, 80, 45, 65, 50, 75, 35, 60, 85, 50, 40, 70, 55, 95, 65, 45, 75, 35, 60, 80, 50, 30, 55,
];

function CallPreview() {
  return (
    <PreviewShell icon={Phone} label="AI Calling · Live" status="02:14">
      <Person initials="RM" name="Rahul Mehta" role="Ops Director · Brightline Logistics" />
      <div className="mt-5 flex h-10 items-center justify-between">
        {WAVE.map((h, i) => (
          <span
            key={i}
            className="w-1 rounded-full bg-gradient-to-t from-accent/40 to-accent-2"
            style={{ height: `${h}%`, animation: `chBar 1.1s ${i * 0.07}s ease-in-out infinite alternate` }}
          />
        ))}
      </div>
      <div className="mt-5 space-y-2.5 text-sm">
        <Bubble from="them">We already have a vendor for this.</Bubble>
        <Bubble from="ai">Makes sense. Would a 15-minute side-by-side on Thursday be useful?</Bubble>
        <Bubble from="them">Sure, Thursday at 3 works.</Bubble>
      </div>
      <div className="mt-5 flex items-center gap-2.5 rounded-xl border border-accent/30 bg-accent/10 px-3.5 py-2.5 text-sm font-medium text-accent-3">
        <CalendarCheck className="h-4 w-4 shrink-0" />
        Meeting booked · Thu, 3:00 PM
      </div>
    </PreviewShell>
  );
}

function EmailPreview() {
  const token = "rounded bg-accent/15 px-1 text-accent-3";
  return (
    <PreviewShell icon={Mail} label="Email · Step 2 of 4" status="Replied">
      <div className="space-y-2 border-b border-line pb-4 text-xs">
        <div className="flex gap-2">
          <span className="w-14 shrink-0 text-faint">To</span>
          <span className="text-mist">Priya Nair · Head of Growth, Halcyon Retail</span>
        </div>
        <div className="flex gap-2">
          <span className="w-14 shrink-0 text-faint">Subject</span>
          <span className="text-ink">An idea for Halcyon&apos;s festive season</span>
        </div>
      </div>
      <div className="mt-4 space-y-3 text-sm leading-relaxed text-mist">
        <p>
          Hi <span className={token}>Priya</span>,
        </p>
        <p>
          Saw that <span className={token}>Halcyon opened two new stores in Pune</span> last month.
          Congratulations.
        </p>
        <p>
          Teams growing that fast often lose leads between the website and sales. Worth a quick call to
          see how we&apos;d close that gap?
        </p>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        <Chip icon={Eye}>Opened 3×</Chip>
        <Chip icon={Link2}>Clicked</Chip>
        <Chip icon={MessageSquareText} accent>
          Replied · Interested
        </Chip>
      </div>
    </PreviewShell>
  );
}

function WhatsAppPreview() {
  const read = (time: string) => (
    <>
      {time}
      <CheckCheck className="h-3.5 w-3.5 text-accent-3" />
    </>
  );
  return (
    <PreviewShell icon={MessageCircle} label="WhatsApp · Business API" status="Online">
      <div className="border-b border-line pb-4">
        <Person initials="AR" name="Arjun Rao" role="Downloaded the pricing guide" />
      </div>
      <div className="mt-4 space-y-2.5 text-sm">
        <Bubble from="ai" meta={read("10:02")}>
          Hi Arjun, thanks for grabbing the pricing guide. Anything I can clear up?
        </Bubble>
        <Bubble from="them" meta="10:04">
          Does it work with HubSpot?
        </Bubble>
        <Bubble from="ai" meta={read("10:04")}>
          Yes, contacts and deals sync both ways. Want a quick demo this week?
        </Bubble>
      </div>
      <div className="mt-4 flex flex-wrap justify-end gap-2">
        {["Book a demo", "Send details"].map((q) => (
          <span key={q} className="rounded-full border border-accent/40 px-3 py-1 text-xs font-medium text-accent-3">
            {q}
          </span>
        ))}
      </div>
    </PreviewShell>
  );
}

const LINKEDIN_STEPS = [
  { label: "Profile visited", meta: "Mon", done: true },
  { label: "Connection request sent", meta: "Mon", done: true },
  { label: "Request accepted", meta: "Tue", done: true },
  { label: "Follow-up message", meta: "Wed, 9:30 AM", done: false },
];

function LinkedInPreview() {
  return (
    <PreviewShell icon={Linkedin} label="LinkedIn · Sales Navigator" status="Accepted">
      <Person initials="MI" name="Meera Iyer" role="VP Sales · Orbit Fintech" badge="2nd" />
      <div className="mt-4 rounded-2xl bg-white/[0.06] p-3.5 text-sm leading-relaxed text-mist">
        Hi Meera, enjoyed your post on scaling SDR teams without burning out reps. Would love to connect
        and compare notes.
      </div>
      <ol className="mt-5 space-y-3">
        {LINKEDIN_STEPS.map((s) => (
          <li key={s.label} className="flex items-center gap-3 text-sm">
            <span
              className={cn(
                "grid h-5 w-5 shrink-0 place-items-center rounded-full",
                s.done
                  ? "bg-gradient-to-br from-accent to-accent-2 text-[var(--accent-contrast)]"
                  : "border-[1.5px] border-accent-3/70"
              )}
            >
              {s.done && <Check className="h-3 w-3" />}
            </span>
            <span className={s.done ? "text-mist" : "text-ink"}>{s.label}</span>
            <span className="ml-auto shrink-0 text-xs text-muted">{s.meta}</span>
          </li>
        ))}
      </ol>
    </PreviewShell>
  );
}
