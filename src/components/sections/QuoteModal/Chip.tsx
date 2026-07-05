import { Check } from "lucide-react";
import { ICON_MAP } from "@/components/ui/iconMap";
import styles from "./QuoteModal.module.css";

interface ChipProps {
  on: boolean;
  onClick: () => void;
  children: React.ReactNode;
  icon?: string;
}

export function Chip({ on, onClick, children, icon }: ChipProps) {
  const ChipIcon = icon ? ICON_MAP[icon] : null;
  return (
    <button type="button" className={`${styles.chip} ${on ? styles.chipOn : ""}`} aria-pressed={on} onClick={onClick}>
      {ChipIcon && <ChipIcon size={16} className={styles.chipIcon} />}
      {children}
      {on && <Check size={16} className={styles.chipCheck} />}
    </button>
  );
}
