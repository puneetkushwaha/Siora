import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google"; // Modern Editorial Pairing
import "./globals.css";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import FloatingContact from "@/components/FloatingContact";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "SIORA | Premium Architecture & Interiors",
  description: "Crafting timeless architectural narratives through modern and classical excellence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${cormorant.variable} ${outfit.variable} bg-background antialiased cursor-none font-sans font-light`}>
        <CustomCursor />
        <SmoothScroll>
          <Navbar />
          {children}
          <FloatingContact />
        </SmoothScroll>
      </body>
    </html>
  );
}
