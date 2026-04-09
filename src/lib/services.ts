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
    title: "Interior Curation",
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
  "turnkey-build": {
    slug: "turnkey-build",
    title: "Turnkey Build & Execution",
    subtitle: "Complete design-to-delivery solutions with single-point accountability.",
    image: "/projects/p4.png",
    description: [
      "Our Turnkey Build service offers a stress-free transition from blueprints to reality. We take full responsibility for the construction process, ensuring that the creative vision is never compromised by technical constraints.",
      "By integrating design and execution under one roof, we eliminate the common friction between architects and contractors. This results in faster delivery times, tighter budget control, and an uncompromising level of quality.",
      "We manage everything—from site preparation and structural works to finishing and fit-outs—holding ourselves to the highest standards of craftsmanship and professional ethics."
    ],
    capabilities: [
      {
        title: "End-to-End Execution",
        items: ["Site Management", "Structural Construction", "Civil Engineering", "Finishing Works"]
      },
      {
        title: "Logistics & Procurement",
        items: ["Vendor Coordination", "Material Sourcing", "Budget Management", "Timeline Optimization"]
      }
    ],
    process: [
      { step: "01", title: "Project Onboarding", desc: "Finalizing budgets, timelines, and technical requirements." },
      { step: "02", title: "Execution Phase", desc: "On-site construction managed with daily precision and quality audits." },
      { step: "03", title: "Handover", desc: "A seamless transition of the keys to your completed, ready-to-move-in space." }
    ]
  },
  consultation: {
    slug: "consultation",
    title: "Design Consultation",
    subtitle: "Strategic advice and technical expertise to guide your design journey.",
    image: "/projects/p5.png",
    description: [
      "Our consultation services are designed for those who seek professional guidance without the full scope of design-build. We offer strategic audits, feasibility studies, and technical expertise to ensure your project starts on the right path.",
      "We act as your technical partner, bridging the gap between imagination and engineering. Our expertise covers structural design, MEP solutions, and landscape integration.",
      "Whether you are evaluating a site or need a review of existing plans, our consultation ensures that every decision is backed by data, experience, and architectural intent."
    ],
    capabilities: [
      {
        title: "Strategic Consulting",
        items: ["Feasibility Studies", "Project Management", "Technical Audits", "Budget Control"]
      },
      {
        title: "Allied Services",
        items: ["Structural Design", "MEP Solutions", "Landscape Integration", "Quality Control"]
      }
    ],
    process: [
      { step: "01", title: "Strategic Audit", desc: "Analyzing project requirements, budgets, and technical feasibility." },
      { step: "02", title: "Expert Analysis", desc: "Providing data-driven reports and structural recommendations." },
      { step: "03", title: "Guidance", desc: "Handing over a strategic roadmap for your project's success." }
    ]
  }
};

