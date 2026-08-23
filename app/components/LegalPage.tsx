import { HtmlLanguage } from "./HtmlLanguage";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

type Locale = "es" | "en";

const legalContent = {
  es: {
    eyebrow: "Información pública",
    title: <>Aviso legal y <em>privacidad.</em></>,
    updated: "Última actualización: agosto de 2026",
    intro: "Este sitio presenta información corporativa general sobre Heritage Mining Group y su portafolio de proyectos minerales. Su contenido ha sido preparado para comunicación institucional y no sustituye una revisión técnica, legal, ambiental o financiera independiente.",
    sections: [
      ["Alcance de la información", "Las referencias geológicas, históricas y territoriales se utilizan como antecedentes para orientar la evaluación exploratoria. La información publicada no constituye una declaración de recursos minerales o reservas, un estudio de factibilidad, una estimación de valor, una promesa de resultados ni una recomendación de inversión."],
      ["Estado técnico de los proyectos", "Cada proyecto se presenta en función de su nivel público de conocimiento. No se publican tonelajes, leyes, recursos, reservas o proyecciones económicas sin documentación técnica vigente y divulgación apropiada."],
      ["Ubicación y confidencialidad", "Las ubicaciones se expresan únicamente a escala regional. El sitio no divulga coordenadas, polígonos, domicilios, acuerdos societarios, estrategias administrativas, información interna ni datos de terceros sin autorización."],
      ["Privacidad", "Heritage Mining Group no opera formularios ni una base de datos de visitantes dentro de este sitio. Los enlaces de correo abren la aplicación configurada en el dispositivo del usuario. Los servicios de alojamiento y las plataformas externas, incluido LinkedIn, pueden procesar datos técnicos conforme a sus propias políticas."],
      ["Enlaces y contenidos externos", "Los enlaces externos se incluyen como referencia y pueden estar sujetos a condiciones y políticas ajenas a Heritage Mining Group. La fotografía de paisaje utilizada en el sitio se acredita a su autor y plataforma de origen."],
    ],
    contact: "Consultas institucionales",
    contactText: "Para consultas sobre el contenido público del sitio o solicitudes de información corporativa:",
    back: "Volver al sitio",
  },
  en: {
    eyebrow: "Public information",
    title: <>Legal and <em>privacy notice.</em></>,
    updated: "Last updated: August 2026",
    intro: "This site presents general corporate information about Heritage Mining Group and its mineral project portfolio. Its content has been prepared for institutional communication and does not replace independent technical, legal, environmental or financial review.",
    sections: [
      ["Scope of information", "Geological, historical and territorial references are used as background to guide exploration evaluation. Published information does not constitute a mineral resource or reserve statement, feasibility study, valuation, promise of results or investment recommendation."],
      ["Technical status of projects", "Each project is presented according to its publicly available level of understanding. No tonnage, grade, resource, reserve or economic projection is published without current technical documentation and appropriate disclosure."],
      ["Location and confidentiality", "Locations are expressed at regional scale only. The site does not disclose coordinates, polygons, personal addresses, ownership agreements, administrative strategies, internal information or third-party data without authorization."],
      ["Privacy", "Heritage Mining Group does not operate forms or a visitor database within this site. Email links open the application configured on the visitor's device. Hosting services and external platforms, including LinkedIn, may process technical data under their own policies."],
      ["External links and content", "External links are provided for reference and may be subject to terms and policies outside Heritage Mining Group's control. Landscape photography used on the site is credited to its author and source platform."],
    ],
    contact: "Institutional enquiries",
    contactText: "For questions about the site's public content or requests for corporate information:",
    back: "Return to the site",
  },
};

export function LegalPage({ locale }: { locale: Locale }) {
  const t = legalContent[locale];
  const isEnglish = locale === "en";

  return (
    <div lang={locale}>
      <HtmlLanguage locale={locale} />
      <SiteHeader
        locale={locale}
        spanishHrefOverride="/aviso-legal"
        englishHrefOverride="/en/legal-notice"
      />
      <main className="legal-page">
        <section className="legal-hero">
          <div className="legal-hero-lines" aria-hidden="true" />
          <div className="shell legal-hero-content">
            <p className="eyebrow">{t.eyebrow}</p>
            <h1>{t.title}</h1>
            <p className="legal-updated">{t.updated}</p>
          </div>
        </section>
        <section className="section legal-content">
          <div className="shell legal-grid">
            <div className="legal-intro">
              <p>{t.intro}</p>
              <a className="text-link" href={isEnglish ? "/en" : "/"}>{t.back} <span className="ui-arrow" aria-hidden="true">{"→\uFE0E"}</span></a>
            </div>
            <div className="legal-sections">
              {t.sections.map(([title, text], index) => (
                <article key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div><h2>{title}</h2><p>{text}</p></div>
                </article>
              ))}
              <aside className="legal-contact">
                <p className="eyebrow">{t.contact}</p>
                <p>{t.contactText}</p>
                <a href="mailto:heritageminingroup@gmail.com">heritageminingroup@gmail.com <span className="ui-arrow" aria-hidden="true">{"↗\uFE0E"}</span></a>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}
