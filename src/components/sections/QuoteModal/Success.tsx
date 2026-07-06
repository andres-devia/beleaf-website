import { Check } from "lucide-react";
import { useTranslations } from "next-intl";
import styles from "./QuoteModal.module.css";

export function Success({ onClose }: { onClose: () => void }) {
  const t = useTranslations("QuoteModal.success");

  return (
    <div className={styles.sent}>
      <div className={styles.check}>
        <Check size={28} strokeWidth={3} />
      </div>
      <h3 className={styles.heading}>{t("heading")}</h3>
      <p>{t("body")}</p>
      <button type="button" className="btn btn-secondary" onClick={onClose}>
        {t("done")}
      </button>
    </div>
  );
}
