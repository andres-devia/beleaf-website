"use client";

import { Button } from "@/components/ui/Button";
import { useQuoteModal } from "@/hooks/useQuoteModal";
import styles from "./FinalCTA.module.css";

export function FinalCTAActions() {
  const { open } = useQuoteModal();

  return (
    <div className={`d-flex flex-wrap justify-content-center ${styles.actions} reveal reveal-delay-1`}>
      <Button variant="primary" onClick={() => open()}>
        Cotiza tu proyecto
      </Button>
      <Button variant="outline" href="/contacto">
        Agenda una llamada
      </Button>
    </div>
  );
}
