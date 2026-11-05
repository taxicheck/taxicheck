import { LANGS } from "../lib/data.js";
import { COUNTRIES } from "../lib/countries.js";
export function GET({ site }) {
  const base = (site?.toString() || "").replace(/\/$/, "") + import.meta.env.BASE_URL.replace(/\/$/, "");
  const paths = LANGS.flatMap((l) => [`/${l}/`, `/${l}/countries/`, ...COUNTRIES.map((c) => `/${l}/countries/${c.slug}/`), `/${l}/impressum/`, `/${l}/datenschutz/`]);
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map((p) => `  <url><loc>${base}${p}</loc></url>`).join("\n")}\n</urlset>\n`;
  return new Response(body, { headers: { "Content-Type": "application/xml" } });
}
