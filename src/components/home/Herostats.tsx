"use client"

import type React from "react"
import { useEffect, useState, useRef } from "react"

interface StatItem {
  number: number
  suffix: string
  label: string
}

const statsData: StatItem[] = [
  { number: 45, suffix: "+", label: "Años de experiencia" },
  { number: 6, suffix: "", label: "Empresas líderes" },
  { number: 1250, suffix: "+", label: "Habitaciones construidas" },
  { number: 1000, suffix: "+", label: "Propiedades invervendas" },
  { number: 100, suffix: "+", label: "Aportaciones Sociales" },
  { number: 300, suffix: "+", label: "Propiedades Administradas" },
  { number: 500, suffix: "+", label: "Proyectos completados" },
  { number: 150, suffix: "+", label: "Colaboradores expertos" },
]

interface AnimatedNumberProps {
  targetNumber: number
  suffix: string
  duration?: number
  isVisible: boolean
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ targetNumber, suffix, duration = 2000, isVisible }) => {
  const [currentNumber, setCurrentNumber] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (!isVisible || hasAnimated) return

    setHasAnimated(true)
    const startTime = Date.now()
    const startNumber = 0

    const animate = () => {
      const now = Date.now()
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const current = Math.floor(startNumber + (targetNumber - startNumber) * easeOutQuart)

      setCurrentNumber(current)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [targetNumber, duration, isVisible, hasAnimated])

  return (
    <span className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#ee8e0a]">
      {currentNumber.toLocaleString()}
      {suffix}
    </span>
  )
}

interface StatCardProps {
  stat: StatItem
  isVisible: boolean
}

const StatCard: React.FC<StatCardProps> = ({ stat, isVisible }) => {
  return (
    <div className="text-center">
      <div className="mb-2">
        <AnimatedNumber targetNumber={stat.number} suffix={stat.suffix} isVisible={isVisible} />
      </div>
      <p className="text-white text-sm md:text-base lg:text-xl font-medium">{stat.label}</p>
    </div>
  )
}

const StatsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="bg-[#172946] w-full md:py-20 ">
      <div className="containerl mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
          {statsData.map((stat, index) => (
            <StatCard key={index} stat={stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
