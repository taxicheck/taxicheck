// Страница города: Мюнхен — полное наполнение; страны — та же структура с пометкой «скоро».
// Каждая цифра — с источником и датой. Цены и даты требуют проверки перед публикацией.
// Координаты точек — общеизвестные, для схемы и ссылок на карты (Google Maps / OpenStreetMap).

export const SLOGAN = { ru: "Знай цену до поездки", de: "Kenne den Preis vor der Fahrt", en: "Know the fare before you ride" };

// Порядок разделов страницы города (якоря одинаковые для Мюнхена и стран)
export const SECTIONS = ["prices", "band", "events", "sights", "food", "map", "stay", "transfer"];

export const SEC = {
  ru: {
    nav: { prices: "Цены", band: "Вилка цен", events: "События", sights: "Что посмотреть", food: "Где поесть", map: "Карта", stay: "Жильё", transfer: "Трансфер" },
    lead: "Такси, события, что посмотреть, где поесть и пешая карта центра — на одной странице.",
    pricesH: "Цены и как доехать", pricesSub: "Фиксированные цены такси по городскому тарифу. Полный расчёт и сравнение Uber, Bolt и трансферов — в калькуляторе.",
    openCalc: "Открыть калькулятор", checkPrice: "Вам назвали цену? Проверить",
    bandH: "Вилка цен: эконом, средне, премиум", bandSub: "Аэропорт → центр (Hauptbahnhof), 40 км. У каждой цифры источник и дата.",
    eco: "Эконом", mid: "Средне", prem: "Премиум", cityRide: "Такси по городу, 5 км", byMeter: "по счётчику, оценка по тарифу",
    src: "Источник", check: "проверить",
    eventsH: "Когда всё дороже", eventsSub: "В эти даты машин не хватает, цены в Uber и Bolt растут, трансферы и жильё раскупают. Бронируйте заранее.",
    tbc: "даты уточнить", advice: "Совет: в эти даты бронируйте трансфер и жильё заранее, а в аэропорту сразу идите к стоянке такси — фиксированная цена не растёт.",
    sightsH: "Что посмотреть", sightsSub: "Главные места. Такси — оценка от Hauptbahnhof по тарифу, без пробок и ожидания.",
    taxiFrom: "Такси от Hbf", transit: "Транспорт", site: "Цена входа — на сайте", maps: "Карта", onRoute: "на маршруте",
    foodH: "Где поесть", foodSub: "Известные места, никто не платил за упоминание. € — недорого, €€ — средне, €€€ — дорого (ориентир).",
    foodCats: { bav: "Баварская кухня", garden: "Пивные сады", quick: "Быстро и недорого", prem: "Премиум" },
    videosH: "Скоро: ролики TaxiCheck", videosTxt: "Пробуем блюда сами и показываем счёт.",
    mapH: "Карта центра: пеший маршрут", mapSub: "От вокзала до Английского сада: около 3,5 км, примерно час пешком без остановок.",
    mapNote: "Схема упрощена и нарисована нами. Ничего не загружается со сторонних серверов. Для навигации откройте точку в Google Maps или OpenStreetMap.",
    pdf: "Скачать PDF", print: "Распечатать", legendRoute: "Маршрут", legendFood: "Еда", legendSight: "Рядом",
    stayH: "Где остановиться", stayTxt: "Удобнее всего жить в старом городе или у Hauptbahnhof: главное рядом пешком, до аэропорта — S-Bahn или такси по фиксированной цене. На Октоберфест и большие выставки жильё дорожает и заканчивается — бронируйте за несколько месяцев.",
    staySoon: "Подборка жилья — скоро",
    transferH: "Трансфер заранее с проверенным водителем", transferTxt: "Заказ по фиксированной цене прямо на сайте. Пока не работает: условия проверяет юрист. Сейчас мы ничего не продаём и не принимаем оплату.",
    guarantees: ["Цена фиксируется при заказе, без счётчика", "Водитель опоздал — компенсация", "Водитель не приехал — полный возврат и запасной водитель"],
    planned: "Планируемые условия, могут измениться.",
    soon: "скоро", soonTxt: "Раздел появится позже.", ad: "Werbung",
    printTitle: "Мюнхен: пеший маршрут по центру", printFoot: "Точки со ссылками на Google Maps и OpenStreetMap: taxicheck.eu",
    stubH: "Скоро на этой странице", stub: "Для этой страны раздел появится позже. Пока смотрите цены из аэропорта и советы выше.",
    cityTeaser: "Мюнхен для туриста", cityTeaserTxt: "Вилка цен, события, когда всё дороже, что посмотреть, где поесть и пешая карта для печати.", open: "Открыть",
  },
  de: {
    nav: { prices: "Preise", band: "Preisspanne", events: "Termine", sights: "Sehenswert", food: "Essen", map: "Karte", stay: "Unterkunft", transfer: "Transfer" },
    lead: "Taxi, Termine, Sehenswertes, Essen und ein Stadtplan zu Fuß — auf einer Seite.",
    pricesH: "Preise und Anfahrt", pricesSub: "Festpreise im Taxi nach städtischem Tarif. Vollständige Rechnung und Vergleich mit Uber, Bolt und Transfers im Rechner.",
    openCalc: "Rechner öffnen", checkPrice: "Preis genannt? Prüfen",
    bandH: "Preisspanne: günstig, mittel, premium", bandSub: "Flughafen → Zentrum (Hauptbahnhof), 40 km. Jede Zahl mit Quelle und Datum.",
    eco: "Günstig", mid: "Mittel", prem: "Premium", cityRide: "Taxi in der Stadt, 5 km", byMeter: "Taxameter, Schätzung nach Tarif",
    src: "Quelle", check: "prüfen",
    eventsH: "Wann alles teurer ist", eventsSub: "An diesen Tagen fehlen Autos, Uber und Bolt werden teurer, Transfers und Hotels sind schnell weg. Früh buchen.",
    tbc: "Termin prüfen", advice: "Tipp: An diesen Tagen Transfer und Unterkunft früh buchen und am Flughafen direkt zum Taxistand gehen — der Festpreis steigt nicht.",
    sightsH: "Sehenswert", sightsSub: "Die wichtigsten Orte. Taxi: Schätzung ab Hauptbahnhof nach Tarif, ohne Stau und Wartezeit.",
    taxiFrom: "Taxi ab Hbf", transit: "ÖPNV", site: "Eintritt auf der Website", maps: "Karte", onRoute: "auf der Route",
    foodH: "Essen", foodSub: "Bekannte Lokale, niemand hat für die Nennung bezahlt. € günstig, €€ mittel, €€€ teuer (Richtwert).",
    foodCats: { bav: "Bayerische Küche", garden: "Biergärten", quick: "Schnell und günstig", prem: "Premium" },
    videosH: "Bald: TaxiCheck-Videos", videosTxt: "Wir probieren die Gerichte selbst und zeigen die Rechnung.",
    mapH: "Altstadtplan: Spaziergang", mapSub: "Vom Hauptbahnhof bis zum Englischen Garten: etwa 3,5 km, rund eine Stunde zu Fuß ohne Pausen.",
    mapNote: "Vereinfachte, selbst gezeichnete Skizze. Es wird nichts von fremden Servern geladen. Zum Navigieren den Punkt in Google Maps oder OpenStreetMap öffnen.",
    pdf: "PDF herunterladen", print: "Drucken", legendRoute: "Route", legendFood: "Essen", legendSight: "In der Nähe",
    stayH: "Unterkunft", stayTxt: "Am praktischsten wohnt man in der Altstadt oder am Hauptbahnhof: das Wichtigste zu Fuß, zum Flughafen mit der S-Bahn oder im Taxi zum Festpreis. Zur Wiesn und zu großen Messen werden Zimmer teuer und knapp — Monate vorher buchen.",
    staySoon: "Unterkunft-Auswahl — bald",
    transferH: "Transfer im Voraus mit geprüftem Fahrer", transferTxt: "Buchung zum Festpreis direkt auf der Website. Noch nicht aktiv: Die Bedingungen prüft ein Anwalt. Wir verkaufen derzeit nichts und nehmen kein Geld an.",
    guarantees: ["Preis wird bei der Buchung fest, kein Taxameter", "Fahrer zu spät — Entschädigung", "Fahrer nicht gekommen — volle Erstattung und Ersatzfahrer"],
    planned: "Geplante Bedingungen, Änderungen möglich.",
    soon: "bald", soonTxt: "Dieser Abschnitt folgt.", ad: "Werbung",
    printTitle: "München: Spaziergang durch die Altstadt", printFoot: "Punkte mit Links zu Google Maps und OpenStreetMap: taxicheck.eu",
    stubH: "Bald auf dieser Seite", stub: "Für dieses Land folgt der Abschnitt später. Bis dahin: Preise ab Flughafen und Tipps oben.",
    cityTeaser: "München für Reisende", cityTeaserTxt: "Preisspanne, Termine, an denen alles teurer ist, Sehenswertes, Essen und ein Stadtplan zum Ausdrucken.", open: "Öffnen",
  },
  en: {
    nav: { prices: "Fares", band: "Price range", events: "Events", sights: "Sights", food: "Food", map: "Map", stay: "Stay", transfer: "Transfer" },
    lead: "Taxis, events, sights, food and a walking map of the centre — on one page.",
    pricesH: "Fares and getting there", pricesSub: "Fixed taxi prices under the city tariff. Full breakdown and comparison with Uber, Bolt and transfers in the calculator.",
    openCalc: "Open the calculator", checkPrice: "Quoted a price? Check it",
    bandH: "Price range: budget, mid, premium", bandSub: "Airport → centre (Hauptbahnhof), 40 km. Every figure has a source and date.",
    eco: "Budget", mid: "Mid", prem: "Premium", cityRide: "Taxi in town, 5 km", byMeter: "metered, estimate from the tariff",
    src: "Source", check: "to verify",
    eventsH: "When everything costs more", eventsSub: "On these dates cars run short, Uber and Bolt prices rise, transfers and hotels sell out. Book ahead.",
    tbc: "dates to confirm", advice: "Tip: on these dates book your transfer and room early, and at the airport go straight to the taxi rank — the fixed price doesn't rise.",
    sightsH: "Sights", sightsSub: "The main places. Taxi: estimate from Hauptbahnhof by tariff, no traffic or waiting.",
    taxiFrom: "Taxi from Hbf", transit: "Public transport", site: "Admission on the website", maps: "Map", onRoute: "on the route",
    foodH: "Food", foodSub: "Well-known places, nobody paid to be listed. € cheap, €€ mid, €€€ expensive (rough guide).",
    foodCats: { bav: "Bavarian food", garden: "Beer gardens", quick: "Quick and cheap", prem: "Premium" },
    videosH: "Coming soon: TaxiCheck videos", videosTxt: "We try the dishes ourselves and show the bill.",
    mapH: "Old town map: walking route", mapSub: "From the station to the English Garden: about 3.5 km, roughly an hour on foot without stops.",
    mapNote: "Simplified sketch drawn by us. Nothing loads from third-party servers. To navigate, open a point in Google Maps or OpenStreetMap.",
    pdf: "Download PDF", print: "Print", legendRoute: "Route", legendFood: "Food", legendSight: "Nearby",
    stayH: "Where to stay", stayTxt: "The old town or the area around Hauptbahnhof is most practical: the main sights are walkable, and the airport is an S-Bahn ride or a fixed-price taxi away. During Oktoberfest and big trade fairs rooms get expensive and scarce — book months ahead.",
    staySoon: "Hand-picked stays — coming soon",
    transferH: "Pre-booked transfer with a vetted driver", transferTxt: "Fixed-price booking right on the site. Not live yet: a lawyer is reviewing the terms. We currently sell nothing and take no payments.",
    guarantees: ["Price fixed at booking, no meter", "Driver late — compensation", "Driver didn't show — full refund and a backup driver"],
    planned: "Planned terms, subject to change.",
    soon: "soon", soonTxt: "This section is coming.", ad: "Werbung",
    printTitle: "Munich: old town walking route", printFoot: "Points with Google Maps and OpenStreetMap links: taxicheck.eu",
    stubH: "Coming to this page", stub: "This section is coming later for this country. Meanwhile see airport fares and tips above.",
    cityTeaser: "Munich for visitors", cityTeaserTxt: "Price range, dates when everything costs more, sights, food and a printable walking map.", open: "Open",
  },
};

const T = (ru, de, en) => ({ ru, de, en });

// Мюнхен
export const MUNICH = {
  slug: "munich",
  name: T("Мюнхен", "München", "Munich"),
  // Вилка цен: аэропорт → Hbf. Только данные, которые уже есть на сайте (data.js / SOURCES), с датой.
  band: {
    eco: [
      [T("S-Bahn S1 / S8", "S-Bahn S1 / S8", "S-Bahn S1 / S8"), "≈ 11,60 €", "MVV", "https://www.mvv-muenchen.de/", "check"],
      [T("World Transfer", "World Transfer", "World Transfer"), "66–72 €", "World Transfer", "https://world-transfer.com/en/airporttransfer-munich.html", "11.2026"],
      [T("Uber X, в среднем", "Uber X, im Schnitt", "Uber X, average"), "≈ 70 €", "Uber", "https://www.uber.com/global/en/r/airports/muc/pickup/", "11.2026"],
    ],
    mid: [
      [T("Welcome Pickups, день / ночь", "Welcome Pickups, Tag / Nacht", "Welcome Pickups, day / night"), "72 / 79 €", "Welcome Pickups", "https://www.welcomepickups.com/munich/airport-taxi/", "11.2026"],
      [T("Uber Comfort, в среднем", "Uber Comfort, im Schnitt", "Uber Comfort, average"), "≈ 73 €", "Uber", "https://www.uber.com/global/en/r/airports/muc/pickup/", "11.2026"],
      [T("Такси, фиксированная цена", "Taxi, Festpreis", "Taxi, fixed price"), "96 €", T("Тариф такси Мюнхена", "Taxitarif München", "Munich taxi tariff"), "", "01.07.2026"],
    ],
    prem: [
      [T("Uber Taxi, в среднем", "Uber Taxi, im Schnitt", "Uber Taxi, average"), "≈ 107 €", "Uber", "https://www.uber.com/global/en/r/airports/muc/pickup/", "11.2026"],
      [T("Blacklane, бизнес-класс", "Blacklane, Business Class", "Blacklane, business class"), T("по запросу", "auf Anfrage", "on request"), "Blacklane", "https://www.blacklane.com/en/airport-transfer-munich", "11.2026"],
    ],
  },
  events: [
    { m: T("ноя–дек", "Nov–Dez", "Nov–Dec"), name: T("Рождественский рынок на Мариенплац", "Christkindlmarkt am Marienplatz", "Christmas market at Marienplatz"), dates: T("20.11 – 24.12.2026", "20.11. – 24.12.2026", "20 Nov – 24 Dec 2026"), note: T("Центр переполнен по вечерам и в выходные. 22.11 закрыт.", "Abends und am Wochenende ist die Altstadt voll. Am 22.11. geschlossen.", "The centre is packed in the evenings and at weekends. Closed on 22 Nov."), src: "https://www.muenchen.de/int/en/events/christmas-market.html", srcN: "muenchen.de" },
    { m: T("янв", "Jan", "Jan"), name: T("BAU — выставка строительства", "BAU — Weltleitmesse für Bauen", "BAU — construction trade fair"), dates: T("11–15.01.2027", "11.–15.01.2027", "11–15 Jan 2027"), note: T("Messe Riem: утром очереди к выставке, гостиницы дорогие.", "Messe Riem: morgens Andrang, Hotels teuer.", "Messe Riem: morning rush, hotels expensive."), src: "https://bau-muenchen.com/en/trade-fair/plan-your-visit/opening-hours", srcN: "bau-muenchen.com" },
    { m: T("апр", "Apr", "Apr"), name: T("transport logistic", "transport logistic", "transport logistic"), dates: T("апрель 2027", "April 2027", "April 2027"), tbc: 1, note: T("Крупная выставка логистики на Messe München.", "Große Logistikmesse auf der Messe München.", "Major logistics fair at Messe München."), src: "https://www.eventseye.com/messen/f-transport-logistic-2746-2.html", srcN: "eventseye.com" },
    { m: T("сен", "Sep", "Sep"), name: T("IAA Mobility", "IAA Mobility", "IAA Mobility"), dates: T("7–12.09.2027", "7.–12.09.2027", "7–12 Sep 2027"), note: T("Автосалон: выставка на Messe и открытые площадки в центре.", "Automesse: Messe und Open Space in der Innenstadt.", "Motor show: trade fair plus open-air venues in the centre."), src: "https://www.iaa-mobility.com/iaa-mobility/en/faq", srcN: "iaa-mobility.com" },
    { m: T("сен–окт", "Sep–Okt", "Sep–Oct"), name: T("Октоберфест", "Oktoberfest", "Oktoberfest"), dates: T("18.09 – 3.10.2027", "18.09. – 3.10.2027", "18 Sep – 3 Oct 2027"), note: T("Самые дорогие две недели года. Вечером у Theresienwiese очереди за машиной.", "Die teuersten zwei Wochen im Jahr. Abends lange Schlangen an der Theresienwiese.", "The priciest fortnight of the year. Long queues for cars at Theresienwiese in the evening."), src: "https://www.muenchen.de/veranstaltungen/oktoberfest/willkommen.html", srcN: "muenchen.de" },
    { m: T("2028", "2028", "2028"), name: T("bauma — выставка строительной техники", "bauma — Baumaschinenmesse", "bauma — construction machinery fair"), dates: T("раз в три года, следующая в 2028", "alle drei Jahre, nächste 2028", "every three years, next in 2028"), tbc: 1, note: T("Одна из крупнейших выставок мира: город переполнен.", "Eine der größten Messen der Welt: die Stadt ist voll.", "One of the world's largest fairs: the city fills up."), src: "", srcN: "" },
  ],
  // km — примерное расстояние по дороге от Hauptbahnhof (оценка). p — номер на карте.
  sights: [
    { p: 4, name: T("Мариенплац и Новая ратуша", "Marienplatz und Neues Rathaus", "Marienplatz and New Town Hall"), line: T("Главная площадь; куранты Глокеншпиль на ратуше.", "Der zentrale Platz; Glockenspiel am Rathausturm.", "The main square; the Glockenspiel on the town hall tower."), km: 1.6, tr: T("S-Bahn до Marienplatz, 2 остановки", "S-Bahn bis Marienplatz, 2 Stationen", "S-Bahn to Marienplatz, 2 stops"), ll: [48.1374, 11.5755] },
    { p: 3, name: T("Фрауэнкирхе", "Frauenkirche", "Frauenkirche"), line: T("Собор с двумя башнями-луковицами — символ города.", "Dom mit den zwei Zwiebeltürmen — Wahrzeichen der Stadt.", "Cathedral with two onion-domed towers — the city's landmark."), km: 1.4, tr: T("S-Bahn до Marienplatz или Karlsplatz", "S-Bahn bis Marienplatz oder Karlsplatz", "S-Bahn to Marienplatz or Karlsplatz"), ll: [48.1386, 11.5736] },
    { p: 5, name: T("Виктуалиенмаркт", "Viktualienmarkt", "Viktualienmarkt"), line: T("Рынок под открытым небом с пивным садом.", "Markt unter freiem Himmel mit Biergarten.", "Open-air food market with a beer garden."), km: 2, tr: T("S-Bahn до Marienplatz, 3 мин пешком", "S-Bahn bis Marienplatz, 3 Min. zu Fuß", "S-Bahn to Marienplatz, 3 min walk"), ll: [48.1351, 11.5763] },
    { p: 7, name: T("Резиденция", "Residenz", "Residenz"), line: T("Дворец баварских королей, музей и сокровищница.", "Stadtschloss der bayerischen Könige, Museum und Schatzkammer.", "Palace of the Bavarian kings, museum and treasury."), km: 2, tr: T("U4 / U5 до Odeonsplatz", "U4 / U5 bis Odeonsplatz", "U4 / U5 to Odeonsplatz"), url: "https://www.residenz-muenchen.de/", ll: [48.1410, 11.5788] },
    { p: 10, name: T("Английский сад", "Englischer Garten", "English Garden"), line: T("Огромный парк; серферы на Айсбахе, Китайская башня.", "Riesiger Park; Surfer am Eisbach, Chinesischer Turm.", "Huge park; surfers on the Eisbach, Chinese Tower."), km: 3, tr: T("U3 / U6 до Universität или пешком от Одеонсплац", "U3 / U6 bis Universität oder zu Fuß ab Odeonsplatz", "U3 / U6 to Universität or walk from Odeonsplatz"), ll: [48.1435, 11.5877] },
    { p: 11, name: T("Пинакотеки", "Pinakotheken", "Pinakotheken"), line: T("Три художественных музея рядом: от старых мастеров до современности.", "Drei Kunstmuseen nebeneinander: Alte Meister bis Moderne.", "Three art museums side by side: old masters to modern."), km: 1.8, tr: T("Автобус 100 или трамвай 27", "Bus 100 oder Tram 27", "Bus 100 or tram 27"), url: "https://www.pinakothek.de/", ll: [48.1482, 11.5700] },
    { name: T("Немецкий музей", "Deutsches Museum", "Deutsches Museum"), line: T("Один из крупнейших музеев техники в мире, на острове на Изаре.", "Eines der größten Technikmuseen der Welt, auf der Isarinsel.", "One of the world's largest science and technology museums, on an Isar island."), km: 3, tr: T("S-Bahn до Isartor, 10 мин пешком", "S-Bahn bis Isartor, 10 Min. zu Fuß", "S-Bahn to Isartor, 10 min walk"), url: "https://www.deutsches-museum.de/", ll: [48.1299, 11.5834] },
    { name: T("Олимпийский парк", "Olympiapark", "Olympic Park"), line: T("Парк Олимпиады-1972, телебашня с видом на город.", "Park der Spiele 1972, Fernsehturm mit Stadtblick.", "The 1972 Olympic park, TV tower with city views."), km: 5, tr: T("U3 до Olympiazentrum", "U3 bis Olympiazentrum", "U3 to Olympiazentrum"), url: "https://www.olympiapark.de/", ll: [48.1731, 11.5466] },
    { name: T("BMW Welt и музей BMW", "BMW Welt und BMW Museum", "BMW Welt and BMW Museum"), line: T("Выставочный центр и музей марки рядом с Олимпийским парком.", "Markenwelt und Museum neben dem Olympiapark.", "Brand centre and museum next to the Olympic Park."), km: 6, tr: T("U3 до Olympiazentrum", "U3 bis Olympiazentrum", "U3 to Olympiazentrum"), url: "https://www.bmw-welt.com/", ll: [48.1771, 11.5562] },
    { name: T("Дворец Нимфенбург", "Schloss Nymphenburg", "Nymphenburg Palace"), line: T("Летняя резиденция с большим парком и каналом.", "Sommerschloss mit großem Park und Kanal.", "Summer palace with a large park and canal."), km: 5, tr: T("Трамвай 17 до Schloss Nymphenburg", "Tram 17 bis Schloss Nymphenburg", "Tram 17 to Schloss Nymphenburg"), url: "https://www.schloss-nymphenburg.de/", ll: [48.1583, 11.5033] },
    { name: T("Мемориал Дахау", "KZ-Gedenkstätte Dachau", "Dachau Concentration Camp Memorial"), line: T("Мемориал на месте первого концлагеря; на визит нужно полдня.", "Gedenkstätte am Ort des ersten Konzentrationslagers; einen halben Tag einplanen.", "Memorial at the site of the first concentration camp; allow half a day."), km: 20, tr: T("S2 до Dachau, затем автобус 726", "S2 bis Dachau, dann Bus 726", "S2 to Dachau, then bus 726"), url: "https://www.kz-gedenkstaette-dachau.de/", ll: [48.2700, 11.4682] },
  ],
  food: {
    bav: [
      { p: 6, name: "Hofbräuhaus", lvl: "€€", line: T("Самая известная пивная мира: шумно, музыка, туристы.", "Das berühmteste Bierhaus der Welt: laut, Blasmusik, viele Gäste.", "The world's most famous beer hall: loud, brass band, crowds."), ll: [48.1376, 11.5799] },
      { k: "A", name: "Schneider Bräuhaus", lvl: "€€", line: T("Классика баварской кухни и пшеничного пива на улице Tal.", "Bayerische Klassiker und Weißbier im Tal.", "Bavarian classics and wheat beer on Tal street."), ll: [48.1363, 11.5790] },
    ],
    garden: [
      { k: "B", name: "Augustiner-Keller", lvl: "€€", line: T("Большой пивной сад под каштанами, 10 минут от вокзала.", "Großer Biergarten unter Kastanien, 10 Minuten vom Hauptbahnhof.", "Large beer garden under chestnut trees, 10 minutes from the station."), ll: [48.1437, 11.5528] },
      { name: T("Китайская башня", "Chinesischer Turm", "Chinese Tower"), lvl: "€€", line: T("Пивной сад в Английском саду.", "Biergarten im Englischen Garten.", "Beer garden in the English Garden."), ll: [48.1527, 11.5921] },
    ],
    quick: [
      { p: 5, name: "Viktualienmarkt", lvl: "€", line: T("Прилавки с колбасками, супами и выпечкой; можно перекусить стоя.", "Stände mit Würsten, Suppen und Gebäck; Essen im Stehen.", "Stalls with sausages, soups and pastries; eat standing up."), ll: [48.1351, 11.5763] },
      { k: "C", name: "Café Frischhut", lvl: "€", line: T("Шмальцнудель — жареная выпечка, утром очередь.", "Schmalznudeln, morgens Schlange.", "Schmalznudel doughnuts, a queue in the morning."), ll: [48.1349, 11.5745] },
    ],
    prem: [
      { k: "D", name: "Dallmayr", lvl: "€€€", line: T("Исторический деликатесный дом с ресторанами у Мариенплац.", "Traditionsreiches Delikatessenhaus mit Restaurants am Marienplatz.", "Historic delicatessen with restaurants near Marienplatz."), ll: [48.1388, 11.5770] },
      { name: "Tantris", lvl: "€€€", line: T("Легендарный ресторан высокой кухни в Швабинге; бронь заранее.", "Legendäres Gourmetrestaurant in Schwabing; früh reservieren.", "Legendary fine-dining restaurant in Schwabing; book well ahead."), ll: [48.1681, 11.5878] },
    ],
  },
  // Пеший маршрут: точки по порядку (номера на карте)
  route: [
    { p: 1, name: "Hauptbahnhof", ll: [48.1402, 11.5600] },
    { p: 2, name: "Karlsplatz (Stachus)", ll: [48.1390, 11.5655] },
    { p: 3, name: "Frauenkirche", ll: [48.1386, 11.5736] },
    { p: 4, name: "Marienplatz", ll: [48.1374, 11.5755] },
    { p: 5, name: "Viktualienmarkt", ll: [48.1351, 11.5763] },
    { p: 6, name: "Hofbräuhaus", ll: [48.1376, 11.5799] },
    { p: 7, name: "Residenz", ll: [48.1410, 11.5788] },
    { p: 8, name: "Odeonsplatz · Feldherrnhalle", ll: [48.1423, 11.5774] },
    { p: 9, name: "Hofgarten", ll: [48.1428, 11.5803] },
    { p: 10, name: "Eisbach · Englischer Garten", ll: [48.1435, 11.5877] },
  ],
  extra: [{ p: 11, name: "Pinakotheken", ll: [48.1482, 11.5700] }],
};

export const gmaps = (ll) => `https://www.google.com/maps/search/?api=1&query=${ll[0]},${ll[1]}`;
export const osm = (ll) => `https://www.openstreetmap.org/?mlat=${ll[0]}&mlon=${ll[1]}#map=17/${ll[0]}/${ll[1]}`;
export const tr = (v, lang) => (typeof v === "string" ? v : v[lang]);
