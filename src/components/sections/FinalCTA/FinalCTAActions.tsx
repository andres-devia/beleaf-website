"use client";

import { useQuoteModal } from "@/hooks/useQuoteModal";
import styles from "./FinalCTA.module.css";

export function FinalCTAActions() {
  const { open } = useQuoteModal();

  return (
    <div className={`${styles.actions} reveal reveal-delay-1`}>
      <button type="button" className="btn btn-primary" onClick={() => open()}>
        Cotiza tu proyecto
      </button>
      <a className="btn btn-outline" href="/contacto">
        Agenda una llamada
      </a>
    </div>
  );
}
