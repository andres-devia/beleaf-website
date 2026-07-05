"use client";

import { useEffect, useRef, useState } from "react";
import type { CountUpProps } from "@/types/ui";
import styles from "./CountUp.module.css";

export function CountUp({ value, suffix = "", label }: CountUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          io.unobserve(el);
          const duration = 1100;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.round(eased * value));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <div className={styles.stat} ref={ref}>
      <div className={styles.value}>
        {display}
        {suffix}
      </div>
      <p className={styles.label}>{label}</p>
    </div>
  );
}
