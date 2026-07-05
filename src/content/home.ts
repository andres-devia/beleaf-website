import type { HeroContent, TerminalLine } from "@/types/content";

export const HERO: HeroContent = {
  eyebrow: "Agencia digital · Medellín, Colombia",
  headline: "Diseñamos y construimos el sitio que tu negocio merece",
  servicePills: ["Sitio web", "E-commerce", "SEO técnico", "Automatización IA", "CRM", "Plataforma SaaS"],
  sub: "Sitios, e-commerce y plataformas a la medida. Rápidos, medibles y listos para crecer contigo.",
  stats: [
    { value: 80, suffix: "+", label: "Proyectos entregados" },
    { value: 9, suffix: " años", label: "Construyendo en LATAM" },
    { value: 3, suffix: "x", label: "Crecimiento orgánico medio" },
    { value: 100, suffix: "%", label: "Código a la medida" },
  ],
};

export const MARQUEE_ITEMS: string[] = [
  "Desarrollo web",
  "E-commerce",
  "SEO técnico con IA",
  "Automatización",
  "CRM & Automatización",
  "Plataformas SaaS",
  "Landing pages",
];

export const STATEMENT = {
  kicker: "Quiénes somos",
  title:
    "No vendemos plantillas. Construimos producto digital con criterio de ingeniería y ojo de diseño.",
  body: "Somos un equipo técnico-creativo en Medellín. Trabajamos con startups, pymes y empresas de toda Latinoamérica que necesitan un partner serio para construir y hacer crecer su presencia digital.",
};

export const AI_SECTION = {
  kicker: "Metodología AI",
  title: "SEO técnico y automatización potenciados por inteligencia artificial",
  body: "Combinamos criterio humano con agentes de IA para investigar, producir y posicionar a una velocidad que el trabajo manual no alcanza.",
  bullets: [
    "Investigación de keywords a escala",
    "Contenido optimizado y auditorías técnicas",
    "Flujos de automatización a la medida",
  ],
};

export const TERMINAL_LINES: TerminalLine[] = [
  { prompt: "$", text: "beleaf deploy --seo --ai", delayMs: 0 },
  { prompt: ">", text: "Analizando 1.240 keywords del sector...", delayMs: 700, muted: true },
  { prompt: ">", text: "Generando clusters de contenido...", delayMs: 1500, muted: true },
  { prompt: "✓", text: "Posición media: #18 → #4 en 90 días", delayMs: 2400, ok: true },
  { prompt: "✓", text: "Tráfico orgánico +212%", delayMs: 3000, ok: true },
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
