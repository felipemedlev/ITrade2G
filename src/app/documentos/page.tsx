import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function DocumentosPage() {
  const documents = [
    {
      title: 'Presentación Corporativa',
      description: 'Información detallada sobre nuestra empresa, misión, visión y servicios ofrecidos.',
      filename: 'Presentación Corporativa.pdf',
      icon: '/file.svg'
    },
    {
      title: 'Resumen Corporativo',
      description: 'Resumen ejecutivo de nuestra propuesta de valor y principales áreas de especialización.',
      filename: 'Resumen Corporativo.pdf',
      icon: '/file.svg'
    }
  ];

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main>
        <div className="bg-primary text-white p-5">
          <div className="container py-4">
            <h1 className="display-4 fw-bold">Documentos</h1>
            <p className="lead">Acceda a información detallada sobre nuestros servicios y propuesta de valor</p>
          </div>
        </div>

        <div className="container py-5">
          <div className="row">
            {documents.map((doc, index) => (
              <div key={index} className="col-md-6 mb-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body d-flex flex-column">
                    <div className="d-flex align-items-center mb-3">
                      <Image
                        src={doc.icon}
                        alt="Document"
                        width={36}
                        height={36}
                        className="me-3"
                      />
                      <h3 className="h4 mb-0">{doc.title}</h3>
                    </div>
                    <p className="text-muted mb-4">{doc.description}</p>
                    <a
                      href={`/${doc.filename}`}
                      download
                      className="btn btn-primary mt-auto"
                    >
                      Descargar PDF
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-light py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="mb-4">¿Tiene más preguntas?</h2>
                <p className="lead mb-4">No dude en contactarnos para obtener más información o solicitar una consultoría personalizada.</p>
                <Link href="/contacto" className="btn btn-primary btn-lg">Contactar</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}