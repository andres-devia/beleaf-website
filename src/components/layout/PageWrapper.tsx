import type { ReactNode } from "react";

export function PageWrapper({ children }: { children: ReactNode }) {
  return <main id="top">{children}</main>;
}
