import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <Link className="brand brand--footer" href="/" aria-label="Heritage Mining Group, inicio">
          <span className="brand-mark" aria-hidden="true">H</span>
          <span className="brand-name">Heritage<small>Mining Group</small></span>
        </Link>
        <p className="footer-line">Geología, conocimiento y exploración con visión de largo plazo.</p>
        <div className="footer-location">
          <span>Malargüe</span>
          <span>Mendoza</span>
          <span>Argentina</span>
        </div>
      </div>
      <div className="footer-disclosure">
        <p>
          La información publicada tiene carácter general y corporativo. Las referencias geológicas e históricas son antecedentes de exploración y no constituyen estimaciones de recursos o reservas, estudios de factibilidad, declaraciones de viabilidad económica ni recomendaciones de inversión.
        </p>
        <div className="footer-meta">
          <span>© {new Date().getFullYear()} Heritage Mining Group</span>
          <a href="https://www.pexels.com/photo/landscape-of-barren-mountains-21692507/" target="_blank" rel="noreferrer">
            Fotografía de paisaje: Emiliano Arano / Pexels
          </a>
        </div>
      </div>
    </footer>
  );
}
