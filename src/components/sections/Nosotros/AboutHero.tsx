import { Reveal } from "@/components/ui/Reveal";
import { ABOUT_HERO } from "@/content/about";
import styles from "./Nosotros.module.css";

export function AboutHero() {
  return (
    <header className={`${styles.hero} noise-bg`}>
      <div className="hero-grid" />
      <div className="hero-glow" />
      <div className={styles.heroInner}>
        <div>
          <span className="ds-eyebrow">{ABOUT_HERO.eyebrow}</span>
          <h1 className={styles.heroH1}>
            {ABOUT_HERO.lines.map((line, i) => (
              <Reveal key={line} as="span" delay={i === 0 ? undefined : (i as 1 | 2)} className={styles.heroLine}>
                {line}
                {i === ABOUT_HERO.lines.length - 1 && <span className="dot-accent">.</span>}
              </Reveal>
            ))}
          </h1>
          <p className={styles.heroSub}>{ABOUT_HERO.sub}</p>
        </div>
        <div className={styles.heroImgWrap}>
          <div className={styles.heroImg}>Equipo beleafdesign</div>
        </div>
      </div>
    </header>
  );
}
