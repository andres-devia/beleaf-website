"use client";

import { useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCTAActions } from "./FinalCTAActions";
import styles from "./FinalCTA.module.css";

export function FinalCTA() {
  const t = useTranslations("Home.finalCta");

  return (
    <section className={`${styles.cta} section`} id="contacto">
      <div className={styles.inner}>
        <Reveal as="h2" className={styles.title}>
          {t("title")}
        </Reveal>
        <Reveal as="p" className={styles.body}>
          {t("body")}
        </Reveal>
        <FinalCTAActions />
      </div>
    </section>
  );
}
