// @refresh reset
import { createContext, useContext, useState, useEffect } from "react";
import { products, formatLKR } from "@/data/products";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem("ayurway_cart");
      const parsed = saved ? JSON.parse(saved) : [];
      // Ensure we always initialize with a valid array to prevent .map errors
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });
  const [lastAdded, setLastAdded] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem("ayurway_cart", JSON.stringify(items));
    } catch (e) {
      console.error(e);
    }
  }, [items]);

  const add = (slug, qty = 1, sizeVariant = null) => {
    setItems((prev) => {
      const safePrev = Array.isArray(prev) ? prev : [];
      // Create a unique identifier combining the slug and the selected size
      const key = sizeVariant ? `${slug}-${sizeVariant}` : slug;
      
      const existing = safePrev.find((i) => (i.variantKey || i.slug) === key);
      if (existing) {
        return safePrev.map((i) => 
          (i.variantKey || i.slug) === key ? { ...i, qty: i.qty + qty } : i
        );
      }
      return [...safePrev, { slug, qty, variantKey: key, selectedSize: sizeVariant }];
    });
    setLastAdded(true);
    setTimeout(() => setLastAdded(false), 1200);
  };

  // Remove uses the unique variantKey
  const remove = (key) => {
    setItems((prev) => (Array.isArray(prev) ? prev.filter((i) => (i.variantKey || i.slug) !== key) : []));
  };

  // Update uses the unique variantKey
  const updateQty = (key, qty) => {
    if (qty <= 0) {
      remove(key);
      return;
    }
    setItems((prev) => (Array.isArray(prev) ? prev.map((i) => (i.variantKey || i.slug) === key ? { ...i, qty } : i) : []));
  };

  const clear = () => setItems([]);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const safeItems = Array.isArray(items) ? items : [];

  // Helper function to get the current quantity of a specific variant in the cart
  const qtyOf = (slug, sizeVariant = null) => {
    const key = sizeVariant ? `${slug}-${sizeVariant}` : slug;
    const match = safeItems.find((i) => (i.variantKey || i.slug) === key);
    return match ? match.qty : 0;
  };

  // Hydrate cart items with full product data and calculate variant prices
  const lines = safeItems.map((item) => {
    const product = products.find((p) => p.slug === item.slug);
    let price = product?.price || 0;
    let size = product?.size || "";
    
    // If this item has a selected size variant, update its active price and size label
    if (item.selectedSize && product?.variants) {
      const match = product.variants.find((v) => v.size === item.selectedSize);
      if (match) {
        price = match.price;
        size = match.size;
      }
    }

    return {
      ...item,
      id: item.variantKey || item.slug, // Crucial: A unique ID for the UI to use as a key
      product: product ? { ...product, price, size } : null,
      lineTotal: price * item.qty,
    };
  }).filter((l) => l.product !== null);

  const count = safeItems.reduce((sum, i) => sum + i.qty, 0);
  const subtotal = lines.reduce((sum, l) => sum + l.lineTotal, 0);
  const shipping = subtotal > 10000 || subtotal === 0 ? 0 : 450;
  const total = subtotal + shipping;

  return (
    <CartContext.Provider value={{ items: safeItems, add, remove, updateQty, clear, isOpen, open, close, lines, count, subtotal, shipping, total, lastAdded, qtyOf }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}