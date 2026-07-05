import { Reveal } from "@/components/ui/Reveal";
import { FINAL_CTA } from "@/content/home";
import { FinalCTAActions } from "./FinalCTAActions";
import styles from "./FinalCTA.module.css";

export function FinalCTA() {
  return (
    <section className={`${styles.cta} section`} id="contacto">
      <div className={styles.inner}>
        <Reveal as="h2" className={styles.title}>
          {FINAL_CTA.title}
        </Reveal>
        <Reveal as="p" className={styles.body}>
          {FINAL_CTA.body}
        </Reveal>
        <FinalCTAActions />
      </div>
    </section>
  );
}
