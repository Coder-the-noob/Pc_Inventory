import { motion } from "framer-motion";
import { Sparkles, CheckCircle2 } from "lucide-react";
import { fadeUp, glassCard, uiSize, uiTone } from "./shared";

function HeroSection({ isDark = true }) {
  return (
    <section
      id="home"
      className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-14 pt-14 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-8 lg:pt-20"
    >
      <motion.div variants={fadeUp} initial="hidden" animate="show">
        <div
          className={`mb-4 inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${
            isDark
              ? "border-emerald-300/30 bg-emerald-400/10 text-emerald-300"
              : "border-emerald-200 bg-emerald-50 text-emerald-700"
          }`}
        >
          Limited Offer: Free build consultation for first 500 users this month.
        </div>
        <p
          className={`mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs uppercase tracking-wider ${
            isDark
              ? "border-cyan-300/25 bg-cyan-400/10 text-cyan-300"
              : "border-cyan-200 bg-cyan-50 text-cyan-700"
          }`}
        >
          <Sparkles className="h-3.5 w-3.5" /> Smart PC Building Platform
        </p>
        <h1 className={`text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-[3.25rem] ${isDark ? "text-slate-100" : "text-slate-900"}`}>
          Build Your Perfect PC - Smarter, Faster, Guided
        </h1>
        <p className={`mt-5 max-w-xl text-[1.02rem] leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
          Design your ideal PC with AI-powered recommendations, expert consultation,
          compatibility checks, and seamless ordering.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#build-pc"
            className={`${uiSize.buttonLg} px-5 font-semibold transition hover:scale-[1.02] ${uiTone.primary(isDark)}`}
          >
            Start Building
          </a>
          <a
            href="#ai-assistant"
            className={`inline-flex h-11 items-center rounded-xl border px-5 text-sm font-medium transition ${
              isDark
                ? "border-cyan-300/40 bg-cyan-500/10 text-cyan-200 hover:bg-cyan-500/20"
                : "border-cyan-200 bg-cyan-50 text-cyan-700 hover:bg-cyan-100"
            }`}
          >
            Ask AI
          </a>
          <a
            href="#expert-consultation"
            className={`inline-flex h-11 items-center rounded-xl border px-5 text-sm font-medium transition ${
              isDark
                ? "border-violet-300/40 bg-violet-500/10 text-violet-200 hover:bg-violet-500/20"
                : "border-violet-200 bg-violet-50 text-violet-700 hover:bg-violet-100"
            }`}
          >
            Talk to Expert
          </a>
        </div>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.15 }}
        className={`relative p-4 sm:p-6 ${glassCard}`}
      >
        <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
          <div className="mb-5 flex items-center justify-between">
            <h3 className="text-sm font-medium text-slate-300">Futuristic Builder Dashboard</h3>
            <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs text-emerald-300">
              Live
            </span>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-2 rounded-xl bg-slate-800/80 p-4">
              <p className="text-xs text-slate-400">Build Score</p>
              <p className="mt-2 text-3xl font-bold text-cyan-300">92/100</p>
              <div className="mt-3 h-2 rounded-full bg-slate-700">
                <div className="h-2 w-[92%] rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" />
              </div>
            </div>
            <div className="rounded-xl bg-slate-800/80 p-4">
              <p className="text-xs text-slate-400">Budget</p>
              <p className="mt-2 text-xl font-semibold">$1,450</p>
            </div>
            <div className="col-span-3 rounded-xl bg-slate-800/80 p-4">
              <p className="text-xs text-slate-400">Compatibility Analysis</p>
              <div className="mt-2 flex items-center gap-2 text-emerald-300">
                <CheckCircle2 className="h-4 w-4" /> Passed across all selected components
              </div>
            </div>
          </div>
        </div>

        <motion.div whileHover={{ y: -3 }} className={`absolute -left-4 top-8 hidden w-44 p-3 md:block ${glassCard}`}>
          <p className="text-xs text-slate-300">Budget Recommendation</p>
          <p className="mt-1 text-sm text-cyan-300">$1200 - Balanced Build</p>
        </motion.div>
        <motion.div whileHover={{ y: -3 }} className={`absolute -right-4 top-24 hidden w-44 p-3 md:block ${glassCard}`}>
          <p className="text-xs text-slate-300">Compatibility Check</p>
          <p className="mt-1 text-sm text-emerald-300">All systems aligned</p>
        </motion.div>
        <motion.div whileHover={{ y: -3 }} className={`absolute -bottom-5 left-12 hidden w-44 p-3 md:block ${glassCard}`}>
          <p className="text-xs text-slate-300">Live Agent Support</p>
          <p className="mt-1 text-sm text-violet-300">2 experts online</p>
        </motion.div>
        <motion.div whileHover={{ y: -3 }} className={`absolute -bottom-8 right-6 hidden w-44 p-3 md:block ${glassCard}`}>
          <p className="text-xs text-slate-300">Real-time Inventory</p>
          <p className="mt-1 text-sm text-cyan-300">GPU stock updated</p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
