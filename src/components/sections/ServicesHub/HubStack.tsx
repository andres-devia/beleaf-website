import { Reveal } from "@/components/ui/Reveal";
import { ICON_MAP } from "@/components/ui/iconMap";
import { HUB_TOOLS, HUB_STACK_INTRO } from "@/content/servicesHub";
import styles from "./ServicesHub.module.css";

export function HubStack() {
  return (
    <section className={`${styles.section} ${styles.onNavy} noise-bg`}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <span className="ds-eyebrow reveal">{HUB_STACK_INTRO.eyebrow}</span>
          <Reveal as="h2" className={styles.h2}>
            {HUB_STACK_INTRO.title}
          </Reveal>
          <p className={`${styles.sub} reveal`}>{HUB_STACK_INTRO.sub}</p>
        </div>
        <div className={styles.stackCloud}>
          {HUB_TOOLS.map((tool) => {
            const ToolIcon = ICON_MAP[tool.icon];
            return (
              <span className={styles.tool} key={tool.name}>
                <ToolIcon size={18} />
                {tool.name}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
