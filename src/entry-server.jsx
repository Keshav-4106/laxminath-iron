// Used only at build time by scripts/prerender.mjs to turn each route into static HTML.
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.jsx";

export function render(url) {
  return renderToString(
    <React.StrictMode>
      <HelmetProvider>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HelmetProvider>
    </React.StrictMode>
  );
}
