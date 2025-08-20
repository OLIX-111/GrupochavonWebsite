export default function HeroEmpresa() {
  return (
    <main className="py-30 bg-white">
      <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
        {/* Hero Text */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 leading-tight max-w-4xl mx-auto">
            Construimos Más que Espacios, <br className="hidden sm:block" />
            Creamos Proyectos que <br className="hidden sm:block" />
            Transforman Comunidades
          </h1>
        </div>

        {/* Hero Image */}
        <div className="relative w-full mx-auto">
          <div className="relative overflow-hidden rounded-sm shadow-2xl">
            <img
              src="/empresa/empresa1.webp"
              alt="Trabajador de construcción de Grupo Chavon con equipo de construcción"
              className="w-full h-[600px] object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  )
}
