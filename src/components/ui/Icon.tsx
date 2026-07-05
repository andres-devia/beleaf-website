import type { IconProps } from "@/types/ui";

export function Icon({ icon: LucideIcon, size = 20, strokeWidth = 2, className = "" }: IconProps) {
  return <LucideIcon size={size} strokeWidth={strokeWidth} className={className} aria-hidden="true" />;
}
