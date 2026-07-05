import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Statement } from "@/components/sections/Statement";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { AISection } from "@/components/sections/AISection";
import { SEOSection } from "@/components/sections/SEOSection";
import { HorizontalGallery } from "@/components/sections/HorizontalGallery";
import { TestimonialsMarquee } from "@/components/sections/TestimonialsMarquee";
import { Stack } from "@/components/sections/Stack";
import { Process } from "@/components/sections/Process";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Agencia digital en Medellín",
  description: SITE.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Statement />
      <ServicesGrid />
      <AISection />
      <SEOSection />
      <HorizontalGallery />
      <TestimonialsMarquee />
      <Stack />
      <Process />
      <FinalCTA />
    </>
  );
}
