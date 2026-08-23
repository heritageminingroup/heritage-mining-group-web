type SiteFooterProps = {
  locale?: "es" | "en";
};

export function SiteFooter({ locale = "es" }: SiteFooterProps) {
  const isEnglish = locale === "en";
  const base = isEnglish ? "/en" : "/";

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <a className="brand brand--footer" href={base} aria-label={isEnglish ? "Heritage Mining Group, home" : "Heritage Mining Group, inicio"}>
          <span className="brand-mark" aria-hidden="true">H</span>
          <span className="brand-name">Heritage<small>Mining Group</small></span>
        </a>
        <p className="footer-line">
          {isEnglish
            ? "Geology, knowledge and exploration with a long-term perspective."
            : "Geología, conocimiento y exploración con visión de largo plazo."}
        </p>
        <div className="footer-location">
          <span>Malargüe</span>
          <span>Mendoza</span>
          <span>Argentina</span>
        </div>
      </div>
      <div className="footer-disclosure">
        <p>
          {isEnglish
            ? "The information published on this site is general and corporate in nature. Geological and historical references are exploration background only and do not constitute mineral resource or reserve estimates, feasibility studies, statements of economic viability or investment recommendations."
            : "La información publicada tiene carácter general y corporativo. Las referencias geológicas e históricas son antecedentes de exploración y no constituyen estimaciones de recursos o reservas, estudios de factibilidad, declaraciones de viabilidad económica ni recomendaciones de inversión."}
        </p>
        <div className="footer-meta">
          <span>© {new Date().getFullYear()} Heritage Mining Group</span>
          <a href={isEnglish ? "/en/legal-notice" : "/aviso-legal"}>
            {isEnglish ? "Legal and privacy notice" : "Aviso legal y privacidad"}
          </a>
          <a href="https://www.pexels.com/photo/landscape-of-barren-mountains-21692507/" target="_blank" rel="noreferrer">
            {isEnglish ? "Landscape photography: Emiliano Arano / Pexels" : "Fotografía de paisaje: Emiliano Arano / Pexels"}
          </a>
        </div>
      </div>
    </footer>
  );
}
