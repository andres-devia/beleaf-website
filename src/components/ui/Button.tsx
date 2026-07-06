import MuiButton from "@mui/material/Button";
import { Link } from "@/i18n/navigation";
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

  // variant="text" deja el fondo/borde/color en manos de Button.module.css
  // (fiel al design system); MUI aporta el componente, focus-visible y ripple.
  if (href) {
    return (
      <MuiButton component={Link} href={href as "/contacto"} variant="text" disableRipple={false} className={cls}>
        {children}
        {arrow && <ArrowRight size={16} />}
      </MuiButton>
    );
  }

  return (
    <MuiButton
      type={type}
      variant="text"
      disableRipple={false}
      className={cls}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
      {arrow && <ArrowRight size={16} />}
    </MuiButton>
  );
}
