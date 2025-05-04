import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';

export default function ContactoPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow-1">
        <section className="bg-primary text-white py-5">
          <div className="container py-4">
            <div className="row align-items-center">
              <div className="col-md-8">
                <h1 className="display-4 fw-bold mb-2">Contacto</h1>
                <p className="lead opacity-75 mb-0">Estamos listos para ayudarte a crecer en América Latina</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5">
          <div className="container">
            <div className="row mb-5 g-4">
              <div className="col-lg-4 text-center">
                <div className="position-relative">
                  <Image
                    src="/profile_pic.png"
                    alt="José Antonio Wilson S."
                    width={210}
                    height={270}
                    className="rounded-4 shadow-lg mb-3"
                    priority
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <h2 className="display-6 fw-bold mb-4 text-center text-lg-start">José Antonio Wilson S.</h2>
                <div className="d-flex flex-column gap-3 mb-4">
                  <a href="mailto:jwilson@itrade2g.com" className="text-decoration-none d-flex align-items-center">
                    <i className="bi bi-envelope-fill me-3 text-primary"></i>
                    <span>jwilson@itrade2g.com</span>
                  </a>
                  <a href="tel:+56982936621" className="text-decoration-none d-flex align-items-center">
                    <i className="bi bi-telephone-fill me-3 text-primary"></i>
                    <span>+ 56 9 8293 6621</span>
                  </a>
                  <div className="d-flex align-items-center">
                    <i className="bi bi-geo-alt-fill me-3 text-primary"></i>
                    <span>Santiago, Chile</span>
                  </div>
                </div>

                <blockquote className="blockquote border-start border-primary border-4 ps-4 my-5">
                  <p className="mb-0 fst-italic text-muted">"Motivado por acompañar a las empresas en su camino hacia la expansión internacional, ayudándolas a identificar oportunidades, potenciar sus exportaciones y consolidar su presencia en nuevos mercados."</p>
                </blockquote>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-md-6">
                <div className="card h-100 shadow-sm border-0 hover-shadow transition-all">
                  <div className="card-body p-4">
                    <h3 className="h4 fw-bold mb-3 text-primary">Perfil</h3>
                    <p className="text-muted mb-0">Director Comercial con sólida experiencia en marketing y comercio internacional, especializado en la apertura de nuevos mercados, la formación e integración de equipos de alto rendimiento y la consolidación de operaciones comerciales rentables en entornos desafiantes y diversos.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card h-100 shadow-sm border-0 hover-shadow transition-all">
                  <div className="card-body p-4">
                    <h3 className="h4 fw-bold mb-3 text-primary">Formación</h3>
                    <ul className="list-unstyled mb-0">
                      <li className="mb-4">
                        <h4 className="h6 fw-bold mb-1">Ingeniero Civil Industrial</h4>
                        <p className="text-muted mb-0">Pontificia Universidad Católica de Valparaíso</p>
                      </li>
                      <li>
                        <h4 className="h6 fw-bold mb-2">Diplomados Universidad de Chile - CLP</h4>
                        <ul className="ps-3 mb-0 text-muted">
                          <li>Emprendimiento e Innovación</li>
                          <li>Equipos de alto rendimiento</li>
                          <li>Liderazgo y Negociación</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card h-100 shadow-sm border-0 hover-shadow transition-all">
                  <div className="card-body p-4">
                    <h3 className="h4 fw-bold mb-3 text-primary">Aptitudes</h3>
                    <ul className="list-unstyled mb-0">
                      {[
                        'Liderazgo y trabajo colaborativo',
                        'Negociación de alto nivel',
                        'Orientación al logro y resolución de problemas',
                        'Gestión de proyectos',
                        'Pensamiento sistémico'
                      ].map((aptitud, index) => (
                        <li key={index} className="mb-2 d-flex align-items-center text-muted">
                          <i className="bi bi-check2-circle text-primary me-2"></i>
                          {aptitud}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card h-100 shadow-sm border-0 hover-shadow transition-all">
                  <div className="card-body p-4">
                    <h3 className="h4 fw-bold mb-3 text-primary">Experiencia</h3>
                    <p className="text-muted mb-0">Más de 30 años de experiencia liderando el desarrollo de negocios en Latinoamérica, África, Europa y Europa del Este. Amplia trayectoria colaborando con empresas de distintos sectores para co-crear estrategias efectivas de penetración y expansión en mercados internacionales.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}