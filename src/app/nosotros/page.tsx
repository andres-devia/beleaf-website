import type { Metadata } from "next";
import { AboutHero, Manifesto, AboutStats, Team, Valores, Timeline } from "@/components/sections/Nosotros";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description:
    "Somos beleafdesign, agencia digital en Medellín. Estrategia, desarrollo, diseño y automatización con IA para empresas en Colombia y Latinoamérica.",
  alternates: { canonical: "/nosotros" },
};

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
