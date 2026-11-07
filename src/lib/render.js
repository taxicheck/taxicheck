// Общие функции: считают цену и собирают HTML.
// Работают и при сборке страницы (для Google и без JavaScript), и в браузере.
import { TARIFF, PLACES, ROUTES, PHONES, COMPANIES, LINKS, REVIEW_COUNTRIES } from "./data.js";
import { L, OP, W, NOW, EX, RV } from "./texts.js";

export const esc = (s) => String(s).replace(/[&<>"]/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[m]));
const loc = (lang) => (lang === "ru" ? "ru-RU" : lang === "de" ? "de-DE" : "en-GB");
export const eur = (lang, n, d = 0) => n.toLocaleString(loc(lang), { minimumFractionDigits: d, maximumFractionDigits: d }) + "\u00a0€";
// HTML-цена: «€» мельче и вплотную; неразрывные пробелы у единиц и разделителей
export const curH = (s) => String(s).replace(/[\s\u00a0]?€/g, '<span class="cur">€</span>');
export const nb = (s) => String(s).replace(/(\d) (km|км|€|Min\.|мин)/g, "$1\u00a0$2").replace(/(фикс|fix|Festpreis|fixed) (\d)/gi, "$1\u00a0$2").replace(/ · /g, "\u00a0·\u00a0");

// Заголовок обложки главной — по выбранному маршруту (обновляется вместе с табло)
const HT = { ru: ["фиксировано", "по счётчику"], de: ["Festpreis", "Taxameter"], en: ["fixed", "metered"] };
export function heroTitle(st) {
  const c = current(st), r = c.route, h = HT[st.lang], name = (r.short || r.name)[st.lang];
  if (r.fix) return st.lang === "ru" ? `${name}: ${r.fix}\u00a0€, ${h[0]}` : `${name}: ${r.fix}\u00a0€ ${h[0]}`;
  const lo = Math.round(c.m.lo), hi = Math.round(c.m.hi);
  return `${name}: ${lo}–${hi}\u00a0€, ${h[1]}`;
}

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
  return ROUTES.map((r) => `<button type="button" class="rt${r.big ? " big" : ""}" data-r="${r.id}" aria-pressed="${r === route}"><span class="rt-l">${esc(r.name[st.lang])}</span><span class="rt-s">${esc((r.short || r.name)[st.lang])}</span><small>${nb(esc(r.sub[st.lang]) + (r.fix ? ` · ${t.fixTag} ${r.fix} €` : ""))}</small></button>`).join("");
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
  return `<div class="meter-top"><span>${esc(t.taxi)}<span class="mt-tariff"> · ${esc(t.tariffFrom)} ${TARIFF.date}</span></span><span>${esc(mode)}</span></div>
<div class="meter-total">${curH(total)}</div><div class="meter-note">${esc(note)}</div>
<div class="rows">${rows.map((r) => `<div class="row"><span>${esc(r[0])}</span><span class="${r[2] || ""}">${r[1]}</span></div>`).join("")}</div>
<div class="meter-foot">${esc(t.tariffFrom)} ${TARIFF.date}</div>`;
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
<div class="phones"><strong class="phones-h">${t.callTaxi}</strong>${PHONES.map(([n, p], i) => `<div class="phone"><div class="phone-t"><b>${p.replace(" ", "\u00a0")}</b><span>${n}</span></div><button type="button" class="copy" data-copy="${i}" aria-label="${t.copy}: ${p}" title="${t.copy}"><svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><rect x="8" y="8" width="12" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" fill="none" stroke="currentColor" stroke-width="2"/></svg></button><a class="btn call" href="tel:${p.replace(/\s/g, "")}"><svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z" fill="currentColor"/></svg>${CALL[st.lang]}</a></div>`).join("")}</div>
<p class="hint" style="grid-column:1/-1;margin:0">${t.appsHint}</p>`;
}

export function ratings(reviews) {
  const o = {}; COMPANIES.forEach((c) => (o[c] = { s: 0, v: 0, n: 0 }));
  (reviews || []).forEach((r) => { const x = o[r.c]; if (x) { x.s += r.s; x.v += r.v; x.n++; } });
  Object.values(o).forEach((x) => { if (x.n) { x.s /= x.n; x.v /= x.n; } });
  return o;
}
// Пока отзывов нет — строку не показываем (без «оценок пока нет»)
const scoreLine = (st, c) => { const t = L[st.lang], x = ratings(st.reviews)[c]; if (!x || !x.n) return ""; return t.opScore(x.s.toFixed(1), x.v.toFixed(1), x.n); };
const CALL = { ru: "Позвонить", de: "Anrufen", en: "Call" };

export function tiersHTML(st) {
  const t = L[st.lang], lang = st.lang, l = appLinks(st), c = current(st), route = c.route, air = route.from === "air";
  const MORE = { ru: "Подробнее", de: "Details", en: "Details" }[lang];
  const prov = (name, meta, price, link, label, ad, ghost, line) => `<div class="prov"><details class="prov-main pd"><summary aria-label="${esc(name)}: ${MORE}"><span class="pd-t"><span class="prov-name">${esc(name)}${ad ? `<span class="tag ad">${t.ad}</span>` : ""}</span><span class="prov-line">${line || meta}</span></span></summary><div class="pd-b"><div class="prov-meta">${meta}</div>${whenLine(st, name)}${scoreLine(st, name) ? `<div class="prov-meta">${esc(scoreLine(st, name))}</div>` : ""}</div></details><div class="prov-side"><span class="price">${curH(nb(price))}</span>${link ? `<a class="go${ghost ? " ghost" : ""}" href="${esc(link)}" rel="noopener${ad ? " sponsored" : ""}">${label}</a>` : ""}</div></div>`;
  const taxiPrice = route.fix ? `${eur(lang, route.fix)} <span class="tag src">${t.fixTag}</span>` : `${eur(lang, c.m.lo)}–${eur(lang, c.m.hi)}`;
  const uberPrice = route.uber ? `${route.uber.x} / ${route.uber.comfort} €` : t.inApp;
  const tier = (title, sub, body) => `<div class="tier"><div class="tier-head"><h3>${title}</h3><span>${sub}</span></div>${body}</div>`;
  const x = EX[lang];
  const appPrice = route.fix ? `${eur(lang, route.fix)}` : `${eur(lang, c.m.lo * 0.95)}–${eur(lang, c.m.lo * 1.2)}`;
  const appMeta = esc(x.taxiAppMeta) + (route.fix ? ` <strong>${esc(x.taxiAppZone)}</strong>` : "");
  const FIXLINE = { ru: (p) => `Фиксированно ${p}\u00a0€ через taxi.eu / IsarFunk`, de: (p) => `Festpreis ${p}\u00a0€ über taxi.eu / IsarFunk`, en: (p) => `Fixed ${p}\u00a0€ via taxi.eu / IsarFunk` }[lang];
  const appLine = route.fix ? FIXLINE(route.fix) : "";
  const BOLTP = `—<small class="ph-hint">${esc(t.inApp)}</small>`;
  return tier(t.t1, t.t1s, prov("Taxi München", esc(t.taxiMeta), taxiPrice, "", "", false) + prov(x.taxiApp, appMeta, appPrice, "https://isarfunk.de/isarfunk-festpreis/", t.open, false, true, appLine)) +
    tier(t.t2, t.t2s,
      prov("Uber", `${esc(t.uberRow)}${route.uber ? " · " + esc(t.uberHint) : ""}`, uberPrice, l.uber, t.open, true) +
      prov("Bolt", esc(t.boltMeta), BOLTP, l.bolt, t.open, false) +
      prov("FREE NOW", esc(t.freeMeta), route.fix ? eur(lang, route.fix) : t.inApp, LINKS.freenow, t.open, false, true)) +
    tier(t.t3, t.t3s,
      (air ? prov("Welcome Pickups", esc(t.welcomeMeta), route.welcome ? `${route.welcome.day} € ${t.day} · ${route.welcome.night} € ${t.night}` : t.onReq, LINKS.welcome, t.book, true) : "") +
      (route.wt ? prov("World Transfer", esc(t.wtMeta), route.wt, LINKS.wt, t.book, false, true) : "") +
      prov("Kiwitaxi", esc(t.kiwiMeta), t.onReq, LINKS.kiwitaxi, t.book, true, true) +
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

export const countryName = (lang, code) => { const c = REVIEW_COUNTRIES.find(([k]) => k === code); return c && c[1] ? c[1][lang] : RV[lang].other; };

export function reviewsHTML(st) {
  const t = L[st.lang], r = RV[st.lang], s = (n) => "★".repeat(n) + "☆".repeat(5 - n);
  const rv = st.reviews || [];
  if (!rv.length) return `<p class="empty">${t.revEmpty}</p>`;
  // Рейтинг по странам: средняя из двух оценок по каждой компании
  const by = {};
  rv.forEach((x) => { const k = x.co || "de"; (by[k] ||= {}); const c = (by[k][x.c] ||= { sum: 0, n: 0 }); c.sum += (x.s + x.v) / 2; c.n++; });
  const rank = `<div class="rank"><h3>${r.byCountry}</h3>${Object.entries(by).map(([k, cs]) => `<div class="rank-c"><strong>${esc(countryName(st.lang, k))}</strong><ol>${Object.entries(cs).sort((a, b) => b[1].sum / b[1].n - a[1].sum / a[1].n).map(([c, v]) => `<li><span>${esc(c)}</span><span class="score">★ ${(v.sum / v.n).toFixed(1)} · ${r.count(v.n)}</span></li>`).join("")}</ol></div>`).join("")}</div>`;
  const list = rv.slice().sort((a, b) => b.d.localeCompare(a.d)).map((x) => `<div class="rev"><div class="rev-head"><strong>${esc(x.c)}</strong><span>${new Date(x.d).toLocaleDateString(loc(st.lang))}</span></div><div class="rev-meta"><span class="tag">${x.k === "long" ? r.long : r.fresh}</span>${esc(countryName(st.lang, x.co || "de"))}${x.ci ? ", " + esc(x.ci) : ""}</div><span class="score">${t.service} ${s(x.s)} · ${t.value} ${s(x.v)}</span><p>${esc(x.t)}</p></div>`).join("");
  return rank + list;
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

function whenLine(st, name) {
  const w = W[st.lang], pre = w.pre[name]; if (!pre) return "";
  const now = NOW.includes(name);
  return `<div class="when"><span class="chip ${now ? "now" : "pre"}">${now ? w.now : w.only}</span>${esc(pre)}</div>`;
}

export function whenHTML(st) {
  const w = W[st.lang];
  return `<table class="journal when-t"><thead><tr>${w.cols.map((c) => `<th>${esc(c)}</th>`).join("")}</tr></thead><tbody>${Object.entries(w.pre).map(([c, pre]) => `<tr><td><strong>${esc(c)}</strong></td><td>${NOW.includes(c) ? `<span class="chip now">${w.yes}</span>` : `<span class="chip pre">${w.no}</span>`}</td><td>${esc(pre)}</td></tr>`).join("")}</tbody></table>`;
}
