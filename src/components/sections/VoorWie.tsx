import { voorWie } from "@/content/home";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CheckIcon, CrossIcon } from "@/components/icons";

export function VoorWie() {
  return (
    <Section id="voor-wie" tone="dark">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
        <SectionHeading
          title={voorWie.title}
          accent={voorWie.titleAccent}
          label={voorWie.label}
          tone="dark"
        />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-7 text-ink shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
            <h3 className="font-heading text-[22px] font-bold">{voorWie.yes.heading}</h3>
            <ul className="mt-5 flex flex-col gap-4">
              {voorWie.yes.items.map((item) => (
                <li key={item} className="flex gap-3 text-[16px] leading-[1.55]">
                  <CheckIcon size={18} className="mt-1 shrink-0 text-blue" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-7">
            <h3 className="font-heading text-[22px] font-bold text-muted">{voorWie.no.heading}</h3>
            <ul className="mt-5 flex flex-col gap-4">
              {voorWie.no.items.map((item) => (
                <li key={item} className="flex gap-3 text-[16px] leading-[1.55] text-muted">
                  <CrossIcon size={18} className="mt-1 shrink-0 text-soft" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
