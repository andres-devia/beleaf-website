import type { TeamMember, CompanyValue, Milestone } from "@/types/about";

export const ABOUT_HERO = {
  eyebrow: "Agencia digital · Medellín",
  lines: ["Construimos", "desde Medellín", "para Latinoamérica"],
  sub: "Un equipo técnico-creativo que diseña, programa y automatiza el crecimiento digital de las empresas de la región.",
};

export const MANIFESTO = {
  eyebrow: "Nuestra filosofía",
  title: "No hacemos templates. Construimos sistemas.",
  paragraphs: [
    "Cada negocio es distinto, así que cada solución también. Empezamos por entender tu operación, tus clientes y tus metas antes de escribir una sola línea de código.",
    "Combinamos cuatro disciplinas en un mismo equipo: estrategia, tecnología, diseño y automatización. No las tercerizamos ni las separamos, porque el resultado vive en cómo se conectan.",
    "Construimos con criterio de ingeniería: rápido, seguro y mantenible. Y medimos todo, porque un sitio bonito que no convierte no le sirve a nadie.",
    "Ese es el sistema beleaf: producto digital que crece contigo, no que se queda quieto el día del lanzamiento.",
  ],
};

export const ABOUT_STATS = [
  { value: 80, suffix: "+", label: "Proyectos entregados" },
  { value: 5, suffix: "+", label: "Años de experiencia" },
  { value: 40, suffix: "+", label: "Clientes activos" },
  { value: 6, suffix: "", label: "Industrias atendidas" },
];

export const TEAM: TeamMember[] = [
  { name: "Camila Restrepo", role: "Directora de Estrategia", spec: "Estrategia digital y crecimiento" },
  { name: "Andrés Ortiz", role: "Lead Developer", spec: "Next.js, React y arquitectura" },
  { name: "Valentina Gómez", role: "Diseñadora UX/UI", spec: "Producto, interfaz y marca" },
  { name: "Julián Henao", role: "Especialista SEO & IA", spec: "SEO técnico y automatización" },
];

export const VALUES: CompanyValue[] = [
  { icon: "puzzle", title: "Soluciones personalizadas", body: "Nada de plantillas: cada proyecto se construye para tu negocio." },
  { icon: "sparkles", title: "IA desde el día uno", body: "Inteligencia artificial integrada en diseño, contenido y operación." },
  { icon: "gauge", title: "Enfoque en rendimiento", body: "Velocidad, Core Web Vitals y código que escala sin frenarte." },
  { icon: "target", title: "Diseño alineado a negocio", body: "Estética con propósito: cada decisión apunta a un resultado." },
  { icon: "workflow", title: "Automatización de procesos", body: "Liberamos a tu equipo de las tareas repetitivas." },
  { icon: "compass", title: "Estrategia y técnica a la vez", body: "Pensamos el negocio y lo ejecutamos con criterio de ingeniería." },
];

export const MILESTONES: Milestone[] = [
  { year: "2021", title: "Nace beleafdesign", body: "Arrancamos en Medellín con un foco claro: web a la medida." },
  { year: "2022", title: "Primer e-commerce escalable", body: "Una tienda que multiplicó por 3 las ventas de un cliente." },
  { year: "2023", title: "Expansión a LATAM", body: "Clientes en varios países de la región." },
  { year: "2024", title: "IA y automatización", body: "Sumamos agentes de IA y SEO con metodología AI." },
  { year: "2025", title: "+80 proyectos entregados", body: "Seis industrias, un mismo estándar de calidad." },
];
