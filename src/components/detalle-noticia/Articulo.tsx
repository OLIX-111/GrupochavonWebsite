export default function ArticleSection() {
  return (
    <div className="pb-30 bg-white">
        <section className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
            {/* Date */}
            <p className="text-gray-600 text-sm mb-6">Sep 5, 2024</p>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl font-medium text-black leading-tight mb-8">
                GRUPO CHAVÓN DESTACA EN LA 
                <br /> FERIA INMOBILIARIA LA ESTANCIA 
                <br /> 2024 Y GRAN COPA INVITACIONAL.
            </h1>

            {/* Subtitle */}
            <p className="text-gray-500 italic text-lg mb-8 border-l-4 border-gray-300 pl-4">
                Una experiencia inolvidable que combinó exclusividad residencial y pasión por el golf
            </p>

            {/* Article Content */}
            <div className="space-y-6 text-gray-800 leading-relaxed">
                <p>
                <strong>La Romana, República Dominicana — Octubre 2024.-</strong> Por segundo año consecutivo, Grupo Chavón, a
                través de su destacada inmobiliaria <strong>LRomana Real Estate</strong>, reafirma su compromiso con la
                excelencia y la innovación al participar en la <strong>Feria Inmobiliaria La Estancia 2024</strong> y su{" "}
                <strong>Gran Copa Invitacional</strong>. Este evento, celebrado los pasados{" "}
                <strong>4 y 5 de octubre en La Estancia, La Romana</strong>, marcó un nuevo hito en el sector inmobiliario y
                deportivo del país.
                </p>

                <p>
                El proyecto <strong>Frailejón Village</strong>, presentado en la feria, cautivó a los asistentes con su
                espectacular maqueta que refleja la esencia de este desarrollo exclusivo. Compuesto por villas de 3 y 4
                habitaciones, Frailejón Village combina lujo, modernidad y privacidad en un entorno que conecta con la
                naturaleza. Este proyecto ha sido diseñado para ofrecer a los inversionistas y futuros residentes un estilo de
                vida único en el corazón de La Estancia Golf & Country Club.
                </p>

                <p>
                En el marco de la feria, <strong>Grupo Chavón</strong> ofreció una atractiva promoción de{" "}
                <strong>US$3,000 de cashback</strong>, una oportunidad única que captó la atención de compradores locales y
                extranjeros interesados en invertir en un ambiente tranquilo, seguro y de primer nivel.
                </p>

                <p>
                La <strong>Gran Copa Invitacional de La Estancia</strong> se consolidó como el principal atractivo para los
                amantes del golf, reuniendo a los mejores golfistas de la República Dominicana en un ambiente de sana
                competencia y camaradería. Este evento no solo resaltó la belleza natural del entorno, sino también la
                importancia de La Estancia como destino de clase mundial para el deporte y la recreación.
                </p>
            </div>
    </section>
    </div>
      )
}
