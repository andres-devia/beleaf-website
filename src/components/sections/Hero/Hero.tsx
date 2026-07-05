"use client";

import { Button } from "@/components/ui/Button";
import { CountUp } from "@/components/ui/CountUp";
import { useTypewriter } from "@/hooks/useTypewriter";
import { HERO } from "@/content/home";
import { HeroPills } from "./HeroPills";
import styles from "./Hero.module.css";

export function Hero() {
  const { displayed, done } = useTypewriter(HERO.headline, 30, 500);

  return (
    <header className={`${styles.hero} noise-bg`}>
      <div className="hero-grid" />
      <div className="hero-glow" />
      <div className={styles.inner}>
        <span className={styles.badge}>
          <span className="badge-dot" />
          {HERO.eyebrow}
        </span>

        <h1 className={styles.h1}>
          {displayed}
          {done ? <span className="dot-accent">.</span> : <span className={styles.caret} aria-hidden="true" />}
        </h1>

        <p className={styles.sub}>{HERO.sub}</p>

        <div className={styles.actions}>
          <Button variant="primary" size="lg" href="/contacto" arrow>
            Cotiza tu proyecto
          </Button>
          <Button variant="onNavyOutline" size="lg" href="/servicios">
            Ver servicios
          </Button>
        </div>

        <HeroPills options={HERO.servicePills} />

        <div className={styles.stats}>
          {HERO.stats.map((s) => (
            <CountUp key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </div>
    </header>
  );
}
