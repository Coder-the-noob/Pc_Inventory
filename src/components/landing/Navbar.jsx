import { motion } from "framer-motion";
import { Menu, Moon, ShoppingCart, Sun, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { navItems } from "./data";
import { uiSize, uiTone } from "./shared";

function Navbar({
  mobileOpen,
  setMobileOpen,
  cartCount = 0,
  onCartClick,
  isDark = true,
  onToggleTheme,
}) {
  const stripItems = [
    "AI Build Assistant Online",
    "Live Expert Consultation Slots Open",
    "Real-Time Stock Synced with Inventory",
    "Smart Compatibility Checks Enabled",
    "Secure Checkout and Order Tracking",
  ];

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-xl ${
        isDark ? "border-white/10 bg-slate-950/75" : "border-slate-200 bg-white/80"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="text-lg font-semibold tracking-wide">
          <span
            className={`bg-clip-text text-transparent ${
              isDark
                ? "bg-gradient-to-r from-cyan-300 to-violet-300"
                : "bg-gradient-to-r from-cyan-600 to-indigo-600"
            }`}
          >
            PC Builder Pro
          </span>
        </div>

        <ul className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  `text-sm transition ${
                    isActive
                      ? isDark
                        ? "text-cyan-300"
                        : "text-cyan-700"
                      : isDark
                        ? "text-slate-300 hover:text-cyan-300"
                        : "text-slate-600 hover:text-cyan-700"
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={onCartClick}
            className={`relative border transition ${uiSize.iconButton} ${uiTone.outline(isDark)}`}
            aria-label="Cart"
          >
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 rounded-full bg-cyan-400 px-1.5 py-0.5 text-[10px] font-bold text-slate-950">
                {cartCount}
              </span>
            )}
          </button>
          <button
            type="button"
            onClick={onToggleTheme}
            className={`border transition ${uiSize.iconButton} ${uiTone.outline(isDark)}`}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button
            className={`border transition ${uiSize.buttonMd} ${uiTone.outline(isDark)}`}
          >
            Login
          </button>
          <NavLink
            to="/"
            className={`${uiSize.buttonMdWide} font-semibold transition ${uiTone.primary(isDark)}`}
          >
            Get Started
          </NavLink>
        </div>

        <button
          className={`flex h-10 w-10 items-center justify-center rounded-xl border lg:hidden ${isDark ? "border-white/15" : "border-slate-300"}`}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle mobile menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className={`border-t px-4 py-4 lg:hidden ${isDark ? "border-white/10 bg-slate-900/95" : "border-slate-200 bg-white/95"}`}>
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.href}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `text-sm ${
                    isActive
                      ? isDark
                        ? "text-cyan-300"
                        : "text-cyan-700"
                      : isDark
                        ? "text-slate-300 hover:text-cyan-300"
                        : "text-slate-700 hover:text-cyan-700"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="mt-2 flex gap-3">
              <button
                type="button"
                onClick={onToggleTheme}
                className={`flex h-10 w-full items-center justify-center rounded-xl border px-4 text-sm ${
                  isDark ? "border-white/20" : "border-slate-300 text-slate-700"
                }`}
              >
                {isDark ? <Sun className="mr-2 h-4 w-4" /> : <Moon className="mr-2 h-4 w-4" />}
                Theme
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  onCartClick?.();
                }}
                className={`relative flex h-10 w-full items-center justify-center rounded-xl border px-4 text-sm ${
                  isDark ? "border-white/20" : "border-slate-300 text-slate-700"
                }`}
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Cart
                {cartCount > 0 && (
                  <span className="ml-2 rounded-full bg-cyan-400 px-1.5 py-0.5 text-[10px] font-bold text-slate-950">
                    {cartCount}
                  </span>
                )}
              </button>
              <button className={`h-10 w-full rounded-xl border px-4 text-sm ${isDark ? "border-white/20" : "border-slate-300 text-slate-700"}`}>
                Login
              </button>
              <NavLink
                to="/"
                onClick={() => setMobileOpen(false)}
                className={`inline-flex h-10 w-full items-center justify-center rounded-xl px-5 text-center text-sm font-semibold ${uiTone.primary(isDark)}`}
              >
                Get Started
              </NavLink>
            </div>
          </div>
        </div>
      )}
      <div
        className={`overflow-hidden border-t py-2 ${
          isDark ? "border-white/10 bg-slate-900/70" : "border-slate-200 bg-slate-50"
        }`}
      >
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
          className="flex w-[200%] items-center gap-10 whitespace-nowrap text-xs font-medium"
        >
          {[...stripItems, ...stripItems].map((item, idx) => (
            <span
              key={`${item}-${idx}`}
              className={isDark ? "text-slate-300" : "text-slate-600"}
            >
              {item} <span className="ml-2 text-cyan-400">•</span>
            </span>
          ))}
        </motion.div>
      </div>
    </header>
  );
}

export default Navbar;
