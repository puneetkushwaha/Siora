"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle, AlertCircle, ChevronDown } from "lucide-react";

const countryCodes = [
  { code: "+91", country: "IN" },
  { code: "+1", country: "US" },
  { code: "+44", country: "UK" },
  { code: "+971", country: "UAE" },
  { code: "+61", country: "AU" },
  { code: "+65", country: "SG" },
  { code: "+1", country: "CA" },
  { code: "+49", country: "DE" },
  { code: "+33", country: "FR" },
];

export default function ContactForm({ defaultService = "Architecture Planning" }: { defaultService?: string }) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+91",
    service: defaultService,
    message: "",
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState("");

  const validatePhone = (phone: string) => {
    return /^\d{10}$/.test(phone);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validatePhone(formState.phone)) {
      setStatus('error');
      setErrorMessage("Please enter a valid 10-digit phone number.");
      return;
    }

    setStatus('submitting');
    setErrorMessage("");

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formState,
          phone: `${formState.countryCode} ${formState.phone}`
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send inquiry');
      }

      setStatus('success');
      setFormState({ 
        name: "", 
        email: "", 
        phone: "", 
        countryCode: "+91", 
        service: "Interior Design", 
        message: "" 
      });
      
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="bg-background relative overflow-hidden py-20 md:py-32">
      
      {/* Background Outlined Text */}
      <div className="absolute bottom-0 left-0 pointer-events-none opacity-[0.03] select-none">
        <h2 className="text-[30vw] font-serif text-outline leading-none -translate-x-1/4">
          INQUIRE
        </h2>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Headline Column */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-10">
              <span className="text-accent text-[10px] tracking-[0.4em] font-bold">CONTACT</span>
              <span className="h-[1px] w-16 bg-stone" />
            </div>
            
            <h2 className="text-7xl md:text-9xl font-serif text-foreground leading-[0.92] tracking-tighter mb-12 uppercase">
              Design <br /> 
              Legacy
            </h2>
            
            <p className="text-foreground/60 text-lg tracking-wide leading-relaxed font-light max-w-sm">
              Let us translate your ideas <br />
              into a beautifully crafted <br />
              architectural reality.
            </p>
          </div>

          {/* Form Column - Framed Table Style */}
          <div className="lg:col-span-7">
            <div className="framed-print">
              <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-12">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="flex flex-col gap-4">
                    <label className="text-[9px] tracking-[0.2em] uppercase font-bold text-foreground/40">Your Name</label>
                    <input
                      required
                      type="text"
                      value={formState.name}
                      placeholder="Rahul Sharma"
                      disabled={status === 'submitting'}
                      className="w-full bg-transparent border-b border-stone py-4 text-lg text-foreground placeholder:text-stone focus:outline-none focus:border-accent transition-all duration-500 font-light disabled:opacity-50"
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    />
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    <label className="text-[9px] tracking-[0.2em] uppercase font-bold text-foreground/40">Email Address</label>
                    <input
                      required
                      type="email"
                      value={formState.email}
                      placeholder="studio@example.com"
                      disabled={status === 'submitting'}
                      className="w-full bg-transparent border-b border-stone py-4 text-lg text-foreground placeholder:text-stone focus:outline-none focus:border-accent transition-all duration-500 font-light disabled:opacity-50"
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                   {/* Phone Number Field */}
                   <div className="flex flex-col gap-4">
                    <label className="text-[9px] tracking-[0.2em] uppercase font-bold text-foreground/40">Phone Number</label>
                    <div className="flex gap-4 border-b border-stone focus-within:border-accent transition-all duration-500">
                      <div className="relative flex items-center">
                        <select
                          value={formState.countryCode}
                          disabled={status === 'submitting'}
                          onChange={(e) => setFormState({ ...formState, countryCode: e.target.value })}
                          className="bg-transparent py-4 pr-6 text-lg text-foreground focus:outline-none appearance-none font-light min-w-[70px] cursor-pointer"
                        >
                          {countryCodes.map((c) => (
                            <option key={`${c.country}-${c.code}`} value={c.code} className="bg-background text-foreground">
                              {c.code} ({c.country})
                            </option>
                          ))}
                        </select>
                        <ChevronDown size={10} className="absolute right-0 pointer-events-none opacity-40" />
                      </div>
                      <input
                        required
                        type="tel"
                        maxLength={10}
                        value={formState.phone}
                        placeholder="9876543210"
                        disabled={status === 'submitting'}
                        className="w-full bg-transparent py-4 text-lg text-foreground placeholder:text-stone focus:outline-none font-light disabled:opacity-50"
                        onChange={(e) => {
                          const val = e.target.value.replace(/\D/g, '').slice(0, 10);
                          setFormState({ ...formState, phone: val });
                        }}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <label className="text-[9px] tracking-[0.2em] uppercase font-bold text-foreground/40">Select Service</label>
                    <div className="relative flex items-center">
                      <select
                        value={formState.service}
                        disabled={status === 'submitting'}
                        className="w-full bg-transparent border-b border-stone py-4 text-lg text-foreground focus:outline-none focus:border-accent transition-all duration-500 appearance-none font-light disabled:opacity-50 cursor-pointer"
                        onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                      >
                        <option className="bg-background">Architecture Planning</option>
                        <option className="bg-background">Interior Curation</option>
                        <option className="bg-background">Turnkey Projects</option>
                      </select>
                      <ChevronDown size={10} className="absolute right-0 pointer-events-none opacity-40" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <label className="text-[9px] tracking-[0.2em] uppercase font-bold text-foreground/40">Brief Description</label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    placeholder="Describe your vision..."
                    disabled={status === 'submitting'}
                    className="w-full bg-transparent border-b border-stone py-4 text-lg text-foreground placeholder:text-stone focus:outline-none focus:border-accent transition-all duration-500 resize-none font-light disabled:opacity-50"
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  />
                </div>

                <div className="pt-6 relative">
                  <button
                    type="submit"
                    disabled={status === 'submitting' || status === 'success'}
                    className="group bg-foreground text-background w-full md:w-auto px-16 py-6 text-[10px] tracking-[0.4em] uppercase font-bold hover:bg-accent hover:text-white transition-all duration-700 flex items-center justify-center gap-8 disabled:bg-stone disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <span className="animate-pulse">Sending...</span>
                    ) : status === 'success' ? (
                      <span className="flex items-center gap-4">Sent <CheckCircle size={14} /></span>
                    ) : (
                      <>
                        Send Inquiry
                        <Send size={14} strokeWidth={1} className="group-hover:translate-x-2 transition-transform duration-700" />
                      </>
                    )}
                  </button>

                  <AnimatePresence>
                    {status === 'error' && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="absolute -bottom-12 left-0 text-red-500 text-[10px] tracking-widest uppercase flex items-center gap-2"
                      >
                        <AlertCircle size={12} /> {errorMessage}
                      </motion.div>
                    )}
                    
                    {status === 'success' && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="absolute -bottom-12 left-0 text-accent text-[10px] tracking-widest uppercase flex items-center gap-2"
                      >
                        <CheckCircle size={12} /> Inquiry sent successfully.
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}



