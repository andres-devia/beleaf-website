import { useTranslations } from "next-intl";
import styles from "./QuoteModal.module.css";

interface StepContactProps {
  name: string;
  email: string;
  phone: string;
  company: string;
  onChange: (patch: { name?: string; email?: string; phone?: string; company?: string }) => void;
}

export function StepContact({ name, email, phone, company, onChange }: StepContactProps) {
  const t = useTranslations("QuoteModal.stepContact");

  return (
    <>
      <h3 className={styles.heading}>{t("heading")}</h3>
      <div className={styles.col2}>
        <label className="field">
          <span>{t("nameLabel")}</span>
          <input required placeholder={t("namePlaceholder")} value={name} onChange={(e) => onChange({ name: e.target.value })} />
        </label>
        <label className="field">
          <span>{t("emailLabel")}</span>
          <input required type="email" placeholder={t("emailPlaceholder")} value={email} onChange={(e) => onChange({ email: e.target.value })} />
        </label>
        <label className="field">
          <span>
            {t("phoneLabel")} <em className={styles.opt}>{t("optional")}</em>
          </span>
          <input type="tel" placeholder={t("phonePlaceholder")} value={phone} onChange={(e) => onChange({ phone: e.target.value })} />
        </label>
        <label className="field">
          <span>
            {t("companyLabel")} <em className={styles.opt}>{t("optional")}</em>
          </span>
          <input placeholder={t("companyPlaceholder")} value={company} onChange={(e) => onChange({ company: e.target.value })} />
        </label>
      </div>
    </>
  );
}
