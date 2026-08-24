import { Link } from "@tanstack/react-router";
import { Check, Plus, ShoppingBag, Star } from "lucide-react";
import { formatLKR, imageFor } from "@/data/products";
import { useCart } from "@/contexts/CartContext";

export function ProductCard({ product }) {
  const { add, lastAdded, qtyOf, open: openCart } = useCart();
  const isJustAdded = lastAdded === product.slug;
  const quantityInCart = qtyOf(product.slug);

  const handleAddToCart = (e) => {
    e.preventDefault(); 
    e.stopPropagation(); 
    add(product.slug, 1);
    openCart();
  };

  return (
    <article className="group flex flex-col h-full cursor-pointer">
      <div className="relative overflow-hidden bg-sand aspect-[3/4]">
        <Link to={`/product/${product.slug}`} className="absolute inset-0 z-0">
          <img
            src={imageFor(product.slug)}
            alt={product.name}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[2000ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out" />
        </Link>

        {product.bestseller && (
          <span className="absolute left-4 top-4 bg-ivory/95 backdrop-blur-md px-4 py-1.5 text-[0.55rem] uppercase tracking-[0.3em] text-forest shadow-sm z-10 pointer-events-none">
            Signature
          </span>
        )}

        {quantityInCart > 0 && (
          <span className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-gold text-[0.65rem] font-medium tracking-widest text-forest-deep shadow-xl z-10 animate-in zoom-in pointer-events-none">
            {quantityInCart}
          </span>
        )}

        <div className="absolute inset-x-0 bottom-24 p-6 translate-y-8 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 group-hover:opacity-100 z-10 pointer-events-none">
          <p className="text-[0.65rem] uppercase tracking-[0.3em] text-gold-soft leading-relaxed">
            {product.notes.join(" · ")}
          </p>
        </div>

        {/* Hover Quick Add Button */}
        <button
          type="button"
          onClick={handleAddToCart}
          aria-label={`Add ${product.name} to cart`}
          className={`absolute bottom-0 left-0 w-full flex items-center justify-center gap-3 py-5 text-[0.6rem] uppercase tracking-[0.3em] transition-all duration-500 ease-out z-20 md:translate-y-full md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 ${
            isJustAdded
              ? "bg-forest-deep text-ivory"
              : "bg-ivory text-forest-deep hover:bg-gold hover:text-forest-deep"
          }`}
        >
          {isJustAdded ? <Check size={14} strokeWidth={1.5} /> : <Plus size={14} strokeWidth={1} />}
          <span>{isJustAdded ? "Added to Cart" : "Quick Add"}</span>
        </button>
      </div>

      <div className="mt-5 flex flex-col flex-1 px-1">
        <div className="flex items-center justify-between">
          <p className="eyebrow">{product.category}</p>
          {product.stars && (
            <div className="flex items-center gap-1 text-gold">
              <Star size={12} fill="currentColor" strokeWidth={0} />
              <span className="text-[0.65rem] font-medium tracking-wider text-forest-deep/80">{product.stars.toFixed(1)}</span>
            </div>
          )}
        </div>

        <Link to={`/product/${product.slug}`}>
          {/* Increased font size to text-lg and md:text-xl */}
          <h3 className="mt-2.5 font-display text-lg md:text-xl tracking-wide text-center text-forest-deep group-hover:text-gold transition-colors duration-500 leading-snug">
            {product.name}
          </h3>
        </Link>
        
        <div className="mt-auto pt-4 flex items-end justify-between border-t border-border/50">
          <div className="flex flex-col">
            <span className="text-sm md:text-base font-display tracking-widest text-forest-deep mb-0.5">
              {formatLKR(product.price)}
            </span>
            <span className="text-[0.6rem] uppercase tracking-[0.2em] text-clay">
              {product.size}
            </span>
          </div>
          
          <button
            onClick={handleAddToCart}
            className="flex items-center justify-center w-9 h-9 rounded-full border border-border text-forest-deep hover:bg-forest-deep hover:text-ivory hover:border-forest-deep transition-all duration-500 shadow-sm"
            aria-label="Add to cart"
            title="Add to Cart"
          >
            {isJustAdded ? <Check size={13} strokeWidth={1.5} /> : <ShoppingBag size={13} strokeWidth={1.2} />}
          </button>
        </div>
      </div>
    </article>
  );
}