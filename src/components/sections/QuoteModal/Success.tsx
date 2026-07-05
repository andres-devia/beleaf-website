import { Check } from "lucide-react";
import styles from "./QuoteModal.module.css";

export function Success({ onClose }: { onClose: () => void }) {
  return (
    <div className={styles.sent}>
      <div className={styles.check}>
        <Check size={28} strokeWidth={3} />
      </div>
      <h3 className={styles.heading}>¡Solicitud enviada!</h3>
      <p>Te contactaremos en menos de 24 horas hábiles con una propuesta inicial. Gracias por confiar en beleafdesign.</p>
      <button type="button" className="btn btn-secondary" onClick={onClose}>
        Listo
      </button>
    </div>
  );
}
