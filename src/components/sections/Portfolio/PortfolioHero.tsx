import { useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/Reveal";
import styles from "./Portfolio.module.css";

export function PortfolioHero() {
  const t = useTranslations("Portfolio.hero");

  return (
    <header className={styles.hero}>
      <div className="hero-grid" />
      <div className={styles.heroInner}>
        <Reveal as="span" className="ds-eyebrow">
          {t("eyebrow")}
        </Reveal>
        <h1 className={styles.h1}>
          {t("titleLine1")}
          <br />
          {t("titleLine2")}
          <span className="dot-accent">.</span>
        </h1>
        <Reveal as="p" delay={1} className={styles.sub}>
          {t("sub")}
        </Reveal>
        <Reveal as="p" delay={2} className={styles.intro}>
          {t("intro")}
        </Reveal>
      </div>
    </header>
  );
}
