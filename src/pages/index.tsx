import HeroSection from "@/components/home/Herohome";
import StatsSection from "@/components/home/Herostats";
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
        <HeroSection/>
        <StatsSection/>
        <ValuesSection/>
      </main>
  );
}
