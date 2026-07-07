import { useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TEAM } from "@/content/about";
import styles from "./Nosotros.module.css";

export function Team() {
  const t = useTranslations("About.team");

  return (
    <section className={`${styles.team} section`}>
      <div className={styles.teamInner}>
        <SectionTitle kicker={t("kicker")} title={t("title")} />
        <div className={styles.teamGrid}>
          {TEAM.map((member, i) => (
            <Reveal key={member.key} as="div" delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
              <div className={styles.memberImg}>{member.name}</div>
              <h3 className={styles.memberName}>{member.name}</h3>
              <span className={styles.memberRole}>{t(`members.${member.key}.role`)}</span>
              <span className={styles.memberSpec}>{t(`members.${member.key}.spec`)}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
