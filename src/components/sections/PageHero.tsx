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
  /** When provided, renders a full-bleed video background with dark scrims + white text. */
  video?: string;
  poster?: string;
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
}: Props) {
  const onVideo = !!video;

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16">
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
          {/* Fixed dark scrims   readable in both themes */}
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/60" />
          <div className="absolute inset-0 bg-accent/10 mix-blend-overlay" />
        </>
      ) : (
        <>
          <div className="grid-bg absolute inset-0 opacity-60" />
          <div className="pointer-events-none absolute inset-0" style={{ background: "var(--wash)" }} />
          <div className="blob left-1/2 top-1/4 h-[320px] w-[680px] -translate-x-1/2 bg-accent/15" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-bg to-transparent" />
        </>
      )}

      <div className="container-x relative z-10 w-full text-center">
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
    </section>
  );
}
