"use client";

import { useState } from "react";
import Chip from "@mui/material/Chip";
import { useTranslations } from "next-intl";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useQuoteModal } from "@/hooks/useQuoteModal";
import type { ServiceKey } from "@/types/contact";
import type { HeroPillOption } from "@/types/content";
import styles from "./Hero.module.css";

const PILL_TO_SERVICE: Record<string, ServiceKey> = {
  web: "web",
  ecommerce: "web",
  seo: "seo",
  automation: "ia",
  crm: "crm",
  saas: "web",
};

export function HeroPills({ options }: { options: HeroPillOption[] }) {
  const t = useTranslations("Home.hero");
  const { open } = useQuoteModal();
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (key: string) => setSelected((prev) => (prev.includes(key) ? prev.filter((o) => o !== key) : [...prev, key]));

  const hasSelection = selected.length > 0;
  const serviceKeys = Array.from(new Set(selected.map((s) => PILL_TO_SERVICE[s]).filter(Boolean)));
  const selectedLabels = selected.map((key) => t(`pills.${key}`));

  return (
    <div className={styles.pick}>
      <span className={styles.pickLabel}>
        {t("pickLabel")} <em>{t("pickHint")}</em>
      </span>
      <div className={styles.pills} role="group" aria-label="Servicios">
        {options.map((option) => {
          const on = selected.includes(option.key);
          return (
            <Chip
              key={option.key}
              variant="outlined"
              clickable
              aria-pressed={on}
              icon={on ? <Check size={15} strokeWidth={3.5} /> : undefined}
              label={t(`pills.${option.key}`)}
              className={`${styles.pill} ${on ? styles.pillOn : ""}`}
              onClick={() => toggle(option.key)}
            />
          );
        })}
      </div>
      <div className={`${styles.banner} ${hasSelection ? styles.bannerActive : ""}`}>
        {hasSelection ? (
          <div className={styles.bannerIn}>
            <div>
              <span className={styles.bannerK}>{t("bannerK")}</span>
              <span className={styles.bannerV}>{selectedLabels.join(" · ")}</span>
            </div>
            <Button variant="primary" arrow onClick={() => open(serviceKeys)}>
              {t("bannerCta")}
            </Button>
          </div>
        ) : null}
      </div>
      {!hasSelection && (
        <span className={styles.hint}>
          {t("hintPre")}{" "}
          <button type="button" className={styles.hintLink} onClick={() => open()}>
            {t("hintLink")}
          </button>
          .
        </span>
      )}
    </div>
  );
}
