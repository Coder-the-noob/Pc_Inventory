import { HeroSection, MainSections, PromotionsSlider } from "./components/landing";

function LandingPage({ isDark, onAddToCart, addingId }) {
  return (
    <div
      className={`min-h-screen scroll-smooth transition-colors ${
        isDark ? "bg-slate-950 text-slate-100" : "bg-slate-100 text-slate-900"
      }`}
    >
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className={`absolute left-[-10%] top-[-5%] h-80 w-80 rounded-full blur-3xl ${isDark ? "bg-cyan-500/20" : "bg-cyan-400/20"}`} />
        <div className={`absolute right-[-12%] top-[10%] h-96 w-96 rounded-full blur-3xl ${isDark ? "bg-purple-500/20" : "bg-violet-400/20"}`} />
        <div className={`absolute bottom-[-10%] left-[35%] h-96 w-96 rounded-full blur-3xl ${isDark ? "bg-emerald-500/10" : "bg-emerald-300/20"}`} />
      </div>

      <HeroSection isDark={isDark} />
      <PromotionsSlider isDark={isDark} />
      <MainSections onAddToCart={onAddToCart} isDark={isDark} addingId={addingId} />
    </div>
  );
}

export default LandingPage;
