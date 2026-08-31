import Hero from "@/components/sections/Hero";
import KineticMarquee from "@/components/sections/KineticMarquee";
import AboutTeaser from "@/components/sections/AboutTeaser";
import CapabilitiesPinned from "@/components/sections/CapabilitiesPinned";
import ShowreelReveal from "@/components/sections/ShowreelReveal";
import ProductSpotlight from "@/components/sections/ProductSpotlight";
import StatsBand from "@/components/sections/StatsBand";
import WhyUs from "@/components/sections/WhyUs";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import HowWeWork from "@/components/sections/HowWeWork";
import CTABand from "@/components/sections/CTABand";

export default function Home() {
  return (
    <>
      <Hero />
      <KineticMarquee />
      <AboutTeaser />
      <CapabilitiesPinned />
      <ShowreelReveal />
      <ProductSpotlight />
      <StatsBand />
      <WhyUs />
      <Testimonials />
      <FAQ />
      <HowWeWork />
      <CTABand />
    </>
  );
}
