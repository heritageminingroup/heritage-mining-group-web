import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "heritagemininggroup.com";
  const protocol = host.includes("localhost") ? "http" : "https";
  const origin = `${protocol}://${host}`;

  return {
    metadataBase: new URL(origin),
    title: {
      default: "Heritage Mining Group | Proyectos Mineros en Mendoza",
      template: "%s | Heritage Mining Group",
    },
    description:
      "Portafolio de exploración minera en Malargüe, Mendoza, con proyectos de cobre, hierro, manganeso, asfaltita, carbón y azufre.",
    alternates: {
      canonical: "/",
      languages: { es: "/", en: "/en" },
    },
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
        url: `${origin}/og-slate.png`,
        width: 1730,
        height: 909,
        alt: "Heritage Mining Group — exploración mineral en el sur de Mendoza",
      }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Heritage Mining Group",
      description: "Explorando el potencial geológico del sur de Mendoza.",
      images: [`${origin}/og-slate.png`],
    },
    robots: { index: true, follow: true },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Heritage Mining Group",
    url: "https://heritage-mining-group.lucianofugazzotto.chatgpt.site",
    email: "heritageminingroup@gmail.com",
    description: "Mineral project development platform focused on southern Mendoza, Argentina.",
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Malargüe, Mendoza, Argentina",
    },
    sameAs: ["https://www.linkedin.com/in/luciano-fugazzotto/"],
  };

  return (
    <html lang="es">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
        />
      </body>
    </html>
  );
}
