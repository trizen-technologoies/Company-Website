import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Trizen Technologies home"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <span className="relative grid h-9 w-9 shrink-0 place-items-center">
        <span className="absolute inset-0 rounded-full bg-accent/25 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100" />
        <Image
          src="/logo-mark.png"
          alt="Trizen Technologies"
          width={40}
          height={40}
          priority
          className="relative h-9 w-9 object-contain drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)] transition-transform duration-500 group-hover:scale-105"
        />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display whitespace-nowrap text-lg font-semibold tracking-tight text-ink">
          Trizen
        </span>
        <span className="mt-0.5 whitespace-nowrap text-[0.6rem] font-medium uppercase tracking-[0.28em] text-muted">
          Technologies
        </span>
      </span>
    </Link>
  );
}
