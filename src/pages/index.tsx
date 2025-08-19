import CompaniesSection from "@/components/home/Empresashome";
import TeamSection from "@/components/home/Equipo";
import HeroSection from "@/components/home/Herohome";
import StatsSection from "@/components/home/Herostats";
import NewsSection from "@/components/home/Noticiashome";
import HeritageSection from "@/components/home/Raices";
import SectorsSection from "@/components/home/Sectores";
import ValuesSection from "@/components/home/Valoreshome";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <StatsSection />
      <ValuesSection />
      <CompaniesSection/>
      <HeritageSection/>
      <TeamSection/>
      <SectorsSection/>
      <NewsSection/>
    </main>
  );
}
