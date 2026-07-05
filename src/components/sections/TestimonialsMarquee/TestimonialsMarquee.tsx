import { Reveal } from "@/components/ui/Reveal";
import { TESTIMONIALS } from "@/content/testimonials";
import styles from "./TestimonialsMarquee.module.css";

export function TestimonialsMarquee() {
  const loop = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className={`${styles.tm} section`} id="testimonios">
      <div className={styles.head}>
        <span className="ds-eyebrow reveal">Clientes</span>
        <Reveal as="h2" className="ds-h2 section-title">
          Resultados que hablan por nosotros
        </Reveal>
      </div>
      <div className={styles.mask}>
        <div className={styles.track}>
          {loop.map((t, i) => (
            <article className={styles.card} key={i} aria-hidden={i >= TESTIMONIALS.length}>
              <span className={styles.result}>{t.result}</span>
              <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
              <div className={styles.who}>
                <span className={styles.avatar} aria-hidden="true">
                  {t.initials}
                </span>
                <span className={styles.meta}>
                  <strong className={styles.name}>{t.name}</strong>
                  <em className={styles.company}>{t.company}</em>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
