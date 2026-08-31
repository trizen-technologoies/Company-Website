import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <span className="eyebrow">
            <span className="h-1 w-1 rounded-full bg-blue-bright" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={80}>
        <h2 className="font-display mt-4 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={160}>
          <p
            className={cn(
              "mt-6 text-lg leading-relaxed text-muted",
              align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
