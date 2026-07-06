"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { PORTFOLIO_CATEGORIES, CASE_STUDIES } from "@/content/portfolio";
import type { ProjectCategory } from "@/types/portfolio";
import styles from "./Portfolio.module.css";

/* Stacking-deck mechanic ported from the design's StackDeck (ui_kits/website/
   Proyectos.jsx): each .item reserves a full scroll screen so its sticky
   .card can "pin", while the outgoing card eases to ~0.96 scale and sinks
   slightly as the next one pins over it — never fading out, just sliding
   underneath. Plain vanilla scroll + rAF, no GSAP (this project avoids it). */
function useStackDeck(resetKey: string) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(max-width: 768px)").matches) return;
    const container = ref.current;
    if (!container) return;
    const items = container.querySelectorAll<HTMLElement>(`.${styles.item}`);
    const total = items.length;
    let raf = 0;

    const tick = () => {
      raf = 0;
      items.forEach((wrap, i) => {
        const card = wrap.firstElementChild as HTMLElement | null;
        if (!card) return;
        const r = wrap.getBoundingClientRect();
        const pin = 150;
        const p = Math.min(1, Math.max(0, (pin - r.top) / (r.height * 0.7)));
        const depth = Math.min(total - 1 - i, 3);
        const s = 1 - p * (0.035 + depth * 0.004);
        card.style.transform = `scale(${s}) translateY(${p * -8}px)`;
      });
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };

    tick();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [resetKey]);

  return ref;
}

export function PortfolioDeck() {
  const [category, setCategory] = useState<ProjectCategory>("all");
  const list = CASE_STUDIES.filter((p) => category === "all" || p.categoryKey === category);
  const stackRef = useStackDeck(category);

  return (
    <>
      <div className={styles.filters}>
        <div className={styles.filtersInner}>
          {PORTFOLIO_CATEGORIES.map((c) => (
            <button
              key={c.key}
              type="button"
              className={`${styles.filterChip} ${category === c.key ? styles.filterChipOn : ""}`}
              onClick={() => setCategory(c.key)}
              aria-pressed={category === c.key}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      <section className={styles.deck}>
        <div className={styles.deckInner} ref={stackRef} key={category}>
          {list.map((project, i) => (
            <div className={styles.item} key={project.slug}>
              <article
                className={`${styles.card} ${project.navy ? styles.navy : ""}`}
                style={{ top: `calc(var(--nav-h) + ${24 + i * 14}px)` }}
              >
                <div>
                  <span className={styles.n}>{String(i + 1).padStart(2, "0")}</span>
                  <span className={styles.cat}>
                    {project.category} · {project.industry}
                  </span>
                  <h3 className={styles.title}>{project.title}</h3>
                  <p className={styles.desc}>{project.desc}</p>
                  <span className={styles.cta}>
                    Ver proyecto <ArrowRight size={15} />
                  </span>
                </div>
                <div className={styles.zone}>{project.title}</div>
              </article>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
