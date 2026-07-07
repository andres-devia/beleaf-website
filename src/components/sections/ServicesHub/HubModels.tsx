import { useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/Reveal";
import { ICON_MAP } from "@/components/ui/iconMap";
import { HUB_MODELS } from "@/content/servicesHub";
import styles from "./ServicesHub.module.css";

export function HubModels() {
  const t = useTranslations("ServicesHub.models");

  return (
    <section className={`${styles.section} ${styles.models}`}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <span className="ds-eyebrow reveal">{t("eyebrow")}</span>
          <Reveal as="h2" className={styles.h2}>
            {t("title")}
          </Reveal>
          <p className={`${styles.sub} reveal`}>{t("sub")}</p>
        </div>
        <div className={styles.modelsGrid}>
          {HUB_MODELS.map((model, i) => {
            const ModelIcon = ICON_MAP[model.icon];
            return (
              <Reveal key={model.key} as="div" delay={((i % 3) + 1) as 1 | 2 | 3} className={styles.model}>
                <span className={styles.modelIcon}>
                  <ModelIcon size={22} />
                </span>
                <span className={styles.modelK}>{model.k}</span>
                <h3 className={styles.modelTitle}>{t(`items.${model.key}.title`)}</h3>
                <p className={styles.modelBody}>{t(`items.${model.key}.body`)}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
