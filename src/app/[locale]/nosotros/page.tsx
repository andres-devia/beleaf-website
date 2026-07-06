import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { AboutHero, Manifesto, AboutStats, Team, Valores, Timeline } from "@/components/sections/Nosotros";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { localizedAlternates } from "@/i18n/metadata";
import type { AppLocale } from "@/i18n/routing";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata.nosotros" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: localizedAlternates("/nosotros", locale as AppLocale),
  };
}

export default function NosotrosPage() {
  return (
    <>
      <AboutHero />
      <Manifesto />
      <AboutStats />
      <Team />
      <Valores />
      <Timeline />
      <FinalCTA />
    </>
  );
}
