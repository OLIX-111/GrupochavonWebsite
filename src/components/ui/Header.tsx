"use client"

import { Fragment, useEffect, useState } from "react"
import Link from "next/link"
import { Popover, Transition } from "@headlessui/react"
import { LucideChevronDown, Menu, X } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

type HeaderProps = {
  transparent?: boolean
  logoSrc?: string
  logoTransparentSrc?: string
}

export default function Header({
  transparent = false,
  logoSrc = "/grupo_chavon_logo.png",
  logoTransparentSrc = "/grupo_chavon_alt_logo.avif",
}: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const proyectos = [
    { name: "Frailejon", href: "/frailejonvillage" },
    { name: "Altos De Frailejon", href: "/altos-de-frailejon" },
    { name: "Costa Mar", href: "/costamar" },
    { name: "Stone Tower III", href: "/stone-tower-3" },
  ]
  const servicios = [
    { name: "Construccion", href: "/empresas" },
    { name: "Ebanisteria", href: "/empresas" },
    { name: "Bienes Raices", href: "/empresas" },
    { name: "Publicidad", href: "/empresas" },
    { name: "Turismo", href: "/empresas" },
    { name: "Responsabilidad social", href: "/empresas" },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const isTransparentActive = transparent && !scrolled
  const headerBg = isTransparentActive ? "#11111100" : "rgba(255,255,255,0.9)"
  const headerBorder = isTransparentActive ? "rgba(0,0,0,0)" : "rgb(243,244,246)"

  const linkColor = isTransparentActive
    ? "text-white hover:text-white/80"
    : "text-gray-700 hover:text-gray-900"

  const iconColorBtn = isTransparentActive ? "text-white" : "text-gray-700"

  return (
    <motion.header
      className="w-full fixed top-0 z-50 border-b"
      initial={false}
      animate={{ backgroundColor: headerBg, borderBottomColor: headerBorder }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <div className="containerl mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
          <Link href="/" className="text-lg sm:text-xl font-semibold tracking-wide">
            <div className="relative h-12 w-[160px]">
              <motion.div
                className="absolute inset-0"
                initial={false}
                animate={{ opacity: isTransparentActive ? 0 : 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <Image
                  src={logoSrc}
                  height={48}
                  width={160}
                  alt="Grupo Chavón"
                  className="h-18 w-auto object-contain"
                  priority
                />
              </motion.div>
              <motion.div
                className="absolute inset-0"
                initial={false}
                animate={{ opacity: isTransparentActive ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <Image
                  src={logoTransparentSrc}
                  height={48}
                  width={160}
                  alt="Grupo Chavón (alt)"
                  className="h-18 w-auto object-contain"
                  priority
                />
              </motion.div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-md">
            
            <Link href="/about" className={`${linkColor} transition-colors duration-300`}>Nosotros</Link>
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button className={`inline-flex items-center gap-1 ${linkColor} focus:outline-none transition-colors duration-300`}>
                    <span>Servicios</span>
                    <LucideChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-150"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute left-0 mt-3 w-48 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                      <div className="py-2">
                        {servicios.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button className={`inline-flex items-center gap-1 ${linkColor} focus:outline-none transition-colors duration-300`}>
                    <span>Proyectos</span>
                    <LucideChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-150"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute left-0 mt-3 w-48 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                      <div className="py-2">
                        {proyectos.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            <Link href="/marcas" className={`${linkColor} transition-colors duration-300`}>Marcas</Link>
            <Link href="/noticias" className={`${linkColor} transition-colors duration-300`}>Noticias</Link>
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contacts"
              className="hidden md:inline-block rounded-xl bg-[#ee8e0a] px-6 py-4 text-sm font-medium text-white hover:bg-[#d77a00] transition-colors duration-300"
            >
              Contactanos
            </Link>
            <button
              className={`md:hidden p-2 ${iconColorBtn} hover:opacity-80 transition-colors duration-300`}
              onClick={() => setMobileOpen(true)}
              aria-label="Abrir menú"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <Transition show={mobileOpen} as={Fragment}>
        <div className="md:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/30" onClick={() => setMobileOpen(false)} />
          <div className="ml-auto h-full w-80 max-w-[85%] bg-white shadow-xl">
            <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
              <span className="font-semibold text-gray-900">REALSTAT ROMANA</span>
              <button
                className="p-2 text-gray-700 hover:text-gray-900"
                onClick={() => setMobileOpen(false)}
                aria-label="Cerrar menú"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-4 space-y-2">
              <div>
                <div className="text-xs uppercase text-gray-400 mb-1">Proyectos</div>
                <div className="flex flex-col">
                  {proyectos.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="px-2 py-2 rounded hover:bg-gray-50"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link href="/propiedades" className="block px-2 py-2 rounded hover:bg-gray-50" onClick={() => setMobileOpen(false)}>
                Propiedades
              </Link>
              <Link href="/agentes" className="block px-2 py-2 rounded hover:bg-gray-50" onClick={() => setMobileOpen(false)}>
                Agentes
              </Link>
              <Link href="/about" className="block px-2 py-2 rounded hover:bg-gray-50" onClick={() => setMobileOpen(false)}>
                Sobre Nosotros
              </Link>
              <Link href="/contacto" className="block px-2 py-2 rounded hover:bg-gray-50" onClick={() => setMobileOpen(false)}>
                Contacto
              </Link>
              <Link
                href="/propiedades"
                onClick={() => setMobileOpen(false)}
              >
                <button
                  className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-[#1e63b5] px-6 py-4 text-sm font-medium text-white hover:bg-blue-700"
                >
                  Empezar Búsqueda
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Transition>
    </motion.header>
  )
}