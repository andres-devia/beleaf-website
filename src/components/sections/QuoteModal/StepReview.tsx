import { Pencil } from "lucide-react";
import { useTranslations } from "next-intl";
import type { ContactFormData } from "@/types/contact";
import styles from "./QuoteModal.module.css";

interface StepReviewProps {
  values: ContactFormData;
  onEdit: (step: number) => void;
}

export function StepReview({ values, onEdit }: StepReviewProps) {
  const t = useTranslations("QuoteModal.stepReview");
  const tServices = useTranslations("Services");
  const tDetails = useTranslations("QuoteModal.stepDetails");

  return (
    <>
      <h3 className={styles.heading}>{t("heading")}</h3>
      <p className={styles.sub}>{t("sub")}</p>
      <div className={styles.review}>
        <div>
          <span className={styles.k}>{t("servicesLabel")}</span>
          <div className={styles.row}>
            {values.services.map((key) => (
              <button key={key} type="button" className={styles.revChip} onClick={() => onEdit(0)}>
                {tServices(key)}
                <Pencil size={12} />
              </button>
            ))}
          </div>
        </div>

        {(values.budget || values.timeline || values.message.trim()) && (
          <div>
            <span className={styles.k}>{t("detailsLabel")}</span>
            <div className={styles.row}>
              {values.message.trim() && (
                <button type="button" className={styles.revChip} onClick={() => onEdit(1)}>
                  {values.message.trim().slice(0, 64)}
                  {values.message.trim().length > 64 ? "…" : ""}
                  <Pencil size={12} />
                </button>
              )}
              {values.budget && (
                <button type="button" className={styles.revChip} onClick={() => onEdit(1)}>
                  {tDetails(`budgets.${values.budget}`)}
                  <Pencil size={12} />
                </button>
              )}
              {values.timeline && (
                <button type="button" className={styles.revChip} onClick={() => onEdit(1)}>
                  {tDetails(`timelines.${values.timeline}`)}
                  <Pencil size={12} />
                </button>
              )}
            </div>
          </div>
        )}

        <div>
          <span className={styles.k}>{t("contactLabel")}</span>
          <div className={styles.row}>
            <button type="button" className={styles.revChip} onClick={() => onEdit(2)}>
              {values.name}
              <Pencil size={12} />
            </button>
            <button type="button" className={styles.revChip} onClick={() => onEdit(2)}>
              {values.email}
              <Pencil size={12} />
            </button>
            {values.phone && (
              <button type="button" className={styles.revChip} onClick={() => onEdit(2)}>
                {values.phone}
                <Pencil size={12} />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
