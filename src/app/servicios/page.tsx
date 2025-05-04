import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LogoCarousel from '../../components/LogoCarousel';
import Link from 'next/link';

export default function ServiciosPage() {
  const services = [
    {
      title: 'Desarrollo de Negocios',
      description: 'Ofrecemos estrategias personalizadas para expandir su negocio en mercados latinoamericanos. Nuestro enfoque se basa en un profundo conocimiento de las culturas de negocios locales, tendencias de mercado y oportunidades de crecimiento específicas para cada país. Trabajamos con usted para desarrollar planes de acción concretos que maximicen su potencial de crecimiento.',
    },
    {
      title: 'Consultoría Estratégica',
      description: 'Nuestro equipo de consultores expertos proporciona análisis detallados de mercado y recomendaciones para optimizar su presencia en LATAM. Evaluamos su posición actual, identificamos oportunidades de mejora y desarrollamos estrategias a medida para aumentar su competitividad en el mercado latinoamericano.',
    },
    {
      title: 'Relaciones Comerciales',
      description: 'Aprovechamos nuestra extensa red de contactos para establecer conexiones valiosas con socios estratégicos y clientes potenciales en la región. Le ayudamos a construir relaciones comerciales sólidas que impulsen el crecimiento de su negocio y abran nuevas oportunidades de colaboración y expansión.',
    },
    {
      title: 'Marketing Internacional',
      description: 'Diseñamos estrategias de marketing adaptadas a las particularidades culturales y comerciales de cada mercado latinoamericano. Desde estrategias digitales hasta campañas tradicionales, nuestro enfoque se centra en comunicar efectivamente su propuesta de valor y conectar con su público objetivo.',
    },
    {
      title: 'Logística y Distribución',
      description: 'Le ofrecemos soluciones completas para optimizar su cadena de suministro en América Latina. Nuestros servicios incluyen evaluación de rutas logísticas, selección de proveedores confiables, optimización de costos y gestión eficiente de la distribución regional.',
    },
    {
      title: 'Asesoría Legal',
      description: 'Proporcionamos orientación experta sobre normativas locales, requisitos de cumplimiento y aspectos legales para operar exitosamente en diferentes países de América Latina. Nuestro asesoramiento le permitirá navegar con confianza por los complejos entornos regulatorios de la región.',
    }
  ];

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main>
        <div className="bg-primary text-white py-5">
          <div className="container py-4">
            <h1 className="display-4 fw-bold">Nuestros Servicios</h1>
            <p className="lead">Soluciones integrales para su expansión empresarial en América Latina</p>
          </div>
        </div>

        <div className="container py-5">
          <div className="row row-cols-1 row-cols-md-2 g-4 mb-5">
            {services.map((service, index) => (
              <div key={index} className="col">
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body p-4">
                    <h3 className="card-title mb-3">{service.title}</h3>
                    <p className="card-text">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <LogoCarousel />

        <div className="bg-light py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="mb-4">Impulse su negocio en América Latina</h2>
                <p className="lead mb-4">Programe una consulta inicial sin compromiso y descubra cómo podemos ayudarle a alcanzar sus objetivos estratégicos en la región.</p>
                <Link href="/contacto" className="btn btn-primary btn-lg">Solicitar Consulta</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}