import type React from "react"

const CompanySection: React.FC = () => {
  return (
    <section className="bg-[#172946] py-10">
      <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
        {/* Top decorative line */}
        <div className="w-full h-px bg-slate-600 mb-12"></div>

        {/* Main content */}
        <div className="text-center py-10">
          <p className="text-white text-2xl md:text-3xl lg:text-4xl leading-relaxed font-semibold">
            <span className="italic">
              Fundado con el propósito de contribuir al progreso de La 
              <br /> Romana, Grupo Chavón
            </span>{" "}
            ha crecido hasta convertirse en un 
            <br />conglomerado empresarial diversificado.
          </p>
        </div>

        {/* Bottom decorative line */}
        <div className="w-full h-px bg-slate-600 mt-12"></div>
      </div>
    </section>
  )
}

export default CompanySection
