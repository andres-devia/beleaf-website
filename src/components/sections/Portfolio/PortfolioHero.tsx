import { Reveal } from "@/components/ui/Reveal";
import styles from "./Portfolio.module.css";

export function PortfolioHero() {
  return (
    <header className={styles.hero}>
      <div className="hero-grid" />
      <div className={styles.heroInner}>
        <Reveal as="span" className="ds-eyebrow">
          Portafolio
        </Reveal>
        <h1 className={styles.h1}>
          Proyectos que
          <br />
          hablan por sí solos<span className="dot-accent">.</span>
        </h1>
        <Reveal as="p" delay={1} className={styles.sub}>
          Sitios, tiendas y sistemas que mueven números reales.
        </Reveal>
        <Reveal as="p" delay={2} className={styles.intro}>
          No mostramos plantillas bonitas: mostramos negocios que crecieron con tecnología bien puesta. Cada proyecto
          nace de una meta medible y termina en algo que el cliente puede operar y escalar.
        </Reveal>
      </div>
    </header>
  );
}
