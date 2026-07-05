import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

export type ButtonVariant = "primary" | "secondary" | "outline" | "onNavyOutline" | "ghost";
export type ButtonSize = "md" | "lg";

export interface ButtonProps {
  children: ReactNode;
  variant: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  arrow?: boolean;
  className?: string;
}

export type BadgeVariant = "tag" | "chip" | "chipActive" | "soon";

export interface BadgeProps {
  children: ReactNode;
  variant: BadgeVariant;
  className?: string;
}

export interface CardProps {
  children: ReactNode;
  className?: string;
}

export interface SectionTitleProps {
  kicker?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  onNavy?: boolean;
  className?: string;
}

export interface IconProps {
  icon: LucideIcon;
  size?: number;
  strokeWidth?: number;
  className?: string;
}

export interface RevealProps {
  children: ReactNode;
  delay?: 1 | 2 | 3 | 4 | 5;
  as?: "div" | "span" | "h1" | "h2" | "h3" | "p";
  className?: string;
}

export interface CountUpProps {
  value: number;
  suffix?: string;
  label: string;
}

export interface DividerProps {
  className?: string;
}
