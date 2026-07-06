import type { MetadataRoute } from "next";
import { SITE } from "@/content/site";
import { getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const ROUTES = ["/", "/servicios", "/portafolio", "/nosotros", "/contacto"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => {
    const languages = Object.fromEntries(
      routing.locales.map((locale) => [locale, `${SITE.domain}${getPathname({ href: route, locale })}`]),
    );

    return {
      url: `${SITE.domain}${getPathname({ href: route, locale: routing.defaultLocale })}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: route === "/" ? 1 : 0.8,
      alternates: { languages },
    };
  });
}
