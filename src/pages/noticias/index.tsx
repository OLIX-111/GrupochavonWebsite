import HeroNoticia from '@/components/noticias/Heronoticias'
import NoticiasGrid from '@/components/noticias/Noticiasgrid'
import Footer from '@/components/ui/Footer'
import Header from '@/components/ui/Header'
import React from 'react'

const Noticias = () => {
  return (
    <div>
        <Header/>
        <HeroNoticia/>
        <NoticiasGrid/>
        <Footer/>
    </div>
  )
}

export default Noticias
