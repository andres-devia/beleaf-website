import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { AI_SECTION } from "@/content/home";
import { Terminal } from "./Terminal";
import styles from "./AISection.module.css";

export function AISection() {
  return (
    <section className={`${styles.ai} section on-navy noise-bg`} id="ia">
      <Row xs={1} lg={2} className={styles.inner}>
        <Col>
          <span className="ds-eyebrow">{AI_SECTION.kicker}</span>
          <Reveal as="h2" className={styles.title}>
            {AI_SECTION.title}
          </Reveal>
          <p className={styles.body}>{AI_SECTION.body}</p>
          <ul className={styles.list}>
            {AI_SECTION.bullets.map((bullet) => (
              <li key={bullet}>
                <Check size={18} strokeWidth={3} className={styles.listIcon} />
                {bullet}
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
