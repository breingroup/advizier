import Link from "next/link";
import { voorWie as defaultData } from "@/content/home";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ArrowIcon, CheckIcon, CrossIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { GlowCard } from "@/components/GlowCard";

type Aside = { title: string; text: string; link: string; href: string };
type VoorWieData = {
  title: string;
  titleAccent: string;
  label: string;
  yes: { heading: string; items: readonly string[] };
  no: { heading: string; items: readonly string[] };
  aside?: Aside;
};

export function VoorWie({ data = defaultData, id = "voor-wie" }: { data?: VoorWieData; id?: string }) {
  const voorWie = data;
  return (
    <Section id={id} tone="dark" raster>
      <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
        <Reveal>
          <SectionHeading
            title={voorWie.title}
            accent={voorWie.titleAccent}
            label={voorWie.label}
            tone="dark"
          />
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal delay={100}>
            <GlowCard tone="light" elevated className="bg-white p-7 text-ink">
              <h3 className="font-heading text-[22px] font-bold">{voorWie.yes.heading}</h3>
              <ul className="mt-5 flex flex-col gap-4">
                {voorWie.yes.items.map((item) => (
                  <li key={item} className="flex gap-3 text-[16px] leading-[1.55]">
                    <CheckIcon size={18} className="mt-1 shrink-0 text-blue" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </GlowCard>
          </Reveal>
          <Reveal delay={200} className="p-7">
            <h3 className="font-heading text-[22px] font-bold text-muted">{voorWie.no.heading}</h3>
            <ul className="mt-5 flex flex-col gap-4">
              {voorWie.no.items.map((item) => (
                <li key={item} className="flex gap-3 text-[16px] leading-[1.55] text-muted">
                  <CrossIcon size={18} className="mt-1 shrink-0 text-soft" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
      {voorWie.aside ? (
        <Reveal delay={120} className="mt-12">
          <GlowCard
            tone="dark"
            className="flex flex-col gap-4 bg-white/[0.03] p-6 md:flex-row md:items-center md:justify-between md:gap-10 md:p-7"
          >
            <div className="flex flex-col gap-1.5">
              <h3 className="font-heading text-[20px] font-bold leading-[1.25] md:text-[22px]">
                {voorWie.aside.title}
              </h3>
              <p className="max-w-[640px] text-[15px] leading-[1.6] text-muted">{voorWie.aside.text}</p>
            </div>
            <Link
              href={voorWie.aside.href}
              className="inline-flex shrink-0 items-center gap-2 text-[16px] font-semibold text-accent transition-colors hover:text-white"
            >
              {voorWie.aside.link}
              <ArrowIcon />
            </Link>
          </GlowCard>
        </Reveal>
      ) : null}
    </Section>
  );
}
