import Link from "next/link"

interface NewsArticle {
  id: string
  title: string
  date: string
  image: string
  slug: string
}

export default function NewsSection() {
  const newsArticles: NewsArticle[] = [
    {
      id: "1",
      title: "Grupo Chavón participa en feria internacional coofertas 2024 | Bogotá Colombia",
      date: "13 ene 2025",
      image: "/home/noticia1.avif",
      slug: "grupo-chavon-feria-bogota-2024",
    },
    {
      id: "2",
      title: "Grupo Chavón Participa en la Feria Inmobiliaria de Banreservas en Nueva York y Lawrence",
      date: "22 mar 2024",
      image: "/home/noticia2.avif",
      slug: "grupo-chavon-feria-banreservas-nueva-york",
    },
    {
      id: "3",
      title: "GRUPO CHAVÓN DESTACA EN LA FERIA INMOBILIARIA LA ESTANCIA 2024 Y GRAN COPA INVITACIONAL...",
      date: "5 sept 2024",
      image: "/home/noticia3.avif",
      slug: "grupo-chavon-feria-estancia-2024",
    },
  ]

  return (
    <section className="bg-[#172946] py-30 ">
      <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16">
          <div className="mb-8 lg:mb-0">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Noticias y Actualizaciones</h2>
            <p className="text-gray-300 text-lg max-w-2xl">
              Conoce nuestros logros más recientes y las iniciativas que están transformando La Romana.
            </p>
          </div>
          <Link
            href="/noticias"
            className="bg-[#ee8e0a] text-white px-10 py-4 rounded-xl font-semibold transition-colors duration-300 self-start lg:self-auto"
          >
            Ver Todas las Noticias
          </Link>
        </div>

        {/* News Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article) => (
            <Link key={article.id} href={`/detalle-noticias/${article.slug}`} className="group cursor-pointer">
              <div className="overflow-hidden ">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-[#ffffff] font-semibold text-lg mb-4 line-clamp-3 group-hover:text-orange-600 transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{article.date}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
