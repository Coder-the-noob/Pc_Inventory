import {
  Cpu,
  Bot,
  Headset,
  MessageSquare,
  Boxes,
  LayoutDashboard,
  ShieldCheck,
  Sparkles,
  Clock3,
  Ticket,
  Users,
  ShoppingCart,
  BarChart3,
  MonitorSmartphone,
  BrainCircuit,
  Gamepad2,
  Briefcase,
  Video,
} from "lucide-react";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Build PC", href: "/build-pc" },
  { label: "AI Assistant", href: "/ai-assistant" },
  { label: "Expert Consultation", href: "/expert-consultation" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const trustBadges = [
  { icon: ShieldCheck, label: "Smart Compatibility Check" },
  { icon: BrainCircuit, label: "AI Build Recommendations" },
  { icon: Headset, label: "Live Expert Support" },
  { icon: ShoppingCart, label: "Secure Orders" },
  { icon: Boxes, label: "Real-Time Inventory" },
  { icon: Clock3, label: "Fast Consultation Booking" },
];

export const features = [
  {
    icon: Cpu,
    title: "Custom PC Builder",
    description:
      "Build your PC part by part, choose by budget and use-case, then save and compare builds with confidence.",
  },
  {
    icon: Bot,
    title: "AI Recommendation System",
    description:
      "Get smart build suggestions based on budget and usage, with fallback support whenever human agents are unavailable.",
  },
  {
    icon: Ticket,
    title: "Expert Consultation / Token System",
    description:
      "Reserve guided sessions with real experts using structured token and time-slot booking for reliable support flow.",
  },
  {
    icon: MessageSquare,
    title: "Live Chat Support",
    description:
      "Chat one-on-one with agents in real-time, review consultation history, and escalate smoothly from AI to human support.",
  },
  {
    icon: Boxes,
    title: "Inventory and Retail Management",
    description:
      "Browse component catalogs, check stock in real time, and manage product listings with streamlined order handling.",
  },
  {
    icon: LayoutDashboard,
    title: "Role-Based Dashboards",
    description:
      "Dedicated Admin, Agent, and Customer dashboards for operations, consultations, builds, support, and order management.",
  },
];

export const steps = [
  "Browse products or choose your budget",
  "Build a custom PC or request suggestions",
  "Get guidance from AI or book an expert consultation",
  "Chat with an agent at your booked time slot",
  "Finalize build and place order",
  "Track orders and manage your account",
];

export const previews = [
  "PC Builder Interface",
  "AI Recommendation Panel",
  "Live Chat Window",
  "Agent Dashboard",
  "Admin Inventory Dashboard",
];

export const products = [
  { id: 1, name: "Ryzen 7 7800X3D", category: "CPU", price: 389, stock: "In Stock", image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=900&auto=format&fit=crop&q=80" },
  { id: 2, name: "Intel Core i7-14700K", category: "CPU", price: 419, stock: "In Stock", image: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=900&auto=format&fit=crop&q=80" },
  { id: 3, name: "NVIDIA RTX 4070 Super", category: "GPU", price: 629, stock: "Low Stock", image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=900&auto=format&fit=crop&q=80" },
  { id: 4, name: "AMD Radeon RX 7800 XT", category: "GPU", price: 539, stock: "In Stock", image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=900&auto=format&fit=crop&q=80" },
  { id: 5, name: "MSI B650 Tomahawk WiFi", category: "Motherboard", price: 239, stock: "In Stock", image: "https://images.unsplash.com/photo-1562976540-1502c2145186?w=900&auto=format&fit=crop&q=80" },
  { id: 6, name: "ASUS Z790 A Gaming WiFi", category: "Motherboard", price: 299, stock: "In Stock", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&auto=format&fit=crop&q=80" },
  { id: 7, name: "Corsair Vengeance 32GB DDR5", category: "RAM", price: 129, stock: "In Stock", image: "https://images.unsplash.com/photo-1541029071515-84cc54f84dc5?w=900&auto=format&fit=crop&q=80" },
  { id: 8, name: "G.Skill Trident Z5 32GB", category: "RAM", price: 139, stock: "In Stock", image: "https://images.unsplash.com/photo-1647427060118-4911c9821b82?w=900&auto=format&fit=crop&q=80" },
  { id: 9, name: "Samsung 990 Pro 2TB", category: "Storage", price: 179, stock: "In Stock", image: "https://images.unsplash.com/photo-1591799265444-d66432b91588?w=900&auto=format&fit=crop&q=80" },
  { id: 10, name: "WD Black SN850X 1TB", category: "Storage", price: 109, stock: "In Stock", image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=900&auto=format&fit=crop&q=80" },
  { id: 11, name: "Corsair RM850x PSU", category: "PSU", price: 149, stock: "Low Stock", image: "https://images.unsplash.com/photo-1624705002806-5d72df19c3c4?w=900&auto=format&fit=crop&q=80" },
  { id: 12, name: "Lian Li Lancool 216", category: "Case", price: 109, stock: "In Stock", image: "https://images.unsplash.com/photo-1587202372616-b43abea06c2a?w=900&auto=format&fit=crop&q=80" },
];

export const reasons = [
  {
    icon: Sparkles,
    title: "Beyond E-Commerce",
    text: "A guided building platform designed for outcomes, not just checkout.",
  },
  {
    icon: Users,
    title: "Human + AI Hybrid",
    text: "Balance automation speed with expert consultation when decisions matter.",
  },
  {
    icon: Boxes,
    title: "Inventory-Aware",
    text: "Recommendations align with actual stock and real-world availability.",
  },
  {
    icon: BarChart3,
    title: "Better Decisions",
    text: "Structured guidance helps beginners and enthusiasts build with clarity.",
  },
];

export const testimonials = [
  {
    name: "Sarah K.",
    role: "First-Time Builder",
    text: "The AI recommendations made everything simple. I built a balanced setup without feeling overwhelmed.",
  },
  {
    name: "Arif M.",
    role: "Competitive Gamer",
    text: "The expert consultation was incredible. My final build delivered exactly the performance I wanted.",
  },
  {
    name: "Nadia R.",
    role: "Content Creator",
    text: "From custom configuration to order placement, the whole process felt premium and stress-free.",
  },
];

export const stats = [
  { value: "10K+", label: "Components Listed" },
  { value: "2K+", label: "Custom Builds Created" },
  { value: "500+", label: "Expert Consultations" },
  { value: "95%", label: "Satisfaction Rate" },
];

export const aiProfiles = [Gamepad2, Briefcase, Video, MonitorSmartphone];

export const faqItems = [
  {
    q: "Is PC Builder Pro only an online parts shop?",
    a: "No. It is a guided PC building platform with AI recommendations, compatibility checks, expert consultation, and managed ordering.",
  },
  {
    q: "How does the expert consultation token system work?",
    a: "Customers request help, receive a token, pick an available slot, and connect with an agent. Sessions are structured so support stays organized.",
  },
  {
    q: "Can I still get support when agents are offline?",
    a: "Yes. The AI assistant continues guiding your build and can escalate to a consultation ticket when human agents come online.",
  },
  {
    q: "Are recommendations aligned with real stock?",
    a: "Yes. Suggestions are inventory-aware, so recommended parts reflect current availability whenever possible.",
  },
];
