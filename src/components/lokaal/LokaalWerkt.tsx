import { lokaalWerkt } from "@/content/lokaal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/Reveal";
import { GlowCard } from "@/components/GlowCard";
import { MapPinIcon, PhoneIcon, SearchIcon } from "@/components/icons";

const icons = { search: SearchIcon, map: MapPinIcon, phone: PhoneIcon } as const;

export function LokaalWerkt() {
  return (
    <Section id="hoe-het-werkt" tone="light">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
        <div className="flex flex-col gap-8">
          <Reveal>
            <SectionHeading
              title={lokaalWerkt.title}
              accent={lokaalWerkt.titleAccent}
              label={lokaalWerkt.label}
              tone="light"
            />
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-[480px] text-[18px] leading-[1.6] text-soft">{lokaalWerkt.intro}</p>
          </Reveal>
        </div>
        <ul className="flex flex-col gap-4">
          {lokaalWerkt.cards.map((c, i) => {
            const Icon = icons[c.icon as keyof typeof icons] ?? SearchIcon;
            return (
              <li key={c.title}>
                <Reveal delay={i * 90}>
                  <GlowCard
                    tone="light"
                    className="grid gap-4 bg-white p-6 md:grid-cols-[44px_minmax(0,1fr)] md:gap-5 md:p-7"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface text-blue">
                      <Icon />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="font-heading text-[20px] font-bold leading-[1.25] tracking-[-0.01em] md:text-[22px]">
                        {c.title}
                      </h3>
                      <p className="text-[16px] leading-[1.6] text-soft">{c.text}</p>
                    </div>
                  </GlowCard>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
