import { Heart, ShoppingCart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Spinner from "../Spinner";

function Stars({ value }) {
  const full = Math.floor(value);
  const empty = 5 - full;
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: full }).map((_, i) => (
        <Star key={`f-${i}`} className="h-4 w-4 fill-amber-400 text-amber-400" />
      ))}
      {Array.from({ length: empty }).map((_, i) => (
        <Star key={`e-${i}`} className="h-4 w-4 text-slate-300" />
      ))}
    </div>
  );
}

function ProductCard({ product, isDark, onAddToCart, isAdding = false }) {
  return (
    <div className={`overflow-hidden rounded-2xl border shadow-sm ${isDark ? "border-white/10 bg-white/5" : "border-slate-200 bg-white"}`}>
      <div className="relative">
        <img src={product.image} alt={product.name} className="h-56 w-full object-cover" />

        {product.discountPct ? (
          <div className="absolute left-4 top-4 rounded-full bg-rose-500 px-3 py-1 text-xs font-bold text-white">
            -{product.discountPct}%
          </div>
        ) : null}

        <button className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full ${isDark ? "bg-slate-950/40 text-white" : "bg-white/90 text-slate-800"} backdrop-blur`}>
          <Heart className="h-5 w-5" />
        </button>
      </div>

      <div className="p-5">
        <p className={`text-xs font-semibold tracking-wider ${isDark ? "text-slate-400" : "text-slate-500"}`}>
          {product.category.toUpperCase()}
        </p>
        <h3 className={`mt-2 text-lg font-bold ${isDark ? "text-slate-100" : "text-slate-900"}`}>{product.name}</h3>

        <div className="mt-2 flex items-center gap-2">
          <Stars value={product.rating ?? 4} />
          <span className={`text-sm ${isDark ? "text-slate-300" : "text-slate-600"}`}>
            {product.rating?.toFixed?.(1) ?? "4.0"}{" "}
            <span className={isDark ? "text-slate-400" : "text-slate-500"}>
              ({product.reviews ?? 0} reviews)
            </span>
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className={`text-2xl font-extrabold ${isDark ? "text-rose-300" : "text-rose-600"}`}>
              ${product.price}
            </span>
            {product.oldPrice ? (
              <span className={`text-sm line-through ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                ${product.oldPrice}
              </span>
            ) : null}
          </div>

          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${product.stock === "Low Stock"
            ? isDark ? "bg-amber-500/15 text-amber-200" : "bg-amber-100 text-amber-700"
            : isDark ? "bg-emerald-500/15 text-emerald-200" : "bg-emerald-100 text-emerald-700"
          }`}>
            {product.stock === "Low Stock" ? "Low Stock" : "In Stock"}
          </span>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <button
            onClick={() => onAddToCart?.(product)}
            disabled={isAdding}
            className={`inline-flex h-11 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 px-4 text-sm font-semibold text-white ${
              isAdding ? "opacity-90 cursor-not-allowed" : ""
            }`}
          >
            {isAdding ? (
              <span className="inline-flex items-center gap-2">
                <Spinner />
                Adding...
              </span>
            ) : (
              <>
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </>
            )}
          </button>

          <Link
            to={`/products/${product.id}`}
            className={`inline-flex h-11 items-center justify-center rounded-xl border px-4 text-sm font-semibold ${
              isDark ? "border-white/15 text-slate-100 hover:border-cyan-400/50" : "border-slate-300 text-slate-700 hover:border-cyan-500/60"
            }`}
          >
            View
          </Link>
        </div>

        {product.description ? (
          <p className={`mt-4 text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
            {product.description}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default ProductCard;
