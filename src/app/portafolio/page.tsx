import type { Metadata } from "next";
import { PortfolioHero, PortfolioDeck } from "@/components/sections/Portfolio";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Portafolio",
  description:
    "Portafolio de beleafdesign: e-commerce, plataformas SaaS, SEO técnico, IA y branding para empresas en Colombia y LATAM. Proyectos que hablan por sí solos.",
  alternates: { canonical: "/portafolio" },
};

export default function PortafolioPage() {
  return (
    <>
      <PortfolioHero />
      <PortfolioDeck />
      <FinalCTA />
    </>
  );
}
