import { QUOTE_SERVICES } from "@/content/quote";
import type { ServiceKey } from "@/types/contact";
import { Chip } from "./Chip";
import styles from "./QuoteModal.module.css";

interface StepServicesProps {
  selected: ServiceKey[];
  onToggle: (key: ServiceKey) => void;
}

export function StepServices({ selected, onToggle }: StepServicesProps) {
  return (
    <>
      <h3 className={styles.heading}>¿Qué tipo de proyecto tienes en mente?</h3>
      <p className={styles.sub}>Selecciona todo lo que aplique.</p>
      <div className={styles.grid}>
        {QUOTE_SERVICES.map((s) => (
          <Chip key={s.key} on={selected.includes(s.key as ServiceKey)} onClick={() => onToggle(s.key as ServiceKey)} icon={s.icon}>
            {s.label}
          </Chip>
        ))}
      </div>
    </>
  );
}
