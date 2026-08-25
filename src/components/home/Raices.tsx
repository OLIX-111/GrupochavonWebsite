import Link from "next/link"

export default function HeritageSection() {
  return (
    <section className="bg-white py-12 md:py-20 overflow-hidden">

      {/* Mobile: Stack vertically */}
      <div className="flex flex-col gap-6 md:hidden px-4 sm:px-6">
        <div className="w-full h-[280px] shadow-lg rounded-sm overflow-hidden">
          <img
            src="/home/raicesimg.webp"
            alt="Equipo de Grupo Chavón en evento inmobiliario"
            className="w-full h-full object-cover"
          />
        </div>
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

      {/* Desktop & Tablet: full-width context so image reaches the left edge */}
      <div className="hidden md:flex relative items-center">

        {/* Rectángulo azul — right-aligned, takes right 76% */}
        <div className="bg-[#172946] ml-auto w-[76%] min-h-[560px] lg:min-h-[650px] rounded-sm flex items-center">
          <div className="ml-auto w-[62%] px-8 lg:px-16 xl:px-20 py-12 lg:py-16">
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

        {/* Imagen — desde el borde izquierdo del viewport */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[50%] h-[460px] lg:h-[560px] shadow-2xl rounded-sm overflow-hidden bg-white">
          <img
            src="/home/raicesimg.webp"
            alt="Equipo de Grupo Chavón en evento inmobiliario"
            className="w-full h-full object-contain"
          />
        </div>

      </div>
    </section>
  )
}
