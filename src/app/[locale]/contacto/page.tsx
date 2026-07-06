import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ContactHero, ContactSection } from "@/components/sections/ContactSection";
import { localizedAlternates } from "@/i18n/metadata";
import type { AppLocale } from "@/i18n/routing";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata.contacto" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: localizedAlternates("/contacto", locale as AppLocale),
  };
}

export default function ContactoPage() {
  return (
    <>
      <ContactHero />
      <ContactSection />
    </>
  );
}
