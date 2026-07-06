import { defineRouting } from "next-intl/routing";

/* "as-needed": el español (default) sigue sirviendo en las URLs actuales sin
   prefijo (/servicios, /nosotros...) para no perder el SEO/enlaces ya
   existentes; el inglés vive bajo /en con slugs propios (ver pathnames). */
export const routing = defineRouting({
  locales: ["es", "en"],
  defaultLocale: "es",
  localePrefix: "as-needed",
  pathnames: {
    "/": "/",
    "/nosotros": {
      es: "/nosotros",
      en: "/about",
    },
    "/servicios": {
      es: "/servicios",
      en: "/services",
    },
    "/portafolio": {
      es: "/portafolio",
      en: "/portfolio",
    },
    "/contacto": {
      es: "/contacto",
      en: "/contact",
    },
  },
});

export type AppLocale = (typeof routing.locales)[number];
