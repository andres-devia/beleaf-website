"use client";

import { useMagnetic } from "@/hooks/useMagnetic";
import { ICON_MAP } from "@/components/ui/iconMap";
import type { StackTool } from "@/types/services";
import styles from "./Stack.module.css";

export function StackChip({ tool }: { tool: StackTool }) {
  const ref = useMagnetic<HTMLDivElement>();
  const ToolIcon = ICON_MAP[tool.icon];

  return (
    <div className={styles.chip} ref={ref}>
      <span className={styles.mark}>
        <ToolIcon size={17} />
      </span>
      <span className={styles.name}>{tool.name}</span>
    </div>
  );
}
