# Trizen Technologies   Flagship Website

An Awwwards-grade, AI-first agency website. Dark cinematic design, premium
typography, GSAP + Lenis motion, a live neural-network hero canvas, and an
enterprise-clean component architecture.

## Stack

- **Next.js 16** (App Router) · **React 19** · **TypeScript**
- **Tailwind CSS v4** (design tokens in `globals.css` via `@theme`)
- **GSAP + ScrollTrigger**   headline reveals, parallax
- **Lenis**   smooth scrolling (synced to ScrollTrigger)
- **Framer Motion**, **React Hook Form**, **lucide-react**
- **Space Grotesk** (display) + **Inter** (body) via `next/font`

## Getting started

```bash
npm install       # already done
npm run dev       # http://localhost:3000
npm run build     # production build (all routes prerender static)
npm run start     # serve the production build
```

## Structure

```
src/
  app/                 # routes: / · /about · /services · /products · /contact
  lib/
    content.ts         # single source of truth (rewritten from the brief)
    utils.ts           # cn() class merge
  components/
    providers/         # SmoothScroll (Lenis), Cursor, ScrollProgress
    layout/            # Navbar, Footer, Logo, Newsletter
    ui/                # HeroCanvas, Reveal, MagneticButton, Counter, SectionHeading, SocialIcons
    sections/          # Hero, Capabilities, Services, ProductSpotlight/Channels,
                       # Process, WhyUs, Testimonials, TechStack, FAQ, Contact, …
public/media/          # optimized WebP photography + portraits
```

## Design system

Tokens live in `src/app/globals.css`:

- Surfaces: `--color-void #030510`, `--color-bg #050816`, `--color-bg-2 #0b1120`
- Accents: electric blue, indigo, violet, purple, cyan
- Utilities: `.glass`, `.card` / `.card-glow`, `.text-gradient`, `.grid-bg`,
  `.blob`, `.btn` variants, reveal transitions, magnetic cursor

## Notes

- All content is derived from the project brief and rewritten for an enterprise
  voice. Edit copy in **one place**: `src/lib/content.ts`.
- Forms (`Contact`, `Demo`) simulate submission   wire `onSubmit` to your API or
  email service.
- Fully responsive, keyboard-accessible, and `prefers-reduced-motion` aware.
- Imagery is royalty-free (Unsplash), served locally as WebP.
```
