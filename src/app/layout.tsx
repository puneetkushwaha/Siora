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
  keywords: ["Architecture", "Interior Design", "Construction", "SIORA", "Luxury Interiors", "Modern Design", "Gurgaon", "Lucknow"],
  authors: [{ name: "SIORA Team" }],
  alternates: {
    canonical: "https://siora.in", // Replace with actual domain
  },
  openGraph: {
    title: "SIORA | Premium Architecture & Interiors",
    description: "Crafting timeless architectural narratives through modern and classical excellence. Experience architectural poetry.",
    url: "https://siora.in", // Replace with actual domain
    siteName: "SIORA",
    images: [
      {
        url: "/og-image.jpg", // Create this file in public folder or use existing
        width: 1200,
        height: 630,
        alt: "SIORA Architecture",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SIORA | Premium Architecture & Interiors",
    description: "Crafting timeless architectural narratives through modern and classical excellence.",
    images: ["/og-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "SIORA",
  "url": "https://siora.in",
  "logo": "https://siora.in/favicon.ico",
  "description": "Premium Architecture & Interior Design Studio specializing in residential and commercial spaces.",
  "sameAs": [
    "https://facebook.com/siora",
    "https://instagram.com/siora",
    "https://linkedin.com/company/siorainfra"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Unit No.804B, 8th floor, Levana Cyber Heights, Vibhuti Khand, Gomti Nagar",
    "addressLocality": "Lucknow",
    "addressRegion": "Uttar Pradesh",
    "postalCode": "226010",
    "addressCountry": "IN"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
