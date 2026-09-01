import { Link } from "@tanstack/react-router";
import logo from "@/assets/ayurway-logo.png";

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);
const YoutubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2C5.12 19.5 12 19.5 12 19.5s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
);

export function SiteFooter() {
  return (
    <footer id="enquire" className="bg-forest-deep text-ivory border-t border-ivory/10">
      <div className="mx-auto grid max-w-screen-2xl grid-cols-2 gap-x-6 gap-y-12 px-6 py-12 md:px-12 md:py-16 lg:grid-cols-12 lg:gap-12 lg:py-20">
        
        {/* Brand Info with Logo correctly aligned to the left */}
        <div className="col-span-2 lg:col-span-4 flex flex-col items-start text-left">
          <Link to="/" className="inline-block mb-2" aria-label="Ayurway home">
            <img 
              src={logo} 
              alt="Ayurway" 
              className="w-[140px] md:w-[170px] brightness-0 invert opacity-90 transition-opacity hover:opacity-100" 
            />
          </Link>
          <p className="text-[0.55rem] md:text-[0.6rem] uppercase tracking-[0.5em] text-gold">Ayurway Lanka (Pvt) Ltd</p>
          <p className="mt-4 md:mt-6 max-w-md text-sm md:text-base font-light leading-relaxed md:leading-loose text-ivory/60">
            Let Nature Protect Your Health and Beauty. Meticulously crafted using the finest herbs and ingredients, ensuring that every item we offer is safe, effective, and true to the ancient traditions of Ayurveda.
          </p>
          <div className="mt-6 md:mt-8 flex gap-6">
            <a href="http://www.instagram.com/ayurwaybyisharasandamini" aria-label="Instagram" className="text-ivory/60 hover:text-gold transition-colors duration-500"><InstagramIcon /></a>
            <a href="http://www.facebook.com/ayurwaylanka" aria-label="Facebook" className="text-ivory/60 hover:text-gold transition-colors duration-500"><FacebookIcon /></a>
            <a href="http://www.youtube.com/c/ayurway" aria-label="YouTube" className="text-ivory/60 hover:text-gold transition-colors duration-500"><YoutubeIcon /></a>
          </div>
        </div>

        {/* Pages */}
        <div className="col-span-1 lg:col-span-2 lg:col-start-6 text-left">
          <p className="text-[0.6rem] md:text-[0.65rem] uppercase tracking-[0.4em] text-gold">Pages</p>
          <ul className="mt-4 space-y-3 md:space-y-4 text-xs md:text-sm font-light tracking-wide text-ivory/60">
            <li><Link to="/" className="hover:text-gold transition-colors duration-500">Home</Link></li>
            <li><Link to="/products" className="hover:text-gold transition-colors duration-500">Shop</Link></li>
            <li><Link to="/story" className="hover:text-gold transition-colors duration-500">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors duration-500">Contact Us</Link></li>
          </ul>
        </div>

        {/* Product Categories */}
        <div className="col-span-1 lg:col-span-2 text-left">
          <p className="text-[0.6rem] md:text-[0.65rem] uppercase tracking-[0.4em] text-gold">Categories</p>
          <ul className="mt-4 space-y-3 md:space-y-4 text-xs md:text-sm font-light tracking-wide text-ivory/60">
            <li><Link to="/products" search={{ category: "Body Care" }} className="hover:text-gold transition-colors duration-500">Body Care</Link></li>
            <li><Link to="/products" search={{ category: "Hair Care" }} className="hover:text-gold transition-colors duration-500">Hair Care</Link></li>
            <li><Link to="/products" search={{ category: "Face Care" }} className="hover:text-gold transition-colors duration-500">Face Care</Link></li>
            <li><Link to="/products" search={{ category: "Supplements" }} className="hover:text-gold transition-colors duration-500">Supplements</Link></li>
            <li><Link to="/products" search={{ category: "Natural Foods" }} className="hover:text-gold transition-colors duration-500">Natural Foods</Link></li>
            <li><Link to="/products" search={{ category: "Nuts, Seeds & Berries" }} className="hover:text-gold transition-colors duration-500">Nuts & Seeds</Link></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="col-span-2 lg:col-span-3 lg:col-start-10 text-left">
          <p className="text-[0.6rem] md:text-[0.65rem] uppercase tracking-[0.4em] text-gold">Get In Touch</p>
          <ul className="mt-4 space-y-4 md:space-y-5 text-xs md:text-sm font-light tracking-wide text-ivory/60">
            <li className="leading-relaxed md:leading-loose">
              <span className="text-gold block mb-1.5 text-[0.6rem] tracking-widest uppercase">Address</span>
              No.58, Yahampath Mawatha,<br />
              Piliyandala Road, Maharagama,<br />
              Sri Lanka
            </li>
            <li>
              <span className="text-gold block mb-1.5 text-[0.6rem] tracking-widest uppercase">Hotline</span>
              <a href="tel:0766502171" className="hover:text-gold transition-colors duration-500 cursor-pointer">
                076 650 2171
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-ivory/10">
        <div className="mx-auto flex max-w-screen-2xl flex-col gap-4 px-6 md:px-12 py-5 md:py-6 text-[0.55rem] md:text-[0.6rem] uppercase tracking-[0.4em] text-ivory/40 md:flex-row md:items-center md:justify-between text-center md:text-left">
          <span>© {new Date().getFullYear()} Ayurway Lanka (Pvt) Ltd. All rights reserved.</span>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <span>
              Website developed by <a href="https://adnavra.com/" target="_blank" rel="noopener noreferrer" className="text-ivory/60 hover:text-gold transition-colors duration-300">Adnavra</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}