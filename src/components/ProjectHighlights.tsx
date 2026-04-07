"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projectData } from "@/lib/projects";

export default function ProjectHighlights() {
  const desktopRef = useRef(null);
  const mobileRef = useRef(null);
  
  const { scrollYProgress: desktopProgress } = useScroll({
    target: desktopRef,
  });
  const desktopX = useTransform(desktopProgress, [0, 1], ["0%", "-75%"]);

  const { scrollYProgress: mobileProgress } = useScroll({
    target: mobileRef,
  });
  const mobileX = useTransform(mobileProgress, [0, 1], ["0%", "-85%"]);

  return (
    <>
      {/* =========================================
          DESKTOP PROJECTS (Hidden on Mobile)
          ========================================= */}
      <section ref={desktopRef} className="hidden lg:block relative h-[400vh] bg-background">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          
          {/* Background Title - Large & Faded */}
          <div className="absolute top-20 left-6 z-0 opacity-[0.07] select-none pointer-events-none">
            <h2 className="text-[25vw] font-serif text-foreground whitespace-nowrap leading-none tracking-tighter">
              SELECTED PROJECTS
            </h2>
          </div>

          <motion.div style={{ x: desktopX }} className="flex gap-24 px-32 items-center">
            {/* Intro Card - Editorial Style */}
            <div className="flex-shrink-0 w-[450px]">
              <div className="flex items-center gap-4 mb-10">
                <span className="text-accent text-[10px] tracking-[0.6em] font-bold">PORTFOLIO</span>
                <span className="h-[1px] w-12 bg-stone" />
              </div>
              <h3 className="text-6xl font-serif text-foreground leading-[1.1] tracking-tighter mb-12">
                Architectural <br />
                <span className="text-outline italic font-light opacity-50">Narratives</span>
              </h3>
              <Link 
                href="/projects"
                className="group inline-flex items-center gap-6 text-[10px] tracking-[0.4em] uppercase font-bold text-foreground/40 hover:text-foreground transition-all duration-700"
              >
                Browse All Works
                <div className="h-10 w-10 rounded-full border border-stone flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-700">
                  <ArrowRight size={14} className="group-hover:text-white transition-colors" />
                </div>
              </Link>
            </div>

            {/* Project Items - Framed Presentation */}
            {projectData.map((project, i) => (
              <motion.div
                key={project.slug}
                className="flex-shrink-0 w-[45vw] group"
              >
                <Link href={`/projects/${project.slug}`} className="block relative">
                  <div className="framed-print">
                    <div className="relative aspect-[16/10] w-full overflow-hidden transition-all duration-[1.5s]">
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-[2s] ease-out"
                        priority={i === 0}
                        sizes="(max-width: 1024px) 100vw, 45vw"
                      />
                    </div>
                  </div>
                  
                  {/* Label - Museum Style */}
                  <div className="mt-10 flex justify-between items-start">
                    <div className="space-y-3">
                      <span className="text-accent text-[10px] tracking-[0.3em] font-bold block uppercase">{project.category}</span>
                      <h4 className="text-4xl font-serif text-foreground tracking-tighter uppercase group-hover:italic transition-all duration-700">{project.title}</h4>
                    </div>
                    <div className="text-right pt-2 border-t border-stone w-20">
                      <span className="text-[10px] tracking-[0.2em] text-foreground/40 font-bold block mb-3 italic">{project.year}</span>
                      <span className="text-3xl font-serif text-outline opacity-20 transition-opacity group-hover:opacity-100 group-hover:text-accent duration-700">{(i + 1).toString().padStart(2, '0')}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}

            {/* Outro Text - Massive Solid */}
            <div className="flex-shrink-0 px-32 opacity-[0.05]">
               <h4 className="text-[20vw] font-serif text-foreground leading-none">SIORA</h4>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          MOBILE PROJECTS (Hidden on Desktop)
          ========================================= */}
      <section ref={mobileRef} className="block lg:hidden relative h-[250vh] bg-background">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          
          {/* Background Branding Solid */}
          <div className="absolute top-10 left-4 z-0 opacity-[0.05] select-none pointer-events-none">
            <h2 className="text-[30vw] font-serif text-foreground whitespace-nowrap leading-none tracking-tighter">
              SELECTED PROJECTS
            </h2>
          </div>

          <motion.div style={{ x: mobileX }} className="flex gap-8 px-6 items-center h-full">
            {/* Intro Card Mobile */}
            <div className="flex-shrink-0 w-[80vw]">
              <span className="text-accent text-[10px] tracking-[0.4em] mb-6 block font-bold">
                PORTFOLIO
              </span>
              <h3 className="text-4xl font-serif text-foreground leading-[1.1] tracking-tighter mb-8">
                Architectural <br />
                <span className="text-outline opacity-50 italic">Narratives</span>
              </h3>
              <Link 
                href="/projects"
                className="inline-flex items-center gap-4 text-[10px] tracking-[0.3em] font-bold text-accent border-b border-accent pb-2"
              >
                VIEW FULL ARCHIVE
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Project Items Mobile - Framed Small */}
            {projectData.map((project, i) => (
              <motion.div
                key={project.slug}
                className="flex-shrink-0 w-[85vw]"
              >
                <Link href={`/projects/${project.slug}`} className="block relative">
                  <div className="framed-print rotate-[-1deg]">
                    <div className="relative aspect-[4/5] w-full overflow-hidden transition-all duration-[1s]">
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 85vw, 40vw"
                      />
                    </div>
                  </div>
                  
                  <div className="mt-6 px-1 flex justify-between items-end">
                    <div>
                      <span className="text-accent text-[10px] tracking-[0.2em] mb-2 block font-bold uppercase">
                        {project.category}
                      </span>
                      <h4 className="text-2xl font-serif text-foreground tracking-tighter uppercase">{project.title}</h4>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-serif text-outline opacity-20">{(i + 1).toString().padStart(2, '0')}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}

            {/* Outro Text Mobile Solid */}
            <div className="flex-shrink-0 px-8 opacity-[0.05]">
               <h4 className="text-7xl font-serif text-foreground">SIORA</h4>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}


