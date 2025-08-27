import Link from "next/link"

interface Sector {
  id: string
  name: string
  image: string
  href: string
}

const sectors: Sector[] = [
  /* { name: "Construccion", href: "/empresas/dyaccsa" },
    { name: "Ebanisteria", href: "/empresas/ebanisteria-la-romana" },
    { name: "Bienes Raices", href: "/empresas/l-romana-real-estate" },
    
    { name: "Turismo", href: "/empresas/wao-experience" },
    { name: "Responsabilidad social", href: "/empresas/responsabilidad-social" }, */
  {
    id: "construccion",
    name: "Construcción",
    image: "/home/sector1.avif",
    href: "/empresas/dyaccsa",
  },
  {
    id: "ebanisteria",
    name: "Ebanistería",
    image: "/home/sector2.avif",
    href: "/empresas/ebanisteria-la-romana",
  },
  {
    id: "bienes-raices",
    name: "Bienes Raíces",
    image: "/home/sector3.avif",
    href: "/empresas/l-romana-real-estate",
  },
  {
    id: "publicidad",
    name: "Publicidad",
    image: "/home/sector4.avif",
    href: "/empresas",
  },
  {
    id: "turismo",
    name: "Turismo",
    image: "/home/sector5.avif",
    href: "/empresas/wao-experience",
  },
  {
    id: "responsabilidad-social",
    name: "Responsabilidad Social",
    image: "/home/sector6.avif",
    href: "/empresas/responsabilidad-social",
  },
]

export default function SectorsSection() {
  return (
    <section className="py-30 bg-white">
      <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Impulsando Sectores Clave para el Desarrollo
            <br />
            de La Romana
          </h2>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector) => (
            <Link
              key={sector.id}
              href={sector.href}
              className="group relative h-64 overflow-hidden"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${sector.image})`,
                }}
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-[#172946]/60 group-hover:bg-[#172946]/90 transition-shadow" />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-12">
                <h3 className="text-3xl font-bold text-white">{sector.name}</h3>

                {/* Arrow Icon */}
                <div className="text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300 self-end">
                  <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
