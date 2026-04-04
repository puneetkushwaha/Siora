"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Phone, X, Plus } from "lucide-react";

const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER || "7380663685";
const whatsappMessage = encodeURIComponent("Hi SIORA, I'm interested in your architecture and design services. Can we discuss?");

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    {
      icon: <MessageSquare size={20} />,
      label: "WHATSAPP",
      href: `https://wa.me/${phoneNumber}?text=${whatsappMessage}`,
      color: "bg-[#25D366]",
    },
    {
      icon: <Phone size={20} />,
      label: "CALL NOW",
      href: `tel:+91${phoneNumber}`,
      color: "bg-accent",
    },
  ];

  return (
    <div className="fixed bottom-12 right-12 z-[100] flex flex-col items-end gap-6">
      
      {/* Expanded Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="flex flex-col gap-4 mb-4"
          >
            {actions.map((action, index) => (
              <motion.a
                key={action.label}
                href={action.href}
                target={action.label === "WHATSAPP" ? "_blank" : undefined}
                rel={action.label === "WHATSAPP" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group flex items-center gap-4"
              >
                <span className="bg-background/80 backdrop-blur-md border border-stone/20 px-4 py-2 text-[9px] tracking-[0.3em] font-bold text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-xl">
                  {action.label}
                </span>
                <div className={`${action.color} w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform duration-500`}>
                  {action.icon}
                </div>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-foreground text-background rounded-full flex items-center justify-center shadow-2xl hover:bg-accent hover:text-foreground transition-all duration-700 group relative overflow-hidden"
      >
        <motion.div
           animate={{ rotate: isOpen ? 45 : 0 }}
           transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {isOpen ? <X size={24} /> : <Plus size={24} />}
        </motion.div>
        
        {/* Subtle Ring Animation */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full border border-foreground animate-ping-slow opacity-20" />
        )}
      </button>

    </div>
  );
}
