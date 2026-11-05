import { defineConfig } from "astro/config";
// Когда будет домен, поменять site на него, например https://www.taxicheck.de
export default defineConfig({
  site: process.env.SITE_URL || "https://taxicheck.example",
  base: process.env.BASE_PATH || "/",
  trailingSlash: "always",
});
