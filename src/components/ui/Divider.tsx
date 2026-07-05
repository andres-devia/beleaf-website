import type { DividerProps } from "@/types/ui";
import styles from "./Divider.module.css";

export function Divider({ className = "" }: DividerProps) {
  return <hr className={[styles.divider, className].filter(Boolean).join(" ")} />;
}
