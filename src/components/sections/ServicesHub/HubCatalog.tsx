"use client";

import { Check, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { ICON_MAP } from "@/components/ui/iconMap";
import { useQuoteModal } from "@/hooks/useQuoteModal";
import { HUB_CATALOG } from "@/content/servicesHub";
import styles from "./ServicesHub.module.css";

export function HubCatalog() {
  const { open } = useQuoteModal();

  return (
    <section className={`${styles.section} ${styles.catalog}`}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <span className="ds-eyebrow reveal">Catálogo</span>
          <Reveal as="h2" className={styles.h2}>
            ¿Qué servicios digitales ofrece beleafdesign?
          </Reveal>
          <p className={`${styles.sub} reveal`}>
            Cada servicio funciona solo o combinado en un ecosistema coordinado. Explora el detalle de cada uno.
          </p>
        </div>
        <div className={styles.grid}>
          {HUB_CATALOG.map((card, i) => {
            const CardIcon = ICON_MAP[card.icon];
            return (
              <Reveal key={card.name} as="div" delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <button type="button" className={styles.card} onClick={() => open([card.key])}>
                  <span className={styles.cardIcon}>
                    <CardIcon size={24} />
                  </span>
                  <h3 className={styles.cardTitle}>{card.name}</h3>
                  <p className={styles.cardBody}>{card.desc}</p>
                  <ul className={styles.incl}>
                    {card.incl.map((item) => (
                      <li key={item}>
                        <Check size={14} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <span className={styles.more}>
                    Cotizar <span><ArrowRight size={15} /></span>
                  </span>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
