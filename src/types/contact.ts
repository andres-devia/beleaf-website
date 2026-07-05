export type ServiceKey =
  | "web"
  | "seo"
  | "branding"
  | "marketing"
  | "ads"
  | "ia"
  | "crm"
  | "video";

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  services: ServiceKey[];
  budget?: string;
  timeline?: string;
  source: string;
}

export type ContactFormStatus = "idle" | "submitting" | "success" | "error";

export interface ContactFormState {
  status: ContactFormStatus;
  errorMessage: string | null;
}
