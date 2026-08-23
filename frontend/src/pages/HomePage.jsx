import { Link } from "@tanstack/react-router";
import { ArrowRight, Leaf, FlaskConical, Sparkles, ShieldCheck } from "lucide-react";

// Import your local assets
import heroImg from "../assets/hero-ritual.jpg";
import ingredientsImg from "../assets/ingredients.jpg";
import ritualImg from "../assets/ritual.jpg";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { ProductCard } from "@/components/ProductCard";
import { products, imageFor } from "@/data/products";

export default function HomePage() {
  const signatures = products.filter((p) => p.bestseller).slice(0, 6);
  const marquee = [
    "Saffron", "Bhringraj", "Manjistha", "Wild Honey", "Neem", "Sandalwood", "Liquorice", "Moringa"
  ];

  const pillars = [
    { icon: Leaf, title: "Wild Harvested", body: "Sourced directly from native growers." },
    { icon: FlaskConical, title: "Classical Process", body: "Decoctions brewed slowly according to ancient texts." },
    { icon: Sparkles, title: "Small Batches", body: "Blended and rested by hand." },
    { icon: ShieldCheck, title: "Clinical Efficacy", body: "Developed by practicing Ayurvedic specialists." }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero Section with Image Restored */}
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

      {/* Category strip */}
      <section className="border-t border-border">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-border md:grid-cols-4">
          {[
            ["Skincare", "ayurway-saffron-jojoba-night-serum"],
            ["Hair", "ayurway-hair-oil"],
            ["Honey", "aged-honey-400g"],
            ["Wellness", "hello-beauty-capsule"],
          ].map(([label, slug]) => (
            <Link
              key={label}
              to="/products"
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

      <SiteFooter />
    </div>
  );
}