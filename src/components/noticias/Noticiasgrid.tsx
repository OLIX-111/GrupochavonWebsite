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
}

interface SanityNews {
  _id: string
  titulo: string
  slug: { current: string }
  imagenPrincipal?: { asset?: { _ref: string }; alt?: string }
  _createdAt: string
}

const query = `*[_type == "noticia" && publicado == true] | order(coalesce(orden, 9999) asc, _createdAt desc) {
  _id, titulo, slug, imagenPrincipal{alt, asset}, _createdAt
}`

export default function NoticiasGrid() {
  const [data, setData] = useState<NewsArticle[] | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let active = true
    async function load() {
      try {
        const res: SanityNews[] = await client.fetch(query)
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
    return () => {
      active = false
    }
  }, [])

  const formatDate = (iso: string) => {
    try {
      return new Intl.DateTimeFormat('es-ES', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(iso))
    } catch {
      return iso.split('T')[0]
    }
  }

  return (
    <section className="pb-30">
      <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
        {error && (
          <div className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Loading skeletons */}
          <AnimatePresence>
            {loading &&
              Array.from({ length: 3 }).map((_, i) => (
                <motion.div
                  key={`skeleton-${i}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
                >
                  <div className="aspect-video animate-pulse bg-slate-200/70" />
                  <div className="space-y-3 p-6">
                    <div className="h-4 w-3/4 animate-pulse rounded bg-slate-200" />
                    <div className="h-4 w-1/2 animate-pulse rounded bg-slate-200" />
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>

          {!loading && data && data.length === 0 && (
            <div className="col-span-full rounded-xl border border-slate-200 bg-white p-10 text-center text-slate-600">
              Aún no hay noticias publicadas.
            </div>
          )}

            {!loading && data && data.map((article) => {
              const imageUrl = article.imagenPrincipal?.asset?._ref
                ? urlFor(article.imagenPrincipal).width(800).height(450).quality(80).fit('crop').url()
                : '/placeholder.svg'
              return (
                <Link
                  key={article._id}
                  href={`/noticias/${article.slug.current}`}
                  className="group cursor-pointer overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="relative aspect-video overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={imageUrl}
                      alt={article.imagenPrincipal?.alt || article.titulo}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-transparent opacity-60 transition group-hover:opacity-70" />
                    <span className="absolute bottom-2 left-2 rounded-md bg-black/60 px-2 py-1 text-[11px] font-medium uppercase tracking-wide text-white backdrop-blur-sm">
                      {formatDate(article._createdAt)}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-3 line-clamp-3 text-lg font-semibold tracking-tight text-slate-800 group-hover:text-[#ff751f] transition-colors">
                      {article.titulo}
                    </h3>
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-400">Leer más →</p>
                  </div>
                </Link>
              )
            })}
        </div>
      </div>
    </section>
  )
}
