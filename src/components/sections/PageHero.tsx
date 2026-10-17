import { ArrowDown } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SplitReveal from "@/components/ui/SplitReveal";
import Sparkle from "@/components/ui/Sparkle";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow: string;
  /** Either pass `title` (ReactNode) or `titleText` (+ optional `gradientText`) for a split-reveal headline. */
  title?: React.ReactNode;
  titleText?: string;
  gradientText?: string;
  subtitle?: string;
  /** When provided, renders a full-bleed (dark) video background, unfiltered, with white text. */
  video?: string;
  poster?: string;
  /** Optional scroll-down button pinned to the bottom of the hero (e.g. jump to a form). */
  cta?: { label: string; href: string };
};

const H1 =
  "font-display mx-auto mt-5 max-w-4xl text-balance text-[clamp(2.4rem,6vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.02em]";

/** Compact cinematic hero for interior pages   showcase backdrop or video, optional split-reveal title. */
export default function PageHero({
  eyebrow,
  title,
  titleText,
  gradientText,
  subtitle,
  video,
  poster,
  cta,
}: Props) {
  const onVideo = !!video;

  return (
    <section
      className={cn(
        "relative flex min-h-[100svh] flex-col items-center overflow-hidden pt-24",
        cta ? "pb-10" : "pb-16"
      )}
    >
      {onVideo ? (
        <>
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={poster}
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src={video} type="video/mp4" />
          </video>
          {/* Shown as-is (no scrims): expects dark footage under the white copy */}
        </>
      ) : (
        <>
          <div className="grid-bg absolute inset-0 opacity-60" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-bg to-transparent" />
        </>
      )}

      <div className="container-x relative z-10 my-auto w-full text-center">
        <Reveal className="mx-auto w-fit">
          <Sparkle className="mx-auto h-8 w-8 animate-breathe text-accent" />
        </Reveal>
        <Reveal delay={80}>
          <span
            className="eyebrow mt-5 justify-center"
            style={onVideo ? { color: "var(--accent-3)" } : undefined}
          >
            <span className="h-1 w-1 rounded-full bg-accent" />
            {eyebrow}
          </span>
        </Reveal>

        {titleText ? (
          <h1 className={cn(H1, onVideo && "text-white")}>
            <span className="block overflow-hidden">
              <SplitReveal text={titleText} immediate delay={0.15} />
            </span>
            {gradientText && (
              <span className="block overflow-hidden">
                <SplitReveal
                  text={gradientText}
                  className={onVideo ? "text-[color:var(--accent-3)]" : "text-gradient"}
                  immediate
                  delay={0.28}
                />
              </span>
            )}
          </h1>
        ) : (
          <Reveal delay={120}>
            <h1 className={cn(H1, onVideo && "text-white")}>{title}</h1>
          </Reveal>
        )}

        {subtitle && (
          <Reveal delay={220}>
            <p
              className={cn(
                "mx-auto mt-6 max-w-2xl text-lg leading-relaxed",
                onVideo ? "text-white/80" : "text-muted"
              )}
            >
              {subtitle}
            </p>
          </Reveal>
        )}
      </div>

      {/* In flow (not absolute) so it never overlaps the copy on short screens.
          Fades in on load rather than via <Reveal>: sitting at the very bottom
          of the viewport, it would never cross Reveal's in-view line. */}
      {cta && (
        <div className="animate-fade-up relative z-10 mt-10" style={{ animationDelay: "0.6s" }}>
          <a href={cta.href} className="btn btn-primary px-7 py-2.5 text-[0.95rem]">
            {cta.label}
            <ArrowDown className="h-4 w-4 animate-nudge-down" />
          </a>
        </div>
      )}
    </section>
  );
}
