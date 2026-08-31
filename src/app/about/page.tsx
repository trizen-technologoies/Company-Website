import type { Metadata } from "next";
import { about } from "@/lib/content";
import AboutScrollHero from "@/components/sections/AboutScrollHero";
import AboutStory from "@/components/sections/AboutStory";
import AboutCulture from "@/components/sections/AboutCulture";
import AboutJourney from "@/components/sections/AboutJourney";
import AboutTeam from "@/components/sections/AboutTeam";
import CTABand from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "About",
  description: about.lead,
};

export default function AboutPage() {
  return (
    <>
      <AboutScrollHero />
      <AboutStory />
      <AboutCulture />
      <AboutJourney />
      <AboutTeam />
      <CTABand />
    </>
  );
}
