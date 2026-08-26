import CompaniesSection from '@/components/home/Empresashome'
import TeamSection from '@/components/home/Equipo'
import HeroSection from '@/components/home/Herohome'
import StatsSection from '@/components/home/Herostats'
import NewsSection from '@/components/home/Noticiashome'
import HeritageSection from '@/components/home/Raices'
import SectorsSection from '@/components/home/Sectores'
import ValuesSection from '@/components/home/Valoreshome'
import Footer from '@/components/ui/Footer'
import Header from '@/components/ui/Header'
import { Geist, Geist_Mono } from 'next/font/google'
import { GetStaticProps } from 'next'
import { client } from '@/sanity/lib/client'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface HomeProps {
  initialNoticias: any[]
}

const noticiasQuery = `*[_type=="noticia" && publicado==true]|order(coalesce(orden,999) asc,_createdAt desc)[0...6]{
  _id,titulo,slug,imagenPrincipal{asset,alt},_createdAt
}`

export default function Home({ initialNoticias }: HomeProps) {
  return (
    <main className="">
      <Header transparent/>
      <HeroSection />
      <StatsSection />
      <ValuesSection />
      <CompaniesSection/>
      <HeritageSection/>
      <TeamSection/>
      <SectorsSection/>
      <NewsSection initial={initialNoticias} />
      <Footer/>
    </main>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  try {
    const initialNoticias = await client.fetch(noticiasQuery)
    return { props: { initialNoticias }, revalidate: 300 }
  } catch {
    return { props: { initialNoticias: [] }, revalidate: 120 }
  }
}
