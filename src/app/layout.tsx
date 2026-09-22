import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { site } from "@/content/site";
import { Analytics, AnalyticsNoScript, ConsentDefaults } from "@/components/Analytics";
import { ConsentBanner } from "@/components/ConsentBanner";

// Self-hosted fonts (no requests to Google at runtime).
const fustat = localFont({
  src: "./fonts/Fustat.woff2",
  weight: "200 800",
  variable: "--font-fustat",
  display: "swap",
});

const inter = localFont({
  src: "./fonts/Inter.woff2",
  weight: "100 900",
  variable: "--font-inter",
  display: "swap",
});

const poppins = localFont({
  src: [
    { path: "./fonts/Poppins-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Poppins-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.tagline} | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: site.name,
    title: `${site.tagline} | ${site.name}`,
    description: site.description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  themeColor: "#050510",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${fustat.variable} ${inter.variable} ${poppins.variable} h-full`}>
      <head>
        {/* Marks the document as JS-capable so reveal animations only hide content when they can also show it. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.setAttribute('data-js','')" }} />
        <ConsentDefaults />
      </head>
      <body className="flex min-h-full flex-col">
        <Analytics />
        <AnalyticsNoScript />
        {children}
        <ConsentBanner />
      </body>
    </html>
  );
}
