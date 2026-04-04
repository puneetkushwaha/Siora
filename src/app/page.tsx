import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import ProjectHighlights from "@/components/ProjectHighlights";
import FoundersNote from "@/components/FoundersNote";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <ProjectHighlights />
      <FoundersNote />
      <ContactForm />
      <Footer />
    </main>
  );
}
