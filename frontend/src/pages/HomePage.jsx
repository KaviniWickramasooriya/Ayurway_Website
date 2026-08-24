import { Link } from "@tanstack/react-router";
import { ArrowRight, Leaf, FlaskConical, Sparkles, ShieldCheck, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

// Import your local assets
import heroImg from "../assets/hero-ritual.jpg";
import ingredientsImg from "../assets/ingredients.jpg";
import ritualImg from "../assets/ritual.jpg";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { ProductCard } from "@/components/ProductCard";
import { products, imageFor } from "@/data/products";

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

export default function HomePage() {
  const signatures = products.filter((p) => p.bestseller).slice(0, 6);
  const scrollContainerRef = useRef(null);

  const marquee = [
    "Saffron", "Bhringraj", "Manjistha", "Wild Honey", "Neem", "Sandalwood", "Liquorice", "Moringa"
  ];

  const pillars = [
    { icon: Leaf, title: "Wild Harvested", body: "Sourced directly from native growers." },
    { icon: FlaskConical, title: "Classical Process", body: "Decoctions brewed slowly according to ancient texts." },
    { icon: Sparkles, title: "Small Batches", body: "Blended and rested by hand." },
    { icon: ShieldCheck, title: "Clinical Efficacy", body: "Developed by practicing Ayurvedic specialists." }
  ];

  const youtubeVideos = [
    {
      id: "SmbHwfgNAtM",
      title: "Relief for Joint, Muscle & Nerve Pain",
      category: "Therapeutic Care",
      desc: "Expert guidance on utilizing Jeewa Prana herbal oils for deep muscular relief and restorative recovery."
    },
    {
      id: "pM_reU2HiHY",
      title: "The Natural Path to Luminous Skin",
      category: "Skin Radiance",
      desc: "Discover authentic rituals and time-tested natural treatments for an unhurried, radiant glow."
    },
    {
      id: "-oT49jaOK0A",
      title: "Ayurvedic Insights for Balanced Living",
      category: "Holistic Health",
      desc: "Clinical perspectives on maintaining natural wellness and vitality straight from the atelier."
    },
    {
      id: "WEO1LvtnBRg",
      title: "Easy Home Remedies to Control Blood Sugar",
      category: "Natural Wellness",
      desc: "Traditional approaches and herbal support for dietary balance and metabolic well-being."
    },
    {
      id: "sPSblUOWSBM",
      title: "Rice Water Treatment for Hair Growth & Thickness",
      category: "Hair Care",
      desc: "An ancient secret for restoring hair volume, root strength, and natural luster using fermented rice extracts."
    },
    {
      id: "UY_hAD0Nbdo",
      title: "Green Tea Hair Treatment for Healthy Roots",
      category: "Hair Rituals",
      desc: "Nourishing your scalp with antioxidant-rich botanical infusions to combat hair fall and breakage."
    }
  ];

  const scrollGallery = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -450 : 450;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background relative">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative h-svh min-h-[640px] w-full overflow-hidden bg-sand">
        <img
          src={heroImg}
          alt="A woman applying Ayurway saffron serum"
          className="absolute inset-0 h-full w-full object-cover object-[62%_center]"
        />
        <div className="hero-veil absolute inset-0" />
        <div className="relative mx-auto flex h-full max-w-7xl items-end px-6 pb-24 md:items-center md:pb-0">
          <div className="max-w-2xl">
            <p className="text-[0.6rem] uppercase tracking-[0.42em] text-gold-soft">
              Est. Ceylon · Ayurveda since antiquity
            </p>
            <h1 className="mt-8 font-display text-5xl leading-[1.03] text-ivory sm:text-6xl lg:text-7xl">
              The oldest science of
              <span className="block italic text-gold-gradient">radiant living</span>
            </h1>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-ivory/80">
              Saffron serums, herbal hair oils and wild honey — hand-blended in small
              batches from the island's rarest botanicals.
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-6">
              <Link
                to="/products"
                className="group inline-flex items-center gap-4 bg-ivory px-9 py-4 text-[0.65rem] uppercase tracking-[0.32em] text-forest-deep transition-colors hover:bg-gold"
              >
                Discover the collection
                <ArrowRight
                  size={14}
                  className="transition-transform duration-500 group-hover:translate-x-1"
                />
              </Link>
              <Link
                to="/story"
                className="text-[0.65rem] uppercase tracking-[0.32em] text-ivory/80 underline-offset-8 hover:text-gold hover:underline"
              >
                Our philosophy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-y border-border bg-sand py-5">
        <div className="marquee-track">
          {[...marquee, ...marquee].map((word, i) => (
            <span
              key={i}
              className="whitespace-nowrap px-10 font-display text-lg tracking-[0.3em] uppercase text-forest/45"
            >
              {word} <span className="text-gold">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* Philosophy Section */}
      <section className="mx-auto max-w-7xl px-6 py-28 md:py-40">
        <div className="grid gap-20 md:grid-cols-2 md:items-center">
          <Reveal>
            <p className="eyebrow">The Ayurway way</p>
            <h2 className="mt-6 font-display text-4xl leading-tight text-forest-deep md:text-5xl">
              Formulated the slow way, the way it was written
            </h2>
            <p className="mt-8 text-base leading-loose text-muted-foreground">
              Every Ayurway formula begins as a classical ayurvedic decoction — herbs
              steeped, reduced and married to cold-pressed oils over days rather than
              minutes. We then hold each batch back to rest, so the botanicals settle
              into one another before a single bottle is filled.
            </p>
            <p className="mt-6 text-base leading-loose text-muted-foreground">
              The result is skincare that behaves like nourishment: unhurried,
              restorative, and unmistakably of this island.
            </p>
            <Link
              to="/story"
              className="mt-10 inline-flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.32em] text-forest hover:text-gold"
            >
              Read the house story <ArrowRight size={14} />
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={ingredientsImg}
              alt="Saffron, turmeric, neem and raw honey arranged on warm stone"
              loading="lazy"
              className="w-full object-cover shadow-sm rounded-sm"
            />
          </Reveal>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-forest-deep py-24 text-ivory">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <p.icon size={22} className="text-gold" strokeWidth={1.2} />
              <h3 className="mt-6 font-display text-2xl">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ivory/65">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* YouTube Cinematic Horizontal Scroll Showcase */}
      <section className="bg-sand py-28 md:py-36 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
              <div>
                <div className="inline-flex items-center gap-2 mb-3">
                  <Play size={12} className="text-gold fill-gold" />
                  <p className="eyebrow">Cinematic Journals</p>
                </div>
                <h2 className="font-display text-4xl text-forest-deep md:text-5xl">
                  The Ayurway Heritage in Motion
                </h2>
              </div>
              {/* Scroll Navigation Buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => scrollGallery('left')}
                  aria-label="Scroll left"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-ivory text-forest-deep transition-colors hover:bg-gold hover:border-gold shadow-sm cursor-pointer"
                >
                  <ChevronLeft size={20} strokeWidth={1.5} />
                </button>
                <button
                  onClick={() => scrollGallery('right')}
                  aria-label="Scroll right"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-ivory text-forest-deep transition-colors hover:bg-gold hover:border-gold shadow-sm cursor-pointer"
                >
                  <ChevronRight size={20} strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </Reveal>

          {/* Horizontal Scrolling Video Track */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {youtubeVideos.map((vid, idx) => (
              <div 
                key={vid.id}
                className="w-[340px] md:w-[420px] shrink-0 snap-start bg-ivory p-5 border border-border luxe-card"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-forest-deep/10 shadow-sm">
                  <iframe 
                    className="absolute inset-0 w-full h-full border-0"
                    src={`https://www.youtube.com/embed/${vid.id}`} 
                    title={vid.title} 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  />
                </div>
                <div className="mt-6">
                  <p className="text-[0.6rem] uppercase tracking-[0.3em] text-gold mb-1">{vid.category}</p>
                  <h3 className="font-display text-xl text-forest-deep line-clamp-1">{vid.title}</h3>
                  <p className="mt-2 text-xs md:text-sm text-muted-foreground font-light leading-relaxed line-clamp-2">
                    {vid.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature collection */}
      <section className="mx-auto max-w-7xl px-6 py-28 md:py-36">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Most collected</p>
              <h2 className="mt-5 font-display text-4xl text-forest-deep md:text-5xl">
                The signature edit
              </h2>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-3 border border-forest px-8 py-3.5 text-[0.65rem] uppercase tracking-[0.3em] text-forest transition-colors hover:bg-forest hover:text-ivory"
            >
              View all 48 products
            </Link>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {signatures.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 100}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Ritual split */}
      <section className="bg-sand">
        <div className="mx-auto grid max-w-7xl gap-0 md:grid-cols-2">
          <img
            src={ritualImg}
            alt="Warm herbal oil in a brass bowl beside folded linen"
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div className="flex flex-col justify-center px-8 py-24 md:px-16">
            <Reveal>
              <p className="eyebrow">The evening ritual</p>
              <h2 className="mt-6 font-display text-4xl leading-tight text-forest-deep md:text-5xl">
                Abhyanga, in four unhurried steps
              </h2>
              <ol className="mt-12 space-y-8">
                {[
                  ["Warm", "Stand the Jeewa Prana oil in hot water until body-warm."],
                  ["Anoint", "Work upward from the feet in long, slow strokes."],
                  ["Rest", "Let the oil settle for twelve minutes in stillness."],
                  ["Cleanse", "Rinse with warm water; never strip with soap."],
                ].map(([title, body], i) => (
                  <li key={title} className="flex gap-6">
                    <span className="font-display text-2xl text-gold">
                      0{i + 1}
                    </span>
                    <div>
                      <p className="font-display text-xl text-forest-deep">{title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-6 py-28 md:py-36">
        <Reveal>
          <p className="eyebrow text-center">In their words</p>
          <h2 className="mt-5 text-center font-display text-4xl text-forest-deep md:text-5xl">
            Kept on the shelf, used every night
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {[
            [
              "The saffron night serum is the first product that visibly changed my pigmentation. Three months and I will not go back.",
              "Nethmi P., Colombo",
            ],
            [
              "I grew up with my grandmother's hair oil. Ayurway's is the only one that smells and feels the same — but finer.",
              "Dinuka R., Kandy",
            ],
            [
              "The aged honey is extraordinary. Dark, almost caramel. We keep three jars in the house at all times.",
              "Ayesha F., Galle",
            ],
          ].map(([quote, name], i) => (
            <Reveal key={name} delay={i * 110}>
              <figure className="luxe-card h-full border border-border p-10">
                <span className="font-display text-5xl leading-none text-gold">“</span>
                <blockquote className="mt-4 font-display text-xl leading-relaxed text-forest-deep">
                  {quote}
                </blockquote>
                <figcaption className="mt-8 text-[0.6rem] uppercase tracking-[0.28em] text-muted-foreground">
                  {name}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Category strip with direct category filtering */}
      <section className="border-t border-border">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-border md:grid-cols-4">
          {[
            ["Skincare", "Skincare", "apsara-day-cream"],
            ["Hair Care", "Hair Care", "ayurway-hair-serum"],
            ["Natural Foods", "Natural Foods", "aged-honey-200g"],
            ["Supplements", "Supplements", "hello-beauty-capsule"],
          ].map(([label, categoryName, slug]) => (
            <Link
              key={label}
              to="/products"
              search={{ category: categoryName }}
              className="group relative overflow-hidden bg-background"
            >
              <img
                src={imageFor(slug)}
                alt={label}
                loading="lazy"
                className="aspect-square w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-end bg-forest-deep/35 p-6 font-display text-2xl text-ivory transition-colors group-hover:bg-forest-deep/55">
                {label}
              </span>
            </Link>
          ))}
        </div>
      </section>

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