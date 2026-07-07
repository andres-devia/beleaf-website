"use client";

import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { useQuoteModal } from "@/hooks/useQuoteModal";
import styles from "./ServicesHub.module.css";

export function HubFinalCTA() {
  const { open } = useQuoteModal();
  const t = useTranslations("ServicesHub.final");

  return (
    <section className={`${styles.section} ${styles.final}`}>
      <div className={styles.finalInner}>
        <h2 className={styles.finalH2}>{t("title")}</h2>
        <p className={styles.finalBody}>{t("body")}</p>
        <button type="button" className="btn btn-primary" onClick={() => open()}>
          {t("cta")} <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}
