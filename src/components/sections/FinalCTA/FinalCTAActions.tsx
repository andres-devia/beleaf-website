"use client";

import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { useQuoteModal } from "@/hooks/useQuoteModal";
import styles from "./FinalCTA.module.css";

export function FinalCTAActions() {
  const { open } = useQuoteModal();

  return (
    <Reveal as="div" delay={1} className={`d-flex flex-wrap justify-content-center ${styles.actions}`}>
      <Button variant="primary" onClick={() => open()}>
        Cotiza tu proyecto
      </Button>
      <Button variant="outline" href="/contacto">
        Agenda una llamada
      </Button>
    </Reveal>
  );
}
