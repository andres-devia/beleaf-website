import type { HeroContent, TerminalLine } from "@/types/content";

/* Los textos aquí son defaults en español; el texto real mostrado sale de
   messages/{locale}.json bajo el namespace "Home" (ver los componentes de
   la home), usando el campo `key` de cada item para el lookup. */
export const HERO: HeroContent = {
  eyebrow: "Agencia digital · Medellín, Colombia",
  headline: "Diseñamos y construimos el sitio que tu negocio merece",
  servicePills: [
    { key: "web", label: "Sitio web" },
    { key: "ecommerce", label: "E-commerce" },
    { key: "seo", label: "SEO técnico" },
    { key: "automation", label: "Automatización IA" },
    { key: "crm", label: "CRM" },
    { key: "saas", label: "Plataforma SaaS" },
  ],
  sub: "Sitios, e-commerce y plataformas a la medida. Rápidos, medibles y listos para crecer contigo.",
  stats: [
    { key: "projects", value: 80, suffix: "+", label: "Proyectos entregados" },
    { key: "years", value: 9, suffix: " años", label: "Construyendo en LATAM" },
    { key: "growth", value: 3, suffix: "x", label: "Crecimiento orgánico medio" },
    { key: "custom", value: 100, suffix: "%", label: "Código a la medida" },
  ],
};

export const MARQUEE_ITEMS: { key: string; label: string }[] = [
  { key: "web", label: "Desarrollo web" },
  { key: "ecommerce", label: "E-commerce" },
  { key: "seo", label: "SEO técnico con IA" },
  { key: "automation", label: "Automatización" },
  { key: "crm", label: "CRM & Automatización" },
  { key: "saas", label: "Plataformas SaaS" },
  { key: "landing", label: "Landing pages" },
];

export const STATEMENT = {
  kicker: "Quiénes somos",
  title: "No vendemos plantillas. Construimos producto digital con criterio de ingeniería y ojo de diseño.",
  body: "Somos un equipo técnico-creativo en Medellín. Trabajamos con startups, pymes y empresas de toda Latinoamérica que necesitan un partner serio para construir y hacer crecer su presencia digital.",
};

export const AI_SECTION = {
  kicker: "Metodología AI",
  title: "SEO técnico y automatización potenciados por inteligencia artificial",
  body: "Combinamos criterio humano con agentes de IA para investigar, producir y posicionar a una velocidad que el trabajo manual no alcanza.",
  bullets: [
    { key: "keywords", label: "Investigación de keywords a escala" },
    { key: "content", label: "Contenido optimizado y auditorías técnicas" },
    { key: "automation", label: "Flujos de automatización a la medida" },
  ],
};

export const TERMINAL_LINES: TerminalLine[] = [
  { key: "deploy", prompt: "$", text: "beleaf deploy --seo --ai", delayMs: 0 },
  { key: "analyze", prompt: ">", text: "Analizando 1.240 keywords del sector...", delayMs: 700, muted: true },
  { key: "clusters", prompt: ">", text: "Generando clusters de contenido...", delayMs: 1500, muted: true },
  { key: "position", prompt: "✓", text: "Posición media: #18 → #4 en 90 días", delayMs: 2400, ok: true },
  { key: "traffic", prompt: "✓", text: "Tráfico orgánico +212%", delayMs: 3000, ok: true },
];

export const SEO_SECTION = {
  title: "Posicionamiento que se sostiene en el tiempo",
  lead: "Crecimiento orgánico medible, no humo. Cada decisión se respalda con datos.",
};

export const STACK_SECTION = {
  kicker: "El stack detrás de cada proyecto",
  title: "Tecnología con la que construimos resultados",
  lead: "Dominamos las plataformas que tu negocio ya usa — y las que debería usar — para no atarte a una sola herramienta.",
};

export const FINAL_CTA = {
  title: "¿Construimos algo que crezca?",
  body: "Cuéntanos qué tienes en mente. Te respondemos en menos de 24 horas hábiles.",
};
