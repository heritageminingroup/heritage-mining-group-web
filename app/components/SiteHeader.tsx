type SiteHeaderProps = {
  overlay?: boolean;
  locale?: "es" | "en";
  projectSlug?: string;
  spanishHrefOverride?: string;
  englishHrefOverride?: string;
};

const navItems = {
  es: [
    { anchor: "heritage", label: "Heritage" },
    { anchor: "sobre-nosotros", label: "Sobre nosotros" },
    { anchor: "portafolio", label: "Portafolio" },
    { anchor: "region", label: "Región" },
    { anchor: "responsabilidad", label: "Responsabilidad" },
  ],
  en: [
    { anchor: "heritage", label: "Heritage" },
    { anchor: "about-us", label: "About us" },
    { anchor: "portfolio", label: "Portfolio" },
    { anchor: "region", label: "Region" },
    { anchor: "responsibility", label: "Responsibility" },
  ],
};

export function SiteHeader({
  overlay = false,
  locale = "es",
  projectSlug,
  spanishHrefOverride,
  englishHrefOverride,
}: SiteHeaderProps) {
  const base = locale === "en" ? "/en" : "/";
  const spanishHref = spanishHrefOverride ?? (projectSlug ? `/proyectos/${projectSlug}` : "/");
  const englishHref = englishHrefOverride ?? (projectSlug ? `/en/projects/${projectSlug}` : "/en");
  const languageHref = locale === "en" ? spanishHref : englishHref;
  const homeLabel = locale === "en" ? "Heritage Mining Group, home" : "Heritage Mining Group, inicio";
  const navigationLabel = locale === "en" ? "Main navigation" : "Navegación principal";
  const menuLabel = locale === "en" ? "Open navigation" : "Abrir navegación";
  const contactLabel = locale === "en" ? "Contact" : "Contacto";

  return (
    <header className={`site-header${overlay ? " site-header--overlay" : ""}`}>
      <a className="brand" href={base} aria-label={homeLabel}>
        <span className="brand-mark" aria-hidden="true">H</span>
        <span className="brand-name">
          Heritage
          <small>Mining Group</small>
        </span>
      </a>

      <nav className="desktop-nav" aria-label={navigationLabel}>
        {navItems[locale].map((item) => (
          <a key={item.anchor} href={`${base}#${item.anchor}`}>{item.label}</a>
        ))}
        <a className="nav-contact" href={`${base}#contact`}>{contactLabel}</a>
        <div className="language-switch" aria-label={locale === "en" ? "Language" : "Idioma"}>
          <a href={spanishHref} aria-current={locale === "es" ? "page" : undefined}>ES</a>
          <span aria-hidden="true">/</span>
          <a href={englishHref} aria-current={locale === "en" ? "page" : undefined}>EN</a>
        </div>
      </nav>

      <details className="mobile-nav">
        <summary aria-label={menuLabel}>{locale === "en" ? "Menu" : "Menú"}</summary>
        <div className="mobile-nav-panel">
          {navItems[locale].map((item) => (
            <a key={item.anchor} href={`${base}#${item.anchor}`}>{item.label}</a>
          ))}
          <a href={`${base}#contact`}>{contactLabel}</a>
          <a className="mobile-language" href={languageHref}>
            {locale === "en" ? "Leer en español" : "Read in English"}
          </a>
        </div>
      </details>
    </header>
  );
}
