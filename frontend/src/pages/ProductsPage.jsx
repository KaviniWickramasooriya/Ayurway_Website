import { useMemo, useState, useEffect } from "react";
import { useSearch } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { categories, products } from "@/data/products";

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

export default function ProductsPage() {
  const searchParams = useSearch({ strict: false });
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    if (searchParams.category && categories.includes(searchParams.category)) {
      setActiveCategory(searchParams.category);
    }
  }, [searchParams.category]);
  
  const searchQuery = (searchParams.q || "").toLowerCase();

  const displayedProducts = useMemo(() => {
    let filtered = products;
    
    if (activeCategory !== "All") {
      filtered = filtered.filter((p) => p.category === activeCategory);
    }
    
    if (searchQuery) {
      filtered = filtered.filter((p) => 
        p.name.toLowerCase().includes(searchQuery) || 
        p.category.toLowerCase().includes(searchQuery) ||
        p.notes.some(note => note.toLowerCase().includes(searchQuery))
      );
    }
    
    return filtered;
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-background flex flex-col relative">
      <SiteHeader />
      
      {/* 
        Refined padding to beautifully balance the hero text with the new logo.
      */}
      <section className="relative bg-forest-deep px-6 pb-20 pt-[180px] md:pt-[220px] text-ivory overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 mx-auto max-w-screen-2xl md:px-6 text-center md:text-left">
          <Reveal>
            <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
              <div className="h-px w-8 bg-gold hidden md:block" />
              <p className="text-[0.65rem] uppercase tracking-[0.5em] text-gold-soft">{products.length} Master Formulations</p>
            </div>
            <h1 className="mt-2 md:mt-4 max-w-4xl mx-auto md:mx-0 font-display text-4xl leading-[1.1] md:text-6xl lg:text-7xl">
              The complete <br/><span className="italic text-gold-gradient font-light">apothecary</span>
            </h1>
            <p className="mt-6 md:mt-8 max-w-xl mx-auto md:mx-0 text-sm md:text-base font-light leading-relaxed text-ivory/70">
              Blended by hand in Sri Lanka. Island-wide delivery is complimentary on curations above LKR 10,000.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 
        Calculated precise "sweet spot" so it docks perfectly under the scrolled header 
        without any visible gap and without slipping underneath it.
      */}
      <div className="sticky top-[130px] md:top-[152px] z-40 border-b border-border bg-ivory/95 backdrop-blur-xl shadow-sm transition-all duration-300">
        <div className="mx-auto flex max-w-screen-2xl gap-8 md:gap-10 overflow-x-auto px-6 md:px-12 py-4 md:py-5 scrollbar-hide items-center relative">
          {["All", ...categories].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap pb-1.5 text-[0.65rem] uppercase tracking-[0.3em] transition-all duration-500 relative cursor-pointer ${
                activeCategory === category
                  ? "text-forest-deep font-medium"
                  : "text-clay hover:text-forest-deep"
              }`}
            >
              {category}
              <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-gold transition-transform duration-500 origin-left ${activeCategory === category ? "scale-x-100" : "scale-x-0"}`} />
            </button>
          ))}
          {/* Subtle fade effect on the right side for mobile scrolling hint */}
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-ivory to-transparent md:hidden pointer-events-none" />
        </div>
      </div>

      <main className="mx-auto max-w-screen-2xl px-6 md:px-12 py-20 flex-1 w-full">
        {searchQuery && (
          <Reveal className="mb-12 border-b border-border pb-6">
            <p className="text-sm font-light uppercase tracking-widest text-forest-deep/60">
              Showing results for <span className="font-medium text-forest-deep italic normal-case text-lg">"{searchQuery}"</span>
            </p>
          </Reveal>
        )}

        {displayedProducts.length > 0 ? (
          <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {displayedProducts.map((product, index) => (
              <Reveal key={product.slug} delay={(index % 4) * 100}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-32 text-center">
            <h3 className="font-display text-3xl text-forest-deep italic">No formulations found</h3>
            <p className="mt-3 text-sm font-light text-clay tracking-wide">Please refine your search or select a different category.</p>
          </div>
        )}
      </main>

      {/* Floating WhatsApp Concierge Button */}
      <a
        href="https://api.whatsapp.com/send/?phone=94766502171&text=Hello%20Ayurway%20Concierge,%20I%20would%20like%20to%20place%20an%20order.&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Ayurway Concierge on WhatsApp"
        className="fixed bottom-6 md:bottom-8 right-6 md:right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-transform duration-500 hover:scale-110 focus:outline-none group"
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