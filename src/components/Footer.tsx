"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background text-foreground pt-48 pb-12 relative overflow-hidden border-t border-stone/50">
      
      {/* Signature Finalé Background Typography - Massive Solid */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none opacity-[0.07]">
        <h2 className="text-[30vw] font-serif text-foreground leading-none tracking-tighter">
          SIORA
        </h2>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          
          {/* Studio Column */}
          <div className="space-y-8">
            <h4 className="text-[10px] tracking-[0.2em] font-bold text-accent uppercase">SIORA</h4>
            <p className="text-foreground/60 text-[12px] leading-relaxed font-light max-w-[240px]">
              Crafting architectural narratives through precision and heritage. Based in India, working globally.
            </p>
          </div>

          {/* Expertise Column */}
          <div className="space-y-8">
            <h4 className="text-[10px] tracking-[0.2em] font-bold text-accent uppercase">EXPERTISE</h4>
            <ul className="space-y-4">
              {["Architecture", "Interior Curation", "Turnkey Build", "Consultation"].map((item) => (
                <li key={item}>
                  <Link href="/services" className="text-foreground/40 hover:text-foreground hover:translate-x-2 transition-all duration-500 text-[11px] tracking-wide uppercase font-medium inline-block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials Column */}
          <div className="space-y-8">
            <h4 className="text-[10px] tracking-[0.2em] font-bold text-accent uppercase">SOCIALS</h4>
            <ul className="space-y-4">
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
          <div className="space-y-8">
            <h4 className="text-[10px] tracking-[0.2em] font-bold text-accent uppercase">CONNECT</h4>
            <div className="space-y-6 text-foreground/40 text-[11px] tracking-wide font-medium uppercase">
              <div className="flex items-center gap-4 hover:text-foreground transition-all duration-700 cursor-pointer group">
                <Mail size={14} strokeWidth={1.5} className="text-accent group-hover:scale-110 transition-all duration-700" />
                <span className="group-hover:translate-x-2 transition-transform duration-700">HELLO@SIORA.PRO</span>
              </div>
              <div className="flex items-center gap-4 hover:text-foreground transition-all duration-700 cursor-pointer group">
                <MapPin size={14} strokeWidth={1.5} className="text-accent group-hover:scale-110 transition-all duration-700" />
                <span className="group-hover:translate-x-2 transition-transform duration-700">LUCKNOW, INDIA</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-stone/30 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <p className="text-[10px] tracking-wider uppercase text-foreground/40 flex flex-col md:flex-row items-center gap-3">
            <span>© 2026 SIORA INFRA & DESIGN</span>
            <span className="hidden md:block opacity-20">|</span>
            <span>
              DEVELOPED BY{" "}
              <a 
                href="https://www.linkedin.com/in/puneettkushwaha/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-foreground hover:text-accent transition-colors font-bold"
              >
                PUNEET KUSHWAHA
              </a>
            </span>
          </p>
          <div className="flex gap-12 text-[10px] tracking-wider uppercase text-foreground/40 font-bold">
            <Link href="#" className="hover:text-accent transition-colors">PRIVACY</Link>
            <Link href="#" className="hover:text-accent transition-colors">TERMS</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


