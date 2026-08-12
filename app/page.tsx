import Link from "next/link";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { projects } from "./data/projects";

const principles = [
  {
    number: "01",
    title: "Revisar",
    text: "Organizamos antecedentes históricos, información pública y documentación geológica disponible.",
  },
  {
    number: "02",
    title: "Interpretar",
    text: "Integramos cartografía, GIS, sensores remotos y lectura estructural para construir hipótesis de trabajo.",
  },
  {
    number: "03",
    title: "Verificar",
    text: "Contrastamos hipótesis con reconocimiento territorial y observaciones de campo técnicamente justificadas.",
  },
  {
    number: "04",
    title: "Priorizar",
    text: "Definimos el próximo paso según el nivel de conocimiento y las características de cada proyecto.",
  },
];

const collaborators = [
  "Compañías mineras y grupos de exploración",
  "Consultores y especialistas técnicos",
  "Proveedores de tecnología",
  "Capital y socios estratégicos",
];

export default function Home() {
  return (
    <>
      <SiteHeader overlay />
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-image" aria-hidden="true" />
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-content shell">
            <p className="eyebrow eyebrow--light">Malargüe · Mendoza · Argentina</p>
            <h1 id="hero-title">
              Explorando el <em>potencial geológico</em> del sur de Mendoza
            </h1>
            <div className="hero-bottom">
              <p>
                Una plataforma de desarrollo de proyectos minerales basada en conocimiento territorial, interpretación técnica y exploración progresiva.
              </p>
              <div className="hero-actions">
                <Link className="button button--light" href="#portafolio">Explorar portafolio <span aria-hidden="true">↘</span></Link>
                <Link className="text-link text-link--light" href="#heritage">Conocer Heritage <span aria-hidden="true">→</span></Link>
              </div>
            </div>
            <div className="hero-stats" aria-label="Resumen del portafolio">
              <div><strong>05</strong><span>Proyectos</span></div>
              <div><strong>12</strong><span>Propiedades</span></div>
              <div><strong>06</strong><span>Commodities de interés</span></div>
              <div className="hero-coordinates"><span>Sur de Mendoza</span><small>Ubicación regional de referencia</small></div>
            </div>
          </div>
        </section>

        <section className="section institutional" id="heritage">
          <div className="shell section-grid">
            <div className="section-index">
              <span>01</span>
              <p>La compañía</p>
            </div>
            <div className="institutional-copy">
              <p className="eyebrow">Heritage Mining Group</p>
              <h2>Conocimiento del territorio.<br />Gestión de proyectos.<br /><em>Visión de largo plazo.</em></h2>
              <div className="two-column-copy">
                <p className="lead">
                  Heritage Mining Group es una plataforma de desarrollo de proyectos mineros con foco en el sur de Mendoza, Argentina.
                </p>
                <div>
                  <p>
                    Nuestro portafolio reúne propiedades vinculadas a distintos ambientes geológicos y commodities, integrando activos con antecedentes históricos, información geológica disponible y nuevas herramientas de análisis e interpretación.
                  </p>
                  <p>
                    Transformamos información geológica dispersa en proyectos estructurados, técnicamente comprensibles y preparados para avanzar hacia nuevas etapas de evaluación y colaboración.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="principles-strip shell">
            <article><span>Rigor técnico</span><p>Diferenciamos antecedentes históricos de información actualmente verificada.</p></article>
            <article><span>Desarrollo progresivo</span><p>Ajustamos cada programa al nivel de conocimiento de la propiedad.</p></article>
            <article><span>Exploración responsable</span><p>Incorporamos criterios ambientales y territoriales desde el inicio.</p></article>
          </div>
        </section>

        <section className="section portfolio" id="portafolio">
          <div className="shell section-heading section-heading--dark">
            <div className="section-index"><span>02</span><p>Portafolio</p></div>
            <div>
              <p className="eyebrow eyebrow--light">Diversificación geológica</p>
              <h2>Cinco proyectos.<br /><em>Una región estratégica.</em></h2>
            </div>
            <p className="section-intro">
              Cada activo se encuentra en una etapa particular de conocimiento. La metodología se adapta a cada proyecto, priorizando interpretación, cartografía y definición progresiva de objetivos.
            </p>
          </div>

          <div className="project-list shell">
            {projects.map((project) => (
              <Link
                href={`/proyectos/${project.slug}`}
                className={`project-card project-card--${project.accent}`}
                key={project.slug}
              >
                <div className="project-card-top">
                  <span className="project-number">{project.index}</span>
                  <span className="project-focus">{project.focus}</span>
                  <span className="project-arrow" aria-hidden="true">↗</span>
                </div>
                <div className="project-card-body">
                  <h3>{project.name}</h3>
                  <p>{project.summary}</p>
                </div>
                <div className="property-list">
                  {project.properties.map((property) => (
                    <span key={property.name}>{property.name}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
          <div className="commodity-line shell" aria-label="Commodities de interés">
            <span>Cobre</span><span>Hierro</span><span>Manganeso</span><span>Asfaltita</span><span>Carbón</span><span>Azufre</span>
          </div>
        </section>

        <section className="section region" id="region">
          <div className="shell region-grid">
            <div className="region-visual" role="img" aria-label="Paisaje de la cordillera de los Andes en Mendoza">
              <div className="region-label">
                <span>ARG</span>
                <p>Cordillera sur — referencia regional</p>
              </div>
            </div>
            <div className="region-copy">
              <div className="section-index"><span>03</span><p>Contexto regional</p></div>
              <p className="eyebrow">Malargüe, Mendoza</p>
              <h2>Un territorio definido por su <em>diversidad geológica.</em></h2>
              <p className="lead">
                El sur mendocino reúne ambientes sedimentarios, magmáticos, volcánicos y estructurales vinculados a la evolución de los Andes y de las cuencas del oeste argentino.
              </p>
              <p>
                Comprender el territorio es parte fundamental de la exploración. Cada evaluación considera la geología local y regional, la topografía, el acceso, las condiciones ambientales y los distintos usos del territorio.
              </p>
              <div className="location-path" aria-label="Ubicación regional">
                <span>Argentina</span><i aria-hidden="true">/</i><span>Mendoza</span><i aria-hidden="true">/</i><strong>Malargüe</strong>
              </div>
              <p className="privacy-note"><span aria-hidden="true">⊕</span> Este sitio publica únicamente ubicaciones regionales de referencia; no incluye coordenadas ni polígonos de propiedades.</p>
            </div>
          </div>
        </section>

        <section className="section responsibility" id="responsabilidad">
          <div className="shell responsibility-grid">
            <div className="responsibility-heading">
              <div className="section-index"><span>04</span><p>Cómo exploramos</p></div>
              <p className="eyebrow">Exploración responsable</p>
              <h2>Mejor información antes de una <em>mayor intervención.</em></h2>
              <p className="lead">
                Entendemos la exploración como un proceso progresivo de reducción de incertidumbre. El objetivo es generar la información adecuada para tomar mejores decisiones en cada etapa.
              </p>
            </div>
            <div className="process-list">
              {principles.map((principle) => (
                <article key={principle.number}>
                  <span>{principle.number}</span>
                  <h3>{principle.title}</h3>
                  <p>{principle.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section collaboration" id="colaborar">
          <div className="shell collaboration-grid">
            <div>
              <div className="section-index"><span>05</span><p>Colaboración</p></div>
              <p className="eyebrow">Capacidades complementarias</p>
              <h2>Desarrollar mejores proyectos requiere <em>mejores vínculos.</em></h2>
            </div>
            <div className="collaboration-copy">
              <p className="lead">
                Estamos abiertos a relacionarnos con organizaciones y profesionales capaces de aportar conocimiento, tecnología y capacidad técnica.
              </p>
              <div className="collaborator-list">
                {collaborators.map((item, index) => (
                  <div key={item}><span>0{index + 1}</span><p>{item}</p></div>
                ))}
              </div>
              <p className="confidentiality-note">
                La información de mayor detalle se comparte únicamente cuando corresponde y bajo mecanismos adecuados de confidencialidad y autorización.
              </p>
            </div>
          </div>
        </section>

        <section className="final-cta" id="contacto">
          <div className="final-cta-lines" aria-hidden="true" />
          <div className="shell final-cta-content">
            <p className="eyebrow eyebrow--light">El próximo paso</p>
            <h2>Cada proyecto comienza con una <em>pregunta geológica.</em></h2>
            <p>Reunimos la información, construimos el modelo y definimos qué debe seguir.</p>
            <div className="final-actions">
              <Link className="button button--light" href="#colaborar">Evaluar una colaboración <span aria-hidden="true">↗</span></Link>
              <Link className="text-link text-link--light" href="#portafolio">Volver al portafolio <span aria-hidden="true">↑</span></Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
