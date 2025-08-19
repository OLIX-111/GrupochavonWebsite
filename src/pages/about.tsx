import ContactAbout from '@/components/about/Contactoabout'
import CompanySection from '@/components/about/Fundado'
import HeroAbout from '@/components/about/Heroabout'
import ProjectsSection from '@/components/about/Legado'
import ValuesSection from '@/components/about/Valores'
import React from 'react'

const about = () => {
  return (
    <div>
      <HeroAbout/>
      <CompanySection/>
      <ProjectsSection/>
      <ValuesSection/>
      <ContactAbout/>

      
    </div>
  )
}

export default about
