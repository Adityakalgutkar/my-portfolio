import type { Metadata } from "next";
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import ChessPortfolio from "@/components/chess/chess-portfolio";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aditya Kalgutkar — Code as Calculated as Chess",
  description:
    "Chess-themed portfolio showcasing web development projects, skills, and services.",
};

export default function ChessPage() {
  return (
    <div
      className={`${playfair.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <ChessPortfolio />
    </div>
  );
}
