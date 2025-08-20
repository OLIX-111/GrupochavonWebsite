import Link from "next/link"

export default function TeamSection() {
  return (
    <section className="py-30 bg-white">
      <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              El Equipo que Impulsa Nuestros Destinos
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              En Grupo Chavón, nuestro equipo es el motor que transforma ideas en realidades. Desde La Romana, nuestro
              origen, cada miembro contribuye con dedicación y experiencia para liderar proyectos que generan empleos,
              preservan el entorno y promueven la riqueza cultural.
            </p>

            <Link href="/about" className="bg-[#ee8e0a] text-white font-semibold px-10 py-4 rounded-xl transition-colors duration-200">
                Conozca Más
              </Link>
          </div>

          {/* Right side - Image */}
          <div className="relative">
            <img
              src="/home/equipo.avif"
              alt="Equipo de construcción revisando planos en obra"
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
