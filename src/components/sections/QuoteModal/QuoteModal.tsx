"use client";

import { useEffect, useState } from "react";
import { X, ArrowLeft, ArrowRight } from "lucide-react";
import { useContactForm } from "@/hooks/useContactForm";
import { QUOTE_STEPS } from "@/content/quote";
import type { ServiceKey } from "@/types/contact";
import { StepServices } from "./StepServices";
import { StepDetails } from "./StepDetails";
import { StepContact } from "./StepContact";
import { StepReview } from "./StepReview";
import { Success } from "./Success";
import styles from "./QuoteModal.module.css";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^(\+?57)?[\s\-.]?3\d{9}$|^\+?\d{7,15}$/;

interface QuoteModalProps {
  open: boolean;
  onClose: () => void;
  preselect: ServiceKey[];
}

export function QuoteModal({ open, onClose, preselect }: QuoteModalProps) {
  const form = useContactForm(preselect);
  const [step, setStep] = useState(0);
  const [stepError, setStepError] = useState("");

  useEffect(() => {
    if (!open) return;
    setStep(0);
    setStepError("");
    form.reset();
    if (preselect.length) {
      form.update({ services: preselect, message: `Interesado en: ${preselect.join(", ")}.\n` });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  if (!open) return null;

  const goNext = () => {
    setStepError("");
    if (step === 0 && form.values.services.length === 0) {
      setStepError("Selecciona al menos un servicio para continuar.");
      return;
    }
    if (step === 2) {
      if (!form.values.name.trim()) return setStepError("Cuéntanos tu nombre.");
      if (!EMAIL_RE.test(form.values.email)) return setStepError("Revisa el correo — lo necesitamos para responderte.");
      const phone = (form.values.phone ?? "").replace(/[\s\-.]/g, "");
      if (phone && !PHONE_RE.test(phone)) return setStepError("Revisa el teléfono (formato Colombia, ej. 300 123 4567).");
    }
    setStep((s) => Math.min(3, s + 1));
  };

  const handleSubmit = async () => {
    setStepError("");
    await form.submit();
  };

  const errorToShow = stepError || (form.status === "error" ? form.errorMessage : null);

  return (
    <div className={styles.scrim} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose} aria-label="Cerrar">
          <X size={22} />
        </button>

        {form.status === "success" ? (
          <Success onClose={onClose} />
        ) : (
          <>
            <span className="ds-eyebrow">Cotiza tu proyecto</span>
            <div
              className={styles.progress}
              role="progressbar"
              aria-valuenow={step + 1}
              aria-valuemin={1}
              aria-valuemax={4}
              aria-label={QUOTE_STEPS[step]}
            >
              {QUOTE_STEPS.map((label, i) => (
                <span key={label} className={`${styles.seg} ${i < step ? styles.segDone : ""} ${i === step ? styles.segNow : ""}`}>
                  <em>{label}</em>
                </span>
              ))}
            </div>

            <div className={styles.step} key={step}>
              {step === 0 && <StepServices selected={form.values.services} onToggle={form.toggleService} />}
              {step === 1 && (
                <StepDetails
                  message={form.values.message}
                  budget={form.values.budget ?? ""}
                  timeline={form.values.timeline ?? ""}
                  onChange={form.update}
                />
              )}
              {step === 2 && (
                <StepContact
                  name={form.values.name}
                  email={form.values.email}
                  phone={form.values.phone ?? ""}
                  company={form.values.company ?? ""}
                  onChange={form.update}
                />
              )}
              {step === 3 && <StepReview values={form.values} onEdit={setStep} />}
            </div>

            {errorToShow && (
              <p className={styles.err} role="alert">
                {errorToShow}
              </p>
            )}

            <div className={styles.actions}>
              {step > 0 && (
                <button
                  type="button"
                  className={`btn btn-ghost ${styles.back}`}
                  onClick={() => {
                    setStepError("");
                    setStep((s) => s - 1);
                  }}
                >
                  <ArrowLeft size={16} />
                  Atrás
                </button>
              )}
              {step < 3 ? (
                <button type="button" className="btn btn-primary" onClick={goNext}>
                  Continuar
                  <ArrowRight size={16} />
                </button>
              ) : (
                <button type="button" className="btn btn-primary" disabled={form.status === "submitting"} onClick={handleSubmit}>
                  {form.status === "submitting" && <span className={styles.spin} aria-hidden="true" />}
                  {form.status === "submitting" ? "Enviando…" : "Enviar solicitud"}
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
