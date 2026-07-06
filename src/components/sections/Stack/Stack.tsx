"use client";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/Reveal";
import { STACK } from "@/content/services";
import { StackChip } from "./StackChip";
import styles from "./Stack.module.css";

export function Stack() {
  const t = useTranslations("Home.stack");

  return (
    <section className={`${styles.stack} section on-navy noise-bg`} id="stack">
      <div className={styles.inner}>
        <Row xs={1} lg={2} className={styles.head}>
          <Col>
            <Reveal as="span" className="ds-eyebrow">
              {t("kicker")}
            </Reveal>
          </Col>
          <Col>
            <Reveal as="h2" className={styles.title}>
              {t("title")}
            </Reveal>
          </Col>
          <Col>
            <Reveal as="p" delay={1} className={styles.lead}>
              {t("lead")}
            </Reveal>
          </Col>
        </Row>
        <div className={`d-flex flex-wrap ${styles.cloud}`}>
          {STACK.map((tool) => (
            <StackChip key={tool.name} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
}
