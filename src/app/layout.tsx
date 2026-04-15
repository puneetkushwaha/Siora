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
  title: "SIORA | Best Architect & House Designer in Lucknow | Construction & House Planner",
  description: "SIORA is a premium architecture and interior design studio. Expert house planners and designers specializing in luxury residences, modern construction, and turnkey builds in Lucknow & Gurgaon. Crafting timeless architectural narratives.",
  keywords: [
    "Architect", 
    "Architect near me", 
    "Construction near me", 
    "SIORA", 
    "SIORA Infra", 
    "House Planner", 
    "House Designer", 
    "Interior Design", 
    "Luxury Interiors", 
    "Modern Design", 
    "Lucknow", 
    "Gurgaon",
    "Best Architect in Lucknow",
    "Home Construction Company"
  ],
  authors: [{ name: "SIORA Team" }],
  alternates: {
    canonical: "https://siora.in", 
  },
  openGraph: {
    title: "SIORA | Best Architect & House Designer in Lucknow",
    description: "Premium architecture, house planning, and construction services. Crafting timeless architectural narratives through modern and classical excellence.",
    url: "https://siora.in",
    siteName: "SIORA",
    images: [
      {
        url: "/og-image.jpg",
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
    title: "SIORA | Best Architect & House Designer in Lucknow",
    description: "Premium architecture, house planning, and construction services. Crafting timeless architectural narratives.",
    images: ["/og-image.jpg"],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SIORA",
    "alternateName": "SIORA Infra",
    "url": "https://siora.in",
    "logo": "https://siora.in/favicon.ico",
    "description": "Premium Architecture & Interior Design Studio specializing in residential and commercial spaces, house planning, and construction.",
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
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "SIORA - Architects & House Designers",
    "image": "https://siora.in/og-image.jpg",
    "url": "https://siora.in",
    "telephone": "+917380663685",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Unit No.804B, 8th floor, Levana Cyber Heights, Vibhuti Khand, Gomti Nagar",
      "addressLocality": "Lucknow",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "226010",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.8653,
      "longitude": 81.0028
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "19:00"
    },
    "servesCuisine": "",
    "areaServed": ["Lucknow", "Gurgaon", "Delhi NCR"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Architectural Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Architecture & Spatial Planning"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Interior Curation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Turnkey Build"
          }
        }
      ]
    }
  }
];

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
