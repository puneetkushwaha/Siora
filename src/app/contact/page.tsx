"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, ArrowUpRight, ArrowDown } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@siora.design";
  const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE || "+91 7380663685";
  const phoneDigits = contactPhone.replace(/\s+/g, "");

  const socialLinks = [
    { name: "Instagram", icon: <ArrowUpRight size={14} />, href: "#", label: "01 / Visual Archive" },
    { name: "LinkedIn", icon: <ArrowUpRight size={14} />, href: "#", label: "02 / Professional Link" },
    { name: "Facebook", icon: <ArrowUpRight size={14} />, href: "#", label: "03 / Community Connection" },
  ];

  // Parallax effects for the hero
  const y = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);

  return (
    <main ref={containerRef} className="bg-background min-h-screen text-foreground selection:bg-accent selection:text-white font-sans overflow-x-hidden">
      <Navbar />

      {/* =========================================
          SECTION 1: THE VISION (IMERSIVE HERO)
          ========================================= */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
          <Image 
            src="/contact-immersive.png" 
            alt="SIORA Cinematic Studio" 
            fill 
            className="object-cover brightness-75" 
            priority
          />
          {/* Deep Vignette for Text Clarity */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70 z-0" />
          <div className="absolute inset-0 bg-accent/10 mix-blend-multiply" />
          <div className="absolute inset-0 bg-noise opacity-10" />
        </motion.div>

        <motion.div 
          style={{ opacity }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 text-center px-6"
        >
          <span className="text-white/60 text-[10px] tracking-[1em] font-bold uppercase mb-8 block">
            EST. 2026 / Studio Dialogue
          </span>
          <h1 className="text-7xl md:text-[8rem] font-serif text-white leading-[0.85] tracking-tighter uppercase mb-12 drop-shadow-xl">
            Let's <br /> <span className="italic font-light text-white/90 hover:text-white transition-all duration-700">Connect</span>
          </h1>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center gap-4 text-white/40"
          >
            <span className="text-[9px] tracking-[0.4em] uppercase font-bold text-white">Scroll to Reveal</span>
            <ArrowDown size={20} strokeWidth={1} />
          </motion.div>
        </motion.div>
      </section>

      {/* =========================================
          SECTION 2: THE INQUIRY HUB
          ========================================= */}
      <section className="relative z-20 py-8 md:py-10 px-6 bg-background">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="space-y-12"
          >
            <div className="flex flex-col md:flex-row items-baseline justify-between gap-8 border-b border-stone/30 pb-12">
              <h2 className="text-5xl md:text-8xl font-serif leading-none uppercase">
                Begin <br /> <span className="text-accent italic font-light">Legacy</span>
              </h2>
              <p className="text-foreground/60 text-sm md:text-lg font-light tracking-wide max-w-md leading-relaxed">
                We believe that every great structure begins with a conversation. Share your vision, and let’s craft something timeless.
              </p>
            </div>

            <div className="relative">
              <ContactForm defaultService="Architecture Planning" minimal />
              {/* Decorative grain and subtle shadow for the form in this layout */}
              <div className="absolute -inset-4 bg-stone/5 -z-10 blur-2xl rounded-full opacity-50" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          SECTION 3: THE DIRECT CONNECTION
          ========================================= */}
      <section className="py-8 md:py-10 bg-stone/5 border-y border-stone/20 overflow-hidden relative">
        {/* Background Decorative Type */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 select-none pointer-events-none opacity-[0.03]">
          <span className="text-[30vw] font-serif uppercase leading-none">Connect</span>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-24">
            
            {/* Direct Link 01: Voice */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group space-y-6"
            >
              <div className="flex items-center gap-4 text-accent">
                <span className="text-xs font-serif italic">01 /</span>
                <span className="text-[9px] tracking-[0.4em] font-bold uppercase">Voice</span>
              </div>
              <a href={`tel:${phoneDigits}`} className="block">
                <span className="text-3xl md:text-4xl font-sans tracking-tighter hover:text-accent transition-colors duration-500 block">
                  {contactPhone}
                </span>
                <span className="text-[10px] tracking-widest text-foreground/40 mt-4 block uppercase font-medium">Available Mon - Sat</span>
              </a>
            </motion.div>

            {/* Direct Link 02: Mail */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group space-y-6"
            >
              <div className="flex items-center gap-4 text-accent">
                <span className="text-xs font-serif italic">02 /</span>
                <span className="text-[9px] tracking-[0.4em] font-bold uppercase">Mail</span>
              </div>
              <a href={`mailto:${contactEmail}`} className="block">
                <span className="text-3xl md:text-4xl font-sans tracking-tighter hover:text-accent transition-colors duration-500 block">
                  {contactEmail}
                </span>
                <span className="text-[10px] tracking-widest text-foreground/40 mt-4 block uppercase font-medium">Typically 24h response</span>
              </a>
            </motion.div>

            {/* Direct Link 03: Studio */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group space-y-6"
            >
              <div className="flex items-center gap-4 text-accent">
                <span className="text-xs font-serif italic">03 /</span>
                <span className="text-[9px] tracking-[0.4em] font-bold uppercase">Studio</span>
              </div>
              <address className="not-italic">
                <span className="text-xl md:text-2xl font-serif leading-relaxed block max-w-[280px]">
                  Levana Cyber Heights, Vibhuti Khand, Lucknow
                </span>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Unit+No.804B%2C+8th+floor%2C+Levana+Cyber+Heights%2C+Vibhuti+Khand%2C+Gomti+Nagar%2C+Lucknow%2C+Uttar+Pradesh+226010"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[10px] tracking-widest text-accent mt-6 inline-flex items-center gap-3 uppercase font-bold group"
                >
                  Locate Studio <ArrowUpRight size={12} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </address>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 4: SOCIAL ARCHIVES
          ========================================= */}
      <section className="py-8 md:py-10 px-6 bg-background">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-8">
            <h3 className="text-6xl md:text-9xl font-serif leading-none tracking-tighter uppercase">
              Visual <br /> <span className="italic font-light text-stone">Archives</span>
            </h3>
            <p className="text-foreground/40 text-[10px] tracking-[0.5em] uppercase font-bold">
              Follow the journey
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-stone/20">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-background p-8 md:p-10 hover:bg-stone/5 transition-colors duration-700 overflow-hidden"
              >
                <div className="relative z-10 flex flex-col justify-between h-full min-h-[160px]">
                  <span className="text-accent text-[10px] tracking-[0.3em] font-bold uppercase">{social.label}</span>
                  <div className="flex items-center justify-between">
                    <span className="text-4xl md:text-5xl font-serif tracking-tighter group-hover:italic transition-all duration-700">{social.name}</span>
                    <div className="w-12 h-12 rounded-full border border-stone/30 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-700">
                      {social.icon}
                    </div>
                  </div>
                </div>
                {/* Visual texture */}
                <div className="absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2 w-32 h-32 bg-accent opacity-0 group-hover:opacity-[0.03] rounded-full transition-all duration-700 blur-3xl" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
