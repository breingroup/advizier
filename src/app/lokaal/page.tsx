import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { LokaalHero } from "@/components/lokaal/LokaalHero";
import { LokaalWerkt } from "@/components/lokaal/LokaalWerkt";
import { LokaalKosten } from "@/components/lokaal/LokaalKosten";
import { Werkwijze } from "@/components/sections/Werkwijze";
import { VoorWie } from "@/components/sections/VoorWie";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";
import { faqJsonLd } from "@/lib/jsonld";
import {
  lokaalCta,
  lokaalFaq,
  lokaalMeta,
  lokaalNav,
  lokaalStappen,
  lokaalVoorWie,
  lokaalWhatsapp,
} from "@/content/lokaal";

export const metadata: Metadata = {
  title: lokaalMeta.title,
  description: lokaalMeta.description,
  alternates: { canonical: "/lokaal" },
  openGraph: {
    title: `${lokaalMeta.title} | Advizier`,
    description: lokaalMeta.description,
  },
};

export default function LokaalPage() {
  return (
    <>
      <Nav links={lokaalNav} whatsappMessage={lokaalWhatsapp} />
      <main className="flex-1">
        {/* Tones alternate: dark, light, dark, light, dark, light, dark */}
        <LokaalHero />
        <LokaalWerkt />
        <Werkwijze data={lokaalStappen} id="wat-wij-doen" />
        <LokaalKosten />
        <VoorWie data={lokaalVoorWie} />
        <Faq data={lokaalFaq} />
        <Cta data={lokaalCta} message={lokaalWhatsapp} />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(lokaalFaq.items)) }}
      />
    </>
  );
}
