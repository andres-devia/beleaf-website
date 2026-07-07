import type { IndustrySector, EngagementModel, HubTool } from "@/types/servicesHub";
import type { ServiceKey } from "@/types/contact";

export const HUB_HERO = {
  eyebrow: "Servicios",
  title: "Un equipo, todas las soluciones digitales que tu marca necesita",
  sub: "Estrategia, diseño, tecnología y crecimiento bajo un mismo techo. Trabajamos con empresas en Colombia, Latinoamérica y Estados Unidos.",
  ctaPrimary: "Cotiza tu proyecto",
  ctaSecondary: "Ver portafolio",
  stats: [
    { key: "services", n: "8", l: "servicios integrados" },
    { key: "sectors", n: "6", l: "sectores atendidos" },
    { key: "coverage", n: "LATAM + US", l: "cobertura geográfica" },
  ],
};

export interface HubServiceCard {
  key: ServiceKey;
  icon: string;
  name: string;
  desc: string;
  incl: string[];
}

export const HUB_CATALOG: HubServiceCard[] = [
  { key: "web", icon: "code-2", name: "Desarrollo Web", desc: "Sitios, e-commerce y plataformas a la medida, rápidos y escalables.", incl: ["Diseño UI a la medida", "WordPress, Shopify o a medida", "Integraciones y pagos"] },
  { key: "seo", icon: "search", name: "SEO & Posicionamiento", desc: "Aparece donde tus clientes ya están buscando.", incl: ["Auditoría técnica", "Investigación de keywords", "Contenido optimizado"] },
  { key: "branding", icon: "pen-tool", name: "Branding & Diseño", desc: "Identidad visual con criterio y consistencia.", incl: ["Logo y sistema visual", "Guía de marca", "Papelería y redes"] },
  { key: "marketing", icon: "megaphone", name: "Marketing Digital", desc: "Contenido y comunidad que construyen marca.", incl: ["Estrategia de contenido", "Calendario editorial", "Community management"] },
  { key: "ads", icon: "target", name: "Publicidad Digital", desc: "Pauta que genera leads y ventas medibles.", incl: ["Meta & Google Ads", "Creativos y copy", "Optimización continua"] },
  { key: "ia", icon: "bot", name: "IA & Automatización", desc: "Automatiza procesos y atención con IA.", incl: ["Chatbots y agentes", "Flujos internos", "Integración con tu stack"] },
  { key: "crm", icon: "git-merge", name: "Implementación CRM", desc: "Ordena tu comercial en una sola plataforma.", incl: ["HubSpot, Zoho, Pipedrive", "Pipelines y automatización", "Migración y capacitación"] },
  { key: "video", icon: "clapperboard", name: "Producción Audiovisual", desc: "Fotografía y video que comunican valor.", incl: ["Foto de producto", "Video corporativo", "Promocional y drone"] },
];

export const HUB_SECTORS_INTRO = {
  eyebrow: "Industrias",
  title: "Sectores que atendemos",
  sub: "Adaptamos estrategia y ejecución al contexto real de cada tipo de negocio.",
};

export const HUB_SECTORS: IndustrySector[] = [
  { key: "retail", icon: "shopping-bag", name: "Retail & E-commerce", desc: "Tiendas que venden: catálogos claros, checkout sin fricción y campañas que mueven inventario. Conectamos web, pauta y CRM para que cada visita cuente.", tags: ["Shopify", "Pagos locales", "Remarketing"] },
  { key: "health", icon: "heart-pulse", name: "Salud & Bienestar", desc: "Confianza y agenda llena. Sitios que comunican credibilidad, SEO local para que te encuentren y automatización para gestionar citas y seguimiento.", tags: ["SEO local", "Agendamiento", "Reputación"] },
  { key: "agro", icon: "sprout", name: "Agroindustria", desc: "Llevamos negocios tradicionales al mundo digital sin perder su esencia: presencia profesional, posicionamiento B2B y procesos comerciales ordenados.", tags: ["B2B", "Catálogo", "CRM"] },
  { key: "professional", icon: "briefcase", name: "Servicios profesionales", desc: "Autoridad que convierte. Marca sólida, contenido que demuestra expertise y embudos que transforman visitas en clientes calificados.", tags: ["Branding", "Contenido", "Leads"] },
  { key: "hospitality", icon: "utensils", name: "Hospitalidad", desc: "Experiencias que se ven tan bien como se viven. Fotografía y video de alto impacto, redes activas y reservas directas.", tags: ["Audiovisual", "Redes", "Reservas"] },
  { key: "agencies", icon: "megaphone", name: "Marketing & Agencias", desc: "Tu equipo extendido. Producción de calidad, desarrollo y automatización white-label para escalar la operación de tu agencia.", tags: ["White-label", "Desarrollo", "Automatización"] },
];

export const HUB_MODELS_INTRO = {
  eyebrow: "Cómo trabajamos",
  title: "Elige la forma de trabajo que se ajusta a ti",
  sub: "Desde un alcance puntual hasta un ecosistema digital completo — con la misma exigencia de calidad.",
};

export const HUB_MODELS: EngagementModel[] = [
  { key: "single", icon: "flag", k: "01", title: "Proyecto puntual", body: "Alcance definido, entrega y cierre. Ideal para un sitio web nuevo, un rebranding o una campaña específica." },
  { key: "recurring", icon: "repeat", k: "02", title: "Servicio recurrente", body: "Retainer mensual para crecimiento sostenido: SEO continuo, gestión de redes, pauta y soporte." },
  { key: "ecosystem", icon: "layers", k: "03", title: "Ecosistema integral", body: "Varios servicios coordinados como un solo sistema — web + SEO + CRM + automatización. Be-Leaf como tu equipo extendido." },
];

export const HUB_STACK_INTRO = {
  eyebrow: "Stack tecnológico",
  title: "Las herramientas detrás de cada proyecto",
  sub: "Dominamos las plataformas que tu negocio ya usa — y las que debería usar.",
};

export const HUB_TOOLS: HubTool[] = [
  { name: "WordPress", icon: "layout-template" },
  { name: "Shopify", icon: "shopping-bag" },
  { name: "HubSpot", icon: "git-merge" },
  { name: "Make / n8n", icon: "workflow" },
  { name: "Meta Ads", icon: "megaphone" },
  { name: "Google Ads", icon: "target" },
  { name: "Analytics", icon: "bar-chart-3" },
  { name: "Figma", icon: "pen-tool" },
];

export const HUB_FINAL = {
  title: "Ya sabemos cómo estructurar tu proyecto",
  body: "Arma tu proyecto en nuestro cotizador interactivo y recibe una propuesta a tu medida en menos de 24 horas hábiles.",
  cta: "Cotiza tu proyecto",
};
