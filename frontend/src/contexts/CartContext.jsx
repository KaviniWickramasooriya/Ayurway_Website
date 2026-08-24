import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { products } from "@/data/products";

const STORAGE_KEY = "ayurway.cart.v1";
export const FREE_SHIPPING_THRESHOLD = 10000;
export const SHIPPING_FEE = 650;

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [raw, setRaw] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [lastAdded, setLastAdded] = useState(null);
  const hydrated = useRef(false);
  const flashTimer = useRef(null);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) setRaw(JSON.parse(stored));
    } catch { /* ignore */ }
    hydrated.current = true;
  }, []);

  useEffect(() => {
    if (!hydrated.current) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(raw));
    } catch { /* ignore */ }
  }, [raw]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => { if (e.key === "Escape") setIsOpen(false); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const flash = useCallback((slug) => {
    setLastAdded(slug);
    if (flashTimer.current) clearTimeout(flashTimer.current);
    flashTimer.current = setTimeout(() => setLastAdded(null), 1800);
  }, []);

  const add = useCallback((slug, qty = 1, options = {}) => {
    setRaw((prev) => {
      const found = prev.find((l) => l.slug === slug);
      if (found) return prev.map((l) => l.slug === slug ? { ...l, qty: Math.min(l.qty + qty, 99) } : l);
      return [...prev, { slug, qty }];
    });
    flash(slug);
    if (options.silent !== true) setIsOpen(true);
  }, [flash]);

  const setQty = useCallback((slug, qty) => {
    setRaw((prev) => qty <= 0 ? prev.filter((l) => l.slug !== slug) : prev.map((l) => (l.slug === slug ? { ...l, qty: Math.min(qty, 99) } : l)));
  }, []);

  const remove = useCallback((slug) => setRaw((prev) => prev.filter((l) => l.slug !== slug)), []);
  const clear = useCallback(() => setRaw([]), []);

  const value = useMemo(() => {
    const lines = raw.flatMap((l) => {
      const product = products.find((p) => p.slug === l.slug);
      if (!product) return [];
      return [{ ...l, product, lineTotal: product.price * l.qty }];
    });
    const subtotal = lines.reduce((s, l) => s + l.lineTotal, 0);
    const shipping = subtotal === 0 || subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;
    return {
      lines, count: lines.reduce((s, l) => s + l.qty, 0), subtotal, shipping, total: subtotal + shipping, freeShippingRemaining: Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal),
      isOpen, lastAdded, qtyOf: (slug) => lines.find((l) => l.slug === slug)?.qty ?? 0,
      open: () => setIsOpen(true), close: () => setIsOpen(false), add, setQty, remove, clear,
    };
  }, [raw, isOpen, lastAdded, add, setQty, remove, clear]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}