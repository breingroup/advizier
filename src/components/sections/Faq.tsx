import { faq } from "@/content/faq";
import { Section, SectionHeading } from "@/components/ui/Section";
import { PlusIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";

export function Faq() {
  return (
    <Section id="faq" tone="light">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
        <Reveal>
          <SectionHeading title={faq.title} accent={faq.titleAccent} label={faq.label} tone="light" />
        </Reveal>
        <Reveal delay={100} className="flex flex-col border-t border-line">
          {faq.items.map((item, i) => (
            <details key={item.q} className="group border-b border-line" open={i === 0}>
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 text-[18px] font-semibold leading-snug md:text-[20px]">
                <span>{item.q}</span>
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line text-blue transition-transform group-open:rotate-45"
                  aria-hidden="true"
                >
                  <PlusIcon size={14} />
                </span>
              </summary>
              <p className="max-w-[640px] pb-6 text-[16px] leading-[1.65] text-soft">{item.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
