import { site } from "@/content/site";
import { faq } from "@/content/faq";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    logo: `${site.url}/icon.svg`,
    description: site.description,
    ...(site.email ? { email: site.email } : {}),
    areaServed: "NL",
  };
}

export function faqJsonLd(items: readonly { q: string; a: string }[] = faq.items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}
