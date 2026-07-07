import { useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { MILESTONES } from "@/content/about";
import styles from "./Nosotros.module.css";

export function Timeline() {
  const t = useTranslations("About.timeline");

  return (
    <section className={`${styles.timeline} section`}>
      <div className={styles.timelineInner}>
        <SectionTitle kicker={t("kicker")} title={t("title")} />
        <div className={styles.timeRow}>
          {MILESTONES.map((milestone, i) => (
            <Reveal key={milestone.year} as="div" delay={((i % 5) + 1) as 1 | 2 | 3 | 4 | 5} className={styles.hito}>
              <span className={styles.hitoDot} />
              <span className={styles.hitoYear}>{milestone.year}</span>
              <h3 className={styles.hitoTitle}>{t(`milestones.${milestone.year}.title`)}</h3>
              <p className={styles.hitoBody}>{t(`milestones.${milestone.year}.body`)}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
