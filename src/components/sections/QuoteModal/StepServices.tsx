import { useTranslations } from "next-intl";
import { QUOTE_SERVICES } from "@/content/quote";
import type { ServiceKey } from "@/types/contact";
import { Chip } from "./Chip";
import styles from "./QuoteModal.module.css";

interface StepServicesProps {
  selected: ServiceKey[];
  onToggle: (key: ServiceKey) => void;
}

export function StepServices({ selected, onToggle }: StepServicesProps) {
  const t = useTranslations("QuoteModal.stepServices");
  const tServices = useTranslations("Services");

  return (
    <>
      <h3 className={styles.heading}>{t("heading")}</h3>
      <p className={styles.sub}>{t("sub")}</p>
      <div className={styles.grid}>
        {QUOTE_SERVICES.map((s) => (
          <Chip key={s.key} on={selected.includes(s.key as ServiceKey)} onClick={() => onToggle(s.key as ServiceKey)} icon={s.icon}>
            {tServices(s.key)}
          </Chip>
        ))}
      </div>
    </>
  );
}
