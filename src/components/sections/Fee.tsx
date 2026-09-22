import { fee } from "@/content/home";
import { Section, SectionHeading } from "@/components/ui/Section";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { hero } from "@/content/home";

export function Fee({ line = false }: { line?: boolean }) {
  return (
    <Section id="fee" tone="light" line={line}>
      <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
        <div className="flex flex-col gap-8">
          <SectionHeading title={fee.title} accent={fee.titleAccent} label={fee.label} tone="light" />
          <p className="max-w-[480px] text-[18px] leading-[1.6] text-soft">{fee.intro}</p>
          <div>
            <WhatsAppButton label={hero.primaryCta} location="fee" size="lg" />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <dl className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {fee.points.map((p) => (
              <div key={p.title} className="flex flex-col gap-2 bg-white p-6 md:p-7">
                <dt className="font-heading text-[20px] font-bold leading-[1.25] tracking-[-0.01em]">
                  {p.title}
                </dt>
                <dd className="text-[15px] leading-[1.6] text-soft">{p.text}</dd>
              </div>
            ))}
          </dl>
          <p className="text-[15px] leading-[1.6] text-soft">{fee.closing}</p>
        </div>
      </div>
    </Section>
  );
}
