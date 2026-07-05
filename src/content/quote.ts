interface QuoteServiceOption {
  key: string;
  label: string;
  icon: string;
}

export const QUOTE_SERVICES: QuoteServiceOption[] = [
  { key: "web", label: "Desarrollo Web", icon: "code-2" },
  { key: "seo", label: "SEO & Posicionamiento", icon: "search" },
  { key: "branding", label: "Branding & Diseño", icon: "pen-tool" },
  { key: "marketing", label: "Marketing Digital", icon: "megaphone" },
  { key: "ads", label: "Publicidad Digital", icon: "target" },
  { key: "ia", label: "IA & Automatización", icon: "bot" },
  { key: "crm", label: "Implementación CRM", icon: "git-merge" },
  { key: "video", label: "Producción Audiovisual", icon: "clapperboard" },
];

export const QUOTE_BUDGETS: string[] = [
  "Menos de $5M",
  "$5M – $15M",
  "$15M – $40M",
  "Más de $40M",
  "Aún no lo sé",
];

export const QUOTE_TIMELINES: string[] = ["Lo antes posible", "1–3 meses", "3–6 meses", "Flexible"];

export const QUOTE_STEPS: string[] = ["Tipo de proyecto", "Detalles", "Tus datos", "Revisión"];
