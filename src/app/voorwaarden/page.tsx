import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { voorwaarden } from "@/content/legal";

export const metadata: Metadata = {
  title: voorwaarden.title,
  robots: { index: false },
  alternates: { canonical: "/voorwaarden" },
};

export default function VoorwaardenPage() {
  return <LegalPage {...voorwaarden} />;
}
