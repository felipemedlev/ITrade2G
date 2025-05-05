import Image from 'next/image';

export default function LoQueHacemos() {
    return (
        <section className="py-5">
          <div className="container">
            <div className="row align-items-center g-5">
               <div className="col-lg-6">
                 <h2 className="display-6 fw-bold mb-4"><i className="bi bi-lightbulb me-2 text-primary"></i>Lo Que Hacemos</h2>
                 <p className="text-dark">Apoyamos a empresas en poner una mirada fuera de su mercado local y expandirse internacionalmente. Superamos desafíos, buscando y aprovechando las oportunidades que nos ofrece el mercado internacional.</p>
                 <p className="text-dark">Trabajamos colaborativamente una propuesta de valor atractiva y comparable con el competidor mainstream del nuevo mercado, ajustada a las expectativas de rentabilidad de la empresa y las del consumidor en innovación, precio, calidad y servicio.</p>
                 <p className="text-dark">Buscamos, evaluamos y proponemos la mejor opción de socio estratégico en cada mercado, dónde el foco será su capacidad de enfrentar el desafío de trabajo conjunto para que su marca sea un participante relevante del mercado, en forma rentable y con una relación de largo plazo.</p>
               </div>
               <div className="col-lg-6 text-center">
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