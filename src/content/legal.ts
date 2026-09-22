/**
 * Skeletons for the legal pages.
 * TODO: replace the bracketed placeholders with the real text (or have it drafted) before launch.
 */
export type LegalSection = { heading: string; paragraphs: string[] };

export const privacy: { title: string; updated: string; sections: LegalSection[] } = {
  title: "Privacyverklaring",
  updated: "[datum]",
  sections: [
    {
      heading: "Wie we zijn",
      paragraphs: [
        "[Bedrijfsnaam], gevestigd aan [adres], ingeschreven bij de KVK onder nummer [KVK-nummer], is verantwoordelijk voor de verwerking van persoonsgegevens zoals beschreven in deze verklaring.",
      ],
    },
    {
      heading: "Welke gegevens we verwerken",
      paragraphs: [
        "Als je ons een bericht stuurt via WhatsApp verwerken we je naam, telefoonnummer en de inhoud van het gesprek om je vraag te beantwoorden en een gesprek in te plannen.",
        "Als je toestemming geeft voor cookies, verwerken Google Analytics en Google Ads gegevens over je bezoek aan deze site (pagina's, apparaat, globale locatie) om de site en onze advertenties te verbeteren.",
      ],
    },
    {
      heading: "Bewaartermijnen",
      paragraphs: ["[Bewaartermijn voor gespreksgegevens en statistieken.]"],
    },
    {
      heading: "Je rechten",
      paragraphs: [
        "Je kunt je gegevens inzien, laten corrigeren of laten verwijderen. Stuur daarvoor een bericht naar [e-mailadres]. Je kunt ook een klacht indienen bij de Autoriteit Persoonsgegevens.",
      ],
    },
  ],
};

export const voorwaarden: { title: string; updated: string; sections: LegalSection[] } = {
  title: "Algemene voorwaarden",
  updated: "[datum]",
  sections: [
    {
      heading: "Toepasselijkheid",
      paragraphs: ["[Deze voorwaarden gelden voor alle diensten van [Bedrijfsnaam].]"],
    },
    {
      heading: "De dienst",
      paragraphs: [
        "[Beschrijving van het beheer van Google Ads-accounts, wat wel en niet is inbegrepen, en dat het advertentiebudget rechtstreeks aan Google wordt betaald.]",
      ],
    },
    {
      heading: "Fee en facturatie",
      paragraphs: [
        "[Percentage van de werkelijke Google Ads-spend per kalendermaand, staffels, facturatie op de eerste van de maand over de maand ervoor, betaaltermijn.]",
      ],
    },
    {
      heading: "Looptijd en opzeggen",
      paragraphs: ["[Per maand opzegbaar, lopende maand wordt afgemaakt, hoe opzeggen werkt.]"],
    },
    {
      heading: "Aansprakelijkheid",
      paragraphs: ["[Beperking van aansprakelijkheid; geen resultaatgarantie; beslissingen van Google.]"],
    },
  ],
};
