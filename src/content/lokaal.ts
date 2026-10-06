/**
 * Copy for the local-business page (/lokaal). Based on the brochure "Google Ads voor lokale ondernemers".
 * No prices on purpose: the fee is agreed in the conversation.
 */

export const lokaalWhatsapp =
  "Hoi Advizier, ik heb een bedrijf in de regio en wil weten of Google Ads voor mij werkt.";

export const lokaalNav = [
  { label: "Hoe het werkt", href: "#hoe-het-werkt" },
  { label: "Kosten", href: "#kosten" },
  { label: "Voor wie", href: "#voor-wie" },
  { label: "FAQ", href: "#faq" },
  { label: "E-com stores", href: "/" },
];

export const lokaalMeta = {
  title: "Google Ads voor lokale ondernemers",
  description:
    "Advizier zet je advertenties bovenaan op het moment dat iemand in jouw regio zoekt naar wat jij doet. Zoekadvertenties en Google Maps, meetbaar op bellen, route en aanvragen. Geen jaarcontract.",
};

export const lokaalHero = {
  eyebrow: "Google Ads voor lokale ondernemers",
  title: "Klanten in de buurt zoeken op Google.",
  titleAccent: "Zorg dat ze jou vinden.",
  intro:
    "Advizier zet je advertenties bovenaan op het moment dat iemand in jouw regio zoekt naar wat jij doet. Geen jaarcontract, elke maand een rapport in gewone taal, en het account blijft van jou.",
  chips: ["Zoekadvertenties", "Google Maps", "Meetbaar: bellen, route, aanvragen", "Maandelijks opzegbaar"],
  primaryCta: "App ons op WhatsApp",
  secondaryCta: "Bekijk hoe het werkt",
  mock: {
    query: "loodgieter helmond spoed",
    sponsored: "Gesponsord",
    title: "Jouw bedrijf — Loodgieter in Helmond",
    url: "jouwbedrijf.nl",
    text: "Vandaag nog ter plaatse in Helmond en omgeving. Vaste prijzen, geen voorrijkosten. Bel direct.",
    buttons: ["Bellen", "Route", "Offerte aanvragen"],
    competitorTitle: "Concurrent uit de regio",
    competitorUrl: "concurrent.nl",
    competitorText: "Ook een loodgieter, maar niet bovenaan.",
  },
};

export const lokaalWerkt = {
  title: "Bovenaan",
  titleAccent: "als het telt.",
  label: "Zo werkt het",
  intro:
    "Iemand in Helmond zoekt 's avonds naar een loodgieter met spoed. Wie bovenaan staat, krijgt het telefoontje. Wij zorgen dat dat jij bent, en alleen bij zoekopdrachten die echt iets opleveren.",
  cards: [
    {
      icon: "search",
      title: "Zoekadvertenties",
      text: "Je staat bovenaan bij de zoekwoorden die bij jouw vak passen. Alleen in jouw regio, alleen op de tijden dat je bereikbaar bent.",
    },
    {
      icon: "map",
      title: "Google Maps",
      text: "Je bedrijfsprofiel wordt gevonden met route, openingstijden en reviews. Op de kaart adverteren doen we als dat voor jouw vak zin heeft.",
    },
    {
      icon: "phone",
      title: "Meten wat het oplevert",
      text: "Telefoontjes, routeaanvragen en formulieren worden gemeten. Zo sturen we op klanten, niet op klikken.",
    },
  ],
};

export const lokaalStappen = {
  title: "Wat wij",
  titleAccent: "voor je doen.",
  label: "Wat wij doen",
  intro: "Vier stappen, van kennismaking tot maandrapport. Jij neemt de telefoon op; de rest doen wij.",
  steps: [
    {
      title: "Kennismaken",
      text: "Een kort gesprek via WhatsApp of telefoon: wat doe je, voor wie, in welke regio, en past Google bij je?",
    },
    {
      title: "Opzetten",
      text: "Zoekwoorden, advertentieteksten, regio en tijden, en de meting van bellen, route en aanvragen.",
    },
    {
      title: "Bijsturen",
      text: "Elke week: zoekwoorden die niets opleveren eruit, budget naar wat wél klanten brengt.",
    },
    {
      title: "Rapport",
      text: "Elke maand in gewone taal: wat het kostte, wat het opleverde en wat we hebben aangepast.",
    },
  ],
};

export const lokaalKosten = {
  title: "Eerlijk",
  titleAccent: "over kosten.",
  label: "Wat het kost",
  intro: "Twee bedragen, allebei inzichtelijk: wat je aan Google betaalt en wat je aan ons betaalt.",
  cards: [
    {
      title: "Wat je betaalt",
      paragraphs: [
        "Google betaal je zelf, per klik, vanaf je eigen account. Daar zit niets van ons tussen. Voor het beheer rekenen wij een vooraf afgesproken vergoeding. Geen setupkosten, geen jaarcontract, maandelijks opzegbaar.",
        "Hoeveel budget zinvol is, hangt af van je vak en je regio. Dat rekenen we in het gesprek samen uit; we noemen liever een eerlijk getal dan een mooi getal.",
      ],
    },
    {
      title: "Jij houdt alles",
      paragraphs: [
        "Het Google Ads-account en je bedrijfsprofiel staan op jouw naam. Wij werken erin met een beheerderstoegang.",
        "Stop je, dan houd je het account, de campagnes en alle data. Je zit nergens aan vast, en je begint nooit opnieuw.",
      ],
    },
  ],
  zelf: {
    title: "Wij doen het zelf, elke dag",
    text: "Advizier komt uit de e-commerce. Onze eigen webshops draaien dag in dag uit op Google Ads, met ons eigen geld. Wat we bij jou doen, hebben we eerst zelf getest.",
  },
};

export const lokaalVoorWie = {
  title: "Voor wie",
  titleAccent: "het werkt.",
  label: "Wel of (nog) niet",
  yes: {
    heading: "Voor wie het werkt",
    items: [
      "Bedrijven waar mensen actief naar zoeken: installateurs, garages, tandartsen, fysiotherapeuten, kappers en salons, restaurants, winkels met een specialisme",
      "Een telefoon die wordt opgenomen, of een website waar iemand een afspraak of offerte kan aanvragen",
      "Ruimte voor extra klanten in de komende maanden",
    ],
  },
  no: {
    heading: "Voor wie (nog) niet",
    items: [
      "Geen website of pagina om naartoe te sturen. We vertellen je dan eerlijk wat er eerst moet gebeuren",
      "Een product of dienst waar niemand op zoekt. Dan is Google niet het juiste kanaal, en zeggen we dat ook",
      "Geen tijd om telefoontjes en aanvragen op te volgen. Dan betaal je voor klanten die je laat lopen",
    ],
  },
};

export const lokaalFaq = {
  title: "Wat je je",
  titleAccent: "nu afvraagt.",
  label: "FAQ",
  items: [
    {
      q: "Zit ik ergens aan vast?",
      a: "Nee. Maandelijks opzegbaar, geen jaarcontract. Stop je, dan houd je het account, de campagnes en alle data.",
    },
    {
      q: "Hoe snel zie ik iets?",
      a: "De eerste klikken binnen een dag na livegang. Of het klanten worden zie je in de weken erna, en elke maand in je rapport.",
    },
    {
      q: "Moet ik zelf iets doen?",
      a: "Bij de start een paar toegangen regelen, daarna de telefoon opnemen. De rest doen wij.",
    },
    {
      q: "Hoeveel budget heb ik nodig?",
      a: "Dat hangt af van je vak en je regio: een loodgieter in Helmond heeft een ander budget nodig dan een tandarts in Eindhoven. We rekenen het in het gesprek samen uit en noemen liever een eerlijk getal dan een mooi getal.",
    },
    {
      q: "Wat kost het beheer?",
      a: "Een vooraf afgesproken vergoeding, zonder setupkosten en zonder jaarcontract. Het bedrag hangt af van je budget en bespreken we in het gesprek.",
    },
  ],
};

export const lokaalCta = {
  title: "Benieuwd wat Google",
  titleAccent: "voor jouw bedrijf kan doen?",
  intro:
    "App ons. Je krijgt een eerlijk antwoord, ook als Google voor jou niet het juiste kanaal blijkt te zijn.",
  button: "App ons op WhatsApp",
  pending: "WhatsApp wordt binnenkort gekoppeld.",
};
