import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import { Menu, ShoppingBag, X, Search } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const leftLinks = [
  { to: "/products", label: "Collection" },
  { to: "/story", label: "About us" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef(null);
  
  const { count, open: openCart, lastAdded } = useCart();
  const location = useLocation();
  const navigate = useNavigate();
  
  const isProductsPage = location.pathname === "/products";
  
  // Exclude contact from isLightPage so it starts with ivory text on the dark hero background
  const isLightPage = location.pathname === "/checkout" || location.pathname.startsWith("/product/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu opens
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  // Focus search input when opened
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    navigate({ to: "/products", search: { q: query }, replace: true });
  };

  const tone = scrolled || isLightPage ? "text-forest-deep" : "text-ivory";
  const headerBg = scrolled 
    ? "bg-ivory/95 backdrop-blur-lg border-b border-border py-4 shadow-sm" 
    : "bg-transparent border-b border-transparent py-8";

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${headerBg}`}>
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-6 md:px-12">
        
        {/* Left Nav */}
        <nav className="hidden flex-1 items-center gap-10 md:flex">
          {leftLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-[0.65rem] uppercase tracking-[0.35em] transition-colors duration-500 hover:text-gold relative py-1 ${tone}`}
              activeProps={{ className: "text-gold font-medium after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-gold" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Center Logo */}
        <Link to="/" className="flex flex-1 flex-col items-center justify-center leading-none text-center z-50 relative group">
          <span className={`font-display text-3xl md:text-4xl tracking-[0.3em] transition-colors duration-700 group-hover:text-gold ${tone}`}>
            AYURWAY
          </span>
          <span className={`mt-2 text-[0.55rem] uppercase tracking-[0.5em] transition-colors duration-700 ${scrolled || isLightPage ? "text-forest/60" : "text-ivory/70"}`}>
            Ceylon Ayurveda
          </span>
        </Link>

        {/* Right Actions */}
        <div className="flex flex-1 items-center justify-end gap-6 md:gap-8">
          
          {/* Dynamic Search (Only on /products) */}
          <div className="hidden md:flex items-center relative">
            {isProductsPage && (
              <input 
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Search formulations..."
                className={`absolute right-8 bg-transparent border-b outline-none text-sm transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] px-2 pb-1 ${
                  searchOpen ? "w-56 opacity-100 pointer-events-auto" : "w-0 opacity-0 pointer-events-none"
                } ${
                  scrolled || isLightPage
                    ? "border-forest-deep/30 text-forest-deep placeholder:text-forest-deep/40 focus:border-forest-deep" 
                    : "border-ivory/50 text-ivory placeholder:text-ivory/60 focus:border-ivory"
                }`}
              />
            )}
            <button 
              onClick={() => isProductsPage ? setSearchOpen(!searchOpen) : navigate({ to: '/products' })}
              aria-label="Search" 
              className={`transition-colors duration-500 hover:text-gold ${tone} z-10`}
            >
              {searchOpen && isProductsPage ? <X size={20} strokeWidth={1.2} /> : <Search size={20} strokeWidth={1.2} />}
            </button>
          </div>

          <Link
            to="/contact"
            className={`hidden md:inline-block border px-6 py-2.5 text-[0.6rem] uppercase tracking-[0.3em] transition-all duration-700 ${
              location.pathname === "/contact"
                ? "bg-gold text-forest-deep border-gold font-medium"
                : scrolled || isLightPage
                  ? "border-forest text-forest-deep hover:bg-forest hover:text-ivory"
                  : "border-ivory/40 text-ivory hover:bg-ivory hover:text-forest-deep"
            }`}
          >
            Enquire
          </Link>
          
          {/* Cart */}
          <button
            onClick={openCart}
            aria-label={`Open bag, ${count} items`}
            className={`relative transition-colors duration-500 hover:text-gold ${tone} ${lastAdded ? "cart-pulse" : ""}`}
          >
            <ShoppingBag size={20} strokeWidth={1.2} />
            {count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-gold px-1 text-[0.55rem] font-medium tracking-normal text-forest-deep shadow-sm">
                {count}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setOpen((v) => !v)} aria-label="Toggle menu" className={`md:hidden transition-colors ${open ? "text-ivory" : tone} z-[120] relative`}>
            {open ? <X size={24} strokeWidth={1.2} /> : <Menu size={24} strokeWidth={1.2} />}
          </button>
        </div>
      </div>

      {/* Mobile Luxury Overlay */}
      <div className={`fixed inset-0 h-screen w-screen bg-forest-deep z-[100] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden flex flex-col items-center justify-center ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none translate-y-[-100vh]'}`}>
        <div className="flex flex-col items-center justify-center space-y-8 px-6 text-center">
          <Link to="/" onClick={() => setOpen(false)} className={`font-display text-2xl tracking-widest transition-colors ${location.pathname === "/" ? "text-gold italic" : "text-ivory hover:text-gold"}`}>Home</Link>
          <Link to="/products" onClick={() => setOpen(false)} className={`font-display text-2xl tracking-widest transition-colors ${location.pathname === "/products" ? "text-gold italic" : "text-ivory hover:text-gold"}`}>Collection</Link>
          <Link to="/story" onClick={() => setOpen(false)} className={`font-display text-2xl tracking-widest transition-colors ${location.pathname === "/story" ? "text-gold italic" : "text-ivory hover:text-gold"}`}>About us</Link>
          <Link to="/contact" onClick={() => setOpen(false)} className={`font-display text-2xl tracking-widest transition-colors ${location.pathname === "/contact" ? "text-gold italic" : "text-ivory hover:text-gold"}`}>Enquire</Link>
          <div className="w-12 h-px bg-gold/50 my-4" />
          <a href="mailto:info@ayurway.lk" onClick={() => setOpen(false)} className="text-[0.65rem] uppercase tracking-[0.35em] text-gold-soft">info@ayurway.lk</a>
        </div>
      </div>
    </header>
  );
}