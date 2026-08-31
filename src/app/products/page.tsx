import type { Metadata } from "next";
import { product } from "@/lib/content";
import ProductHero from "@/components/sections/ProductHero";
import KineticMarquee from "@/components/sections/KineticMarquee";
import ProductChannels from "@/components/sections/ProductChannels";
import Process from "@/components/sections/Process";
import DemoForm from "@/components/sections/DemoForm";

export const metadata: Metadata = {
  title: "AI SDR Outreach System",
  description: product.desc,
};

export default function ProductsPage() {
  return (
    <>
      <ProductHero />
      <KineticMarquee />
      <div id="channels">
        <ProductChannels />
      </div>
      <Process />
      <DemoForm />
    </>
  );
}
