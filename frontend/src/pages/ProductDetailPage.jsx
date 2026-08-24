import { useState, useEffect, useMemo } from "react";
import { Link, useParams, useNavigate } from "@tanstack/react-router";
import { Minus, Plus, ArrowLeft, Leaf, ShieldCheck, Droplets, ShoppingBag, Star } from "lucide-react";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { products, imageFor, formatLKR } from "@/data/products";
import { useCart } from "@/contexts/CartContext";

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

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

  const handleBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      navigate({ to: '/products' });
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col relative">
      <SiteHeader />
      
      <main className="flex-1 w-full pt-[120px] md:pt-[150px] pb-24">
        <div className="mx-auto max-w-screen-xl px-6 md:px-12">
          
          <button 
            onClick={handleBack}
            className="mb-8 inline-flex items-center gap-3 text-[0.6rem] uppercase tracking-[0.3em] text-forest-deep hover:text-gold transition-colors bg-ivory/95 backdrop-blur-md px-5 py-2.5 rounded-none shadow-sm border border-border cursor-pointer"
          >
            <ArrowLeft size={14} /> Back
          </button>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6">
              <Reveal>
                <div className="relative overflow-hidden bg-sand aspect-[4/5] max-w-lg mx-auto shadow-md border border-border">
                  <img
                    src={imageFor(product.slug)}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-[3000ms] hover:scale-105"
                  />
                  
                  {product.bestseller && (
                    <div className="absolute bottom-6 left-6 z-10 bg-ivory/95 backdrop-blur-sm px-4 py-2 text-[0.55rem] uppercase tracking-[0.3em] text-forest shadow-md border border-border">
                      House Signature
                    </div>
                  )}
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6 bg-ivory p-8 md:p-12 lg:p-16 border border-border luxe-card">
              <Reveal delay={100}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="h-px w-6 bg-gold" />
                    <p className="eyebrow text-gold">{product.category}</p>
                  </div>
                  {product.stars && (
                    <div className="flex items-center gap-1.5 text-gold">
                      <Star size={14} fill="currentColor" strokeWidth={0} />
                      <span className="text-xs font-medium text-forest-deep">{product.stars.toFixed(1)}</span>
                    </div>
                  )}
                </div>
                
                <h1 className="font-display text-2xl leading-[1.15] text-forest-deep md:text-3xl lg:text-4xl">
                  {product.name}
                </h1>
                <p className="mt-4 text-sm md:text-base font-light leading-relaxed text-forest-deep/80">
                  {product.tagline}
                </p>

                <div className="mt-8 pt-6 border-t border-border">
                  <div className="flex items-end justify-between mb-6">
                    <span className="font-display text-3xl text-forest-deep">
                      {formatLKR(product.price)}
                    </span>
                    <span className="text-[0.6rem] uppercase tracking-[0.25em] text-clay">
                      {product.size}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex items-center justify-between border border-border bg-transparent h-14 px-5 sm:w-36 transition-colors hover:border-gold/50">
                      <button 
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="text-forest-deep/50 hover:text-forest-deep transition-colors p-1 cursor-pointer"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} strokeWidth={1} />
                      </button>
                      <span className="text-sm font-light text-forest-deep w-6 text-center">
                        {quantity}
                      </span>
                      <button 
                        onClick={() => setQuantity(Math.min(99, quantity + 1))}
                        className="text-forest-deep/50 hover:text-forest-deep transition-colors p-1 cursor-pointer"
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} strokeWidth={1} />
                      </button>
                    </div>

                    <button
                      onClick={handleAddToCart}
                      className="group flex-1 bg-forest-deep hover:bg-gold text-ivory hover:text-forest-deep h-14 flex items-center justify-center gap-3 text-[0.6rem] uppercase tracking-[0.35em] transition-all duration-500 shadow-xl hover:shadow-none cursor-pointer"
                    >
                      <ShoppingBag size={15} strokeWidth={1.2} className="transition-transform duration-500 group-hover:-translate-y-0.5" />
                      <span>Add to Ritual</span>
                    </button>
                  </div>
                </div>

                <div className="mt-10 pt-6 border-t border-border">
                  <h3 className="font-display text-xl text-forest-deep mb-5">The Formulation</h3>
                  <ul className="space-y-4">
                    <li className="flex gap-4">
                      <Leaf className="text-gold shrink-0 mt-1" size={16} strokeWidth={1} />
                      <div>
                        <p className="text-[0.55rem] uppercase tracking-[0.25em] text-forest-deep mb-0.5">Key Botanicals</p>
                        <p className="text-xs md:text-sm font-light leading-relaxed text-forest-deep/70">
                          {product.formulation?.keyBotanicals || product.notes.join(", ")}
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <Droplets className="text-gold shrink-0 mt-1" size={16} strokeWidth={1} />
                      <div>
                        <p className="text-[0.55rem] uppercase tracking-[0.25em] text-forest-deep mb-0.5">Application</p>
                        <p className="text-xs md:text-sm font-light leading-relaxed text-forest-deep/70">
                          {product.formulation?.application || "Use consistently as part of your daily ritual. Massage gently until fully absorbed."}
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <ShieldCheck className="text-gold shrink-0 mt-1" size={16} strokeWidth={1} />
                      <div>
                        <p className="text-[0.55rem] uppercase tracking-[0.25em] text-forest-deep mb-0.5">Purity Promise</p>
                        <p className="text-xs md:text-sm font-light leading-relaxed text-forest-deep/70">
                          {product.formulation?.purityPromise || "100% natural origin. Blended in Ceylon without synthetics, parabens, or artificial colorants."}
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

      {/* Floating WhatsApp Concierge Button */}
      <a
        href="https://api.whatsapp.com/send/?phone=94766502171&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Ayurway Concierge on WhatsApp"
        className="fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-transform duration-500 hover:scale-110 focus:outline-none group"
      >
        <WhatsAppIcon />
        <span className="absolute right-full mr-3 whitespace-nowrap bg-forest-deep text-ivory text-[0.6rem] uppercase tracking-[0.25em] px-4 py-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 shadow-md pointer-events-none">
          Chat with Concierge
        </span>
      </a>

      <SiteFooter />
    </div>
  );
}