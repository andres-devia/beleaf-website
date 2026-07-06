"use client";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useTranslations } from "next-intl";
import { CountUp } from "@/components/ui/CountUp";
import { useTypewriter } from "@/hooks/useTypewriter";
import { HERO } from "@/content/home";
import { HeroPills } from "./HeroPills";
import styles from "./Hero.module.css";

export function Hero() {
  const t = useTranslations("Home.hero");
  const { displayed, done } = useTypewriter(t("headline"), 30, 500);

  return (
    <header className={`${styles.hero} noise-bg`}>
      <div className="hero-grid" />
      <div className="hero-glow" />
      <div className={styles.inner}>
        <span className={styles.badge}>
          <span className="badge-dot" />
          {t("eyebrow")}
        </span>

        <h1 className={styles.h1}>
          {displayed}
          {done ? <span className="dot-accent">.</span> : <span className={styles.caret} aria-hidden="true" />}
        </h1>

        <p className={styles.sub}>{t("sub")}</p>

        <HeroPills options={HERO.servicePills} />

        <Row xs={2} md={4} className={styles.stats}>
          {HERO.stats.map((s) => (
            <Col key={s.key}>
              <CountUp value={s.value} suffix={s.key === "years" ? t("yearsSuffix") : s.suffix} label={t(`stats.${s.key}`)} />
            </Col>
          ))}
        </Row>
      </div>
    </header>
  );
}
