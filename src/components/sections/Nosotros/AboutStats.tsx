import { useTranslations } from "next-intl";
import { CountUp } from "@/components/ui/CountUp";
import { ABOUT_STATS } from "@/content/about";
import styles from "./Nosotros.module.css";

export function AboutStats() {
  const t = useTranslations("About.stats");

  return (
    <section className={`${styles.stats} section on-navy`}>
      <div className={styles.statsInner}>
        {ABOUT_STATS.map((s) => (
          <CountUp key={s.key} value={s.value} suffix={s.suffix} label={t(s.key)} />
        ))}
      </div>
    </section>
  );
}
