import { Link, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Check, ArrowRight, Lock, Landmark, Wallet, ShoppingBag } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { useCart } from "@/contexts/CartContext";
import { formatLKR, imageFor } from "@/data/products";

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

export default function CheckoutPage() {
  const { lines, subtotal, shipping, total, clear } = useCart();
  const navigate = useNavigate();
  const [placed, setPlaced] = useState(false);
  const [reference] = useState(() => `AW-${Math.random().toString(36).slice(2, 7).toUpperCase()}`);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    setPlaced(true);
    clear();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col relative overflow-hidden">
      {/* Subtle background glow for luxury feel */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      
      <SiteHeader />
      
      <main className="flex-1 w-full pt-[120px] md:pt-[160px] pb-24 md:pb-32 relative z-10">
        <div className="mx-auto max-w-screen-xl px-6 md:px-12">
          
          <Reveal>
            <div className="flex flex-col items-center text-center mb-16">
              <div className="flex items-center gap-3 mb-4 text-gold">
                <Lock size={14} strokeWidth={1.5} />
                <p className="text-[0.65rem] uppercase tracking-[0.4em]">Secure Concierge</p>
              </div>
              <h1 className="font-display text-4xl leading-tight text-forest-deep md:text-5xl lg:text-6xl">
                {placed ? "Your Curation is Confirmed." : "Complete your order."}
              </h1>
            </div>
          </Reveal>

          {placed ? (
            <Reveal delay={120}>
              <div className="mt-8 border border-border bg-ivory/80 backdrop-blur-sm p-10 md:p-20 text-center shadow-2xl max-w-3xl mx-auto relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#d4af37] via-[#e6cf8b] to-[#d4af37]" />
                
                <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-forest-deep text-gold shadow-xl mb-8 border-4 border-ivory">
                  <Check size={32} strokeWidth={1.5} />
                </span>
                <p className="font-display text-3xl md:text-4xl text-forest-deep">
                  Order Reference: <span className="text-gold italic">{reference}</span>
                </p>
                <p className="mx-auto mt-6 max-w-md text-sm md:text-base font-light leading-relaxed text-forest-deep/70">
                  Our concierge team will contact you by phone within one working day to arrange delivery. Every formulation is hand-packed with absolute care in Colombo.
                </p>
                <Link 
                  to="/products" 
                  className="mt-12 group inline-flex items-center justify-center gap-4 bg-forest-deep px-10 py-5 text-[0.65rem] uppercase tracking-[0.35em] text-ivory transition-all duration-700 hover:bg-gold hover:text-forest-deep shadow-md"
                >
                  Return to Apothecary
                  <ArrowRight size={14} className="transition-transform duration-700 group-hover:translate-x-2" />
                </Link>
              </div>
            </Reveal>
          ) : lines.length === 0 ? (
            <Reveal delay={120}>
              <div className="mt-8 border border-border bg-ivory/80 backdrop-blur-sm p-12 md:p-24 text-center shadow-lg max-w-3xl mx-auto">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-sand text-gold mb-8">
                  <ShoppingBag size={36} strokeWidth={1} />
                </div>
                <p className="font-display text-3xl md:text-4xl text-forest-deep">Your curation awaits.</p>
                <p className="mt-4 text-base font-light text-forest-deep/60">
                  Your bag is currently empty. Discover our natural remedies.
                </p>
                <button 
                  onClick={() => navigate({ to: "/products" })} 
                  className="mt-10 inline-flex items-center justify-center border border-forest-deep px-10 py-4 text-[0.65rem] uppercase tracking-[0.35em] text-forest-deep transition-all duration-700 hover:bg-forest-deep hover:text-ivory cursor-pointer"
                >
                  Explore the Collection
                </button>
              </div>
            </Reveal>
          ) : (
            <div className="grid gap-12 lg:gap-16 lg:grid-cols-12 items-start">
              
              {/* Left Form Section */}
              <div className="lg:col-span-7 xl:col-span-7">
                <Reveal delay={100}>
                  <form onSubmit={onSubmit} className="space-y-14 bg-ivory p-8 md:p-12 border border-border shadow-sm">
                    
                    {/* Section 1 */}
                    <div className="relative">
                      <div className="flex items-center gap-3 mb-8">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-forest-deep text-gold text-xs font-display">1</span>
                        <h3 className="font-display text-2xl text-forest-deep">Guest Details</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 pl-9">
                        <FloatingInput id="name" label="Full Name" type="text" full />
                        <FloatingInput id="email" label="Email Address" type="email" />
                        <FloatingInput id="phone" label="Mobile Number" type="tel" />
                      </div>
                    </div>

                    <div className="h-px w-full bg-border" />

                    {/* Section 2 */}
                    <div className="relative">
                      <div className="flex items-center gap-3 mb-8">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-forest-deep text-gold text-xs font-display">2</span>
                        <h3 className="font-display text-2xl text-forest-deep">Destination</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 pl-9">
                        <FloatingInput id="address" label="Street Address" type="text" full />
                        <FloatingInput id="city" label="City" type="text" />
                        <FloatingInput id="district" label="District / Province" type="text" />
                      </div>
                    </div>

                    <div className="h-px w-full bg-border" />

                    {/* Section 3 */}
                    <div className="relative">
                      <div className="flex items-center gap-3 mb-8">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-forest-deep text-gold text-xs font-display">3</span>
                        <h3 className="font-display text-2xl text-forest-deep">Settlement</h3>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pl-9">
                        {/* Luxury Radio Cards */}
                        <label className="group relative flex cursor-pointer flex-col border border-border bg-white p-6 transition-all duration-500 hover:border-gold hover:shadow-md">
                          <input type="radio" name="payment" defaultChecked className="peer sr-only" />
                          <div className="absolute top-4 right-4 h-4 w-4 rounded-full border border-forest-deep/20 peer-checked:border-gold transition-colors flex items-center justify-center">
                            <div className="h-2 w-2 rounded-full bg-gold opacity-0 scale-50 peer-checked:opacity-100 peer-checked:scale-100 transition-all duration-300" />
                          </div>
                          <Wallet className="text-gold mb-4" size={24} strokeWidth={1.2} />
                          <span className="block text-sm font-medium text-forest-deep tracking-wide mb-1.5 group-hover:text-gold transition-colors">Cash on Delivery</span>
                          <span className="block text-xs font-light text-forest-deep/60 leading-relaxed">Settle in cash upon doorstep delivery.</span>
                          
                          {/* Active border highlight */}
                          <div className="absolute inset-0 border border-gold opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity duration-300" />
                        </label>

                        <label className="group relative flex cursor-pointer flex-col border border-border bg-white p-6 transition-all duration-500 hover:border-gold hover:shadow-md">
                          <input type="radio" name="payment" className="peer sr-only" />
                          <div className="absolute top-4 right-4 h-4 w-4 rounded-full border border-forest-deep/20 peer-checked:border-gold transition-colors flex items-center justify-center">
                            <div className="h-2 w-2 rounded-full bg-gold opacity-0 scale-50 peer-checked:opacity-100 peer-checked:scale-100 transition-all duration-300" />
                          </div>
                          <Landmark className="text-gold mb-4" size={24} strokeWidth={1.2} />
                          <span className="block text-sm font-medium text-forest-deep tracking-wide mb-1.5 group-hover:text-gold transition-colors">Bank Transfer</span>
                          <span className="block text-xs font-light text-forest-deep/60 leading-relaxed">Direct deposit upon confirmation.</span>
                          
                          {/* Active border highlight */}
                          <div className="absolute inset-0 border border-gold opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity duration-300" />
                        </label>
                      </div>
                    </div>

                    <div className="pt-6">
                      <button 
                        type="submit" 
                        className="group relative w-full overflow-hidden bg-forest-deep py-5 text-[0.65rem] uppercase tracking-[0.4em] text-ivory transition-all duration-500 shadow-xl hover:shadow-2xl cursor-pointer font-medium"
                      >
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
                        <span className="relative flex items-center justify-center gap-4 group-hover:text-gold transition-colors duration-500">
                          Finalize Order <ArrowRight size={14} className="transition-transform duration-500 group-hover:translate-x-2" />
                        </span>
                      </button>
                    </div>
                  </form>
                </Reveal>
              </div>

              {/* Right Order Summary Section */}
              <div className="lg:col-span-5 xl:col-span-5 lg:sticky lg:top-[140px]">
                <Reveal delay={200}>
                  <aside className="relative bg-forest-deep text-ivory p-8 md:p-12 shadow-2xl overflow-hidden border border-forest">
                    {/* Luxury ambient glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
                    
                    <div className="relative z-10">
                      <p className="text-[0.6rem] uppercase tracking-[0.4em] text-gold mb-8 flex items-center gap-3">
                        <ShoppingBag size={14} /> Order Summary
                      </p>
                      
                      <ul className="divide-y divide-ivory/10 max-h-[40vh] overflow-y-auto pr-4 scrollbar-hide">
                        {lines.map((l) => (
                          <li key={l.id} className="flex gap-5 py-6">
                            <div className="relative">
                              <img src={imageFor(l.product.slug)} alt={l.product.name} className="h-24 w-16 shrink-0 bg-sand object-cover border border-ivory/10" />
                              <span className="absolute -top-2.5 -right-2.5 flex h-6 w-6 items-center justify-center rounded-full bg-gold text-[0.6rem] font-medium text-forest-deep shadow-lg">
                                {l.qty}
                              </span>
                            </div>
                            <div className="flex flex-1 flex-col justify-center">
                              <p className="font-display text-lg leading-snug text-ivory tracking-wide line-clamp-2">{l.product.name}</p>
                              <p className="mt-1 text-[0.6rem] uppercase tracking-[0.2em] text-gold-soft">{l.product.size}</p>
                              <span className="mt-3 text-xs font-light tracking-widest text-ivory/80">{formatLKR(l.lineTotal)}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mt-8 relative">
                        {/* Dotted separator */}
                        <div className="absolute top-0 left-0 w-full border-t border-dashed border-ivory/20" />
                        
                        <dl className="space-y-4 pt-8 text-xs font-light tracking-wide">
                          <div className="flex justify-between text-ivory/70">
                            <dt>Subtotal</dt>
                            <dd>{formatLKR(subtotal)}</dd>
                          </div>
                          <div className="flex justify-between text-ivory/70">
                            <dt>Delivery</dt>
                            <dd>{shipping === 0 ? <span className="text-gold italic">Complimentary</span> : formatLKR(shipping)}</dd>
                          </div>
                          
                          <div className="absolute bottom-12 left-0 w-full border-t border-dashed border-ivory/20" />
                          
                          <div className="flex justify-between pt-8 font-display text-2xl text-gold items-end">
                            <dt className="text-sm uppercase tracking-widest text-ivory pb-1">Total</dt>
                            <dd>{formatLKR(total)}</dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </aside>
                </Reveal>
              </div>

            </div>
          )}
        </div>
      </main>

      {/* Floating WhatsApp Concierge Button */}
      <a
        href="https://api.whatsapp.com/send/?phone=94766502171&text=Hello%20Ayurway%20Concierge,%20I%20need%20help%20with%20my%20checkout.&type=phone_number&app_absent=0"
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
      
      {/* Required for the button shimmer effect */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />
    </div>
  );
}

// Elevated Floating Input
function FloatingInput({ label, id, type = "text", full }) {
  return (
    <div className={`relative pt-5 ${full ? "col-span-1 md:col-span-2" : "col-span-1"}`}>
      <input 
        type={type} 
        id={id}
        name={id}
        required
        placeholder={label}
        className="peer w-full bg-white px-4 pb-2 pt-6 border border-border text-forest-deep text-sm focus:outline-none focus:border-gold transition-colors placeholder-transparent shadow-sm"
      />
      <label 
        htmlFor={id} 
        className="absolute left-4 top-4 text-[0.55rem] text-forest-deep/50 uppercase tracking-[0.2em] transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-forest-deep/50 peer-placeholder-shown:text-xs peer-focus:top-4 peer-focus:-translate-y-0 peer-focus:text-[0.55rem] peer-focus:text-gold cursor-text pointer-events-none"
      >
        {label}
      </label>
    </div>
  );  
}