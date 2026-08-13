import Link from "next/link";
import type { Project } from "../data/projects";
import { projects } from "../data/projects";
import { projectsEn } from "../data/projects-en";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

type Locale = "es" | "en";

const labels = {
  es: {
    portfolio: "Portafolio",
    project: "Proyecto",
    properties: "Propiedades",
    framework: "Marco del proyecto",
    geologicalContext: "Contexto geológico",
    overviewTitle: <>Construir una comprensión <em>progresivamente más sólida.</em></>,
    overviewClosing: "El objetivo de esta etapa es mejorar la interpretación y priorizar sectores o preguntas que justifiquen estudios de mayor detalle, sin anticipar conclusiones técnicas o económicas.",
    propertiesHeadingTwo: "Dos propiedades. Un marco de análisis integrado.",
    propertiesHeadingFour: "Cuatro propiedades. Un marco de análisis regional.",
    background: "Antecedentes para orientación exploratoria",
    methodology: "Metodología",
    technicalEvaluation: "Evaluación técnica",
    methodTitle: <>Hipótesis, evidencia y <em>próximos pasos.</em></>,
    method: [
      "Revisión crítica de antecedentes geológicos e históricos.",
      "Integración cartográfica, territorial y de sensores remotos.",
      "Reconocimiento de superficie técnicamente justificado.",
      "Priorización progresiva de objetivos de evaluación.",
    ],
    noteLabel: "Nota sobre información técnica",
    note: "Los antecedentes existentes se utilizan como guía para la exploración y no representan por sí mismos una estimación de recursos minerales, reservas, viabilidad económica ni una recomendación de inversión.",
    nextProject: "Siguiente proyecto",
  },
  en: {
    portfolio: "Portfolio",
    project: "Project",
    properties: "Properties",
    framework: "Project framework",
    geologicalContext: "Geological context",
    overviewTitle: <>Building a <em>progressively stronger understanding.</em></>,
    overviewClosing: "The objective at this stage is to improve interpretation and prioritize areas or questions that warrant more detailed study, without anticipating technical or economic conclusions.",
    propertiesHeadingTwo: "Two properties. One integrated analytical framework.",
    propertiesHeadingFour: "Four properties. One regional analytical framework.",
    background: "Background for exploration guidance",
    methodology: "Methodology",
    technicalEvaluation: "Technical evaluation",
    methodTitle: <>Hypotheses, evidence and <em>next steps.</em></>,
    method: [
      "Critical review of geological and historical background.",
      "Integration of mapping, territorial analysis and remote sensing.",
      "Technically justified surface reconnaissance.",
      "Progressive prioritization of evaluation objectives.",
    ],
    noteLabel: "Technical information note",
    note: "Existing background information is used as an exploration guide and does not in itself represent an estimate of mineral resources or reserves, economic viability or an investment recommendation.",
    nextProject: "Next project",
  },
};

export function ProjectPageContent({ project, locale }: { project: Project; locale: Locale }) {
  const t = labels[locale];
  const isEnglish = locale === "en";
  const localizedProjects = isEnglish ? projectsEn : projects;
  const currentIndex = localizedProjects.findIndex((item) => item.slug === project.slug);
  const nextProject = localizedProjects[(currentIndex + 1) % localizedProjects.length];
  const homeBase = isEnglish ? "/en" : "/";
  const projectBase = isEnglish ? "/en/projects" : "/proyectos";

  return (
    <div lang={locale}>
      <SiteHeader locale={locale} projectSlug={project.slug} />
      <main className={`project-page project-page--${project.accent}`}>
        <section className="project-hero">
          <div className="project-hero-lines" aria-hidden="true" />
          <div className="shell project-hero-content">
            <Link className="back-link" href={`${homeBase}#${isEnglish ? "portfolio" : "portafolio"}`}><span aria-hidden="true">←</span> {t.portfolio}</Link>
            <div className="project-hero-heading">
              <span className="project-hero-index">{project.index}</span>
              <div>
                <p className="eyebrow">{t.project} · {project.focus}</p>
                <h1>{project.name}</h1>
                <p className="project-kicker">{project.kicker}</p>
              </div>
            </div>
            <div className="project-hero-summary">
              <p>{project.summary}</p>
              <div><span>{String(project.properties.length).padStart(2, "0")}</span><small>{t.properties}</small></div>
            </div>
          </div>
        </section>

        <section className="section project-overview">
          <div className="shell project-overview-grid">
            <div className="section-index"><span>01</span><p>{t.framework}</p></div>
            <div><p className="eyebrow">{t.geologicalContext}</p><h2>{t.overviewTitle}</h2></div>
            <div className="project-long-copy"><p className="lead">{project.context}</p><p>{project.approach}</p><p>{t.overviewClosing}</p></div>
          </div>
        </section>

        <section className="section project-properties">
          <div className="shell">
            <div className="project-properties-heading">
              <div className="section-index"><span>02</span><p>{t.properties}</p></div>
              <h2>{project.properties.length === 2 ? t.propertiesHeadingTwo : t.propertiesHeadingFour}</h2>
            </div>
            <div className="property-detail-grid">
              {project.properties.map((property, index) => (
                <article key={property.name}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{property.name}</h3>
                  <p>{property.description}</p>
                  <small>{t.background}</small>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section project-method">
          <div className="shell project-method-grid">
            <div>
              <div className="section-index"><span>03</span><p>{t.methodology}</p></div>
              <p className="eyebrow">{t.technicalEvaluation}</p>
              <h2>{t.methodTitle}</h2>
            </div>
            <div className="method-list">
              {t.method.map((item, index) => <div key={item}><span>0{index + 1}</span><p>{item}</p></div>)}
            </div>
          </div>
        </section>

        <aside className="technical-note shell" aria-label={t.noteLabel}><span aria-hidden="true">i</span><p>{t.note}</p></aside>

        <section className="next-project">
          <Link href={`${projectBase}/${nextProject.slug}`} className="shell next-project-link">
            <span>{t.nextProject} · {nextProject.focus}</span><h2>{nextProject.name}</h2><i aria-hidden="true">↗</i>
          </Link>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}
