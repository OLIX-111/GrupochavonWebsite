export default function CompaniesSection() {
  const companies = [
    { name: "DYACCSA", logo: "/home/dyaccsalogo.avif", url: "/empresas" },
    { name: "ROMANA EBANISTERIA", logo: "/home/romanaebanisteria-logo.avif", url: "https://www.romanaebanisteria.com/" },
    { name: "ROMANA", logo: "/home/lromana-logo.avif", url: "https://lromanarealestate.com/" },
    { name: "HORMIGÓN", logo: "/home/hormigon-logo.avif", url: "https://hormigon.com.do" },
    { name: "RD CAPITAL", logo: "/home/rdcapital-logo.avif", url: "https://rdcapital.com.do" },
    { name: "Novach", logo: "/home/novach-logo.avif", url: "/empresas" },
    { name: "Waoo HOTEL", logo: "/home/waoo-logo.avif", url: "/empresas" },
    { name: "CHAVON", logo: "/home/fundacion-logo.avif", url: "/empresas" },
  ]

  return (
    <section id="empresas" className="bg-white py-30">
      <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
            Empresas Innovadoras, Claves para el Crecimiento Sostenible de Nuestros Destinos
          </h2>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-2 border border-gray-200 rounded-md md:grid-cols-4 gap-8 md:gap-6 items-center py-5">
          {companies.map((company, index) => (
            <div key={index} className="flex items-center justify-center">
              <a
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center block"
                aria-label={`Visitar sitio web de ${company.name}`}
              >
                <img
                  src={company.logo || "/placeholder.svg"}
                  alt={`${company.name} logo`}
                  className="h-12 md:h-44 w-auto mx-auto object-contain transition-all duration-300 cursor-pointer"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
