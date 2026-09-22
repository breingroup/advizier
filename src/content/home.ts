/**
 * Homepage copy. Edit text here; the components only lay it out.
 * Lines marked TODO contain placeholders in [brackets].
 */

export const hero = {
  eyebrow: "Google Ads voor dropship stores",
  title: "Google Ads die schalen.",
  titleAccent: "Je fee niet.",
  intro:
    "Advizier beheert het Google Ads-account van dropshippers op Shopify. Je betaalt een percentage van je ad spend, en dat percentage daalt naarmate je groeit. Geen vaste fee, geen performance fee.",
  primaryCta: "App ons op WhatsApp",
  secondaryCta: "Bekijk hoe we werken",
  proofs: [
    "Eigen webshops op Google Ads",
    "Geen vaste kosten",
    "Percentage daalt bij groei",
  ],
  card: {
    label: "Je fee als je groeit",
    legendSpend: "Ad spend",
    legendFee: "Spend fee",
    caption:
      "Hoe meer je uitgeeft aan Google Ads, hoe lager het percentage dat je aan ons betaalt. De precieze staffel bespreken we in het gesprek.",
  },
};

/** Logo strip under the hero. Files live in public/partners/ (white on transparent). */
export const partners = {
  label: "Partner van",
  items: [
    { name: "Google", src: "/partners/google.png", width: 379, height: 96 },
    { name: "Shopify", src: "/partners/shopify.png", width: 570, height: 96 },
    { name: "ProfitMetrics", src: "/partners/profitmetrics.png", width: 476, height: 96 },
    { name: "Trackbee", src: "/partners/trackbee.svg", width: 364, height: 83 },
    { name: "WeTracked", src: "/partners/wetracked.svg", width: 175, height: 30 },
  ],
};

export const pains = {
  title: "Je verkoopt.",
  titleAccent: "Maar het schaalt niet.",
  label: "Herkenbaar?",
  items: [
    {
      title: "Je ROAS blijft steken rond break-even.",
      text: "Google draait, er komen orders binnen, maar na productkosten, verzending en fees blijft er niets over. Omzet is geen winst.",
    },
    {
      title: "Meer budget maakt het niet beter.",
      text: "Je schaalt de campagne op en de ROAS zakt mee. Performance Max pakt je makkelijkste verkopen en noemt dat groei.",
    },
    {
      title: "Je feed en Merchant Center houden je tegen.",
      text: "Afgekeurde producten, een schorsing die uit het niets komt, titels waar niemand op zoekt. Als het fundament niet klopt, klopt de rest ook niet.",
    },
  ],
};

export const werkwijze = {
  title: "Zo pakken we",
  titleAccent: "een dropship store aan.",
  label: "Hoe we werken",
  intro:
    "Geen trucs, wel een structuur die blijft werken als je groeit. Een vaste specialist kent je account en beslist elke week op data.",
  steps: [
    {
      title: "Audit en tracking",
      text: "We lopen je account, je feed en je conversiemeting na. Pas als de cijfers kloppen, gaan we sturen. Anders stuur je op ruis.",
    },
    {
      title: "Fundament: feed en Merchant Center",
      text: "Titels, attributen, afbeeldingen en beleid op orde. Zo blijf je goedgekeurd en word je gevonden op zoekopdrachten die verkopen.",
    },
    {
      title: "Structuur: Shopping en Performance Max",
      text: "We splitsen op marge en volume. Bewezen producten krijgen budget, nieuwe producten een eerlijke test, verliezers gaan eruit.",
    },
    {
      title: "Doorschalen op marge",
      text: "Budget omhoog waar de marge het toelaat, terug waar het niet werkt. Je krijgt een kort overzicht per week, geen rapport van dertig pagina's.",
    },
  ],
};

export const eigenStores = {
  title: "We adverteren zelf.",
  titleAccent: "Elke dag.",
  label: "Waarom Advizier",
  // TODO: check the wording of this paragraph against what you want to say publicly about your own stores.
  intro:
    "Advizier komt uit een e-commercebedrijf met eigen webshops in Nederland, het Verenigd Koninkrijk en de Verenigde Staten. Alles wat we bij jou doen, draait eerst in onze eigen accounts.",
  points: [
    {
      icon: "shield",
      title: "Dezelfde feeds, hetzelfde beleid, dezelfde schorsingen.",
      text: "We kennen de Merchant Center-problemen van een dropship store omdat we ze zelf hebben opgelost.",
    },
    {
      icon: "trend",
      title: "We sturen op winst per product, niet op ROAS alleen.",
      text: "Inkoop, verzending en retouren zitten in onze cijfers. Zo weet je of een product echt geld oplevert.",
    },
    {
      icon: "flask",
      title: "Geen theorie uit een cursus.",
      text: "Wat vandaag werkt in Google Shopping, testen we eerst op onze eigen stores en daarna bij jou.",
    },
  ],
};

/**
 * Results section. Stays hidden until `enabled` is true.
 * TODO: replace the placeholder cases with real numbers (Shopify + Google Ads) and set enabled: true.
 */
export const resultaten = {
  enabled: false,
  title: "Eén maand.",
  titleAccent: "Drie stores.",
  label: "Resultaten",
  intro:
    "Drie dropship stores, dezelfde dertig dagen, alle drie op Google Ads met ons. Groei tegenover de dertig dagen ervoor.",
  cases: [
    { store: "[Store 1]", revenue: "€[XX.XXX]", growth: "+[XX]%", note: "omzet, 30 dagen" },
    { store: "[Store 2]", revenue: "€[XX.XXX]", growth: "+[XX]%", note: "omzet, 30 dagen" },
    { store: "[Store 3]", revenue: "$[XX.XXX]", growth: "+[XX]%", note: "omzet, 30 dagen" },
  ],
  footnote: "Bedragen uit Shopify en Google Ads. Namen en stores laten we weg.",
};

export const fee = {
  title: "Een percentage van je ad spend.",
  titleAccent: "Meer niet.",
  label: "De fee",
  intro:
    "Je betaalt maandelijks een percentage van wat je werkelijk bij Google hebt uitgegeven. Groei je door, dan daalt dat percentage in stappen. Geen vaste fee, geen setupkosten, geen performance fee.",
  points: [
    {
      title: "Daalt als je groeit",
      text: "Hoe hoger je maandelijkse ad spend, alle stores samen, hoe lager je percentage. Schalen wordt dus goedkoper, niet duurder.",
    },
    {
      title: "Achteraf, op werkelijke spend",
      text: "Op de eerste van de maand factureren we de maand ervoor, op basis van je echte Google Ads-uitgaven.",
    },
    {
      title: "Je account blijft van jou",
      text: "Google Ads en Merchant Center staan op jouw naam en je betaalt Google rechtstreeks. Wij werken via een koppeling die je altijd kunt intrekken.",
    },
    {
      // TODO: confirm the notice period you want to promise.
      title: "Per maand opzegbaar",
      text: "Geen jaarcontract. Stoppen kan per maand; de lopende maand maken we af.",
    },
  ],
  closing: "De precieze staffel? Die bespreken we in het gesprek, met jouw cijfers erbij.",
};

export const voorWie = {
  title: "Voor wie",
  titleAccent: "het is.",
  label: "Wel of niet",
  yes: {
    heading: "Wel",
    items: [
      "Je runt een dropship store op Shopify",
      // TODO: fill in the minimum monthly ad spend you take clients on at.
      "Je geeft minimaal €[X] per maand uit aan Google Ads, alle stores samen, of dat budget ligt klaar",
      "Je wilt schalen op winst, niet alleen op omzet",
    ],
  },
  no: {
    heading: "Niet",
    items: [
      "Je zoekt nog een product of niche",
      "Je zoekt iemand voor Meta, TikTok of e-mail",
      "Je wilt een cursus of een community, geen bureau",
    ],
  },
};

export const cta = {
  title: "Klaar om",
  titleAccent: "te schalen?",
  intro:
    "Stuur ons een bericht op WhatsApp. We stellen een paar vragen over je store en plannen daarna een kort gesprek van dertig minuten.",
  button: "App ons op WhatsApp",
  pending: "WhatsApp wordt binnenkort gekoppeld.",
};
