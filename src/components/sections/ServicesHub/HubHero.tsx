import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { HUB_HERO } from "@/content/servicesHub";
import styles from "./ServicesHub.module.css";

export function HubHero() {
  const t = useTranslations("ServicesHub.hero");

  return (
    <header className={styles.hero}>
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />
      <div className={styles.heroInner}>
        <span className="ds-eyebrow">{t("eyebrow")}</span>
        <h1 className={styles.heroH1}>
          {t("title")}
          <span className="dot-accent">.</span>
        </h1>
        <p className={styles.heroSub}>{t("sub")}</p>
        <div className={styles.ctaRow}>
          <Link className="btn btn-primary" href="/contacto">
            {t("ctaPrimary")} <ArrowRight size={16} />
          </Link>
          <Link className="btn btn-on-navy-outline" href="/portafolio">
            {t("ctaSecondary")}
          </Link>
        </div>
        <div className={styles.heroStats}>
          {HUB_HERO.stats.map((s) => (
            <div key={s.key}>
              <div className={styles.heroStatN}>{t(`stats.${s.key}.n`)}</div>
              <div className={styles.heroStatL}>{t(`stats.${s.key}.l`)}</div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
