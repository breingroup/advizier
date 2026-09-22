import Link from "next/link";
import { Logo } from "@/components/Logo";
import { site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();
  const legal = [site.company.legalName || site.name, site.company.kvk ? `KVK ${site.company.kvk}` : null]
    .filter(Boolean)
    .join(" · ");

  return (
    <footer className="border-t border-line-dark bg-ground text-white">
      <div className="mx-auto flex max-w-[1248px] flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <Link href="/" aria-label="Advizier">
          <Logo tone="dark" size={24} />
        </Link>
        <div className="text-[13px] text-muted">
          © {year} {legal}
          {site.email ? (
            <>
              {" · "}
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </>
          ) : null}
        </div>
        <nav aria-label="Juridisch" className="flex gap-6 text-[13px] font-medium">
          <Link href="/privacy" className="text-accent hover:text-white">
            Privacyverklaring
          </Link>
          <Link href="/voorwaarden" className="text-accent hover:text-white">
            Algemene voorwaarden
          </Link>
        </nav>
      </div>
    </footer>
  );
}
