import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "tachyons";
import "./index.css";
import App from "./App.jsx";
import ParticlesBg from "particles-bg";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ParticlesBg type="cobweb" bg={false} />
    <App />
  </StrictMode>
);
