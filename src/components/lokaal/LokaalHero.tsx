import { lokaalHero, lokaalWhatsapp } from "@/content/lokaal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Backdrop } from "@/components/ui/Section";
import { Reveal } from "@/components/Reveal";
import { GlowCard } from "@/components/GlowCard";
import { PhoneIcon, SearchIcon } from "@/components/icons";

export function LokaalHero() {
  return (
    <section id="top" className="relative bg-ground text-white">
      <Backdrop tone="dark" raster glow="right" />
      <div className="relative mx-auto grid max-w-[1248px] gap-16 px-6 pb-24 pt-20 md:pt-28 lg:grid-cols-[minmax(0,1fr)_520px] lg:items-center lg:gap-20 lg:pb-32">
        <div className="flex max-w-[680px] flex-col gap-7">
          <Reveal>
            <div className="text-[12px] font-semibold uppercase tracking-[0.18em] text-accent">
              {lokaalHero.eyebrow}
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-heading text-[44px] font-extrabold leading-[1.04] tracking-[-0.02em] md:text-[60px] lg:text-[66px]">
              {lokaalHero.title}
              <br />
              <span className="text-accent">{lokaalHero.titleAccent}</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="max-w-[600px] text-[18px] leading-[1.55] text-body-dark md:text-[19px]">
              {lokaalHero.intro}
            </p>
          </Reveal>
          <Reveal delay={220}>
            <ul className="flex flex-wrap gap-2.5">
              {lokaalHero.chips.map((chip, i) => (
                <li
                  key={chip}
                  className={`rounded-pill border px-4 py-2 text-[14px] font-medium ${
                    i === 0
                      ? "border-accent/60 bg-accent/20 text-white"
                      : "border-line-dark text-body-dark"
                  }`}
                >
                  {chip}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-1 flex flex-wrap items-center gap-x-7 gap-y-4">
              <WhatsAppButton
                label={lokaalHero.primaryCta}
                location="lokaal-hero"
                size="lg"
                message={lokaalWhatsapp}
              />
              <a
                href="#hoe-het-werkt"
                className="text-[16px] font-medium text-white underline decoration-line-dark underline-offset-[6px] transition-colors hover:decoration-accent"
              >
                {lokaalHero.secondaryCta}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <SearchMock />
        </Reveal>
      </div>
    </section>
  );
}

/** Illustration: a search result for a local trade, with the client on top. Not a real search page. */
function SearchMock() {
  const m = lokaalHero.mock;
  return (
    <GlowCard
      tone="light"
      elevated
      className="mx-auto w-full max-w-[520px] rounded-[22px] bg-white p-5 text-ink md:p-6"
    >
      <div className="flex items-center gap-3 rounded-pill border border-line bg-surface px-4 py-2.5 text-[15px] text-ink">
        <SearchIcon size={18} className="text-soft" />
        <span>{m.query}</span>
      </div>

      <div className="mt-5 rounded-2xl border border-line p-4 md:p-5">
        <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-soft">{m.sponsored}</div>
        <div className="mt-2 font-heading text-[18px] font-bold leading-snug text-blue md:text-[19px]">
          {m.title}
        </div>
        <div className="mt-0.5 text-[13px] text-soft">{m.url}</div>
        <p className="mt-2 text-[14px] leading-[1.55] text-ink">{m.text}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {m.buttons.map((b, i) => (
            <span
              key={b}
              className={`inline-flex items-center gap-1.5 rounded-pill px-3 py-1.5 text-[13px] font-semibold ${
                i === 0 ? "bg-blue text-white" : "border border-line text-ink"
              }`}
            >
              {i === 0 ? <PhoneIcon size={14} /> : null}
              {b}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-3 rounded-2xl border border-line/70 p-4 opacity-55 md:p-5">
        <div className="font-heading text-[16px] font-bold leading-snug text-ink">{m.competitorTitle}</div>
        <div className="mt-0.5 text-[13px] text-soft">{m.competitorUrl}</div>
        <p className="mt-1.5 text-[14px] leading-[1.55] text-soft">{m.competitorText}</p>
      </div>
    </GlowCard>
  );
}
