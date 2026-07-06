import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { HubHero, HubCatalog, HubSectors, HubModels, HubStack, HubFinalCTA } from "@/components/sections/ServicesHub";
import { localizedAlternates } from "@/i18n/metadata";
import type { AppLocale } from "@/i18n/routing";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata.servicios" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: localizedAlternates("/servicios", locale as AppLocale),
  };
}

export default function ServiciosPage() {
  return (
    <>
      <HubHero />
      <HubCatalog />
      <HubSectors />
      <HubModels />
      <HubStack />
      <HubFinalCTA />
    </>
  );
}
