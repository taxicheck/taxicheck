// TaxiCheck · Preismeldungen von Fahrgästen
// Einfügen in: Google-Tabelle → Erweiterungen → Apps Script. Bereitstellen als Web-App
// (Ausführen als: ich; Zugriff: Jeder). Die Web-App-URL kommt in src/lib/data.js → REPORTS_URL.
// Zeile ausblenden: in Spalte M „FALSE“ eintragen. Zeile löschen geht auch.

const SHEET = "Preise";
const MAX_DAYS = 60;
const CLASSES = { uber: ["std", "comfort", "xl", "premium", "taxi"], bolt: ["std", "comfort", "xl", "premium", "taxi"], freenow: ["taxi", "std"] };

function sheet_() {
  const ss = SpreadsheetApp.getActive();
  let s = ss.getSheetByName(SHEET);
  if (!s) {
    s = ss.insertSheet(SHEET);
    s.appendRow(["Zeit", "Dienst", "Klasse", "Preis €", "Von", "Nach", "km", "Start lat", "Start lng", "Ziel lat", "Ziel lng", "Sprache", "Anzeigen"]);
    s.setFrozenRows(1);
  }
  return s;
}

function out_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}

function text_(v) {
  const t = String(v || "").slice(0, 120);
  return /^[=+\-@]/.test(t) ? "'" + t : t;
}

function doGet() {
  const s = sheet_(), n = s.getLastRow();
  if (n < 2) return out_({ rows: [] });
  const lim = Date.now() - MAX_DAYS * 864e5;
  const rows = s.getRange(2, 1, n - 1, 13).getValues()
    .filter((r) => r[0] instanceof Date && r[0].getTime() > lim && r[12] !== false && String(r[12]).toUpperCase() !== "FALSE")
    .slice(-3000)
    .map((r) => [r[0].getTime(), r[1], r[2], Number(r[3]), Number(r[7]), Number(r[8]), Number(r[9]), Number(r[10])]);
  return out_({ rows: rows });
}

function doPost(e) {
  try {
    const d = JSON.parse(e.postData.contents);
    const price = Number(d.price), a = d.a || [], b = d.b || [];
    const ok = (x, lo, hi) => typeof x === "number" && isFinite(x) && x >= lo && x <= hi;
    if (!CLASSES[d.svc] || CLASSES[d.svc].indexOf(d.cls) < 0) return out_({ ok: false });
    if (!ok(price, 3, 2000) || !ok(a[0], 34, 72) || !ok(a[1], -25, 45) || !ok(b[0], 34, 72) || !ok(b[1], -25, 45)) return out_({ ok: false });
    let ts = Number(d.ts);
    if (!(ts > Date.now() - 3 * 864e5 && ts < Date.now() + 6e5)) ts = Date.now();
    const lock = LockService.getScriptLock();
    lock.waitLock(5000);
    try {
      const s = sheet_();
      if (s.getLastRow() > 50000) return out_({ ok: false });
      s.appendRow([new Date(ts), d.svc, d.cls, Math.round(price * 100) / 100, text_(d.an), text_(d.bn), Number(d.km) || "", a[0], a[1], b[0], b[1], text_(d.lang).slice(0, 2), true]);
    } finally { lock.releaseLock(); }
    return out_({ ok: true });
  } catch (err) {
    return out_({ ok: false });
  }
}
