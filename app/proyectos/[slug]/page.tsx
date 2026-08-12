import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { getProject, projects } from "../../data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  return {
    title: project.seoTitle,
    description: project.seoDescription,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <SiteHeader />
      <main className={`project-page project-page--${project.accent}`}>
        <section className="project-hero">
          <div className="project-hero-lines" aria-hidden="true" />
          <div className="shell project-hero-content">
            <Link className="back-link" href="/#portafolio"><span aria-hidden="true">←</span> Portafolio</Link>
            <div className="project-hero-heading">
              <span className="project-hero-index">{project.index}</span>
              <div>
                <p className="eyebrow">Proyecto · {project.focus}</p>
                <h1>{project.name}</h1>
                <p className="project-kicker">{project.kicker}</p>
              </div>
            </div>
            <div className="project-hero-summary">
              <p>{project.summary}</p>
              <div>
                <span>{String(project.properties.length).padStart(2, "0")}</span>
                <small>Propiedades</small>
              </div>
            </div>
          </div>
        </section>

        <section className="section project-overview">
          <div className="shell project-overview-grid">
            <div className="section-index"><span>01</span><p>Marco del proyecto</p></div>
            <div>
              <p className="eyebrow">Contexto geológico</p>
              <h2>Construir una comprensión <em>progresivamente más sólida.</em></h2>
            </div>
            <div className="project-long-copy">
              <p className="lead">{project.context}</p>
              <p>{project.approach}</p>
              <p>
                El objetivo de esta etapa es mejorar la interpretación y priorizar sectores o preguntas que justifiquen estudios de mayor detalle, sin anticipar conclusiones técnicas o económicas.
              </p>
            </div>
          </div>
        </section>

        <section className="section project-properties">
          <div className="shell">
            <div className="project-properties-heading">
              <div className="section-index"><span>02</span><p>Propiedades</p></div>
              <h2>{project.properties.length === 2 ? "Dos propiedades. Un marco de análisis integrado." : "Cuatro propiedades. Un marco de análisis regional."}</h2>
            </div>
            <div className="property-detail-grid">
              {project.properties.map((property, index) => (
                <article key={property.name}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{property.name}</h3>
                  <p>{property.description}</p>
                  <small>Antecedentes para orientación exploratoria</small>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section project-method">
          <div className="shell project-method-grid">
            <div>
              <div className="section-index"><span>03</span><p>Metodología</p></div>
              <p className="eyebrow">Evaluación técnica</p>
              <h2>Hipótesis, evidencia y <em>próximos pasos.</em></h2>
            </div>
            <div className="method-list">
              <div><span>01</span><p>Revisión crítica de antecedentes geológicos e históricos.</p></div>
              <div><span>02</span><p>Integración cartográfica, territorial y de sensores remotos.</p></div>
              <div><span>03</span><p>Reconocimiento de superficie técnicamente justificado.</p></div>
              <div><span>04</span><p>Priorización progresiva de objetivos de evaluación.</p></div>
            </div>
          </div>
        </section>

        <aside className="technical-note shell" aria-label="Nota sobre información técnica">
          <span aria-hidden="true">i</span>
          <p>
            Los antecedentes existentes se utilizan como guía para la exploración y no representan por sí mismos una estimación de recursos minerales, reservas, viabilidad económica ni una recomendación de inversión.
          </p>
        </aside>

        <section className="next-project">
          <Link href={`/proyectos/${nextProject.slug}`} className="shell next-project-link">
            <span>Siguiente proyecto · {nextProject.focus}</span>
            <h2>{nextProject.name}</h2>
            <i aria-hidden="true">↗</i>
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
