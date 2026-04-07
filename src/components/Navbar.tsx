"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About", href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-1000 ${
        scrolled ? "bg-background/80 backdrop-blur-xl py-6 border-b border-stone/30" : "bg-transparent py-12"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center h-spacing">
        {/* Logo - Museum Style */}
        <Link href="/" className="group flex flex-col items-center">
          <span className="text-3xl font-serif tracking-[0.2em] font-bold text-foreground uppercase">
            SIORA
          </span>
          <span className="text-[10px] tracking-[0.3em] text-accent font-bold mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-700 uppercase">
            Est. 2014
          </span>
        </Link>

        {/* Desktop Links - Editorial Typography */}
        <div className="hidden md:flex items-center space-x-16">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[11px] tracking-[0.2em] uppercase font-bold text-foreground/40 hover:text-foreground transition-all duration-500 relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-accent transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
          <Link
            href="/#contact"
            className="px-10 py-3 text-[11px] tracking-[0.2em] uppercase font-bold border border-stone hover:bg-foreground hover:text-background transition-all duration-700"
          >
            Inquire
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} strokeWidth={1} /> : <Menu size={20} strokeWidth={1} />}
        </button>
      </div>

      {/* Mobile Menu - Full Screen Museum Gallery */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-background z-40 flex flex-col items-center justify-center"
          >
            {/* Background Outlined Branding for Menu */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
              <h2 className="text-[40vw] font-serif text-outline leading-none rotate-90 sm:rotate-0">SIORA CAPITAL</h2>
            </div>

            {/* Dedicated Close Button for Mobile Menu */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-10 right-6 text-foreground p-4 z-[60] group"
              aria-label="Close Menu"
            >
              <X size={32} strokeWidth={1} className="transition-transform duration-500 group-hover:rotate-90" />
            </button>

            <div className="flex flex-col items-center space-y-12 relative z-50">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.8 }}
                >
                  <Link
                    href={link.href}
                    className="text-5xl font-serif text-foreground hover:text-accent transition-all duration-500 tracking-tighter"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <Link
                  href="/#contact"
                  className="mt-8 border border-stone px-12 py-5 text-[10px] tracking-[0.8em] uppercase font-bold text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  START INQUIRY
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

