import { PaletteOptions } from "@mui/material/styles/createPalette";

declare module "@mui/material/styles" {
  interface Palette {
    customColors: {
      [key: string]: string; // Defines custom color keys and their values
    };
  }

  interface PaletteOptions {
    customColors?: {
      [key: string]: string; // Optional custom colors
    };
  }
}
