import Link from "next/link";
import { services } from "@/lib/content";
import { serviceIcons } from "@/lib/serviceIcons";
import { cn } from "@/lib/utils";
import Sparkle from "@/components/ui/Sparkle";

type Props = {
  id: string;
  open: boolean;
  pathname: string;
  onNavigate: () => void;
};

/**
 * Desktop "Services" dropdown: every service with its icon and subtitle, plus
 * an "All services" tile filling the last grid cell. Rendered inside the
 * Services <li>, so hover/focus on the panel keeps it open. Hidden panels are
 * `invisible`, which also takes their links out of the tab order.
 */
export default function NavServicesMenu({ id, open, pathname, onNavigate }: Props) {
  return (
    <div
      id={id}
      className={cn(
        // pt-5 bridges the gap under the bar so the pointer can travel into the panel
        "absolute left-1/2 top-full z-10 w-[min(40rem,calc(100vw-2rem))] -translate-x-1/2 pt-5 transition-[opacity,translate,visibility] duration-300 ease-out",
        open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
      )}
    >
      <div className="rounded-2xl border border-line bg-surface p-2 shadow-[0_28px_60px_-28px_rgba(40,28,12,0.4)]">
        <ul className="grid grid-cols-2 gap-1">
          {services.map((s) => {
            const Icon = serviceIcons[s.id] ?? Sparkle;
            const active = pathname === `/services/${s.id}`;
            return (
              <li key={s.id}>
                <Link
                  href={`/services/${s.id}`}
                  onClick={onNavigate}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "group flex h-full items-start gap-3 rounded-xl p-3 transition-colors hover:bg-fill-2",
                    active && "bg-fill-2"
                  )}
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line bg-fill text-accent transition-colors group-hover:border-transparent group-hover:bg-accent group-hover:text-[var(--accent-contrast)]">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="min-w-0">
                    <span
                      className={cn(
                        "block text-sm font-medium leading-snug",
                        active ? "text-accent-bright" : "text-ink"
                      )}
                    >
                      {s.title}
                    </span>
                    <span className="mt-0.5 block text-xs leading-snug text-muted">
                      {s.subtitle}
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}

          <li>
            <Link
              href="/services"
              onClick={onNavigate}
              className="group flex h-full items-start gap-3 rounded-xl border border-line bg-gradient-to-br from-accent/10 to-transparent p-3 transition-colors hover:border-accent/40"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-accent to-accent-2 text-[var(--accent-contrast)]">
                <Sparkle className="h-4 w-4" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold leading-snug text-accent-bright">
                  All services
                </span>
                <span className="mt-0.5 block text-xs leading-snug text-muted">
                  Seven disciplines, one partner
                </span>
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
