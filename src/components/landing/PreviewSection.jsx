import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { products } from "./data";
import { fadeUp, stagger, glassCard, lightCard, uiSize, uiTone } from "./shared";

function PreviewSection({ onAddToCart, isDark = true }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...new Set(products.map((item) => item.category))],
    []
  );

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All") return products;
    return products.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const visibleProducts = filteredProducts.slice(0, 6);

  return (
    <section id="products" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <h2 className={`text-3xl font-bold tracking-tight sm:text-[2.15rem] ${isDark ? "text-slate-100" : "text-slate-900"}`}>Products & Components</h2>
        <p className={`mt-3 max-w-3xl text-[0.98rem] leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
          Explore different component categories for your next custom build. Add parts to cart and continue with guided checkout.
        </p>
      </motion.div>
      <div className="mt-6 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
            }}
            className={`${uiSize.chip} transition ${
              selectedCategory === category
                ? isDark
                  ? "border-cyan-400/60 bg-cyan-500/15 text-cyan-200"
                  : "border-cyan-300 bg-cyan-100 text-cyan-700"
                : isDark
                  ? "border-white/20 text-slate-300 hover:border-cyan-400/40"
                  : "border-slate-300 text-slate-700 hover:border-cyan-500/40"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {visibleProducts.map((item) => (
          <motion.div key={item.id} variants={fadeUp} whileHover={{ y: -5 }} className={`p-5 ${isDark ? glassCard : lightCard}`}>
            <div className={`rounded-xl border p-4 ${isDark ? "border-white/10 bg-slate-900/70" : "border-slate-200 bg-slate-50"}`}>
              <div className="mb-4 overflow-hidden rounded-xl border border-white/10">
                <img src={item.image} alt={item.name} className="h-36 w-full object-cover transition duration-500 hover:scale-105" />
              </div>
              <div className="flex items-center justify-between">
                <p className={`rounded-full px-2.5 py-1 text-xs ${isDark ? "bg-violet-500/15 text-violet-200" : "bg-indigo-100 text-indigo-700"}`}>{item.category}</p>
                <p className={`text-xs ${item.stock === "Low Stock" ? (isDark ? "text-amber-300" : "text-amber-600") : (isDark ? "text-emerald-300" : "text-emerald-600")}`}>
                  {item.stock}
                </p>
              </div>
              <p className={`mt-4 text-base font-semibold ${isDark ? "text-slate-100" : "text-slate-900"}`}>{item.name}</p>
              <p className="mt-2 text-xl font-bold text-cyan-300">${item.price}</p>
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => onAddToCart?.(item)}
                  className={`h-10 w-full rounded-xl px-4 text-sm font-semibold ${uiTone.primary(isDark)}`}
                >
                  Add to Cart
                </button>
                <button className={`h-10 rounded-xl border px-4 text-sm ${isDark ? "border-white/20 text-slate-300 hover:border-cyan-400/50" : "border-slate-300 text-slate-700 hover:border-cyan-500/50"}`}>
                  View
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <div className="mt-8 flex justify-center">
        <a
          href="/products"
          className={`h-10 rounded-xl border px-6 text-sm font-medium transition inline-flex items-center ${
            isDark
              ? "border-cyan-300/40 bg-cyan-500/10 text-cyan-200 hover:bg-cyan-500/20"
              : "border-cyan-300 bg-cyan-100 text-cyan-700 hover:bg-cyan-200"
          }`}
        >
          Show All Products
        </a>
      </div>
    </section>
  );
}

export default PreviewSection;
