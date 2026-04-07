import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "./ProductsPage";
import RouteInfoPage from "./RouteInfoPage";
import LandingPage from "./LandingPage";
import { CartDrawer, Footer, Navbar } from "./components/landing";

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isDark, setIsDark] = useState(true);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("pc-builder-theme");
    if (savedTheme) setIsDark(savedTheme === "dark");
  }, []);

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setCartOpen(true);
  };

  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item))
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, qty: Math.max(0, item.qty - 1) } : item))
        .filter((item) => item.qty > 0)
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCartItems([]);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      window.localStorage.setItem("pc-builder-theme", next ? "dark" : "light");
      return next;
    });
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);

  return (
    <>
      <Navbar
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        cartCount={cartCount}
        onCartClick={() => setCartOpen(true)}
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />
      <Routes>
        <Route path="/" element={<LandingPage isDark={isDark} onAddToCart={handleAddToCart} />} />
        <Route path="/products" element={<ProductsPage isDark={isDark} onAddToCart={handleAddToCart} />} />
        <Route
          path="/build-pc"
          element={
            <RouteInfoPage
              title="Build PC Workspace"
              description="Design complete builds, run compatibility checks, and save multiple configurations before ordering."
              isDark={isDark}
            />
          }
        />
        <Route
          path="/ai-assistant"
          element={
            <RouteInfoPage
              title="AI Assistant"
              description="Get instant build recommendations by budget and workload, with fallback escalation to expert consultation."
              isDark={isDark}
            />
          }
        />
        <Route
          path="/expert-consultation"
          element={
            <RouteInfoPage
              title="Expert Consultation"
              description="Book token-based sessions with human agents and receive personalized guidance for your setup."
              isDark={isDark}
            />
          }
        />
        <Route
          path="/about"
          element={
            <RouteInfoPage
              title="About PC Builder Pro"
              description="A smart PC building and inventory platform combining AI and human expertise for better buying decisions."
              isDark={isDark}
            />
          }
        />
        <Route
          path="/contact"
          element={
            <RouteInfoPage
              title="Contact & Support"
              description="Reach sales or support teams for platform onboarding, integration, and customer service."
              isDark={isDark}
            />
          }
        />
      </Routes>
      <Footer isDark={isDark} />
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        totalPrice={totalPrice}
        onIncreaseQty={increaseQty}
        onDecreaseQty={decreaseQty}
        onRemoveItem={removeItem}
        onClearCart={clearCart}
        isDark={isDark}
      />
    </>
  );
}

export default App;
