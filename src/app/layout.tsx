import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/content";
import SmoothScroll from "@/components/providers/SmoothScroll";
import ScrollProgress from "@/components/providers/ScrollProgress";
import Preloader from "@/components/sections/Preloader";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: {
    default: `${site.full}   ${site.tagline}`,
    template: `%s   ${site.full}`,
  },
  description: site.description,
  keywords: [
    "AI development", "AI agents", "AI automation", "chatbots", "web development",
    "mobile app development", "SaaS", "digital marketing", "SEO", "AR VR",
    "enterprise software", "IT consulting", "Trizen Technologies",
  ],
  authors: [{ name: site.full }],
  openGraph: {
    type: "website",
    title: `${site.full}   ${site.tagline}`,
    description: site.description,
    siteName: site.full,
    url: `https://${site.domain}`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.full}   ${site.tagline}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#050816",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if('scrollRestoration' in history){history.scrollRestoration='manual';}}catch(e){}})();`,
          }}
        />
        {/* Runs before first paint so returning visitors (or reduced-motion /
            ?nointro) never see the preloader overlay flash on screen - it's
            hidden via CSS before the browser paints anything. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;var seen=sessionStorage.getItem('trizen-intro');var skip=new URLSearchParams(window.location.search).has('nointro');if(reduce||seen||skip){document.documentElement.classList.add('no-intro');}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <SmoothScroll>
          <Preloader />
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
