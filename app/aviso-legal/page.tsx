import type { Metadata } from "next";
import { LegalPage } from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Aviso legal y privacidad",
  description: "Alcance de la información pública, divulgación técnica y privacidad del sitio de Heritage Mining Group.",
  alternates: {
    canonical: "/aviso-legal",
    languages: { es: "/aviso-legal", en: "/en/legal-notice" },
  },
};

export default function SpanishLegalNotice() {
  return <LegalPage locale="es" />;
}
