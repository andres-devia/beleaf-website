"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
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
  const t = useTranslations("QuoteModal");
  const form = useContactForm(preselect);
  const [step, setStep] = useState(0);
  const [stepError, setStepError] = useState("");

  useEffect(() => {
    if (!open) return;
    setStep(0);
    setStepError("");
    form.reset();
    if (preselect.length) {
      form.update({ message: t("interestedIn", { services: preselect.join(", ") }) + "\n", services: preselect });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  if (!open) return null;

  const goNext = () => {
    setStepError("");
    if (step === 0 && form.values.services.length === 0) {
      setStepError(t("errors.selectService"));
      return;
    }
    if (step === 2) {
      if (!form.values.name.trim()) return setStepError(t("errors.name"));
      if (!EMAIL_RE.test(form.values.email)) return setStepError(t("errors.email"));
      const phone = (form.values.phone ?? "").replace(/[\s\-.]/g, "");
      if (phone && !PHONE_RE.test(phone)) return setStepError(t("errors.phone"));
    }
    setStep((s) => Math.min(3, s + 1));
  };

  const handleSubmit = async () => {
    setStepError("");
    await form.submit();
  };

  const errorToShow = stepError || (form.status === "error" ? form.errorMessage : null);
  const stepLabels = QUOTE_STEPS.map((s) => t(`steps.${s.key}`));

  return (
    <div className={styles.scrim} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose} aria-label={t("close")}>
          <X size={22} />
        </button>

        {form.status === "success" ? (
          <Success onClose={onClose} />
        ) : (
          <>
            <span className="ds-eyebrow">{t("eyebrow")}</span>
            <div
              className={styles.progress}
              role="progressbar"
              aria-valuenow={step + 1}
              aria-valuemin={1}
              aria-valuemax={4}
              aria-label={stepLabels[step]}
            >
              {stepLabels.map((label, i) => (
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
                  {t("back")}
                </button>
              )}
              {step < 3 ? (
                <button type="button" className="btn btn-primary" onClick={goNext}>
                  {t("continue")}
                  <ArrowRight size={16} />
                </button>
              ) : (
                <button type="button" className="btn btn-primary" disabled={form.status === "submitting"} onClick={handleSubmit}>
                  {form.status === "submitting" && <span className={styles.spin} aria-hidden="true" />}
                  {form.status === "submitting" ? t("sending") : t("submit")}
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
