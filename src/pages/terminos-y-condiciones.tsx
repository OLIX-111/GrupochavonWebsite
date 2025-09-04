
import Footer from '@/components/ui/Footer';
import Header from '@/components/ui/Header';
import Head from 'next/head';
import Link from 'next/link';

export default function TerminosYCondiciones() {
  const title = "Términos y Condiciones | Grupo Chavón";
  const description = "Lee los términos y condiciones de uso del sitio web de Grupo Chavón.";

  return (
    <div className="pt-20">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="robots" content="index, follow" />
      </Head>
      <Header />
      <main className="containerl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-12 text-gray-900">
        <h1 className="text-3xl md:text-4xl font-semibold mb-2">Términos y Condiciones</h1>
        <p className="text-sm text-gray-400 mb-10">Fecha de entrada en vigor: 5 de enero del 2025</p>

        <section className="space-y-8 leading-relaxed text-gray-700">
          <div>
            <p>Bienvenido al sitio web de Grupo Chavón. Al acceder y utilizar nuestro sitio, aceptas los términos y condiciones establecidos a continuación. Por favor, léelos cuidadosamente antes de navegar por nuestro sitio web.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">1. Uso del Sitio</h2>
            <p>El acceso a este sitio está destinado a fines informativos sobre los servicios, empresas y proyectos de Grupo Chavón. Al utilizar este sitio, te comprometes a:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Usarlo únicamente para fines legales y de manera que no infrinja los derechos de terceros ni restrinja su uso.</li>
              <li>No intentar dañar, sobrecargar o interferir con el funcionamiento del sitio web.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">2. Propiedad Intelectual</h2>
            <p>Todos los contenidos del sitio web, incluidos textos, imágenes, logotipos y diseño, son propiedad de Grupo Chavón o de terceros que han autorizado su uso. Está estrictamente prohibido copiar, reproducir o distribuir cualquier contenido sin el consentimiento previo por escrito de Grupo Chavón.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">3. Recolección y Uso de Información</h2>
            <p>Cualquier información personal proporcionada a través del sitio web está sujeta a nuestra{' '}
              <Link href="/politica-de-privacidad" className="underline text-blue-400">Política de Privacidad</Link>.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">4. Uso de Cookies</h2>
            <h3 className="text-xl font-semibold mb-1 mt-4">Utilización de Cookies:</h3>
            <p>Utilizamos cookies y herramientas similares para mejorar tu experiencia de navegación y analizar el uso del sitio web.</p>
            <h3 className="text-xl font-semibold mb-1 mt-4">Tipos de Cookies:</h3>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li><b>Cookies Necesarias:</b> Estas cookies garantizan el funcionamiento adecuado del sitio web y son esenciales para que puedas navegar y utilizar las funcionalidades básicas.</li>
              <li><b>Cookies de Análisis:</b> Herramientas como Google Analytics nos ayudan a entender el comportamiento de los usuarios en el sitio, permitiéndonos mejorar su funcionalidad y contenido.</li>
            </ul>
            <h3 className="text-xl font-semibold mb-1 mt-4">Gestión de Cookies:</h3>
            <p>Puedes configurar o desactivar las cookies a través de las preferencias de tu navegador. Sin embargo, ten en cuenta que algunas funciones del sitio web pueden verse afectadas si decides desactivarlas.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">5. Limitación de Responsabilidad</h2>
            <p>Grupo Chavón no se hace responsable por:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Errores u omisiones en el contenido del sitio web.</li>
              <li>Interrupciones en el acceso al sitio debido a causas técnicas.</li>
              <li>Daños derivados del uso de información obtenida a través del sitio.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">6. Enlaces a Sitios de Terceros</h2>
            <p>Nuestro sitio puede contener enlaces a sitios web de terceros. No somos responsables por el contenido, las políticas o las prácticas de privacidad de dichos sitios. Te recomendamos revisar los términos y condiciones de los sitios externos que visites.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">7. Modificaciones</h2>
            <p>Grupo Chavón se reserva el derecho de actualizar o modificar estos términos y condiciones en cualquier momento. Las modificaciones serán efectivas desde su publicación en el sitio web.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">8. Ley Aplicable</h2>
            <p>Estos términos y condiciones se rigen por las leyes de la República Dominicana. Cualquier disputa será sometida a los tribunales competentes del país.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">9. Contacto</h2>
            <p>Si tienes preguntas sobre estos Términos y Condiciones, puedes contactarnos a través de:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li><b>Teléfono:</b> 829-222-2481</li>
              <li><b>Correo Electrónico:</b> <a href="mailto:info@grupochavon.com" className="underline text-blue-400">info@grupochavon.com</a></li>
              <li><b>Dirección Física:</b> Reparto Torres C/ 4ta #5, La Romana</li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
