import { Pencil } from "lucide-react";
import { QUOTE_SERVICES } from "@/content/quote";
import type { ContactFormData } from "@/types/contact";
import styles from "./QuoteModal.module.css";

interface StepReviewProps {
  values: ContactFormData;
  onEdit: (step: number) => void;
}

export function StepReview({ values, onEdit }: StepReviewProps) {
  const serviceLabel = (key: string) => QUOTE_SERVICES.find((s) => s.key === key)?.label ?? key;

  return (
    <>
      <h3 className={styles.heading}>Revisa y envía</h3>
      <p className={styles.sub}>Toca cualquier dato para editarlo.</p>
      <div className={styles.review}>
        <div>
          <span className={styles.k}>Servicios</span>
          <div className={styles.row}>
            {values.services.map((key) => (
              <button key={key} type="button" className={styles.revChip} onClick={() => onEdit(0)}>
                {serviceLabel(key)}
                <Pencil size={12} />
              </button>
            ))}
          </div>
        </div>

        {(values.budget || values.timeline || values.message.trim()) && (
          <div>
            <span className={styles.k}>Detalles</span>
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
                  {values.budget}
                  <Pencil size={12} />
                </button>
              )}
              {values.timeline && (
                <button type="button" className={styles.revChip} onClick={() => onEdit(1)}>
                  {values.timeline}
                  <Pencil size={12} />
                </button>
              )}
            </div>
          </div>
        )}

        <div>
          <span className={styles.k}>Contacto</span>
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
