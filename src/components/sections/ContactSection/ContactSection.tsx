"use client";

import { Check } from "lucide-react";
import { useTranslations } from "next-intl";
import { useContactForm } from "@/hooks/useContactForm";
import { CONTACT_SERVICE_OPTIONS } from "@/content/contact";
import styles from "./ContactSection.module.css";

export function ContactSection() {
  const t = useTranslations("ContactForm");
  const tServices = useTranslations("Services");
  const form = useContactForm();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await form.submit();
  };

  if (form.status === "success") {
    return (
      <section className={styles.section}>
        <div className={styles.card}>
          <div className={styles.form}>
            <div className={styles.success}>
              <span className={styles.successCheck}>
                <Check size={28} strokeWidth={3} />
              </span>
              <h2 className="ds-h3">{t("successHeading")}</h2>
              <p className="ds-body">{t("successBody")}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <form className={styles.form} onSubmit={onSubmit}>
          <div className={styles.row}>
            <label className="field">
              <span>{t("nameLabel")}</span>
              <input required placeholder={t("namePlaceholder")} value={form.values.name} onChange={(e) => form.update({ name: e.target.value })} />
            </label>
            <label className="field">
              <span>{t("companyLabel")}</span>
              <input placeholder={t("companyPlaceholder")} value={form.values.company} onChange={(e) => form.update({ company: e.target.value })} />
            </label>
          </div>
          <div className={styles.row}>
            <label className="field">
              <span>{t("emailLabel")}</span>
              <input
                required
                type="email"
                placeholder={t("emailPlaceholder")}
                value={form.values.email}
                onChange={(e) => form.update({ email: e.target.value })}
              />
            </label>
            <label className="field">
              <span>{t("phoneLabel")}</span>
              <input type="tel" placeholder={t("phonePlaceholder")} value={form.values.phone} onChange={(e) => form.update({ phone: e.target.value })} />
            </label>
          </div>

          <label className="field">
            <span>{t("servicesLabel")}</span>
            <div className={styles.services}>
              {CONTACT_SERVICE_OPTIONS.map((option) => {
                const on = form.values.services.includes(option.key);
                return (
                  <button
                    key={option.key}
                    type="button"
                    className={`${styles.serviceChip} ${on ? styles.serviceChipOn : ""}`}
                    aria-pressed={on}
                    onClick={() => form.toggleService(option.key)}
                  >
                    {on && <Check size={14} />}
                    {tServices(option.key)}
                  </button>
                );
              })}
            </div>
          </label>

          <label className="field">
            <span>{t("messageLabel")}</span>
            <textarea
              rows={4}
              placeholder={t("messagePlaceholder")}
              value={form.values.message}
              onChange={(e) => form.update({ message: e.target.value })}
            />
          </label>

          {form.status === "error" && form.errorMessage && <p className={styles.error}>{form.errorMessage}</p>}

          <button type="submit" className={`btn btn-primary ${styles.submit}`} disabled={form.status === "submitting"}>
            {form.status === "submitting" ? t("sending") : t("submit")}
          </button>
        </form>
      </div>
    </section>
  );
}
