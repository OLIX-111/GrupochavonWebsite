export default function HeroAbout() {
  return (
    <main className="py-30 bg-white">
      <section className="containerl mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
        {/* Hero Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Un Grupo, Una Visión: <span className="text-orange-500">Transformar La <br /> Romana</span>
          </h1>
        </div>

        {/* Description */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            En Grupo Chavón, nos dedicamos a impulsar el desarrollo de nuestra región a través de soluciones
            empresariales innovadoras. Desde nuestros inicios, hemos trabajado con un enfoque integral que combina
            excelencia, sostenibilidad y compromiso con nuestra comunidad.
          </p>
        </div>

        {/* Team Image */}
        <div className="flex justify-center">
          <div className="w-full max-w-7xl">
            <img
              src="/about/hero-about.avif"
              alt="Equipo de Grupo Chavón en stand de exhibición mostrando 40 años de trayectoria"
              className="w-full h-[590px] rounded-sm object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
