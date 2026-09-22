import { resultaten } from "@/content/home";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/Reveal";

/** Hidden until real numbers are filled in (content/home.ts → resultaten.enabled). */
export function Resultaten() {
  if (!resultaten.enabled) return null;

  return (
    <Section id="cases" tone="dark" raster>
      <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
        <div className="flex flex-col gap-8">
          <Reveal>
            <SectionHeading
              title={resultaten.title}
              accent={resultaten.titleAccent}
              label={resultaten.label}
              tone="dark"
            />
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-[440px] text-[16px] leading-[1.6] text-muted">{resultaten.intro}</p>
          </Reveal>
        </div>
        <ul className="flex flex-col">
          {resultaten.cases.map((c, i) => (
            <li key={c.store} className="border-t border-line-dark py-8">
              <Reveal delay={i * 90} className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
                <div className="font-heading text-[56px] font-extrabold leading-none tracking-[-0.03em] md:text-[72px]">
                  {c.revenue}
                </div>
                <div className="flex flex-col items-end gap-1">
                  <div className="font-heading text-[26px] font-bold text-accent">{c.growth}</div>
                  <div className="text-[13px] text-muted">
                    {c.store} · {c.note}
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
      <Reveal>
        <p className="mt-10 text-[13px] text-muted">{resultaten.footnote}</p>
      </Reveal>
    </Section>
  );
}
