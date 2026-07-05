import { Reveal } from "@/components/ui/Reveal";
import { STATEMENT } from "@/content/home";
import styles from "./Statement.module.css";

export function Statement() {
  return (
    <section className={`${styles.statement} section`} id="nosotros">
      <div className={styles.inner}>
        <Reveal className={styles.eyebrow}>
          <span className="ds-eyebrow">{STATEMENT.kicker}</span>
        </Reveal>
        <Reveal as="h2" className={styles.title}>
          {STATEMENT.title}
        </Reveal>
        <Reveal as="p" delay={2} className={styles.body}>
          {STATEMENT.body}
        </Reveal>
      </div>
    </section>
  );
}
