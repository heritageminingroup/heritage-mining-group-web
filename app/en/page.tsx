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
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Heritage Mining Group",
    title: "Heritage Mining Group | Mineral Projects in Mendoza",
    description: "Exploring the geological potential of southern Mendoza through progressive, technically grounded project development.",
    url: "/en",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "Heritage Mining Group - mineral exploration in southern Mendoza" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Heritage Mining Group | Mineral Projects in Mendoza",
    description: "Exploring the geological potential of southern Mendoza.",
    images: ["/og.png"],
  },
};

export default function EnglishHome() {
  return <HomePage locale="en" />;
}
