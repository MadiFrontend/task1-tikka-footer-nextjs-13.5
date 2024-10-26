"use client";

import { createTheme } from "@mui/material";

const theme = createTheme({
  cssVariables: true,
  typography: {
    fontSize: 14,
  },
  palette: {
    customColors: {
      footerBg: "#00262F",
      textColor: "#FAFAFA",
    },
  },
});

export default theme;
