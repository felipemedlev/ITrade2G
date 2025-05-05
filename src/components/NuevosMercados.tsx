export default function NuevosMercados() {
    return (
        <section className="py-5 bg-light">
          <div className="container">
            <div className="row mb-4">
              <div className="col text-center">
                <h2 className="fw-bold mb-3"><i className="bi bi-door-open me-2 text-primary"></i>Ingreso a Nuevos Mercados</h2>
                <p className="lead mb-4">Nuestro proceso estructurado para entrar en nuevos mercados:</p>
              </div>
            </div>
            <div className="row text-center g-4"> {/* Added g-4 for gutter spacing */}
                {/* Stage 1 */}
                <div className="col-lg-4 d-flex align-items-stretch"> {/* Added d-flex and align-items-stretch */}
                    <div className="card h-100 shadow-sm border-0 w-100"> {/* Added w-100 */}
                        <div className="card-body d-flex flex-column">
                            <div className="mb-3"><i className="bi bi-search fs-2 text-info"></i></div>
                            <h4 className="card-title h5 fw-bold">Inteligencia de Mercado</h4>
                            <ul className="list-unstyled text-start small mt-3 mb-0 flex-grow-1">
                                <li><i className="bi bi-check-circle-fill text-success me-2"></i>Análisis y selección de mercados potenciales.</li>
                                <li><i className="bi bi-check-circle-fill text-success me-2"></i>Evaluación de dinámica competitiva y dimensionamiento.</li>
                                <li><i className="bi bi-check-circle-fill text-success me-2"></i>Identificación de redes de distribución y análisis competitivo.</li>
                                <li><i className="bi bi-check-circle-fill text-success me-2"></i>Revisión de condiciones arancelarias, cuotas y restricciones.</li>
                                <li><i className="bi bi-check-circle-fill text-success me-2"></i>Detección de oportunidades y preevaluación de viabilidad.</li>
                                <li><i className="bi bi-check-circle-fill text-success me-2"></i>Acompañamiento en visitas y coordinación de reuniones.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Stage 2 */}
                <div className="col-lg-4 d-flex align-items-stretch"> {/* Added d-flex and align-items-stretch */}
                     <div className="card h-100 shadow-sm border-0 w-100"> {/* Added w-100 */}
                        <div className="card-body d-flex flex-column">
                            <div className="mb-3"><i className="bi bi-clipboard-data fs-2 text-warning"></i></div>
                            <h4 className="card-title h5 fw-bold">Propuesta de Valor y Proyección</h4>
                            <ul className="list-unstyled text-start small mt-3 mb-0 flex-grow-1">
                                <li><i className="bi bi-check-circle-fill text-success me-2"></i>Presentación del portafolio a ofrecer.</li>
                                <li><i className="bi bi-check-circle-fill text-success me-2"></i>Identificación de competidores y precios.</li>
                                <li><i className="bi bi-check-circle-fill text-success me-2"></i>Propuesta colaborativa de posicionamiento de precios.</li>
                                <li><i className="bi bi-check-circle-fill text-success me-2"></i>Desarrollo de cadenas de valor.</li>
                                <li><i className="bi bi-check-circle-fill text-success me-2"></i>Proyección de volumen y plan de negocio base.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Stage 3 */}
                <div className="col-lg-4 d-flex align-items-stretch"> {/* Added d-flex and align-items-stretch */}
                     <div className="card h-100 shadow-sm border-0 w-100"> {/* Added w-100 */}
                        <div className="card-body d-flex flex-column">
                             <div className="mb-3"><i className="bi bi-box-arrow-in-right fs-2 text-success"></i></div>
                            <h4 className="card-title h5 fw-bold">Ingreso al Mercado y Seguimiento</h4>
                            <ul className="list-unstyled text-start small mt-3 mb-0 flex-grow-1">
                                <li><i className="bi bi-check-circle-fill text-success me-2"></i>Identificar y evaluar importadoras/distribuidoras.</li>
                                <li><i className="bi bi-check-circle-fill text-success me-2"></i>Coordinación y agendamiento de reuniones.</li>
                                <li><i className="bi bi-check-circle-fill text-success me-2"></i>Presentar perfil de la empresa a interesados.</li>
                                <li><i className="bi bi-check-circle-fill text-success me-2"></i>Organizar reuniones en destino para evaluación.</li>
                                <li><i className="bi bi-check-circle-fill text-success me-2"></i>Apoyar en elaboración de acuerdos comerciales.</li>
                                <li><i className="bi bi-check-circle-fill text-success me-2"></i>Desarrollo de plan de desembarco (metas, plazos).</li>
                                <li><i className="bi bi-check-circle-fill text-success me-2"></i>Establecer programa de seguimiento y ajustes.</li>
                                <li><i className="bi bi-check-circle-fill text-success me-2"></i>Reportería y flujo de información comercial.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </section>
    )
}