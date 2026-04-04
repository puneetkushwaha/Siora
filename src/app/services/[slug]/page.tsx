"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { serviceDetails } from "@/lib/services";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const serviceMapping: Record<string, string> = {
  architecture: "Architecture Planning",
  interiors: "Interior Curation",
  consultation: "Turnkey Projects"
};

export default function ServicePage() {
  const params = useParams();
  const slug = params.slug as string;
  const details = serviceDetails[slug];

  if (!details) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-serif text-foreground mb-6 uppercase">Service Not Found</h1>
        <Link href="/#services" className="text-accent border-b border-accent pb-2 text-xs tracking-widest font-bold">
          BACK TO STUDIO
        </Link>
      </div>
    );
  }

  return (
    <main className="bg-background min-h-screen text-foreground selection:bg-accent selection:text-white">
      
      <Navbar />

      {/* Hero Section - Artistic Impact */}
      <section className="relative pt-48 pb-24 md:pt-64 md:pb-32 overflow-hidden border-b border-stone/20 mb-24">
        {/* Large Background Solid Number */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] select-none pointer-events-none">
          <h2 className="text-[50vw] font-serif leading-none tracking-tighter uppercase">
            {details.slug.charAt(0)}
          </h2>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:items-center">
            
            {/* Title & Vision Column */}
            <div className="lg:w-7/12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
              >
                <span className="text-accent text-[12px] tracking-[0.8em] font-bold mb-8 block uppercase">DISCIPLINE</span>
                <h1 className="text-7xl md:text-9xl font-serif text-foreground leading-[0.9] tracking-tighter mb-12 uppercase">
                   {details.title.split(' & ')[0]} <br />
                   <span className="italic font-light text-outline opacity-40">
                     {details.title.split(' & ')[1] || details.title.split(' ')[details.title.split(' ').length - 1]}
                   </span>
                </h1>
                <p className="text-xl md:text-3xl font-light text-foreground/60 leading-relaxed max-w-2xl">
                  {details.subtitle}
                </p>
              </motion.div>
            </div>

            {/* Hero Image - Framed Signature */}
            <div className="lg:w-5/12">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="framed-print"
              >
                <div className="relative aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-[2s]">
                  <Image
                    src={details.image}
                    alt={details.title}
                    fill
                    className="object-cover scale-110"
                  />
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Philosophy & Narrative */}
      <section className="container mx-auto px-6 mb-32">
        <div className="max-w-4xl mx-auto space-y-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-8"
          >
            <span className="h-[1px] w-20 bg-accent" />
            <span className="text-[10px] tracking-[0.4em] font-bold text-accent uppercase">PHILOSOPHY</span>
          </motion.div>
          
          <div className="space-y-12">
             {details.description.map((para, i) => (
                <p key={i} className="text-xl md:text-3xl font-light text-foreground/80 leading-relaxed italic">
                  {para}
                </p>
             ))}
          </div>
        </div>
      </section>

      {/* Capabilities - Grid Style */}
      <section className="bg-stone/10 py-32 border-y border-stone/20 mb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-[10px] tracking-[0.6em] font-bold text-accent mb-20 text-center uppercase">SERVICE CAPABILITIES</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {details.capabilities.map((capability, i) => (
                <div key={i} className="p-12 bg-background border border-stone/30 shadow-none hover:border-accent transition-all duration-700">
                  <h4 className="text-3xl font-serif text-foreground mb-10 tracking-tighter uppercase">{capability.title}</h4>
                  <ul className="space-y-6">
                    {capability.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-4 text-[11px] tracking-widest text-foreground/50 font-bold uppercase group">
                        <CheckCircle2 size={12} className="text-accent group-hover:scale-125 transition-transform" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process - Editorial Timeline */}
      <section className="container mx-auto px-6 mb-48">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-[10px] tracking-[0.6em] font-bold text-accent mb-24 uppercase">THE INTENT-DRIVEN PROCESS</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
            {details.process.map((p, i) => (
              <div key={i} className="space-y-8 relative">
                <span className="text-6xl font-serif text-outline opacity-20 block">{p.step}</span>
                <h4 className="text-2xl font-serif text-foreground uppercase tracking-tight">{p.title}</h4>
                <p className="text-sm text-foreground/60 leading-relaxed font-light tracking-wide italic">
                  {p.desc}
                </p>
                {/* Connector line for desktop */}
                {i < 2 && <div className="hidden lg:block absolute top-[30px] -right-[15%] w-1/4 h-[1px] bg-stone/30" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Contact Section - Smart Pre-selection */}
      <div id="contact" className="border-t border-stone/20 pt-32">
         <div className="container mx-auto px-6 mb-16">
            <span className="text-accent text-[10px] tracking-[0.4em] font-bold uppercase">Ready to Transform?</span>
         </div>
         <ContactForm defaultService={serviceMapping[slug]} />
      </div>

      <Footer />

    </main>
  );
}
