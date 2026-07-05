import type { SectionTitleProps } from "@/types/ui";
import styles from "./SectionTitle.module.css";

export function SectionTitle({ kicker, title, intro, align = "left", onNavy, className = "" }: SectionTitleProps) {
  const cls = [styles.head, align === "center" ? styles.center : "", onNavy ? styles.onNavy : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={cls}>
      {kicker && <span className="ds-eyebrow">{kicker}</span>}
      <h2 className="ds-h2 section-title">{title}</h2>
      {intro && <p className={`ds-lead ${styles.intro}`}>{intro}</p>}
    </div>
  );
}
