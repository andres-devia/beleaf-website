"use client";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Check } from "lucide-react";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/Reveal";
import { AI_SECTION } from "@/content/home";
import { Terminal } from "./Terminal";
import styles from "./AISection.module.css";

export function AISection() {
  const t = useTranslations("Home.ai");

  return (
    <section className={`${styles.ai} section on-navy noise-bg`} id="ia">
      <Row xs={1} lg={2} className={styles.inner}>
        <Col>
          <span className="ds-eyebrow">{t("kicker")}</span>
          <Reveal as="h2" className={styles.title}>
            {t("title")}
          </Reveal>
          <p className={styles.body}>{t("body")}</p>
          <ul className={styles.list}>
            {AI_SECTION.bullets.map((bullet) => (
              <li key={bullet.key}>
                <Check size={18} strokeWidth={3} className={styles.listIcon} />
                {t(`bullets.${bullet.key}`)}
              </li>
            ))}
          </ul>
        </Col>
        <Col>
          <Terminal />
        </Col>
      </Row>
    </section>
  );
}
