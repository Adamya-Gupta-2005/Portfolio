import { NavLink } from 'react-router-dom';
import { navLinks, socialLinks } from '../data/site';

export default function Header() {
  return (
    <header className="header-section">
      <div className="header-top">
        <div className="name">
          <span className="focus">Adamya</span> Gupta
        </div>
        <div className="other-platforms">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'}
            >
              <i className={`${link.icon} i ${link.className}`} />
            </a>
          ))}
        </div>
      </div>
      <nav className="header-nav">
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
