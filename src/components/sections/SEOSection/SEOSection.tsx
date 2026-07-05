import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Reveal } from "@/components/ui/Reveal";
import { SEO_CARDS } from "@/content/services";
import { SEO_SECTION } from "@/content/home";
import styles from "./SEOSection.module.css";

export function SEOSection() {
  return (
    <section className={`${styles.seo} section`} id="seo">
      <div className={styles.inner}>
        <Row className={styles.head}>
          <Col className={styles.headTitleCol}>
            <Reveal as="h2" className="ds-h2 section-title">
              {SEO_SECTION.title}
            </Reveal>
          </Col>
          <Col className={styles.headLeadCol}>
            <p className="ds-lead">{SEO_SECTION.lead}</p>
          </Col>
        </Row>
        <Row xs={1} md={2} lg={3} className={styles.grid}>
          {SEO_CARDS.map((card, i) => (
            <Col key={card.k}>
              <Reveal as="div" delay={((i % 3) + 1) as 1 | 2 | 3} className={styles.card}>
                <span className={styles.k}>{card.k}</span>
                <h3 className={styles.title}>{card.title}</h3>
                <p className={styles.body}>{card.body}</p>
              </Reveal>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
