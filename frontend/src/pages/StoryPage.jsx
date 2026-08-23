import { Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, HeartHandshake, Leaf } from "lucide-react";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";

import ingredientsImg from "../assets/ingredients.jpg";
import ritualImg from "../assets/ritual.jpg";
import drIsharaImg from "../assets/dr ishara.jpg";
import anuraImg from "../assets/mr anura.jpg"; 

export default function StoryPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Cinematic Hero Section */}
      <section className="relative h-[65svh] min-h-[440px] bg-forest-deep">
        <img
          src={ingredientsImg}
          alt="Ayurvedic botanicals arranged on warm stone"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="hero-veil absolute inset-0" />
        <div className="absolute inset-0 mx-auto flex max-w-screen-2xl items-end px-6 md:px-12 pb-20">
          <Reveal>
            <p className="text-[0.65rem] uppercase tracking-[0.5em] text-gold">
              Established 2019
            </p>
            {/* Reduced font size for luxury balance */}
            <h1 className="mt-4 max-w-4xl font-display text-4xl leading-tight text-ivory md:text-5xl lg:text-6xl">
              Harmonizing health and beauty with the <span className="italic text-gold-soft">wisdom of nature.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-4xl px-6 py-20 md:py-28 text-center">
        <Reveal>
          <p className="eyebrow">Welcome to Ayurway Lanka</p>
          <h2 className="mt-6 font-display text-3xl md:text-4xl leading-relaxed text-forest-deep">
            “Let Nature Protect Your Health and Beauty.”
          </h2>
          <p className="mt-6 text-base font-light leading-loose text-forest-deep/70">
            Established under the Companies Act No.07 of 2007, Ayurway Lanka has quickly become a trusted name in the world of Ayurvedic products. Our journey began with a simple yet profound goal: to harness the power of nature in enhancing well-being and radiance. 
          </p>
          <p className="mt-4 text-base font-light leading-loose text-forest-deep/70">
            We are committed to delivering the finest herbal beauty and health products, completely free from harmful chemicals and preservatives. The positive feedback we have received stands as a testament to our unwavering dedication to quality and purity.
          </p>
        </Reveal>
      </section>

      {/* Founders Section: Dr. Ishara */}
      <section className="bg-sand py-20 md:py-28">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-12">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5 relative">
              <Reveal>
                <div className="absolute -inset-4 bg-gold-soft/40 translate-y-6 -translate-x-6 -z-10" />
                <img
                  src={drIsharaImg}
                  alt="Dr. Ishara Sandamini"
                  loading="lazy"
                  className="w-full h-[550px] object-cover shadow-xl"
                />
              </Reveal>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal delay={150}>
                <p className="eyebrow">Co-Founder & Director</p>
                <h2 className="mt-3 font-display text-4xl text-forest-deep">Dr. Ishara Sandamini</h2>
                
                <div className="mt-8 space-y-6">
                  <div>
                    <h3 className="font-display text-xl text-gold">Professional Expertise</h3>
                    <p className="mt-2 text-sm font-light leading-relaxed text-forest-deep/70">
                      A distinguished graduate of the Faculty of Indigenous Medicine at the University of Colombo, Dr. Ishara combines traditional Ayurvedic wisdom with modern science. Her commitment to holistic healing has made her a highly respected and trusted figure in alternative health.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-display text-xl text-gold">A Multifaceted Talent & Digital Influence</h3>
                    <p className="mt-2 text-sm font-light leading-relaxed text-forest-deep/70">
                      Beyond her medical expertise, she is an award-winning actress, TV presenter, and influential YouTuber. She utilizes her significant platform to educate the public on Ayurvedic practices. This loyal following inspired her to craft a line of safe, pure, and effective herbal remedies.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-display text-xl text-gold">Vision for Ayurway</h3>
                    <p className="mt-2 text-sm font-light leading-relaxed text-forest-deep/70">
                      Dr. Ishara's vision is to make high-quality herbal products accessible to everyone. Her dedication ensures that each product is crafted with care and precision, adhering strictly to the highest standards of Ayurvedic tradition.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section: Mr. Anura */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-12">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-center flex-col-reverse lg:flex-row">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <Reveal delay={150}>
                <p className="eyebrow">Co-Founder & Director</p>
                <h2 className="mt-3 font-display text-4xl text-forest-deep">Mr. Anura Pathirana</h2>
                
                <div className="mt-8 space-y-6">
                  <div>
                    <h3 className="font-display text-xl text-gold">Law, Media & Wellness</h3>
                    <p className="mt-2 text-sm font-light leading-relaxed text-forest-deep/70">
                      Holding an LL.B from the University of Colombo, Mr. Pathirana is an accomplished lawyer, TV presenter, and actor. His legal acumen is beautifully complemented by his passion for natural healing and holistic therapies.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-display text-xl text-gold">Expertise in Cosmetic Technology</h3>
                    <p className="mt-2 text-sm font-light leading-relaxed text-forest-deep/70">
                      He has pursued extensive training, holding advanced credentials in Cosmetic Technology, Ayurveda Beauty Care, Abhyanga, Sports Therapy, and NVQ Level 4 in Ayurvedic Massage Therapy. 
                    </p>
                  </div>

                  <div>
                    <h3 className="font-display text-xl text-gold">Vision for Ayurway</h3>
                    <p className="mt-2 text-sm font-light leading-relaxed text-forest-deep/70">
                      Mr. Pathirana plays a crucial role in shaping the company’s strategy. He believes in the transformative power of harmonizing modern cosmetic science with ancient Ayurvedic wisdom, ensuring absolute integrity and quality assurance across the product range.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 order-1 lg:order-2 relative">
              <Reveal>
                <div className="absolute -inset-4 bg-forest-deep/5 translate-y-6 translate-x-6 -z-10" />
                <img
                  src={anuraImg}
                  alt="Mr. Anura Pathirana"
                  loading="lazy"
                  className="w-full h-[550px] object-cover shadow-xl"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-forest-deep py-20 md:py-28 text-ivory">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            <Reveal>
              <h2 className="font-display text-3xl text-gold mb-4">Our Vision</h2>
              <p className="text-base font-light leading-relaxed text-ivory/80">
                To be a leading provider of authentic Ayurvedic products, fostering a global community that embraces the natural way to health and beauty. We aim to inspire and empower individuals to achieve holistic wellness through the timeless wisdom of Ayurveda, ensuring that nature remains at the core of every aspect of their well-being.
              </p>
            </Reveal>
            <Reveal delay={150}>
              <h2 className="font-display text-3xl text-gold mb-4">Our Mission</h2>
              <p className="text-base font-light leading-relaxed text-ivory/80">
                To deliver the highest quality herbal beauty and health products, meticulously crafted without harmful chemicals or preservatives. We are dedicated to upholding the principles of Ayurveda, ensuring every product supports natural healing. By prioritizing customer satisfaction and manufacturing excellence, we strive to promote a healthier, more beautiful world.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-sand py-20 md:py-28">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <p className="eyebrow">Our Commitment</p>
              <h2 className="mt-4 font-display text-3xl md:text-4xl text-forest-deep">
                Recognized by the Ayurveda Department of Sri Lanka
              </h2>
              <p className="mt-4 text-sm font-light leading-relaxed text-forest-deep/70">
                Our products are meticulously crafted using the finest herbs and ingredients, ensuring that every item we offer is safe, effective, and true to ancient traditions.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: ShieldCheck, title: "Quality Assurance", text: "Made with absolute care, ensuring they are entirely free from harmful chemicals and artificial preservatives." },
              { icon: HeartHandshake, title: "Customer Satisfaction", text: "We pride ourselves on the positive feedback we receive from customers who trust us for their natural health needs." },
              { icon: Leaf, title: "Authenticity", text: "Rooted in clinical Ayurvedic practice, our formulations honor the pure, unadulterated essence of native botanicals." }
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div className="bg-ivory p-10 text-center h-full border border-border luxe-card">
                  <item.icon size={32} className="mx-auto text-gold mb-5" strokeWidth={1} />
                  <h3 className="font-display text-2xl text-forest-deep mb-3">{item.title}</h3>
                  <p className="text-xs font-light leading-relaxed text-forest-deep/70">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          
          <div className="mt-16 text-center">
             <Reveal>
              <Link
                to="/products"
                className="inline-flex items-center gap-4 bg-forest-deep px-9 py-4 text-[0.6rem] uppercase tracking-[0.35em] text-ivory transition-all duration-700 hover:bg-gold"
              >
                Explore Our Products <ArrowRight size={14} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}