import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { GetStaticPaths, GetStaticProps } from 'next'
import { PortableText, PortableTextComponents } from 'next-sanity'
import { motion } from 'framer-motion'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'

type Noticia = {
	_id: string
	titulo: string
	slug: { current: string }
	imagenPrincipal?: { asset?: { _ref: string }; alt?: string; caption?: string }
	descripcion: any[]
	_createdAt: string
	_updatedAt: string
}

interface NoticiaPageProps { noticia: Noticia }

// GROQ queries
const noticiaQuery = `*[_type == "noticia" && slug.current == $slug && publicado == true][0]{
	_id,
	titulo,
	slug,
	imagenPrincipal{asset, alt, caption},
	descripcion,
	_createdAt,
	_updatedAt
}`

const pathsQuery = `*[_type == "noticia" && defined(slug.current) && publicado == true]{ 'slug': slug.current }`

// PortableText custom renderers
const components: PortableTextComponents = {
	block: {
		h1: ({ children }) => <h1 className="mt-10 mb-4 text-3xl font-semibold tracking-tight text-slate-900 first:mt-0">{children}</h1>,
		h2: ({ children }) => <h2 className="mt-10 mb-4 text-2xl font-semibold tracking-tight text-slate-900">{children}</h2>,
		h3: ({ children }) => <h3 className="mt-8 mb-3 text-xl font-semibold tracking-tight text-slate-900">{children}</h3>,
		normal: ({ children }) => <p className="mb-5 leading-relaxed text-slate-700">{children}</p>,
		blockquote: ({ children }) => (
			<blockquote className="my-6 border-l-4 border-[#ff751f] bg-[#ff751f]/5 px-5 py-4 italic text-slate-700 rounded-r-md">
				{children}
			</blockquote>
		),
	},
	marks: {
		strong: ({ children }) => <strong className="font-semibold text-slate-900">{children}</strong>,
		em: ({ children }) => <em className="italic">{children}</em>,
		code: ({ children }) => (
			<code className="rounded bg-slate-800/90 px-1.5 py-0.5 text-[13px] font-mono text-slate-100">{children}</code>
		),
		link: ({ children, value }) => {
			const rel = !value.href.startsWith('/') ? 'noopener noreferrer' : undefined
			return (
				<a
					href={value.href}
					target={value.blank ? '_blank' : undefined}
					rel={rel}
					className="font-medium text-[#ff751f] underline-offset-2 hover:underline"
				>
					{children}
				</a>
			)
		},
	},
	types: {
		image: ({ value }) => {
			if (!value?.asset?._ref) return null
			return (
				<figure className="my-8 overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img
						src={urlFor(value).width(1600).quality(85).url()}
						alt={value.alt || ''}
						className="h-auto w-full object-cover"
						loading="lazy"
					/>
					{value.caption && (
						<figcaption className="px-4 py-2 text-center text-xs text-slate-500">{value.caption}</figcaption>
					)}
				</figure>
			)
		},
	},
	list: {
		bullet: ({ children }) => <ul className="mb-6 list-disc pl-6 text-slate-700 space-y-1">{children}</ul>,
		number: ({ children }) => <ol className="mb-6 list-decimal pl-6 text-slate-700 space-y-1">{children}</ol>,
	},
	listItem: {
		bullet: ({ children }) => <li className="marker:text-[#ff751f]">{children}</li>,
	},
}

export default function NoticiaPage({ noticia }: NoticiaPageProps) {
	if (!noticia) {
		return (
			<div className="mx-auto max-w-3xl px-6 py-24 text-center">
				<h1 className="text-3xl font-semibold tracking-tight text-slate-900">Noticia no encontrada</h1>
				<p className="mt-4 text-slate-600">La página solicitada no existe o ha sido despublicada.</p>
				<Link
					href="/noticias"
					className="mt-8 inline-flex rounded-xl bg-[#ff751f] px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-[#e5631a]"
				>
					Volver al listado
				</Link>
			</div>
		)
	}

	const imgUrl = noticia.imagenPrincipal?.asset && urlFor(noticia.imagenPrincipal).width(1600).height(800).quality(80).url()
	const site = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.grupochavon.com'
	const canonical = `${site}/noticias/${noticia.slug.current}`
	const published = noticia._createdAt
	const updated = noticia._updatedAt

	const articleJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline: noticia.titulo,
		datePublished: published,
		dateModified: updated,
		image: imgUrl ? [imgUrl] : undefined,
		mainEntityOfPage: canonical,
		author: {
			'@type': 'Organization',
			name: 'Grupo Chavón'
		},
		publisher: {
			'@type': 'Organization',
			name: 'Grupo Chavón',
			logo: {
				'@type': 'ImageObject',
				url: `${site}/grupo_chavon_logo.png`
			}
		}
	}

	return (
		<>
			<Head>
				<title>{noticia.titulo} · Grupo Chavón</title>
				<meta name="description" content={noticia.titulo} />
				{imgUrl && <meta property="og:image" content={imgUrl} />}
				<link rel="canonical" href={canonical} />
				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
			</Head>
			<Header />
			<article className="min-h-screen pb-30">
				{/* Hero */}
				<div className="relative">
					{imgUrl && (
						<div className="relative h-[65vh] w-full min-h-[400px] overflow-hidden">
							<Image
								src={imgUrl}
								alt={noticia.imagenPrincipal?.alt || noticia.titulo}
								fill
								sizes="100vw"
								priority
								className="object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/55" />
							<div className="absolute inset-0 flex items-end">
								<div className="mx-auto w-full max-w-4xl px-6 pb-10 sm:px-10 md:px-16">
									<motion.h1
										initial={{ opacity: 0, y: 18 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.55, ease: 'easeOut' }}
										className="text-3xl font-semibold tracking-tight text-white drop-shadow-sm sm:text-4xl md:text-5xl"
									>
										{noticia.titulo}
									</motion.h1>
									<motion.p
										initial={{ opacity: 0, y: 16 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
										className="mt-3 text-sm text-white/80"
									>
										Publicado: {new Date(published).toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' })}
									</motion.p>
								</div>
							</div>
						</div>
					)}
				</div>

				{/* Content */}
				<div className="mx-auto mt-12 w-full max-w-3xl px-6 sm:px-8 md:px-10">
					<PortableText value={noticia.descripcion} components={components} />

						<div className="mt-16 flex flex-wrap items-center gap-4 border-t border-slate-200 pt-8">
							<Link
								href="/noticias"
								className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-400 hover:bg-slate-50"
							>
								← Volver
							</Link>
							<Link
								href="/contact"
								className="inline-flex items-center rounded-xl bg-[#ff751f] px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-[#e5631a]"
							>
								Contáctanos
							</Link>
						</div>
				</div>
			</article>
			<Footer />
		</>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const slugs: { slug: string }[] = await client.fetch(pathsQuery)
		return { paths: slugs.map(s => ({ params: { slug: s.slug } })), fallback: 'blocking' }
	} catch {
		return { paths: [], fallback: 'blocking' }
	}
}

export const getStaticProps: GetStaticProps<NoticiaPageProps> = async ({ params }) => {
	const slug = params?.slug as string
	try {
		const noticia: Noticia | null = await client.fetch(noticiaQuery, { slug })
		if (!noticia) return { notFound: true, revalidate: 60 }
		return { props: { noticia }, revalidate: 300 }
	} catch (e) {
		return { notFound: true, revalidate: 60 }
	}
}

