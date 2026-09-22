import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import type { LegalSection } from "@/content/legal";

export function LegalPage({
  title,
  updated,
  sections,
}: {
  title: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <Nav />
      <main className="flex-1 bg-white text-ink">
        <div className="mx-auto max-w-[760px] px-6 py-20 md:py-28">
          <Link href="/" className="text-[14px] font-medium text-blue hover:underline">
            ← Terug naar de homepage
          </Link>
          <h1 className="mt-8 font-heading text-[40px] font-extrabold leading-[1.05] tracking-[-0.02em] md:text-[52px]">
            {title}
          </h1>
          <p className="mt-4 text-[14px] text-soft">Laatst bijgewerkt: {updated}</p>
          <div className="mt-12 flex flex-col gap-10">
            {sections.map((s) => (
              <section key={s.heading} className="flex flex-col gap-3">
                <h2 className="font-heading text-[24px] font-bold">{s.heading}</h2>
                {s.paragraphs.map((p) => (
                  <p key={p} className="text-[16px] leading-[1.7] text-soft">
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
