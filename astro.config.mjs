import { defineConfig } from "astro/config";
// Домен сайта
export default defineConfig({
  site: process.env.SITE_URL || "https://taxicheck.eu",
  base: process.env.BASE_PATH || "/",
  trailingSlash: "always",
});
