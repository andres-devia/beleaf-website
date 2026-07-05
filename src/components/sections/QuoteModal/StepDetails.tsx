import { QUOTE_BUDGETS, QUOTE_TIMELINES } from "@/content/quote";
import { Chip } from "./Chip";
import styles from "./QuoteModal.module.css";

interface StepDetailsProps {
  message: string;
  budget: string;
  timeline: string;
  onChange: (patch: { message?: string; budget?: string; timeline?: string }) => void;
}

export function StepDetails({ message, budget, timeline, onChange }: StepDetailsProps) {
  return (
    <>
      <h3 className={styles.heading}>Cuéntanos sobre tu proyecto</h3>
      <label className="field">
        <span>
          Descripción <em className={styles.opt}>breve, en tus palabras</em>
        </span>
        <textarea
          rows={4}
          placeholder="Ej. Necesitamos una tienda online con pagos locales y conectarla a nuestro inventario…"
          value={message}
          onChange={(e) => onChange({ message: e.target.value })}
        />
      </label>
      <span className={styles.k}>
        Presupuesto estimado <em className={styles.opt}>COP · opcional</em>
      </span>
      <div className={styles.row}>
        {QUOTE_BUDGETS.map((b) => (
          <Chip key={b} on={budget === b} onClick={() => onChange({ budget: budget === b ? "" : b })}>
            {b}
          </Chip>
        ))}
      </div>
      <span className={styles.k}>
        ¿Para cuándo? <em className={styles.opt}>opcional</em>
      </span>
      <div className={styles.row}>
        {QUOTE_TIMELINES.map((t) => (
          <Chip key={t} on={timeline === t} onClick={() => onChange({ timeline: timeline === t ? "" : t })}>
            {t}
          </Chip>
        ))}
      </div>
    </>
  );
}
