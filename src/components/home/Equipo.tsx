import Link from "next/link"

export default function TeamSection() {
  return (
    <section className="bg-white overflow-hidden">
      <div className="flex flex-col lg:flex-row items-stretch">

        {/* Izquierda — contenido con padding */}
        <div className="w-full lg:w-[45%] px-6 sm:px-10 md:px-16 lg:pl-24 lg:pr-16 flex flex-col justify-center space-y-6 py-12 lg:py-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            El Equipo que Impulsa Nuestros Destinos
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            En Grupo Chavón, nuestro equipo es el motor que transforma ideas en realidades. Desde La Romana, nuestro
            origen, cada miembro contribuye con dedicación y experiencia para liderar proyectos que generan empleos,
            preservan el entorno y promueven la riqueza cultural.
          </p>
          <div>
            <Link href="/about" className="bg-[#ff751f] text-white font-semibold px-10 py-4 rounded-xl transition-colors duration-200 inline-block hover:bg-[#e5631a]">
              Conozca Más
            </Link>
          </div>
        </div>

        {/* Derecha — imagen pegada al borde derecho, sin padding */}
        <div className="w-full lg:w-[55%] h-[420px] lg:h-[650px]">
          <img
            src="/home/equipo3.png"
            alt="Ingeniero de Grupo Chavón supervisando obra al atardecer"
            className="w-full h-full object-cover"
            style={{ objectPosition: '35% center' }}
          />
        </div>

      </div>
    </section>
  )
}
