"use client";

import { projectData } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { StudioZoom } from "@/components/InteractiveGallery";

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  const projectIndex = projectData.findIndex((p) => p.slug === slug);
  const project = projectData[projectIndex];

  const nextProject = projectData[(projectIndex + 1) % projectData.length];
  
  if (!project) {
    notFound();
  }

  return (
    <main className="bg-background min-h-screen text-foreground selection:bg-accent selection:text-white">
      
      <Navbar />

      {/* Pure Hero Section: High-Impact Centered Large Image */}
      <section className="pt-48 pb-20 md:pt-64">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto space-y-16">
            
            {/* Minimal Header */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="space-y-8 text-center"
            >
              <div className="flex items-center justify-center gap-6 mb-8">
                 <Link href="/projects" className="group flex items-center gap-2 text-[9px] tracking-[0.5em] font-bold text-accent">
                    <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
                    BACK
                 </Link>
                 <span className="h-[1px] w-8 bg-stone/20" />
                 <span className="text-foreground/30 text-[9px] tracking-[0.5em] font-bold uppercase">{project.category}</span>
              </div>

              <h1 className="text-6xl md:text-8xl font-serif text-foreground tracking-tighter uppercase leading-[0.9]">
                {project.title.split(',')[0]}
              </h1>
              
              {/* Pure Metadata Line */}
              <div className="flex items-center justify-center gap-8 pt-4">
                 <span className="text-[10px] tracking-[0.3em] font-bold text-foreground/40 uppercase">{project.location}</span>
                 <span className="w-1 h-1 rounded-full bg-accent/30" />
                 <span className="text-[10px] tracking-[0.3em] font-bold text-foreground/40 uppercase">{project.year}</span>
                 <span className="w-1 h-1 rounded-full bg-accent/30" />
                 <span className="text-[10px] tracking-[0.3em] font-bold text-foreground/40 uppercase">{project.service.split(' ')[0]}</span>
              </div>
            </motion.div>

            {/* Cinematic Main Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="relative aspect-video w-full overflow-hidden framed-print bg-stone/5"
            >
               <StudioZoom 
                 src={project.images[0]} 
                 alt={project.title} 
                 className="aspect-video"
               />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Narrative: Clean Centered Block */}
      <section className="container mx-auto px-6 py-32 md:py-48">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-8"
          >
             <span className="text-[9px] tracking-[1em] font-bold text-accent uppercase">INTENTION</span>
             <p className="text-2xl md:text-3xl font-serif text-foreground/80 leading-relaxed italic font-light">
               &ldquo;{project.description}&rdquo;
             </p>
             <div className="h-16 w-[1px] bg-accent/20" />
          </motion.div>
        </div>
      </section>

      {/* The Pure Sequence Gallery: Vertical centered Filmstrip */}
      <section className="pb-48">
        <div className="container mx-auto px-6 space-y-24 md:space-y-48">
           
           {project.images.slice(1).map((img, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 1.2 }}
               className="max-w-5xl mx-auto"
             >
                <div className="framed-print relative bg-stone/5">
                   <StudioZoom 
                     src={img} 
                     alt={`Gallery ${i + 1}`} 
                     className="aspect-[16/10] md:aspect-[21/9]" 
                   />
                </div>
                <div className="mt-8 flex justify-between items-center text-[8px] tracking-[0.5em] text-foreground/30 font-bold uppercase px-2">
                   <span>IMAGE REF 0{i + 2}</span>
                   <span>SIORA ARCHIVAL SERIES</span>
                </div>
             </motion.div>
           ))}

        </div>
      </section>

      {/* Simple Navigation: Continue Story */}
      <section className="border-t border-stone/20 overflow-hidden bg-stone/5">
        <div className="container mx-auto px-6 py-48 text-center space-y-12">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
               <span className="text-accent text-[9px] tracking-[1em] font-bold uppercase block">UP NEXT</span>
               <h3 className="text-5xl md:text-8xl font-serif text-foreground uppercase tracking-tighter leading-none opacity-80">
                 {nextProject.title.split(',')[0]}
               </h3>
            </motion.div>

            <Link 
              href={`/projects/${nextProject.slug}`}
              className="group inline-flex items-center gap-12 text-[10px] tracking-[0.6em] font-bold uppercase text-foreground hover:text-accent transition-all duration-500 underline underline-offset-[12px] decoration-accent/20 hover:decoration-accent"
            >
              CONTINUE JOURNEY
              <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
            </Link>
        </div>
      </section>

      {/* Inquiry Block */}
      <div id="contact" className="border-t border-stone/20 pt-32">
         <ContactForm defaultService={project.service.includes('Interior') ? 'Interior Curation' : 'Architecture Planning'} />
      </div>

      <Footer />

    </main>
  );
}
