import { CountUp } from "@/components/ui/CountUp";
import { ABOUT_STATS } from "@/content/about";
import styles from "./Nosotros.module.css";

export function AboutStats() {
  return (
    <section className={`${styles.stats} section on-navy`}>
      <div className={styles.statsInner}>
        {ABOUT_STATS.map((s) => (
          <CountUp key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
        ))}
      </div>
    </section>
  );
}
