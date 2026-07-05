"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { PORTFOLIO_CATEGORIES, CASE_STUDIES } from "@/content/portfolio";
import type { ProjectCategory } from "@/types/portfolio";
import styles from "./Portfolio.module.css";

export function PortfolioDeck() {
  const [category, setCategory] = useState<ProjectCategory>("all");
  const list = CASE_STUDIES.filter((p) => category === "all" || p.categoryKey === category);

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
        <div className={styles.deckInner}>
          {list.map((project, i) => (
            <article key={project.slug} className={`${styles.card} ${project.navy ? styles.navy : ""}`}>
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
          ))}
        </div>
      </section>
    </>
  );
}
