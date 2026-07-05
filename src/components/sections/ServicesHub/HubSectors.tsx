"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ICON_MAP } from "@/components/ui/iconMap";
import { HUB_SECTORS, HUB_SECTORS_INTRO } from "@/content/servicesHub";
import styles from "./ServicesHub.module.css";

export function HubSectors() {
  const [active, setActive] = useState(0);
  const sector = HUB_SECTORS[active];
  const SectorIcon = ICON_MAP[sector.icon];

  return (
    <section className={`${styles.section} ${styles.sectors}`}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <span className="ds-eyebrow reveal">{HUB_SECTORS_INTRO.eyebrow}</span>
          <Reveal as="h2" className={styles.h2}>
            {HUB_SECTORS_INTRO.title}
          </Reveal>
          <p className={`${styles.sub} reveal`}>{HUB_SECTORS_INTRO.sub}</p>
        </div>
        <div className={styles.sectorsGrid}>
          <div className={styles.tabs} role="tablist">
            {HUB_SECTORS.map((s, i) => {
              const TabIcon = ICON_MAP[s.icon];
              return (
                <button
                  key={s.name}
                  type="button"
                  role="tab"
                  aria-selected={active === i}
                  className={`${styles.tab} ${active === i ? styles.tabOn : ""}`}
                  onClick={() => setActive(i)}
                >
                  <span className={styles.tabIcon}>
                    <TabIcon size={18} />
                  </span>
                  <span className={styles.tabLabel}>{s.name}</span>
                </button>
              );
            })}
          </div>
          <div className={styles.panel} key={active}>
            <span className={styles.panelIcon}>
              <SectorIcon size={26} />
            </span>
            <h3 className={styles.panelTitle}>{sector.name}</h3>
            <p className={styles.panelBody}>{sector.desc}</p>
            <div className={styles.panelTags}>
              {sector.tags.map((tag) => (
                <span key={tag} className={styles.panelTag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
