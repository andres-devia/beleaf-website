import { Reveal } from "@/components/ui/Reveal";
import { ICON_MAP } from "@/components/ui/iconMap";
import { VALUES } from "@/content/about";
import styles from "./Nosotros.module.css";

export function Valores() {
  return (
    <section className={`${styles.valores} section`}>
      <div className={styles.valoresInner}>
        <div className="section-head">
          <span className="ds-eyebrow reveal">Diferenciales</span>
          <Reveal as="h2" className={styles.valH2}>
            Por qué las empresas eligen beleaf
          </Reveal>
        </div>
        <div className={styles.valoresGrid}>
          {VALUES.map((value, i) => {
            const ValueIcon = ICON_MAP[value.icon];
            return (
              <Reveal key={value.title} as="div" delay={((i % 3) + 1) as 1 | 2 | 3} className={styles.valor}>
                <span className={styles.valorIcon}>
                  <ValueIcon size={22} />
                </span>
                <h3 className={styles.valorTitle}>{value.title}</h3>
                <p className={styles.valorBody}>{value.body}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
