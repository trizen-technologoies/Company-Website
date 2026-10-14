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

/*
 * Section rhythm: ivory ground, stone bands (bg-bg-2) and deep-ink
 * .force-dark moments for contrast. data-nav-dark flips the navbar to
 * light text while it sits over the dark ones.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <KineticMarquee />
      <AboutTeaser />
      <CapabilitiesPinned />
      <div data-nav-dark className="force-dark text-ink">
        <ShowreelReveal />
      </div>
      <div className="bg-bg-2">
        <ProductSpotlight />
      </div>
      <div data-nav-dark className="force-dark bg-bg text-ink">
        <StatsBand />
      </div>
      <WhyUs />
      <div className="bg-bg-2">
        <Testimonials />
      </div>
      <FAQ />
      <div className="bg-bg-2">
        <HowWeWork />
      </div>
      <div data-nav-dark className="force-dark bg-bg text-ink">
        <CTABand />
      </div>
    </>
  );
}
