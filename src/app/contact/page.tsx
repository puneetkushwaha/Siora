"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="bg-background min-h-screen text-foreground selection:bg-accent selection:text-white">
      <Navbar />

      <section className="pt-48 pb-24 md:pt-64 md:pb-48 relative overflow-hidden">
        {/* Artistic Background Typography */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 opacity-[0.03] select-none pointer-events-none">
          <h2 className="text-[35vw] font-serif leading-none tracking-tighter uppercase text-outline">Connect</h2>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              className="mb-24 md:mb-48"
            >
              <span className="text-accent text-[12px] tracking-[0.8em] font-bold mb-8 block uppercase">Get in Touch</span>
              <h1 className="text-7xl md:text-9xl font-serif text-foreground leading-[0.9] tracking-tighter uppercase h-spacing">
                Studio <br /> <span className="italic font-light text-outline opacity-40">Presence</span>
              </h1>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-24 md:gap-16 border-t border-stone/20 pt-24">
              
              {/* Communication Column */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="space-y-12"
              >
                <div className="space-y-4">
                  <span className="text-accent text-[10px] tracking-[0.4em] font-bold uppercase block">Communication</span>
                  <h3 className="text-3xl font-serif text-foreground uppercase tracking-tight">Direct Channels</h3>
                </div>
                
                <div className="space-y-8">
                  <a 
                    href="mailto:contact@siora.design"
                    className="flex flex-col gap-2 group cursor-pointer w-fit"
                  >
                    <span className="text-[10px] tracking-widest text-foreground/40 font-bold uppercase flex items-center gap-3">
                      <Mail size={12} className="text-accent" /> Email
                    </span>
                    <span className="text-xl md:text-2xl font-light text-foreground group-hover:text-accent transition-colors duration-500">
                      contact@siora.design
                    </span>
                  </a>

                  <a 
                    href="tel:+917380663685"
                    className="flex flex-col gap-2 group cursor-pointer w-fit"
                  >
                    <span className="text-[10px] tracking-widest text-foreground/40 font-bold uppercase flex items-center gap-3">
                      <Phone size={12} className="text-accent" /> Telephone
                    </span>
                    <span className="text-xl md:text-2xl font-light text-foreground group-hover:text-accent transition-colors duration-500">
                      +91 7380663685
                    </span>
                  </a>
                </div>
              </motion.div>

              {/* Physicality Column */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
                className="space-y-12"
              >
                <div className="space-y-4">
                  <span className="text-accent text-[10px] tracking-[0.4em] font-bold uppercase block">Physicality</span>
                  <h3 className="text-3xl font-serif text-foreground uppercase tracking-tight">The Studio</h3>
                </div>
                
                <div className="space-y-8">
                  <div className="flex flex-col gap-4">
                    <span className="text-[10px] tracking-widest text-foreground/40 font-bold uppercase flex items-center gap-3">
                      <MapPin size={12} className="text-accent" /> Location
                    </span>
                    <address className="text-xl md:text-2xl font-light text-foreground not-italic leading-relaxed">
                      Unit No.804B, 8th floor, <br />
                      Levana Cyber Heights, <br />
                      Vibhuti Khand, Gomti Nagar, <br />
                      Lucknow, UP 226010
                    </address>
                  </div>

                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Unit+No.804B%2C+8th+floor%2C+Levana+Cyber+Heights%2C+Vibhuti+Khand%2C+Gomti+Nagar%2C+Lucknow%2C+Uttar+Pradesh+226010"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-4 text-xs tracking-[0.4em] font-bold text-accent hover:text-foreground transition-all duration-700 uppercase group"
                  >
                    View on Maps <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-700" />
                  </a>
                </div>
              </motion.div>

              {/* Digitality Column */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.6 }}
                className="space-y-12"
              >
                <div className="space-y-4">
                  <span className="text-accent text-[10px] tracking-[0.4em] font-bold uppercase block">Digitality</span>
                  <h3 className="text-3xl font-serif text-foreground uppercase tracking-tight">Follow Our Journey</h3>
                </div>
                
                <div className="flex flex-col gap-8">
                  <a 
                    href="#" 
                    className="flex items-center gap-6 group"
                  >
                    <div className="w-12 h-12 rounded-full border border-stone/30 flex items-center justify-center group-hover:border-accent group-hover:bg-accent transition-all duration-700">
                      <span className="font-serif text-lg text-foreground group-hover:text-white transition-colors">I</span>
                    </div>
                    <span className="text-[11px] tracking-[0.2em] font-bold uppercase text-foreground/60 group-hover:text-foreground transition-colors">Instagram</span>
                  </a>
                  
                  <a 
                    href="#" 
                    className="flex items-center gap-6 group"
                  >
                    <div className="w-12 h-12 rounded-full border border-stone/30 flex items-center justify-center group-hover:border-accent group-hover:bg-accent transition-all duration-700">
                      <span className="font-serif text-lg text-foreground group-hover:text-white transition-colors">L</span>
                    </div>
                    <span className="text-[11px] tracking-[0.2em] font-bold uppercase text-foreground/60 group-hover:text-foreground transition-colors">LinkedIn</span>
                  </a>

                  <a 
                    href="#" 
                    className="flex items-center gap-6 group"
                  >
                    <div className="w-12 h-12 rounded-full border border-stone/30 flex items-center justify-center group-hover:border-accent group-hover:bg-accent transition-all duration-700">
                      <span className="font-serif text-lg text-foreground group-hover:text-white transition-colors">F</span>
                    </div>
                    <span className="text-[11px] tracking-[0.2em] font-bold uppercase text-foreground/60 group-hover:text-foreground transition-colors">Facebook</span>
                  </a>
                </div>

              </motion.div>

            </div>

            {/* Bottom Section - Link to Inquire Form */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.8 }}
              className="mt-48 text-center pt-24 border-t border-stone/10"
            >
              <p className="text-foreground/40 text-sm tracking-widest font-light mb-10 max-w-xl mx-auto uppercase leading-relaxed">
                For detailed project discussions or collaboration requests, please use our dedicated inquiry portal.
              </p>
              <Link 
                href="/#contact"
                className="inline-block px-12 py-5 bg-foreground text-background text-[11px] tracking-[0.5em] font-bold hover:bg-accent hover:text-white transition-all duration-700 uppercase"
              >
                Inquiry Form
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
