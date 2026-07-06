"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { TERMINAL_LINES } from "@/content/home";
import styles from "./AISection.module.css";

export function Terminal() {
  const t = useTranslations("Home.terminal");
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState<number[]>([]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.unobserve(el);
        TERMINAL_LINES.forEach((line, i) => {
          setTimeout(() => setShown((prev) => [...prev, i]), line.delayMs);
        });
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className={styles.terminal} ref={ref}>
      <div className={styles.bar}>
        <span className={`${styles.dot} ${styles.dotRed}`} />
        <span className={`${styles.dot} ${styles.dotYellow}`} />
        <span className={`${styles.dot} ${styles.dotGreen}`} />
        <span className={styles.barTitle}>beleaf-agent</span>
      </div>
      <div className={styles.body2}>
        {TERMINAL_LINES.map(
          (line, i) =>
            shown.includes(i) && (
              <div className={styles.line} key={i}>
                <span className={line.ok ? styles.promptOk : styles.prompt}>{line.prompt}</span>
                <span className={line.muted ? styles.textMuted : line.ok ? styles.textOk : styles.text}>
                  {t(line.key)}
                </span>
              </div>
            ),
        )}
        <div className={styles.line}>
          <span className={styles.cursor} />
        </div>
      </div>
    </div>
  );
}
