import { Reveal } from "@/components/ui/Reveal";
import { MANIFESTO } from "@/content/about";
import styles from "./Nosotros.module.css";

export function Manifesto() {
  return (
    <section className={`${styles.manifesto} section`}>
      <div className={styles.manifestoInner}>
        <div>
          <Reveal>
            <span className="ds-eyebrow">{MANIFESTO.eyebrow}</span>
          </Reveal>
          <Reveal as="h2" className={styles.manH2}>
            {MANIFESTO.title}
          </Reveal>
          <div className={styles.manImgs}>
            <div className={styles.manImgMain}>Oficina beleafdesign</div>
            <div className={styles.manImgSmall}>Proceso de trabajo</div>
          </div>
        </div>
        <div className={styles.manRight}>
          {MANIFESTO.paragraphs.map((p, i) => (
            <Reveal key={p} as="p" delay={((i % 5) + 1) as 1 | 2 | 3 | 4 | 5} className={styles.manP}>
              {p}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
