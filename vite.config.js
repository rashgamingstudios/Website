import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
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

      // GitHub Pages answers /pricing with 404.html *and a 404 status*, so
      // Google would never index it. A real pricing/index.html returns 200.
      const html = readFileSync(out("index.html"), "utf8")
        .replaceAll('href="https://rashgamestudios.com/"', 'href="https://rashgamestudios.com/pricing"')
        .replaceAll('content="https://rashgamestudios.com/"', 'content="https://rashgamestudios.com/pricing"')
        .replace(/<title>[^<]*<\/title>/, "<title>Pricing — Rash Game Studios</title>");
      mkdirSync(out("pricing"), { recursive: true });
      writeFileSync(out("pricing/index.html"), html);
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), spaFallback()],
  // Honor an externally assigned port (e.g. the preview harness's PORT env
  // var) so multiple dev servers can coexist; falls back to Vite's default.
  server: {
    port: Number(process.env.PORT) || 5174,
    strictPort: Boolean(process.env.PORT),
  },
});
