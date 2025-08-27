"use client"

import { Fragment, useEffect, useState } from "react"
import Link from "next/link"
import { Popover, Transition } from "@headlessui/react"
import { LucideChevronDown, Menu, X } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

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
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

  const proyectos = [
    { name: "Frailejon", href: "https://lromanarealestate.com/frailejonvillage" },
    { name: "Altos De Frailejon", href: "/altos-de-frailejon" },
    { name: "Costa Mar", href: "https://lromanarealestate.com/costamar" },
    { name: "Stone Tower III", href: "https://lromanarealestate.com/stone-tower-3" },
  ]
  const servicios = [
    { name: "Construccion", href: "/empresas/dyaccsa" },
    { name: "Ebanisteria", href: "/empresas/ebanisteria-la-romana" },
    { name: "Bienes Raices", href: "/empresas/l-romana-real-estate" },
    /* { name: "Publicidad", href: "/empresas" }, */
    { name: "Turismo", href: "/empresas/wao-experience" },
    { name: "Responsabilidad social", href: "/empresas/responsabilidad-social" },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [mobileOpen])

  const isTransparentActive = transparent && !scrolled
  const headerBg = isTransparentActive ? "#11111100" : "rgba(255,255,255,0.9)"
  const headerBorder = isTransparentActive ? "rgba(0,0,0,0)" : "rgb(243,244,246)"

  const linkColor = isTransparentActive ? "text-white hover:text-white/80" : "text-gray-700 hover:text-gray-900"

  const iconColorBtn = isTransparentActive ? "text-white" : "text-gray-700"

  const closeMobileMenu = () => {
    setMobileOpen(false)
    setActiveSubmenu(null)
  }

  return (
    <motion.header
      className="w-full fixed top-0 z-50 border-b"
      initial={false}
      animate={{ backgroundColor: headerBg, borderBottomColor: headerBorder }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="flex items-center justify-between py-4 lg:py-6">
          {/* Logo */}
          <Link href="/" className="text-lg sm:text-xl font-semibold tracking-wide">
            <div className="relative h-10 w-[140px] sm:h-12 sm:w-[160px]">
              <motion.div
                className="absolute inset-0"
                initial={false}
                animate={{ opacity: isTransparentActive ? 0 : 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <Image
                  src={logoSrc || "/placeholder.svg"}
                  height={48}
                  width={160}
                  alt="Grupo Chavón"
                  className="h-full w-auto object-contain"
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
                  src={logoTransparentSrc || "/placeholder.svg"}
                  height={48}
                  width={160}
                  alt="Grupo Chavón (alt)"
                  className="h-full w-auto object-contain"
                  priority
                />
              </motion.div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm xl:text-base">
            <Link href="/about" className={`${linkColor} transition-colors duration-300`}>
              Nosotros
            </Link>
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={`inline-flex items-center gap-1 ${linkColor} focus:outline-none transition-colors duration-300`}
                  >
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
                  <Popover.Button
                    className={`inline-flex items-center gap-1 ${linkColor} focus:outline-none transition-colors duration-300`}
                  >
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
            <Link href="/marcas" className={`${linkColor} transition-colors duration-300`}>
              Marcas
            </Link>
            <Link href="/noticias" className={`${linkColor} transition-colors duration-300`}>
              Noticias
            </Link>
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contacts"
              className="hidden lg:inline-block rounded-xl bg-[#ee8e0a] px-4 py-3 xl:px-6 xl:py-4 text-sm font-medium text-white hover:bg-[#d77a00] transition-colors duration-300"
            >
              Contactanos
            </Link>
            <button
              className={`lg:hidden p-2 ${iconColorBtn} hover:opacity-80 transition-colors duration-300`}
              onClick={() => setMobileOpen(true)}
              aria-label="Abrir menú"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
            />

            {/* Full-screen menu */}
            <motion.div
              className="relative h-full w-full bg-white"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100 bg-white/95 backdrop-blur-sm">
                <div className="relative h-10 w-[140px]">
                  <Image
                    src={logoSrc || "/placeholder.svg"}
                    height={40}
                    width={140}
                    alt="Grupo Chavón"
                    className="h-full w-auto object-contain"
                    priority
                  />
                </div>
                <button
                  className="p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
                  onClick={closeMobileMenu}
                  aria-label="Cerrar menú"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Navigation Content */}
              <div className="flex flex-col h-[calc(100%-80px)] overflow-y-auto">
                <div className="flex-1 px-4 py-8 space-y-6">
                  {/* Main Navigation */}
                  <div className="space-y-4">
                    <Link
                      href="/about"
                      className="block text-xl font-medium text-gray-900 py-3 border-b border-gray-100 hover:text-[#ee8e0a] transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Nosotros
                    </Link>

                    {/* Servicios Dropdown */}
                    <div className="border-b border-gray-100">
                      <button
                        className="flex items-center justify-between w-full text-xl font-medium text-gray-900 py-3 hover:text-[#ee8e0a] transition-colors"
                        onClick={() => setActiveSubmenu(activeSubmenu === "servicios" ? null : "servicios")}
                      >
                        <span>Servicios</span>
                        <LucideChevronDown
                          className={`h-5 w-5 transition-transform ${activeSubmenu === "servicios" ? "rotate-180" : ""}`}
                        />
                      </button>
                      <AnimatePresence>
                        {activeSubmenu === "servicios" && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="pb-4 pl-4 space-y-3">
                              {servicios.map((item) => (
                                <Link
                                  key={item.name}
                                  href={item.href}
                                  className="block text-lg text-gray-600 py-2 hover:text-[#ee8e0a] transition-colors"
                                  onClick={closeMobileMenu}
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Proyectos Dropdown */}
                    <div className="border-b border-gray-100">
                      <button
                        className="flex items-center justify-between w-full text-xl font-medium text-gray-900 py-3 hover:text-[#ee8e0a] transition-colors"
                        onClick={() => setActiveSubmenu(activeSubmenu === "proyectos" ? null : "proyectos")}
                      >
                        <span>Proyectos</span>
                        <LucideChevronDown
                          className={`h-5 w-5 transition-transform ${activeSubmenu === "proyectos" ? "rotate-180" : ""}`}
                        />
                      </button>
                      <AnimatePresence>
                        {activeSubmenu === "proyectos" && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="pb-4 pl-4 space-y-3">
                              {proyectos.map((item) => (
                                <Link
                                  key={item.name}
                                  href={item.href}
                                  className="block text-lg text-gray-600 py-2 hover:text-[#ee8e0a] transition-colors"
                                  onClick={closeMobileMenu}
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <Link
                      href="/marcas"
                      className="block text-xl font-medium text-gray-900 py-3 border-b border-gray-100 hover:text-[#ee8e0a] transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Marcas
                    </Link>

                    <Link
                      href="/noticias"
                      className="block text-xl font-medium text-gray-900 py-3 border-b border-gray-100 hover:text-[#ee8e0a] transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Noticias
                    </Link>
                  </div>
                </div>

                {/* CTA Section */}
                <div className="p-4 bg-gray-50 border-t border-gray-200">
                  <Link
                    href="/contacts"
                    onClick={closeMobileMenu}
                    className="block w-full text-center rounded-xl bg-[#ee8e0a] px-6 py-4 text-lg font-medium text-white hover:bg-[#d77a00] transition-colors"
                  >
                    Contactanos
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
