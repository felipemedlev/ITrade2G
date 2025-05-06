import Image from 'next/image';

export default function LoQueHacemos() {
    return (
        <section className="py-5">
          <div className="container">
            <div className="row align-items-center g-5">
               <div className="col-lg-6">
                 <h2 className="display-6 fw-bold mb-4"><i className="bi bi-lightbulb me-2 text-primary"></i>Lo Que Hacemos</h2>
                 <p className="text-dark">Ayudamos a empresas a expandirse más allá de su mercado local, identificando oportunidades y superando desafíos en su camino hacia la internacionalización.</p> 
                 <p className="text-dark">Diseñamos en conjunto una propuesta de valor competitiva, alineada con las expectativas del nuevo mercado en innovación, precio, calidad y servicio.</p> 
                 <p className="text-dark">Seleccionamos al socio estratégico ideal en cada país, priorizando alianzas que aseguren crecimiento rentable, posicionamiento de marca y relaciones a largo plazo.</p>
               </div>
               <div className="col-lg-6 text-center d-none d-lg-block">
                  <Image
                    src="/world.jpg"
                    alt="world image"
                    width={250}
                    height={350}
                    className="rounded-4 shadow-lg"
                    priority
                    />
               </div>
            </div>
          </div>
        </section>
    )
}