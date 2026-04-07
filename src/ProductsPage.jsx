import { useMemo, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { products } from "./components/landing/data";

function ProductsPage({ isDark, onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = useMemo(
    () => ["All", ...new Set(products.map((item) => item.category))],
    []
  );
  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All") return products;
    return products.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className={`min-h-screen ${isDark ? "bg-slate-950 text-slate-100" : "bg-slate-100 text-slate-900"}`}>
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <a href="/" className="inline-flex items-center text-sm text-cyan-700 hover:text-cyan-800">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Landing
        </a>
        <h1 className={`mt-4 text-4xl font-bold tracking-tight ${isDark ? "text-slate-100" : "text-slate-900"}`}>All Products</h1>
        <p className={`mt-2 max-w-2xl ${isDark ? "text-slate-300" : "text-slate-600"}`}>
          Explore our full catalog of components. Filter by category and choose parts for your build.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`h-10 rounded-xl border px-4 text-sm transition ${
                selectedCategory === category
                  ? isDark
                    ? "border-cyan-400/60 bg-cyan-500/15 text-cyan-200"
                    : "border-cyan-300 bg-cyan-100 text-cyan-700"
                  : isDark
                    ? "border-white/20 text-slate-300 hover:border-cyan-500/40"
                    : "border-slate-300 text-slate-700 hover:border-cyan-500/40"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.map((item) => (
            <div key={item.id} className={`rounded-2xl border p-5 ${isDark ? "border-white/10 bg-white/5" : "border-slate-200 bg-white"} shadow-[0_10px_30px_rgba(15,23,42,0.08)]`}>
              <div className={`mb-4 overflow-hidden rounded-xl border ${isDark ? "border-white/10" : "border-slate-200"}`}>
                <img src={item.image} alt={item.name} className="h-40 w-full object-cover" />
              </div>
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-indigo-100 px-2.5 py-1 text-xs text-indigo-700">{item.category}</span>
                <span className={`text-xs ${item.stock === "Low Stock" ? "text-amber-600" : "text-emerald-600"}`}>{item.stock}</span>
              </div>
              <h3 className={`mt-3 text-base font-semibold ${isDark ? "text-slate-100" : "text-slate-900"}`}>{item.name}</h3>
              <p className="mt-1 text-xl font-bold text-cyan-700">${item.price}</p>
              <button onClick={() => onAddToCart?.(item)} className="mt-4 h-10 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 text-sm font-semibold text-white">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
