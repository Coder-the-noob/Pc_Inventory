import { useMemo, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "./components/landing/data";
import { ProductCard } from "./components/landing";

function ProductsPage({ isDark, onAddToCart, addingId }) {
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
        <Link to="/" className={`inline-flex items-center text-sm ${isDark ? "text-cyan-300" : "text-cyan-700"}`}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Landing
        </Link>
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
            <ProductCard
              key={item.id}
              product={item}
              isDark={isDark}
              onAddToCart={onAddToCart}
              isAdding={addingId === item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
