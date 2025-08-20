import Image from "next/image"

const HeroDetalle = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
        {/* Contenedor de la imagen */}
        <div className="w-full relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[600px]">
          <Image
            src="/detalle-noticia/detalle1.avif"
            alt="Equipo profesional en evento corporativo"
            fill
            className="object-fill rounded-2xl"
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroDetalle