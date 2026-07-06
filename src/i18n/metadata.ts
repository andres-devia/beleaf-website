import { SITE } from "@/content/site";
import { getPathname } from "./navigation";
import { routing, type AppLocale } from "./routing";

type Href = Parameters<typeof getPathname>[0]["href"];

/* Alternates (canonical + hreflang) para las 5 páginas del sitio, derivadas
   del mismo mapa de pathnames que usa <Link> — así nunca se desincronizan. */
export function localizedAlternates(href: Href, locale: AppLocale) {
  const languages: Record<string, string> = {};
  for (const l of routing.locales) {
    languages[l] = `${SITE.domain}${getPathname({ href, locale: l })}`;
  }

  return {
    canonical: `${SITE.domain}${getPathname({ href, locale })}`,
    languages,
  };
}
