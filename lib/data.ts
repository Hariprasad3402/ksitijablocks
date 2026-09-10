import {
  Building2,
  Coins,
  Landmark,
  Leaf,
  Recycle,
  ShieldCheck,
  Sparkles,
  Thermometer,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Benefits", href: "#benefits" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export type HeroFeature = {
  icon: LucideIcon;
  label: string;
};

export const heroFeatures: HeroFeature[] = [
  { icon: Leaf, label: "Eco-Friendly" },
  { icon: Building2, label: "Durable" },
  { icon: Coins, label: "Cost Effective" },
  { icon: Recycle, label: "Zero Waste" },
];

export type ProductCategory = {
  name: string;
  dimensions: string[];
  shape: "brick" | "long-brick" | "cube" | "u-core" | "slab" | "plank";
};

export const productCategories: ProductCategory[] = [
  {
    name: "Exterior Wall Blocks",
    dimensions: ["9×12×4 in", "8×12×4 in"],
    shape: "brick",
  },
  {
    name: "Interior Wall Blocks",
    dimensions: ["6×12×4 in", "4.5×12×4 in"],
    shape: "long-brick",
  },
  {
    name: "Filler Blocks for Slabs",
    dimensions: ["9×9×3 in"],
    shape: "cube",
  },
  {
    name: "U Core Blocks for Lintels",
    dimensions: ["4×12×9 in"],
    shape: "u-core",
  },
  {
    name: "Blocks for Pathways",
    dimensions: ["8×12×2 in"],
    shape: "slab",
  },
  {
    name: "Blocks for Cladding",
    dimensions: ["12×4×2 in"],
    shape: "plank",
  },
];

export type Benefit = {
  icon: LucideIcon;
  label: string;
};

export const benefits: Benefit[] = [
  { icon: Leaf, label: "Nature Friendly" },
  { icon: Coins, label: "Affordable Solution" },
  { icon: Sparkles, label: "Aesthetic" },
  { icon: ShieldCheck, label: "Strong & Durable" },
  { icon: Recycle, label: "Zero Waste" },
  { icon: Thermometer, label: "Eco-Thermal" },
  { icon: Landmark, label: "Traditional" },
  { icon: Wrench, label: "Customized Design" },
];

export type GalleryImage = {
  src: string | null;
  alt: string;
};

export const galleryImages: GalleryImage[] = [
  { src: "/images/hero-image.jpeg", alt: "Modern CSEB home with balcony and garden" },
  { src: "/images/Gallery1.png", alt: "Traditional tiled-roof CSEB bungalow" },
  { src: null, alt: "Close-up of compressed stabilized earth block texture" },
  { src: "/images/img4.png", alt: "Living room interior with exposed CSEB walls" },
  { src: "/images/img1.png", alt: "Contemporary CSEB villa exterior at dusk" },
  { src: "/images/img2.png", alt: "Two-storey CSEB home with landscaped courtyard" },
  { src: "/images/img5.png", alt: "Bedroom interior with CSEB brick walls" },
  { src: "/images/about.png", alt: "Covered CSEB walkway lined with potted plants" },
];

export type FooterStat = {
  icon: LucideIcon;
  value: string;
  label: string;
};

export const footerStats: FooterStat[] = [
  { icon: Building2, value: "100%", label: "Eco-Friendly" },
  { icon: Leaf, value: "4+", label: "Block Types" },
  { icon: Users, value: "50+", label: "Happy Clients" },
];
