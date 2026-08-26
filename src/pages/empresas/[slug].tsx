import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { PortableText, PortableTextComponents } from 'next-sanity'
import { motion } from 'framer-motion'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'

type Empresa = {
	_id: string
	titulo: string
	slug: { current: string }
	imagenPrincipal?: {
		asset: { _ref: string; _type: string }
		alt?: string
	}
	descripcion: any[]
}

interface EmpresaPageProps {
	empresa: Empresa
}

const empresaQuery = `*[_type == "empresa" && slug.current == $slug && publicado == true][0]{
	_id,
	titulo,
	slug,
	imagenPrincipal{alt, asset},
	descripcion
}`

const pathsQuery = `*[_type == "empresa" && defined(slug.current) && publicado == true]{ 'slug': slug.current }`

const components: PortableTextComponents = {
	block: {
		h1: ({ children }) => <h1 className="mt-10 mb-4 text-3xl font-semibold tracking-tight text-slate-900 first:mt-0">{children}</h1>,
		h2: ({ children }) => <h2 className="mt-10 mb-4 text-2xl font-semibold tracking-tight text-slate-900">{children}</h2>,
		h3: ({ children }) => <h3 className="mt-8 mb-3 text-xl font-semibold tracking-tight text-slate-900">{children}</h3>,
		normal: ({ children }) => <p className="mb-5 leading-relaxed text-slate-700">{children}</p>,
		blockquote: ({ children }) => (
			<blockquote className="my-6 border-l-4 border-[#ee8e0a] bg-[#ee8e0a]/5 px-5 py-4 italic text-slate-700 rounded-r-md">
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
					className="font-medium text-[#ee8e0a] underline-offset-2 hover:underline"
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
		bullet: ({ children }) => <li className="marker:text-[#ee8e0a]">{children}</li>,
	},
}

export default function EmpresaPage({ empresa }: EmpresaPageProps) {
	if (!empresa) {
		return (
			<div className="mx-auto max-w-3xl px-6 py-24 text-center">
				<h1 className="text-3xl font-semibold tracking-tight text-slate-900">Empresa no encontrada</h1>
				<p className="mt-4 text-slate-600">La página solicitada no existe o ha sido despublicada.</p>
				<Link
					href="/empresas"
					className="mt-8 inline-flex rounded-xl bg-[#ee8e0a] px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-[#d77a00]"
				>
					Volver al listado
				</Link>
			</div>
		)
	}

	const imgUrl = empresa.imagenPrincipal?.asset && urlFor(empresa.imagenPrincipal).width(1600).height(800).quality(80).url()

	return (
		<>
			<Head>
				<title>{empresa.titulo} · Grupo Chavón</title>
				<meta name="description" content={empresa.titulo} />
				{imgUrl && <meta property="og:image" content={imgUrl} />}
			</Head>
            <>
                <Header/>
                <article className="min-h-screen pb-30">
                    {/* Hero */}
                    <div className="relative">
                        {imgUrl && (
                            <div className="relative h-[70vh] w-full min-h-[420px] overflow-hidden">
                                <Image
                                    src={imgUrl}
                                    alt={empresa.imagenPrincipal?.alt || empresa.titulo}
                                    fill
                                    sizes="100vw"
                                    priority
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-black/45" />
                                <div className="absolute inset-0 flex items-end">
                                    <div className="mx-auto w-full max-w-5xl px-6 pb-10 sm:px-10 md:px-16">
                                        <motion.h1
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, ease: 'easeOut' }}
                                            className="text-3xl font-semibold tracking-tight text-white drop-shadow-sm sm:text-4xl md:text-5xl"
                                        >
                                            {empresa.titulo}
                                        </motion.h1>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Content */}
                    <div className="mx-auto mt-12 w-full max-w-3xl px-6 sm:px-8 md:px-10">
                        <PortableText value={empresa.descripcion} components={components} />

                        <div className="mt-16 flex flex-wrap items-center gap-4 border-t border-slate-200 pt-8">
                            <Link
                                href="/empresas"
                                className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-400 hover:bg-slate-50"
                            >
                                ← Volver
                            </Link>
                            <Link
                                href="/contacto"
                                className="inline-flex items-center rounded-xl bg-[#ee8e0a] px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-[#d77a00]"
                            >
                                Contáctanos
                            </Link>
                        </div>
                    </div>
                </article>
                <Footer/>
            </>
		</>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const slugs: { slug: string }[] = await client.fetch(pathsQuery)
		return { paths: slugs.map((s) => ({ params: { slug: s.slug } })), fallback: 'blocking' }
	} catch {
		return { paths: [], fallback: 'blocking' }
	}
}

export const getStaticProps: GetStaticProps<EmpresaPageProps> = async ({ params }) => {
	const slug = params?.slug as string
	try {
		const empresa: Empresa | null = await client.fetch(empresaQuery, { slug })
		if (!empresa) {
			return { notFound: true, revalidate: 60 }
		}
		return {
			props: { empresa },
			revalidate: 300, // 5 min ISR
		}
	} catch (e) {
		return { notFound: true, revalidate: 60 }
	}
}

