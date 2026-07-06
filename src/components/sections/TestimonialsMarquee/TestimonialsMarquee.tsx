"use client";

import { useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/Reveal";
import { TESTIMONIALS } from "@/content/testimonials";
import styles from "./TestimonialsMarquee.module.css";

export function TestimonialsMarquee() {
  const t = useTranslations("Home.testimonials");
  const loop = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className={`${styles.tm} section`} id="testimonios">
      <div className={styles.head}>
        <Reveal as="span" className="ds-eyebrow">
          {t("eyebrow")}
        </Reveal>
        <Reveal as="h2" className="ds-h2 section-title">
          {t("title")}
        </Reveal>
      </div>
      <div className={styles.mask}>
        <div className={styles.track}>
          {loop.map((item, i) => (
            <article className={styles.card} key={i} aria-hidden={i >= TESTIMONIALS.length}>
              <span className={styles.result}>{t(`items.${item.key}.result`)}</span>
              <p className={styles.quote}>&ldquo;{t(`items.${item.key}.quote`)}&rdquo;</p>
              <div className={styles.who}>
                <span className={styles.avatar} aria-hidden="true">
                  {item.initials}
                </span>
                <span className={styles.meta}>
                  <strong className={styles.name}>{item.name}</strong>
                  <em className={styles.company}>{item.company}</em>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
