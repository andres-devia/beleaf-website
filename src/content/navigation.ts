import type { PillarNavItem, NavPageLink, FooterColumn } from "@/types/navigation";

/* The prototype has a dedicated page per pillar (pilar-*.html) and the
   homepage's 6-service teaser doesn't map 1:1 to the /servicios hub's
   8-item catalog (two different taxonomies in the source design). The
   mission's route table only specifies a single /servicios hub (no
   /servicios/[slug] dynamic route), so every pillar link points at that
   hub page rather than a fragile anchor or a page that doesn't exist. */
export const PILLARS: PillarNavItem[] = [
  { slug: "/servicios", label: "Desarrollo web a la medida", short: "Desarrollo web", icon: "code-2", live: true },
  { slug: "/servicios", label: "E-commerce", short: "E-commerce", icon: "shopping-bag", live: true },
  { slug: "/servicios", label: "SEO técnico con IA", short: "SEO técnico", icon: "search", live: true },
  { slug: "/servicios", label: "Automatización con IA", short: "Automatización IA", icon: "bot", live: true },
  { slug: "/servicios", label: "Implementación & Desarrollo CRM", short: "CRM & Automatización", icon: "git-merge", live: true },
  { slug: "/servicios", label: "Plataformas SaaS", short: "Plataformas SaaS", icon: "layout-dashboard", live: true },
];

export const NAV_PAGES: NavPageLink[] = [
  { label: "Portafolio", href: "/portafolio", key: "portafolio" },
  { label: "Nosotros", href: "/nosotros", key: "nosotros" },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    heading: "Servicios",
    links: [
      { label: "Desarrollo web", href: "/servicios" },
      { label: "E-commerce", href: "/servicios" },
      { label: "SEO técnico", href: "/servicios" },
      { label: "Automatización IA", href: "/servicios" },
      { label: "Implementación & Desarrollo CRM", href: "/servicios" },
      { label: "Plataformas SaaS", href: "/servicios" },
    ],
  },
  {
    heading: "Agencia",
    links: [
      { label: "Nosotros", href: "/nosotros" },
      { label: "Portafolio", href: "/portafolio" },
      { label: "Proceso", href: "/#proceso" },
      { label: "Contacto", href: "/contacto" },
    ],
  },
];
