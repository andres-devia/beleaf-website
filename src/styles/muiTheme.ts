import { createTheme } from "@mui/material/styles";

/**
 * Tema MUI calibrado 1:1 contra design/tokens.json — no se usan los defaults
 * de Material Design (radios, sombras, tipografía) para que los componentes
 * MUI usados en el Home (Button, Chip) se vean idénticos al resto del sitio.
 */
export const muiTheme = createTheme({
  palette: {
    primary: { main: "#ff9640", light: "#ffc285", dark: "#f5852b", contrastText: "#0e2035" },
    secondary: { main: "#0e2035", light: "#1e3d5c", contrastText: "#ffffff" },
    text: { primary: "#0e2035", secondary: "#4a5568" },
    background: { default: "#ffffff", paper: "#ffffff" },
  },
  typography: {
    fontFamily: "var(--font-sans)",
    button: {
      fontWeight: 700,
      fontSize: "13px",
      letterSpacing: "0.06em",
      textTransform: "uppercase",
    },
  },
  shape: {
    borderRadius: 8, // radio máx. de card (tokens.radii.md) — los botones lo sobreescriben a 4px abajo
  },
  components: {
    MuiButton: {
      // Button.tsx (ui) siempre usa variant="text" y deja el look real
      // (fondo/borde/color por variante) a Button.module.css, así que aquí
      // solo se fijan propiedades de raíz comunes a cualquier variante.
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: "4px", // tokens.radii.button — nunca pill, pese a variantes MD
          padding: "14px 28px",
          border: "none",
          transition:
            "background 200ms ease, transform 140ms cubic-bezier(0.23,1,0.32,1), border-color 200ms ease, box-shadow 200ms ease",
          "&:active": { transform: "scale(0.97)" },
        },
        sizeLarge: { padding: "16px 32px", fontSize: "13.5px" },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: "var(--font-sans)",
          fontWeight: 600,
          borderRadius: "999px", // tokens.radii.pill — chips/badges sí son pill
        },
      },
    },
  },
});
