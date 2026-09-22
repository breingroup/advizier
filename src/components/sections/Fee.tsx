import { fee, hero } from "@/content/home";
import { Section, SectionHeading } from "@/components/ui/Section";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Reveal } from "@/components/Reveal";
import { GlowCard } from "@/components/GlowCard";

export function Fee({ line = false }: { line?: boolean }) {
  return (
    <Section id="fee" tone="light" line={line}>
      <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
        <div className="flex flex-col gap-8">
          <Reveal>
            <SectionHeading title={fee.title} accent={fee.titleAccent} label={fee.label} tone="light" />
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-[480px] text-[18px] leading-[1.6] text-soft">{fee.intro}</p>
          </Reveal>
          <Reveal delay={180}>
            <div>
              <WhatsAppButton label={hero.primaryCta} location="fee" size="lg" />
            </div>
          </Reveal>
        </div>
        <div className="flex flex-col gap-6">
          <dl className="grid gap-4 sm:grid-cols-2">
            {fee.points.map((p, i) => (
              <Reveal key={p.title} delay={120 + i * 80}>
                <GlowCard tone="light" className="flex h-full flex-col gap-2 bg-white p-6 md:p-7">
                  <dt className="font-heading text-[20px] font-bold leading-[1.25] tracking-[-0.01em]">
                    {p.title}
                  </dt>
                  <dd className="text-[15px] leading-[1.6] text-soft">{p.text}</dd>
                </GlowCard>
              </Reveal>
            ))}
          </dl>
          <Reveal delay={220}>
            <p className="text-[15px] leading-[1.6] text-soft">{fee.closing}</p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
