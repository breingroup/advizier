import { pains } from "@/content/home";
import { Section, SectionHeading } from "@/components/ui/Section";

export function Pains() {
  return (
    <Section tone="dark" glow="left">
      <SectionHeading title={pains.title} accent={pains.titleAccent} label={pains.label} tone="dark" />
      <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
        {pains.items.map((item) => (
          <div key={item.title} className="flex flex-col gap-4 border-t border-line-dark pt-6">
            <h3 className="font-heading text-[24px] font-bold leading-[1.15] tracking-[-0.01em] md:text-[26px]">
              {item.title}
            </h3>
            <p className="text-[16px] leading-[1.6] text-muted">{item.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
