import Link from 'next/link';

export default function Hero() {
  return (
    <div
      className="text-white p-5 mb-4"
      style={{
        backgroundImage: 'url(/HeroBackground.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1
        }}
      />
      <div className="container py-5 position-relative" style={{ zIndex: 2 }}>
        <div className="row align-items-center">
          <div className="col-lg-7">
            <h1 className="display-5 fw-bold">Internation Trade 2 Grow</h1>
            <p className="lead mb-4">Desarrollo de Negocios de LATAM</p>
            <p className="mb-4">
            Ayudamos a las empresas a desarrollar el músculo que les permita desarrollarse en mercados Internacionales, potenciando sus exportaciones y/o Internacionalizando sus productos.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <Link href="/contacto" className="btn btn-light btn-lg px-4 me-md-2">
                Contáctenos
              </Link>
              <Link href="/servicios" className="btn btn-outline-light btn-lg px-4">
                Nuestros Servicios
              </Link>
            </div>
          </div>
          <div className="col-lg-5 mt-5 mt-lg-0 d-flex justify-content-center">
            <img
              src="/logo.png"
              alt="Internation Trade 2 Grow Logo"
              className="img-fluid"
              style={{ maxHeight: '200px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}