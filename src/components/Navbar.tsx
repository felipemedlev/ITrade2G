'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="light">
      <div className="container">
        <Link href="/" className="navbar-brand d-flex align-items-center">
          <Image
            src="/logo.png"
            alt="Internation Trade 2 Grow Logo"
            width={30}
            height={30}
            className="me-2"
          />
          <span className='navbar-brand'>ITrade2G</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`} aria-current={pathname === '/' ? 'page' : undefined}>
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/servicios" className={`nav-link ${pathname === '/servicios' ? 'active' : ''}`} aria-current={pathname === '/servicios' ? 'page' : undefined}>
                Servicios
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/documentos" className={`nav-link ${pathname === '/documentos' ? 'active' : ''}`} aria-current={pathname === '/documentos' ? 'page' : undefined}>
                Documentos
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contacto" className={`nav-link ${pathname === '/contacto' ? 'active' : ''}`} aria-current={pathname === '/contacto' ? 'page' : undefined}>
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
