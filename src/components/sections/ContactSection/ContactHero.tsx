import { CONTACT_HERO } from "@/content/contact";
import styles from "./ContactSection.module.css";

export function ContactHero() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroInner}>
        <span className="ds-eyebrow">{CONTACT_HERO.eyebrow}</span>
        <h1 className={styles.h1}>{CONTACT_HERO.title}</h1>
        <p className={styles.sub}>{CONTACT_HERO.sub}</p>
      </div>
    </header>
  );
}
