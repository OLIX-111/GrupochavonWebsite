import Link from "next/link"

export default function HeritageSection() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
        {/* Mobile: Stack vertically */}
        <div className="flex flex-col gap-6 md:hidden">
          {/* Imagen arriba en móvil */}
          <div className="w-full h-[280px] shadow-lg rounded-sm overflow-hidden">
            <img
              src="/home/raicesimg.avif"
              alt="Equipo de Grupo Chavón en evento inmobiliario celebrando 40 años"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Contenido debajo en móvil */}
          <div className="bg-[#172946] px-6 py-8 rounded-sm">
            <h2 className="text-2xl font-bold text-white mb-4 leading-tight">
              Desde nuestras raíces hasta un futuro sostenible
            </h2>

            <p className="text-white/90 text-base leading-relaxed mb-6">
              En 2023, con nuestra primera aparición en la feria inmobiliaria de La Estancia, marcamos el inicio de la
              transformación de este destino. Grupo Chavón nació para impulsar el desarrollo, trascendiendo desde La
              Romana hacia múltiples destinos. Lo que comenzó como un proyecto constructivo se ha convertido en un
              grupo empresarial diversificado con impacto en construcción, publicidad, bienes raíces, ebanistería y
              turismo, contribuyendo al desarrollo local.
            </p>

            <Link href="/about" className="inline-block bg-[#ee8e0a] text-white font-semibold px-8 py-3 rounded-xl transition-colors duration-200 hover:bg-[#d67e09]">
              Conozca Más
            </Link>
          </div>
        </div>

        {/* Desktop & Tablet: Overlapping layout */}
        <div className="hidden md:block relative">
          <div className="relative flex items-center">
            {/* Rectángulo azul de fondo */}
            <div className="bg-[#172946] ml-auto w-[85%] lg:w-[80%] min-h-[400px] lg:min-h-[500px] flex items-center rounded-sm">
              <div className="px-8 py-12 lg:px-16 lg:py-16 w-full lg:w-[60%] ml-auto">
                <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-6 lg:mb-8 leading-tight">
                  Desde nuestras raíces hasta un futuro sostenible
                </h2>

                <p className="text-white/90 text-base lg:text-lg leading-relaxed mb-8 lg:mb-10">
                  En 2023, con nuestra primera aparición en la feria inmobiliaria de La Estancia, marcamos el inicio de la
                  transformación de este destino. Grupo Chavón nació para impulsar el desarrollo, trascendiendo desde La
                  Romana hacia múltiples destinos. Lo que comenzó como un proyecto constructivo se ha convertido en un
                  grupo empresarial diversificado con impacto en construcción, publicidad, bienes raíces, ebanistería y
                  turismo, contribuyendo al desarrollo local.
                </p>

                <Link href="/about" className="inline-block bg-[#ee8e0a] text-white font-semibold px-8 lg:px-10 py-3 lg:py-4 rounded-xl transition-colors duration-200 hover:bg-[#d67e09]">
                  Conozca Más
                </Link>
              </div>
            </div>

            {/* Imagen superpuesta a la izquierda */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[45%] lg:w-[520px] h-[350px] lg:h-[500px] shadow-2xl rounded-sm overflow-hidden">
              <img
                src="/home/raicesimg.avif"
                alt="Equipo de Grupo Chavón en evento inmobiliario celebrando 40 años"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}