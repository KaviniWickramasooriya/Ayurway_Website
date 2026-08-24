import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col relative">
      <SiteHeader />

      <main className="flex-1 w-full">
        <section className="relative pt-[130px] pb-24 md:pt-[180px] md:pb-36 bg-forest-deep overflow-hidden">
          <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-gold/15 rounded-full blur-3xl pointer-events-none" />

          <div className="mx-auto max-w-screen-2xl px-6 md:px-12 relative z-10">
            <Reveal>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-8 bg-gold" />
                <p className="text-[0.65rem] uppercase tracking-[0.4em] text-gold-soft">The Concierge</p>
              </div>
              <h1 className="font-display text-4xl leading-[1.1] text-ivory md:text-5xl lg:text-6xl max-w-4xl">
                Let nature protect your <span className="italic text-gold-gradient font-light">health & beauty.</span>
              </h1>
              <p className="mt-8 max-w-lg text-base font-light leading-relaxed text-ivory/70">
                Join us on a journey to natural wellness. Experience the difference that absolute quality, authenticity, and nature can make. Welcome to Ayurway Lanka.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="relative z-20 -mt-12 md:-mt-20 pb-28">
          <div className="mx-auto max-w-screen-2xl px-6 md:px-12">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">

              <div className="lg:col-span-5 bg-sand p-8 md:p-12 border border-border luxe-card">
                <Reveal delay={100}>
                  <h3 className="font-display text-3xl md:text-4xl text-forest-deep mb-10">Reach out to us</h3>

                  <div className="space-y-10">
                    <div className="group flex items-start gap-5">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-forest-deep/20 text-forest-deep group-hover:bg-forest-deep group-hover:text-gold transition-colors duration-500 shrink-0">
                        <Phone size={16} strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-[0.6rem] uppercase tracking-[0.35em] text-clay mb-2">Hotlines</p>
                        <ul className="space-y-1.5 text-sm font-light text-forest-deep/80">
                          <li className="hover:text-gold transition-colors cursor-pointer">076 650 2171</li>
                          <li className="hover:text-gold transition-colors cursor-pointer">076 077 7863</li>
                          <li className="hover:text-gold transition-colors cursor-pointer">078 432 6384</li>
                          <li className="hover:text-gold transition-colors cursor-pointer">072 456 5601</li>
                        </ul>
                      </div>
                    </div>

                    <div className="w-full h-px bg-border/60" />

                    <div className="group flex items-start gap-5">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-forest-deep/20 text-forest-deep group-hover:bg-forest-deep group-hover:text-gold transition-colors duration-500 shrink-0">
                        <Mail size={16} strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-[0.6rem] uppercase tracking-[0.35em] text-clay mb-2">Email Inquiries</p>
                        <a href="mailto:info@ayurway.lk" className="text-sm font-light text-forest-deep/80 hover:text-gold transition-colors">
                          info@ayurway.lk
                        </a>
                      </div>
                    </div>

                    <div className="w-full h-px bg-border/60" />

                    <div className="group flex items-start gap-5">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-forest-deep/20 text-forest-deep group-hover:bg-forest-deep group-hover:text-gold transition-colors duration-500 shrink-0">
                        <MapPin size={16} strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-[0.6rem] uppercase tracking-[0.35em] text-clay mb-2">The Atelier</p>
                        <p className="text-sm font-light leading-relaxed text-forest-deep/80">
                          No.58, Yahampath Mawatha,<br />
                          Piliyandala Road, Maharagama,<br />
                          Sri Lanka
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>

              <div className="lg:col-span-7 bg-ivory p-8 md:p-14 lg:px-16 lg:py-20 border border-border luxe-card">
                <Reveal delay={200}>
                  <h2 className="font-display text-3xl md:text-4xl text-forest-deep mb-4">Send a message</h2>
                  <p className="text-forest-deep/60 font-light mb-12 max-w-lg text-sm leading-relaxed">
                    For personalized consultations, product inquiries, or order support, please complete the form below. Our apothecary team will respond promptly.
                  </p>

                  <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                    <div className="relative pt-4">
                      <input
                        type="text"
                        id="name"
                        required
                        placeholder="Name"
                        className="peer w-full bg-transparent border-b border-forest-deep/20 py-2.5 text-forest-deep text-base font-light focus:outline-none focus:border-gold transition-colors placeholder-transparent"
                      />
                      <label
                        htmlFor="name"
                        className="absolute left-0 top-0 text-[0.6rem] text-forest-deep/50 uppercase tracking-[0.2em] transition-all duration-300 peer-placeholder-shown:top-6 peer-placeholder-shown:text-forest-deep/40 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-[0.6rem] peer-focus:text-gold cursor-text"
                      >
                        Full Name
                      </label>
                    </div>

                    <div className="relative pt-4">
                      <input
                        type="email"
                        id="email"
                        required
                        placeholder="Email Address"
                        className="peer w-full bg-transparent border-b border-forest-deep/20 py-2.5 text-forest-deep text-base font-light focus:outline-none focus:border-gold transition-colors placeholder-transparent"
                      />
                      <label
                        htmlFor="email"
                        className="absolute left-0 top-0 text-[0.6rem] text-forest-deep/50 uppercase tracking-[0.2em] transition-all duration-300 peer-placeholder-shown:top-6 peer-placeholder-shown:text-forest-deep/40 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-[0.6rem] peer-focus:text-gold cursor-text"
                      >
                        Email Address
                      </label>
                    </div>

                    <div className="relative pt-4">
                      <textarea
                        id="message"
                        required
                        rows={4}
                        placeholder="Your Message"
                        className="peer w-full bg-transparent border-b border-forest-deep/20 py-2.5 text-forest-deep text-base font-light focus:outline-none focus:border-gold transition-colors resize-none placeholder-transparent"
                      />
                      <label
                        htmlFor="message"
                        className="absolute left-0 top-0 text-[0.6rem] text-forest-deep/50 uppercase tracking-[0.2em] transition-all duration-300 peer-placeholder-shown:top-6 peer-placeholder-shown:text-forest-deep/40 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-[0.6rem] peer-focus:text-gold cursor-text"
                      >
                        Your Message
                      </label>
                    </div>

                    <div className="pt-6 flex justify-end">
                      <button
                        type="submit"
                        className="group inline-flex items-center justify-center gap-4 bg-forest-deep px-10 py-4 text-[0.6rem] uppercase tracking-[0.35em] text-ivory hover:bg-gold transition-colors duration-700 cursor-pointer"
                      >
                        Send Inquiry
                        <ArrowRight size={14} className="transition-transform duration-700 group-hover:translate-x-2" />
                      </button>
                    </div>
                  </form>
                </Reveal>
              </div>

            </div>
          </div>
        </section>

        <section className="w-full h-[400px] md:h-[500px] bg-sand relative overflow-hidden group">
          <div className="absolute inset-0 bg-forest-deep/10 pointer-events-none z-10 transition-opacity duration-1000 group-hover:opacity-0" />
          
          <Reveal delay={200} className="w-full h-full grayscale-[0.6] sepia-[0.3] contrast-100 hover:grayscale-0 hover:sepia-0 hover:contrast-100 transition-all duration-[1500ms]">
            <iframe
              title="Ayurway Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.547113110931!2d79.9260202757422!3d6.83625669316208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae251abea2d69db%3A0x93db71396400191e!2sAyurway!5e0!3m2!1sen!2slk!4v1724000000000!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Reveal>
        </section>
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