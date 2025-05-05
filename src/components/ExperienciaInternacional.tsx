export default function ExperienciaInternacional() {
    return (
        <section className="py-5 bg-light">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <h2 className="display-6 fw-bold mb-4"><i className="bi bi-award me-2 text-primary"></i>Experiencia Internacional</h2>
                <p className="mb-4 text-dark">Comercialización de productos de consumo masivo, expandiendo nuevos mercados mediante la incorporación de nuevos distribuidores, ejecutivos en las áreas de destino y promoviendo estas líneas a través de todas las redes de venta de los mercados.</p>
                <p className="fw-bold">Sectores y Productos:</p> {/* Changed to fw-semibold */}
                <div className="d-flex flex-wrap justify-content-center gap-2"> {/* Use flexbox for badges */}
                  <span className="badge bg-secondary text-bg-light rounded-pill px-3 py-3">Alimentos (Bebidas, Café, Té, Galletas, Snacks)</span> {/* Changed badge style */}
                  <span className="badge bg-secondary text-bg-light rounded-pill px-3 py-3">Limpieza (Hogar)</span> {/* Changed badge style */}
                  <span className="badge bg-secondary text-bg-light rounded-pill px-3 py-3">Escolar y Oficina</span> {/* Changed badge style */}
                  <span className="badge bg-secondary text-bg-light rounded-pill px-3 py-3">Licores</span> {/* Changed badge style */}
                  <span className="badge bg-secondary text-bg-light rounded-pill px-3 py-3">Automóvil Industrial (Neumáticos)</span> {/* Changed badge style */}
                </div>
              </div>
            </div>
          </div>
        </section>

    )
}