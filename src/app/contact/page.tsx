"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Mail, Phone, MapPin, Send } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  // Fetching from ENV
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@siora.design";
  const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE || "+91 7380663685";
  const phoneDigits = process.env.NEXT_PUBLIC_PHONE_NUMBER || "7380663685";

  return (
    <main className="bg-background min-h-screen text-foreground selection:bg-accent selection:text-white font-sans overflow-x-hidden">
      <Navbar />

      {/* =========================================
          SECTION 01: THE CINEMATIC REVEAL (Hero)
          ========================================= */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Full-Screen Dramatic Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/studio-reveal.png" 
            alt="SIORA Cinematic Studio" 
            fill 
            className="object-cover brightness-[0.4] grayscale contrast-125" 
            priority
          />
          {/* Grainy Texture Overlay for Premium Drama */}
          <div className="absolute inset-0 bg-accent/5 mix-blend-overlay opacity-30" />
        </div>

        {/* Branding Overlay - Fluid & Bold */}
        <div className="relative z-10 w-full text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <span className="text-accent text-[12px] tracking-[1em] font-bold mb-8 block uppercase font-sans opacity-80">ESTABLISHED 2026 / LKO</span>
            <h1 className="text-7xl md:text-[15vw] font-serif text-white leading-none tracking-tighter uppercase inline-block">
              BEGIN <span className="italic font-light text-outline">DIALogue</span>
            </h1>
          </motion.div>
        </div>

        {/* Subtle Scroll Hint */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
           <span className="text-[10px] tracking-[0.8em] text-white/40 uppercase font-bold">Discover Perspective</span>
           <div className="h-12 w-[1px] bg-white/20" />
        </div>
      </section>

      {/* =========================================
          SECTION 02: THE DIALOGUE CARDS (Body)
          ========================================= */}
      <section className="relative py-32 md:py-48 bg-background border-t border-stone/20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-32">
              
              {/* Card 01: VOICE (Asymmetrical Left) */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="lg:col-span-6 space-y-12"
              >
                <div className="flex items-center gap-6">
                   <h3 className="text-8xl md:text-[120px] font-serif text-stone leading-none transition-colors hover:text-accent select-none">01</h3>
                   <div className="h-[1px] flex-grow bg-stone/30" />
                   <span className="text-accent text-[10px] tracking-[0.6em] font-bold uppercase font-sans">Voice Link</span>
                </div>
                
                <div className="pl-6 md:pl-24 space-y-8">
                  <h2 className="text-4xl md:text-6xl font-serif text-foreground uppercase tracking-tighter leading-none">
                    Immediate <br /> Consultation
                  </h2>
                  <a href={`tel:${phoneDigits}`} className="group flex items-center gap-6">
                    <span className="text-2xl md:text-4xl font-light hover:text-accent transition-colors duration-500">{contactPhone}</span>
                    <div className="w-12 h-12 rounded-full border border-stone/30 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-700">
                      <Phone size={18} strokeWidth={1} />
                    </div>
                  </a>
                </div>
              </motion.div>

              {/* Card 02: MAIL (Asymmetrical Right - Offset) */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.2 }}
                className="lg:col-span-6 lg:mt-32 space-y-12"
              >
                <div className="flex items-center gap-6">
                   <h3 className="text-8xl md:text-[120px] font-serif text-stone leading-none transition-colors hover:text-accent select-none">02</h3>
                   <div className="h-[1px] flex-grow bg-stone/30" />
                   <span className="text-accent text-[10px] tracking-[0.6em] font-bold uppercase font-sans">Mail Link</span>
                </div>
                
                <div className="pl-6 md:pl-24 space-y-8">
                  <h2 className="text-4xl md:text-6xl font-serif text-foreground uppercase tracking-tighter leading-none">
                    Project <br /> Narratives
                  </h2>
                  <a href={`mailto:${contactEmail}`} className="group flex items-center gap-6">
                    <span className="text-2xl md:text-4xl font-light hover:text-accent transition-colors duration-500">{contactEmail}</span>
                    <div className="w-12 h-12 rounded-full border border-stone/30 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-700">
                      <Mail size={18} strokeWidth={1} />
                    </div>
                  </a>
                </div>
              </motion.div>

              {/* Card 03: PRESENCE (Full Width Bottom) */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.4 }}
                className="lg:col-span-12 space-y-16 pt-32"
              >
                <div className="flex items-center gap-6">
                   <h3 className="text-8xl md:text-[120px] font-serif text-stone leading-none transition-colors hover:text-accent select-none">03</h3>
                   <div className="h-[1px] flex-grow bg-stone/30" />
                   <span className="text-accent text-[10px] tracking-[0.6em] font-bold uppercase font-sans">Studio Base</span>
                </div>
                
                <div className="pl-0 lg:pl-48 flex flex-col md:flex-row items-end justify-between gap-12">
                  <address className="text-4xl md:text-7xl font-serif text-foreground not-italic leading-[0.9] uppercase tracking-tighter max-w-4xl">
                     Cyber Heights, <br />
                     Lucknow, UP / 226010
                  </address>
                  
                  <div className="group w-full md:w-auto">
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=Unit+No.804B%2C+8th+floor%2C+Levana+Cyber+Heights%2C+Vibhuti+Khand%2C+Gomti+Nagar%2C+Lucknow%2C+Uttar+Pradesh+226010"
                      target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-8 bg-foreground text-background px-12 py-8 text-[11px] tracking-[0.8em] font-bold hover:bg-accent hover:text-white transition-all duration-700 uppercase shadow-2xl"
                    >
                      Locate Studio <ArrowRight size={14} className="group-hover:translate-x-4 transition-transform duration-700" />
                    </a>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 03: THE ARCHIVE HORIZON
          ========================================= */}
      <section className="py-24 md:py-48 bg-stone/5 border-y border-stone/20 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center space-y-16">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
               <span className="text-accent text-[10px] tracking-[1em] font-bold uppercase block mb-6">Digital Archives</span>
               <h2 className="text-5xl md:text-[8vw] font-serif text-foreground leading-[0.8] tracking-tighter uppercase whitespace-nowrap opacity-[0.05] select-none pointer-events-none mb-4">
                 MANIFEST VISION MANIFEST VISION
               </h2>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-12 md:gap-24 relative z-10">
              {['Instagram', 'LinkedIn', 'Facebook', 'Pinterest'].map((social, idx) => (
                <a key={social} href="#" className="group space-y-2">
                  <span className="text-accent text-[9px] tracking-[0.4em] font-bold block transition-all group-hover:translate-y-[-10px] opacity-0 group-hover:opacity-100 uppercase">Archive 0{idx+1}</span>
                  <span className="text-[12px] md:text-[14px] font-bold tracking-[0.8em] text-foreground/40 hover:text-accent transition-all duration-500 uppercase block">
                    {social}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
