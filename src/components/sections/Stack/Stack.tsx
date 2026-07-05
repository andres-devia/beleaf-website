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
            <span className="ds-eyebrow reveal">{STACK_SECTION.kicker}</span>
            <Reveal as="h2" className={styles.title}>
              {STACK_SECTION.title}
            </Reveal>
          </Col>
          <Col>
            <p className={`${styles.lead} reveal`}>{STACK_SECTION.lead}</p>
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
