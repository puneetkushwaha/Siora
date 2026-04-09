"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="bg-background min-h-screen text-foreground selection:bg-accent selection:text-white">
      <Navbar />

      {/* Hero Section - Balanced Editorial Style */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 relative overflow-hidden bg-stone/5">
        {/* Artistic Backdrop Typography */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] select-none pointer-events-none">
          <h2 className="text-[40vw] font-serif leading-none tracking-tighter uppercase text-outline">SIORA</h2>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              className="mb-16 md:mb-24 text-center md:text-left"
            >
              <span className="text-accent text-[12px] tracking-[0.8em] font-bold mb-6 block uppercase">Connect With Us</span>
              <h1 className="text-6xl md:text-9xl font-serif text-foreground leading-[0.9] tracking-tighter uppercase mb-8">
                Studio <br /> <span className="italic font-light text-outline opacity-40">Presence</span>
              </h1>
              <p className="text-lg md:text-2xl font-light text-foreground/50 max-w-2xl leading-relaxed">
                Experience our design philosophy firsthand. Reach out for consultations, collaborations, or project inquiries.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Sections - Spatial Utility */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
              
              {/* Left Column: Direct and Physical Information */}
              <div className="space-y-24">
                
                {/* Communication */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="space-y-10"
                >
                  <div className="flex items-center gap-6">
                    <span className="h-[1px] w-12 bg-accent opacity-50" />
                    <span className="text-[10px] tracking-[0.4em] font-bold text-accent uppercase">Communication</span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <a href="mailto:contact@siora.design" className="group">
                      <span className="text-[10px] tracking-widest text-foreground/40 font-bold uppercase block mb-3">Email</span>
                      <span className="text-xl md:text-2xl font-light border-b border-transparent group-hover:border-accent transition-all duration-500">
                        contact@siora.design
                      </span>
                    </a>
                    <a href="tel:+917380663685" className="group">
                      <span className="text-[10px] tracking-widest text-foreground/40 font-bold uppercase block mb-3">Telephone</span>
                      <span className="text-xl md:text-2xl font-light border-b border-transparent group-hover:border-accent transition-all duration-500">
                        +91 7380663685
                      </span>
                    </a>
                  </div>
                </motion.div>

                {/* Physicality */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="space-y-10"
                >
                  <div className="flex items-center gap-6">
                    <span className="h-[1px] w-12 bg-accent opacity-50" />
                    <span className="text-[10px] tracking-[0.4em] font-bold text-accent uppercase">Physicality</span>
                  </div>
                  
                  <div className="space-y-8">
                    <address className="text-2xl md:text-3xl font-light font-serif text-foreground not-italic leading-tight max-w-sm">
                      Levana Cyber Heights, <br />
                      Lucknow, UP 226010
                    </address>
                    <p className="text-foreground/50 font-light leading-relaxed">
                      Unit No.804B, 8th floor, Vibhuti Khand, Gomti Nagar. <br />
                      Open for scheduled visits Monday to Saturday.
                    </p>
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=Unit+No.804B%2C+8th+floor%2C+Levana+Cyber+Heights%2C+Vibhuti+Khand%2C+Gomti+Nagar%2C+Lucknow%2C+Uttar+Pradesh+226010"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-6 text-xs tracking-[0.6em] font-bold text-accent h-underlined uppercase group"
                    >
                      Locate on Maps <ArrowRight size={14} className="group-hover:translate-x-3 transition-transform duration-700" />
                    </a>
                  </div>
                </motion.div>

              </div>

              {/* Right Column: Visual Component / Digital Journey */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="relative"
              >
                <div className="aspect-[4/5] bg-stone/10 border border-stone/20 relative group overflow-hidden">
                   {/* Decorative Visual Element */}
                   <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity duration-1000">
                      <span className="text-[15vw] font-serif text-outline italic">S.</span>
                   </div>
                   
                   <div className="absolute bottom-12 left-12 right-12 space-y-8 z-10">
                      <h4 className="text-[10px] tracking-[0.4em] font-bold text-accent uppercase">Digital Journey</h4>
                      <div className="flex flex-col gap-8">
                        {['Instagram', 'LinkedIn', 'Facebook'].map(social => (
                          <a key={social} href="#" className="flex items-center justify-between group/link border-b border-foreground/10 pb-4">
                            <span className="text-xl font-serif text-foreground group-hover/link:text-accent transition-colors">{social}</span>
                            <div className="w-8 h-8 rounded-full border border-stone/30 flex items-center justify-center group-hover/link:border-accent group-hover/link:bg-accent group-hover/link:text-white transition-all">
                              <span className="text-[10px] font-serif">{social.charAt(0)}</span>
                            </div>
                          </a>
                        ))}
                      </div>
                   </div>
                </div>
              </motion.div>

            </div>

          </div>
        </div>
      </section>

      {/* Final Call to Action - Spacious Frame */}
      <section className="py-24 bg-stone/5 border-y border-stone/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h3 className="text-3xl md:text-5xl font-serif text-foreground uppercase tracking-tight">
              Ready to Manifest Your Vision?
            </h3>
            <p className="text-foreground/50 text-base md:text-lg font-light leading-relaxed max-w-xl mx-auto italic">
              Our experts are ready to guide you through every phase of the architectural and design journey. Use our studio inquiry portal for a detailed presentation of your requirements.
            </p>
            <Link 
              href="/#contact"
              className="inline-block px-16 py-6 bg-foreground text-background text-[11px] tracking-[0.8em] font-bold hover:bg-accent hover:text-white transition-all duration-700 uppercase"
            >
              Start Inquiry
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
