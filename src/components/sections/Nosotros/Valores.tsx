import { useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/Reveal";
import { ICON_MAP } from "@/components/ui/iconMap";
import { VALUES } from "@/content/about";
import styles from "./Nosotros.module.css";

export function Valores() {
  const t = useTranslations("About.values");

  return (
    <section className={`${styles.valores} section`}>
      <div className={styles.valoresInner}>
        <div className="section-head">
          <span className="ds-eyebrow reveal">{t("eyebrow")}</span>
          <Reveal as="h2" className={styles.valH2}>
            {t("title")}
          </Reveal>
        </div>
        <div className={styles.valoresGrid}>
          {VALUES.map((value, i) => {
            const ValueIcon = ICON_MAP[value.icon];
            return (
              <Reveal key={value.key} as="div" delay={((i % 3) + 1) as 1 | 2 | 3} className={styles.valor}>
                <span className={styles.valorIcon}>
                  <ValueIcon size={22} />
                </span>
                <h3 className={styles.valorTitle}>{t(`items.${value.key}.title`)}</h3>
                <p className={styles.valorBody}>{t(`items.${value.key}.body`)}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
