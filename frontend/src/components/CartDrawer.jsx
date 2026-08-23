import { Link } from "@tanstack/react-router";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { formatLKR, imageFor } from "@/data/products";

export function CartDrawer() {
  const { lines, isOpen, close, setQty, remove, clear, subtotal, shipping, total, freeShippingRemaining, count } = useCart();
  const progress = Math.min(100, Math.round(((10000 - freeShippingRemaining) / 10000) * 100));

  return (
    <>
      <div aria-hidden={!isOpen} onClick={close} className={`fixed inset-0 z-[60] bg-forest-deep/50 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}`} />
      <aside role="dialog" aria-label="Shopping bag" aria-hidden={!isOpen} className={`fixed right-0 top-0 z-[61] flex h-full w-full max-w-md flex-col bg-background shadow-2xl transition-transform duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <header className="flex items-center justify-between border-b border-border px-7 py-6">
          <div>
            <p className="eyebrow">Your bag</p>
            <p className="mt-1 font-display text-2xl text-forest-deep">{count} {count === 1 ? "item" : "items"}</p>
          </div>
          <button onClick={close} aria-label="Close bag" className="text-forest transition-transform duration-300 hover:rotate-90 hover:text-gold"><X size={20} strokeWidth={1.4} /></button>
        </header>

        {lines.length > 0 && (
          <div className="border-b border-border bg-sand px-7 py-4">
            <p className="text-[0.6rem] uppercase tracking-[0.24em] text-forest">
              {freeShippingRemaining > 0 ? `${formatLKR(freeShippingRemaining)} away from complimentary delivery` : "Complimentary island-wide delivery unlocked"}
            </p>
            <div className="mt-3 h-px w-full bg-clay">
              <div className="h-px bg-gold transition-[width] duration-700 ease-out" style={{ width: `${progress}%` }} />
            </div>
          </div>
        )}

        <div className="flex-1 overflow-y-auto px-7">
          {lines.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <ShoppingBag size={28} strokeWidth={1} className="text-clay" />
              <p className="mt-6 font-display text-2xl text-forest-deep">Your bag is empty</p>
              <Link to="/products" onClick={close} className="mt-8 border border-forest px-8 py-3 text-[0.6rem] uppercase tracking-[0.3em] text-forest transition-colors hover:bg-forest hover:text-ivory">Browse the collection</Link>
            </div>
          ) : (
            <ul className="divide-y divide-border">
              {lines.map((l) => (
                <li key={l.slug} className="flex gap-5 py-6">
                  <img src={imageFor(l.slug)} alt={l.product.name} className="h-28 w-22 shrink-0 bg-sand object-cover" />
                  <div className="flex flex-1 flex-col">
                    <p className="text-[0.55rem] uppercase tracking-[0.24em] text-muted-foreground">{l.product.category}</p>
                    <p className="mt-1 font-display text-lg leading-snug text-forest-deep">{l.product.name}</p>
                    <p className="text-xs text-muted-foreground">{l.product.size}</p>
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="flex items-center border border-border">
                        <button aria-label="Decrease quantity" onClick={() => setQty(l.slug, l.qty - 1)} className="px-2.5 py-1.5 text-forest transition-colors hover:bg-sand"><Minus size={12} /></button>
                        <span className="min-w-8 text-center text-xs tracking-widest">{l.qty}</span>
                        <button aria-label="Increase quantity" onClick={() => setQty(l.slug, l.qty + 1)} className="px-2.5 py-1.5 text-forest transition-colors hover:bg-sand"><Plus size={12} /></button>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-forest">{formatLKR(l.lineTotal)}</span>
                        <button aria-label={`Remove ${l.product.name}`} onClick={() => remove(l.slug)} className="text-muted-foreground transition-colors hover:text-destructive"><Trash2 size={14} strokeWidth={1.3} /></button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {lines.length > 0 && (
          <footer className="border-t border-border px-7 py-6">
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between text-muted-foreground"><dt>Subtotal</dt><dd>{formatLKR(subtotal)}</dd></div>
              <div className="flex justify-between text-muted-foreground"><dt>Delivery</dt><dd>{shipping === 0 ? "Complimentary" : formatLKR(shipping)}</dd></div>
              <div className="flex justify-between border-t border-border pt-3 font-display text-xl text-forest-deep"><dt>Total</dt><dd>{formatLKR(total)}</dd></div>
            </dl>
            <Link to="/checkout" onClick={close} className="mt-6 flex w-full items-center justify-center bg-forest px-8 py-4 text-[0.65rem] uppercase tracking-[0.32em] text-ivory transition-colors hover:bg-forest-deep">Proceed to checkout</Link>
            <button onClick={clear} className="mt-4 w-full text-[0.55rem] uppercase tracking-[0.28em] text-muted-foreground hover:text-destructive">Empty the bag</button>
          </footer>
        )}
      </aside>
    </>
  );
}