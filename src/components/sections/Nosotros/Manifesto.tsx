import { useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/Reveal";
import styles from "./Nosotros.module.css";

export function Manifesto() {
  const t = useTranslations("About.manifesto");
  const paragraphs = t.raw("paragraphs") as string[];

  return (
    <section className={`${styles.manifesto} section`}>
      <div className={styles.manifestoInner}>
        <div>
          <Reveal>
            <span className="ds-eyebrow">{t("eyebrow")}</span>
          </Reveal>
          <Reveal as="h2" className={styles.manH2}>
            {t("title")}
          </Reveal>
          <div className={styles.manImgs}>
            <div className={styles.manImgMain}>{t("officeImage")}</div>
            <div className={styles.manImgSmall}>{t("processImage")}</div>
          </div>
        </div>
        <div className={styles.manRight}>
          {paragraphs.map((p, i) => (
            <Reveal key={p} as="p" delay={((i % 5) + 1) as 1 | 2 | 3 | 4 | 5} className={styles.manP}>
              {p}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
