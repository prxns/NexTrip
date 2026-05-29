import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { CurrencyProvider } from "./context/CurrencyContext";

import "./styles/globals.css";

import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CurrencyProvider>
      <App />
    </CurrencyProvider>
  </StrictMode>
);