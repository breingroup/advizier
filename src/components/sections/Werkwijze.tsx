import { werkwijze } from "@/content/home";
import { Section, SectionHeading } from "@/components/ui/Section";

export function Werkwijze() {
  return (
    <Section id="werkwijze" tone="dark">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
        <div className="flex flex-col gap-8">
          <SectionHeading
            title={werkwijze.title}
            accent={werkwijze.titleAccent}
            label={werkwijze.label}
            tone="dark"
          />
          <p className="max-w-[480px] text-[18px] leading-[1.6] text-body-dark">{werkwijze.intro}</p>
        </div>
        <ol className="flex flex-col">
          {werkwijze.steps.map((step, i) => (
            <li
              key={step.title}
              className="grid gap-4 border-t border-line-dark py-7 md:grid-cols-[64px_minmax(0,1fr)] md:gap-6"
            >
              <div className="font-heading text-[15px] font-bold text-accent">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-heading text-[22px] font-bold leading-[1.2] tracking-[-0.01em] md:text-[24px]">
                  {step.title}
                </h3>
                <p className="max-w-[560px] text-[16px] leading-[1.6] text-muted">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
