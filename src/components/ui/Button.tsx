import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ButtonProps } from "@/types/ui";
import styles from "./Button.module.css";

export function Button({
  children,
  variant,
  size = "md",
  href,
  onClick,
  type = "button",
  disabled,
  arrow,
  className = "",
}: ButtonProps) {
  const cls = [styles.btn, styles[variant], styles[size], disabled ? styles.disabled : "", className]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
        {arrow && <ArrowRight size={16} />}
      </Link>
    );
  }

  return (
    <button type={type} className={cls} onClick={onClick} disabled={disabled}>
      {children}
      {arrow && <ArrowRight size={16} />}
    </button>
  );
}
