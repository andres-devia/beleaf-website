import Link from "next/link";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { ICON_MAP } from "@/components/ui/iconMap";
import { SERVICES } from "@/content/services";
import styles from "./ServicesGrid.module.css";

export function ServicesGrid() {
  return (
    <section className={`${styles.services} section`} id="servicios">
      <div className={styles.inner}>
        <SectionTitle
          kicker="Nuestros servicios"
          title="Todo lo que tu marca necesita para crecer en digital"
        />
        <Row xs={1} md={2} lg={3} className={`g-0 ${styles.grid}`}>
          {SERVICES.map((service, i) => {
            const ServiceIcon = ICON_MAP[service.icon];
            return (
              <Col key={service.title}>
                <Reveal delay={((i % 3) + 1) as 1 | 2 | 3}>
                  <Link href={service.slug} className={styles.card}>
                    <span className={styles.icon}>
                      <ServiceIcon size={23} strokeWidth={2} />
                    </span>
                    <h3 className={styles.title}>{service.title}</h3>
                    <p className={styles.body}>{service.body}</p>
                    <span className={styles.link}>
                      Ver servicio <span className={styles.arrow}>→</span>
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
