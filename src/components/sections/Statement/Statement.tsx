import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Reveal } from "@/components/ui/Reveal";
import { STATEMENT } from "@/content/home";
import styles from "./Statement.module.css";

export function Statement() {
  return (
    <section className={`${styles.statement} section`} id="nosotros">
      <Row className={styles.inner}>
        <Col className={styles.eyebrowCol}>
          <Reveal>
            <span className="ds-eyebrow">{STATEMENT.kicker}</span>
          </Reveal>
        </Col>
        <Col className={styles.textCol}>
          <Reveal as="h2" className={styles.title}>
            {STATEMENT.title}
          </Reveal>
          <Reveal as="p" delay={2} className={styles.body}>
            {STATEMENT.body}
          </Reveal>
        </Col>
      </Row>
    </section>
  );
}
