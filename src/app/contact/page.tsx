import { Mail, Phone, MapPin, ArrowRight, Send, CheckCircle, AlertCircle, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

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

      {/* Main Content Grid - Maximum Utility */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-start">
              
              {/* Left Column (40%): Identity & Channels */}
              <div className="lg:col-span-4 space-y-16">
                
                {/* Communication Section */}
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="space-y-8">
                  <div className="flex items-center gap-4">
                    <span className="h-[1px] w-8 bg-accent" />
                    <span className="text-[10px] tracking-[0.4em] font-bold text-accent uppercase font-sans">Channels</span>
                  </div>
                  
                  <div className="space-y-8">
                    <div className="group">
                      <span className="text-[10px] tracking-widest text-foreground/40 font-bold uppercase block mb-3 font-sans">Studio Email</span>
                      <a href="mailto:contact@siora.design" className="text-xl md:text-2xl font-light hover:text-accent transition-colors duration-500">
                        contact@siora.design
                      </a>
                    </div>
                    <div className="group">
                      <span className="text-[10px] tracking-widest text-foreground/40 font-bold uppercase block mb-3 font-sans">Direct Line</span>
                      <a href="tel:+917380663685" className="text-xl md:text-2xl font-light hover:text-accent transition-colors duration-500">
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
                    <address className="text-2xl font-serif text-foreground not-italic leading-tight">
                      Unit 804B, Cyber Heights, <br />
                      Lucknow, UP 226010
                    </address>
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=Unit+No.804B%2C+8th+floor%2C+Levana+Cyber+Heights%2C+Vibhuti+Khand%2C+Gomti+Nagar%2C+Lucknow%2C+Uttar+Pradesh+226010"
                      target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-4 text-[10px] tracking-[0.4em] font-bold text-accent uppercase group font-sans"
                    >
                      Locate on Maps <ArrowRight size={12} className="group-hover:translate-x-2 transition-transform duration-500" />
                    </a>
                  </div>
                </motion.div>

                {/* Socials Section */}
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="space-y-8">
                  <div className="flex items-center gap-4">
                    <span className="h-[1px] w-8 bg-accent" />
                    <span className="text-[10px] tracking-[0.4em] font-bold text-accent uppercase font-sans">Socials</span>
                  </div>
                  <div className="flex gap-8">
                    {['Instagram', 'LinkedIn', 'Facebook'].map(social => (
                      <a key={social} href="#" className="w-10 h-10 rounded-full border border-stone/30 flex items-center justify-center text-[10px] font-serif hover:bg-accent hover:border-accent hover:text-white transition-all duration-500">
                        {social.charAt(0)}
                      </a>
                    ))}
                  </div>
                </motion.div>

              </div>

              {/* Right Column (60%): The Functional Core (Inquiry Form) */}
              <div className="lg:col-span-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-stone/5 border border-stone/20 p-8 md:p-12"
                >
                  <div className="mb-12">
                    <h3 className="text-3xl font-serif text-foreground uppercase tracking-tight mb-4">Start an Inquiry</h3>
                    <p className="text-foreground/40 text-xs font-light uppercase tracking-widest font-sans">Tell us about your architectural vision</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-2">
                        <label className="text-[9px] tracking-[0.2em] uppercase font-bold text-foreground/40 font-sans">Full Name</label>
                        <input required type="text" value={formState.name} className="w-full bg-transparent border-b border-stone/30 py-3 text-lg focus:outline-none focus:border-accent transition-colors font-light" placeholder="Rahul Sharma" onChange={e => setFormState({...formState, name: e.target.value})} />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] tracking-[0.2em] uppercase font-bold text-foreground/40 font-sans">Email</label>
                        <input required type="email" value={formState.email} className="w-full bg-transparent border-b border-stone/30 py-3 text-lg focus:outline-none focus:border-accent transition-colors font-light" placeholder="rahul@example.com" onChange={e => setFormState({...formState, email: e.target.value})} />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[9px] tracking-[0.2em] uppercase font-bold text-foreground/40 font-sans">Select Service</label>
                      <select value={formState.service} className="w-full bg-transparent border-b border-stone/30 py-3 text-lg focus:outline-none focus:border-accent transition-colors font-light appearance-none cursor-pointer" onChange={e => setFormState({...formState, service: e.target.value})}>
                        <option className="bg-background">Architecture Planning</option>
                        <option className="bg-background">Interior Curation</option>
                        <option className="bg-background">Turnkey Projects</option>
                        <option className="bg-background">Design Consultation</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[9px] tracking-[0.2em] uppercase font-bold text-foreground/40 font-sans">Message</label>
                      <textarea required rows={4} value={formState.message} className="w-full bg-transparent border-b border-stone/30 py-3 text-lg focus:outline-none focus:border-accent transition-colors font-light resize-none placeholder:italic" placeholder="Briefly describe your project..." onChange={e => setFormState({...formState, message: e.target.value})} />
                    </div>

                    <div className="pt-4">
                      <button 
                        type="submit" 
                        disabled={status === 'submitting' || status === 'success'}
                        className="group bg-foreground text-background px-12 py-5 text-[10px] tracking-[0.4em] uppercase font-bold hover:bg-accent hover:text-white transition-all duration-700 flex items-center gap-6 disabled:bg-stone disabled:cursor-not-allowed"
                      >
                        {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Sent Success' : <>Send Inquiry <Send size={12} strokeWidth={1} className="group-hover:translate-x-2 transition-transform" /></>}
                      </button>

                      {status === 'error' && <p className="text-red-500 text-[9px] tracking-widest uppercase mt-4">{errorMessage}</p>}
                      {status === 'success' && <p className="text-accent text-[9px] tracking-widest uppercase mt-4">Inquiry sent successfully.</p>}
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

      <Footer />
    </main>
  );
}
