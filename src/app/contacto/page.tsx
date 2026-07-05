import type { Metadata } from "next";
import { ContactHero, ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Cuéntanos qué necesitas construir. Te respondemos en menos de 24 horas hábiles con un plan claro para tu proyecto.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  return (
    <>
      <ContactHero />
      <ContactSection />
    </>
  );
}
