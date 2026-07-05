import type { BadgeProps } from "@/types/ui";
import styles from "./Badge.module.css";

export function Badge({ children, variant, className = "" }: BadgeProps) {
  return <span className={[styles[variant], className].filter(Boolean).join(" ")}>{children}</span>;
}
