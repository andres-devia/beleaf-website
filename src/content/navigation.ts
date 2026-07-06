import type { PillarNavItem, FooterColumn } from "@/types/navigation";

/* label/short/heading ya no son la fuente de verdad del texto mostrado: son
   defaults en español para el tipado y para cualquier consumidor que no pase
   por next-intl. Los componentes (PillNav, Footer) leen el texto real desde
   messages/{locale}.json usando el campo `key` de cada item. */

/* The prototype has a dedicated page per pillar (pilar-*.html) and the
   homepage's 6-service teaser doesn't map 1:1 to the /servicios hub's
   8-item catalog (two different taxonomies in the source design). The
   mission's route table only specifies a single /servicios hub (no
   /servicios/[slug] dynamic route), so every pillar link points at that
   hub page rather than a fragile anchor or a page that doesn't exist. */
export const PILLARS: PillarNavItem[] = [
  { key: "web", slug: "/servicios", label: "Desarrollo web a la medida", short: "Desarrollo web", icon: "code-2", live: true },
  { key: "ecommerce", slug: "/servicios", label: "E-commerce", short: "E-commerce", icon: "shopping-bag", live: true },
  { key: "seo", slug: "/servicios", label: "SEO técnico con IA", short: "SEO técnico", icon: "search", live: true },
  { key: "automation", slug: "/servicios", label: "Automatización con IA", short: "Automatización IA", icon: "bot", live: true },
  { key: "crm", slug: "/servicios", label: "Implementación & Desarrollo CRM", short: "CRM & Automatización", icon: "git-merge", live: true },
  { key: "saas", slug: "/servicios", label: "Plataformas SaaS", short: "Plataformas SaaS", icon: "layout-dashboard", live: true },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    key: "services",
    heading: "Servicios",
    links: [
      { key: "web", label: "Desarrollo web", href: "/servicios" },
      { key: "ecommerce", label: "E-commerce", href: "/servicios" },
      { key: "seo", label: "SEO técnico", href: "/servicios" },
      { key: "automation", label: "Automatización IA", href: "/servicios" },
      { key: "crm", label: "Implementación & Desarrollo CRM", href: "/servicios" },
      { key: "saas", label: "Plataformas SaaS", href: "/servicios" },
    ],
  },
  {
    key: "agency",
    heading: "Agencia",
    links: [
      { key: "nosotros", label: "Nosotros", href: "/nosotros" },
      { key: "portafolio", label: "Portafolio", href: "/portafolio" },
      { key: "proceso", label: "Proceso", href: "/#proceso" },
      { key: "contacto", label: "Contacto", href: "/contacto" },
    ],
  },
];
