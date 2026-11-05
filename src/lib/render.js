// Общие функции: считают цену и собирают HTML.
// Работают и при сборке страницы (для Google и без JavaScript), и в браузере.
import { TARIFF, PLACES, ROUTES, PHONES, COMPANIES, LINKS } from "./data.js";
import { L, OP } from "./texts.js";

export const esc = (s) => String(s).replace(/[&<>"]/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[m]));
const loc = (lang) => (lang === "ru" ? "ru-RU" : lang === "de" ? "de-DE" : "en-GB");
export const eur = (lang, n, d = 0) => n.toLocaleString(loc(lang), { minimumFractionDigits: d, maximumFractionDigits: d }) + " €";

export function meter(km, min) {
  let left = km, prev = 0; const parts = [];
  for (const [upTo, rate] of TARIFF.tiers) {
    if (left <= 0) break;
    const seg = Math.min(left, upTo - prev);
    parts.push([seg, rate, seg * rate]); left -= seg; prev = upTo;
  }
  const dist = TARIFF.base + parts.reduce((s, p) => s + p[2], 0);
  return { parts, lo: dist, hi: dist + min * TARIFF.perMin, w: min * TARIFF.perMin };
}

// state = { lang, routeId, km, min, to, reviews }
export function current(st) {
  const route = ROUTES.find((r) => r.id === st.routeId) || ROUTES[0];
  const own = route.id === "own";
  const km = own ? Math.max(st.km || 0, 0) : route.km;
  const min = own ? Math.max(st.min || 0, 0) : 15;
  return { route, own, km, min, m: meter(km, min) };
}

export function routesHTML(st) {
  const t = L[st.lang]; const { route } = current(st);
  return ROUTES.map((r) => `<button type="button" class="rt${r.big ? " big" : ""}" data-r="${r.id}" aria-pressed="${r === route}">${esc(r.name[st.lang])}<small>${esc(r.sub[st.lang])}${r.fix ? ` · ${t.fixTag} ${r.fix} €` : ""}</small></button>`).join("");
}

export function meterHTML(st) {
  const t = L[st.lang], lang = st.lang, c = current(st), m = c.m, route = c.route;
  let mode, total, note; const rows = [];
  if (route.fix) {
    mode = t.fixed; total = eur(lang, route.fix); note = t.noteFix;
    rows.push([t.cmp, `${eur(lang, m.lo)} – ${eur(lang, m.hi)}`]);
    if (route.uber) rows.push([t.uberX, `≈ ${eur(lang, route.uber.x)}`, "hl"]);
  } else {
    mode = t.meter; total = `${eur(lang, m.lo)} – ${eur(lang, m.hi)}`; note = t.noteMeter;
    rows.push([t.board, eur(lang, TARIFF.base, 2)]);
    m.parts.forEach((p) => rows.push([`${p[0].toLocaleString(loc(lang), { maximumFractionDigits: 1 })} km × ${eur(lang, p[1], 2)}`, eur(lang, p[2], 2)]));
    rows.push([`${t.waitRow} 0–${c.min} ${t.min} × ${eur(lang, TARIFF.perMin, 2)}`, `0 – ${eur(lang, m.w, 2)}`]);
  }
  rows.push([t.tipRow, ""]);
  return `<div class="meter-top"><span>${esc(t.taxi)} · ${esc(t.tariffFrom)} ${TARIFF.date}</span><span>${esc(mode)}</span></div>
<div class="meter-total">${total}</div><div class="meter-note">${esc(note)}</div>
<div class="rows">${rows.map((r) => `<div class="row"><span>${esc(r[0])}</span><span class="${r[2] || ""}">${r[1]}</span></div>`).join("")}</div>`;
}

export function appLinks(st) {
  const { route } = current(st);
  const dest = route.to ? PLACES[route.to] : { n: (st.to || "").trim() || "München" };
  const from = route.from ? PLACES[route.from] : null;
  const enc = encodeURIComponent(dest.n);
  let u = "https://m.uber.com/ul/?action=setPickup";
  u += from ? `&pickup[latitude]=${from.lat}&pickup[longitude]=${from.lng}&pickup[nickname]=${encodeURIComponent(from.n)}` : "&pickup=my_location";
  u += `&dropoff[formatted_address]=${enc}&dropoff[nickname]=${enc}`;
  if (dest.lat) u += `&dropoff[latitude]=${dest.lat}&dropoff[longitude]=${dest.lng}`;
  const b = dest.lat ? `taxify://action/bookaride?pickup=my_location&dropoff_latitude=${dest.lat}&dropoff_longitude=${dest.lng}&dropoff_title=${enc}` : "https://bolt.eu/de-de/";
  return { uber: u, bolt: b };
}

export function actionsHTML(st) {
  const t = L[st.lang], l = appLinks(st);
  return `<a class="btn" href="${esc(l.uber)}" rel="noopener sponsored">${t.openUber}<small>${t.withRoute}</small></a>
<a class="btn" href="${esc(l.bolt)}" rel="noopener">${t.openBolt}<small>${t.withRoute}</small></a>
<div class="phones"><strong style="font-size:14px">${t.callTaxi}</strong>${PHONES.map(([n, p], i) => `<div class="phone"><div><a class="tel" href="tel:${p.replace(/\s/g, "")}"><b>${p}</b></a><br><span>${n}</span></div><button type="button" class="copy" data-copy="${i}">${t.copy}</button></div>`).join("")}</div>
<p class="hint" style="grid-column:1/-1;margin:0">${t.appsHint}</p>`;
}

export function ratings(reviews) {
  const o = {}; COMPANIES.forEach((c) => (o[c] = { s: 0, v: 0, n: 0 }));
  (reviews || []).forEach((r) => { const x = o[r.c]; if (x) { x.s += r.s; x.v += r.v; x.n++; } });
  Object.values(o).forEach((x) => { if (x.n) { x.s /= x.n; x.v /= x.n; } });
  return o;
}
const scoreLine = (st, c) => { const t = L[st.lang], x = ratings(st.reviews)[c]; return x.n ? t.opScore(x.s.toFixed(1), x.v.toFixed(1), x.n) : t.opNo; };

export function tiersHTML(st) {
  const t = L[st.lang], lang = st.lang, l = appLinks(st), c = current(st), route = c.route, air = route.from === "air";
  const prov = (name, meta, price, link, label, ad, ghost) => `<div class="prov"><div class="prov-main"><div class="prov-name">${esc(name)}${ad ? `<span class="tag ad">${t.ad}</span>` : ""}</div><div class="prov-meta">${meta}</div><div class="prov-meta">${esc(scoreLine(st, name))}</div></div><div class="prov-side"><span class="price">${price}</span>${link ? `<a class="go${ghost ? " ghost" : ""}" href="${esc(link)}" rel="noopener${ad ? " sponsored" : ""}">${label}</a>` : ""}</div></div>`;
  const taxiPrice = route.fix ? `${eur(lang, route.fix)} <span class="tag src">${t.fixTag}</span>` : `${eur(lang, c.m.lo)}–${eur(lang, c.m.hi)}`;
  const uberPrice = route.uber ? `${route.uber.x} / ${route.uber.comfort} / ${route.uber.taxi} €` : t.inApp;
  const tier = (title, sub, body) => `<div class="tier"><div class="tier-head"><h3>${title}</h3><span>${sub}</span></div>${body}</div>`;
  return tier(t.t1, t.t1s, prov("Taxi München", esc(t.taxiMeta), taxiPrice, "", "", false)) +
    tier(t.t2, t.t2s,
      prov("Uber", `${esc(t.uberRow)}${route.uber ? " · " + esc(t.uberHint) : ""}`, uberPrice, l.uber, t.open, true) +
      prov("Bolt", esc(t.boltMeta), t.inApp, l.bolt, t.open, false) +
      prov("FREE NOW", esc(t.freeMeta), route.fix ? eur(lang, route.fix) : t.inApp, LINKS.freenow, t.open, false, true)) +
    tier(t.t3, t.t3s,
      (air ? prov("Welcome Pickups", esc(t.welcomeMeta), route.welcome ? `${route.welcome.day} € ${t.day} · ${route.welcome.night} € ${t.night}` : t.onReq, LINKS.welcome, t.book, true) : "") +
      (route.wt ? prov("World Transfer", esc(t.wtMeta), route.wt, LINKS.wt, t.book, false, true) : "") +
      prov("Daytrip", esc(t.daytripMeta), t.onReq, LINKS.daytrip, t.book, true, true)) +
    tier(t.t4, t.t4s, prov("Blacklane", esc(t.blackMeta), t.onReq, LINKS.blacklane, t.book, true, true));
}

export function opsHTML(st) {
  const t = L[st.lang];
  return Object.entries(OP).map(([c, o]) => {
    const x = o[st.lang];
    return `<div class="op"><div class="op-head"><h3>${esc(c)}</h3><span class="score">${esc(scoreLine(st, c))}</span></div><ul>${x.p.map((s) => `<li class="p">${esc(s)}</li>`).join("")}${x.m.map((s) => `<li class="m">${esc(s)}</li>`).join("")}</ul>${x.f ? `<span class="fact">${t.src}: ${esc(x.f)}</span>` : ""}</div>`;
  }).join("");
}

export function reviewsHTML(st) {
  const t = L[st.lang], s = (n) => "★".repeat(n) + "☆".repeat(5 - n);
  const rv = st.reviews || [];
  return rv.length ? rv.slice().sort((a, b) => b.d.localeCompare(a.d)).map((r) => `<div class="rev"><div class="rev-head"><strong>${esc(r.c)}</strong><span>${new Date(r.d).toLocaleDateString(loc(st.lang))}</span></div><span class="score">${t.service} ${s(r.s)} · ${t.value} ${s(r.v)}</span><p>${esc(r.t)}</p></div>`).join("") : `<p class="empty">${t.revEmpty}</p>`;
}

export function verdict(st, asked) {
  const t = L[st.lang], lang = st.lang, c = current(st), route = c.route;
  if (!(asked > 0)) return ["meh", t.vEmpty];
  if (route.fix) {
    const f = route.fix;
    if (asked > f + 1) return ["bad", t.vBadFix(eur(lang, asked - f), eur(lang, f))];
    if (asked < f - 10) return ["meh", t.vLowFix(eur(lang, f))];
    return ["ok", t.vOkFix(eur(lang, f))];
  }
  const m = c.m, range = `${eur(lang, m.lo)}–${eur(lang, m.hi)}`;
  if (asked <= m.hi * 1.05) return ["ok", t.vOk(range)];
  if (asked <= m.hi * 1.2) return ["meh", t.vMeh(eur(lang, asked - m.hi), range)];
  return ["bad", t.vBad(eur(lang, asked - m.hi), range)];
}
