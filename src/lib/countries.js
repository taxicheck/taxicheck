// Советы туристам по странам. Сравнения и заказа здесь пока нет — только ориентиры.
// Каждая цифра с источником и датой. Всё требует проверки перед публикацией.
// Типы вариантов: taxi (такси), app (приложение), transit (транспорт), transfer, voucher.

export const COUNTRIES = [
  {
    slug: "latvia", flag: "🇱🇻", name: { ru: "Латвия", de: "Lettland", en: "Latvia" }, hub: "Rīga · RIX",
    apps: { ru: "Bolt — главный сервис. Также Smile Taxi (с июня 2026). Uber в Латвии нет.", de: "Bolt ist der wichtigste Dienst. Außerdem Smile Taxi (seit Juni 2026). Uber gibt es in Lettland nicht.", en: "Bolt is the main service. Also Smile Taxi (since June 2026). Uber does not operate in Latvia." },
    route: { ru: "Аэропорт → Старый город, 11 км", de: "Flughafen → Altstadt, 11 km", en: "Airport → Old Town, 11 km" },
    options: [
      ["app", "Bolt", "10–15 €"],
      ["app", "Smile Taxi", { ru: "цена в приложении", de: "Preis in der App", en: "price in the app" }],
      ["taxi", "XTaxi, TaksiLV, Red Cab", "15–25 €"],
      ["voucher", { ru: "Ваучер аэропорта в центр", de: "Flughafen-Gutschein ins Zentrum", en: "Airport voucher to the centre" }, "33,50 €"],
      ["transit", { ru: "Автобус 22", de: "Bus 22", en: "Bus 22" }, "1,50–1,81 €"],
    ],
    tips: {
      ru: ["У выхода не разговаривайте с теми, кто сам предлагает такси. Идите в официальную очередь или к Bolt.", "Машины Bolt ждут на парковке P1. В залах прилёта C и E стоят киоски Bolt — можно заказать без приложения.", "Тариф такси обязан висеть на правой задней двери. Счётчик и чек обязательны.", "Если переплатили: запишите номер машины, возьмите чек, жалоба — в PTAC, полиция — 110."],
      de: ["Am Ausgang nicht mit Leuten sprechen, die von sich aus ein Taxi anbieten. Zur offiziellen Reihe oder zu Bolt gehen.", "Bolt-Autos warten auf Parkplatz P1. In den Ankunftshallen C und E gibt es Bolt-Kioske ohne App.", "Der Taxitarif muss an der rechten hinteren Tür stehen. Taxameter und Beleg sind Pflicht.", "Zu viel bezahlt: Kennzeichen notieren, Beleg verlangen, Beschwerde bei PTAC, Polizei 110."],
      en: ["At the exit, ignore anyone offering you a taxi. Go to the official rank or to Bolt.", "Bolt cars wait in car park P1. Arrivals halls C and E have Bolt kiosks for booking without the app.", "The taxi tariff must be shown on the right rear door. Meter and receipt are mandatory.", "Overcharged? Note the plate, get a receipt, complain to PTAC; police: 110."],
    },
    src: [["Riga Airport: taxi", "https://www.riga-airport.com/en/taxi-service", "11.2026"], ["riga-trip.com", "https://www.riga-trip.com/guides/riga-scam-taxis-and-how-to-avoid-them/", "10.2026"], ["likumi.lv: taxi rules", "https://likumi.lv/ta/id/309083-noteikumi-par-pasazieru-komercparvadajumiem-ar-taksometru", "03.2023"]],
  },
  {
    slug: "lithuania", flag: "🇱🇹", name: { ru: "Литва", de: "Litauen", en: "Lithuania" }, hub: "Vilnius · VNO",
    apps: { ru: "Bolt — главный сервис в Литве.", de: "Bolt ist in Litauen der wichtigste Dienst.", en: "Bolt is the main service in Lithuania." },
    route: { ru: "Аэропорт → Старый город, 6 км", de: "Flughafen → Altstadt, 6 km", en: "Airport → Old Town, 6 km" },
    options: [
      ["transit", { ru: "Поезд до вокзала, 8 мин", de: "Zug zum Bahnhof, 8 Min.", en: "Train to the station, 8 min" }, "0,90 €"],
      ["transit", { ru: "Автобус 1 или 2", de: "Bus 1 oder 2", en: "Bus 1 or 2" }, "1,00–1,25 €"],
      ["app", "Bolt", "6–9 €"],
      ["taxi", { ru: "Такси со стоянки", de: "Taxi vom Stand", en: "Taxi from the rank" }, "15–25 €"],
    ],
    tips: {
      ru: ["Bolt дешевле такси со стоянки примерно вдвое. Идите в зону посадки Bolt, а не к стоянке такси.", "Поезд ходит примерно с 6:00 до 22:00. Поздно вечером — Bolt или заранее заказанный трансфер.", "Цену «на словах» у стоянки не принимайте: требуйте счётчик.", "В пятницу и субботу вечером, на событиях и в дождь Bolt дорожает до 12–15 €."],
      de: ["Bolt ist etwa halb so teuer wie das Taxi vom Stand. Zur Bolt-Abholzone gehen, nicht zum Taxistand.", "Der Zug fährt etwa von 6:00 bis 22:00. Spät abends Bolt oder einen vorab gebuchten Transfer nehmen.", "Mündliche Pauschalpreise am Stand ablehnen: auf das Taxameter bestehen.", "Freitag- und Samstagabend, bei Events und Regen steigt Bolt auf 12–15 €."],
      en: ["Bolt costs roughly half the taxi-rank price. Walk to the Bolt pickup zone, not the taxi rank.", "Trains run roughly 6:00 to 22:00. Late at night use Bolt or a pre-booked transfer.", "Don't accept a spoken flat price at the rank: insist on the meter.", "On Friday and Saturday nights, at events and in rain Bolt rises to 12–15 €."],
    },
    src: [["vilnius-escape.com: airport to centre", "https://www.vilnius-escape.com/guides/vilnius-airport-to-city-centre/", "10.2026"]],
  },
  {
    slug: "estonia", flag: "🇪🇪", name: { ru: "Эстония", de: "Estland", en: "Estonia" }, hub: "Tallinn · TLL",
    apps: { ru: "Bolt — эстонская компания и главный сервис в стране.", de: "Bolt ist ein estnisches Unternehmen und der wichtigste Dienst im Land.", en: "Bolt is an Estonian company and the main service in the country." },
    route: { ru: "Аэропорт → Старый город, 4 км", de: "Flughafen → Altstadt, 4 km", en: "Airport → Old Town, 4 km" },
    options: [
      ["transit", { ru: "Трамвай 4, 15–20 мин", de: "Tram 4, 15–20 Min.", en: "Tram 4, 15–20 min" }, "2 €"],
      ["app", "Bolt", "5–8 €"],
      ["taxi", { ru: "Такси по счётчику со стоянки", de: "Taxi mit Taxameter vom Stand", en: "Metered taxi from the rank" }, "12–18 €"],
    ],
    tips: {
      ru: ["В зале прилёта могут подойти водители без счётчика и попросить 20–30 € за 4 км. Идите к стоянке или в Bolt.", "Трамвай 4 — самый дешёвый вариант, оплата бесконтактной картой. Ночью не ходит.", "В Bolt сверьте имя водителя, модель и номер машины до посадки."],
      de: ["In der Ankunftshalle sprechen manchmal Fahrer ohne Taxameter an und verlangen 20–30 € für 4 km. Zum Taxistand oder zu Bolt gehen.", "Tram 4 ist am günstigsten, Zahlung kontaktlos per Karte. Nachts fährt sie nicht.", "Bei Bolt vor dem Einsteigen Fahrername, Modell und Kennzeichen prüfen."],
      en: ["Drivers without a meter may approach you in arrivals and ask 20–30 € for 4 km. Go to the rank or use Bolt.", "Tram 4 is the cheapest option, pay contactless. It doesn't run at night.", "With Bolt, check the driver's name, car model and plate before getting in."],
    },
    src: [["tallinn-trip.com: airport to centre", "https://www.tallinn-trip.com/guides/tallinn-airport-to-city-centre/", "2026"], ["riga-trip.com: Bolt in the Baltics", "https://www.riga-trip.com/blog/the-2026-guide-to-using-bolt-in-the-baltics/", "02.2026"]],
  },
  {
    slug: "turkey", flag: "🇹🇷", name: { ru: "Турция", de: "Türkei", en: "Turkey" }, hub: "İstanbul · IST / Antalya · AYT",
    apps: { ru: "BiTaksi — турецкое приложение, вызывает обычное лицензированное такси по счётчику без наценки. Uber в Стамбуле показывает цену заранее, но обычно на 20–30% дороже счётчика.", de: "BiTaksi ist eine türkische App und ruft ein normales lizenziertes Taxi mit Taxameter ohne Aufschlag. Uber zeigt in Istanbul den Preis vorab, ist aber meist 20–30 % teurer als das Taxameter.", en: "BiTaksi is a Turkish app that calls a regular licensed metered taxi at no markup. Uber in Istanbul shows the price upfront but is usually 20–30% above the meter." },
    route: { ru: "Стамбул: аэропорт IST → Таксим · Анталья: аэропорт → центр, 13 км", de: "Istanbul: Flughafen IST → Taksim · Antalya: Flughafen → Zentrum, 13 km", en: "Istanbul: IST airport → Taksim · Antalya: airport → centre, 13 km" },
    options: [
      ["transit", { ru: "Стамбул: метро M11 + M2", de: "Istanbul: Metro M11 + M2", en: "Istanbul: metro M11 + M2" }, "≈ ₺32+"],
      ["transit", { ru: "Стамбул: автобус Havaist", de: "Istanbul: Bus Havaist", en: "Istanbul: Havaist bus" }, "₺150–200"],
      ["taxi", { ru: "Стамбул: такси или Uber", de: "Istanbul: Taxi oder Uber", en: "Istanbul: taxi or Uber" }, "₺400–750"],
      ["transit", { ru: "Анталья: трамвай AntRay", de: "Antalya: Tram AntRay", en: "Antalya: AntRay tram" }, "₺42–46"],
      ["taxi", { ru: "Анталья: такси по счётчику", de: "Antalya: Taxi mit Taxameter", en: "Antalya: metered taxi" }, "≈ ₺690 (≈ 12 €)"],
      ["transfer", { ru: "Анталья: трансфер со встречей", de: "Antalya: Transfer mit Abholung", en: "Antalya: transfer with meet-and-greet" }, "19–40 €"],
    ],
    tips: {
      ru: ["Такси на улице не ловите: заказывайте через BiTaksi или Uber, тогда есть маршрут и цена в приложении.", "Следите, чтобы счётчик был включён и не переключался на ночной тариф днём — так туристам завышают цену до 50%.", "В Анталье трамвай и автобус 600 принимают только карту Antalyakart — купите её в аэропорту. Трамвай ходит примерно до 23:00.", "Цены в лирах быстро меняются из-за инфляции — сверяйте с приложением."],
      de: ["Kein Taxi auf der Straße heranwinken: über BiTaksi oder Uber bestellen, dann sind Route und Preis in der App.", "Darauf achten, dass das Taxameter läuft und tagsüber nicht auf Nachttarif springt — so werden Touristen um bis zu 50 % abgezockt.", "In Antalya nehmen Tram und Bus 600 nur die Antalyakart — am Flughafen kaufen. Die Tram fährt etwa bis 23:00.", "Lira-Preise ändern sich wegen der Inflation schnell — mit der App abgleichen."],
      en: ["Don't hail taxis on the street: book through BiTaksi or Uber so the route and price are in the app.", "Make sure the meter is on and doesn't switch to the night rate in daytime — a trick that inflates fares by up to 50%.", "In Antalya the tram and bus 600 only take the Antalyakart — buy it at the airport. The tram runs until about 23:00.", "Lira prices move fast with inflation — check them in the app."],
    },
    src: [["Hootling: Uber vs taxi Istanbul", "https://www.hootling.com/blog/uber-vs-taxi-istanbul", "04.2026"], ["HemenHesap: Antalya airport to centre", "https://www.hemenhesap.com/en/antalya-airport-to-city-centre", "09.2026"]],
  },
  {
    slug: "spain", flag: "🇪🇸", name: { ru: "Испания", de: "Spanien", en: "Spain" }, hub: "Madrid · MAD / Barcelona · BCN",
    apps: { ru: "FREE NOW (обычные такси), Cabify (такси и машины с водителем, 12 городов), Uber — в части городов. Bolt есть не везде.", de: "FREE NOW (normale Taxis), Cabify (Taxis und Mietwagen, 12 Städte), Uber in einigen Städten. Bolt nicht überall.", en: "FREE NOW (regular taxis), Cabify (taxis and private hire, 12 cities), Uber in some cities. Bolt is not everywhere." },
    route: { ru: "Мадрид: аэропорт → центр (внутри M-30)", de: "Madrid: Flughafen → Zentrum (innerhalb M-30)", en: "Madrid: airport → centre (inside the M-30)" },
    options: [
      ["taxi", { ru: "Мадрид: такси, фиксированная цена круглосуточно", de: "Madrid: Taxi, Festpreis rund um die Uhr", en: "Madrid: taxi, flat fare around the clock" }, "33 €"],
      ["app", "FREE NOW", { ru: "сбор 0,80 € сейчас / 2,20 € заранее", de: "Gebühr 0,80 € sofort / 2,20 € vorab", en: "fee 0.80 € now / 2.20 € in advance" }],
    ],
    tips: {
      ru: ["Официальное такси Мадрида — белое с красной полосой, в Барселоне — чёрно-жёлтое. Стоянки у каждого выхода прилёта.", "Машины из приложений в Мадриде забирают на парковках P1, P2 и P4, в Барселоне — в отдельных зонах T1 и T2.", "Не соглашайтесь, если водитель просит отменить заказ в приложении и доехать «через WhatsApp» или за наличные.", "На островах и в маленьких городах приложения часто не работают — звоните в местное радиотакси или идите на стоянку."],
      de: ["Offizielle Taxis in Madrid sind weiß mit rotem Streifen, in Barcelona schwarz-gelb. Taxistände an jedem Ankunftsausgang.", "App-Autos holen in Madrid an den Parkplätzen P1, P2 und P4 ab, in Barcelona in eigenen Zonen an T1 und T2.", "Nicht darauf eingehen, wenn der Fahrer bittet, die App-Fahrt zu stornieren und „per WhatsApp“ oder bar weiterzufahren.", "Auf Inseln und in kleinen Orten funktionieren Apps oft nicht — lokales Funktaxi anrufen oder zum Taxistand gehen."],
      en: ["Madrid's official taxis are white with a red stripe; Barcelona's are black and yellow. Ranks at every arrivals exit.", "App cars pick up in Madrid at car parks P1, P2 and P4, in Barcelona in dedicated zones at T1 and T2.", "Say no if a driver asks you to cancel the app ride and continue 'via WhatsApp' or for cash.", "On islands and in small towns apps often have no cars — call a local radio taxi or use the rank."],
    },
    src: [["Bento: taxi and ride-hailing apps in Spain", "https://www.bento.travel/spain/ride-hailing", "08.2026"]],
  },
  {
    slug: "france", flag: "🇫🇷", name: { ru: "Франция", de: "Frankreich", en: "France" }, hub: "Paris · CDG / ORY",
    apps: { ru: "В Париже работают такси по фиксированным ценам из аэропортов и приложения с машинами и водителем. За заказ такси по телефону или в приложении берут доплату: 4 € сразу, 7 € заранее.", de: "In Paris gibt es Taxis mit Festpreisen ab den Flughäfen und Apps mit Fahrer. Für eine Taxibestellung per Telefon oder App gibt es einen Zuschlag: 4 € sofort, 7 € vorab.", en: "Paris has flat-fare airport taxis and ride apps with drivers. Booking a taxi by phone or app adds a supplement: 4 € immediate, 7 € in advance." },
    route: { ru: "Аэропорты Парижа → центр (правый / левый берег)", de: "Pariser Flughäfen → Zentrum (rechtes / linkes Ufer)", en: "Paris airports → centre (right / left bank)" },
    options: [
      ["taxi", { ru: "CDG → правый берег", de: "CDG → rechtes Ufer", en: "CDG → right bank" }, "56 €"],
      ["taxi", { ru: "CDG → левый берег", de: "CDG → linkes Ufer", en: "CDG → left bank" }, "65 €"],
      ["taxi", { ru: "Orly → правый берег", de: "Orly → rechtes Ufer", en: "Orly → right bank" }, "45 €"],
      ["taxi", { ru: "Orly → левый берег", de: "Orly → linkes Ufer", en: "Orly → left bank" }, "36 €"],
    ],
    tips: {
      ru: ["Это фиксированные цены: доплат за аэропорт и багаж быть не должно.", "Предложения поехать прямо в зале прилёта игнорируйте — идите в официальную очередь такси.", "Водитель обязан принять карту. Чек обязателен от 25 €, для аэропорта попросите его до конца поездки."],
      de: ["Das sind Festpreise: Zuschläge für Flughafen oder Gepäck darf es nicht geben.", "Angebote direkt in der Ankunftshalle ignorieren — zur offiziellen Taxireihe gehen.", "Der Fahrer muss Karte akzeptieren. Ab 25 € ist ein Beleg Pflicht, bei Flughafenfahrten vor Fahrtende verlangen."],
      en: ["These are flat fares: no airport or luggage surcharge should be added.", "Ignore ride offers inside arrivals — go to the official taxi queue.", "The driver must accept cards. A receipt is mandatory from 25 €; for airport rides ask before the ride ends."],
    },
    src: [["CityStayPilot: Paris taxi rules 2026", "https://citystaypilot.com/blog/paris-taxi-rules-2026-official-taxi-flat-fares-scams-late-night", "04.2026"]],
  },
  {
    slug: "italy", flag: "🇮🇹", name: { ru: "Италия", de: "Italien", en: "Italy" }, hub: "Roma · FCO / CIA",
    apps: { ru: "itTaxi (официальное приложение Рима) и FREE NOW вызывают обычные белые такси. Uber работает как машины с водителем (UberX, Black) и обычно дороже такси на 10–20%; фиксированная цена аэропорта на него не действует.", de: "itTaxi (offizielle App Roms) und FREE NOW rufen normale weiße Taxis. Uber fährt als Mietwagen mit Fahrer (UberX, Black), meist 10–20 % teurer als Taxi; der Flughafen-Festpreis gilt dort nicht.", en: "itTaxi (Rome's official app) and FREE NOW call regular white taxis. Uber runs as private hire (UberX, Black), usually 10–20% above taxis; the airport flat fare doesn't apply to it." },
    route: { ru: "Рим: аэропорт → центр (внутри Аврелиановых стен)", de: "Rom: Flughafen → Zentrum (innerhalb der Aurelianischen Mauer)", en: "Rome: airport → centre (inside the Aurelian Walls)" },
    options: [
      ["taxi", { ru: "Фьюмичино (FCO), всё включено", de: "Fiumicino (FCO), alles inklusive", en: "Fiumicino (FCO), all-inclusive" }, "50 €"],
      ["taxi", { ru: "Чампино (CIA), всё включено", de: "Ciampino (CIA), alles inklusive", en: "Ciampino (CIA), all-inclusive" }, "30 €"],
    ],
    tips: {
      ru: ["Лицензированное такси Рима — белое с табличкой TAXI. Машины другого цвета — не официальные.", "В зале прилёта Фьюмичино неофициальные водители просят 80–120 €. Идите к стоянке у выхода.", "На фиксированной цене не должно быть счётчика и доплат за багаж, пассажиров или «туристический налог».", "Такси обязано принять карту от 5 €. Жалоба в Риме: 06-0609."],
      de: ["Lizenzierte Taxis in Rom sind weiß mit TAXI-Schild. Autos in anderer Farbe sind nicht offiziell.", "In der Ankunftshalle von Fiumicino verlangen inoffizielle Fahrer 80–120 €. Zum Taxistand am Ausgang gehen.", "Beim Festpreis darf kein Taxameter laufen und es gibt keine Zuschläge für Gepäck, Personen oder „Touristensteuer“.", "Taxis müssen ab 5 € Karte akzeptieren. Beschwerden in Rom: 06-0609."],
      en: ["Licensed Rome taxis are white with a TAXI sign. Cars of any other colour are not official.", "Unofficial drivers in Fiumicino arrivals ask 80–120 €. Go to the rank at the exit.", "On a flat fare there should be no meter and no extras for luggage, passengers or a 'tourist tax'.", "Taxis must accept cards from 5 €. Complaints in Rome: 06-0609."],
    },
    src: [["Hootling: Rome taxi fares 2026", "https://www.hootling.com/blog/how-much-does-a-taxi-cost-in-rome", "10.2026"]],
  },
  {
    slug: "portugal", flag: "🇵🇹", name: { ru: "Португалия", de: "Portugal", en: "Portugal" }, hub: "Lisboa · LIS",
    apps: { ru: "Uber и Bolt работают; Bolt часто на 5–15% дешевле Uber на том же маршруте.", de: "Uber und Bolt sind verfügbar; Bolt ist auf derselben Strecke oft 5–15 % günstiger als Uber.", en: "Uber and Bolt both operate; Bolt is often 5–15% cheaper than Uber on the same route." },
    route: { ru: "Лиссабон: аэропорт → центр", de: "Lissabon: Flughafen → Zentrum", en: "Lisbon: airport → centre" },
    options: [
      ["app", "Uber / Bolt", { ru: "12–18 € (в пик 16–30 €)", de: "12–18 € (Spitze 16–30 €)", en: "12–18 € (surge 16–30 €)" }],
      ["taxi", { ru: "Такси днём", de: "Taxi tagsüber", en: "Taxi by day" }, "15–20 €"],
      ["taxi", { ru: "Такси ночью и в выходные", de: "Taxi nachts und am Wochenende", en: "Taxi at night and weekends" }, "20–26 €"],
    ],
    tips: {
      ru: ["К счётчику такси добавляется 1,60 € за аэропорт и 1,60 € за каждую сумку больше 55 см.", "Машины Uber и Bolt забирают на 2-м этаже, в отдельной зоне, примерно 5 минут пешком от прилёта. Такси — на 1-м этаже у выхода.", "Оплата картой обязательна. Если водитель говорит, что терминал сломан, возьмите другое такси.", "Цифры взяты у трансферной компании, она может приукрашивать свой вариант — сверяйте с приложением."],
      de: ["Zum Taxameter kommen 1,60 € Flughafenzuschlag und 1,60 € je Gepäckstück über 55 cm.", "Uber- und Bolt-Autos holen im 2. Stock in einer eigenen Zone ab, etwa 5 Minuten zu Fuß von der Ankunft. Taxis stehen im 1. Stock am Ausgang.", "Kartenzahlung ist Pflicht. Sagt der Fahrer, das Terminal sei kaputt, ein anderes Taxi nehmen.", "Die Zahlen stammen von einem Transferanbieter, der sein eigenes Angebot beschönigen kann — mit der App abgleichen."],
      en: ["The meter fare adds 1.60 € for the airport and 1.60 € per bag over 55 cm.", "Uber and Bolt pick up on floor 2 in a dedicated zone, about 5 minutes' walk from arrivals. Taxis queue on floor 1 at the exit.", "Card payment is mandatory. If the driver says the terminal is broken, take another taxi.", "Figures come from a transfer company that may favour its own option — check the app."],
    },
    src: [["GoToo: taxi vs Uber vs transfer Lisbon", "https://gotoo.pt/taxi-vs-uber-vs-private-transfer-lisbon/", "11.2026"]],
  },
  {
    slug: "uk", flag: "🇬🇧", name: { ru: "Англия", de: "England", en: "England" }, hub: "London · LHR",
    apps: { ru: "Uber и Bolt работают, а также чёрные кэбы и минивэны по предзаказу с ценой заранее.", de: "Uber und Bolt sind verfügbar, außerdem Black Cabs und vorbestellte Minicabs mit Festpreis.", en: "Uber and Bolt operate, plus black cabs and pre-booked minicabs with an upfront price." },
    route: { ru: "Хитроу → центр Лондона", de: "Heathrow → London Zentrum", en: "Heathrow → central London" },
    options: [
      ["transit", "Elizabeth line, 40–50 min", "£11,80"],
      ["transit", "Heathrow Express → Paddington, 15 min", "£25–37"],
      ["app", "Bolt / minicab", "£40–70"],
      ["app", "UberX", "£45–75"],
      ["taxi", { ru: "Чёрный кэб по счётчику", de: "Black Cab mit Taxameter", en: "Black cab, metered" }, "£55–90"],
    ],
    tips: {
      ru: ["Настоящие чёрные кэбы не подходят к пассажирам сами, они ждут в очереди. Зазывалы в зале прилёта просят £120–200.", "Ночью с 22:00 до 6:00 у чёрного кэба тариф выше на 20–25%.", "Чаевые в кэбе не обязательны, достаточно округлить сумму. Карты и бесконтактная оплата принимаются.", "Без большого багажа поезд Elizabeth line выйдет в несколько раз дешевле."],
      de: ["Echte Black Cabs sprechen niemanden an, sie warten in der Reihe. Schlepper in der Ankunftshalle verlangen £120–200.", "Nachts von 22:00 bis 6:00 ist der Black-Cab-Tarif 20–25 % höher.", "Trinkgeld im Cab ist nicht Pflicht, Aufrunden genügt. Karten und kontaktlos werden akzeptiert.", "Ohne viel Gepäck ist die Elizabeth line um ein Vielfaches günstiger."],
      en: ["Genuine black cabs don't approach passengers, they wait in the queue. Touts in arrivals ask £120–200.", "From 22:00 to 6:00 the black-cab tariff is 20–25% higher.", "Tipping isn't required in a cab, rounding up is enough. Cards and contactless are accepted.", "With light luggage the Elizabeth line is several times cheaper."],
    },
    src: [["Hootling: Heathrow to London", "https://www.hootling.com/blog/taxi-heathrow-to-london", "01.2026"]],
  },
];

export const CL = {
  ru: { title: "Советы туристам по странам", sub: "Сравнения и заказа для этих стран пока нет. Здесь коротко: на чём ехать из аэропорта, сколько это стоит и как не переплатить.", note: "Сравнение и заказ для этой страны пока не работают. Здесь советы и ориентиры по ценам.", apps: "Приложения", options: "Из аэропорта", tips: "Советы", src: "Источники", kinds: { taxi: "такси", app: "приложение", transit: "транспорт", transfer: "трансфер", voucher: "ваучер" }, all: "Все страны", back: "← Все страны" },
  de: { title: "Tipps für Reisende nach Ländern", sub: "Vergleich und Buchung gibt es für diese Länder noch nicht. Hier kurz: womit vom Flughafen, was es kostet und wie man nicht zu viel zahlt.", note: "Vergleich und Buchung funktionieren für dieses Land noch nicht. Hier gibt es Tipps und Preis-Richtwerte.", apps: "Apps", options: "Vom Flughafen", tips: "Tipps", src: "Quellen", kinds: { taxi: "Taxi", app: "App", transit: "ÖPNV", transfer: "Transfer", voucher: "Gutschein" }, all: "Alle Länder", back: "← Alle Länder" },
  en: { title: "Travel tips by country", sub: "There's no comparison or booking for these countries yet. In short: how to get from the airport, what it costs and how not to overpay.", note: "Comparison and booking don't work for this country yet. Here are tips and price guides.", apps: "Apps", options: "From the airport", tips: "Tips", src: "Sources", kinds: { taxi: "taxi", app: "app", transit: "transit", transfer: "transfer", voucher: "voucher" }, all: "All countries", back: "← All countries" },
};
