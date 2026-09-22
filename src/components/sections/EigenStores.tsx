import { eigenStores } from "@/content/home";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/Reveal";
import { FlaskIcon, ShieldCheckIcon, TrendIcon } from "@/components/icons";

const icons = {
  shield: ShieldCheckIcon,
  trend: TrendIcon,
  flask: FlaskIcon,
} as const;

export function EigenStores() {
  return (
    <Section tone="light">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
        <div className="flex flex-col gap-8">
          <Reveal>
            <SectionHeading
              title={eigenStores.title}
              accent={eigenStores.titleAccent}
              label={eigenStores.label}
              tone="light"
            />
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-[480px] text-[18px] leading-[1.6] text-soft">{eigenStores.intro}</p>
          </Reveal>
        </div>
        <ul className="flex flex-col gap-4">
          {eigenStores.points.map((p, i) => {
            const Icon = icons[p.icon as keyof typeof icons] ?? ShieldCheckIcon;
            return (
              <li key={p.title}>
                <Reveal
                  delay={i * 90}
                  className="grid gap-4 rounded-2xl border border-line bg-white p-6 md:grid-cols-[44px_minmax(0,1fr)] md:gap-5 md:p-7"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface text-blue">
                    <Icon />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-heading text-[20px] font-bold leading-[1.25] tracking-[-0.01em] md:text-[22px]">
                      {p.title}
                    </h3>
                    <p className="text-[16px] leading-[1.6] text-soft">{p.text}</p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
