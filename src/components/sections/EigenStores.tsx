import { eigenStores } from "@/content/home";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Emblem } from "@/components/Logo";

export function EigenStores() {
  return (
    <Section tone="light" line>
      <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
        <div className="flex flex-col gap-8">
          <SectionHeading
            title={eigenStores.title}
            accent={eigenStores.titleAccent}
            label={eigenStores.label}
            tone="light"
          />
          <p className="max-w-[480px] text-[18px] leading-[1.6] text-soft">{eigenStores.intro}</p>
        </div>
        <ul className="flex flex-col gap-4">
          {eigenStores.points.map((p) => (
            <li
              key={p.title}
              className="grid gap-4 rounded-2xl border border-line bg-white p-6 md:grid-cols-[40px_minmax(0,1fr)] md:gap-5 md:p-7"
            >
              <Emblem tone="light" size={40} />
              <div className="flex flex-col gap-2">
                <h3 className="font-heading text-[20px] font-bold leading-[1.25] tracking-[-0.01em] md:text-[22px]">
                  {p.title}
                </h3>
                <p className="text-[16px] leading-[1.6] text-soft">{p.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
