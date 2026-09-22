import { site } from "@/content/site";

/** True once a WhatsApp Business number has been configured in content/site.ts. */
export const whatsappConnected = site.whatsapp.number.replace(/\D/g, "").length > 0;

/**
 * Click-to-chat link. Falls back to the contact section while no number is set,
 * so the buttons never point at a broken link.
 */
export function whatsappHref(): string {
  const digits = site.whatsapp.number.replace(/\D/g, "");
  if (!digits) return "#contact";
  const text = encodeURIComponent(site.whatsapp.message);
  return `https://wa.me/${digits}?text=${text}`;
}
