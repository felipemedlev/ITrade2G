import Link from 'next/link';

export default function ServicesSection() {
  const services = [
    {
      title: 'Consultoría & Mentoría',
      description: 'Trabajamos junto a las empresas en la identificación y desarrollo de nuevos mercados, realizando un análisis profundo para construir una propuesta de valor atractiva y alineada con su producto o servicio.',
      icon: <i className="bi bi-graph-up-arrow fs-1"></i>
    },
    {
      title: 'Gestión de Desarrollo de Negocios',
      description: 'Actuamos como una extensión del equipo comercial de nuestras empresas asociadas, colaborando estrechamente en el diseño de estrategias de comercialización y planes de negocio.',
      icon: <i className="bi bi-globe fs-1"></i>
    },
    {
      title: 'Agenciamiento comercial',
      description: 'Ofrecemos una sólida red de distribuidores e importadores en la región, orientada a facilitar el ingreso de sus productos o servicios en cada mercado.',
      icon: <i className="bi bi-building fs-1"></i>
    }
  ];

  return (
    <section className="py-5 bg-light position-relative">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Nuestros Servicios</h2>
          <p className="lead text-muted mb-0">Llevamos tus productos al mundo, potenciando tus exportaciones y expansión internacional</p>
        </div>

        <div className="row g-4 justify-content-center">
          {services.map((service, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm hover-shadow transition-all">
                <div className="card-body text-center p-4">
                  <div className="mb-4 text-primary opacity-75">{service.icon}</div>
                  <h3 className="h5 card-title fw-bold mb-3">{service.title}</h3>
                  <p className="card-text text-muted mb-4">{service.description}</p>
                  <Link
                    href="/servicios"
                    className="btn btn-outline-primary rounded-pill px-4"
                  >
                    Más información
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}