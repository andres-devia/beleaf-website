"use client";

import { ArrowRight } from "lucide-react";
import { useQuoteModal } from "@/hooks/useQuoteModal";
import { HUB_FINAL } from "@/content/servicesHub";
import styles from "./ServicesHub.module.css";

export function HubFinalCTA() {
  const { open } = useQuoteModal();

  return (
    <section className={`${styles.section} ${styles.final}`}>
      <div className={styles.finalInner}>
        <h2 className={styles.finalH2}>{HUB_FINAL.title}</h2>
        <p className={styles.finalBody}>{HUB_FINAL.body}</p>
        <button type="button" className="btn btn-primary" onClick={() => open()}>
          {HUB_FINAL.cta} <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}
