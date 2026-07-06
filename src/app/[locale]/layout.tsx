import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
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

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: { default: `${SITE.name} — Agencia digital en Medellín`, template: `%s · ${SITE.name}` },
  description: SITE.description,
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={urbanist.variable}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <QuoteModalProvider>
            <PillNav />
            <PageWrapper>{children}</PageWrapper>
            <Footer />
          </QuoteModalProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
