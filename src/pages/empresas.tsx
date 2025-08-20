import ContactServicio from '@/components/servicios/ContactServicio'
import HeroEmpresa from '@/components/servicios/Servicio'
import TextServicio from '@/components/servicios/Textservicio'
import React from 'react'

const empresas = () => {
  return (
    <div>
        <HeroEmpresa/>
        <TextServicio/>
        <ContactServicio/>
      
    </div>
  )
}

export default empresas
