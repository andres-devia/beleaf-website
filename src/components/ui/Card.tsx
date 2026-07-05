import type { CardProps } from "@/types/ui";
import styles from "./Card.module.css";

export function Card({ children, className = "" }: CardProps) {
  return <div className={[styles.card, className].filter(Boolean).join(" ")}>{children}</div>;
}
