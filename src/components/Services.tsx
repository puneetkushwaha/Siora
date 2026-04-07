"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const serviceList = [
  {
    id: "01",
    slug: "architecture",
    title: "Architecture & Planning",
    desc: "Context-driven architectural solutions focused on clarity, form, and longevity.",
    image: "/projects/p6.png",
    align: "left"
  },
  {
    id: "02",
    slug: "interiors",
    title: "Interior Design",
    desc: "Thoughtful interiors balancing materials, light, and spatial harmony.",
    image: "/projects/p1.png",
    align: "right"
  },
  {
    id: "03",
    slug: "consultation",
    title: "Design Consultation & Allied Services",
    desc: "Seamless execution from design to delivery with complete accountability through integrated allied services.",
    image: "/projects/p5.png",
    align: "left"
  }
];

export default function Services() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section id="services" ref={containerRef} className="bg-background pt-16 md:pt-32 pb-16 md:pb-32 relative overflow-hidden">
      
      {/* Background Floating Branding */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.02] select-none z-0">
        <h2 className="text-[40vw] font-serif text-outline leading-none sticky top-1/4 -translate-x-1/4">
          STUDIO
        </h2>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section - Cinematic Entrance */}
        <div className="mb-12 md:mb-48 max-w-4xl">
          <div className="flex items-center gap-6 mb-12">
            <span className="text-accent text-[10px] tracking-[0.4em] font-bold uppercase">Disciplines</span>
            <span className="h-[1px] flex-grow bg-stone/30" />
          </div>
          <h2 className="text-6xl md:text-8xl font-serif text-foreground tracking-tighter leading-[1.1] uppercase">
            Our <br /> 
            Services
          </h2>
          <p className="mt-8 text-foreground/60 text-lg md:text-2xl font-light leading-relaxed max-w-2xl">
            Our approach ensures that every design — whether classical, contemporary, or future-forward — is executed with clarity, coordination, and intent.
          </p>
        </div>

        {/* Services - Cinematic Staggered Grid */}
        <div className="space-y-24 md:space-y-48">
          {serviceList.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: any, index: number }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const yMove = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  return (
    <div 
      ref={cardRef}
      className={`flex flex-col ${service.align === 'right' ? 'md:items-end' : 'md:items-start'} relative p-4`}
    >
      {/* Massive Background Text for Card */}
      <div className={`absolute top-0 ${service.align === 'right' ? 'right-0 text-right' : 'left-0'} opacity-[0.05] pointer-events-none -z-10`}>
        <span className="text-[15vw] font-serif text-outline select-none leading-none">
          {service.title.split(' ')[0]}
        </span>
      </div>

      <div className={`flex flex-col md:flex-row gap-16 md:gap-32 items-center ${service.align === 'right' ? 'md:flex-row-reverse' : ''} max-w-7xl w-full`}>
        
        {/* Image Box - Framed Parallax */}
        <motion.div 
          style={{ y: yMove }}
          className="w-full md:w-7/12"
        >
          <div className="framed-print group overflow-hidden">
            <div className="relative aspect-[4/5] md:aspect-video overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-[2s]">
              <motion.div style={{ scale: imgScale }} className="w-full h-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Content Box */}
        <motion.div 
          initial={{ opacity: 0, x: service.align === 'right' ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="w-full md:w-5/12 space-y-12"
        >
          <div className="space-y-4">
            <span className="text-accent text-[12px] tracking-[0.8em] font-bold block">{service.id}</span>
            <h3 className="text-5xl md:text-7xl font-serif text-foreground tracking-tighter leading-none uppercase">
              {service.title}
            </h3>
          </div>
          
          <p className="text-foreground/50 text-[11px] md:text-sm tracking-[0.3em] font-light leading-loose uppercase max-w-sm">
            {service.desc}
          </p>

          <Link 
            href={`/services/${service.slug}`}
            className="pt-8 flex items-center gap-6 group cursor-pointer w-fit"
          >
            <div className="h-[1px] w-12 bg-accent group-hover:w-24 transition-all duration-700" />
            <span className="text-[10px] tracking-[0.6em] font-bold text-foreground group-hover:text-accent transition-colors uppercase">View Details</span>
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
