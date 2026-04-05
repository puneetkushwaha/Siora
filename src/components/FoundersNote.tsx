"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FoundersNote() {
  return (
    <section className="py-20 md:py-48 bg-background border-t border-stone/20 overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col lg:flex-row gap-12 md:gap-24 items-center">
            
            {/* Left Column: Tactile "Polaroid" Visual */}
            <motion.div
              initial={{ opacity: 0, rotate: -5, scale: 0.95 }}
              whileInView={{ opacity: 1, rotate: -2, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="lg:w-5/12 group relative"
            >
              {/* Actual Polaroid Framing */}
              <div className="bg-white p-6 shadow-2xl transition-transform group-hover:rotate-0 duration-1000">
                 <div className="aspect-[4/5] relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-[2s]">
                    <Image 
                      src="/projects/p4.png" // Using the minimalist "P4" visual
                      alt="The Moment of Realization"
                      fill
                      className="object-cover scale-110 group-hover:scale-100 transition-transform duration-[3s]"
                    />
                 </div>
                 <div className="mt-8 text-center">
                    <span className="text-[10px] tracking-[0.4em] font-bold text-accent uppercase italic">EST. 1976 PROJECT STUDY</span>
                 </div>
              </div>
              
              {/* Floating Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-20 h-20 border border-stone/20 rounded-full flex items-center justify-center opacity-40">
                 <span className="text-[8px] font-bold tracking-[0.6em] text-foreground rotate-90">STUDIO MEMOIR</span>
              </div>
            </motion.div>

            {/* Right Column: Personal Narrative */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3 }}
              className="lg:w-7/12"
            >
               <div className="space-y-10 md:space-y-16 max-w-2xl relative">
                  
                  {/* Decorative Letter Stamp */}
                  <div className="absolute -top-16 -right-10 hidden lg:block opacity-10">
                     <div className="w-24 h-24 border-2 border-dashed border-foreground/30 rounded-full flex items-center justify-center text-[10px] font-bold tracking-widest leading-none">
                        S I O R A <br /> M E M O I R
                     </div>
                  </div>

                  <div className="space-y-4">
                     <span className="text-accent text-[11px] tracking-[0.8em] font-bold uppercase">PERSPECTIVE</span>
                     <h2 className="text-4xl md:text-5xl font-serif text-foreground tracking-tighter uppercase leading-[1.1]">
                        A Note from <br /> 
                        <span className="italic font-light opacity-50">the Founder</span>
                     </h2>
                  </div>

                  {/* Story Text - Clean Serif Case */}
                  <div className="space-y-10 text-xl md:text-2xl font-sans font-light text-foreground/70 leading-relaxed selection:bg-accent selection:text-white">
                     <p>
                        I once worked on a residential renovation project where the house was nearly 48 years old. 
                        As the old tiles were being removed and the walls carefully dismantled, 
                        I realized the elements carried almost half a century of memories.
                     </p>
                     
                     <p className="font-serif italic text-foreground/90 text-2xl md:text-4xl leading-tight border-l-2 border-accent/20 pl-8">
                        That moment changed the way I looked at design.
                     </p>

                     <p>
                        It taught me that architecture is not merely about creating something new, but about honoring the past while shaping spaces that respond to the present and prepare for the future.
                     </p>
                  </div>

                  {/* Final Script Signature Section */}
                  <div className="pt-10 md:pt-16 border-t border-stone/10 flex flex-col items-start gap-4">
                     <p className="text-lg text-foreground/50 font-medium italic mb-2">With Intention,</p>
                     
                     <div className="relative group">
                        {/* Large, Stylish Signature */}
                        <p className="text-6xl md:text-8xl font-serif italic text-foreground/90 tracking-tighter -rotate-1 group-hover:rotate-0 transition-transform duration-700">
                           Suditi Singh
                        </p>
                        <div className="flex items-center gap-6 mt-4">
                           <span className="w-12 h-[1px] bg-accent" />
                           <span className="text-[11px] tracking-[0.6em] font-bold text-accent uppercase">Founder, SIORA</span>
                        </div>
                     </div>
                  </div>

               </div>
            </motion.div>

          </div>

        </div>
      </div>

    </section>
  );
}
