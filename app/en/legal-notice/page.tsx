import type { Metadata } from "next";
import { LegalPage } from "../../components/LegalPage";

export const metadata: Metadata = {
  title: "Legal and privacy notice",
  description: "Public information scope, technical disclosure and privacy notice for the Heritage Mining Group website.",
  alternates: {
    canonical: "/en/legal-notice",
    languages: { es: "/aviso-legal", en: "/en/legal-notice" },
  },
};

export default function EnglishLegalNotice() {
  return <LegalPage locale="en" />;
}
