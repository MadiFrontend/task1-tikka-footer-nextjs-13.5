import "./globals.css";
import * as React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Footer from "./_components/Footer/Footer";
import theme from "@/theme/theme";
import { Vazirmatn } from "next/font/google";

const vazirmatn = Vazirmatn({
  display: "swap",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700", "700", "800", "900"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html dir="rtl" className={`${vazirmatn.className}`}>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
