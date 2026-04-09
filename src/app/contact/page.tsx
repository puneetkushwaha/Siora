"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, ArrowRight, Send, CheckCircle, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+91",
    service: "Architecture Planning",
    message: "",
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });
      if (!response.ok) throw new Error('Failed to send');
      setStatus('success');
      setFormState({ name: "", email: "", phone: "", countryCode: "+91", service: "Architecture Planning", message: "" });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      setStatus('error');
      setErrorMessage("Service currently unavailable. Please use direct email.");
    }
  };

  return (
    <main className="bg-background min-h-screen text-foreground selection:bg-accent selection:text-white">
      <Navbar />

      {/* Hero Section - Balanced Editorial Style */}
      <section className="pt-24 pb-8 md:pt-32 md:pb-12 relative overflow-hidden bg-stone/5">
        {/* Artistic Backdrop Typography */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] select-none pointer-events-none">
          <h2 className="text-[40vw] font-serif leading-none tracking-tighter uppercase text-outline">SIORA</h2>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            <span className="text-accent text-[12px] tracking-[0.8em] font-bold mb-4 block uppercase font-sans">Contact Studio</span>
            <h1 className="text-5xl md:text-8xl font-serif text-foreground leading-[0.9] tracking-tighter uppercase">
              Get in <span className="italic font-light text-outline">Touch</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content Grid - Balanced 3-Column Layout */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start">
              
              {/* Column 1: Identity & Channels (Col 1-3) */}
              <div className="lg:col-span-3 space-y-16">
                
                {/* Communication Section */}
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="space-y-8">
                  <div className="flex items-center gap-4">
                    <span className="h-[1px] w-8 bg-accent" />
                    <span className="text-[10px] tracking-[0.4em] font-bold text-accent uppercase font-sans">Channels</span>
                  </div>
                  
                  <div className="space-y-8">
                    <div className="group">
                      <span className="text-[9px] tracking-widest text-foreground/40 font-bold uppercase block mb-1 font-sans">Studio Email</span>
                      <a href="mailto:contact@siora.design" className="text-lg md:text-xl font-light hover:text-accent transition-colors duration-500">
                        contact@siora.design
                      </a>
                    </div>
                    <div className="group">
                      <span className="text-[9px] tracking-widest text-foreground/40 font-bold uppercase block mb-1 font-sans">Direct Line</span>
                      <a href="tel:+917380663685" className="text-lg md:text-xl font-light hover:text-accent transition-colors duration-500">
                        +91 7380663685
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Presence Section */}
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="space-y-8">
                  <div className="flex items-center gap-4">
                    <span className="h-[1px] w-8 bg-accent" />
                    <span className="text-[10px] tracking-[0.4em] font-bold text-accent uppercase font-sans">Location</span>
                  </div>
                  
                  <div className="space-y-6">
                    <address className="text-xl font-serif text-foreground not-italic leading-tight">
                      Unit 804B, Cyber Heights, <br />
                      Lucknow, UP 226010
                    </address>
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=Unit+No.804B%2C+8th+floor%2C+Levana+Cyber+Heights%2C+Vibhuti+Khand%2C+Gomti+Nagar%2C+Lucknow%2C+Uttar+Pradesh+226010"
                      target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-4 text-[9px] tracking-[0.4em] font-bold text-accent uppercase group font-sans border-b border-transparent hover:border-accent transition-all"
                    >
                      Locate on Maps <ArrowRight size={10} className="group-hover:translate-x-2 transition-transform duration-500" />
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Column 2: Gallery Frame & Socials (Col 4-7) */}
              <div className="lg:col-span-4 flex flex-col items-center">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5 }}
                  className="w-full space-y-8"
                >
                  {/* The Gallery Frame */}
                  <div className="p-4 bg-stone/5 border border-stone/20 shadow-sm relative group">
                    <div className="aspect-[4/5] relative overflow-hidden">
                       <Image 
                         src="/studio-aesthetic.png" 
                         alt="SIORA Studio"
                         fill
                         className="object-cover transition-transform duration-[4s] group-hover:scale-105"
                       />
                       {/* Subtle Vignette Overlay */}
                       <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/20" />
                    </div>
                    {/* Frame Inner Border */}
                    <div className="absolute inset-6 border border-white/10 pointer-events-none" />
                  </div>

                  {/* Social Links below Frame */}
                  <div className="flex justify-between items-center w-full px-2">
                    <span className="text-[9px] tracking-[0.4em] font-bold text-foreground/40 uppercase font-sans">Digital Journey</span>
                    <div className="flex gap-6">
                      {['Instagram', 'LinkedIn', 'Facebook'].map(social => (
                        <a 
                          key={social} 
                          href="#" 
                          className="text-[10px] tracking-wider uppercase font-bold text-foreground/60 hover:text-accent transition-colors duration-500"
                        >
                          {social.charAt(0)}
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Column 3: Inquiry Functional Core (Col 8-12) */}
              <div className="lg:col-span-5">
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-foreground text-background p-8 md:p-10 shadow-2xl relative overflow-hidden"
                >
                  {/* Subtle Background Mark */}
                  <div className="absolute top-0 right-0 opacity-[0.05] pointer-events-none -translate-y-1/4 translate-x-1/4">
                    <span className="text-[12vw] font-serif italic">S.</span>
                  </div>

                  <div className="mb-10 relative z-10">
                    <h3 className="text-2xl font-serif text-background uppercase tracking-tight mb-2">Start an Inquiry</h3>
                    <p className="text-background/40 text-[9px] uppercase tracking-widest font-sans">Manifest your vision</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                    <div className="grid grid-cols-1 gap-8">
                      <div className="space-y-1">
                        <label className="text-[8px] tracking-[0.2em] uppercase font-bold text-background/40 font-sans">Full Name</label>
                        <input required type="text" value={formState.name} className="w-full bg-transparent border-b border-background/20 py-2 text-base focus:outline-none focus:border-accent transition-colors font-light placeholder:text-background/20" placeholder="Rahul Sharma" onChange={e => setFormState({...formState, name: e.target.value})} />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[8px] tracking-[0.2em] uppercase font-bold text-background/40 font-sans">Email</label>
                        <input required type="email" value={formState.email} className="w-full bg-transparent border-b border-background/20 py-2 text-base focus:outline-none focus:border-accent transition-colors font-light placeholder:text-background/20" placeholder="rahul@example.com" onChange={e => setFormState({...formState, email: e.target.value})} />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[8px] tracking-[0.2em] uppercase font-bold text-background/40 font-sans">Inquiry Type</label>
                      <select value={formState.service} className="w-full bg-transparent border-b border-background/20 py-2 text-base focus:outline-none focus:border-accent transition-colors font-light appearance-none cursor-pointer" onChange={e => setFormState({...formState, service: e.target.value})}>
                        <option className="bg-foreground text-background">Architecture Planning</option>
                        <option className="bg-foreground text-background">Interior Curation</option>
                        <option className="bg-foreground text-background">Turnkey Projects</option>
                        <option className="bg-foreground text-background">Design Consultation</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[8px] tracking-[0.2em] uppercase font-bold text-background/40 font-sans">Description</label>
                      <textarea required rows={3} value={formState.message} className="w-full bg-transparent border-b border-background/20 py-2 text-base focus:outline-none focus:border-accent transition-colors font-light resize-none placeholder:text-background/20" placeholder="Briefly describe your project..." onChange={e => setFormState({...formState, message: e.target.value})} />
                    </div>

                    <div className="pt-2">
                      <button 
                        type="submit" 
                        disabled={status === 'submitting' || status === 'success'}
                        className="group bg-accent text-white px-10 py-4 text-[9px] tracking-[0.4em] uppercase font-bold hover:bg-white hover:text-accent transition-all duration-700 flex items-center justify-center gap-6 w-full disabled:bg-background/20 disabled:text-background/40"
                      >
                        {status === 'submitting' ? 'Processing...' : status === 'success' ? 'Sent' : <>Submit <Send size={10} strokeWidth={1.5} className="group-hover:translate-x-2 transition-transform" /></>}
                      </button>

                      {status === 'error' && <p className="text-red-500 text-[8px] tracking-widest uppercase mt-3">{errorMessage}</p>}
                      {status === 'success' && <p className="text-background text-[8px] tracking-widest uppercase mt-3">Success. We will connect soon.</p>}
                    </div>
                  </form>
                </motion.div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
