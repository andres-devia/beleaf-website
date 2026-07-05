import type { Metadata } from "next";
import { HubHero, HubCatalog, HubSectors, HubModels, HubStack, HubFinalCTA } from "@/components/sections/ServicesHub";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Un equipo, todas las soluciones digitales que tu marca necesita: web, SEO, branding, marketing, IA, CRM y más. Atención en Colombia, LATAM y EE.UU.",
  alternates: { canonical: "/servicios" },
};

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
