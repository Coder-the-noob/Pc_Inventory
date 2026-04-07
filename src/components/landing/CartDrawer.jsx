import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, ShoppingCart, Trash2, X } from "lucide-react";
import { uiTone } from "./shared";

function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  totalPrice,
  onIncreaseQty,
  onDecreaseQty,
  onRemoveItem,
  onClearCart,
  isDark = true,
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed inset-0 z-[70] backdrop-blur-sm ${isDark ? "bg-slate-950/60" : "bg-slate-900/30"}`}
            onClick={onClose}
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 280, damping: 30 }}
            className={`fixed right-0 top-0 z-[80] h-screen w-full max-w-md border-l p-5 ${
              isDark ? "border-white/10 bg-slate-950/95" : "border-slate-200 bg-white/95"
            }`}
          >
            <div className="flex items-center justify-between">
              <h3 className="flex items-center gap-2 text-lg font-semibold">
                <ShoppingCart className="h-5 w-5 text-cyan-300" /> Your Cart
              </h3>
              <button className={`rounded-lg border p-2 ${isDark ? "border-white/15" : "border-slate-300 text-slate-700"}`} onClick={onClose}>
                <X className="h-4 w-4" />
              </button>
            </div>

            {cartItems.length === 0 ? (
              <div className={`mt-16 rounded-2xl border p-8 text-center ${isDark ? "border-white/10 bg-white/5 text-slate-300" : "border-slate-200 bg-slate-50 text-slate-600"}`}>
                No items yet. Add products to continue.
              </div>
            ) : (
              <>
                <div className="mt-5 space-y-3 overflow-y-auto pr-1" style={{ maxHeight: "calc(100vh - 220px)" }}>
                  {cartItems.map((item) => (
                    <div key={item.id} className={`rounded-2xl border p-4 ${isDark ? "border-white/10 bg-white/5" : "border-slate-200 bg-slate-50"}`}>
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className={`text-sm font-medium ${isDark ? "text-slate-100" : "text-slate-900"}`}>{item.name}</p>
                          <p className={`mt-1 text-xs ${isDark ? "text-slate-400" : "text-slate-500"}`}>{item.category}</p>
                          <p className="mt-2 text-sm text-cyan-300">${item.price}</p>
                        </div>
                        <button onClick={() => onRemoveItem(item.id)} className={`rounded-lg border p-2 hover:text-rose-300 ${isDark ? "border-white/15 text-slate-300" : "border-slate-300 text-slate-600"}`}>
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <button onClick={() => onDecreaseQty(item.id)} className={`rounded-lg border p-1.5 ${isDark ? "border-white/15" : "border-slate-300"}`}>
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-6 text-center text-sm">{item.qty}</span>
                          <button onClick={() => onIncreaseQty(item.id)} className={`rounded-lg border p-1.5 ${isDark ? "border-white/15" : "border-slate-300"}`}>
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        <p className={`text-sm font-semibold ${isDark ? "text-slate-200" : "text-slate-800"}`}>${(item.qty * item.price).toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className={`mt-4 border-t pt-4 ${isDark ? "border-white/10" : "border-slate-200"}`}>
                  <div className="mb-4 flex items-center justify-between text-sm">
                    <span className={isDark ? "text-slate-300" : "text-slate-600"}>Total</span>
                    <span className="text-xl font-bold text-cyan-300">${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex gap-3">
                    <button onClick={onClearCart} className={`h-10 w-full rounded-xl border px-4 text-sm ${isDark ? "border-white/20 text-slate-200" : "border-slate-300 text-slate-700"}`}>
                      Clear
                    </button>
                    <button
                      className={`h-10 w-full rounded-xl px-4 text-sm font-semibold ${uiTone.primary(isDark)}`}
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

export default CartDrawer;
