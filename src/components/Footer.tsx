import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-3 mt-auto">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-5">
            <h6>International Trade To Grow</h6>
            <p className="text-body-secondary small mb-0">Desarrollo de Negocios de LATAM</p>
          </div>
          <div className="col-md-3">
            <h6>Contacto</h6>
            <ul className="list-unstyled small">
              <li>Email: jwilson@itrade2g.com</li>
              <li>Tel: +56 9 8293 6621</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h6>Enlaces</h6>
            <ul className="list-unstyled small d-flex flex-wrap gap-3">
              <li><Link href="/" className="text-white">Inicio</Link></li>
              <li><Link href="/servicios" className="text-white">Servicios</Link></li>
              <li><Link href="/contacto" className="text-white">Contacto</Link></li>
            </ul>
          </div>
        </div>
        <hr className="my-2" />
        <div className="text-center small">
          <p className="mb-0">&copy; {new Date().getFullYear()} International Trade To Grow. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}