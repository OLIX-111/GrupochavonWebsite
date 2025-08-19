export default function ValuesSection() {
  return (
    <section className="bg-white py-30 ">
      <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Title and description */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Valores Que Nos Guían Hacia El Futuro
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Nuestros Valores Son La Base De Cada Proyecto Y Decisión Que Tomamos, Guiándonos Hacia Un Futuro De
              Excelencia, Innovación Y Compromiso Con Nuestra Comunidad.
            </p>
          </div>

          {/* Right side - Values grid */}
          <div className="grid grid-cols-2 gap-8">
            {/* Innovación */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-orange-200 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Innovación</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Buscamos soluciones nuevas y efectivas para construir un futuro mejor.
              </p>
            </div>

            {/* Excelencia */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-orange-200 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Excelencia</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Nos esforzamos por superar expectativas en cada proyecto que emprendemos.
              </p>
            </div>

            {/* Sostenibilidad */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-orange-200 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Sostenibilidad</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Preservamos el medio ambiente mientras promovemos el desarrollo.
              </p>
            </div>

            {/* Compromiso */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-orange-200 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Compromiso</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Nuestra conexión con la comunidad impulsa todo lo que hacemos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
