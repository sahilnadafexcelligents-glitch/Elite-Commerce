export interface Mockup {
  id: string;
  title: string;
  brand: string;
  tag: string;
  description: string;
  features: string[];
  img: string;
  color: string;
}

export const mockups: Mockup[] = [
  { 
    id: "chronos",
    title: "Minimalist Watch Store", 
    brand: "Chronos", 
    tag: "Luxury",
    description: "A high-end horology marketplace designed for premium conversions and timeless elegance.",
    features: ["Retina Ready", "E-commerce Integration", "Premium Animations"],
    img: "bg-gradient-to-br from-gray-900 to-gray-800",
    color: "#3B82F6"
  },
  { 
    id: "sonic",
    title: "High-End Audio Lab", 
    brand: "Sonic", 
    tag: "Tech",
    description: "Immersive audio experience platform for audiophiles and professional sound engineers.",
    features: ["Audio Visualizer", "Interactive Product 3D", "Lightning Fast"],
    img: "bg-gradient-to-br from-blue-900 to-indigo-900",
    color: "#3B82F6"
  },
  { 
    id: "pure",
    title: "Organic Skincare", 
    brand: "Pure", 
    tag: "Lifestyle",
    description: "Clean, organic, and refreshing interface for modern beauty and wellness brands.",
    features: ["Natural Palette", "Mobile First", "SEO Optimized"],
    img: "bg-gradient-to-br from-emerald-900 to-teal-900",
    color: "#10B981"
  },
  { 
    id: "haus",
    title: "Modern Furniture", 
    brand: "Haus", 
    tag: "Home",
    description: "Sophisticated interior design showcase with a focus on spatial awareness and modular layouts.",
    features: ["AR Preview Ready", "Configurator Support", "Smooth Scrolling"],
    img: "bg-gradient-to-br from-stone-900 to-orange-900",
    color: "#F59E0B"
  },
];
