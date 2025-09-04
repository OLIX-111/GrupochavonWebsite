"use client"

import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#f1f1f1] py-16">
      <div className="containerl mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
          <div className="">
            <Image
              src="/grupo_chavon_logo.png"
              alt="Logo Grupo Chavón"
              width={150}
              height={50}
              className="mb-6 h-30 w-auto"
            />
            <div>
              <ul className="space-y-3 text-gray-600">
                <li><Link href="/politica-de-privacidad" className="">Política de Privacidad</Link></li>
                <li><Link href="/terminos-y-condiciones" className="">Términos y Condiciones</Link></li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {/* Navegación */}
          <div>
            <h3 className="text-sm uppercase tracking-widest mb-6">Navegación</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="">Inicio</Link></li>
              <li><Link href="/about" className="">Nosotros</Link></li>
              <li><Link href="/noticias" className="">Noticias</Link></li>
            </ul>
          </div>

          {/* Empresas */}
          <div>
            <h3 className="text-sm uppercase tracking-widest mb-6">Empresas</h3>
            <ul className="space-y-3">
              <li><Link href="/empresas/dyaccsa" target="_blank" className="">Dyaccsa</Link></li>
              <li><Link href="https://lromanarealestate.com/" target="_blank" className="">L&rsquo;ROMAna Real State</Link></li>
              <li><Link href="https://www.romanaebanisteria.com/" target="_blank" className="">Romana Ebanisteria</Link></li>
              <li><Link href="/empresas/responsabilidad-social" className="">Fundacion Chavon</Link></li>
              <li><Link href="https://www.waooexperience.com/" target="_blank" className="">Waoo Experience</Link></li>
            </ul>
          </div>

          {/* Proyectos */}
          <div>
            <h3 className="text-sm uppercase tracking-widest mb-6">Proyectos</h3>
            <ul className="space-y-3">
              <li><Link href="https://lromanarealestate.com/costamar" className="">Costa Mar</Link></li>
              <li><Link href="https://lromanarealestate.com/stone-tower-3" className="">Stone Tower 3</Link></li>
              <li><Link href="https://lromanarealestate.com/frailejonvillage" className="">Frailejon Village</Link></li>
            </ul>
          </div>
          </div>
          
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">© 2025 Grupo Chavón. Todos los derechos reservados.</p>
          <div className="flex space-x-4">
            {/* <Link href="/politica-de-privacidad" className="text-sm text-gray-400 ">Política de Privacidad</Link>
            <Link href="/terminos-y-condiciones" className="text-sm text-gray-400 ">Términos y Condiciones</Link> */}
          </div>
        </div>
      </div>
    </footer>
  )
}