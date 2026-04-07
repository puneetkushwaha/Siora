"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms: Text moves left, Image moves right
  const textX = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const imageX = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* =========================================
          DESKTOP HERO (Hidden on Mobile)
          ========================================= */}
      <section ref={containerRef} className="hidden lg:flex relative h-[120vh] w-full bg-background overflow-hidden items-center justify-center">
        
        {/* Background Decorative Pattern - Subtle Stone Grid */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(var(--color-stone) 1px, transparent 1px), linear-gradient(90deg, var(--color-stone) 1px, transparent 1px)', backgroundSize: '120px 120px' }} />
        </div>

        <div className="container relative z-10 px-6">
          <motion.div style={{ opacity }} className="relative flex flex-col items-center">
            
            {/* Main Headline - Outlined & Massive */}
            <motion.div style={{ x: textX }} className="relative z-20 mb-8 select-none pointer-events-none">
              <h1 className="text-[22vw] font-serif tracking-tighter leading-none text-outline opacity-20">
                SIORA
              </h1>
              <h1 className="absolute inset-0 text-[22vw] font-serif tracking-tighter leading-none text-foreground mix-blend-multiply opacity-90">
                SIORA
              </h1>
            </motion.div>

            {/* Secondary Info - Studio Badge Style */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="relative z-30 flex flex-col items-center gap-6"
            >
              <div className="flex items-center gap-4">
                <span className="h-[1px] w-12 bg-accent opacity-30" />
                <span className="text-accent text-[10px] tracking-[1.2em] font-bold">
                  PROJECT NO. 01 / 2026
                </span>
                <span className="h-[1px] w-12 bg-accent opacity-30" />
              </div>
              <p className="text-foreground/70 text-sm md:text-base tracking-[0.3em] leading-relaxed max-w-lg text-center font-light">
                An exploration of minimal volume <br /> 
                and structural weightlessness.
              </p>
            </motion.div>

            {/* Floating 'Framed' Image */}
            <motion.div 
              style={{ x: imageX, rotate: 2 }}
              className="absolute -top-12 -right-12 w-[35vw] z-0 pointer-events-none"
            >
              <div className="framed-print">
                <div className="relative aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
                  <Image
                    src="/projects/p3.png"
                    alt="Featured SIORA Space"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 35vw"
                  />
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>

        {/* Grid Overlay Framing */}
        <div className="absolute inset-0 border-[30px] border-background z-40 pointer-events-none" />
        <div className="absolute inset-[30px] border border-stone/30 z-40 pointer-events-none" />
      </section>


      {/* =========================================
          MOBILE HERO (Hidden on Desktop)
          ========================================= */}
      <section className="flex lg:hidden relative min-h-screen w-full bg-background overflow-hidden flex-col items-center justify-center pt-32 pb-20 px-6">
        
        {/* Background Decorative Pattern */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(var(--color-stone) 1px, transparent 1px), linear-gradient(90deg, var(--color-stone) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        </div>

        <div className="container relative z-10 flex flex-col items-center text-center">
          
          {/* Outlined Branding */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="relative z-20 mb-8"
          >
            <h1 className="text-[25vw] font-serif text-outline opacity-10 leading-none tracking-tighter">
              SIORA
            </h1>
            <h1 className="absolute inset-0 text-[25vw] font-serif text-foreground leading-none tracking-tighter opacity-90">
              SIORA
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative z-30 mb-12"
          >
            <span className="text-accent text-[10px] tracking-[0.4em] font-bold block mb-4 uppercase">
              Architectural Vision
            </span>
            <p className="text-foreground/60 text-xs tracking-wide leading-loose max-w-xs mx-auto">
              An exploration of minimal volume <br /> 
              and structural weightlessness.
            </p>
          </motion.div>

          {/* Framed Image Mobile */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="relative w-full max-w-[280px]"
          >
            <div className="framed-print rotate-[-2deg]">
              <div className="relative aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
                <Image
                  src="/projects/p1.png"
                  alt="Featured SIORA Space"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 80vw, 30vw"
                />
              </div>
            </div>
          </motion.div>

        </div>

        {/* Global Frame Overlay */}
        <div className="absolute inset-0 border-[15px] border-background z-40 pointer-events-none" />
        <div className="absolute inset-[15px] border border-stone/20 z-40 pointer-events-none" />
      </section>
    </>
  );
}





