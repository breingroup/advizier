import Link from "next/link";
import { Logo } from "@/components/Logo";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { site } from "@/content/site";
import { hero } from "@/content/home";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line-dark bg-ground/80 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-[1248px] items-center justify-between gap-6 px-6">
        <Link href="/" aria-label="Advizier, naar boven" className="shrink-0">
          <Logo tone="dark" size={30} />
        </Link>
        <nav aria-label="Hoofdmenu" className="hidden items-center gap-9 text-[15px] font-medium lg:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-muted transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <WhatsAppButton label={hero.primaryCta} location="nav" />
      </div>
    </header>
  );
}
