"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <main className="bg-background min-h-screen text-foreground selection:bg-accent selection:text-white">
      <Navbar />
      
      <section className="pt-16 pb-8 md:pt-24 md:pb-12 relative overflow-hidden">
        {/* Artistic Background Typography */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 opacity-[0.02] select-none pointer-events-none">
          <h2 className="text-[30vw] font-serif leading-none tracking-tighter uppercase">Legal</h2>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="max-w-4xl"
          >
            <span className="text-accent text-[12px] tracking-[0.8em] font-bold mb-4 block uppercase">RECORDS</span>
            <h1 className="text-5xl md:text-7xl font-serif text-foreground leading-[1.1] tracking-tighter mb-8 uppercase">
              Privacy <br /> <span className="italic font-light text-outline">Policy</span>
            </h1>
            
            <div className="space-y-8 text-foreground/70 font-light leading-relaxed text-lg pb-8">


              <div className="space-y-6">
                <h3 className="text-xl font-serif text-foreground uppercase tracking-widest border-b border-stone/20 pb-4">Introduction</h3>
                <p>
                  At SIORA, we respect your privacy and are committed to protecting the personal data you share with us. This policy outlines how we handle information collected through our digital presence and professional engagements.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-serif text-foreground uppercase tracking-widest border-b border-stone/20 pb-4">Information Collection</h3>
                <p>
                  We collect information that you provide directly to us, such as when you fill out a contact form, request a consultation, or engage with our services. This may include your name, email address, phone number, and project details.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-serif text-foreground uppercase tracking-widest border-b border-stone/20 pb-4">Data Usage</h3>
                <p>
                  The information we collect is used solely to provide and improve our architectural and design services, communicate with you regarding your projects, and send occasional studio updates if you have opted in.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-serif text-foreground uppercase tracking-widest border-b border-stone/20 pb-4">Data Security</h3>
                <p>
                  We implement industry-standard security measures to maintain the safety of your personal information. We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-serif text-foreground uppercase tracking-widest border-b border-stone/20 pb-4">Contact</h3>
                <p>
                  If you have any questions regarding this privacy policy, you may contact us at contact@siora.design.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
