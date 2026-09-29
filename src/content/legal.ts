/**
 * Skeletons for the legal pages.
 * TODO: replace the bracketed placeholders with the real text (or have it drafted) before launch.
 */
export type LegalSection = { heading: string; paragraphs: string[] };

export const privacy: { title: string; updated: string; sections: LegalSection[] } = {
  title: "Privacyverklaring",
  updated: "29-09-2026",
  sections: [
    {
      heading: "Wie we zijn",
      paragraphs: [
        "Advizier, gevestigd aan Panovenweg 1 5708JA in helmond, ingeschreven bij de KVK onder nummer 94765782, is verantwoordelijk voor de verwerking van persoonsgegevens zoals beschreven in deze verklaring.",
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
      paragraphs: "Je gegevens worden voor minimaal 7 jaar bewaard. conform met de fiscale bewaarplicht",
    },
    {
      heading: "Je rechten",
      paragraphs: [
        "Je kunt je gegevens inzien, laten corrigeren of laten verwijderen. Stuur daarvoor een bericht naar info@jhbautomotive.nl. Je kunt ook een klacht indienen bij de Autoriteit Persoonsgegevens.",
      ],
    },
  ],
};

export const voorwaarden: { title: string; updated: string; sections: LegalSection[] } = {
  title: "Algemene voorwaarden",
  updated: "29-09-2026",
  sections: [
    {
      heading: "Toepasselijkheid",
      paragraphs: [
        "Advizier is een handelsnaam van Brein Group VOF, gevestigd te Helmond en ingeschreven bij de Kamer van Koophandel onder nummer 94765782. Waar in deze voorwaarden Advizier staat, wordt Brein Group VOF bedoeld.",
        "Deze voorwaarden gelden voor alle aanbiedingen, overeenkomsten en werkzaamheden van Advizier. Ze gelden alleen voor klanten die handelen in de uitoefening van een beroep of bedrijf. Eigen inkoop- of leveringsvoorwaarden van de klant zijn niet van toepassing.",
        "Afwijkingen van deze voorwaarden gelden alleen als Advizier ze schriftelijk heeft bevestigd, per e-mail of WhatsApp.",
      ],
    },
    {
      heading: "Totstandkoming van de overeenkomst",
      paragraphs: [
        "Advizier werkt zonder papieren contract. De overeenkomst komt tot stand zodra de klant na het kennismakingsgesprek akkoord geeft op de samenwerking en de fee, mondeling of via WhatsApp of e-mail, en Advizier met de onboarding start. Vanaf dat moment gelden deze voorwaarden.",
        "Advizier mag een samenwerking weigeren of niet starten, bijvoorbeeld als het advertentiebudget onder het minimum ligt, de webshop niet op Shopify draait of de benodigde accounts niet toegankelijk zijn.",
      ],
    },
    {
      heading: "De dienst",
      paragraphs: [
        "Advizier beheert het Google Ads-account van de klant. Daaronder valt: een audit van account, feed en conversiemeting; het opzetten en onderhouden van de campagnestructuur (Google Shopping en Performance Max); biedingen en budgetten; doorlopende optimalisatie en schaling; het inrichten en optimaliseren van de productfeed en Merchant Center; het inrichten en controleren van de conversiemeting (GTM en GA4, waar nodig server-side); het inrichten van ProfitMetrics; en advies over product- en landingspagina's.",
        "Niet inbegrepen zijn: het zelf oplossen van afkeuringen, schorsingen en andere accountproblemen in Merchant Center (Advizier adviseert wat er moet gebeuren, de klant voert het uit); het invoeren en bijhouden van kostprijzen in ProfitMetrics; het doorvoeren van wijzigingen in de webshop, zoals thema, pagina's en apps; advertenties op andere platformen zoals Meta en TikTok; productonderzoek; en coaching of trainingen. Werk buiten de dienst wordt alleen gedaan na een aparte afspraak.",
        "Advizier heeft een inspanningsverplichting, geen resultaatverplichting. Advizier geeft geen garantie op omzet, ROAS, winst of andere resultaten.",
        "De klant betaalt het advertentiebudget rechtstreeks aan Google, vanuit het eigen Google Ads-account en met een eigen betaalmethode. Abonnementen op tools zoals ProfitMetrics sluit de klant zelf af en betaalt de klant zelf. Advizier factureert alleen de eigen fee.",
      ],
    },
    {
      heading: "Accounts, toegang en eigendom",
      paragraphs: [
        "Het Google Ads-account en het Merchant Center-account staan op naam van de klant en blijven eigendom van de klant, inclusief alle campagnes, data en historie. Advizier krijgt beheerderstoegang via het managersaccount (MCC) van Advizier.",
        "De klant geeft Advizier bij de start toegang tot wat nodig is voor het werk: Google Ads, Merchant Center, Shopify (via een collaborator-verzoek), GA4 en GTM, en ProfitMetrics. De klant zorgt dat deze toegang tijdens de samenwerking blijft bestaan.",
        "Advizier plaatst eigen scripts, sheets en labels in de accounts van de klant, zoals de Advizier Labelizer en aanvullende feedbronnen in Merchant Center. Deze middelen, de rapportages en de werkwijze erachter blijven intellectueel eigendom van Advizier. De klant mag ze gebruiken zolang de samenwerking duurt en mag ze niet kopiëren of delen; bij het einde van de samenwerking verwijdert Advizier ze.",
      ],
    },
    {
      heading: "Verplichtingen van de klant",
      paragraphs: [
        "De klant zorgt voor juiste en volledige informatie over de webshop, de producten, de marges en de doelen, en meldt wijzigingen die het werk raken, zoals nieuwe producten, prijswijzigingen, voorraadproblemen en aanpassingen aan de webshop.",
        "De klant is zelf verantwoordelijk voor de webshop, de producten, de levering, de klantenservice en het naleven van wet- en regelgeving en van het beleid van Google, Shopify en andere platformen. Aanpassingen aan de webshop, de feed of het Merchant Center-account die Advizier vraagt, voert de klant tijdig zelf door.",
        "Stuurt Advizier op winst, dan voert de klant de kostprijzen in ProfitMetrics in en houdt ze actueel. Zonder kostprijzen stuurt Advizier op advertentiekosten, omzet en ROAS.",
        "De klant houdt een advertentiebudget aan van minimaal €1.500 per maand, tenzij anders afgesproken.",
      ],
    },
    {
      heading: "Fee en facturatie",
      paragraphs: [
        "De fee is een percentage van de werkelijke advertentiekosten in Google Ads per kalendermaand, exclusief btw: 12% bij advertentiekosten tot €50.000 per maand, 10% bij €50.000 tot €100.000 per maand en 8% vanaf €100.000 per maand. Het percentage geldt voor de hele maand over het volledige bedrag; bij €60.000 aan advertentiekosten is de fee dus 10% over €60.000.",
        "Er zijn geen vaste kosten, geen setupkosten en geen performance fee. Er geldt geen minimumfee, wel het minimale advertentiebudget uit het vorige artikel.",
        "Advizier factureert op de eerste dag van de maand over de voorgaande maand, op basis van de advertentiekosten zoals Google Ads die rapporteert. De klant betaalt binnen 14 dagen per bankoverschrijving.",
        "Bij te late betaling stuurt Advizier één herinnering. Blijft betaling daarna uit, dan mag Advizier de campagnes pauzeren tot het openstaande bedrag is voldaan; Advizier is niet aansprakelijk voor de gevolgen van die pauze. Over het openstaande bedrag is de wettelijke handelsrente verschuldigd en buitengerechtelijke incassokosten komen voor rekening van de klant.",
        "Advizier mag de percentages aanpassen met een aankondiging van ten minste 30 dagen. De klant kan de overeenkomst dan opzeggen voordat de wijziging ingaat.",
      ],
    },
    {
      heading: "Looptijd en opzeggen",
      paragraphs: [
        "De overeenkomst geldt voor onbepaalde tijd. Beide partijen kunnen per maand opzeggen: wie vóór de eerste van een maand opzegt, beëindigt de samenwerking op de laatste dag van de lopende maand. De fee over die maand blijft verschuldigd.",
        "Opzeggen kan via WhatsApp, Slack of e-mail. Advizier bevestigt de ontvangst en de einddatum.",
        "Advizier mag de overeenkomst direct beëindigen als de klant na een herinnering niet betaalt, in strijd handelt met de wet of met het beleid van Google, of als de accounts niet meer toegankelijk zijn.",
        "Bij het einde van de samenwerking verwijdert Advizier de eigen scripts, sheets en labels, de koppeling met het managersaccount en de gebruikers van Advizier uit de accounts en tools van de klant. De klant houdt de accounts, de campagnes en alle data. Advizier levert een laatste maandrapport en een laatste factuur.",
      ],
    },
    {
      heading: "Aansprakelijkheid",
      paragraphs: [
        "Advizier is niet aansprakelijk voor beslissingen van Google en andere platformen, zoals afkeuringen, schorsingen, beleidswijzigingen en het opschorten of sluiten van accounts, en niet voor storingen of wijzigingen in Google Ads, Merchant Center, Shopify, ProfitMetrics of andere tools.",
        "Advizier is niet aansprakelijk voor schade die voortkomt uit onjuiste of onvolledige informatie van de klant, uit fouten in de feed, de webshop, de conversiemeting of de kostprijzen die de klant aanlevert, of uit het niet opvolgen van adviezen.",
        "Advizier is nooit aansprakelijk voor indirecte schade, zoals gederfde omzet of winst, verloren data of reputatieschade, en niet voor het uitgegeven advertentiebudget. Deze beperkingen gelden niet bij opzet of bewuste roekeloosheid van Advizier.",
        "Advizier hoeft niet na te komen zolang overmacht dat verhindert, waaronder storingen bij Google, Shopify of andere leveranciers, internet- en stroomstoringen en ziekte.",
      ],
    },
    {
      heading: "Vertrouwelijkheid en gegevens",
      paragraphs: [
        "Partijen behandelen elkaars vertrouwelijke informatie, zoals accountgegevens, cijfers, marges en werkwijzen, vertrouwelijk en delen die niet met derden, behalve als dat nodig is voor de dienst.",
        "Advizier gebruikt de accountdata van de klant alleen voor het werk aan het account en voor de rapportages aan de klant. Hoe Advizier met persoonsgegevens omgaat, staat in de privacyverklaring.",
        "Advizier mag geanonimiseerde resultaten en cijfers, zonder naam of herkenbare gegevens van de klant of de webshop, gebruiken in eigen communicatie, tenzij de klant daar bezwaar tegen maakt.",
      ],
    },
    {
      heading: "Slotbepalingen",
      paragraphs: [
        "Advizier mag deze voorwaarden wijzigen. Wijzigingen worden ten minste 30 dagen vooraf aangekondigd via het gebruikelijke contactkanaal; de klant kan tot de ingangsdatum opzeggen.",
        "Op de overeenkomst is Nederlands recht van toepassing. Geschillen worden voorgelegd aan de bevoegde rechter in het arrondissement Oost-Brabant, tenzij partijen er samen uitkomen.",
        "Blijkt een bepaling uit deze voorwaarden niet geldig, dan blijven de overige bepalingen gelden en wordt de ongeldige bepaling vervangen door een geldige die zo dicht mogelijk bij de bedoeling komt.",
      ],
    },
  ],
};
