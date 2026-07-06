"use client";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { ICON_MAP } from "@/components/ui/iconMap";
import { SERVICES } from "@/content/services";
import styles from "./ServicesGrid.module.css";

export function ServicesGrid() {
  const t = useTranslations("Home.servicesGrid");

  return (
    <section className={`${styles.services} section`} id="servicios">
      <div className={styles.inner}>
        <SectionTitle kicker={t("kicker")} title={t("title")} />
        <Row xs={1} md={2} lg={3} className={`g-0 ${styles.grid}`}>
          {SERVICES.map((service, i) => {
            const ServiceIcon = ICON_MAP[service.icon];
            return (
              <Col key={service.key}>
                <Reveal delay={((i % 3) + 1) as 1 | 2 | 3} className={styles.revealCard}>
                  <Link href={service.slug as "/servicios"} className={styles.card}>
                    <span className={styles.icon}>
                      <ServiceIcon size={23} strokeWidth={2} />
                    </span>
                    <h3 className={styles.title}>{t(`items.${service.key}.title`)}</h3>
                    <p className={styles.body}>{t(`items.${service.key}.body`)}</p>
                    <span className={styles.link}>
                      {t("link")} <span className={styles.arrow}>→</span>
                    </span>
                  </Link>
                </Reveal>
              </Col>
            );
          })}
        </Row>
      </div>
    </section>
  );
}
