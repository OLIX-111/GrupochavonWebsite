import ContactServicio from '@/components/servicios/ContactServicio'
import HeroEmpresa from '@/components/servicios/Servicio'
import TextServicio from '@/components/servicios/Textservicio'
import Footer from '@/components/ui/Footer'
import Header from '@/components/ui/Header'
import React from 'react'

const empresas = () => {
  return (
    <div>
        <Header/>
        <HeroEmpresa/>
        <TextServicio/>
        <ContactServicio/>
        <Footer/>
      
    </div>
  )
}

export default empresas
