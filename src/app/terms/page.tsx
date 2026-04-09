"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPage() {
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
            <span className="text-accent text-[12px] tracking-[0.8em] font-bold mb-4 block uppercase">AGREEMENT</span>
            <h1 className="text-5xl md:text-7xl font-serif text-foreground leading-[1.1] tracking-tighter mb-8 uppercase">
              Terms & <br /> <span className="italic font-light text-outline">Conditions</span>
            </h1>
            
            <div className="space-y-8 text-foreground/70 font-light leading-relaxed text-lg pb-8">


              <div className="space-y-6">
                <h3 className="text-xl font-serif text-foreground uppercase tracking-widest border-b border-stone/20 pb-4">Terms of Use</h3>
                <p>
                  By accessing the SIORA website and utilizing our services, you agree to comply with and be bound by the following terms and conditions. These terms govern the relationship between you and SIORA regarding your use of this site.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-serif text-foreground uppercase tracking-widest border-b border-stone/20 pb-4">Intellectual Property</h3>
                <p>
                  All architectural designs, sketches, 3D renders, and content displayed on this website are the intellectual property of SIORA INFRA & DESIGN, unless otherwise stated. Unauthorized use, reproduction, or distribution of these assets is strictly prohibited.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-serif text-foreground uppercase tracking-widest border-b border-stone/20 pb-4">Service Engagement</h3>
                <p>
                  Any professional engagement or consultation is subject to a separate definitive agreement. The contents of this website are for informational purposes into our studio's philosophy and expertise and do not constitute a binding contract for specific project delivery.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-serif text-foreground uppercase tracking-widest border-b border-stone/20 pb-4">Limitation of Liability</h3>
                <p>
                  SIORA shall not be liable for any direct, indirect, or consequential damages resulting from the use or inability to use this website or the information contained herein.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-serif text-foreground uppercase tracking-widest border-b border-stone/20 pb-4">Governing Law</h3>
                <p>
                  These terms are governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Lucknow, Uttar Pradesh.
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
