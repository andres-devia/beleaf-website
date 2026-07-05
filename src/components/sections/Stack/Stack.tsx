import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Reveal } from "@/components/ui/Reveal";
import { STACK } from "@/content/services";
import { STACK_SECTION } from "@/content/home";
import { StackChip } from "./StackChip";
import styles from "./Stack.module.css";

export function Stack() {
  return (
    <section className={`${styles.stack} section on-navy noise-bg`} id="stack">
      <div className={styles.inner}>
        <Row xs={1} lg={2} className={styles.head}>
          <Col>
            <Reveal as="span" className="ds-eyebrow">
              {STACK_SECTION.kicker}
            </Reveal>
          </Col>
          <Col>
            <Reveal as="h2" className={styles.title}>
              {STACK_SECTION.title}
            </Reveal>
          </Col>
          <Col>
            <Reveal as="p" delay={1} className={styles.lead}>
              {STACK_SECTION.lead}
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
