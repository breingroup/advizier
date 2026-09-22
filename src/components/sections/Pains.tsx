import { pains } from "@/content/home";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/Reveal";

export function Pains() {
  return (
    <Section tone="light">
      <Reveal>
        <SectionHeading title={pains.title} accent={pains.titleAccent} label={pains.label} tone="light" />
      </Reveal>
      <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
        {pains.items.map((item, i) => (
          <Reveal key={item.title} delay={i * 100} className="flex flex-col gap-4 border-t border-line pt-6">
            <h3 className="font-heading text-[24px] font-bold leading-[1.15] tracking-[-0.01em] md:text-[26px]">
              {item.title}
            </h3>
            <p className="text-[16px] leading-[1.6] text-soft">{item.text}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
