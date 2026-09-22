import { hero } from "@/content/home";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CheckIcon } from "@/components/icons";
import { Backdrop } from "@/components/ui/Section";
import { Reveal } from "@/components/Reveal";
import { Partners } from "@/components/sections/Partners";

export function Hero() {
  return (
    <section id="top" className="relative bg-ground text-white">
      <Backdrop tone="dark" raster glow="right" />
      <div className="relative mx-auto grid max-w-[1248px] gap-16 px-6 pb-24 pt-20 md:pt-28 lg:grid-cols-[minmax(0,1fr)_500px] lg:items-center lg:gap-20 lg:pb-32">
        <div className="flex max-w-[680px] flex-col gap-7">
          <Reveal>
            <div className="text-[12px] font-semibold uppercase tracking-[0.18em] text-accent">
              {hero.eyebrow}
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-heading text-[48px] font-extrabold leading-[1.02] tracking-[-0.02em] md:text-[68px] lg:text-[76px]">
              {hero.title}
              <br />
              <span className="text-accent">{hero.titleAccent}</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="max-w-[600px] text-[18px] leading-[1.55] text-body-dark md:text-[19px]">
              {hero.intro}
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-1 flex flex-wrap items-center gap-x-7 gap-y-4">
              <WhatsAppButton label={hero.primaryCta} location="hero" size="lg" />
              <a
                href="#werkwijze"
                className="text-[16px] font-medium text-white underline decoration-line-dark underline-offset-[6px] transition-colors hover:decoration-accent"
              >
                {hero.secondaryCta}
              </a>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <ul className="mt-2 flex flex-wrap gap-x-6 gap-y-2 text-[14px] text-muted">
              {hero.proofs.map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <CheckIcon className="text-accent" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <FeeCard />
        </Reveal>
      </div>
      <Partners />
    </section>
  );
}

/** The tilted white card: rising ad spend against a fee percentage that steps down. No numbers on purpose. */
function FeeCard() {
  return (
    <div className="mx-auto w-full max-w-[500px] rotate-2 rounded-[22px] bg-white p-6 text-ink shadow-[0_40px_90px_rgba(0,0,0,0.55),0_0_0_1px_rgba(255,255,255,0.06)] md:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-soft">
          {hero.card.label}
        </div>
        <div className="flex items-center gap-4 text-[12px] text-soft">
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-[3px] w-[18px] rounded-sm bg-blue" />
            {hero.card.legendSpend}
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block w-[18px] border-t-[3px] border-dashed border-ink" />
            {hero.card.legendFee}
          </span>
        </div>
      </div>
      <svg viewBox="0 0 444 200" className="mt-5 block h-auto w-full" fill="none" aria-hidden="true">
        <path d="M0 40H444M0 100H444M0 160H444" stroke="#E6E6F0" strokeWidth="1" />
        <path
          d="M0 172C60 168 110 150 160 132C210 114 250 98 300 74C350 50 400 28 444 16"
          stroke="#0606EA"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M0 46H150C154 46 156 48 156 52V96C156 100 158 102 162 102H298C302 102 304 104 304 108V146C304 150 306 152 310 152H444"
          stroke="#0A0A12"
          strokeWidth="2.5"
          strokeDasharray="7 6"
          strokeLinecap="round"
        />
        <circle cx="444" cy="16" r="5" fill="#0606EA" />
        <circle cx="444" cy="152" r="5" fill="#0A0A12" />
      </svg>
      <p className="mt-4 text-[14px] leading-relaxed text-soft">{hero.card.caption}</p>
    </div>
  );
}
