interface QuoteServiceOption {
  key: string;
  label: string;
  icon: string;
}

/* label/heading son defaults en español; el texto mostrado real sale de
   messages/{locale}.json vía el `key` (ver QuoteModal/*.tsx). El valor
   guardado en el lead es el `key`, no el label, para que quede
   independiente del idioma en el que se envió el formulario. */
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

interface QuoteOption {
  key: string;
  label: string;
}

export const QUOTE_BUDGETS: QuoteOption[] = [
  { key: "under-5m", label: "Menos de $5M" },
  { key: "5-to-15m", label: "$5M – $15M" },
  { key: "15-to-40m", label: "$15M – $40M" },
  { key: "over-40m", label: "Más de $40M" },
  { key: "unsure", label: "Aún no lo sé" },
];

export const QUOTE_TIMELINES: QuoteOption[] = [
  { key: "asap", label: "Lo antes posible" },
  { key: "1-to-3-months", label: "1–3 meses" },
  { key: "3-to-6-months", label: "3–6 meses" },
  { key: "flexible", label: "Flexible" },
];

export const QUOTE_STEPS: { key: string; label: string }[] = [
  { key: "services", label: "Tipo de proyecto" },
  { key: "details", label: "Detalles" },
  { key: "contact", label: "Tus datos" },
  { key: "review", label: "Revisión" },
];
