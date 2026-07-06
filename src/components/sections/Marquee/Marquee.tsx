"use client";

import { useTranslations } from "next-intl";
import { MARQUEE_ITEMS } from "@/content/home";
import styles from "./Marquee.module.css";

export function Marquee() {
  const t = useTranslations("Home.marquee");
  const loop = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className={styles.marquee} aria-hidden="true">
      <div className="marquee-track">
        {loop.map((item, i) => (
          <span className={styles.item} key={i}>
            {t(item.key)}
            <span className={styles.dot}>●</span>
          </span>
        ))}
      </div>
    </div>
  );
}
