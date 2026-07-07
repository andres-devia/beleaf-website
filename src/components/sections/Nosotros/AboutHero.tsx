import { useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/Reveal";
import styles from "./Nosotros.module.css";

export function AboutHero() {
  const t = useTranslations("About.hero");
  const lines = t.raw("lines") as string[];

  return (
    <header className={`${styles.hero} noise-bg`}>
      <div className="hero-grid" />
      <div className="hero-glow" />
      <div className={styles.heroInner}>
        <div>
          <span className="ds-eyebrow">{t("eyebrow")}</span>
          <h1 className={styles.heroH1}>
            {lines.map((line, i) => (
              <Reveal key={line} as="span" delay={i === 0 ? undefined : (i as 1 | 2)} className={styles.heroLine}>
                {line}
                {i === lines.length - 1 && <span className="dot-accent">.</span>}
              </Reveal>
            ))}
          </h1>
          <p className={styles.heroSub}>{t("sub")}</p>
        </div>
        <div className={styles.heroImgWrap}>
          <div className={styles.heroImg}>{t("image")}</div>
        </div>
      </div>
    </header>
  );
}
