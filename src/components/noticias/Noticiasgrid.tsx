import Image from "next/image"

const NOTICIAS = [
  {
    _id: 'local-1',
    titulo: 'Grupo Chavón reafirma su participación en Corferias 2025 | Bogotá, Colombia',
    url: 'https://grupo-chavon2.odoo.com/en/blog/costamar-open-waouse-3/grupo-chavon-reafirma-su-participacion-en-corferias-2025-bogota-colombia-5',
    imagen: '/home/noticia1.avif',
    fecha: 'Feb 2025',
  },
  {
    _id: 'local-3',
    titulo: 'Damos apertura oficial al proyecto Costa Mar con un Opening especial',
    url: 'https://grupo-chavon2.odoo.com/en/blog/costamar-open-waouse-3/damos-apertura-oficial-al-proyecto-costa-mar-con-un-opening-especial-4',
    imagen: '/home/noticia3.avif',
    fecha: 'Feb 2025',
  },
  {
    _id: 'odoo-6',
    titulo: 'Exitosa jornada de Open House en el proyecto Costa Mar',
    url: 'https://grupo-chavon2.odoo.com/en/blog/costamar-open-waouse-3/exitosa-jornada-de-open-house-en-el-proyecto-costa-mar-3',
    imagen: 'https://grupo-chavon2.odoo.com/web/image/20304-918da54e/Publicaci%C3%B3n%20de%20blog%20%27Exitosa%20jornada%20de%20Open%20House%20en%20el%20proyecto%20Costa%20Mar%27%20cover%20image.webp',
    fecha: 'Feb 2025',
  },
  {
    _id: 'odoo-7',
    titulo: 'Grupo Chavón fortalece su visión en el Mercado Construction & Real Estate Summit 2025',
    url: 'https://grupo-chavon2.odoo.com/en/blog/costamar-open-waouse-3/grupo-chavon-fortalece-su-vision-en-el-mercado-construction-real-estate-summit-2025-2',
    imagen: 'https://grupo-chavon2.odoo.com/web/image/20643-bed03e52/Publicaci%C3%B3n%20de%20blog%20%27Grupo%20Chav%C3%B3n%20fortalece%20su%20visi%C3%B3n%20en%20el%20Mercado%20Construction%20%26%20Real%20Estate%20Summit%202025%27%20cover%20image.webp',
    fecha: 'Feb 2025',
  },
  {
    _id: 'odoo-3',
    titulo: 'Comprometidos con el desarrollo de La Romana',
    url: 'https://grupo-chavon2.odoo.com/en/blog/costamar-open-waouse-3/comprometidos-con-el-desarrollo-de-la-romana-6',
    imagen: 'https://grupo-chavon2.odoo.com/web/image/20527-3c5e1d52/Publicaci%C3%B3n%20de%20blog%20%27Comprometidos%20con%20el%20desarrollo%20de%20La%20Romana%27%20cover%20image.jpeg',
    fecha: 'Feb 2025',
  },
  {
    _id: 'local-2',
    titulo: 'Alianza estratégica con Banco Santa Cruz',
    url: 'https://grupo-chavon2.odoo.com/en/blog/costamar-open-waouse-3/alianza-estrategica-con-banco-santa-cruz-8',
    imagen: '/home/noticia2.avif',
    fecha: 'Feb 2025',
  },
]

export default function NoticiasGrid() {
  return (
    <section className="pb-30">
      <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {NOTICIAS.map((article) => (
            <a
              key={article._id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={article.imagen}
                  alt={article.titulo}
                  fill
                  sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-transparent opacity-60 transition group-hover:opacity-70" />
                <span className="absolute bottom-2 left-2 rounded-md bg-black/60 px-2 py-1 text-[11px] font-medium uppercase tracking-wide text-white backdrop-blur-sm">
                  {article.fecha}
                </span>
              </div>
              <div className="p-6">
                <h3 className="mb-3 line-clamp-3 text-lg font-semibold tracking-tight text-slate-800 group-hover:text-[#ff751f] transition-colors">
                  {article.titulo}
                </h3>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-400">Leer más →</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
