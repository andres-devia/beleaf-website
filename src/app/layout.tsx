import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { PillNav } from "@/components/layout/PillNav";
import { Footer } from "@/components/layout/Footer";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { QuoteModalProvider } from "@/components/layout/QuoteModalProvider";
import { SITE } from "@/content/site";
import "@/styles/globals.css";
import "@/styles/bootstrap-custom.scss";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-urbanist",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: { default: `${SITE.name} — Agencia digital en Medellín`, template: `%s · ${SITE.name}` },
  description: SITE.description,
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={urbanist.variable}>
      <body>
        <QuoteModalProvider>
          <PillNav />
          <PageWrapper>{children}</PageWrapper>
          <Footer />
        </QuoteModalProvider>
      </body>
    </html>
  );
}
