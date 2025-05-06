import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <div
      className="text-white p-4 p-lg-5 mb-4"
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
      <div className="container py-4 py-lg-5 position-relative" style={{ zIndex: 2 }}>
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-7 col-12 order-2 order-lg-1 text-center text-lg-start">
            <h1 className="fw-bold fs-3 fs-lg-display-5">International Trade To Grow</h1>
            <p className="lead fs-6 fs-lg-5 mb-4">Desarrollo de Negocios de LATAM</p>
            <p className="fs-6 mb-4">
            Ayudamos a las empresas a desarrollar el músculo que les permita desarrollarse en mercados Internacionales, potenciando sus exportaciones y/o Internacionalizando sus productos.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-center justify-content-md-start">
              <Link href="/contacto" className="btn btn-primary btn-lg px-4 me-md-2">
                Contáctenos
              </Link>
              <Link href="/servicios" className="btn btn-outline-light btn-lg px-4">
                Nuestros Servicios
              </Link>
            </div>
          </div>
          <div className="col-lg-5 col-12 order-1 order-lg-2 mt-0 mb-4 mb-lg-0 d-none d-lg-flex justify-content-center">
            <Image
              src="/logo.png"
              alt="International Trade 2 Grow Logo"
              width={150}
              height={150}
              className="img-fluid"
              style={{ maxHeight: '150px', objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}