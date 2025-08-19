import HeroSection from "@/components/home/Herohome";
import StatsSection from "@/components/home/Herostats";
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
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <HeroSection/>
        <StatsSection/>
      </main>
  );
}
