export default function Proposito() {
    return (
        <section className="py-5 mt-5 bg-light">
          <div className="container">
            <div className="row text-center">
              <div className="col">
                <h2 className="display-6 fw-bold mb-4">Nuestro Propósito</h2>
                {/* Using cards for better visual grouping */}
                <div className="row justify-content-center g-4">
                  <div className="col-md-4">
                    <div className="card h-100 border-0 shadow-sm">
                      <div className="card-body">
                        <i className="bi bi-graph-up-arrow fs-2 text-success mb-2"></i>
                        <h5 className="card-title">Crecimiento</h5>
                        <p className="card-text">Aumentar sus ingresos y crecimiento.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card h-100 border-0 shadow-sm">
                      <div className="card-body">
                        <i className="bi bi-arrows-angle-contract fs-2 text-warning mb-2"></i>
                        <h5 className="card-title">Independencia</h5>
                        <p className="card-text">Reducir la dependencia de mercados actuales.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card h-100 border-0 shadow-sm">
                      <div className="card-body">
                        <i className="bi bi-shield-check fs-2 text-info mb-2"></i>
                        <h5 className="card-title">Seguridad</h5>
                        <p className="card-text">Disminuir el riesgo al diversificar mercados.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
}