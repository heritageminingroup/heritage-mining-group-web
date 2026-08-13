import { projects } from "../data/projects";
import { projectsEn } from "../data/projects-en";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { HtmlLanguage } from "./HtmlLanguage";

type Locale = "es" | "en";

const content = {
  es: {
    heroTitle: <>Explorando el <em>potencial geológico</em> del sur de Mendoza</>,
    heroText: "Una plataforma de desarrollo de proyectos minerales basada en conocimiento territorial, interpretación técnica y exploración progresiva.",
    explorePortfolio: "Explorar portafolio",
    knowHeritage: "Conocer Heritage",
    projects: "Proyectos",
    properties: "Propiedades",
    commoditiesInterest: "Commodities de interés",
    southMendoza: "Sur de Mendoza",
    regionalReference: "Ubicación regional de referencia",
    company: "La compañía",
    institutionalTitle: <>Conocimiento del territorio.<br />Gestión de proyectos.<br /><em>Visión de largo plazo.</em></>,
    institutionalLead: "Heritage Mining Group es una plataforma de desarrollo de proyectos mineros con foco en el sur de Mendoza, Argentina.",
    institutionalP1: "Nuestro portafolio reúne propiedades vinculadas a distintos ambientes geológicos y commodities, integrando activos con antecedentes históricos, información geológica disponible y nuevas herramientas de análisis e interpretación.",
    institutionalP2: "Transformamos información geológica dispersa en proyectos estructurados, técnicamente comprensibles y preparados para avanzar hacia nuevas etapas de evaluación y colaboración.",
    principles: [
      ["Rigor técnico", "Diferenciamos antecedentes históricos de información actualmente verificada."],
      ["Desarrollo progresivo", "Ajustamos cada programa al nivel de conocimiento de la propiedad."],
      ["Exploración responsable", "Incorporamos criterios ambientales y territoriales desde el inicio."],
    ],
    portfolio: "Portafolio",
    diversification: "Diversificación geológica",
    portfolioTitle: <>Cinco proyectos.<br /><em>Una región estratégica.</em></>,
    portfolioIntro: "Cada activo se encuentra en una etapa particular de conocimiento. La metodología se adapta a cada proyecto, priorizando interpretación, cartografía y definición progresiva de objetivos.",
    commodities: ["Cobre", "Hierro", "Manganeso", "Asfaltita", "Carbón", "Azufre"],
    landscapeAlt: "Paisaje de la cordillera de los Andes en Mendoza",
    rangeReference: "Cordillera sur — referencia regional",
    regionalContext: "Contexto regional",
    regionTitle: <>Un territorio definido por su <em>diversidad geológica.</em></>,
    regionLead: "El sur mendocino reúne ambientes sedimentarios, magmáticos, volcánicos y estructurales vinculados a la evolución de los Andes y de las cuencas del oeste argentino.",
    regionText: "Comprender el territorio es parte fundamental de la exploración. Cada evaluación considera la geología local y regional, la topografía, el acceso, las condiciones ambientales y los distintos usos del territorio.",
    locationLabel: "Ubicación regional",
    privacy: "Este sitio publica únicamente ubicaciones regionales de referencia; no incluye coordenadas ni polígonos de propiedades.",
    howWeExplore: "Cómo exploramos",
    responsibleExploration: "Exploración responsable",
    responsibilityTitle: <>Mejor información antes de una <em>mayor intervención.</em></>,
    responsibilityLead: "Entendemos la exploración como un proceso progresivo de reducción de incertidumbre. El objetivo es generar la información adecuada para tomar mejores decisiones en cada etapa.",
    process: [
      ["Revisar", "Organizamos antecedentes históricos, información pública y documentación geológica disponible."],
      ["Interpretar", "Integramos cartografía, GIS, sensores remotos y lectura estructural para construir hipótesis de trabajo."],
      ["Verificar", "Contrastamos hipótesis con reconocimiento territorial y observaciones de campo técnicamente justificadas."],
      ["Priorizar", "Definimos el próximo paso según el nivel de conocimiento y las características de cada proyecto."],
    ],
    collaboration: "Colaboración",
    complementary: "Capacidades complementarias",
    collaborationTitle: <>Desarrollar mejores proyectos requiere <em>mejores vínculos.</em></>,
    collaborationLead: "Estamos abiertos a relacionarnos con organizaciones y profesionales capaces de aportar conocimiento, tecnología y capacidad técnica.",
    collaborators: ["Compañías mineras y grupos de exploración", "Consultores y especialistas técnicos", "Proveedores de tecnología", "Capital y socios estratégicos"],
    confidentiality: "La información de mayor detalle se comparte únicamente cuando corresponde y bajo mecanismos adecuados de confidencialidad y autorización.",
    nextStep: "El próximo paso",
    ctaTitle: <>Cada proyecto comienza con una <em>pregunta geológica.</em></>,
    ctaText: "Reunimos la información, construimos el modelo y definimos qué debe seguir.",
    evaluateCollaboration: "Evaluar una colaboración",
    backPortfolio: "Volver al portafolio",
  },
  en: {
    heroTitle: <>Exploring the <em>geological potential</em> of southern Mendoza</>,
    heroText: "A mineral project development platform built on territorial knowledge, technical interpretation and progressive exploration.",
    explorePortfolio: "Explore portfolio",
    knowHeritage: "Discover Heritage",
    projects: "Projects",
    properties: "Properties",
    commoditiesInterest: "Commodities of interest",
    southMendoza: "Southern Mendoza",
    regionalReference: "Regional location reference",
    company: "The company",
    institutionalTitle: <>Territorial knowledge.<br />Project stewardship.<br /><em>A long-term perspective.</em></>,
    institutionalLead: "Heritage Mining Group is a mineral project development platform focused on southern Mendoza, Argentina.",
    institutionalP1: "Our portfolio brings together properties associated with different geological environments and commodities, integrating assets with historical background, available geological information and contemporary analytical and interpretation tools.",
    institutionalP2: "We transform dispersed geological information into structured, technically understandable projects prepared to advance toward new stages of evaluation and collaboration.",
    principles: [
      ["Technical rigor", "We distinguish historical background from currently verified information."],
      ["Progressive development", "We tailor each program to the knowledge level of the property."],
      ["Responsible exploration", "We incorporate environmental and territorial criteria from the outset."],
    ],
    portfolio: "Portfolio",
    diversification: "Geological diversification",
    portfolioTitle: <>Five projects.<br /><em>One strategic region.</em></>,
    portfolioIntro: "Each asset is at a distinct stage of understanding. Our methodology is tailored to each project, prioritizing interpretation, mapping and the progressive definition of exploration objectives.",
    commodities: ["Copper", "Iron", "Manganese", "Asphaltite", "Coal", "Sulfur"],
    landscapeAlt: "Andes mountain landscape in Mendoza",
    rangeReference: "Southern Andes — regional reference",
    regionalContext: "Regional context",
    regionTitle: <>A territory defined by its <em>geological diversity.</em></>,
    regionLead: "Southern Mendoza brings together sedimentary, magmatic, volcanic and structural environments shaped by the evolution of the Andes and the sedimentary basins of western Argentina.",
    regionText: "Understanding the territory is a fundamental part of exploration. Each evaluation considers local and regional geology, topography, access, environmental conditions and different land uses.",
    locationLabel: "Regional location",
    privacy: "This site publishes regional location references only; it does not disclose property coordinates or polygons.",
    howWeExplore: "How we explore",
    responsibleExploration: "Responsible exploration",
    responsibilityTitle: <>Better information before <em>greater intervention.</em></>,
    responsibilityLead: "We understand exploration as a progressive process of reducing uncertainty. The objective is to generate the right information for better decisions at every stage.",
    process: [
      ["Review", "We organize historical background, public information and available geological documentation."],
      ["Interpret", "We integrate mapping, GIS, remote sensing and structural analysis to build working hypotheses."],
      ["Verify", "We test hypotheses through territorial reconnaissance and technically justified field observations."],
      ["Prioritize", "We define the next step according to the knowledge level and characteristics of each project."],
    ],
    collaboration: "Collaboration",
    complementary: "Complementary capabilities",
    collaborationTitle: <>Better projects require <em>stronger relationships.</em></>,
    collaborationLead: "We are open to engaging with organizations and professionals able to contribute knowledge, technology and technical capabilities.",
    collaborators: ["Mining companies and exploration groups", "Consultants and technical specialists", "Technology providers", "Capital providers and strategic partners"],
    confidentiality: "More detailed information is shared only when appropriate and under suitable confidentiality and authorization mechanisms.",
    nextStep: "The next step",
    ctaTitle: <>Every project begins with a <em>geological question.</em></>,
    ctaText: "We bring the information together, build the model and define what should come next.",
    evaluateCollaboration: "Explore a collaboration",
    backPortfolio: "Back to portfolio",
  },
};

export function HomePage({ locale }: { locale: Locale }) {
  const t = content[locale];
  const isEnglish = locale === "en";
  const localizedProjects = isEnglish ? projectsEn : projects;
  const portfolioId = isEnglish ? "portfolio" : "portafolio";
  const responsibilityId = isEnglish ? "responsibility" : "responsabilidad";
  const collaborateId = isEnglish ? "collaborate" : "colaborar";
  const base = isEnglish ? "/en" : "";

  return (
    <div lang={locale}>
      <HtmlLanguage locale={locale} />
      <SiteHeader overlay locale={locale} />
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-image" aria-hidden="true" />
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-content shell">
            <p className="eyebrow eyebrow--light">Malargüe · Mendoza · Argentina</p>
            <h1 id="hero-title">{t.heroTitle}</h1>
            <div className="hero-bottom">
              <p>{t.heroText}</p>
              <div className="hero-actions">
                <a className="button button--light" href={`#${portfolioId}`}>{t.explorePortfolio} <span aria-hidden="true">↘</span></a>
                <a className="text-link text-link--light" href="#heritage">{t.knowHeritage} <span aria-hidden="true">→</span></a>
              </div>
            </div>
            <div className="hero-stats" aria-label={isEnglish ? "Portfolio summary" : "Resumen del portafolio"}>
              <div><strong>05</strong><span>{t.projects}</span></div>
              <div><strong>12</strong><span>{t.properties}</span></div>
              <div><strong>06</strong><span>{t.commoditiesInterest}</span></div>
              <div className="hero-coordinates"><span>{t.southMendoza}</span><small>{t.regionalReference}</small></div>
            </div>
          </div>
        </section>

        <section className="section institutional" id="heritage">
          <div className="shell section-grid">
            <div className="section-index"><span>01</span><p>{t.company}</p></div>
            <div className="institutional-copy">
              <p className="eyebrow">Heritage Mining Group</p>
              <h2>{t.institutionalTitle}</h2>
              <div className="two-column-copy">
                <p className="lead">{t.institutionalLead}</p>
                <div><p>{t.institutionalP1}</p><p>{t.institutionalP2}</p></div>
              </div>
            </div>
          </div>
          <div className="principles-strip shell">
            {t.principles.map(([title, text]) => <article key={title}><span>{title}</span><p>{text}</p></article>)}
          </div>
        </section>

        <section className="section portfolio" id={portfolioId}>
          <div className="shell section-heading section-heading--dark">
            <div className="section-index"><span>02</span><p>{t.portfolio}</p></div>
            <div><p className="eyebrow eyebrow--light">{t.diversification}</p><h2>{t.portfolioTitle}</h2></div>
            <p className="section-intro">{t.portfolioIntro}</p>
          </div>
          <div className="project-list shell">
            {localizedProjects.map((project) => (
              <a href={`${base}/${isEnglish ? "projects" : "proyectos"}/${project.slug}`} className={`project-card project-card--${project.accent}`} key={project.slug}>
                <div className="project-card-top"><span className="project-number">{project.index}</span><span className="project-focus">{project.focus}</span><span className="project-arrow" aria-hidden="true">↗</span></div>
                <div className="project-card-body"><h3>{project.name}</h3><p>{project.summary}</p></div>
                <div className="property-list">{project.properties.map((property) => <span key={property.name}>{property.name}</span>)}</div>
              </a>
            ))}
          </div>
          <div className="commodity-line shell" aria-label={t.commoditiesInterest}>
            {t.commodities.map((commodity) => <span key={commodity}>{commodity}</span>)}
          </div>
        </section>

        <section className="section region" id="region">
          <div className="shell region-grid">
            <div className="region-visual" role="img" aria-label={t.landscapeAlt}>
              <div className="region-label"><span>ARG</span><p>{t.rangeReference}</p></div>
            </div>
            <div className="region-copy">
              <div className="section-index"><span>03</span><p>{t.regionalContext}</p></div>
              <p className="eyebrow">Malargüe, Mendoza</p>
              <h2>{t.regionTitle}</h2>
              <p className="lead">{t.regionLead}</p>
              <p>{t.regionText}</p>
              <div className="location-path" aria-label={t.locationLabel}><span>Argentina</span><i aria-hidden="true">/</i><span>Mendoza</span><i aria-hidden="true">/</i><strong>Malargüe</strong></div>
              <p className="privacy-note"><span aria-hidden="true">⊕</span> {t.privacy}</p>
            </div>
          </div>
        </section>

        <section className="section responsibility" id={responsibilityId}>
          <div className="shell responsibility-grid">
            <div className="responsibility-heading">
              <div className="section-index"><span>04</span><p>{t.howWeExplore}</p></div>
              <p className="eyebrow">{t.responsibleExploration}</p>
              <h2>{t.responsibilityTitle}</h2>
              <p className="lead">{t.responsibilityLead}</p>
            </div>
            <div className="process-list">
              {t.process.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="section collaboration" id={collaborateId}>
          <div className="shell collaboration-grid">
            <div>
              <div className="section-index"><span>05</span><p>{t.collaboration}</p></div>
              <p className="eyebrow">{t.complementary}</p>
              <h2>{t.collaborationTitle}</h2>
            </div>
            <div className="collaboration-copy">
              <p className="lead">{t.collaborationLead}</p>
              <div className="collaborator-list">{t.collaborators.map((item, index) => <div key={item}><span>0{index + 1}</span><p>{item}</p></div>)}</div>
              <p className="confidentiality-note">{t.confidentiality}</p>
            </div>
          </div>
        </section>

        <section className="final-cta" id="contact">
          <div className="final-cta-lines" aria-hidden="true" />
          <div className="shell final-cta-content">
            <p className="eyebrow eyebrow--light">{t.nextStep}</p>
            <h2>{t.ctaTitle}</h2>
            <p>{t.ctaText}</p>
            <div className="final-actions">
              <a className="button button--light" href={`#${collaborateId}`}>{t.evaluateCollaboration} <span aria-hidden="true">↗</span></a>
              <a className="text-link text-link--light" href={`#${portfolioId}`}>{t.backPortfolio} <span aria-hidden="true">↑</span></a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}
