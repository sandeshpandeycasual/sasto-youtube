import { CssVarsProvider, extendTheme } from "@mui/joy";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Router } from "../router";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const theme = extendTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  }
});
root.render(
  <StrictMode>
    <CssVarsProvider theme={theme}>
      <Router />
    </CssVarsProvider>
  </StrictMode>
);
