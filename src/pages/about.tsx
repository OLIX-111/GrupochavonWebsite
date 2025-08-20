import ContactAbout from '@/components/about/Contactoabout'
import CompanySection from '@/components/about/Fundado'
import HeroAbout from '@/components/about/Heroabout'
import ProjectsSection from '@/components/about/Legado'
import ValuesSection from '@/components/about/Valores'
import Footer from '@/components/ui/Footer'
import Header from '@/components/ui/Header'
import React from 'react'

const about = () => {
  return (
    <div>
      <Header/>
      <HeroAbout/>
      <CompanySection/>
      <ProjectsSection/>
      <ValuesSection/>
      <ContactAbout/>
      <Footer/>

      
    </div>
  )
}

export default about
