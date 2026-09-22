import Image from "next/image";
import { partners } from "@/content/home";
import { Reveal } from "@/components/Reveal";

/** Logo strip; rendered inside the hero section so the background stays continuous. */
export function Partners() {
  return (
    <div className="relative border-t border-line-dark">
      <Reveal className="mx-auto flex max-w-[1248px] flex-col items-center gap-7 px-6 py-10 md:flex-row md:justify-between md:gap-10">
        <div className="shrink-0 text-[12px] font-semibold uppercase tracking-[0.16em] text-muted">
          {partners.label}
        </div>
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:justify-end md:gap-x-12">
          {partners.items.map((p) => (
            <li key={p.name} className="flex items-center opacity-75 transition-[opacity,translate] duration-300 hover:-translate-y-0.5 hover:opacity-100">
              <Image
                src={p.src}
                alt={p.name}
                width={p.width}
                height={p.height}
                unoptimized
                className="h-6 w-auto md:h-7"
              />
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}
