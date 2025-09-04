import Head from 'next/head';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';

export default function PoliticaDePrivacidad() {
  const title = "Política de Privacidad | Grupo Chavón";
  const description = "Lee la política de privacidad de Grupo Chavón y cómo protegemos tus datos personales.";

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
        <h1 className="text-3xl md:text-4xl font-semibold mb-2">Política de Privacidad</h1>
        <p className="text-sm text-gray-400 mb-10">Fecha de entrada en vigor: 5 de enero del 2025</p>

        <section className="space-y-8 leading-relaxed text-gray-700">
          <div>
            <p>En Grupo Chavón, valoramos la privacidad de nuestros usuarios y estamos comprometidos a proteger la información personal que compartan con nosotros. Esta Política de Privacidad detalla cómo recolectamos, utilizamos y protegemos los datos personales obtenidos a través de nuestro sitio web.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">1. Información que Recopilamos</h2>
            <p>Recolectamos los siguientes datos personales a través de nuestro formulario de contacto disponible en <a href="https://grupochavon.com/contact" className="underline text-blue-400">https://grupochavon.com/contact</a>:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Nombre</li>
              <li>Teléfono</li>
              <li>Correo electrónico</li>
              <li>Mensaje</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">2. Cómo Recopilamos los Datos</h2>
            <p>La recolección de datos se realiza exclusivamente mediante el formulario de contacto proporcionado en nuestro sitio web.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">3. Uso de la Información</h2>
            <p>La información que recopilamos se utiliza para:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Responder a las consultas enviadas por los usuarios.</li>
              <li>Contactar a los usuarios para posibles inclusiones en campañas de correo electrónico relacionadas con nuestros servicios y actualizaciones.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">4. Compartir Datos con Terceros</h2>
            <p>Grupo Chavón no comparte los datos personales recopilados con terceros bajo ninguna circunstancia, salvo que sea requerido por ley.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">5. Seguridad de los Datos</h2>
            <p>Implementamos medidas técnicas y organizativas adecuadas para proteger la información personal de los usuarios contra accesos no autorizados, pérdida, uso indebido o divulgación. Estas medidas incluyen el uso de protocolos de seguridad en nuestro sitio web y sistemas internos para la gestión de datos.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">6. Derechos de los Usuarios</h2>
            <p>Los usuarios tienen los siguientes derechos en relación con sus datos personales:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li><b>Acceso:</b> Tienen derecho a solicitar acceso a los datos que hemos recopilado.</li>
              <li><b>Corrección:</b> Pueden solicitar la corrección de información incorrecta o desactualizada.</li>
              <li><b>Eliminación:</b> Pueden solicitar la eliminación de sus datos personales, salvo que sea necesario conservarlos para cumplir con requisitos legales.</li>
              <li><b>Restricción del Uso:</b> Pueden solicitar la limitación del uso de sus datos en ciertos casos.</li>
            </ul>
            <p>Para ejercer estos derechos, los usuarios pueden contactarnos a través de los medios indicados en la sección de contacto.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">7. Uso de Cookies</h2>
            <p>Nuestro sitio web no utiliza cookies ni tecnologías similares para rastrear o recopilar información sobre el comportamiento de los usuarios.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">8. Retención de los Datos</h2>
            <p>Los datos personales recopilados se conservarán por un período de 3 años o hasta que el usuario solicite su eliminación.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">9. Transferencia Internacional de Datos</h2>
            <p>Grupo Chavón no transfiere los datos personales recopilados a países fuera de la República Dominicana.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">10. Contacto</h2>
            <p>Para consultas sobre esta Política de Privacidad o para ejercer sus derechos sobre los datos personales, los usuarios pueden contactarnos a través de:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li><b>Teléfono:</b> 829-222-2481</li>
              <li><b>Correo Electrónico:</b> <a href="mailto:info@grupochavon.com" className="underline text-blue-400">info@grupochavon.com</a></li>
              <li><b>Dirección Física:</b> Reparto Torres C/ 4ta #5, La Romana</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">11. Cambios en la Política de Privacidad</h2>
            <p>Grupo Chavón se reserva el derecho de actualizar esta Política de Privacidad en cualquier momento. Se notificará a los usuarios sobre cualquier cambio publicando la versión actualizada en esta página con la fecha de entrada en vigor correspondiente.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
