import { lokaalKosten } from "@/content/lokaal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/Reveal";
import { GlowCard } from "@/components/GlowCard";
import { Emblem } from "@/components/Logo";

export function LokaalKosten() {
  return (
    <Section id="kosten" tone="light">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
        <div className="flex flex-col gap-8">
          <Reveal>
            <SectionHeading
              title={lokaalKosten.title}
              accent={lokaalKosten.titleAccent}
              label={lokaalKosten.label}
              tone="light"
            />
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-[480px] text-[18px] leading-[1.6] text-soft">{lokaalKosten.intro}</p>
          </Reveal>
        </div>
        <div className="flex flex-col gap-4">
          <div className="grid gap-4 md:grid-cols-2">
            {lokaalKosten.cards.map((c, i) => (
              <Reveal key={c.title} delay={120 + i * 80}>
                <GlowCard tone="light" className="flex h-full flex-col gap-3 bg-white p-6 md:p-7">
                  <h3 className="font-heading text-[20px] font-bold leading-[1.25] tracking-[-0.01em] md:text-[22px]">
                    {c.title}
                  </h3>
                  {c.paragraphs.map((p) => (
                    <p key={p} className="text-[15px] leading-[1.6] text-soft">
                      {p}
                    </p>
                  ))}
                </GlowCard>
              </Reveal>
            ))}
          </div>
          <Reveal delay={300}>
            <GlowCard
              tone="light"
              className="flex flex-col gap-4 bg-surface p-6 md:flex-row md:items-center md:gap-6 md:p-7"
            >
              <Emblem tone="light" size={44} className="shrink-0" />
              <div className="flex flex-col gap-1.5">
                <h3 className="font-heading text-[18px] font-bold leading-[1.25]">{lokaalKosten.zelf.title}</h3>
                <p className="text-[15px] leading-[1.6] text-soft">{lokaalKosten.zelf.text}</p>
              </div>
            </GlowCard>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
