import { Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { AI_SECTION } from "@/content/home";
import { Terminal } from "./Terminal";
import styles from "./AISection.module.css";

export function AISection() {
  return (
    <section className={`${styles.ai} section on-navy noise-bg`} id="ia">
      <div className={styles.inner}>
        <div>
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
        </div>
        <Terminal />
      </div>
    </section>
  );
}
