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
      
      {/* Significantly increased top padding to seamlessly clear the larger luxury header */}
      <main className="flex-1 w-full pt-[160px] md:pt-[200px] pb-24">
        <div className="mx-auto max-w-screen-xl px-6 md:px-12">
          
          <button 
            onClick={handleBack}
            className="mb-8 inline-flex items-center gap-3 text-[0.6rem] uppercase tracking-[0.3em] text-forest-deep hover:text-gold transition-colors bg-ivory/80 backdrop-blur-md px-5 py-3 shadow-sm border border-border cursor-pointer group"
          >
            <ArrowLeft size={14} className="transition-transform duration-300 group-hover:-translate-x-1" /> 
            Back to {product.category}
          </button>

          {/* Top Grid: Image and Main Actions */}
          <div className="grid lg:grid-cols-12 gap-10 md:gap-16 items-start">
            
            {/* Left: Sticky Image Showcase */}
            <div className="lg:col-span-6 lg:sticky lg:top-[140px]">
              <Reveal>
                <div className="relative overflow-hidden bg-sand aspect-[4/5] max-w-lg mx-auto shadow-2xl border border-border group">
                  <img
                    src={imageFor(product.slug)}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-[3000ms] hover:scale-105"
                  />
                  
                  {product.bestseller && (
                    <div className="absolute bottom-6 left-6 z-10 bg-ivory/95 backdrop-blur-sm px-5 py-2.5 text-[0.55rem] uppercase tracking-[0.3em] text-forest shadow-lg border border-border">
                      House Signature
                    </div>
                  )}
                </div>
              </Reveal>
            </div>

            {/* Right: Editorial Product Details & Purchase Box */}
            <div className="lg:col-span-6 bg-ivory/90 backdrop-blur-sm p-8 md:p-12 lg:p-14 border border-border shadow-xl flex flex-col justify-center relative overflow-hidden">
              {/* Subtle background glow */}
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
              
              <Reveal delay={100} className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-4">
                    <div className="h-px w-8 bg-gold" />
                    <p className="text-[0.6rem] uppercase tracking-[0.4em] text-gold">{product.category}</p>
                  </div>
                  {product.stars && (
                    <div className="flex items-center gap-1.5 text-gold">
                      <Star size={14} fill="currentColor" strokeWidth={0} />
                      <span className="text-xs font-medium text-forest-deep">{product.stars.toFixed(1)}</span>
                    </div>
                  )}
                </div>
                
                <h1 className="font-display text-4xl leading-[1.1] text-forest-deep md:text-5xl">
                  {product.name}
                </h1>
                
                {product.about && (
                  <p className="mt-6 text-sm md:text-base font-light leading-relaxed text-forest-deep/75 line-clamp-3">
                    {product.about}
                  </p>
                )}

                {/* Styled Variant Selector for Nuts, Seeds & Berries */}
                {product.variants && product.variants.length > 0 && (
                  <div className="mt-10 pt-8 border-t border-border/60">
                    <p className="text-[0.55rem] uppercase tracking-[0.4em] text-forest-deep/60 mb-5">Select Quantity / Weight</p>
                    <div className="flex flex-wrap gap-3">
                      {product.variants.map((v) => (
                        <button
                          key={v.size}
                          onClick={() => setSelectedVariant(v)}
                          className={`flex-1 min-w-[80px] sm:flex-none px-5 py-3 text-[0.65rem] uppercase tracking-[0.25em] transition-all duration-300 cursor-pointer border shadow-sm ${
                            selectedVariant?.size === v.size
                              ? "bg-forest-deep text-gold border-forest-deep scale-[1.02] shadow-md font-medium"
                              : "bg-white text-forest-deep border-border hover:border-gold hover:text-gold"
                          }`}
                        >
                          {v.size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-10 pt-8 border-t border-border/60">
                  <div className="flex items-end justify-between mb-8">
                    <span className="font-display text-4xl text-forest-deep tracking-wide">
                      {formatLKR(activePrice)}
                    </span>
                    <span className="text-[0.65rem] uppercase tracking-[0.3em] text-clay font-medium">
                      {activeSize}
                    </span>
                  </div>

                  {/* Refined Action Area - Using Padding instead of Fixed Heights to prevent mobile squish */}
                  <div className="flex flex-col sm:flex-row items-stretch gap-4 w-full">
                    {/* Quantity Selector */}
                    <div className="flex items-center justify-between border border-border bg-white px-4 py-4 w-full sm:w-[140px] shadow-sm transition-colors hover:border-gold/50 shrink-0">
                      <button 
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="text-forest-deep/50 hover:text-gold transition-colors p-1 cursor-pointer flex items-center justify-center"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={16} strokeWidth={1.5} />
                      </button>
                      <span className="text-sm font-medium text-forest-deep w-8 text-center">
                        {quantity}
                      </span>
                      <button 
                        onClick={() => setQuantity(Math.min(99, quantity + 1))}
                        className="text-forest-deep/50 hover:text-gold transition-colors p-1 cursor-pointer flex items-center justify-center"
                        aria-label="Increase quantity"
                      >
                        <Plus size={16} strokeWidth={1.5} />
                      </button>
                    </div>

                    {/* Add to Cart Button */}
                    <button
                      onClick={handleAddToCart}
                      className="group flex-1 w-full bg-forest-deep text-ivory hover:bg-gold hover:text-forest-deep py-4 px-6 flex items-center justify-center gap-3 text-[0.65rem] uppercase tracking-[0.3em] font-medium transition-all duration-500 shadow-xl hover:shadow-none cursor-pointer border border-transparent hover:border-gold"
                    >
                      <ShoppingBag size={16} strokeWidth={1.5} className="transition-transform duration-500 group-hover:-translate-y-0.5" />
                      <span>Add to Cart</span>
                    </button>
                  </div>

                  {/* Ask on WhatsApp */}
                  <div className="mt-4">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-4 flex items-center justify-center gap-3 border border-border bg-transparent text-forest-deep hover:border-[#25D366] hover:text-[#25D366] hover:bg-[#25D366]/5 transition-all duration-500 text-[0.65rem] uppercase tracking-[0.3em] font-medium shadow-sm"
                    >
                      <WhatsAppIcon />
                      <span>Ask on WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* Quick Highlights */}
                <div className="mt-12 pt-8 border-t border-border/60">
                  <p className="text-[0.55rem] uppercase tracking-[0.4em] text-forest-deep/60 mb-6 text-center">The Standards</p>
                  <ul className="space-y-4 text-xs md:text-sm font-light text-forest-deep/80">
                    <li className="flex items-center justify-center gap-4">
                      <Leaf size={16} className="text-gold shrink-0" strokeWidth={1.5} />
                      <span>100% pure natural origin botanicals.</span>
                    </li>
                    <li className="flex items-center justify-center gap-4">
                      <ShieldCheck size={16} className="text-gold shrink-0" strokeWidth={1.5} />
                      <span>Free from parabens, synthetic dyes, and heavy chemicals.</span>
                    </li>
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Detailed Editorial Sections (About, Benefits, Ingredients, Why Choose, Ritual) */}
          <div className="mt-32 space-y-32 border-t border-border pt-24">
            
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
              <div className="bg-sand rounded-xl p-8 md:p-16 lg:p-20 relative overflow-hidden shadow-inner border border-border/50">
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
                      <div className="bg-ivory/80 backdrop-blur-sm p-8 rounded-lg border border-border flex flex-col items-center text-center shadow-sm w-[300px] max-w-full h-full hover:border-gold hover:shadow-lg transition-all duration-500">
                        <div className="w-14 h-14 rounded-full bg-forest-deep/5 flex items-center justify-center mb-6 text-gold border border-gold/20">
                          <CheckCircle2 size={22} strokeWidth={1.5} />
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
                      <div className="flex flex-col items-center text-center gap-5 w-[240px] max-w-full group">
                        <div className="w-20 h-20 rounded-full border border-border flex items-center justify-center text-gold bg-sand group-hover:bg-gold group-hover:text-white transition-colors duration-500 shadow-md">
                          <Leaf size={26} strokeWidth={1.2} />
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
              <div className="bg-forest-deep text-ivory p-10 md:p-20 rounded-2xl relative overflow-hidden shadow-2xl border border-forest">
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
                      <div className="border border-ivory/10 p-8 flex flex-col items-center text-center bg-ivory/5 rounded-xl w-[280px] max-w-full h-full hover:bg-gold hover:text-forest-deep transition-all duration-500 group">
                        <ShieldCheck size={32} className="text-gold mb-6 group-hover:text-forest-deep transition-colors" strokeWidth={1.2} />
                        <h3 className="font-display text-xl text-ivory group-hover:text-forest-deep transition-colors mb-3">{wc.title}</h3>
                        <p className="text-xs font-light text-ivory/70 group-hover:text-forest-deep/80 transition-colors leading-relaxed">{wc.desc}</p>
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
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-sand text-gold mb-5 border border-border shadow-sm">
                      <Clock size={24} strokeWidth={1.2} />
                    </div>
                    <p className="eyebrow text-gold mb-2">The Ritual</p>
                    <h2 className="font-display text-3xl md:text-4xl text-forest-deep">How to Use</h2>
                  </div>
                </Reveal>
                <div className="relative pl-4 md:pl-10 space-y-12">
                  {/* Elegant vertical connecting line */}
                  <div className="absolute left-[38px] md:left-[62px] top-8 bottom-8 w-px bg-border hidden sm:block" />
                  
                  {product.ritual.map((step, idx) => (
                    <Reveal key={idx} delay={idx * 150}>
                      <div className="relative flex items-start gap-6 md:gap-10 group">
                        {/* Luxury Number Circle */}
                        <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 shrink-0 rounded-full bg-ivory border border-gold flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-gold transition-all duration-500">
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
        className="fixed bottom-6 md:bottom-8 right-6 md:right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-transform duration-500 hover:scale-110 focus:outline-none group animate-bounce"
      >
        <WhatsAppIcon />
        <span className="absolute right-full mr-3 whitespace-nowrap bg-forest-deep text-ivory text-[0.6rem] uppercase tracking-[0.25em] px-4 py-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 shadow-md pointer-events-none hidden md:block">
          Chat with Concierge
        </span>
      </a>

      <SiteFooter />
    </div>
  );
}