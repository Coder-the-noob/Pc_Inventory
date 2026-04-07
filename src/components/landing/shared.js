export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const glassCard =
  "rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_40px_rgba(34,211,238,0.08)]";

export const lightCard =
  "rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-xl shadow-[0_10px_30px_rgba(15,23,42,0.08)]";

export const uiSize = {
  iconButton: "flex h-10 w-10 items-center justify-center rounded-xl",
  buttonMd: "inline-flex h-10 items-center justify-center rounded-xl px-4 text-sm",
  buttonMdWide: "inline-flex h-10 items-center justify-center rounded-xl px-5 text-sm",
  buttonLg: "inline-flex h-11 items-center justify-center rounded-xl px-6 text-sm",
  chip: "h-10 rounded-xl border px-4 text-sm",
};

export const uiTone = {
  outline: (isDark) =>
    isDark
      ? "border-white/20 text-slate-200 hover:border-cyan-400/60 hover:text-cyan-300"
      : "border-slate-300 text-slate-700 hover:border-cyan-500/60 hover:text-cyan-700",
  primary: (isDark) =>
    isDark
      ? "bg-gradient-to-r from-cyan-400 to-violet-500 text-slate-950 hover:shadow-[0_0_24px_rgba(34,211,238,0.45)]"
      : "bg-gradient-to-r from-cyan-500 to-indigo-500 text-white hover:shadow-[0_0_18px_rgba(59,130,246,0.25)]",
};
