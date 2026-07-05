"use client";

import { Check } from "lucide-react";
import { useContactForm } from "@/hooks/useContactForm";
import { CONTACT_SERVICE_OPTIONS } from "@/content/contact";
import styles from "./ContactSection.module.css";

export function ContactSection() {
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
              <h2 className="ds-h3">¡Mensaje recibido!</h2>
              <p className="ds-body">
                Gracias por escribirnos. Te respondemos en menos de 24 horas hábiles con un plan claro para tu
                proyecto.
              </p>
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
              <span>Nombre</span>
              <input required placeholder="Tu nombre" value={form.values.name} onChange={(e) => form.update({ name: e.target.value })} />
            </label>
            <label className="field">
              <span>Empresa</span>
              <input placeholder="Tu empresa" value={form.values.company} onChange={(e) => form.update({ company: e.target.value })} />
            </label>
          </div>
          <div className={styles.row}>
            <label className="field">
              <span>Correo</span>
              <input required type="email" placeholder="tu@correo.com" value={form.values.email} onChange={(e) => form.update({ email: e.target.value })} />
            </label>
            <label className="field">
              <span>WhatsApp</span>
              <input type="tel" placeholder="+57 300 000 0000" value={form.values.phone} onChange={(e) => form.update({ phone: e.target.value })} />
            </label>
          </div>

          <label className="field">
            <span>¿Qué necesitas?</span>
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
                    {option.label}
                  </button>
                );
              })}
            </div>
          </label>

          <label className="field">
            <span>Cuéntanos sobre tu proyecto</span>
            <textarea
              rows={4}
              placeholder="Qué quieres construir, en qué etapa estás y cuándo lo necesitas."
              value={form.values.message}
              onChange={(e) => form.update({ message: e.target.value })}
            />
          </label>

          {form.status === "error" && form.errorMessage && <p className={styles.error}>{form.errorMessage}</p>}

          <button type="submit" className={`btn btn-primary ${styles.submit}`} disabled={form.status === "submitting"}>
            {form.status === "submitting" ? "Enviando…" : "Enviar mensaje"}
          </button>
        </form>
      </div>
    </section>
  );
}
