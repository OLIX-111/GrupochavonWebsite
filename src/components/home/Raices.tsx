import Link from "next/link"

export default function HeritageSection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="relative flex items-center">
          {/* Rectángulo azul de fondo */}
          <div className="bg-[#172946] ml-auto w-[80%] min-h-[500px] flex items-center rounded-sm ">
            <div className="px-12 py-16 lg:px-16 w-full lg:w-[60%] ml-70">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8 leading-tight">
                Desde nuestras raíces hasta un futuro sostenible
              </h2>

              <p className="text-white/90 text-lg leading-relaxed mb-10">
                En 2023, con nuestra primera aparición en la feria inmobiliaria de La Estancia, marcamos el inicio de la
                transformación de este destino. Grupo Chavón nació para impulsar el desarrollo, trascendiendo desde La
                Romana hacia múltiples destinos. Lo que comenzó como un proyecto constructivo se ha convertido en un
                grupo empresarial diversificado con impacto en construcción, publicidad, bienes raíces, ebanistería y
                turismo, contribuyendo al desarrollo local.
              </p>

              <Link href="/about" className="bg-[#ee8e0a] text-white font-semibold px-10 py-4 rounded-xl transition-colors duration-200">
                Conozca Más
              </Link>
            </div>
          </div>

          {/* Imagen superpuesta a la izquierda */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[520px] h-[500px] shadow-2xl">
            <img
              src="/home/raicesimg.avif"
              alt="Equipo de Grupo Chavón en evento inmobiliario celebrando 40 años"
              className="w-full h-full object-cover rounded-sm"
            />
          </div>
        </div>
      </div>
    </section>
  )
}