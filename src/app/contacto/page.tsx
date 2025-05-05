import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';

export default function ContactoPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow-2">
        <section className="bg-primary text-white py-1">
          <div className="container py-4">
            <div className="row align-items-center">
              <div className="col-md-8">
                <h1 className="display-5 fw-bold mb-2">Contacto</h1>
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
                    width={250}
                    height={320}
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
                  <p className="mb-0 fst-italic text-primary">&ldquo;Motivado por acompañar a las empresas en su camino hacia la expansión internacional, ayudándolas a identificar oportunidades, potenciar sus exportaciones y consolidar su presencia en los mercados globales.&rdquo;</p>
                </blockquote>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-md-6">
                <div className="card text-white bg-primary mb-3 h-100">
                  <div className="card-header">Perfil</div>
                  <div className="card-body">
                    <h4 className="card-title">Director Comercial</h4>
                    <p className="card-text">Sólida experiencia en marketing y comercio internacional, especializado en la apertura de nuevos mercados, la formación e integración de equipos de alto rendimiento y la negociación con todo tipo de clientes.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card text-white bg-primary mb-3 h-100">
                  <div className="card-header">Formación</div>
                  <div className="card-body">
                    <h4 className="card-title">Ingeniero Civil Industrial</h4>
                    <p className="card-text">
                      Pontificia Universidad Católica de Valparaíso
                    </p>
                    <p className="card-text">
                      Diplomados Universidad de Chile:
                      <br />
                      • Emprendimiento e Innovación
                      <br />
                      • Equipos de alto rendimiento
                      <br />
                      • Liderazgo y Negociación
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card text-white bg-primary mb-3 h-100">
                  <div className="card-header">Aptitudes</div>
                  <div className="card-body">
                    <h4 className="card-title">Competencias clave</h4>
                    <p className="card-text">
                      {[
                        'Liderazgo y trabajo colaborativo',
                        'Negociación de alto nivel',
                        'Orientación al logro y resolución de problemas',
                        'Gestión de proyectos',
                        'Pensamiento sistémico'
                      ].map((aptitud, index) => (
                        <span key={index} className="d-block mb-1">
                          <i className="bi bi-check2-circle me-2"></i>
                          {aptitud}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card text-white bg-primary mb-3 h-100">
                  <div className="card-header">Experiencia</div>
                  <div className="card-body">
                    <h4 className="card-title">Trayectoria internacional</h4>
                    <p className="card-text">Más de 30 años de experiencia liderando el desarrollo de negocios en Latinoamérica, África, Europa y Europa del Este. Amplia trayectoria colaborando con empresas de distintos sectores productivos.</p>
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