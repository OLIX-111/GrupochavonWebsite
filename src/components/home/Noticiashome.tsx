import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/sanity/lib/image'
import { useEffect, useState } from 'react'
import { client } from '@/sanity/lib/client'

interface NewsArticle {
  _id: string
  titulo: string
  slug: { current: string }
  imagenPrincipal?: { asset?: { _ref: string }; alt?: string }
  _createdAt: string
  isExternal?: boolean
  externalUrl?: string
  externalImage?: string
}

interface Props {
  initial?: NewsArticle[]
  limit?: number
}

const FALLBACK_NEWS: NewsArticle[] = [
  {
    _id: 'local-1',
    titulo: 'Grupo Chavón reafirma su participación en Corferias 2025 | Bogotá, Colombia',
    slug: { current: '' },
    externalUrl: 'https://grupo-chavon2.odoo.com/en/blog/costamar-open-waouse-3/grupo-chavon-reafirma-su-participacion-en-corferias-2025-bogota-colombia-5',
    externalImage: '/home/noticia1.avif',
    _createdAt: '2026-02-11T00:00:00.000Z',
    isExternal: true,
  },
  {
    _id: 'local-3',
    titulo: 'Damos apertura oficial al proyecto Costa Mar con un Opening especial',
    slug: { current: '' },
    externalUrl: 'https://grupo-chavon2.odoo.com/en/blog/costamar-open-waouse-3/damos-apertura-oficial-al-proyecto-costa-mar-con-un-opening-especial-4',
    externalImage: '/home/noticia3.avif',
    _createdAt: '2026-02-11T00:00:00.000Z',
    isExternal: true,
  },
  {
    _id: 'odoo-6',
    titulo: 'Exitosa jornada de Open House en el proyecto Costa Mar',
    slug: { current: '' },
    externalUrl: 'https://grupo-chavon2.odoo.com/en/blog/costamar-open-waouse-3/exitosa-jornada-de-open-house-en-el-proyecto-costa-mar-3',
    externalImage: 'https://grupo-chavon2.odoo.com/web/image/20304-918da54e/Publicaci%C3%B3n%20de%20blog%20%27Exitosa%20jornada%20de%20Open%20House%20en%20el%20proyecto%20Costa%20Mar%27%20cover%20image.webp',
    _createdAt: '2026-02-11T00:00:00.000Z',
    isExternal: true,
  },
  {
    _id: 'odoo-7',
    titulo: 'Grupo Chavón fortalece su visión en el Mercado Construction & Real Estate Summit 2025',
    slug: { current: '' },
    externalUrl: 'https://grupo-chavon2.odoo.com/en/blog/costamar-open-waouse-3/grupo-chavon-fortalece-su-vision-en-el-mercado-construction-real-estate-summit-2025-2',
    externalImage: 'https://grupo-chavon2.odoo.com/web/image/20643-bed03e52/Publicaci%C3%B3n%20de%20blog%20%27Grupo%20Chav%C3%B3n%20fortalece%20su%20visi%C3%B3n%20en%20el%20Mercado%20Construction%20%26%20Real%20Estate%20Summit%202025%27%20cover%20image.webp',
    _createdAt: '2026-02-11T00:00:00.000Z',
    isExternal: true,
  },
  {
    _id: 'odoo-3',
    titulo: 'Comprometidos con el desarrollo de La Romana',
    slug: { current: '' },
    externalUrl: 'https://grupo-chavon2.odoo.com/en/blog/costamar-open-waouse-3/comprometidos-con-el-desarrollo-de-la-romana-6',
    externalImage: 'https://grupo-chavon2.odoo.com/web/image/20527-3c5e1d52/Publicaci%C3%B3n%20de%20blog%20%27Comprometidos%20con%20el%20desarrollo%20de%20La%20Romana%27%20cover%20image.jpeg',
    _createdAt: '2026-02-12T00:00:00.000Z',
    isExternal: true,
  },
  {
    _id: 'local-2',
    titulo: 'Alianza estratégica con Banco Santa Cruz',
    slug: { current: '' },
    externalUrl: 'https://grupo-chavon2.odoo.com/en/blog/costamar-open-waouse-3/alianza-estrategica-con-banco-santa-cruz-8',
    externalImage: '/home/noticia2.avif',
    _createdAt: '2026-02-13T00:00:00.000Z',
    isExternal: true,
  },
]

const query = (limit: number) => `*[_type=="noticia" && publicado==true]|order(coalesce(orden,999) asc,_createdAt desc)[0...${limit}]{
  _id,titulo,slug,imagenPrincipal{asset,alt},_createdAt
}`

export default function NewsSection({ initial, limit = 6 }: Props) {
  const [items, setItems] = useState<NewsArticle[] | null>(initial?.length ? initial : null)
  const [loading, setLoading] = useState(!initial?.length)

  useEffect(() => {
    if (items) return
    let cancelled = false
    client
      .fetch(query(limit))
      .then((res) => {
        if (!cancelled) {
          setItems(res?.length ? res : FALLBACK_NEWS.slice(0, limit))
          setLoading(false)
        }
      })
      .catch(() => {
        if (!cancelled) {
          setItems(FALLBACK_NEWS.slice(0, limit))
          setLoading(false)
        }
      })
    return () => { cancelled = true }
  }, [items, limit])

  const displayItems = items ?? (initial?.length ? initial : FALLBACK_NEWS.slice(0, limit))

  return (
    <section className="bg-[#172946] py-14">
      {/* Header — padded */}
      <div className="mx-auto w-full px-6 sm:px-10 md:px-16 lg:px-24 max-w-[1600px] mb-12">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-2">Noticias y Actualizaciones</h2>
            <p className="text-gray-300 text-base">
              Conoce nuestros logros más recientes y las iniciativas que están transformando La Romana.
            </p>
          </div>
          <Link
            href="/noticias"
            className="shrink-0 bg-[#ee8e0a] text-white px-8 py-4 rounded-xl font-semibold transition-colors duration-300 hover:bg-[#d67e09]"
          >
            Ver Todas las Noticias
          </Link>
        </div>
      </div>

      {/* Cards — full width, left-to-right */}
      {loading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 px-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="animate-pulse rounded-2xl overflow-hidden bg-white/5">
              <div className="bg-white/10" style={{ aspectRatio: '3/2' }} />
              <div className="p-4 space-y-2">
                <div className="h-3 bg-white/10 rounded w-full" />
                <div className="h-3 bg-white/10 rounded w-3/4" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 px-4">
          {displayItems.map((article) => {
            const isExternal = article.isExternal
            const href = isExternal
              ? article.externalUrl!
              : `/noticias/${article.slug.current}`
            const img = isExternal
              ? article.externalImage!
              : article.imagenPrincipal?.asset
                ? urlFor(article.imagenPrincipal).width(600).height(800).quality(90).url()
                : '/home/noticia1.avif'

            return (
              <a
                key={article._id}
                href={href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className="group flex flex-col rounded-2xl overflow-hidden bg-[#172946] ring-1 ring-white/25 outline-none cursor-pointer"
              >
                <div className="relative w-full" style={{ aspectRatio: '3/2' }}>
                  <Image
                    src={img}
                    alt={article.titulo}
                    fill
                    sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 16vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                </div>
                <div className="p-4">
                  <p className="text-white text-sm font-medium leading-snug line-clamp-3 group-hover:text-[#ee8e0a] transition-colors duration-300">
                    {article.titulo}
                  </p>
                </div>
              </a>
            )
          })}
        </div>
      )}
    </section>
  )
}
