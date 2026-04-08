import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Cpu, Bot, Headset, ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { lightCard, glassCard } from "./shared";

const slides = [
  {
    icon: Cpu,
    title: "Weekend Build Discounts",
    description: "Extra savings on CPUs, GPUs, and cases when you complete a guided build this weekend.",
    highlight: "Up to 15% off select components",
    ctaLabel: "Browse component deals",
    ctaHref: "/products",
  },
  {
    icon: Bot,
    title: "AI Build Advice",
    description: "Not sure where to start? Let the AI assistant propose 3 balanced builds for your budget.",
    highlight: "Gaming, creator, and office presets",
    ctaLabel: "Ask the AI assistant",
    ctaHref: "/ai-assistant",
  },
  {
    icon: Headset,
    title: "Priority Consultation Slots",
    description: "Reserve priority time with our expert agents for high-end or workstation builds.",
    highlight: "Token-based booking, limited slots daily",
    ctaLabel: "Book expert consultation",
    ctaHref: "/expert-consultation",
  },
  {
    icon: Sparkles,
    title: "Inventory-Aware Suggestions",
    description: "Every recommended part knows about real-time stock so you avoid dead links or delays.",
    highlight: "Built on live inventory sync",
    ctaLabel: "Start a guided build",
    ctaHref: "/build-pc",
  },
];

const slideVariants = {
  enter: { opacity: 0, x: 40 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -40 },
};

function PromotionsSlider({ isDark = true }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5200);
    return () => clearInterval(id);
  }, []);

  const goNext = () => setIndex((prev) => (prev + 1) % slides.length);
  const goPrev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const current = slides[index];
  const CardTone = isDark ? glassCard : lightCard;

  return (
    <section className="mx-auto mt-3 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className={`flex items-center justify-between gap-4 rounded-2xl border px-4 py-3 text-sm sm:px-5 sm:py-4 ${isDark ? "border-cyan-400/20 bg-cyan-950/40" : "border-cyan-100 bg-cyan-50"}`}>
        <div className="flex items-center gap-3">
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 text-white">
            <Sparkles className="h-4 w-4" />
          </div>
          <div className="hidden text-xs font-medium sm:block">
            Smart promotions & build advice tailored for PC Builder Pro customers.
          </div>
        </div>
        <div className="hidden items-center gap-2 text-xs font-medium sm:flex">
          <span className={isDark ? "text-cyan-200" : "text-cyan-700"}>Auto-rotating tips</span>
          <span className="text-slate-500">•</span>
          <span className={isDark ? "text-slate-300" : "text-slate-600"}>Slide {index + 1} of {slides.length}</span>
        </div>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)]">
        <div className={CardTone + " p-5 sm:p-6"}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current.title}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
                  <current.icon className="h-4 w-4" />
                </div>
                <h3 className={`text-sm font-semibold sm:text-base ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                  {current.title}
                </h3>
              </div>
              <p className={`mt-3 text-xs sm:text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                {current.description}
              </p>
              <p className={`mt-3 text-xs font-semibold sm:text-sm ${isDark ? "text-cyan-300" : "text-cyan-700"}`}>
                {current.highlight}
              </p>
              {current.ctaHref && current.ctaLabel && (
                <div className="mt-4">
                  <Link
                    to={current.ctaHref}
                    className={`inline-flex h-9 items-center justify-center rounded-xl px-3 text-xs font-semibold sm:h-10 sm:px-4 sm:text-sm ${
                      isDark
                        ? "bg-cyan-500/20 text-cyan-200 hover:bg-cyan-500/30"
                        : "bg-cyan-600 text-white hover:bg-cyan-700"
                    }`}
                  >
                    {current.ctaLabel}
                  </Link>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-2">
          <button
            type="button"
            onClick={goPrev}
            className={`inline-flex h-8 w-8 items-center justify-center rounded-full text-xs ${
              isDark ? "bg-slate-900/80 text-slate-200" : "bg-white text-slate-700 shadow-sm border border-slate-200"
            }`}
            aria-label="Previous promotion"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
          </button>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index
                  ? isDark
                    ? "w-6 bg-cyan-300"
                    : "w-6 bg-cyan-600"
                  : isDark
                    ? "w-2 bg-slate-600"
                    : "w-2 bg-slate-300"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
          <button
            type="button"
            onClick={goNext}
            className={`inline-flex h-8 w-8 items-center justify-center rounded-full text-xs ${
              isDark ? "bg-slate-900/80 text-slate-200" : "bg-white text-slate-700 shadow-sm border border-slate-200"
            }`}
            aria-label="Next promotion"
          >
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default PromotionsSlider;
