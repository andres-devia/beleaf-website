import type { ServiceSummary, SeoPillarCard, StackTool, ProcessStep } from "@/types/services";

export const SERVICES: ServiceSummary[] = [
  {
    key: "web",
    icon: "code-2",
    title: "Desarrollo web",
    body: "WordPress, Shopify, Next.js, React y código puro. Sitios rápidos, seguros y a la medida.",
    slug: "/servicios",
    live: true,
  },
  {
    key: "ecommerce",
    icon: "shopping-bag",
    title: "E-commerce",
    body: "Tiendas que venden. Checkout optimizado, integraciones de pago y logística.",
    slug: "/servicios",
    live: true,
  },
  {
    key: "seo",
    icon: "search",
    title: "SEO técnico con IA",
    body: "Metodología con inteligencia artificial para posicionar tu marca en los primeros resultados.",
    slug: "/servicios",
    live: true,
  },
  {
    key: "automation",
    icon: "bot",
    title: "Automatización IA",
    body: "Agentes y flujos inteligentes que ahorran horas a tu equipo cada semana.",
    slug: "/servicios",
    live: true,
  },
  {
    key: "crm",
    icon: "git-merge",
    title: "Implementación & Desarrollo CRM",
    body: "Implementamos HubSpot, Zoho o Pipedrive, o desarrollamos un CRM a medida. Pipelines, automatización comercial y dashboards conectados a tu sitio.",
    slug: "/servicios",
    live: true,
  },
  {
    key: "saas",
    icon: "layout-dashboard",
    title: "Plataformas SaaS",
    body: "Productos empresariales escalables, desde el MVP hasta la operación a gran escala.",
    slug: "/servicios",
    live: true,
  },
];

export const SEO_CARDS: SeoPillarCard[] = [
  { k: "01", title: "Auditoría técnica", body: "Core Web Vitals, indexación, estructura y rendimiento. Arreglamos lo que frena tu posicionamiento." },
  { k: "02", title: "Contenido con intención", body: "Clusters temáticos construidos sobre la intención de búsqueda real de tus clientes." },
  { k: "03", title: "Autoridad y enlaces", body: "Estrategia de enlazado y autoridad de dominio sostenible, sin trucos que penalizan." },
];

export const STACK: StackTool[] = [
  { name: "WordPress", icon: "layout-template", category: "CMS & Web" },
  { name: "Elementor", icon: "layout-panel-top", category: "CMS & Web" },
  { name: "Shopify", icon: "shopping-bag", category: "CMS & Web" },
  { name: "Hostinger", icon: "server", category: "CMS & Web" },
  { name: "HubSpot", icon: "git-merge", category: "CRM" },
  { name: "Zoho CRM", icon: "contact", category: "CRM" },
  { name: "Pipedrive", icon: "kanban", category: "CRM" },
  { name: "Make / n8n", icon: "workflow", category: "Automatización" },
  { name: "Meta Ads", icon: "megaphone", category: "Marketing" },
  { name: "Google Ads", icon: "target", category: "Marketing" },
  { name: "Analytics", icon: "bar-chart-3", category: "Marketing" },
  { name: "Figma", icon: "pen-tool", category: "Diseño" },
];

export const PROCESS_STEPS: ProcessStep[] = [
  { n: "01", title: "Descubrimiento", body: "Entendemos tu negocio, tus clientes y tus metas." },
  { n: "02", title: "Estrategia", body: "Definimos alcance, arquitectura y plan de crecimiento." },
  { n: "03", title: "Diseño", body: "Prototipos de alta fidelidad alineados a tu marca." },
  { n: "04", title: "Desarrollo", body: "Código a la medida, rápido y mantenible." },
  { n: "05", title: "Crecimiento", body: "Medimos, optimizamos y escalamos contigo." },
];
