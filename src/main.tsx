import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Global error handler for debugging white screen
window.onerror = function (message, source, lineno, colno, error) {
    const errorDiv = document.createElement("div");
    errorDiv.style.position = "fixed";
    errorDiv.style.top = "0";
    errorDiv.style.left = "0";
    errorDiv.style.width = "100%";
    errorDiv.style.backgroundColor = "red";
    errorDiv.style.color = "white";
    errorDiv.style.padding = "20px";
    errorDiv.style.zIndex = "9999";
    errorDiv.innerHTML = `
    <h1>Runtime Error</h1>
    <p><strong>Message:</strong> ${message}</p>
    <p><strong>Source:</strong> ${source}:${lineno}:${colno}</p>
    <pre style="white-space: pre-wrap;">${error?.stack || ''}</pre>
  `;
    document.body.appendChild(errorDiv);
};

try {
    const rootElement = document.getElementById("root");
    if (!rootElement) {
        throw new Error("Root element not found");
    }
    createRoot(rootElement).render(<App />);
} catch (e) {
    document.body.innerHTML = `<div style="color: red; padding: 20px;"><h1>Mount Error</h1><pre>${e}</pre></div>`;
    console.error(e);
}
