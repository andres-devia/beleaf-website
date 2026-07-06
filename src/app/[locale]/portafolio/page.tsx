import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { PortfolioHero, PortfolioDeck } from "@/components/sections/Portfolio";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { localizedAlternates } from "@/i18n/metadata";
import type { AppLocale } from "@/i18n/routing";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata.portafolio" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: localizedAlternates("/portafolio", locale as AppLocale),
  };
}

export default function PortafolioPage() {
  return (
    <>
      <PortfolioHero />
      <PortfolioDeck />
      <FinalCTA />
    </>
  );
}
