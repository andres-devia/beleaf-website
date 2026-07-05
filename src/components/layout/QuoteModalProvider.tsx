"use client";

import { useState, type ReactNode } from "react";
import { QuoteModalContext } from "@/hooks/useQuoteModal";
import { QuoteModal } from "@/components/sections/QuoteModal";
import type { ServiceKey } from "@/types/contact";

export function QuoteModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [preselect, setPreselect] = useState<ServiceKey[]>([]);

  const open = (services: ServiceKey[] = []) => {
    setPreselect(services);
    setIsOpen(true);
  };

  return (
    <QuoteModalContext.Provider value={{ open }}>
      {children}
      <QuoteModal open={isOpen} preselect={preselect} onClose={() => setIsOpen(false)} />
    </QuoteModalContext.Provider>
  );
}
