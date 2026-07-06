"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { useQuoteModal } from "@/hooks/useQuoteModal";
import styles from "./FinalCTA.module.css";

export function FinalCTAActions() {
  const t = useTranslations("Home.finalCta");
  const { open } = useQuoteModal();

  return (
    <Reveal as="div" delay={1} className={`d-flex flex-wrap justify-content-center ${styles.actions}`}>
      <Button variant="primary" onClick={() => open()}>
        {t("primaryCta")}
      </Button>
      <Button variant="outline" href="/contacto">
        {t("secondaryCta")}
      </Button>
    </Reveal>
  );
}
