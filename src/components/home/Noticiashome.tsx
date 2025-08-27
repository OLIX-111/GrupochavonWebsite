import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { useEffect, useState } from 'react'
import { client } from '@/sanity/lib/client'

interface NewsArticle {
  _id: string
  titulo: string
  slug: { current: string }
  imagenPrincipal?: { asset?: { _ref: string }; alt?: string }
  _createdAt: string
}

interface Props {
  initial?: NewsArticle[]
  limit?: number
}

const query = (limit: number) => `*[_type=="noticia" && publicado==true]|order(coalesce(orden,999) asc,_createdAt desc)[0...${limit}]{
  _id,titulo,slug,imagenPrincipal{asset,alt},_createdAt
}`

export default function NewsSection({ initial, limit = 3 }: Props) {
  const [items, setItems] = useState<NewsArticle[] | null>(initial || null)
  const [loading, setLoading] = useState(!initial)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (items) return
    let cancelled = false
    client
      .fetch(query(limit))
      .then((res) => { if (!cancelled) { setItems(res); setLoading(false) } })
      .catch((e) => { if (!cancelled) { setError('No se pudieron cargar las noticias'); setLoading(false) } })
    return () => { cancelled = true }
  }, [items, limit])

  return (
    <section className="bg-[#172946] py-30">
      <div className="mx-auto w-full px-6 sm:px-10 md:px-16 lg:px-24 max-w-7xl">
        <div className="mb-16 flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="mb-8 lg:mb-0">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Noticias y Actualizaciones</h2>
            <p className="text-gray-300 text-lg max-w-2xl">Conoce nuestros logros más recientes y las iniciativas que están transformando La Romana.</p>
          </div>
          <Link href="/noticias" className="bg-[#ee8e0a] text-white px-10 py-4 rounded-xl font-semibold transition-colors duration-300 self-start lg:self-auto">
            Ver Todas las Noticias
          </Link>
        </div>

        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: limit }).map((_, i) => (
              <div key={i} className="animate-pulse rounded-xl overflow-hidden bg-white/5 border border-white/10">
                <div className="aspect-video bg-white/10" />
                <div className="p-6 space-y-3">
                  <div className="h-4 bg-white/10 rounded w-3/4" />
                  <div className="h-4 bg-white/10 rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        )}

        {error && (
          <p className="text-red-300 text-sm">{error}</p>
        )}

        {items && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((article) => {
              const img = article.imagenPrincipal?.asset ? urlFor(article.imagenPrincipal).width(800).height(450).quality(80).url() : '/home/noticia1.avif'
              const date = new Date(article._createdAt).toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' })
              return (
                <Link key={article._id} href={`/noticias/${article.slug.current}`} className="group cursor-pointer rounded-xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-sm hover:border-white/20 transition">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={img}
                      alt={article.imagenPrincipal?.alt || article.titulo}
                      fill
                      sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-white font-semibold text-lg mb-3 line-clamp-3 group-hover:text-[#ee8e0a] transition-colors duration-300">{article.titulo}</h3>
                    <p className="text-gray-400 text-sm">{date}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
