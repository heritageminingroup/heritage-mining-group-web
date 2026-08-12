import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "heritagemininggroup.com";
  const protocol = host.includes("localhost") ? "http" : "https";
  const origin = `${protocol}://${host}`;

  return {
    title: {
      default: "Heritage Mining Group | Proyectos Mineros en Mendoza",
      template: "%s | Heritage Mining Group",
    },
    description:
      "Portafolio de exploración minera en Malargüe, Mendoza, con proyectos de cobre, hierro, manganeso, asfaltita, carbón y azufre.",
    keywords: [
      "Heritage Mining Group",
      "exploración minera Argentina",
      "proyectos mineros Malargüe",
      "minería Mendoza",
      "mineral exploration Mendoza",
    ],
    openGraph: {
      type: "website",
      locale: "es_AR",
      siteName: "Heritage Mining Group",
      title: "Heritage Mining Group",
      description: "Explorando el potencial geológico del sur de Mendoza.",
      images: [{
        url: `${origin}/og.png`,
        width: 1200,
        height: 630,
        alt: "Heritage Mining Group — exploración mineral en el sur de Mendoza",
      }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Heritage Mining Group",
      description: "Explorando el potencial geológico del sur de Mendoza.",
      images: [`${origin}/og.png`],
    },
    robots: { index: true, follow: true },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
