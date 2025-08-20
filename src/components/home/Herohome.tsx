"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function HeroSection() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  useEffect(() => {
    // Preload video for better performance
    const video = document.createElement("video")
    video.src = "/hero-video.mp4"
    video.onloadeddata = () => setIsVideoLoaded(true)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-poster.png"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        {/* Fallback image if video doesn't load */}
        <img src="/hero-poster.png" alt="Vista aérea de destinos turísticos" className="w-full h-full object-cover" />
      </video>

      {/* Overlay with specified color #172946 */}
      <div className="absolute inset-0 bg-opacity-70" style={{ backgroundColor: "#172946" }} />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="text-center max-w-6xl mx-auto">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-8">
            Construyendo el Futuro de Nuestros Destinos con Innovación y Compromiso
          </h1>

          <Link href="#empresas" className="bg-[#ee8e0a] hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-xl text-lg duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform">
            Nuestras Empresas
          </Link>
        </div>
      </div>

      
    </section>
  )
}
