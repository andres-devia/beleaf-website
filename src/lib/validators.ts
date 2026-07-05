import { z } from "zod";

export const SERVICE_KEYS = ["web", "seo", "branding", "marketing", "ads", "ia", "crm", "video"] as const;

export const ContactFormSchema = z.object({
  name: z.string().trim().min(2, "El nombre es muy corto").max(120),
  email: z.string().trim().email("Correo inválido").max(200),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  company: z.string().trim().max(150).optional().or(z.literal("")),
  message: z.string().trim().min(5, "Cuéntanos un poco más sobre tu proyecto").max(2000),
  services: z.array(z.enum(SERVICE_KEYS)).min(1, "Selecciona al menos un servicio"),
  budget: z.string().trim().max(60).optional().or(z.literal("")),
  timeline: z.string().trim().max(60).optional().or(z.literal("")),
  source: z.string().trim().max(60).default("website-contact"),
});

export type ContactFormInput = z.infer<typeof ContactFormSchema>;
