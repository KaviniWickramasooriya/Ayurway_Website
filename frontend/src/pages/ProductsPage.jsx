import { useMemo, useState } from "react";
import { useSearch } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { categories, products } from "@/data/products";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const searchParams = useSearch({ strict: false });
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
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      
      <section className="relative bg-forest-deep px-6 pb-20 pt-40 text-ivory overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 mx-auto max-w-screen-2xl md:px-6">
          <Reveal>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-8 bg-gold" />
              <p className="text-[0.65rem] uppercase tracking-[0.5em] text-gold-soft">{products.length} Master Formulations</p>
            </div>
            {/* Reduced font size for luxury balance */}
            <h1 className="mt-2 max-w-4xl font-display text-4xl leading-[1.1] md:text-6xl lg:text-7xl">
              The complete <br/><span className="italic text-gold-gradient font-light">apothecary</span>
            </h1>
            <p className="mt-8 max-w-xl text-base font-light leading-relaxed text-ivory/70">
              Blended by hand in Sri Lanka. Island-wide delivery is complimentary on curations above LKR 10,000.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="sticky top-[89px] md:top-[105px] z-40 border-b border-border bg-ivory/95 backdrop-blur-lg shadow-sm">
        <div className="mx-auto flex max-w-screen-2xl gap-10 overflow-x-auto px-6 md:px-12 py-5 scrollbar-hide">
          {["All", ...categories].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap pb-1 text-[0.65rem] uppercase tracking-[0.3em] transition-all duration-500 relative ${
                activeCategory === category
                  ? "text-forest-deep font-medium"
                  : "text-clay hover:text-forest-deep"
              }`}
            >
              {category}
              <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-gold transition-transform duration-500 origin-left ${activeCategory === category ? "scale-x-100" : "scale-x-0"}`} />
            </button>
          ))}
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

      <SiteFooter />
    </div>
  );
}