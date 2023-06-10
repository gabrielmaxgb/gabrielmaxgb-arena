import { ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { InteractivePanelContextWrapper } from "./app/contexts/interactive-panel-context/InteractivePanelContext.tsx";
import "./index.css";
import { theme } from "./theme/theme.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <InteractivePanelContextWrapper>
        <App />
      </InteractivePanelContextWrapper>
    </ThemeProvider>
  </React.StrictMode>
);
