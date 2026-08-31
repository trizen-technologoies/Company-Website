import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Have a project in mind? Want to integrate AI into your business? Talk to the Trizen Technologies team   response within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        titleText="Let's work"
        gradientText="together."
        subtitle="Have a project in mind? Want to integrate AI into your business? We'd love to hear from you   response within 24 hours."
        video="/media/showreel.mp4"
        poster="/media/showreel-poster.jpg"
      />
      <Contact />
    </>
  );
}
