import { Reveal } from "@/components/ui/Reveal";
import { PROCESS_STEPS } from "@/content/services";
import styles from "./Process.module.css";

export function Process() {
  return (
    <section className={`${styles.process} section`} id="proceso">
      <div className={styles.inner}>
        <div className="section-head">
          <Reveal as="h2" className="ds-h2 section-title">
            Cómo trabajamos
          </Reveal>
        </div>
        <div className={styles.row}>
          {PROCESS_STEPS.map((step, i) => (
            <Reveal key={step.n} className={styles.step} delay={((i % 5) + 1) as 1 | 2 | 3 | 4 | 5}>
              <span className={styles.n}>{step.n}</span>
              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.body}>{step.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
