import { useState, useEffect, useMemo } from "react";
import { Link, useParams, useNavigate } from "@tanstack/react-router";
import { Minus, Plus, ArrowLeft, Leaf, ShieldCheck, ShoppingBag, Star, Sparkles, CheckCircle2, Clock } from "lucide-react";

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

  // State for variant selection if the product has variants (like Nuts, Seeds & Berries)
  const [selectedVariant, setSelectedVariant] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (product && product.variants && product.variants.length > 0) {
      setSelectedVariant(product.variants[0]); // default to first variant
    } else {
      setSelectedVariant(null);
    }
  }, [slug, product]);

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

  // Determine active price and size based on variant selection
  const activePrice = selectedVariant ? selectedVariant.price : product.price;
  const activeSize = selectedVariant ? selectedVariant.size : product.size;

  const handleAddToCart = () => {
    // Pass variant size along if applicable
    add(product.slug, quantity, selectedVariant ? selectedVariant.size : undefined);
    openCart();
  };

  // Navigates explicitly back to the collection page with the current product's category active
  const handleBack = () => {
    navigate({
      to: '/products',
      search: { category: product.category }
    });
  };

  const whatsappMessage = encodeURIComponent(`Hello Ayurway Concierge, I would like to inquire about ${product.name} (${activeSize}) - (${formatLKR(activePrice)}).`);
  const whatsappUrl = `https://api.whatsapp.com/send/?phone=94766502171&text=${whatsappMessage}&type=phone_number&app_absent=0`;

  return (
    <div className="min-h-screen bg-background flex flex-col relative">
      <SiteHeader />
      
      <main className="flex-1 w-full pt-[120px] md:pt-[150px] pb-24">
        <div className="mx-auto max-w-screen-xl px-6 md:px-12">
          
          <button 
            onClick={handleBack}
            className="mb-8 inline-flex items-center gap-3 text-[0.6rem] uppercase tracking-[0.3em] text-forest-deep hover:text-gold transition-colors bg-ivory/95 backdrop-blur-md px-5 py-2.5 rounded-none shadow-sm border border-border cursor-pointer"
          >
            <ArrowLeft size={14} /> Back to {product.category}
          </button>

          {/* Top Grid: Image and Main Actions */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left: Sticky Image Showcase */}
            <div className="lg:col-span-6 lg:sticky lg:top-[120px]">
              <Reveal>
                <div className="relative overflow-hidden bg-sand aspect-[4/5] max-w-lg mx-auto shadow-xl border border-border group">
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

            {/* Right: Editorial Product Details & Purchase Box */}
            <div className="lg:col-span-6 bg-ivory p-8 md:p-12 lg:p-14 border border-border luxe-card shadow-sm flex flex-col justify-center">
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
                
                <h1 className="font-display text-3xl leading-[1.15] text-forest-deep md:text-4xl">
                  {product.name}
                </h1>
                
                {product.about && (
                  <p className="mt-4 text-sm md:text-base font-light leading-relaxed text-forest-deep/80 line-clamp-3">
                    {product.about}
                  </p>
                )}

                {/* Styled Variant Selector for Nuts, Seeds & Berries */}
                {product.variants && product.variants.length > 0 && (
                  <div className="mt-8 pt-6 border-t border-border">
                    <p className="text-[0.65rem] uppercase tracking-[0.3em] text-forest-deep mb-4 text-center">Select Quantity / Weight</p>
                    <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
                      {product.variants.map((v) => (
                        <button
                          key={v.size}
                          onClick={() => setSelectedVariant(v)}
                          className={`px-6 py-2.5 text-[0.7rem] uppercase tracking-widest rounded-full transition-all duration-500 cursor-pointer ${
                            selectedVariant?.size === v.size
                              ? "bg-gradient-to-r from-[#d4af37] to-[#e6cf8b] text-forest-deep font-medium shadow-md border-transparent scale-105"
                              : "bg-transparent text-forest-deep border border-forest-deep/20 hover:border-[#d4af37] hover:bg-gold/5"
                          }`}
                        >
                          {v.size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-10 pt-6 border-t border-border">
                  <div className="flex items-end justify-between mb-8">
                    <span className="font-display text-3xl text-forest-deep">
                      {formatLKR(activePrice)}
                    </span>
                    <span className="text-[0.65rem] uppercase tracking-[0.25em] text-clay">
                      {activeSize}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    {/* Pill-shaped Quantity Selector */}
                    <div className="flex items-center justify-between border border-border bg-transparent rounded-full h-[52px] px-5 w-full sm:w-[130px] transition-colors hover:border-gold/50">
                      <button 
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="text-forest-deep/50 hover:text-forest-deep transition-colors p-1 cursor-pointer"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} strokeWidth={1.5} />
                      </button>
                      <span className="text-sm font-medium text-forest-deep w-6 text-center">
                        {quantity}
                      </span>
                      <button 
                        onClick={() => setQuantity(Math.min(99, quantity + 1))}
                        className="text-forest-deep/50 hover:text-forest-deep transition-colors p-1 cursor-pointer"
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} strokeWidth={1.5} />
                      </button>
                    </div>

                    {/* Pill-shaped Add to Cart Button */}
                    <button
                      onClick={handleAddToCart}
                      className="group flex-1 w-full bg-gradient-to-r from-[#d4af37] to-[#e6cf8b] hover:from-[#c5a02c] hover:to-[#d4af37] text-forest-deep h-[52px] rounded-full flex items-center justify-center gap-3 text-[0.65rem] uppercase tracking-[0.3em] font-medium transition-all duration-500 shadow-md hover:shadow-lg cursor-pointer"
                    >
                      <ShoppingBag size={15} strokeWidth={1.5} className="transition-transform duration-500 group-hover:-translate-y-0.5" />
                      <span>Add to Cart</span>
                    </button>
                  </div>

                  {/* Pill-shaped Ask on WhatsApp */}
                  <div className="mt-4">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full h-[52px] rounded-full flex items-center justify-center gap-2 border border-border bg-white text-forest-deep hover:border-[#25D366] hover:text-[#25D366] transition-all duration-500 text-[0.65rem] uppercase tracking-[0.3em] font-medium"
                    >
                      <WhatsAppIcon />
                      <span>Ask on WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* Quick Highlights */}
                <div className="mt-10 pt-6 border-t border-border">
                  <h3 className="font-display text-lg text-forest-deep mb-4 text-center">Core Formulation</h3>
                  <ul className="space-y-3 text-xs md:text-sm font-light text-forest-deep/70">
                    <li className="flex items-center justify-center gap-3">
                      <Leaf size={14} className="text-gold shrink-0" />
                      <span>100% pure natural origin botanicals.</span>
                    </li>
                    <li className="flex items-center justify-center gap-3">
                      <ShieldCheck size={14} className="text-gold shrink-0" />
                      <span>Free from parabens, synthetic dyes, and heavy chemicals.</span>
                    </li>
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Detailed Editorial Sections (About, Benefits, Ingredients, Why Choose, Ritual) */}
          <div className="mt-28 space-y-28 border-t border-border pt-20">
            
            {/* About This Product */}
            {product.about && (
              <Reveal>
                <div className="max-w-4xl mx-auto text-center relative px-4">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-4">
                    <Sparkles size={24} className="text-gold opacity-50" />
                  </div>
                  <p className="text-[0.65rem] uppercase tracking-[0.4em] text-gold mb-4 pt-4">The Philosophy</p>
                  <h2 className="font-display text-3xl md:text-5xl text-forest-deep mb-8 leading-tight">Pure botanical perfection</h2>
                  <p className="text-base md:text-lg font-light leading-loose text-forest-deep/80 relative z-10">
                    <span className="text-3xl text-gold-soft leading-none mr-1 inline-block translate-y-1.5">"</span>
                    {product.about}
                    <span className="text-3xl text-gold-soft leading-none ml-1 inline-block translate-y-1.5">"</span>
                  </p>
                </div>
              </Reveal>
            )}

            {/* Benefits / Why It Works - Responsive Grids that center correctly */}
            {product.benefits && product.benefits.length > 0 && (
              <div className="bg-sand rounded-xl p-10 md:p-16 lg:p-20 relative overflow-hidden shadow-inner">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
                <Reveal>
                  <div className="text-center max-w-2xl mx-auto mb-14 relative z-10">
                    <p className="eyebrow text-gold mb-2">Benefits & Efficacy</p>
                    <h2 className="font-display text-3xl md:text-4xl text-forest-deep">Why It Works</h2>
                  </div>
                </Reveal>
                <div className="flex flex-wrap justify-center gap-6 relative z-10">
                  {product.benefits.map((b, idx) => (
                    <Reveal key={b.title} delay={idx * 80}>
                      <div className="bg-ivory/80 backdrop-blur-sm p-8 rounded-lg border border-border flex flex-col items-center text-center shadow-sm w-[300px] max-w-full h-full hover:border-gold/40 hover:-translate-y-1 transition-all duration-500">
                        <div className="w-12 h-12 rounded-full bg-forest-deep/5 flex items-center justify-center mb-5 text-gold">
                          <CheckCircle2 size={20} strokeWidth={1.5} />
                        </div>
                        <h3 className="font-display text-xl text-forest-deep mb-3">{b.title}</h3>
                        <p className="text-xs md:text-sm font-light leading-relaxed text-forest-deep/70">{b.desc}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            )}

            {/* Key Ingredients / Formulation */}
            {product.ingredients && product.ingredients.length > 0 && (
              <div className="max-w-5xl mx-auto relative">
                <Reveal>
                  <div className="text-center mb-16">
                    <p className="eyebrow text-gold mb-2">Formulation</p>
                    <h2 className="font-display text-3xl md:text-4xl text-forest-deep">Key Ingredients</h2>
                    <div className="h-px w-16 bg-gold mx-auto mt-6" />
                  </div>
                </Reveal>
                <div className="flex flex-wrap justify-center gap-10">
                  {product.ingredients.map((ing, idx) => (
                    <Reveal key={ing.name} delay={idx * 90}>
                      <div className="flex flex-col items-center text-center gap-4 w-[240px] max-w-full group">
                        <div className="w-16 h-16 rounded-full border border-border flex items-center justify-center text-gold bg-sand group-hover:bg-gold group-hover:text-white transition-colors duration-500 shadow-sm">
                          <Leaf size={22} strokeWidth={1.2} />
                        </div>
                        <div>
                          <h3 className="font-display text-xl text-forest-deep mb-2">{ing.name}</h3>
                          <p className="text-xs font-light text-forest-deep/70 leading-relaxed px-2">{ing.desc}</p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            )}

            {/* Why Choose This Product */}
            {product.whyChoose && product.whyChoose.length > 0 && (
              <div className="bg-forest-deep text-ivory p-12 md:p-20 rounded-2xl relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
                <Reveal>
                  <div className="text-center max-w-2xl mx-auto mb-16 relative z-10">
                    <p className="text-[0.65rem] uppercase tracking-[0.4em] text-gold mb-3">The House Standard</p>
                    <h2 className="font-display text-3xl md:text-4xl text-ivory">Why Choose {product.name}?</h2>
                  </div>
                </Reveal>
                <div className="flex flex-wrap justify-center gap-6 relative z-10">
                  {product.whyChoose.map((wc, idx) => (
                    <Reveal key={wc.title} delay={idx * 100}>
                      <div className="border border-ivory/10 p-8 flex flex-col items-center text-center bg-ivory/5 rounded-xl w-[280px] max-w-full h-full hover:bg-gold/10 transition-colors duration-500">
                        <ShieldCheck size={28} className="text-gold mb-5" strokeWidth={1.2} />
                        <h3 className="font-display text-xl text-ivory mb-3">{wc.title}</h3>
                        <p className="text-xs font-light text-ivory/70 leading-relaxed">{wc.desc}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            )}

            {/* The Ritual / How to Use (Vertical Layout) */}
            {product.ritual && product.ritual.length > 0 && (
              <div className="max-w-3xl mx-auto py-10">
                <Reveal>
                  <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sand text-gold mb-4 border border-border">
                      <Clock size={20} strokeWidth={1.2} />
                    </div>
                    <p className="eyebrow text-gold mb-2">The Ritual</p>
                    <h2 className="font-display text-3xl md:text-4xl text-forest-deep">How to Use</h2>
                  </div>
                </Reveal>
                <div className="relative pl-6 md:pl-10 space-y-12">
                  {/* Elegant vertical connecting line */}
                  <div className="absolute left-[38px] md:left-[54px] top-6 bottom-6 w-px bg-border hidden sm:block" />
                  
                  {product.ritual.map((step, idx) => (
                    <Reveal key={idx} delay={idx * 150}>
                      <div className="relative flex items-start gap-6 md:gap-10 group">
                        {/* Luxury Number Circle */}
                        <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 shrink-0 rounded-full bg-ivory border border-gold flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:bg-gold transition-all duration-500">
                          <span className="font-display text-xl md:text-2xl text-gold group-hover:text-white transition-colors duration-500">
                            0{idx + 1}
                          </span>
                        </div>
                        {/* Text Content */}
                        <div className="flex-1 pt-2 md:pt-4">
                          <p className="text-sm md:text-lg font-light text-forest-deep leading-relaxed">
                            {step}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>
      </main>

      {/* Floating WhatsApp Concierge Button */}
      <a
        href={whatsappUrl}
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