import Link from "next/link";

type SiteHeaderProps = {
  overlay?: boolean;
};

const navItems = [
  { href: "/#heritage", label: "Heritage" },
  { href: "/#portafolio", label: "Portafolio" },
  { href: "/#region", label: "Región" },
  { href: "/#responsabilidad", label: "Responsabilidad" },
];

export function SiteHeader({ overlay = false }: SiteHeaderProps) {
  return (
    <header className={`site-header${overlay ? " site-header--overlay" : ""}`}>
      <Link className="brand" href="/" aria-label="Heritage Mining Group, inicio">
        <span className="brand-mark" aria-hidden="true">H</span>
        <span className="brand-name">
          Heritage
          <small>Mining Group</small>
        </span>
      </Link>

      <nav className="desktop-nav" aria-label="Navegación principal">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>{item.label}</Link>
        ))}
        <Link className="nav-contact" href="/#contacto">Contacto</Link>
      </nav>

      <details className="mobile-nav">
        <summary aria-label="Abrir navegación">Menú</summary>
        <div className="mobile-nav-panel">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
          <Link href="/#contacto">Contacto</Link>
        </div>
      </details>
    </header>
  );
}
