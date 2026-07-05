"use client";

import { useState } from "react";
import Chip from "@mui/material/Chip";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useQuoteModal } from "@/hooks/useQuoteModal";
import type { ServiceKey } from "@/types/contact";
import styles from "./Hero.module.css";

const PILL_TO_SERVICE: Record<string, ServiceKey> = {
  "Sitio web": "web",
  "E-commerce": "web",
  "SEO técnico": "seo",
  "Automatización IA": "ia",
  CRM: "crm",
  "Plataforma SaaS": "web",
};

export function HeroPills({ options }: { options: string[] }) {
  const { open } = useQuoteModal();
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (option: string) =>
    setSelected((prev) => (prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]));

  const hasSelection = selected.length > 0;
  const serviceKeys = Array.from(new Set(selected.map((s) => PILL_TO_SERVICE[s]).filter(Boolean)));

  return (
    <div className={styles.pick}>
      <span className={styles.pickLabel}>
        ¿Qué necesitas construir? <em>Selecciona todo lo que aplique</em>
      </span>
      <div className={styles.pills} role="group" aria-label="Servicios">
        {options.map((option) => {
          const on = selected.includes(option);
          return (
            <Chip
              key={option}
              variant="outlined"
              clickable
              aria-pressed={on}
              icon={on ? <Check size={15} strokeWidth={3.5} /> : undefined}
              label={option}
              className={`${styles.pill} ${on ? styles.pillOn : ""}`}
              onClick={() => toggle(option)}
            />
          );
        })}
      </div>
      <div className={`${styles.banner} ${hasSelection ? styles.bannerActive : ""}`}>
        {hasSelection ? (
          <div className={styles.bannerIn}>
            <div>
              <span className={styles.bannerK}>Listo para cotizar</span>
              <span className={styles.bannerV}>{selected.join(" · ")}</span>
            </div>
            <Button variant="primary" arrow onClick={() => open(serviceKeys)}>
              Empecemos
            </Button>
          </div>
        ) : null}
      </div>
      {!hasSelection && (
        <span className={styles.hint}>
          Toca un servicio para armar tu proyecto, o{" "}
          <button type="button" className={styles.hintLink} onClick={() => open()}>
            cotiza directo
          </button>
          .
        </span>
      )}
    </div>
  );
}
