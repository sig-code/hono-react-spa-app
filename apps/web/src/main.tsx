import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { MantineProvider } from "@repo/ui";

// グローバルCSSをインポート
import "./global.css";

// Mantineのスタイルは@repo/uiから自動的にインポートされます

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider>
      <App />
    </MantineProvider>
  </StrictMode>
);
