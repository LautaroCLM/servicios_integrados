import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const container = document.getElementById("root")!;

// El prerender marca qué ruta generó el HTML estático. Si coincide con la URL actual,
// se hidrata (React reutiliza el HTML existente). Si no (p. ej. el panel admin, que
// Netlify sirve con el index.html de la home), se descarta y se renderiza desde cero.
const normalize = (p: string) => p.replace(/\/+$/, "") || "/";
const prerenderedPath = container.dataset.prerenderedPath;

if (prerenderedPath && normalize(prerenderedPath) === normalize(window.location.pathname)) {
  hydrateRoot(container, <App />);
} else {
  container.innerHTML = "";
  createRoot(container).render(<App />);
}
