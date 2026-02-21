import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { GradientBackground } from "./components/animate-ui/components/backgrounds/gradient.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GradientBackground className="flex absolute inset-0">
      <App />
    </GradientBackground>
  </StrictMode>,
);
