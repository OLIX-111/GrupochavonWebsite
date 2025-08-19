import type React from "react"

interface ValueCard {
  icon: React.ReactNode
  title: string
  description: string
}

const ValuesSection: React.FC = () => {
  const values: ValueCard[] = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
      title: "Compromiso con los Destinos",
      description:
        "Trabajamos por el bienestar de las comunidades donde operamos, promoviendo oportunidades económicas y sociales mientras fortalecemos el desarrollo sostenible a nivel nacional e internacional.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
        </svg>
      ),
      title: "Diversidad Empresarial",
      description:
        "Nuestras empresas abarcan sectores clave como la construcción, publicidad, bienestarices, ebanistería y turismo, impulsando elcrecimiento integral de destinos a nivel nacional e internacional.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z" />
        </svg>
      ),
      title: "Innovación Constante",
      description:
        "Creamos soluciones modernas y sostenibles que transforman cada destino, liderando con creatividad, tecnología avanzada y un compromiso inquebrantable con la excelencia.",
    },
  ]

  return (
    <section className="py-30 bg-[#f9faff]">
      <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Impulsando el Desarrollo de Nuestros Destinos
            <br />
            con Innovación y Excelencia
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Grupo Chavón es un conglomerado empresarial comprometido con transformar los destinos en los que
            intervenimos convirtiéndolos en motores de desarrollo económico, social y turístico. A través de nuestras
            empresas, para construir un futuro sostenible.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-7">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white justify-start py-11 px-9 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <div className="text-orange-500">{value.icon}</div>
              </div>

              {/* Content */}
              <div className="">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 w-70 leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ValuesSection
