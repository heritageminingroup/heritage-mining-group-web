import type { Metadata } from "next";
import { HomePage } from "../components/HomePage";

export const metadata: Metadata = {
  title: { absolute: "Heritage Mining Group | Mineral Projects in Mendoza" },
  description:
    "Mineral exploration portfolio in Malargüe, Mendoza, with projects focused on copper, iron, manganese, asphaltite, coal and sulfur.",
  alternates: {
    canonical: "/en",
    languages: { es: "/", en: "/en" },
  },
};

export default function EnglishHome() {
  return <HomePage locale="en" />;
}
