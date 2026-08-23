import { useState, useEffect, useMemo } from "react";
import { Link, useParams, useNavigate } from "@tanstack/react-router";
import { Minus, Plus, ArrowLeft, Leaf, ShieldCheck, Droplets, ShoppingBag } from "lucide-react";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { products, imageFor, formatLKR } from "@/data/products";
import { useCart } from "@/contexts/CartContext";

export default function ProductDetailPage() {
  const { slug } = useParams({ strict: false });
  const navigate = useNavigate();
  
  const product = useMemo(() => products.find((p) => p.slug === slug), [slug]);
  const { add, open: openCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <SiteHeader />
        <div className="flex-1 flex flex-col items-center justify-center py-32 text-center">
          <h1 className="font-display text-3xl text-forest-deep">Formulation Not Found</h1>
          <p className="mt-3 text-clay text-sm">We couldn't find the product you're looking for.</p>
          <Link to="/products" className="mt-6 border-b border-forest-deep pb-1 text-xs uppercase tracking-[0.3em] text-forest-deep hover:text-gold transition-colors">
            Return to Collection
          </Link>
        </div>
        <SiteFooter />
      </div>
    );
  }

  const handleAddToCart = () => {
    add(product.slug, quantity);
    openCart();
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      
      <main className="flex-1 w-full pt-[80px] md:pt-[100px]">
        <div className="mx-auto max-w-screen-2xl">
          <div className="flex flex-col lg:flex-row min-h-[calc(100vh-100px)]">
            
            {/* Left: Sticky Image Gallery */}
            <div className="w-full lg:w-1/2 lg:sticky lg:top-[100px] lg:h-[calc(100vh-100px)] bg-sand relative overflow-hidden group">
              <button 
                onClick={() => navigate({ to: '/products' })}
                className="absolute top-8 left-8 z-20 flex items-center gap-3 text-[0.6rem] uppercase tracking-[0.3em] text-forest-deep hover:text-gold transition-colors bg-ivory/90 backdrop-blur-md px-5 py-2.5 rounded-none shadow-sm border border-border"
              >
                <ArrowLeft size={14} /> Back
              </button>
              
              <img
                src={imageFor(product.slug)}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-105"
              />
              
              {product.bestseller && (
                <div className="absolute bottom-8 left-8 z-10 bg-ivory/95 backdrop-blur-sm px-4 py-2 text-[0.55rem] uppercase tracking-[0.3em] text-forest shadow-md border border-border">
                  House Signature
                </div>
              )}
            </div>

            {/* Right: Editorial Product Details */}
            <div className="w-full lg:w-1/2 px-6 py-16 md:px-16 lg:py-24 xl:px-28 bg-ivory">
              <Reveal>
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-px w-6 bg-gold" />
                  <p className="eyebrow text-gold">{product.category}</p>
                </div>
                
                {/* Reduced font size for product name */}
                <h1 className="font-display text-3xl leading-[1.15] text-forest-deep md:text-4xl lg:text-5xl">
                  {product.name}
                </h1>
                <p className="mt-6 text-base font-light leading-relaxed text-forest-deep/80">
                  {product.tagline}
                </p>

                <div className="mt-10 pt-8 border-t border-border">
                  <div className="flex items-end justify-between mb-8">
                    <span className="font-display text-3xl text-forest-deep">
                      {formatLKR(product.price)}
                    </span>
                    <span className="text-[0.6rem] uppercase tracking-[0.25em] text-clay">
                      {product.size}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-5">
                    {/* Luxury Quantity Selector */}
                    <div className="flex items-center justify-between border border-border bg-transparent h-14 px-5 sm:w-36 transition-colors hover:border-gold/50">
                      <button 
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="text-forest-deep/50 hover:text-forest-deep transition-colors p-1"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} strokeWidth={1} />
                      </button>
                      <span className="text-sm font-light text-forest-deep w-6 text-center">
                        {quantity}
                      </span>
                      <button 
                        onClick={() => setQuantity(Math.min(99, quantity + 1))}
                        className="text-forest-deep/50 hover:text-forest-deep transition-colors p-1"
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} strokeWidth={1} />
                      </button>
                    </div>

                    {/* Add to Cart Button with Icon */}
                    <button
                      onClick={handleAddToCart}
                      className="group flex-1 bg-forest-deep hover:bg-gold text-ivory hover:text-forest-deep h-14 flex items-center justify-center gap-3 text-[0.6rem] uppercase tracking-[0.35em] transition-all duration-500 shadow-xl hover:shadow-none"
                    >
                      <ShoppingBag size={15} strokeWidth={1.2} className="transition-transform duration-500 group-hover:-translate-y-0.5" />
                      <span>Add to Ritual</span>
                    </button>
                  </div>
                </div>

                {/* Efficacy & Botanical Highlights */}
                <div className="mt-16 pt-10 border-t border-border">
                  <h3 className="font-display text-2xl text-forest-deep mb-8">The Formulation</h3>
                  <ul className="space-y-6">
                    <li className="flex gap-5">
                      <Leaf className="text-gold shrink-0 mt-1" size={20} strokeWidth={1} />
                      <div>
                        <p className="text-[0.6rem] uppercase tracking-[0.25em] text-forest-deep mb-1">Key Botanicals</p>
                        <p className="text-sm font-light leading-relaxed text-forest-deep/70">
                          {product.notes.join(", ")}. Carefully extracted to preserve absolute potency.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-6">
                      <Droplets className="text-gold shrink-0 mt-1" size={20} strokeWidth={1} />
                      <div>
                        <p className="text-[0.6rem] uppercase tracking-[0.25em] text-forest-deep mb-1">Application</p>
                        <p className="text-sm font-light leading-relaxed text-forest-deep/70">
                          Use consistently as part of your daily ritual. For topical formulations, massage gently until fully absorbed.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-6">
                      <ShieldCheck className="text-gold shrink-0 mt-1" size={20} strokeWidth={1} />
                      <div>
                        <p className="text-[0.6rem] uppercase tracking-[0.25em] text-forest-deep mb-1">Purity Promise</p>
                        <p className="text-sm font-light leading-relaxed text-forest-deep/70">
                          100% natural origin. Blended in Ceylon without synthetics, parabens, or artificial colorants.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}