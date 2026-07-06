import { useTranslations } from "next-intl";
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
  const t = useTranslations("QuoteModal.stepDetails");

  return (
    <>
      <h3 className={styles.heading}>{t("heading")}</h3>
      <label className="field">
        <span>
          {t("descriptionLabel")} <em className={styles.opt}>{t("descriptionHint")}</em>
        </span>
        <textarea
          rows={4}
          placeholder={t("descriptionPlaceholder")}
          value={message}
          onChange={(e) => onChange({ message: e.target.value })}
        />
      </label>
      <span className={styles.k}>
        {t("budgetLabel")} <em className={styles.opt}>{t("budgetHint")}</em>
      </span>
      <div className={styles.row}>
        {QUOTE_BUDGETS.map((b) => (
          <Chip key={b.key} on={budget === b.key} onClick={() => onChange({ budget: budget === b.key ? "" : b.key })}>
            {t(`budgets.${b.key}`)}
          </Chip>
        ))}
      </div>
      <span className={styles.k}>
        {t("timelineLabel")} <em className={styles.opt}>{t("timelineHint")}</em>
      </span>
      <div className={styles.row}>
        {QUOTE_TIMELINES.map((tl) => (
          <Chip key={tl.key} on={timeline === tl.key} onClick={() => onChange({ timeline: timeline === tl.key ? "" : tl.key })}>
            {t(`timelines.${tl.key}`)}
          </Chip>
        ))}
      </div>
    </>
  );
}
