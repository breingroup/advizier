/**
 * Central site configuration.
 * Everything marked TODO is a placeholder — fill it in before going live.
 */
export const site = {
  name: "Advizier",
  tagline: "Google Ads voor e-com stores",
  description:
    "Advizier beheert Google Ads voor e-com stores op Shopify. Je betaalt een percentage van je ad spend dat daalt naarmate je groeit. Geen vaste fee, geen performance fee.",

  // TODO: set the production domain once it's decided (used for canonical URLs, sitemap and Open Graph).
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://advizier.vercel.app",

  whatsapp: {
    // TODO: WhatsApp Business number in international format, digits only (e.g. "31612345678").
    // While this is empty every WhatsApp button links to the contact section instead.
    number: "31682078776",
    message:
      "Hoi Advizier, ik run een e-com store en wil Google Ads laten schalen. Kunnen we even schakelen?",
  },

  // TODO: contact e-mail shown in the footer and used as fallback while WhatsApp is not connected.
  email: "",

  // Shown as text in the footer and on the contact card, with a tel: link.
  phone: { display: "+31 6 82 07 87 76", href: "tel:+31682078776" },

  company: {
    // TODO: legal entity details for the footer and the legal pages.
    legalName: "",
    kvk: "",
    btw: "",
    address: "",
  },

  nav: [
    { label: "Hoe we werken", href: "#werkwijze" },
    { label: "De fee", href: "#fee" },
    { label: "Voor wie", href: "#voor-wie" },
    { label: "FAQ", href: "#faq" },
  ],

  // Optional tracking. Set NEXT_PUBLIC_GTM_ID in Vercel (Project → Settings → Environment Variables).
  gtmId: process.env.NEXT_PUBLIC_GTM_ID ?? "",
} as const;
