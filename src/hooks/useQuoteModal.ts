"use client";

import { createContext, useContext } from "react";
import type { ServiceKey } from "@/types/contact";

export interface QuoteModalContextValue {
  open: (preselect?: ServiceKey[]) => void;
}

export const QuoteModalContext = createContext<QuoteModalContextValue | null>(null);

export function useQuoteModal(): QuoteModalContextValue {
  const ctx = useContext(QuoteModalContext);
  if (!ctx) throw new Error("useQuoteModal must be used within QuoteModalProvider");
  return ctx;
}
