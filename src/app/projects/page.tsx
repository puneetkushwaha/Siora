import ProjectHighlights from "@/components/ProjectHighlights";
import Footer from "@/components/Footer";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-40 bg-white">
      <div className="container mx-auto px-6 mb-32">
        <div className="max-w-4xl">
          <span className="text-accent text-[10px] tracking-[0.6em] uppercase mb-8 block font-bold decoration-accent decoration-1 underline-offset-[12px] underline">
            Our Portfolio
          </span>
          <h1 className="text-6xl md:text-9xl font-serif text-zinc-900 leading-[0.9] tracking-tighter">
            Architectural <br />
            <span className="italic font-light opacity-30 text-accent">Collections</span>
          </h1>
        </div>
      </div>
      
      <div className="bg-[#FAFAFA] py-32">
        <ProjectHighlights />
      </div>
      
      <div className="py-40 text-center bg-white border-y border-black/5">
        <p className="text-zinc-400 font-bold tracking-[0.5em] uppercase text-xs">
          More projects currently in development
        </p>
      </div>
      
      <Footer />
    </main>
  );
}

