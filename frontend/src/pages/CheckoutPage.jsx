import { Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Check, ArrowRight, Lock } from "lucide-react";
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

  const onSubmit = (e) => {
    e.preventDefault();
    setPlaced(true);
    clear();
  };

  return (
    <div className="min-h-screen bg-background flex flex-col relative">
      <SiteHeader />
      
      <main className="flex-1 w-full pt-[120px] md:pt-[150px] pb-24 md:pb-32">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-12">
          
          <Reveal>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-8 bg-gold" />
              <p className="text-[0.65rem] uppercase tracking-[0.4em] text-gold flex items-center gap-2">
                <Lock size={12} /> Secure Checkout
              </p>
            </div>
            <h1 className="font-display text-4xl leading-[1.1] text-forest-deep md:text-5xl lg:text-6xl">
              {placed ? "Thank you." : "Complete your ritual."}
            </h1>
          </Reveal>

          {placed ? (
            <Reveal delay={120}>
              <div className="mt-12 border border-border bg-ivory p-10 md:p-20 text-center luxe-card max-w-3xl mx-auto">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-forest-deep text-gold shadow-lg mb-8">
                  <Check size={28} strokeWidth={1} />
                </span>
                <p className="font-display text-3xl md:text-4xl text-forest-deep">
                  Order {reference} Received
                </p>
                <p className="mx-auto mt-4 max-w-md text-base font-light leading-relaxed text-forest-deep/70">
                  Our concierge team will confirm your order by phone within one working day. Everything is hand-packed with absolute care in Colombo.
                </p>
                <Link 
                  to="/products" 
                  className="mt-10 group inline-flex items-center justify-center gap-4 border border-forest-deep px-9 py-4 text-[0.6rem] uppercase tracking-[0.35em] text-forest-deep transition-all duration-700 hover:bg-forest-deep hover:text-ivory"
                >
                  Return to Apothecary
                  <ArrowRight size={14} className="transition-transform duration-700 group-hover:translate-x-2" />
                </Link>
              </div>
            </Reveal>
          ) : lines.length === 0 ? (
            <Reveal delay={120}>
              <div className="mt-12 border border-border bg-ivory p-12 md:p-24 text-center luxe-card max-w-3xl mx-auto">
                <p className="font-display text-3xl md:text-4xl text-forest-deep italic">Your bag is empty.</p>
                <p className="mt-4 text-base font-light text-forest-deep/60">
                  Add a formulation to begin your order.
                </p>
                <button 
                  onClick={() => navigate({ to: "/products" })} 
                  className="mt-10 inline-flex items-center justify-center border border-forest-deep px-9 py-4 text-[0.6rem] uppercase tracking-[0.35em] text-forest-deep transition-all duration-700 hover:bg-forest-deep hover:text-ivory cursor-pointer"
                >
                  Browse the Collection
                </button>
              </div>
            </Reveal>
          ) : (
            <div className="mt-12 grid gap-12 lg:gap-20 lg:grid-cols-12 items-start">
              
              <div className="lg:col-span-7 xl:col-span-8">
                <Reveal>
                  <form onSubmit={onSubmit} className="space-y-12">
                    
                    <div>
                      <h3 className="font-display text-2xl text-forest-deep mb-6 border-b border-border pb-3">Contact Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                        <FloatingInput id="name" label="Full Name" type="text" full />
                        <FloatingInput id="email" label="Email Address" type="email" />
                        <FloatingInput id="phone" label="Mobile Number" type="tel" />
                      </div>
                    </div>

                    <div>
                      <h3 className="font-display text-2xl text-forest-deep mb-6 border-b border-border pb-3">Delivery Details</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                        <FloatingInput id="address" label="Street Address" type="text" full />
                        <FloatingInput id="city" label="City" type="text" />
                        <FloatingInput id="district" label="District / Province" type="text" />
                      </div>
                    </div>

                    <div>
                      <h3 className="font-display text-2xl text-forest-deep mb-6 border-b border-border pb-3">Payment Method</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <label className="group relative flex cursor-pointer items-start gap-4 border border-border bg-ivory p-5 transition-all duration-500 hover:border-gold shadow-sm">
                          <div className="relative flex items-center justify-center mt-0.5">
                            <input type="radio" name="payment" defaultChecked className="peer sr-only" />
                            <div className="h-4 w-4 rounded-full border border-forest-deep/30 peer-checked:border-gold transition-colors" />
                            <div className="absolute h-2 w-2 rounded-full bg-gold opacity-0 scale-50 peer-checked:opacity-100 peer-checked:scale-100 transition-all duration-300" />
                          </div>
                          <div>
                            <span className="block text-sm font-medium text-forest-deep tracking-wide mb-1">Cash on Delivery</span>
                            <span className="block text-xs font-light text-forest-deep/60 leading-relaxed">Pay in cash upon doorstep delivery.</span>
                          </div>
                        </label>

                        <label className="group relative flex cursor-pointer items-start gap-4 border border-border bg-ivory p-5 transition-all duration-500 hover:border-gold shadow-sm">
                          <div className="relative flex items-center justify-center mt-0.5">
                            <input type="radio" name="payment" className="peer sr-only" />
                            <div className="h-4 w-4 rounded-full border border-forest-deep/30 peer-checked:border-gold transition-colors" />
                            <div className="absolute h-2 w-2 rounded-full bg-gold opacity-0 scale-50 peer-checked:opacity-100 peer-checked:scale-100 transition-all duration-300" />
                          </div>
                          <div>
                            <span className="block text-sm font-medium text-forest-deep tracking-wide mb-1">Bank Transfer</span>
                            <span className="block text-xs font-light text-forest-deep/60 leading-relaxed">Direct account deposit upon confirmation.</span>
                          </div>
                        </label>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button 
                        type="submit" 
                        className="group w-full flex items-center justify-center gap-4 bg-forest-deep py-5 text-[0.6rem] uppercase tracking-[0.35em] text-ivory hover:bg-gold transition-colors duration-500 shadow-xl hover:shadow-none cursor-pointer"
                      >
                        Confirm Order <ArrowRight size={14} className="transition-transform duration-500 group-hover:translate-x-2" />
                      </button>
                    </div>
                  </form>
                </Reveal>
              </div>

              <div className="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-[110px]">
                <Reveal delay={150}>
                  <aside className="bg-forest-deep text-ivory p-8 md:p-10 border border-forest">
                    <p className="text-[0.6rem] uppercase tracking-[0.35em] text-gold mb-6">Order Summary</p>
                    
                    <ul className="divide-y divide-ivory/10 max-h-[45vh] overflow-y-auto pr-2 scrollbar-hide">
                      {lines.map((l) => (
                        <li key={l.slug} className="flex gap-5 py-5">
                          <div className="relative">
                            <img src={imageFor(l.slug)} alt={l.product.name} className="h-20 w-16 shrink-0 bg-sand object-cover opacity-90" />
                            <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-gold text-[0.5rem] font-medium text-forest-deep shadow-sm">
                              {l.qty}
                            </span>
                          </div>
                          <div className="flex flex-1 flex-col justify-center">
                            <p className="font-display text-lg leading-snug text-ivory tracking-wide line-clamp-2">{l.product.name}</p>
                            <p className="mt-1 text-[0.55rem] uppercase tracking-[0.2em] text-gold-soft">{l.product.size}</p>
                            <span className="mt-2 text-xs font-light tracking-widest text-ivory/80">{formatLKR(l.lineTotal)}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                    
                    <dl className="mt-6 space-y-3 border-t border-ivory/20 pt-6 text-xs font-light tracking-wide">
                      <div className="flex justify-between text-ivory/70">
                        <dt>Subtotal</dt>
                        <dd>{formatLKR(subtotal)}</dd>
                      </div>
                      <div className="flex justify-between text-ivory/70">
                        <dt>Delivery</dt>
                        <dd>{shipping === 0 ? "Complimentary" : formatLKR(shipping)}</dd>
                      </div>
                      <div className="flex justify-between border-t border-ivory/20 mt-4 pt-4 font-display text-2xl text-gold items-end">
                        <dt className="text-base text-ivory pb-0.5">Total</dt>
                        <dd>{formatLKR(total)}</dd>
                      </div>
                    </dl>
                  </aside>
                </Reveal>
              </div>

            </div>
          )}
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

function FloatingInput({ label, id, type = "text", full }) {
  return (
    <div className={`relative pt-4 ${full ? "col-span-1 md:col-span-2" : "col-span-1"}`}>
      <input 
        type={type} 
        id={id}
        name={id}
        required
        placeholder={label}
        className="peer w-full bg-transparent border-b border-forest-deep/20 py-2 text-forest-deep text-base font-light focus:outline-none focus:border-gold transition-colors placeholder-transparent"
      />
      <label 
        htmlFor={id} 
        className="absolute left-0 top-0 text-[0.6rem] text-forest-deep/60 uppercase tracking-[0.2em] transition-all duration-300 peer-placeholder-shown:top-6 peer-placeholder-shown:text-forest-deep/40 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-[0.6rem] peer-focus:text-gold cursor-text"
      >
        {label}
      </label>
    </div>
  );  
}