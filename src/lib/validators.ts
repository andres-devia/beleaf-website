import { z } from "zod";

export const SERVICE_KEYS = ["web", "seo", "branding", "marketing", "ads", "ia", "crm", "video"] as const;

export interface ContactValidationMessages {
  nameTooShort: string;
  emailInvalid: string;
  messageTooShort: string;
  selectService: string;
}

export function createContactFormSchema(messages: ContactValidationMessages) {
  return z.object({
    name: z.string().trim().min(2, messages.nameTooShort).max(120),
    email: z.string().trim().email(messages.emailInvalid).max(200),
    phone: z.string().trim().max(30).optional().or(z.literal("")),
    company: z.string().trim().max(150).optional().or(z.literal("")),
    message: z.string().trim().min(5, messages.messageTooShort).max(2000),
    services: z.array(z.enum(SERVICE_KEYS)).min(1, messages.selectService),
    budget: z.string().trim().max(60).optional().or(z.literal("")),
    timeline: z.string().trim().max(60).optional().or(z.literal("")),
    source: z.string().trim().max(60).default("website-contact"),
  });
}

export type ContactFormInput = z.infer<ReturnType<typeof createContactFormSchema>>;
