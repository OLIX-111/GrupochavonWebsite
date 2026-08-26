"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import { motion, AnimatePresence } from "framer-motion"

interface NewsArticle {
  _id: string
  titulo: string
  slug: { current: string }
  imagenPrincipal?: { asset?: { _ref: string }; alt?: string }
  _createdAt: string
  excerpt?: string
}

const query = `*[_type == "noticia" && publicado == true] | order(coalesce(orden, 9999) asc, _createdAt desc) {
  _id, titulo, slug, imagenPrincipal{alt, asset}, _createdAt,
  "excerpt": pt::text(descripcion)
}`

export default function NoticiasGrid() {
  const [data, setData] = useState<NewsArticle[] | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let active = true
    async function load() {
      try {
        const res: NewsArticle[] = await client.fetch(query)
        if (!active) return
        setData(res)
      } catch (e: any) {
        if (!active) return
        setError(e?.message || 'No se pudieron cargar las noticias')
      } finally {
        if (active) setLoading(false)
      }
    }
    load()
    return () => { active = false }
  }, [])

  const formatDate = (iso: string) => {
    try {
      return new Intl.DateTimeFormat('es-ES', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }).format(new Date(iso))
    } catch {
      return iso.split('T')[0]
    }
  }

  return (
    <section className="pb-24 bg-white">
      <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
        {error && (
          <div className="mb-8 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {loading &&
              Array.from({ length: 6 }).map((_, i) => (
                <motion.div
                  key={`skeleton-${i}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-3"
                >
                  <div className="aspect-video w-full animate-pulse rounded-xl bg-slate-200" />
                  <div className="h-5 w-3/4 animate-pulse rounded bg-slate-200" />
                  <div className="h-4 w-full animate-pulse rounded bg-slate-200" />
                  <div className="h-4 w-2/3 animate-pulse rounded bg-slate-200" />
                </motion.div>
              ))}
          </AnimatePresence>

          {!loading && data?.length === 0 && (
            <div className="col-span-full py-16 text-center text-slate-500">
              Aún no hay noticias publicadas.
            </div>
          )}

          {!loading &&
            data?.map((article, i) => {
              const imageUrl = article.imagenPrincipal?.asset?._ref
                ? urlFor(article.imagenPrincipal).width(800).height(450).quality(80).fit('crop').url()
                : '/placeholder.svg'

              const excerpt = article.excerpt
                ? article.excerpt.slice(0, 180).trimEnd() + (article.excerpt.length > 180 ? '...' : '')
                : null

              return (
                <motion.div
                  key={article._id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i % 3 * 0.1 }}
                >
                <Link
                  href={`/noticias/${article.slug.current}`}
                  className="group flex flex-col"
                >
                  {/* Image */}
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl mb-4">
                    <img
                      src={imageUrl}
                      alt={article.imagenPrincipal?.alt || article.titulo}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded bg-white/85 backdrop-blur-sm px-2.5 py-1 text-xs font-medium text-gray-700">
                      <svg className="w-3.5 h-3.5 text-[#ee8e0a]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                      </svg>
                      Noticias
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold leading-snug text-gray-900 mb-2 line-clamp-2 group-hover:text-[#ee8e0a] transition-colors">
                    {article.titulo}
                  </h3>

                  {/* Excerpt */}
                  {excerpt && (
                    <p className="text-sm text-gray-600 mb-3 line-clamp-3 flex-1">
                      {excerpt}
                    </p>
                  )}

                  {/* Footer */}
                  <div className="flex items-center justify-between text-xs text-gray-500 mt-auto pt-2">
                    <span className="font-medium">{formatDate(article._createdAt)}</span>
                    <span className="flex items-center gap-1 text-[#ee8e0a] font-medium">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                      </svg>
                      Noticias
                    </span>
                  </div>
                </Link>
                </motion.div>
              )
            })}
        </div>
      </div>
    </section>
  )
}
