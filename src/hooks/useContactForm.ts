"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { createContactFormSchema } from "@/lib/validators";
import type { ContactFormData, ContactFormStatus, ServiceKey } from "@/types/contact";
import type { ApiResponse } from "@/types/api";

const INITIAL_VALUES: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
  services: [],
  budget: "",
  timeline: "",
  source: "website-contact",
};

export function useContactForm(initialServices: ServiceKey[] = []) {
  const locale = useLocale();
  const t = useTranslations("Validation");
  const [values, setValues] = useState<ContactFormData>({ ...INITIAL_VALUES, services: initialServices });
  const [status, setStatus] = useState<ContactFormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const update = (patch: Partial<ContactFormData>) => setValues((prev) => ({ ...prev, ...patch }));

  const toggleService = (key: ServiceKey) =>
    setValues((prev) => ({
      ...prev,
      services: prev.services.includes(key) ? prev.services.filter((k) => k !== key) : [...prev.services, key],
    }));

  const validate = (): string | null => {
    const schema = createContactFormSchema({
      nameTooShort: t("nameTooShort"),
      emailInvalid: t("emailInvalid"),
      messageTooShort: t("messageTooShort"),
      selectService: t("selectService"),
    });
    const parsed = schema.safeParse(values);
    if (parsed.success) return null;
    return parsed.error.issues[0]?.message ?? t("genericInvalid");
  };

  const submit = async (): Promise<boolean> => {
    const validationError = validate();
    if (validationError) {
      setErrorMessage(validationError);
      return false;
    }

    setStatus("submitting");
    setErrorMessage(null);

    try {
      const res = await fetch(`/api/contact?locale=${locale}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const body: ApiResponse = await res.json();

      if (!res.ok || !body.success) {
        setStatus("error");
        setErrorMessage(body.message || t("sendFailed"));
        return false;
      }

      setStatus("success");
      return true;
    } catch {
      setStatus("error");
      setErrorMessage(t("networkError"));
      return false;
    }
  };

  const reset = () => {
    setValues(INITIAL_VALUES);
    setStatus("idle");
    setErrorMessage(null);
  };

  return { values, update, toggleService, status, errorMessage, submit, reset };
}
