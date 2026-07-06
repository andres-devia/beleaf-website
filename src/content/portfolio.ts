import type { Project, GalleryItem, CaseStudy, ProjectCategory } from "@/types/portfolio";

export const PORTFOLIO_CATEGORIES: { key: ProjectCategory; label: string }[] = [
  { key: "all", label: "Todos" },
  { key: "web", label: "Desarrollo Web" },
  { key: "ecommerce", label: "E-commerce" },
  { key: "seo", label: "SEO" },
  { key: "ia", label: "IA & Automatización" },
  { key: "crm", label: "CRM" },
  { key: "branding", label: "Branding" },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "tienda-cafe-retail",
    category: "E-commerce",
    categoryKey: "ecommerce",
    industry: "Retail · Café de origen",
    title: "Tienda de café de origen",
    desc: "Shopify a la medida con pagos locales y CRM: de venta en finca a pedidos en 12 ciudades.",
    navy: true,
  },
  {
    slug: "agenda-clinica-salud",
    category: "Desarrollo Web",
    categoryKey: "web",
    industry: "Salud · Red de clínicas",
    title: "Plataforma de agendamiento clínico",
    desc: "Agenda, historia clínica y recordatorios automáticos para 4 sedes en un solo flujo.",
    navy: false,
  },
  {
    slug: "agente-ia-whatsapp",
    category: "IA & Automatización",
    categoryKey: "ia",
    industry: "Hospitalidad · Hotel boutique",
    title: "Agente IA de reservas en WhatsApp",
    desc: "Atención 24/7 que cotiza, reserva y registra cada huésped en el CRM del hotel.",
    navy: true,
  },
  {
    slug: "seo-b2b-ortotex",
    category: "SEO",
    categoryKey: "seo",
    industry: "Industrial · Fabricante B2B",
    title: "SEO técnico para fabricante B2B",
    desc: "Arquitectura nueva, Core Web Vitals en verde y contenido con intención de compra.",
    navy: false,
  },
  {
    slug: "automatizacion-leads-crm",
    category: "CRM",
    categoryKey: "crm",
    industry: "Constructora · Salas de venta",
    title: "Pipeline comercial unificado",
    desc: "Cada lead de salas de venta con asesor, etapa y origen — cero oportunidades perdidas.",
    navy: true,
  },
  {
    slug: "identidad-cafe-cumbre",
    category: "Branding",
    categoryKey: "branding",
    industry: "Branding · Café de exportación",
    title: "Identidad para café de exportación",
    desc: "Marca, empaque y sistema visual para pasar de la finca al lineal internacional.",
    navy: false,
  },
  {
    slug: "rediseno-wordpress-pyme",
    category: "Desarrollo Web",
    categoryKey: "web",
    industry: "Retail · PYME",
    title: "Rediseño WordPress + SEO local",
    desc: "Sitio rápido y posicionado en su ciudad, listo para que el equipo lo administre solo.",
    navy: true,
  },
];

export const PROJECTS: Project[] = [
  { tag: "E-commerce · Shopify", title: "Tienda de café de origen", metric: "+186% en ventas online", span: "wide" },
  { tag: "Next.js · SaaS", title: "Plataforma de logística", metric: "12.000 usuarios activos", span: "tall" },
  { tag: "WordPress · SEO", title: "Firma legal corporativa", metric: "#1 en su categoría", span: "" },
  { tag: "React · Landing", title: "Lanzamiento fintech", metric: "8.4% de conversión", span: "" },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { key: "ortotex", client: "Ortotex", category: "E-commerce · Shopify", navy: true },
  { key: "grassranch", client: "Grassranch", category: "Sitio corporativo · WordPress", navy: false },
  { key: "kreatup", client: "KreatUp", category: "Plataforma SaaS · Next.js", navy: true },
  { key: "cervantes", client: "Dr. Carlos Cervantes", category: "Landing + CRM", navy: false },
  { key: "coldcare", client: "Cold Care Recovery", category: "E-commerce · SEO internacional", navy: true },
  { key: "elevator", client: "Elevator Agencia", category: "Automatización con IA", navy: false },
];
