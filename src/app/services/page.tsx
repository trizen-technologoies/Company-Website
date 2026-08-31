import type { Metadata } from "next";
import ServicesHero from "@/components/sections/ServicesHero";
import KineticMarquee from "@/components/sections/KineticMarquee";
import ServicesDetailed from "@/components/sections/ServicesDetailed";
import TechStack from "@/components/sections/TechStack";
import CTABand from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-spectrum technology services   web and mobile development, AI and chatbot integration, automation, AR/VR, QA and digital marketing.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <KineticMarquee />
      <div className="pt-24">
        <ServicesDetailed />
      </div>
      <TechStack />
      <CTABand />
    </>
  );
}
