import { copyFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

/*
 * SPA fallback. The site has real routes now (/pricing), so a static host
 * asked for /pricing directly would 404 — index.html is the only real file.
 * Copying it to 404.html makes GitHub Pages (and most static hosts) serve the
 * app, which then renders the right route. _redirects covers Netlify, and
 * .nojekyll stops Pages from eating the underscore-prefixed asset names.
 */
function spaFallback() {
  return {
    name: "spa-fallback",
    apply: "build",
    closeBundle() {
      const out = (f) => resolve(__dirname, "dist", f);
      copyFileSync(out("index.html"), out("404.html"));
      writeFileSync(out("_redirects"), "/*  /index.html  200\n");
      writeFileSync(out(".nojekyll"), "");
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), spaFallback()],
  // Honor an externally assigned port (e.g. the preview harness's PORT env
  // var) so multiple dev servers can coexist; falls back to Vite's default.
  server: {
    port: Number(process.env.PORT) || 5173,
    strictPort: Boolean(process.env.PORT),
  },
});
