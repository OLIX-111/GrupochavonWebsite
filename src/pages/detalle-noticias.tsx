import ArticleSection from '@/components/detalle-noticia/Articulo'
import HeroDetalle from '@/components/detalle-noticia/HeroDetalle'
import Footer from '@/components/ui/Footer'
import Header from '@/components/ui/Header'
import React from 'react'

const detalleNoticias = () => {
  return (
    <div>
        <Header/>
        <HeroDetalle/>
        <ArticleSection/>
        <Footer/>
      
    </div>
  )
}

export default detalleNoticias
