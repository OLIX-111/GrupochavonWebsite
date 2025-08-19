import Image from "next/image"

export default function ProjectsSection() {
  return (
    <section className="bg-[#fefaf5] py-30 ">
      <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
        {/* First Row - Text Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
              Transformando La Romana, <br className="hidden lg:block" />
              Proyecto A Proyecto
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              En Grupo Chavón, entendemos que nuestro éxito no solo se mide en números, sino en las vidas que impactamos
              y las oportunidades que creamos. Cada proyecto que emprendemos refleja nuestro compromiso con el
              desarrollo sostenible, la generación de empleo y la promoción cultural de nuestra región.
            </p>
          </div>
          <div className="relative">
            <Image
              src="/about/legado1.avif"
              alt="Desarrollo costero en La Romana con faro y edificios"
              width={600}
              height={400}
              className="rounded-sm w-full h-auto"
            />
          </div>
        </div>

        {/* Second Row - Image Left, Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <Image
              src="/about/legado2.avif"
              alt="Trabajador de construcción en obra"
              width={600}
              height={400}
              className="rounded-sm w-full h-auto"
            />
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
              Un Legado De Excelencia Y <br className="hidden lg:block" />
              Progreso En La Romana
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Con más de 40 años de experiencia, Grupo Chavón ha sido un pilar fundamental en la transformación de La
              Romana. Nuestra trayectoria está marcada por proyectos innovadores que combinan calidad, visión
              empresarial y un impacto positivo en la comunidad. Cada paso que damos está guiado por nuestro compromiso
              con el bienestar social, la sostenibilidad y el desarrollo económico de nuestra región.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
