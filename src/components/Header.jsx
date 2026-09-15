import { useState } from "react";
import { therapist, navLinks } from "../data/content";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
      <div className="header-inner">
        <a href="#inicio" className="header-brand" onClick={closeMenu}>
          {therapist.name}
        </a>

        <nav className="header-nav" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a href="#agendamento" className="btn btn-primary header-cta">
            Agendar atendimento
          </a>

          <button
            type="button"
            className="header-menu-btn"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {isMenuOpen ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div className={`header-mobile-panel ${isMenuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        <a href="#agendamento" className="btn btn-primary" onClick={closeMenu}>
          Agendar atendimento
        </a>
      </div>
    </header>
  );
}

export default Header;
