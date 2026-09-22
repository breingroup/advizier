"use client";

import { whatsappConnected, whatsappHref } from "@/lib/whatsapp";
import { ArrowIcon, ChatIcon } from "@/components/icons";

type Props = {
  label: string;
  /** Where on the page the button sits; sent along with the click event for GA4/Google Ads. */
  location: string;
  size?: "sm" | "lg";
  className?: string;
};

export function WhatsAppButton({ label, location, size = "sm", className = "" }: Props) {
  const href = whatsappHref();
  const sizing =
    size === "lg"
      ? "h-14 px-7 text-[17px] gap-3"
      : "h-11 px-5 text-[15px] gap-2.5";

  return (
    <a
      href={href}
      target={whatsappConnected ? "_blank" : undefined}
      rel={whatsappConnected ? "noopener noreferrer" : undefined}
      onClick={() => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "whatsapp_click",
          location,
          whatsapp_connected: whatsappConnected,
        });
      }}
      className={`inline-flex items-center rounded-pill bg-blue font-semibold text-white transition-[background-color,box-shadow,translate] duration-300 hover:-translate-y-0.5 hover:bg-blue-hover hover:shadow-[0_14px_40px_-12px_rgba(6,6,234,0.8)] active:translate-y-0 ${sizing} ${className}`}
    >
      <ChatIcon size={size === "lg" ? 20 : 18} />
      <span>{label}</span>
      {size === "lg" ? <ArrowIcon /> : null}
    </a>
  );
}
