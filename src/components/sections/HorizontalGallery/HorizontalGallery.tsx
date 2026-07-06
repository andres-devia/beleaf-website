import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/ui/Reveal";
import { GALLERY_ITEMS } from "@/content/portfolio";
import styles from "./HorizontalGallery.module.css";

/* The prototype pins this section and scroll-jacks a horizontal track via
   GSAP ScrollTrigger, degrading to native scroll-snap on mobile/reduced-motion/
   no-GSAP. gsap isn't part of this project's dependency set, so this ships
   the native scroll-snap experience the prototype itself uses as its
   fallback, rather than adding a heavy animation library for one section. */
export function HorizontalGallery() {
  return (
    <section className={`${styles.hg} section`} id="proyectos">
      <div className={styles.pin}>
        <div className={styles.head}>
          <div>
            <Reveal as="span" className="ds-eyebrow">
              Trabajo reciente
            </Reveal>
            <Reveal as="h2" className="ds-h2 section-title">
              Proyectos que mueven la aguja
            </Reveal>
          </div>
          <span className={styles.hint}>Desliza</span>
        </div>
        <div className={styles.viewport}>
          <div className={styles.track}>
            {GALLERY_ITEMS.map((item) => (
              <article key={item.client} className={`${styles.card} ${item.navy ? styles.navy : ""}`}>
                <div className={styles.img}>{item.client}</div>
                <div className={styles.meta}>
                  <span className={styles.cat}>{item.category}</span>
                  <h3 className={styles.client}>{item.client}</h3>
                </div>
              </article>
            ))}
            <Link className={styles.more} href="/portafolio">
              <span className={styles.moreTitle}>Ver todos los proyectos</span>
              <span className={styles.moreArrow}>
                <ArrowRight size={22} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
