import Image from 'next/image'

interface NewsArticle {
  _id: string
  titulo: string
  externalUrl: string
  externalImage: string
  brighten?: boolean
}

const NEWS: NewsArticle[] = [
  {
    _id: 'local-1',
    titulo: 'Grupo Chavón reafirma su participación en Corferias 2025 | Bogotá, Colombia',
    externalUrl: 'https://grupo-chavon2.odoo.com/en/blog/costamar-open-waouse-3/grupo-chavon-reafirma-su-participacion-en-corferias-2025-bogota-colombia-5',
    externalImage: '/home/noticia1.avif',
  },
  {
    _id: 'local-3',
    titulo: 'Damos apertura oficial al proyecto Costa Mar con un Opening especial',
    externalUrl: 'https://grupo-chavon2.odoo.com/en/blog/costamar-open-waouse-3/damos-apertura-oficial-al-proyecto-costa-mar-con-un-opening-especial-4',
    externalImage: '/home/noticia3.avif',
  },
  {
    _id: 'odoo-6',
    titulo: 'Exitosa jornada de Open House en el proyecto Costa Mar',
    externalUrl: 'https://grupo-chavon2.odoo.com/en/blog/costamar-open-waouse-3/exitosa-jornada-de-open-house-en-el-proyecto-costa-mar-3',
    externalImage: 'https://grupo-chavon2.odoo.com/web/image/20304-918da54e/Publicaci%C3%B3n%20de%20blog%20%27Exitosa%20jornada%20de%20Open%20House%20en%20el%20proyecto%20Costa%20Mar%27%20cover%20image.webp',
    brighten: true,
  },
  {
    _id: 'odoo-7',
    titulo: 'Grupo Chavón fortalece su visión en el Mercado Construction & Real Estate Summit 2025',
    externalUrl: 'https://grupo-chavon2.odoo.com/en/blog/costamar-open-waouse-3/grupo-chavon-fortalece-su-vision-en-el-mercado-construction-real-estate-summit-2025-2',
    externalImage: 'https://grupo-chavon2.odoo.com/web/image/20643-bed03e52/Publicaci%C3%B3n%20de%20blog%20%27Grupo%20Chav%C3%B3n%20fortalece%20su%20visi%C3%B3n%20en%20el%20Mercado%20Construction%20%26%20Real%20Estate%20Summit%202025%27%20cover%20image.webp',
    brighten: true,
  },
  {
    _id: 'odoo-3',
    titulo: 'Comprometidos con el desarrollo de La Romana',
    externalUrl: 'https://grupo-chavon2.odoo.com/en/blog/costamar-open-waouse-3/comprometidos-con-el-desarrollo-de-la-romana-6',
    externalImage: 'https://grupo-chavon2.odoo.com/web/image/20527-3c5e1d52/Publicaci%C3%B3n%20de%20blog%20%27Comprometidos%20con%20el%20desarrollo%20de%20La%20Romana%27%20cover%20image.jpeg',
  },
  {
    _id: 'local-2',
    titulo: 'Alianza estratégica con Banco Santa Cruz',
    externalUrl: 'https://grupo-chavon2.odoo.com/en/blog/costamar-open-waouse-3/alianza-estrategica-con-banco-santa-cruz-8',
    externalImage: '/home/noticia2.avif',
  },
]

interface Props {
  limit?: number
}

export default function NewsSection({ limit = 6 }: Props) {
  const displayItems = NEWS.slice(0, limit)

  return (
    <section className="bg-[#172946] py-14">
      <div className="mx-auto w-full px-6 sm:px-10 md:px-16 lg:px-24 max-w-[1600px] mb-12">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-2">Noticias y Actualizaciones</h2>
            <p className="text-gray-300 text-base">
              Conoce nuestros logros más recientes y las iniciativas que están transformando La Romana.
            </p>
          </div>
          <a
            href="https://grupo-chavon2.odoo.com/noticias-grupo-chavon"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-[#ff751f] text-white px-8 py-4 rounded-xl font-semibold transition-colors duration-300 hover:bg-[#e5631a]"
          >
            Ver Todas las Noticias
          </a>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 px-4">
        {displayItems.map((article) => (
          <a
            key={article._id}
            href={article.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col rounded-2xl overflow-hidden bg-[#172946] ring-1 ring-white/25 outline-none cursor-pointer"
          >
            <div className="relative w-full" style={{ aspectRatio: '3/2' }}>
              <Image
                src={article.externalImage}
                alt={article.titulo}
                fill
                sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 16vw"
                className={`object-cover transition-transform duration-500 group-hover:scale-105${article.brighten ? ' brightness-110' : ''}`}
                style={article.brighten ? { filter: 'brightness(1.6) saturate(1.1)' } : undefined}
              />
              {!article.brighten && (
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
              )}
            </div>
            <div className="p-4">
              <p className="text-white text-sm font-medium leading-snug line-clamp-3 group-hover:text-[#ff751f] transition-colors duration-300">
                {article.titulo}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
