import { faq } from "@/content/faq";
import { Section, SectionHeading } from "@/components/ui/Section";
import { PlusIcon } from "@/components/icons";

export function Faq() {
  return (
    <Section id="faq" tone="light" line>
      <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
        <div className="flex flex-col gap-8">
          <SectionHeading title={faq.title} accent={faq.titleAccent} label={faq.label} tone="light" />
          <div className="flex items-center gap-5">
            {/* TODO: replace with a real photo (public/host.jpg) via next/image once available. */}
            <div className="h-[88px] w-[88px] shrink-0 rounded-2xl bg-surface" aria-hidden="true" />
            <div>
              <div className="font-heading text-[22px] font-bold">{faq.host.name}</div>
              <div className="text-[15px] text-soft">{faq.host.role}</div>
            </div>
          </div>
          <p className="max-w-[420px] text-[16px] leading-[1.6] text-soft">{faq.host.text}</p>
        </div>
        <div className="flex flex-col border-t border-line">
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
        </div>
      </div>
    </Section>
  );
}
