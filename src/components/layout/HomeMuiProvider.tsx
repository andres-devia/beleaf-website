"use client";

import type { ReactNode } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { muiTheme } from "@/styles/muiTheme";

/**
 * Provider de MUI aplicado únicamente en src/app/page.tsx (el Home), no en el
 * root layout: Button/Chip de MUI solo se usan en las secciones del Home, el
 * resto del sitio sigue en CSS puro sin que este tema lo afecte.
 */
export function HomeMuiProvider({ children }: { children: ReactNode }) {
  return (
    <AppRouterCacheProvider options={{ key: "mui-home" }}>
      <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>
    </AppRouterCacheProvider>
  );
}
