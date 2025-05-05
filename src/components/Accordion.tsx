export default function Accordion() {
    return (
        <section className="py-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col text-center">
              <h2 className="display-6 fw-bold mb-4"><i className="bi bi-people-fill me-2 text-primary"></i>Agenciamiento y Externalización</h2>
            </div>
          </div>
          <div className="row">
            <div className="col">
              {/* Using an accordion for this section */}
              <div className="accordion accordion-flush" id="agenciamientoAccordion">
                {/* Item 1 */}
                <div className="accordion-item rounded mb-2">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"> {/* Added fw-semibold */}
                      1. Agente Comisionista
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#agenciamientoAccordion">
                    <div className="accordion-body text-muted"> {/* Added text-muted */}
                      <ul className="list-unstyled">
                        <li><i className="bi bi-diagram-3 me-2 text-primary"></i>Sólida red de distribuidores e importadores en LATAM.</li>
                        <li><i className="bi bi-check2-circle me-2 text-primary"></i>Validar viabilidad comercial en mercado objetivo.</li>
                        <li><i className="bi bi-graph-up me-2 text-primary"></i>Seguimiento de venta e inventarios (reportería periódica).</li>
                        <li><i className="bi bi-percent me-2 text-primary"></i>Retribución por comisiones por venta.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Item 2 */}
                <div className="accordion-item rounded mb-2">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> {/* Added fw-semibold */}
                      2. Externalización Gerencia Internacional
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#agenciamientoAccordion">
                    <div className="accordion-body text-muted"> {/* Added text-muted */}
                      <p>Gerencia Internacional externalizada a tiempo parcial, y acceso “on demand” a especialistas.</p>
                      <ul className="list-unstyled">
                        <li><i className="bi bi-lightning-charge-fill text-warning me-2"></i>Acceso acelerado a expertise y buenas prácticas.</li>
                        <li><i className="bi bi-building me-2 text-primary"></i>Organización mantiene foco en su core business.</li>
                        <li><i className="bi bi-gear-wide-connected me-2 text-primary"></i>Procesos eficientes (Know How de expertos).</li>
                        <li><i className="bi bi-currency-dollar text-danger me-2"></i>Sin costos fijos de personal, infraestructura, tecnología.</li>
                        <li><i className="bi bi-shuffle me-2 text-primary"></i>Flexibilidad frente a cambios del entorno.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Item 3 */}
                <div className="accordion-item rounded mb-2">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> {/* Added fw-semibold */}
                      3. Área COMEX
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#agenciamientoAccordion">
                    <div className="accordion-body text-muted">
                      <ul className="list-unstyled">
                        <li><i className="bi bi-tools me-2 text-primary"></i>Consultoría de estructura y procedimientos COMEX.</li>
                        <li><i className="bi bi-cash-coin me-2 text-primary"></i>Asesoría en negociación de tarifas (navieras, terrestres).</li>
                        <li><i className="bi bi-file-earmark-text me-2 text-primary"></i>Procesos y documentación para exportación (agentes gobierno/privados).</li>
                        {/* Note: Last point seems duplicated from Agente Comisionista, omitting for clarity unless specified */}
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Item 4 */}
                <div className="accordion-item rounded">
                  <h2 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour"> {/* Added fw-semibold */}
                      4. Consultoría Integral de Productos
                    </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#agenciamientoAccordion">
                    <div className="accordion-body text-muted">
                      <ul className="list-unstyled">
                        <li><i className="bi bi-shield-check me-2 text-primary"></i>Verificación de normativas sanitarias y comerciales (contenido, claims, alérgenos).</li>
                        <li><i className="bi bi-tags me-2 text-primary"></i>Revisión cumplimiento normas de etiquetado e ingredientes.</li>
                        <li><i className="bi bi-pencil-square me-2 text-primary"></i>Recomendaciones para reformular recetas.</li>
                        <li><i className="bi bi-box-seam me-2 text-primary"></i>Parametrización logística, pruebas (transporte, inocuidad, Shelf life).</li>
                        <li><i className="bi bi-r-circle me-2 text-primary"></i>Administración y gestión registro/renovaciones de marcas.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ section>
    )
}