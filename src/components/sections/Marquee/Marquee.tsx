import { MARQUEE_ITEMS } from "@/content/home";
import styles from "./Marquee.module.css";

export function Marquee() {
  const loop = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className={styles.marquee} aria-hidden="true">
      <div className="marquee-track">
        {loop.map((text, i) => (
          <span className={styles.item} key={i}>
            {text}
            <span className={styles.dot}>●</span>
          </span>
        ))}
      </div>
    </div>
  );
}
