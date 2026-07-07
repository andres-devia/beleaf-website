"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/Reveal";
import { ICON_MAP } from "@/components/ui/iconMap";
import { HUB_SECTORS } from "@/content/servicesHub";
import styles from "./ServicesHub.module.css";

export function HubSectors() {
  const [active, setActive] = useState(0);
  const t = useTranslations("ServicesHub.sectors");
  const sector = HUB_SECTORS[active];
  const SectorIcon = ICON_MAP[sector.icon];
  const tags = t.raw(`items.${sector.key}.tags`) as string[];

  return (
    <section className={`${styles.section} ${styles.sectors}`}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <span className="ds-eyebrow reveal">{t("eyebrow")}</span>
          <Reveal as="h2" className={styles.h2}>
            {t("title")}
          </Reveal>
          <p className={`${styles.sub} reveal`}>{t("sub")}</p>
        </div>
        <div className={styles.sectorsGrid}>
          <div className={styles.tabs} role="tablist">
            {HUB_SECTORS.map((s, i) => {
              const TabIcon = ICON_MAP[s.icon];
              return (
                <button
                  key={s.key}
                  type="button"
                  role="tab"
                  aria-selected={active === i}
                  className={`${styles.tab} ${active === i ? styles.tabOn : ""}`}
                  onClick={() => setActive(i)}
                >
                  <span className={styles.tabIcon}>
                    <TabIcon size={18} />
                  </span>
                  <span className={styles.tabLabel}>{t(`items.${s.key}.name`)}</span>
                </button>
              );
            })}
          </div>
          <div className={styles.panel} key={active}>
            <span className={styles.panelIcon}>
              <SectorIcon size={26} />
            </span>
            <h3 className={styles.panelTitle}>{t(`items.${sector.key}.name`)}</h3>
            <p className={styles.panelBody}>{t(`items.${sector.key}.desc`)}</p>
            <div className={styles.panelTags}>
              {tags.map((tag) => (
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
