# Advizier — website

Marketing site for Advizier (Google Ads for dropship stores). One long page in the adship.nl structure, plus privacy and terms pages.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · self-hosted fonts (Fustat, Inter, Cinzel) · deployed on Vercel from GitHub.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build, also runs type-checking
npm run lint
```

## First push and deploy

```bash
git clone https://github.com/breingroup/advizier.git
cd advizier
# unzip the project files into this folder, then:
npm install
git add .
git commit -m "Initial Advizier site"
git push -u origin main
```

Then in Vercel: **Add New → Project → import `breingroup/advizier`**. Framework preset is detected as Next.js; no settings needed. From then on every push to `main` deploys, and every other branch gets a preview URL.

## Where to edit what

| What | File |
|---|---|
| Contact details, WhatsApp number, legal entity, nav | `src/content/site.ts` |
| Homepage copy (hero, pains, werkwijze, fee, voor wie, CTA) | `src/content/home.ts` |
| FAQ (also feeds the FAQ structured data) | `src/content/faq.ts` |
| Privacy & terms text | `src/content/legal.ts` |
| Colours, fonts, background utilities | `src/app/globals.css` |
| Logo / emblem (vector) | `src/components/Logo.tsx` |
| Favicon | `src/app/icon.svg` |
| Share image | `public/og.png` |

Sections live in `src/components/sections/`, one file each, in the order used in `src/app/page.tsx`.

## Before launch — placeholders to fill

Search the `src/content` folder for `TODO`:

- [ ] `site.whatsapp.number` — the WhatsApp Business number (digits only, e.g. `31612345678`). Until it's set, every WhatsApp button links to the contact section and the contact card says WhatsApp is coming.
- [ ] `site.email`, `site.company.*` — footer and legal pages.
- [ ] `voorWie` and `faq` — the minimum monthly ad spend (`€[X]`).
- [ ] `fee.points` / `faq` — confirm the notice period ("per maand opzegbaar").
- [ ] `eigenStores.intro` — check the wording about your own stores.
- [ ] `resultaten` — real case numbers, then set `enabled: true`.
- [ ] `faq.host` — name, role, and a photo (`src/components/sections/Faq.tsx`).
- [ ] `legal.ts` — real privacy and terms text.
- [ ] `src/components/icons.tsx` — swap the chat glyph for the official WhatsApp icon (Meta brand resources).

## Tracking

Set `NEXT_PUBLIC_GTM_ID` (Vercel → Project → Settings → Environment Variables) to load Google Tag Manager. The site then:

- sets Consent Mode v2 defaults to `denied` before GTM loads,
- shows the cookie banner once; the choice is stored in `localStorage` (`advizier-consent`) and pushed as a consent update,
- pushes `whatsapp_click` (with `location`: nav / hero / fee / contact) to the dataLayer on every WhatsApp button, ready to be mapped to a GA4 event and a Google Ads conversion in GTM.

Without the variable nothing loads and no banner is shown.

## Domain

Set `NEXT_PUBLIC_SITE_URL` to the production URL (no trailing slash) once the domain is decided; it drives canonical URLs, the sitemap and Open Graph. Add the domain in Vercel → Project → Settings → Domains and point DNS as instructed there.
