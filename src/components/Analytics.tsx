import Script from "next/script";
import { site } from "@/content/site";

/**
 * Google Tag Manager with Consent Mode v2.
 * Nothing renders until NEXT_PUBLIC_GTM_ID is set, so the site ships without tracking by default.
 * Consent starts as "denied" and is updated by <ConsentBanner /> (choice stored in localStorage).
 */

/** Inline in <head>, before anything else: sets the consent defaults gtag/GTM will honour. */
export function ConsentDefaults() {
  if (!site.gtmId) return null;
  const code = `
window.dataLayer = window.dataLayer || [];
function gtag(){ window.dataLayer.push(arguments); }
window.gtag = gtag;
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
  wait_for_update: 500
});
try {
  if (localStorage.getItem('advizier-consent') === 'granted') {
    gtag('consent', 'update', {
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
      analytics_storage: 'granted'
    });
  }
} catch (e) {}
`;
  return <script id="consent-defaults" dangerouslySetInnerHTML={{ __html: code }} />;
}

export function Analytics() {
  if (!site.gtmId) return null;
  return (
    <Script id="gtm" strategy="afterInteractive">{`
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
      var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
      j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${site.gtmId}');
    `}</Script>
  );
}

export function AnalyticsNoScript() {
  if (!site.gtmId) return null;
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${site.gtmId}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}
