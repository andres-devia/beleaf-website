"use client";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/Reveal";
import styles from "./Statement.module.css";

export function Statement() {
  const t = useTranslations("Home.statement");

  return (
    <section className={`${styles.statement} section`} id="nosotros">
      <Row className={styles.inner}>
        <Col className={styles.eyebrowCol}>
          <Reveal>
            <span className="ds-eyebrow">{t("kicker")}</span>
          </Reveal>
        </Col>
        <Col className={styles.textCol}>
          <Reveal as="h2" className={styles.title}>
            {t("title")}
          </Reveal>
          <Reveal as="p" delay={2} className={styles.body}>
            {t("body")}
          </Reveal>
        </Col>
      </Row>
    </section>
  );
}
