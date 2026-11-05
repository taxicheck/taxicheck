// Собирает предпросмотр для Claude: все страницы плоскими файлами с относительными ссылками.
import fs from "node:fs"; import path from "node:path";
const dist = process.argv[2], out = process.argv[3], main = process.argv[4];
fs.rmSync(out, { recursive: true, force: true }); fs.mkdirSync(path.join(out, "assets"), { recursive: true });
for (const f of fs.readdirSync(path.join(dist, "_astro"))) fs.copyFileSync(path.join(dist, "_astro", f), path.join(out, "assets", f));
const name = (p) => { // "/ru/countries/italy/" -> "ru-countries-italy.html", "/ru/" -> "./"
  const parts = p.replace(/^\/|\/$/g, "").split("/").filter(Boolean);
  if (parts.length === 0 || (parts.length === 1 && parts[0] === "ru")) return "./";
  return parts.join("-") + ".html";
};
const fix = (html) => html
  .replace(/(href|src)="\/_astro\//g, '$1="assets/')
  .replace(/href="\/favicon\.svg"/g, 'href="favicon.svg"')
  .replace(/href="(\/(?:ru|de|en)\/[^"#]*)"/g, (m, p) => `href="${name(p)}"`)
  .replace(/href="\.\.\/impressum\/"/g, () => 'href="IMPRESSUM"');
const pages = [];
(function walk(d) { for (const f of fs.readdirSync(d)) { const p = path.join(d, f); if (fs.statSync(p).isDirectory()) walk(p); else if (f === "index.html") pages.push(p); } })(dist);
for (const p of pages) {
  const rel = "/" + path.relative(dist, path.dirname(p)).split(path.sep).join("/") + "/";
  if (rel === "//") continue;
  const lang = rel.split("/")[1];
  let html = fix(fs.readFileSync(p, "utf8")).replace(/href="IMPRESSUM"/g, `href="${name(`/${lang}/impressum/`)}"`);
  const target = name(rel);
  if (target === "./") {
    const head = html.match(/<head>([\s\S]*?)<\/head>/)[1].replace(/<meta charset[^>]*>|<meta name="viewport"[^>]*>|<title>[\s\S]*?<\/title>/g, "");
    const body = html.match(/<body>([\s\S]*?)<\/body>/)[1];
    fs.writeFileSync(main, `<title>TaxiCheck München</title>\n<meta name="claude:viewport-fit-sides" content="cover">\n${head}\n${body}`);
  } else fs.writeFileSync(path.join(out, target), html);
}
fs.copyFileSync(path.join(dist, "favicon.svg"), path.join(out, "favicon.svg"));
console.log(fs.readdirSync(out).length, "files");
