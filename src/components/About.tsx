"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-background overflow-hidden pt-16 md:pt-48 pb-8 md:pb-16">
      
      {/* =========================================
          DESKTOP ABOUT (Hidden on Mobile)
          ========================================= */}
      <div className="hidden lg:flex flex-col lg:flex-row container mx-auto px-6 gap-24">
        
        {/* Left: The Visual Legacy - Framed Presentation */}
        <div className="relative w-full lg:w-5/12">
          <div className="framed-print rotate-[-1deg]">
            <div className="relative aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-[2s]">
              <Image
                src="/projects/p2.png"
                alt="The SIORA Architectural Vision"
                fill
                className="object-cover scale-105"
              />
            </div>
            {/* Museum Style Caption */}
            <div className="mt-6 pt-4 border-t border-stone/50">
              <p className="text-[9px] tracking-[0.2em] text-foreground/40 font-bold uppercase">
                Fig 01. / The Architectural Monolith / New Delhi, 2014
              </p>
            </div>
          </div>
        </div>

        {/* Right: The Narrative - Airy & Sophisticated */}
        <div className="w-full lg:w-7/12 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          >
            <div className="flex items-center gap-4 mb-12">
               <span className="text-accent text-[10px] tracking-[0.4em] font-bold uppercase">
                About Us
              </span>
               <span className="h-[1px] flex-grow bg-stone/50" />
            </div>
            
            <h2 className="text-6xl md:text-8xl font-serif text-foreground leading-[1.1] tracking-tighter mb-16">
              Mastering the <br /> 
              <span className="text-outline italic font-light opacity-50">Art of Space</span>
            </h2>

            <div className="space-y-10 text-foreground/70 font-light leading-relaxed text-xl max-w-2xl">
              <p>
                Siora is a design and build studio offering architecture, interior design, planning, and construction services. Inspired by heritage, classical elegance, modern design, and future-forward thinking, we create spaces that balance character, innovation, and functionality across residential, commercial, and corporate projects.
              </p>
            </div>

            {/* Metrics Section - Gallery Style */}
            <div className="grid grid-cols-2 gap-16 mt-24 pt-16 border-t border-stone/50">
              <div className="group cursor-default">
                <span className="text-6xl font-serif text-foreground block mb-4 transition-colors group-hover:text-accent">10+</span>
                <span className="text-[9px] tracking-[0.2em] text-foreground/40 font-bold uppercase">Years of Architectural Legacy</span>
              </div>
              <div className="group cursor-default">
                <span className="text-6xl font-serif text-foreground block mb-4 transition-colors group-hover:text-accent">150+</span>
                <span className="text-[9px] tracking-[0.2em] text-foreground/40 font-bold uppercase">Masterful Designs Executed</span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      {/* =========================================
          MOBILE ABOUT (Hidden on Desktop)
          ========================================= */}
      <div className="flex lg:hidden flex-col px-6">
        {/* Framed Image Mobile */}
        <div className="mb-12">
          <div className="framed-print">
            <div className="relative w-full h-[45vh] overflow-hidden grayscale">
              <Image
                src="/projects/p2.png"
                alt="The SIORA Architectural Vision"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Narrative Section */}
        <div className="w-full flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-accent text-[10px] tracking-[0.4em] mb-10 block font-bold uppercase">
              About Us
            </span>
            
            <h2 className="text-5xl font-serif text-foreground leading-[1.1] tracking-tighter mb-10">
              Mastering the <br /> 
              <span className="text-outline opacity-40 italic">Art of Space</span>
            </h2>

            <div className="space-y-8 text-foreground/70 font-light leading-relaxed text-base">
              <p>
                Siora is a design and build studio offering architecture, interior design, planning, and construction services. Inspired by heritage, classical elegance, modern design, and future-forward thinking, we create spaces that balance character, innovation, and functionality.
              </p>
            </div>

            {/* Mobile Metrics */}
            <div className="grid grid-cols-2 gap-8 mt-10 pt-10 border-t border-stone/50">
              <div>
                <span className="text-4xl font-serif text-foreground block mb-3">10+</span>
                <span className="text-[8px] tracking-[0.2em] text-foreground/40 font-bold uppercase">Years Legacy</span>
              </div>
              <div>
                <span className="text-4xl font-serif text-foreground block mb-3">150+</span>
                <span className="text-[8px] tracking-[0.2em] text-foreground/40 font-bold uppercase">Projects</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
