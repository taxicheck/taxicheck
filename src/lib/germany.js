// Города Германии: что в них работает. Источники: Bolt (список городов, 11.2026),
// Uber (Uber Reserve 04.2023 + Hamburg), Nomada (FREE NOW, 10.2026),
// фиксированная цена такси при заказе: München (IsarFunk/taxi.eu), Frankfurt (IHK), Berlin (Taxi Berlin), Hamburg (Uber).
// true = подтверждено, null = не проверено (смотрите в приложении). Проверять перед публикацией.

const BOLT = ["Aachen","Augsburg","Bayreuth","Berlin","Bernburg","Bielefeld","Bochum","Bonn","Bottrop","Braunschweig","Bremen","Brühl","Celle","Köln","Darmstadt","Dortmund","Duisburg","Düsseldorf","Erfurt","Erlangen","Essen","Frankfurt am Main","Fürth","Gelsenkirchen","Gifhorn","Göttingen","Halle","Hamburg","Hannover","Heidelberg","Herford","Hilden","Hildesheim","Karlsruhe","Kassel","Kiel","Laatzen","Leipzig","Lübeck","Ludwigshafen","Mainz","Mannheim","Merseburg","Mönchengladbach","Mühlheim am Main","München","Münster","Neuss","Nürnberg","Oldenburg","Paderborn","Peine","Potsdam","Reutlingen","Salzgitter","Schwabach","Solingen","Staßfurt","Stein","Stuttgart","Tübingen","Wiesbaden","Wolfsburg","Wuppertal"];
const UBER = ["Berlin","Düsseldorf","Frankfurt am Main","Hamburg","Hannover","Köln","Leverkusen","München","Neuss","Stuttgart"];
const FREENOW = ["Berlin","Düsseldorf","Frankfurt am Main","Hamburg","Köln","München"];
const TAXIFIX = ["Berlin","Frankfurt am Main","Hamburg","München"];
// Город с полным калькулятором и ценами
export const FULL = ["München"];
// Порядок следующих городов с калькулятором
export const NEXT = ["Frankfurt am Main","Berlin","Hamburg","Köln","Düsseldorf","Stuttgart"];

export const CITIES = [...new Set([...BOLT, ...UBER])].sort((a, b) => a.localeCompare(b, "de")).map((n) => ({
  n,
  taxi: true,
  uber: UBER.includes(n) ? true : null,
  bolt: BOLT.includes(n) ? true : null,
  freenow: FREENOW.includes(n) ? true : null,
  taxifix: TAXIFIX.includes(n) ? true : null,
  full: FULL.includes(n),
}));

export const GL = {
  ru: { title: "Германия: что работает в вашем городе", sub: (n) => `${n} городов. Полный калькулятор с ценами пока есть для Мюнхена, следующие: Франкфурт, Берлин, Гамбург, Кёльн, Дюссельдорф, Штутгарт.`, search: "Найти город", cols: ["Город", "Такси", "Такси, фикс-цена в приложении", "Uber", "Bolt", "FREE NOW"], yes: "есть", unk: "?", unkNote: "? — не проверено, смотрите в приложении", full: "калькулятор", empty: "Такого города в списке нет. Такси есть везде, приложения — проверьте сами." },
  de: { title: "Deutschland: was in Ihrer Stadt funktioniert", sub: (n) => `${n} Städte. Den vollen Rechner mit Preisen gibt es bisher für München, als Nächstes: Frankfurt, Berlin, Hamburg, Köln, Düsseldorf, Stuttgart.`, search: "Stadt suchen", cols: ["Stadt", "Taxi", "Taxi-Festpreis per App", "Uber", "Bolt", "FREE NOW"], yes: "ja", unk: "?", unkNote: "? — nicht geprüft, in der App nachsehen", full: "Rechner", empty: "Diese Stadt ist nicht in der Liste. Taxis gibt es überall, Apps bitte selbst prüfen." },
  en: { title: "Germany: what works in your city", sub: (n) => `${n} cities. The full calculator with prices covers Munich so far; next: Frankfurt, Berlin, Hamburg, Cologne, Düsseldorf, Stuttgart.`, search: "Find a city", cols: ["City", "Taxi", "Taxi fixed price via app", "Uber", "Bolt", "FREE NOW"], yes: "yes", unk: "?", unkNote: "? — not checked, look in the app", full: "calculator", empty: "That city isn't in the list. Taxis are everywhere; check the apps yourself." },
};
