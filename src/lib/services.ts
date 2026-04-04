export interface ServiceDetails {
  slug: string;
  title: string;
  subtitle: string;
  description: string[];
  image: string;
  capabilities: {
    title: string;
    items: string[];
  }[];
  process: {
    step: string;
    title: string;
    desc: string;
  }[];
}

export const serviceDetails: Record<string, ServiceDetails> = {
  architecture: {
    slug: "architecture",
    title: "Architecture & Spatial Planning",
    subtitle: "Context-driven solutions focused on clarity, form, and longevity.",
    image: "/projects/p6.png",
    description: [
      "Architecture at SIORA is the art of shaping human experience. We approach every project as a unique response to its environment, focusing on clarity of form, structural honesty, and an enduring presence that transcends fleeting trends.",
      "Our spatial planning ensures that every square foot is optimized for both beauty and utility. We delve deep into site analysis, sun orientation, and natural ventilation to create a seamless flow between the internal sanctuaries and the meticulously crafted structural shell.",
      "Whether it’s a bespoke residence or a high-performance corporate landmark, our goal is to build narratives into the very foundations, creating spaces that feel as though they belong to the land they stand upon."
    ],
    capabilities: [
      {
        title: "Residential Masterpieces",
        items: ["Custom Luxury Villas", "Modernist Residences", "Heritage Renovations", "Sustainable Housing"]
      },
      {
        title: "Commercial & Corporate",
        items: ["Executive Offices", "Boutique Retail", "Hospitality Spaces", "Institutional Design"]
      }
    ],
    process: [
      { step: "01", title: "Conceptualization", desc: "Understanding the site, context, and client vision to form a strong core idea." },
      { step: "02", title: "Refined Planning", desc: "Iterating on spatial flow and structural integrity with meticulous detail." },
      { step: "03", title: "Technical Precision", desc: "Finalizing documentation and material palettes for a flawless build." }
    ]
  },
  interiors: {
    slug: "interiors",
    title: "Interior Design",
    subtitle: "Thoughtful interiors balancing materials, light, and spatial harmony.",
    image: "/projects/p1.png",
    description: [
      "Interiors at SIORA are designed to be an intimate extension of human personality. We prioritize the silent interplay between light, shadow, and texture to create refined sanctuaries of silence and peace.",
      "Every element, from a bespoke light installation to a hand-picked material palette, is curated to harmonize perfectly with the architectural shell. We focus on sensory design—how a surface feels, how light falls at sunset, and how sound travels through a room.",
      "Our curation process blends artisanal craftsmanship with modern ergonomics, resulting in spaces that are as functional as they are poetic."
    ],
    capabilities: [
      {
        title: "Curation & Styling",
        items: ["Furniture Selection", "Art Consultancy", "Soft Furnishings", "Bespoke Decor"]
      },
      {
        title: "Spatial Atmosphere",
        items: ["Lighting Design", "Material Palette Library", "Acoustic Planning", "Bespoke Joinery"]
      }
    ],
    process: [
      { step: "01", title: "Sensory Mapping", desc: "Defining the mood, textures, and emotional tone of the space." },
      { step: "02", title: "Curated Selection", desc: "Sourcing materials and pieces that harmonize with the architectural shell." },
      { step: "03", title: "Installation", desc: "Overseeing the placement and final finish with artisanal precision." }
    ]
  },
  consultation: {
    slug: "consultation",
    title: "Integrated Allied Services",
    subtitle: "Seamless execution from design to delivery with complete accountability.",
    image: "/projects/p5.png",
    description: [
      "Our integrated approach eliminates the friction between creative vision and project execution. We act as a single, accountable partner for your entire journey from conceptualization to key-handover.",
      "By blending design consultation with technical coordination, we ensure that the final result is a mirror image of the initial intent. We bridge the gap between imagination and engineering.",
      "Our allied services oversee the full complexity of modern builds—including structural design, MEP solutions, and landscape integration—with uncompromising quality guarantees."
    ],
    capabilities: [
      {
        title: "Strategic Consulting",
        items: ["Feasibility Studies", "Project Management", "Technical Audits", "Budget Control"]
      },
      {
        title: "Allied Execution",
        items: ["Structural Design", "MEP Solutions", "Landscape Integration", "Quality Control"]
      }
    ],
    process: [
      { step: "01", title: "Strategic Audit", desc: "Analyzing project requirements, budgets, and technical feasibility." },
      { step: "02", title: "Design Coordination", desc: "Aligning all allied services under a singular creative vision." },
      { step: "03", title: "Project Delivery", desc: "Execution with meticulous oversight and quality guarantees." }
    ]
  }
};
