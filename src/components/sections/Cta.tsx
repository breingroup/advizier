import { cta } from "@/content/home";
import { site } from "@/content/site";
import { whatsappConnected } from "@/lib/whatsapp";
import { Section, SectionHeading } from "@/components/ui/Section";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function Cta() {
  return (
    <Section id="contact" tone="dark" raster glow="right">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,6fr)_minmax(0,6fr)] lg:items-center lg:gap-20">
        <div className="flex flex-col gap-8">
          <SectionHeading title={cta.title} accent={cta.titleAccent} tone="dark" as="h2" />
          <p className="max-w-[520px] text-[18px] leading-[1.6] text-body-dark">{cta.intro}</p>
        </div>
        <div className="flex flex-col items-start gap-5 rounded-[22px] border border-line-dark bg-white/[0.03] p-8 md:p-10">
          {whatsappConnected ? (
            <WhatsAppButton label={cta.button} location="contact" size="lg" />
          ) : (
            <>
              <div className="inline-flex h-14 items-center rounded-pill border border-line-dark px-7 text-[17px] font-semibold text-muted">
                {cta.button}
              </div>
              <p className="text-[14px] text-muted">{cta.pending}</p>
            </>
          )}
          {site.email ? (
            <p className="text-[15px] text-muted">
              Liever mailen?{" "}
              <a href={`mailto:${site.email}`} className="text-white underline underline-offset-4">
                {site.email}
              </a>
            </p>
          ) : null}
        </div>
      </div>
    </Section>
  );
}
