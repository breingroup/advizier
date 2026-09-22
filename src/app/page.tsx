import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Pains } from "@/components/sections/Pains";
import { Werkwijze } from "@/components/sections/Werkwijze";
import { EigenStores } from "@/components/sections/EigenStores";
import { Resultaten } from "@/components/sections/Resultaten";
import { Fee } from "@/components/sections/Fee";
import { VoorWie } from "@/components/sections/VoorWie";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";
import { faqJsonLd, organizationJsonLd } from "@/lib/jsonld";
import { resultaten } from "@/content/home";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        {/* Tones alternate: dark, light, dark, light, (dark), light, dark, light, dark */}
        <Hero />
        <Pains />
        <Werkwijze />
        <EigenStores />
        <Resultaten />
        <Fee line={!resultaten.enabled} />
        <VoorWie />
        <Faq />
        <Cta />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }}
      />
    </>
  );
}
