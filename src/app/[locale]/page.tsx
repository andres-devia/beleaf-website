import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { HomeMuiProvider } from "@/components/layout/HomeMuiProvider";
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
import { localizedAlternates } from "@/i18n/metadata";
import type { AppLocale } from "@/i18n/routing";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata.home" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: localizedAlternates("/", locale as AppLocale),
  };
}

export default function HomePage() {
  return (
    <HomeMuiProvider>
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
    </HomeMuiProvider>
  );
}
