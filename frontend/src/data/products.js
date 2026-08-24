// This directly loads the actual image files (.jpg, .jpeg, .png, .webp) 
// instead of looking for complex JSON asset wrappers.
export const imageFor = (slug) => {
  const images = import.meta.glob("../assets/products/*.{jpeg,jpg,png,webp}", { eager: true, import: "default" });
  const urlBySlug = Object.fromEntries(
    Object.entries(images).map(([path, url]) => {
      const file = path.split("/").pop() || "";
      return [file.replace(/\.(jpe?g|png|webp)$/, ""), url];
    })
  );
  return urlBySlug[slug] || "";
};

export const products = [
  { 
    slug: "ayurway-saffron", 
    name: "Pure Kesar Saffron", 
    category: "Skincare", 
    price: 2300, 
    size: "1 g", 
    stars: 5.0, 
    tagline: "Ayurway Saffron is a premium-quality natural product known as one of the finest saffron varieties in the world. Carefully sourced and processed to preserve its purity and potency, it offers multiple benefits for beauty, wellness, and overall health.", 
    notes: ["Kesar saffron", "Grade A1 threads", "Radiance"], 
    formulation: {
      keyBotanicals: "Hand-picked Grade A1 Kesar Saffron threads.",
      application: "Incorporate into masks, night elixirs, or warm tonics to unlock profound luminosity.",
      purityPromise: "100% pure, unadulterated botanical threads sourced directly from elite growers."
    },
    bestseller: true 
  },
  { 
    slug: "ayurway-saffron-jojoba-night-serum", 
    name: "Ayurway Saffron Jojoba Night Serum", 
    category: "Skincare", 
    price: 2350, 
    size: "20 ml", 
    stars: 4.9, 
    tagline: "Transform your nighttime skincare routine with Ayurway Saffron Jojoba Night Serum, a luxurious blend designed to nourish and rejuvenate your skin while you sleep. This potent serum harnesses the power of natural ingredients to provide deep hydration and essential nutrients, ensuring you wake up with a radiant, youthful complexion.", 
    notes: ["Saffron", "Cold-pressed jojoba", "Vitamin E"], 
    formulation: {
      keyBotanicals: "Saffron, cold-pressed jojoba, and Vitamin E.",
      application: "Apply a few drops onto cleansed skin before sleep, massaging gently in upward circular motions.",
      purityPromise: "Free from synthetic fragrances, heavy mineral oils, parabens, and chemical preservatives."
    },
    bestseller: true 
  },
  { 
    slug: "ayurway-saffron-niacinamide-night-serum", 
    name: "Saffron Niacinamide Night Serum", 
    category: "Skincare", 
    price: 2350, 
    size: "20 ml", 
    stars: 4.9, 
    tagline: "Unveil brighter, healthier-looking skin with Ayurway Saffron Niacinamide Night Serum, a powerful overnight treatment designed to repair, hydrate, and restore your skin while you sleep. Enriched with the natural goodness of saffron and the skin-renewing benefits of niacinamide, this lightweight serum works deeply to improve skin tone, reduce dullness, and enhance your natural glow.", 
    notes: ["Saffron", "Niacinamide 5%", "Liquorice"], 
    formulation: {
      keyBotanicals: "Pure saffron extract, 5% niacinamide, and liquorice root.",
      application: "Smooth evenly over the face and neck every evening as part of your night regimen.",
      purityPromise: "Dermatologically tested, plant-derived active formula without artificial bleaching agents."
    } 
  },
  { 
    slug: "ayurway-swetha-facewash-with-real-saffron", 
    name: "Swetha Saffron Face Wash", 
    category: "Skincare", 
    price: 1150, 
    size: "100 ml", 
    stars: 4.8, 
    tagline: "Unveil your skin’s natural radiance with Ayurway Shwetha Real Saffron Face Wash, a luxurious blend of powerful natural ingredients designed to cleanse, nourish, and rejuvenate your skin. Suitable for all skin types, this face wash combines the brightening properties of saffron with the soothing and antioxidant-rich benefits of sandalwood, green tea, liquorice, and vitamin E.", 
    notes: ["Saffron", "Sandalwood", "Green tea", "Liquorice", "Vitamin E"], 
    formulation: {
      keyBotanicals: "Real saffron threads, sandalwood, green tea, liquorice, and Vitamin E.",
      application: "Lather a small amount onto damp skin, massage gently, and rinse thoroughly with lukewarm water.",
      purityPromise: "Sulphate-free, non-stripping cleanser crafted with natural cleansers and botanicals."
    } 
  },
  { 
    slug: "ayurway-megaha-face-wash", 
    name: "Ayurway Megaha Face Wash", 
    category: "Skincare", 
    price: 900, 
    size: "100 ml", 
    stars: 4.8, 
    tagline: "Revitalize your skincare routine with Ayurway Mega Face Wash, expertly formulated to deliver a deep cleanse without over-drying your skin. Infused with the natural goodness of Nutgrass, this face wash penetrates deeply to clean pores and help prevent pimples, making it an ideal choice for those with pimple-prone and oily skin.", 
    notes: ["Nutgrass", "Deep pore cleansing", "Anti-blemish"], 
    formulation: {
      keyBotanicals: "Nutgrass extract and natural clarifying herbal infusions.",
      application: "Massage onto wet face focusing on oily zones, then rinse clean.",
      purityPromise: "Designed specifically for acne-prone skin without harsh synthetic detergents."
    } 
  },
  { 
    slug: "ayurway-tee-tree-and-manjistha-toner", 
    name: "Tea Tree & Manjistha Toner", 
    category: "Skincare", 
    price: 850, 
    size: "100 ml", 
    stars: 4.7, 
    tagline: "Unleash the power of natural ingredients with the Tea Tree and Manjistha Toner, specially formulated to maintain your skin’s pH balance while providing antibacterial protection. This alcohol-free toner is gentle yet effective, making it suitable for all skin types, including sensitive and acne-prone skin. Experience the refreshing and soothing benefits as it helps reduce pimples and enhances your skin’s overall health.", 
    notes: ["Tea tree", "Manjistha", "pH balanced", "Alcohol free"], 
    formulation: {
      keyBotanicals: "Tea tree essential oil and Manjistha root extract.",
      application: "Mists directly onto clean skin or apply gently with a cotton pad morning and night.",
      purityPromise: "Alcohol-free, non-irritating botanical toner."
    } 
  },
  { 
    slug: "licorice-toner", 
    name: "Liquorice Cleansing Toner", 
    category: "Skincare", 
    price: 850, 
    size: "120 ml", 
    stars: 4.8, 
    tagline: "Refresh and hydrate your skin with Ayurway Licorice Toner, a gentle herbal formula specially designed for dry and normal skin. This soothing toner helps restore moisture balance, calm the skin, and enhance your natural glow, leaving your face feeling soft, fresh, and revitalised after every use.", 
    notes: ["Liquorice root", "Glycerine", "Cucumber"], 
    formulation: {
      keyBotanicals: "Liquorice root extract, vegetable glycerine, and cucumber distillate.",
      application: "Pat onto face after cleansing to lock in hydration and prep skin for moisturizers.",
      purityPromise: "100% natural, soothing formulation tailored for normal to dry skin types."
    } 
  },
  { 
    slug: "apsara-day-cream", 
    name: "Ayurway Apsara Day Cream", 
    category: "Skincare", 
    price: 2350, 
    size: "50 g", 
    stars: 4.9, 
    tagline: "Experience the luxurious care of Ayurway Apsara Day Cream, a premium skincare solution designed to nourish, protect, and rejuvenate your skin. Enriched with the natural goodness of niacinamide, licorice, and saffron, this day cream is perfect for dry and normal skin types. Enjoy the benefits of sun protection, deep moisturization, anti-aging, and brightening with a formula free from bleaching agents, parabens, heavy metals, and formaldehyde.", 
    notes: ["Niacinamide", "Licorice", "Saffron", "Dry to normal skin"], 
    formulation: {
      keyBotanicals: "Niacinamide, licorice root, and pure saffron extracts.",
      application: "Smooth gently over cleansed face and neck every morning.",
      purityPromise: "Free from bleaching agents, parabens, heavy metals, and formaldehyde."
    } 
  },
  { 
    slug: "diwyangana-day-cream", 
    name: "Diwyangana Day Cream", 
    category: "Skincare", 
    price: 2350, 
    size: "50 g", 
    stars: 4.7, 
    tagline: "Discover the perfect balance of care and protection with Ayurway Diwyangana Day Cream, a specially formulated skincare solution for oily and combination skin types. Infused with Vitamin B5, sandalwood and saffron, this day cream offers sun protection, deep moisturization, anti-aging and brightening support while remaining free from bleaching agents, parabens, heavy metals and formaldehyde.", 
    notes: ["Vitamin B5", "Sandalwood", "Saffron", "Oily & combination skin"], 
    formulation: {
      keyBotanicals: "Vitamin B5, sandalwood, and saffron extracts.",
      application: "Apply a light layer evenly across oil-prone areas of the face during morning routines.",
      purityPromise: "Non-comedogenic, lightweight formula free from parabens and artificial bleaching agents."
    } 
  },
  { 
    slug: "lodhara-cream", 
    name: "Lodhara Repair Cream", 
    category: "Skincare", 
    price: 2350, 
    size: "50 g", 
    stars: 4.8, 
    tagline: "Achieve clear, healthy skin with Ayurway Lodhra Acne Treatment Cream, a powerful blend designed to combat acne and promote skin repair. Formulated with the natural goodness of Lodhra (Symplocos racemosa), coriander, saffron, and the acne-fighting properties of salicylic acid, this cream targets acne and pimples effectively. For optimal results, pair it with Ayurway Tea Tree and Manjistha Toner and Ayurway Mega Face Wash.", 
    notes: ["Lodhra bark", "Coriander", "Saffron", "Salicylic acid"], 
    formulation: {
      keyBotanicals: "Lodhra bark, coriander, saffron, and natural salicylic acid.",
      application: "Dab directly onto blemishes or affected areas as an overnight or spot treatment.",
      purityPromise: "Clinically targeted botanical treatment without harsh synthetic skin thinners."
    } 
  },
  
  { 
    slug: "ayurway-hair-oil", 
    name: "Ayurway Hair Oil", 
    category: "Hair Care", 
    price: 2150, 
    size: "100 ml", 
    stars: 4.9, 
    tagline: "Discover the secret to beautiful, healthy hair with Ayurway Hair Oil, crafted from 100% natural ingredients based on ancient Ayurvedic recipes. This versatile hair oil is designed to address a variety of hair concerns while promoting overall hair health. Whether you’re dealing with hair fall, dandruff, or dry, damaged hair, Ayurway Hair Oil is your go-to solution for luscious, shiny locks.", 
    notes: ["Bhringraj", "Curry leaf", "Coconut", "Traditional herbs"], 
    formulation: {
      keyBotanicals: "Bhringraj, curry leaf, and cold-pressed virgin coconut oil.",
      application: "Massage gently into the scalp and hair length, leave for an hour or overnight, then wash out.",
      purityPromise: "100% natural, chemical-free herbal oil formulation."
    },
    bestseller: true 
  },
  { 
    slug: "ayurway-leave-on-hair-oil", 
    name: "Ayurway Leave-On Hair Oil", 
    category: "Hair Care", 
    price: 1150, 
    size: "50 ml", 
    stars: 4.8, 
    tagline: "Say goodbye to damaged, frizzy hair and hello to smooth, manageable locks with Ayurway Leave On Hair Oil. This luxurious hair oil is designed to nourish and improve your hair’s health, making it ideal for those dealing with the challenges of frequent tying and stubborn hair. Made from 100% natural ingredients, it’s perfect for both adults and kids, providing a gentle and effective solution for easy combing and styling.", 
    notes: ["Argan", "Hibiscus", "Vitamin E", "Frizz control"], 
    formulation: {
      keyBotanicals: "Argan oil, hibiscus extract, and Vitamin E.",
      application: "Work 1–2 drops through damp or dry hair ends to tame frizz and ease combing.",
      purityPromise: "Lightweight, non-greasy formula suitable for everyday use."
    } 
  },
  { 
    slug: "ayurway-hair-serum", 
    name: "Ayurway Hair Serum", 
    category: "Hair Care", 
    price: 1500, 
    size: "30 ml", 
    stars: 4.8, 
    tagline: "Discover the ultimate solution for hair fall control, dandruff, premature graying, and split ends with Ayurway Hair Serum. This 100% natural hair serum is formulated with a potent blend of nourishing oils, making it the perfect choice for those who prefer a non-greasy alternative to traditional Ayurvedic oils. With a unique combination of almond, jojoba, avocado, virgin coconut, sunflower, blackseed, rosemary, lavender, tea tree, cedarwood, and ylang-ylang oils, this serum provides comprehensive care for all your hair needs.", 
    notes: ["Almond", "Jojoba", "Avocado", "Blackseed", "Rosemary"], 
    formulation: {
      keyBotanicals: "Almond, jojoba, avocado, virgin coconut, sunflower, blackseed, rosemary, lavender, tea tree, cedarwood, and ylang-ylang oils.",
      application: "Apply sparingly to clean scalp and strands to strengthen roots and prevent split ends.",
      purityPromise: "100% natural, non-greasy serum blend free from mineral silicones."
    } 
  },
  { 
    slug: "ayurway-amurtha-shampoo", 
    name: "Ayurway Amurtha Herbal Shampoo", 
    category: "Hair Care", 
    price: 925, 
    size: "200 ml", 
    stars: 4.7, 
    tagline: "Discover the ultimate in hair care with Ayurway Amurtha Shampoo, a unique formulation designed to cleanse, nourish, and revitalize your hair and scalp. Suitable for all hair types, this shampoo harnesses the power of Triphala (a blend of Aralu, Bulu, and Nelli), saffron, castor oil, and vitamin E to provide a holistic approach to hair health. Experience the benefits of ancient Ayurvedic wisdom with every wash, and enjoy hair that is clean, healthy, and full of life.", 
    notes: ["Triphala", "Saffron", "Castor oil", "Vitamin E"], 
    formulation: {
      keyBotanicals: "Triphala (Aralu, Bulu, Nelli), saffron, castor oil, and Vitamin E.",
      application: "Massage onto wet scalp, work into a rich lather, and rinse completely.",
      purityPromise: "Sulphate-free herbal cleanse preserving natural scalp moisture."
    } 
  },
  { 
    slug: "ayurway-amurtha-conditioner", 
    name: "Ayurway Amurtha Herbal Conditioner", 
    category: "Hair Care", 
    price: 1125, 
    size: "200 ml", 
    stars: 4.8, 
    tagline: "Enhance your hair care routine with Ayurway Amurtha Conditioner, a luxurious formulation that nourishes, revitalizes, and strengthens your hair. Suitable for all hair types, this conditioner features the potent Ayurvedic blend of Triphala (Aralu, Bulu, and Nelli), along with saffron, castor oil, and vitamin E. Designed to complement Ayurway Amurtha Shampoo, this conditioner ensures your hair remains healthy, smooth, and vibrant.", 
    notes: ["Triphala", "Saffron", "Castor oil", "Aloe & Shea"], 
    formulation: {
      keyBotanicals: "Triphala extracts, saffron, castor oil, and Vitamin E.",
      application: "Smooth through mid-lengths and ends after shampooing, leave for 3 minutes, then rinse.",
      purityPromise: "Silicone-free conditioning treatment formulated for deep moisture seal."
    } 
  },
  { 
    slug: "suwakeshi-shampoo", 
    name: "Ayurway Suwakeshi Anti-Dandruff Shampoo", 
    category: "Hair Care", 
    price: 900, 
    size: "100 ml", 
    stars: 4.9, 
    tagline: "Combat dandruff and enjoy healthier, shinier hair with Ayurway Suwa Keshi Anti Dandruff Shampoo. Infused with the powerful natural ingredients Seewakka (Saxifraga aizoon) and virgin coconut oil, this shampoo is designed to effectively cleanse your scalp, reduce dandruff, and nourish your hair. Experience the refreshing and soothing benefits of a shampoo that leaves your hair dandruff-free and beautifully radiant.", 
    notes: ["Seewakka", "Virgin coconut oil", "Anti-dandruff"], 
    formulation: {
      keyBotanicals: "Seewakka (Saxifraga aizoon) and virgin coconut oil.",
      application: "Massage into wet hair, leave on for 2 minutes to target flaking, then rinse thoroughly.",
      purityPromise: "Gentle anti-dandruff formula without harsh chemical antifungals."
    } 
  },
  { 
    slug: "little-princess-hair-oil", 
    name: "Ayurway Little Princess Hair Oil", 
    category: "Hair Care", 
    price: 1590, 
    size: "100 ml", 
    stars: 4.8, 
    tagline: "Introducing Ayurway Little Princess Hair Oil, a powerful ancient Ayurvedic recipe tailored for modern times. Formulated specifically for children, this 100% natural hair oil is free from chemicals, preservatives, colors, and fragrances, making it safe for kids from six months and older. Enriched with a blend of nourishing oils and potent herbal ingredients, this hair oil not only promotes healthy, shiny hair but also nourishes the scalp and provides a cooling effect to the head. Adults who experience phlegm can also benefit from this gentle formula.", 
    notes: ["Coconut", "Sesame", "Tear-free", "Kids safe"], 
    formulation: {
      keyBotanicals: "Pure coconut, sesame, and mild cooling child-safe herbs.",
      application: "Gently massage a small amount onto a child's scalp prior to bath time.",
      purityPromise: "100% natural, tear-free formulation free from artificial fragrances and dyes."
    } 
  },

  { 
    slug: "ayurway-jeewa-prana-oil", 
    name: "Ayurway Jeewa Prana Body Oil", 
    category: "Wellness Oils", 
    price: 1950, 
    size: "200 ml", 
    stars: 4.8, 
    tagline: "Experience the power of ancient Ayurvedic healing with Ayurway Jeewa Prana Oil, a potent medicinal oil designed to provide relief from various types of pain and discomfort. This all-natural remedy effectively addresses rheumatisms, neurasthenia, muscle atrophy, joint pain, hip pain, and neck pain. Additionally, it alleviates inflammation, muscle weakness, sprains, and general muscle pain, while strengthening the body.", 
    notes: ["Sesame", "Ginger", "Cinnamon", "Pain relief"], 
    formulation: {
      keyBotanicals: "Sesame oil base infused with therapeutic ginger, cinnamon, and classical medicinal herbs.",
      application: "Warm slightly and massage thoroughly into sore joints, muscles, or aching areas.",
      purityPromise: "Traditional medicinal oil blend created without synthetic painkillers or additives."
    },
    bestseller: true 
  },
  { 
    slug: "ayurway-shoba-body-lotion", 
    name: "Shoba Body Lotion", 
    category: "Body Care", 
    price: 1950, 
    size: "200 g", 
    stars: 4.9, 
    tagline: "Introducing Ayurway Shoba Body Lotion, the perfect blend of natural ingredients designed to nourish, protect, and moisturize your skin. Suitable for all skin types, this luxurious body lotion combines the goodness of Sandalwood, Red Sandalwood, Vitamin E, and Saffron to provide comprehensive skin care without any harmful chemicals. Experience the ultimate in skin hydration and sun protection with Ayurway Shoba Body Lotion.", 
    notes: ["Sandalwood", "Red sandalwood", "Vitamin E", "Saffron"], 
    formulation: {
      keyBotanicals: "Sandalwood, red sandalwood, Vitamin E, and saffron.",
      application: "Massage generously over clean skin all over the body until fully absorbed.",
      purityPromise: "Chemical-free hydration safe for daily full-body application."
    } 
  },
  { 
    slug: "ayurway-ashirwada-foot-cream", 
    name: "Ashirwada Foot Cream", 
    category: "Body Care", 
    price: 1250, 
    size: "100 g", 
    stars: 4.9, 
    tagline: "Are your heels cracked, dry, or rough? Do your feet feel dull compared to the rest of your body? Ayurway Ashirwada Foot Cream is the perfect solution. Made with natural Ayurvedic ingredients and modern technology, it helps repair cracked heels, soften rough skin, and deeply moisturise your feet. Safe, gentle, and easy to use, it is suitable for daily care even during pregnancy and for children leaving your feet soft, healthy, and well-nourished.", 
    notes: ["Urea", "Neem", "Peppermint", "Heel repair"], 
    formulation: {
      keyBotanicals: "Natural urea, soothing neem, and cooling peppermint extracts.",
      application: "Massage into heels and soles nightly, ideally wearing cotton socks afterwards for deep repair.",
      purityPromise: "Pregnancy-safe, nourishing formulation free from harsh petroleum bases."
    } 
  },
  { 
    slug: "cuticle-and-nail-oil", 
    name: "Cuticle & Nail Oil", 
    category: "Wellness Oils", 
    price: 1350, 
    size: "20 ml", 
    stars: 4.7, 
    tagline: "Ayurway Cuticle Oil is a natural Ayurvedic solution designed to strengthen weak, brittle nails, promote healthy growth, and nourish dry cuticles. It deeply hydrates, improves nail texture, and protects against damage caused by chemicals and poor nutrition, helping reduce breakage, peeling, and dullness for stronger, smoother, and healthier-looking nails.", 
    notes: ["Jojoba", "Sweet almond", "Lemon", "Nail strengthener"], 
    formulation: {
      keyBotanicals: "Cold-pressed jojoba, sweet almond oil, and lemon essential oil.",
      application: "Brush onto cuticles and nail beds daily, massaging gently to stimulate nail growth.",
      purityPromise: "100% natural oil blend free from chemical Hardeners."
    } 
  },
  { 
    slug: "pivithuru-feminine-wash", 
    name: "Pivithuru Feminine Wash", 
    category: "Feminine Care", 
    price: 975, 
    size: "100 g", 
    stars: 4.8, 
    tagline: "Discover the perfect balance of care, protection, and natural wellness with Ayurway PIVITHURU Feminine Wash, a gentle daily hygiene solution specially crafted for intimate care. Formulated with powerful Ayurvedic ingredients such as Pancha Walka and Manjistha, this feminine wash supports cleansing, soothing, and maintaining the health of delicate skin while respecting your body’s natural balance.", 
    notes: ["Pancha Walka", "Manjistha", "pH balanced", "Intimate hygiene"], 
    formulation: {
      keyBotanicals: "Pancha Walka and Manjistha herbal decoction.",
      application: "Use a small amount for daily intimate hygiene during showers, then rinse thoroughly with water.",
      purityPromise: "pH-balanced gentle wash formulated specifically for sensitive intimate skin."
    } 
  },
  { 
    slug: "baby-soap", 
    name: "Herbal Baby Soap", 
    category: "Body Care", 
    price: 800, 
    size: "100 g", 
    stars: 4.9, 
    tagline: "Ayurway Baby Soap is a gentle glycerin-based soap specially made for babies using traditional Ayurvedic Rath Thel (herbal oil). It carefully cleanses delicate skin while keeping it soft, moisturised, and protected.", 
    notes: ["Glycerin", "Rath Thel herbal oil", "Newborn safe"], 
    formulation: {
      keyBotanicals: "Traditional Ayurvedic Rath Thel (herbal oil) in a gentle glycerin base.",
      application: "Lather gently over baby's skin during bath time and rinse clean with warm water.",
      purityPromise: "Extremely mild, chemical-free formulation tailored for newborn infant skin."
    } 
  },
  { 
    slug: "brazilian-waxing", 
    name: "Brazilian Waxing Kit", 
    category: "Body Care", 
    price: 2800, 
    size: "Kit", 
    stars: 4.8, 
    tagline: "Salon-grade hair removal with a soothing herbal after-oil.", 
    notes: ["Low temperature wax", "Aloe after-oil", "Strips"], 
    formulation: {
      keyBotanicals: "Low-temperature natural wax resin and soothing aloe post-wax oil.",
      application: "Warm wax according to instructions, apply in the direction of hair growth, and remove smoothly.",
      purityPromise: "Salon-grade formulation designed for gentle, irritation-free hair removal."
    } 
  },

  { 
    slug: "hello-beauty-capsule", 
    name: "Hello Beauty Capsules", 
    category: "Supplements", 
    price: 2600, size: "60 capsules", stars: 4.8, 
    tagline: "Hello Beauty Capsule is a 100% natural nutritional supplement designed to promote healthy, glowing skin from within. It supports skin clarity, nourishment, and overall wellness.", 
    notes: ["Collagen support", "Biotin", "Amla", "Skin clarity"], 
    formulation: {
      keyBotanicals: "Natural herbal extracts, amla, and cellular nourishment nutrients.",
      application: "Take as directed on the label with water, preferably alongside meals.",
      purityPromise: "100% natural nutritional supplement free from synthetic stimulants."
    },
    bestseller: true 
  },
  { 
    slug: "moringa-capsule", 
    name: "Moringa Capsules", 
    category: "Supplements", 
    price: 2000, 
    size: "60 capsules", 
    stars: 4.9, 
    tagline: "Ayurway Moringa Capsule is a natural source of calcium and a powerful immunity booster. It supports overall health, strength, and daily wellness.", 
    notes: ["Moringa leaf", "Iron", "Antioxidants", "Immunity booster"], 
    formulation: {
      keyBotanicals: "Pure Sri Lankan Moringa oleifera leaf powder.",
      application: "Take daily with meals to support natural energy levels and mineral intake.",
      purityPromise: "Pure herbal capsules containing zero synthetic fillers or additives."
    } 
  },
  { 
    slug: "garcinia-slimming-capsule", 
    name: "Garcinia Slimming Capsules", 
    category: "Supplements", 
    price: 2350, 
    size: "90 capsules", 
    stars: 4.7, 
    tagline: "Ayurway Garcinia Slimming Capsule is a 100% natural product designed to support weight management and reduce body fat safely and effectively.", 
    notes: ["Garcinia", "Green tea", "Ginger", "Weight management"], 
    formulation: {
      keyBotanicals: "Pure Garcinia Cambogia extracts.",
      application: "Take regularly as part of a balanced diet and wellness routine.",
      purityPromise: "100% natural weight management supplement without harsh stimulants."
    } 
  },
  { 
    slug: "mahargha-goraka-capsule", 
    name: "Mahargha Goraka Capsules", category: "Supplements", 
    price: 2550, 
    size: "60 capsules", 
    stars: 4.9, 
    tagline: "Ayurway Mahargha (Goraka Capsule) is a natural Ayurvedic supplement designed to support weight management and help control cholesterol levels. Made using traditional Goraka (Garcinia) extracts, it promotes a healthier body and overall wellness.", 
    notes: ["Goraka", "Cholesterol support", "Metabolism"], 
    formulation: {
      keyBotanicals: "Traditional Goraka (Garcinia) herbal extracts.",
      application: "Consume as recommended to aid metabolism and healthy cholesterol levels.",
      purityPromise: "Authentic Ayurvedic single-herb supplement formulation."
    } 
  },

  { 
    slug: "fresh-honey-200g", 
    name: "Fresh Wild Honey 200g", 
    category: "Natural Foods", 
    price: 1150, 
    size: "200 g", 
    stars: 4.8, 
    tagline: "Ayurway Fresh Honey is pure, natural honey sourced to retain its rich nutrients and natural sweetness. It supports overall wellness while adding a healthy touch to your daily diet.", 
    notes: ["Raw", "Unheated", "Single origin"], 
    formulation: {
      keyBotanicals: "100% pure raw wild honey from highland hives.",
      application: "Enjoy a spoonful daily or drizzle over warm herbal teas and meals.",
      purityPromise: "Unfiltered, unheated raw honey retaining all natural enzymes."
    } 
  },
  { 
    slug: "fresh-honey-400g", 
    name: "Fresh Wild Honey 400g", 
    category: "Natural Foods", 
    price: 2150, 
    size: "400 g", 
    stars: 4.9, 
    tagline: "Ayurway Fresh Honey is pure, natural honey sourced to retain its rich nutrients and natural sweetness. It supports overall wellness while adding a healthy touch to your daily diet.", 
    notes: ["Raw", "Unheated", "Single origin"], 
    formulation: {
      keyBotanicals: "100% pure raw wild honey.",
      application: "Use as a natural daily sweetener and wellness tonic.",
      purityPromise: "Zero added sugars, syrups, or artificial processing."
    } 
  },
  { 
    slug: "fresh-honey-800g", 
    name: "Fresh Wild Honey 800g", 
    category: "Natural Foods", 
    price: 3550, 
    size: "800 g", 
    stars: 4.9, 
    tagline: "Ayurway Fresh Honey is pure, natural honey sourced to retain its rich nutrients and natural sweetness. It supports overall wellness while adding a healthy touch to your daily diet.", 
    notes: ["Raw", "Unheated", "Single origin"], 
    formulation: {
      keyBotanicals: "Pure highland raw wild honey.",
      application: "Family-size jar for everyday culinary and medicinal use.",
      purityPromise: "Harvested directly from ethical wild apiaries."
    } 
  },
  { 
    slug: "aged-honey-200g", 
    name: "Aged Wild Honey 200g (6+ Months)", 
    category: "Natural Foods", 
    price: 1200, 
    size: "200 g", 
    stars: 5.0, 
    tagline: "Ayurway Aged Honey is naturally matured for over 6 months, enhancing its medicinal value and potency. Known in Ayurveda for its therapeutic benefits, it supports digestion, immunity, and overall wellness.", 
    notes: ["Aged 12 months", "Raw", "Dark amber"], 
    formulation: {
      keyBotanicals: "Wild honey naturally matured for over 6 to 12 months.",
      application: "Consumed traditionally in Ayurvedic protocols for enhanced digestive fire (Agni).",
      purityPromise: "Slow-matured raw honey with amplified medicinal properties."
    },
    bestseller: true 
  },
  { 
    slug: "aged-honey-400g", 
    name: "Aged Wild Honey 400g (6+ Months)", 
    category: "Natural Foods", 
    price: 2250, 
    size: "400 g", 
    stars: 4.9, 
    tagline: "Ayurway Aged Honey is naturally matured for over 6 months, enhancing its medicinal value and potency. Known in Ayurveda for its therapeutic benefits, it supports digestion, immunity, and overall wellness.", 
    notes: ["Aged 12 months", "Raw", "Dark amber"], 
    formulation: {
      keyBotanicals: "Long-matured dark amber wild honey.",
      application: "Incorporate into therapeutic home remedies or wellness tonics.",
      purityPromise: "Authentically aged without artificial heat or acceleration."
    } 
  },
  { 
    slug: "aged-honey-800g", 
    name: "Aged Wild Honey 800g (6+ Months)", 
    category: "Natural Foods", 
    price: 4200, 
    size: "800 g", 
    stars: 5.0, 
    tagline: "Ayurway Aged Honey is naturally matured for over 6 months, enhancing its medicinal value and potency. Known in Ayurveda for its therapeutic benefits, it supports digestion, immunity, and overall wellness.", 
    notes: ["Aged 12 months", "Raw", "Dark amber"], 
    formulation: {
      keyBotanicals: "Our most collected year-matured wild honey jar.",
      application: "Ideal for households seeking traditional therapeutic honey reserves.",
      purityPromise: "100% raw, unheated, aged botanical honey."
    } 
  },
  { 
    slug: "honey-garlic", 
    name: "Honey Infused Garlic", 
    category: "Natural Foods", 
    price: 1950, 
    size: "250 g", 
    stars: 4.8, 
    tagline: "Ayurway Honey & Garlic is a powerful natural blend known for boosting immunity and supporting overall health. Combining the goodness of pure honey and garlic, this traditional remedy helps strengthen the body and promote wellness naturally.", 
    notes: ["Immunity", "Fermented garlic", "Raw honey"], 
    formulation: {
      keyBotanicals: "Fermented garlic cloves steeped in raw wild honey.",
      application: "Take one clove with a spoonful of honey each morning for immune support.",
      purityPromise: "Natural traditional remedy free from artificial preservatives."
    } 
  },

  { 
    slug: "almond", 
    name: "California Almonds", 
    category: "Nuts & Seeds", 
    price: 1700, 
    size: "100 g", 
    stars: 4.8, 
    tagline: "Ayurway Almonds are high-quality nuts rich in nutrients, known for supporting brain function, heart health, and overall wellness.", 
    notes: ["Raw", "Unsalted", "Vitamin E"], 
    formulation: {
      keyBotanicals: "Whole premium California almond kernels.",
      application: "Enjoy raw as a daily snack or soak overnight for enhanced nutrient absorption.",
      purityPromise: "Unsalted, unroasted, raw high-grade nut selection."
    } 
  },
  { 
    slug: "pistachio", 
    name: "Roasted Pistachios", 
    category: "Nuts & Seeds", 
    price: 1850, 
    size: "250 g", 
    stars: 4.9, 
    tagline: "Ayurway Pistachios are delicious and nutrient-rich nuts known for supporting heart health, digestion, and overall wellness.", 
    notes: ["Roasted", "Lightly salted", "Protein"], 
    formulation: {
      keyBotanicals: "Lightly roasted and sea-salted pistachio kernels.",
      application: "Ready-to-eat gourmet snacking option.",
      purityPromise: "Carefully roasted without excessive oils or chemical additives."
    } 
  },
  { 
    slug: "walnuts", 
    name: "Walnuts", 
    category: "Nuts & Seeds", 
    price: 1350, 
    size: "100 g", 
    stars: 4.9, 
    tagline: "Ayurway Walnuts are nutrient-rich nuts known for supporting brain health and overall wellness with their high omega-3 content.", 
    notes: ["Raw", "Omega-3", "Whole halves"], 
    formulation: {
      keyBotanicals: "Omega-rich raw walnut halves.",
      application: "Incorporate into morning bowls, salads, or consume directly for cognitive support.",
      purityPromise: "Whole halves selected for maximum nutritional integrity."
    } 
  },
  { 
    slug: "hazelnuts", 
    name: "Hazelnuts", 
    category: "Nuts & Seeds", 
    price: 3000, 
    size: "100 g", 
    stars: 4.8, 
    tagline: "Ayurway Hazelnuts are premium-quality nuts rich in healthy fats, vitamins, and antioxidants that support heart and brain health.", 
    notes: ["Raw", "Unsalted", "Whole"], 
    formulation: {
      keyBotanicals: "Sweet, buttery raw hazelnut kernels.",
      application: "Ideal for everyday snacking, baking, or wholesome culinary creations.",
      purityPromise: "100% natural, unsalted gourmet nut kernels."
    } 
  },
  { 
    slug: "macadamia", 
    name: "Macadamia Nuts", 
    category: "Nuts & Seeds", 
    price: 2550, 
    size: "100 g", 
    stars: 4.8, 
    tagline: "Ayurway Macadamia nuts are premium-quality nuts rich in healthy fats and nutrients, supporting heart health and providing a delicious energy boost.", 
    notes: ["Raw", "Buttery", "Whole"], 
    formulation: {
      keyBotanicals: "Indulgent, buttery whole macadamia kernels.",
      application: "Enjoy in moderation as a nutrient-dense energy snack.",
      purityPromise: "Premium grade pantry nuts with zero artificial flavorings."
    } 
  },
  { 
    slug: "mix-nuts", 
    name: "Mixed Nuts", 
    category: "Nuts & Seeds", 
    price: 2750, 
    size: "500 g", 
    stars: 4.9, 
    tagline: "Ayurway Mix Nuts is a premium blend of carefully selected nuts, providing a rich source of nutrients, healthy fats, and energy for daily wellness.", 
    notes: ["Five nuts", "No additives", "Resealable"], 
    formulation: {
      keyBotanicals: "A curated medley of five premium raw and roasted nuts.",
      application: "Perfect for daily grazing and clean energy sustenance.",
      purityPromise: "Packaged in resealable freshness pouches with no chemical additives."
    } 
  },
  { 
    slug: "cranberry", 
    name: "Ayurway Cranberry", 
    category: "Nuts & Seeds", 
    price: 700, 
    size: "100 g", 
    stars: 4.8, 
    tagline: "Ayurway Cranberry is a nutrient-rich natural product known for its refreshing taste and health benefits. It supports overall wellness and is especially beneficial for maintaining urinary tract health.", 
    notes: ["Urinary wellness", "Antioxidants", "Refreshing taste"], 
    formulation: {
      keyBotanicals: "Nutrient-rich natural cranberry fruit product.",
      application: "Consume as a refreshing daily snack or add to yogurts and breakfast bowls.",
      purityPromise: "Natural superfruit product selected for urinary wellness and antioxidant support."
    } 
  },
  { 
    slug: "blueberry", 
    name: "Ayurway Blueberry", 
    category: "Nuts & Seeds", 
    price: 900, 
    size: "100 g", 
    stars: 4.8, 
    tagline: "Ayurway Blueberry is a delicious and nutrient-packed fruit product rich in antioxidants. It helps support brain function, skin health, and overall wellness.", 
    notes: ["Brain function", "Skin health", "Antioxidants"], 
    formulation: {
      keyBotanicals: "Delicious, nutrient-packed superfruit blueberry product.",
      application: "Enjoy as a healthy snack to support cognitive vitality and skin radiance.",
      purityPromise: "High-antioxidant superfruit product free from synthetic colorants."
    } 
  },
  { 
    slug: "blueberry-cranberry-mix", 
    name: "Ayurway Blueberry & Cranberry Mix", 
    category: "Nuts & Seeds", 
    price: 800, 
    size: "100 g", 
    stars: 4.9, 
    tagline: "Ayurway Blueberry & Cranberry Mix is a delicious combination of two superfruits packed with antioxidants and nutrients. It supports overall health while offering a tasty and refreshing snack option. Contains equal amounts of blueberries and cranberries.", 
    notes: ["Equal blend", "Superfruit mix", "Antioxidants"], 
    formulation: {
      keyBotanicals: "Equal parts nutrient-packed blueberries and cranberries.",
      application: "Snack directly or mix into morning cereals for a balanced superfruit boost.",
      purityPromise: "Harmonious blend of two antioxidant-dense superfruits without synthetic dyes."
    } 
  },
  { 
    slug: "chia-seeds", 
    name: "Chia Seeds", 
    category: "Nuts & Seeds", 
    price: 950, 
    size: "100 g", 
    stars: 4.9, 
    tagline: "Ayurway Chia Seeds are a superfood rich in fiber, omega-3 fatty acids, and nutrients that support digestion, energy, and overall health.", 
    notes: ["Fibre", "Omega-3", "Superfood"], 
    formulation: {
      keyBotanicals: "Raw organic chia seed superfood.",
      application: "Soak in water or plant milk to create puddings or mix into morning smoothies.",
      purityPromise: "100% pure raw superfood seeds."
    } 
  },
  { 
    slug: "flax-seeds", 
    name: "Flax Seeds", 
    category: "Nuts & Seeds", 
    price: 650, 
    size: "100 g", 
    stars: 4.8, 
    tagline: "Ayurway Flax Seeds are rich in omega-3 fatty acids, fiber, and nutrients that support heart health, digestion, and overall wellness.", 
    notes: ["Heart health", "Digestive support", "Omega-3"], 
    formulation: {
      keyBotanicals: "Golden-brown raw flax seeds.",
      application: "Ground and sprinkle over salads or porridges for optimal nutrient absorption.",
      purityPromise: "Clean, raw seeds selected for optimal dietary fiber and omega-3 content."
    } 
  },
  { 
    slug: "pumpkin-seeds", 
    name: "Pumpkin Seeds", 
    category: "Nuts & Seeds", 
    price: 1000, 
    size: "100 g", 
    stars: 4.9, 
    tagline: "Ayurway Pumpkin Seeds are a powerful superfood rich in nutrients that support immunity, heart health, and overall wellness.", 
    notes: ["Zinc & magnesium", "Immunity", "Raw kernels"], 
    formulation: {
      keyBotanicals: "Nutrient-dense green pumpkin seed kernels.",
      application: "Eat raw as a snack or toast lightly for soups and salads.",
      purityPromise: "Unsalted raw kernels rich in vital minerals."
    } 
  },
  { 
    slug: "sunflower-seeds", 
    name: "Sunflower Seeds", 
    category: "Nuts & Seeds", 
    price: 950, 
    size: "100 g", 
    stars: 4.8, 
    tagline: "Ayurway Sunflower Seeds are nutrient-rich and packed with healthy fats, vitamins, and minerals that support overall health and wellness.", 
    notes: ["Vitamin E", "Healthy fats", "Crisp bite"], 
    formulation: {
      keyBotanicals: "Crisp raw sunflower seed kernels.",
      application: "Incorporate into homemade breads, salads, or everyday trail mixes.",
      purityPromise: "100% natural unsalted seeds."
    } 
  },
];

export const categories = [
  "Skincare",
  "Hair Care",
  "Body Care",
  "Feminine Care",
  "Wellness Oils",
  "Supplements",
  "Natural Foods",
  "Nuts & Seeds",
];

export const formatLKR = (value) => `LKR ${value.toLocaleString("en-LK")}`;