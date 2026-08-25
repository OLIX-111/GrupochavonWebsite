export default function CompaniesSection() {
  const companies = [
    { name: "Tretton Dominicana", logo: "https://grupo-chavon2.odoo.com/web/image/37738-6e7a114d/Agregar%20un%20t%C3%ADtulo%20%285%29.webp", url: "https://odoo.grupochavon.com/web#action=website.website_preview&path=%2F&website_id=8" },
    { name: "ROMANA EBANISTERIA", logo: "https://grupo-chavon2.odoo.com/web/image/19161-ce2648bc/Dise%C3%B1o%20sin%20t%C3%ADtulo%20%286%29.webp", url: "https://www.romanaebanisteria.com/" },
    { name: "ROMANA", logo: "https://grupo-chavon2.odoo.com/web/image/19145-43a67e27/Lromana%20con%20COLOR%29.webp", url: "https://lromanarealestate.com/" },
    { name: "HORMIGÓN", logo: "https://grupo-chavon2.odoo.com/web/image/19162-53f515fb/Dise%C3%B1o%20sin%20t%C3%ADtulo%20%287%29.webp", url: "" },
    { name: "RD CAPITAL", logo: "https://grupo-chavon2.odoo.com/web/image/38119-d9143b1f/Dise%C3%B1o%20sin%20t%C3%ADtulo%20%2871%29.png", url: "" },
    { name: "Novach", logo: "https://grupo-chavon2.odoo.com/web/image/19168-ad4b4b6d/Nuestras%20Empresas%20%2814%29.webp", url: "https://www.instagram.com/novach.rd/" },
    { name: "Waoo Experience", logo: "https://grupo-chavon2.odoo.com/web/image/19128-7749607e/54.webp", url: "https://www.waooexperience.com/" },
    { name: "Fundación Chavón", logo: "https://grupo-chavon2.odoo.com/web/image/19141-380da9d3/Nuestras%20Empresas%20%2810%29.png", url: "/empresas/responsabilidad-social" },
  ]

  return (
    <section id="empresas" className="bg-white py-30">
      {/* Header */}
      <div className="text-center mb-10 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
          Empresas Innovadoras, Claves para el Crecimiento Sostenible de Nuestros Destinos
        </h2>
      </div>

      {/* Companies Grid — de borde a borde */}
      <div className="grid grid-cols-4 items-center py-10 px-6 gap-y-14">
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
                className="max-h-36 md:max-h-52 w-auto max-w-full mx-auto object-contain transition-all duration-300 cursor-pointer"
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
