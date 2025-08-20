import type React from "react"
import Link from "next/link"

const ContactServicio: React.FC = () => {
  return (
    <section className="py-30">
      <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="relative w-full h-105 rounded-sm  bg-[#172946] overflow-hidden">
          <div className="flex flex-col items-center justify-center h-full text-center py-8 px-8">
            <h2 className="text-white text-2xl md:text-3xl lg:text-5xl font-medium leading-relaxed max-w-4xl mb-8">
              Construyamos Juntos el Futuro que Imaginaste con la Excelencia de Grupo Chavón
            </h2>

            <Link href="/contacts" className="bg-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
              Contáctanos
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactServicio
