import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HUB_HERO } from "@/content/servicesHub";
import styles from "./ServicesHub.module.css";

export function HubHero() {
  return (
    <header className={styles.hero}>
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />
      <div className={styles.heroInner}>
        <span className="ds-eyebrow">{HUB_HERO.eyebrow}</span>
        <h1 className={styles.heroH1}>
          {HUB_HERO.title}
          <span className="dot-accent">.</span>
        </h1>
        <p className={styles.heroSub}>{HUB_HERO.sub}</p>
        <div className={styles.ctaRow}>
          <Link className="btn btn-primary" href="/contacto">
            {HUB_HERO.ctaPrimary} <ArrowRight size={16} />
          </Link>
          <Link className="btn btn-on-navy-outline" href="/portafolio">
            {HUB_HERO.ctaSecondary}
          </Link>
        </div>
        <div className={styles.heroStats}>
          {HUB_HERO.stats.map((s) => (
            <div key={s.l}>
              <div className={styles.heroStatN}>{s.n}</div>
              <div className={styles.heroStatL}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
