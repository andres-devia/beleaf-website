import { Reveal } from "@/components/ui/Reveal";
import { SEO_CARDS } from "@/content/services";
import { SEO_SECTION } from "@/content/home";
import styles from "./SEOSection.module.css";

export function SEOSection() {
  return (
    <section className={`${styles.seo} section`} id="seo">
      <div className={styles.inner}>
        <div className={styles.head}>
          <Reveal as="h2" className="ds-h2 section-title">
            {SEO_SECTION.title}
          </Reveal>
          <p className="ds-lead">{SEO_SECTION.lead}</p>
        </div>
        <div className={styles.grid}>
          {SEO_CARDS.map((card, i) => (
            <Reveal key={card.k} as="div" delay={((i % 3) + 1) as 1 | 2 | 3} className={styles.card}>
              <span className={styles.k}>{card.k}</span>
              <h3 className={styles.title}>{card.title}</h3>
              <p className={styles.body}>{card.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
