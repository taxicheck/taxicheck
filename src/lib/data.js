// Все данные сайта в одном месте. Цены и тарифы меняются здесь.
// Каждая цифра — с датой и источником. Всё требует проверки перед публикацией.

export const LANGS = ["ru", "de", "en"];

export const TARIFF = {
  city: "München",
  base: 5.9,
  tiers: [[7, 2.7], [Infinity, 2.5]],
  perMin: 39 / 60,
  date: "01.07.2026",
};

export const PLACES = {
  air: { lat: 48.3538, lng: 11.7861, n: "Flughafen München" },
  hbf: { lat: 48.1402, lng: 11.56, n: "München Hauptbahnhof" },
  messe: { lat: 48.1363, lng: 11.699, n: "Messe München" },
};

export const ROUTES = [
  { id: "air-hbf", big: 1, from: "air", to: "hbf", km: 40, fix: 96,
    uber: { x: 70, comfort: 73, taxi: 107 }, welcome: { day: 72, night: 79 }, wt: "66–72 €",
    name: { ru: "Я в аэропорту → в центр", de: "Ich bin am Flughafen → ins Zentrum", en: "I'm at the airport → city centre" },
    sub: { ru: "до Hauptbahnhof · 40 км", de: "bis Hauptbahnhof · 40 km", en: "to Hauptbahnhof · 40 km" } },
  { id: "air-messe", from: "air", to: "messe", km: 37, fix: 90,
    name: { ru: "Аэропорт → Messe", de: "Flughafen → Messe", en: "Airport → Messe" },
    sub: { ru: "выставки · 37 км", de: "Messe · 37 km", en: "trade fair · 37 km" } },
  { id: "hbf-air", from: "hbf", to: "air", km: 40, fix: 96,
    name: { ru: "Вокзал → Аэропорт", de: "Hbf → Flughafen", en: "Station → Airport" },
    sub: { ru: "40 км", de: "40 km", en: "40 km" } },
  { id: "hbf-messe", from: "hbf", to: "messe", km: 13, fix: 41,
    name: { ru: "Вокзал → Messe", de: "Hbf → Messe", en: "Station → Messe" },
    sub: { ru: "13 км", de: "13 km", en: "13 km" } },
  { id: "own", from: null, to: null,
    name: { ru: "Свой адрес", de: "Eigene Adresse", en: "Own address" },
    sub: { ru: "по счётчику", de: "nach Taxameter", en: "by meter" } },
];

// Номера диспетчерских — проверить перед публикацией
export const PHONES = [["Taxi-München eG", "089 21610"], ["IsarFunk", "089 450540"]];

export const COMPANIES = ["Taxi München", "Uber", "Bolt", "FREE NOW", "Welcome Pickups", "World Transfer", "Kiwitaxi", "Daytrip", "Blacklane"];

// Ссылки. Партнёрские ссылки вставляются сюда после одобрения в сетях.
export const LINKS = {
  freenow: "https://www.free-now.com/de/",
  welcome: "https://www.welcomepickups.com/munich/airport-taxi/",
  wt: "https://world-transfer.com/en/airporttransfer-munich.html",
  kiwitaxi: "https://kiwitaxi.com/",
  daytrip: "https://daytrip.com/",
  blacklane: "https://www.blacklane.com/en/airport-transfer-munich",
};

export const SOURCES = [
  ["Uber: Munich Airport pickup (Durchschnittspreise, 1 Monat)", "https://www.uber.com/global/en/r/airports/muc/pickup/", "11.2026"],
  ["Welcome Pickups: Munich Airport taxi", "https://www.welcomepickups.com/?p=19740", "11.2026"],
  ["World Transfer: Airport Transfer Munich", "https://world-transfer.com/en/airporttransfer-munich.html", "11.2026"],
  ["Blacklane: Munich airport transfer", "https://www.blacklane.com/en/airport-transfer-munich", "11.2026"],
  ["Uber Reserve in Deutschland (bis 90 Tage in München)", "https://www.uber.com/de/newsroom/uber-reserve-deutschland/", "04.2023"],
  ["Bolt: Fahrten bis 90 Tage im Voraus", "https://bolt.eu/en-de/rides/", "11.2026"],
  ["Bento: FREE NOW Vorbestellung", "https://www.bento.travel/compare/germany/freenow-de-vs-bolt-de", "08.2026"],
  ["Kiwitaxi: Mindestvorlauf", "https://kiwitaxi.com/en/help", "11.2026"],
  ["Daytrip: Buchung unter 36 Stunden", "https://daytrip.ladesk.com/279269-Can-I-book-a-trip-24-hours-or-less-prior", "11.2026"],
  ["Blacklane: Vorlauf ab 60 Minuten", "https://help.blacklane.com/en/articles/2687015-how-far-in-advance-can-i-book-a-ride", "11.2026"],
  ["Nomada: Uber, Bolt, FREE NOW in Deutschland", "https://nomada.tools/directory/ride-hailing/germany", "10.2026"],
  ["Taxitarif München (Landeshauptstadt München) — amtlichen Link ergänzen", "", "01.07.2026"],
];
