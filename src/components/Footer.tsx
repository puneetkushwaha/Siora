"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@siora.design";
  const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE || "+91 7380663685";
  const phoneDigits = contactPhone.replace(/\s+/g, "");

  return (
    <footer className="bg-background text-foreground pt-10 md:pt-16 pb-12 relative overflow-hidden border-t border-stone/50">

      
      {/* Signature Finalé Background Typography - Massive Solid */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none opacity-[0.07]">
        <h2 className="text-[25vw] md:text-[30vw] font-serif text-foreground leading-none tracking-tighter">
          SIORA
        </h2>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-y-12 gap-x-12 lg:gap-16 mb-8 md:mb-12 text-center sm:text-left">

          
          {/* Studio Column */}
          <div className="space-y-4 md:space-y-8">
            <h4 className="text-[10px] tracking-[0.2em] font-bold text-accent uppercase">SIORA</h4>
            <p className="text-foreground/60 text-[14px] leading-relaxed font-light max-w-[240px] mx-auto sm:mx-0">
              Crafting architectural narratives through precision and heritage. Based in India, working globally.
            </p>
          </div>

          <div className="space-y-4 md:space-y-8 flex flex-col items-center sm:items-start">
            <h4 className="text-[10px] tracking-[0.2em] font-bold text-accent uppercase">EXPERTISE</h4>
            <ul className="space-y-4 flex flex-col items-center sm:items-start">
              {[
                { name: "Architecture", slug: "architecture" },
                { name: "Interior Curation", slug: "interiors" },
                { name: "Turnkey Build", slug: "turnkey-build" },
                { name: "Consultation", slug: "consultation" }
              ].map((item) => (
                <li key={item.slug}>
                  <Link href={`/services/${item.slug}`} className="text-foreground/40 hover:text-foreground hover:translate-x-2 transition-all duration-500 text-[13px] tracking-wide uppercase font-medium inline-block">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          <div className="space-y-4 md:space-y-8 flex flex-col items-center sm:items-start">
            <h4 className="text-[10px] tracking-[0.2em] font-bold text-accent uppercase">SOCIALS</h4>
            <ul className="space-y-4 flex flex-col items-center sm:items-start">
              {["Instagram", "LinkedIn", "Facebook", "Pinterest"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-foreground/40 hover:text-foreground hover:translate-x-2 transition-all duration-500 text-[11px] tracking-wide uppercase font-medium inline-block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div className="space-y-6 md:space-y-8">
            <h4 className="text-[10px] tracking-[0.2em] font-bold text-accent uppercase">CONNECT</h4>
            <div className="space-y-6 text-foreground/40 text-[13px] tracking-wide font-medium uppercase flex flex-col items-center sm:items-start">
              <a 
                href={`mailto:${contactEmail}`}
                className="flex items-center gap-4 hover:text-foreground transition-all duration-700 cursor-pointer group w-fit"
              >
                <Mail size={14} strokeWidth={1.5} className="text-accent group-hover:scale-110 transition-all duration-700" />
                <span className="group-hover:translate-x-2 transition-transform duration-700">{contactEmail}</span>
              </a>
              <a 
                href={`tel:${phoneDigits}`}
                className="flex items-center gap-4 hover:text-foreground transition-all duration-700 cursor-pointer group w-fit"
              >
                <Phone size={14} strokeWidth={1.5} className="text-accent group-hover:scale-110 transition-all duration-700" />
                <span className="group-hover:translate-x-2 transition-transform duration-700">{contactPhone}</span>
              </a>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Unit+No.804B%2C+8th+floor%2C+Levana+Cyber+Heights%2C+Vibhuti+Khand%2C+Gomti+Nagar%2C+Lucknow%2C+Uttar+Pradesh+226010"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 hover:text-foreground transition-all duration-700 cursor-pointer group w-fit"
              >
                <MapPin size={14} strokeWidth={1.5} className="text-accent group-hover:scale-110 transition-all duration-700 mt-1" />
                <span className="group-hover:translate-x-2 transition-transform duration-700 normal-case leading-relaxed max-w-[300px]">
                  Unit No.804B, 8th floor, Levana Cyber Heights, <br />
                  Vibhuti Khand, Gomti Nagar, Lucknow, <br />
                  Uttar Pradesh 226010
                </span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-stone/30 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <p className="text-[12px] tracking-wider uppercase text-foreground/40 flex flex-col md:flex-row items-center gap-3">
            <span>© 2026 SIORA INFRA & DESIGN</span>
            <span className="hidden md:block opacity-20">|</span>
            <span>
              DEVELOPED BY{" "}
              <a 
                href="https://www.vervenovatech.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-foreground hover:text-accent transition-colors font-bold"
              >
                VERVE NOVA TECHNOLOGIES PVT LTD
              </a>
            </span>
          </p>
          <div className="flex gap-12 text-[12px] tracking-wider uppercase text-foreground/40 font-bold">
            <Link href="/privacy" className="hover:text-accent transition-colors">PRIVACY</Link>
            <Link href="/terms" className="hover:text-accent transition-colors">TERMS</Link>
          </div>

        </div>
      </div>
    </footer>
  );
}


