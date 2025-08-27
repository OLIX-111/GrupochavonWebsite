export default function Marcas() {
  const companies = [
    { name: "CHAVON LA ESTANCIA", logo: "/marcas/chavon-laestancia.avif", url: "" },
    { name: "5K", logo: "/marcas/5k.avif", url: "" },
    { name: "Asecal", logo: "/marcas/asecal.avif", url: "" },
    { name: "Chavon Tu Destino", logo: "/marcas/chavon-tudestino.avif", url: "" },
    { name: "Expo Caleta", logo: "/marcas/expocaleta.avif", url: "" },
    { name: "Waoo Experience", logo: "/marcas/Waoo-experience.avif", url: "" },
    { name: "Waoo Beach Club", logo: "/marcas/Waoo-Beachclueb.avif", url: "" },
    { name: "Waoo Podcast", logo: "/marcas/waoo-podcast.avif", url: "" },
  ]

  return (
    <section className="bg-white py-30 mt-16">
      <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
        {/* Header */}
        <div className="w-full justify-start items-start mb-10">
          <h2 className="text-3xl md:text-2xl font-medium text-gray-900 leading-tight mx-auto">
            En Grupo Chavón, impulsamos el desarrollo a través de nuestras marcas, cada una especializada en su 
            sector para ofrecer soluciones innovadoras y de alta calidad.

          </h2>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-2 border border-gray-200 rounded-md md:grid-cols-4 gap-8 md:gap-6 items-center py-5">
          {companies.map((company, index) => (
            <div key={index} className="flex items-center justify-center">
              <div
                className="text-center block"
              >
                <img
                  src={company.logo || "/placeholder.svg"}
                  alt={`${company.name} logo`}
                  className="h-12 md:h-44 w-auto mx-auto object-contain transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
