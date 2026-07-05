import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TEAM } from "@/content/about";
import styles from "./Nosotros.module.css";

export function Team() {
  return (
    <section className={`${styles.team} section`}>
      <div className={styles.teamInner}>
        <SectionTitle kicker="El equipo" title="Las personas detrás de beleaf" />
        <div className={styles.teamGrid}>
          {TEAM.map((member, i) => (
            <Reveal key={member.name} as="div" delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
              <div className={styles.memberImg}>{member.name}</div>
              <h3 className={styles.memberName}>{member.name}</h3>
              <span className={styles.memberRole}>{member.role}</span>
              <span className={styles.memberSpec}>{member.spec}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
