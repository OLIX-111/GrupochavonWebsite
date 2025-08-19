import type React from "react"

const ContactAbout: React.FC = () => {
  return (
    <section className="py-30">
      <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
        <div
          className="relative w-full h-105 rounded-sm overflow-hidden"
          style={{
            backgroundImage: "url('/about/contactohome.avif')",
          }}
        >
          {/* Overlay oscuro para mejorar legibilidad */}
          <div className="absolute inset-0 bg-[#172946]/90"></div>

          {/* Contenido principal centrado */}
          <div className="relative flex flex-col items-center justify-center h-full text-center py-8 px-8">
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed max-w-4xl mb-8">
              En Grupo Chavón, creemos en las conexiones que impulsan grandes ideas y proyectos.
            </h2>

            <button className="bg-transparent border-3 border-white text-white px-8 py-3 rounded-xl font-medium hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
              Contáctanos
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactAbout
