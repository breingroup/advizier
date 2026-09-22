"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { site } from "@/content/site";

const KEY = "advizier-consent";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function readChoice(): string | null {
  try {
    return localStorage.getItem(KEY);
  } catch {
    return null;
  }
}

// During server rendering we pretend a choice exists, so the banner never flashes before hydration.
function readServerChoice(): string | null {
  return "pending";
}

/** Cookie banner for Consent Mode v2. Shows only when tracking is configured and no choice is stored yet. */
export function ConsentBanner() {
  const stored = useSyncExternalStore(subscribe, readChoice, readServerChoice);
  const [dismissed, setDismissed] = useState(false);

  const visible = Boolean(site.gtmId) && stored === null && !dismissed;
  if (!visible) return null;

  const choose = (value: "granted" | "denied") => {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* private mode: nothing to store */
    }
    window.gtag?.("consent", "update", {
      ad_storage: value,
      ad_user_data: value,
      ad_personalization: value,
      analytics_storage: value,
    });
    setDismissed(true);
  };

  return (
    <div
      role="dialog"
      aria-labelledby="consent-title"
      data-tone="dark"
      data-elevated="true"
      className="glow-card fixed bottom-4 left-4 right-4 z-50 bg-ground p-5 text-white md:left-6 md:right-auto md:max-w-[420px]"
    >
      <div id="consent-title" className="font-heading text-[18px] font-bold">
        Cookies voor statistieken
      </div>
      <p className="mt-2 text-[14px] leading-relaxed text-body-dark">
        We meten met Google Analytics en Google Ads hoe de site gebruikt wordt, alleen als je akkoord
        gaat. Meer in de{" "}
        <Link href="/privacy" className="text-accent underline underline-offset-4">
          privacyverklaring
        </Link>
        .
      </p>
      <div className="mt-4 flex gap-3">
        <button
          type="button"
          onClick={() => choose("granted")}
          className="h-11 flex-1 rounded-pill bg-blue px-5 text-[15px] font-semibold text-white transition-colors hover:bg-blue-hover"
        >
          Accepteren
        </button>
        <button
          type="button"
          onClick={() => choose("denied")}
          className="h-11 flex-1 rounded-pill border border-line-dark px-5 text-[15px] font-semibold text-white transition-colors hover:bg-white/5"
        >
          Weigeren
        </button>
      </div>
    </div>
  );
}
