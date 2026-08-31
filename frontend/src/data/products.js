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
  // --- BODY CARE ---
  {
    slug: "ayurway-saffron",
    name: "Pure Kesar Saffron",
    category: "Body Care",
    price: 2300,
    size: "1 g",
    stars: 5.0,
    tagline: "Ayurway Saffron is a premium-quality natural product known as one of the finest saffron varieties in the world. Carefully sourced and processed to preserve its purity and potency, it offers multiple benefits for beauty, wellness, and overall health.",
    notes: ["Pure Saffron", "Grade A1 Threads", "Radiance"],
    about: "Ayurway Saffron is a premium-quality natural product known as one of the finest saffron varieties in the world. Carefully sourced and processed to preserve its purity and potency, it offers multiple benefits for beauty, wellness, and overall health.",
    benefits: [
      { title: "Skin Brightening", desc: "Helps improve complexion and promote a natural glow." },
      { title: "Rich in Antioxidants", desc: "Protects the body from free radicals and supports overall health." },
      { title: "Supports Wellness", desc: "Traditionally used to improve vitality and well-being." },
      { title: "Enhances Skin Care", desc: "Can be used in face packs and home remedies for radiant skin." }
    ],
    ingredients: [
      { name: "Pure Saffron", desc: "High-quality saffron strands with natural potency and aroma." }
    ],
    whyChoose: [
      { title: "Premium Quality", desc: "Carefully selected to ensure the best grade saffron." },
      { title: "Multi-Purpose Use", desc: "Suitable for beauty, health, and traditional remedies." },
      { title: "Natural & Safe", desc: "Free from additives and harmful chemicals." },
      { title: "Trusted Product", desc: "Produced under Ayurway quality standards." }
    ],
    ritual: [
      "Soak a few saffron strands in warm water or milk.",
      "Use in face packs for skin brightening.",
      "Consume with milk as part of traditional wellness routines."
    ],
    bestseller: true
  },
  {
    slug: "ayurway-shoba-body-lotion",
    name: "Ayurway Shoba Body Lotion",
    category: "Body Care",
    price: 1950,
    size: "200 g",
    stars: 4.9,
    tagline: "Introducing Ayurway Shoba Body Lotion, the perfect blend of natural ingredients designed to nourish, protect, and moisturize your skin.",
    notes: ["Sandalwood", "Red Sandalwood", "Vitamin E", "Saffron"],
    about: "Introducing Ayurway Shoba Body Lotion, the perfect blend of natural ingredients designed to nourish, protect, and moisturize your skin. Suitable for all skin types, this luxurious body lotion combines the goodness of Sandalwood, Red Sandalwood, Vitamin E, and Saffron to provide comprehensive skin care without any harmful chemicals. Experience the ultimate in skin hydration and sun protection with Ayurway Shoba Body Lotion.",
    benefits: [
      { title: "Moisturizing", desc: "Deeply hydrates leaving skin soft and supple." },
      { title: "Sun Protection", desc: "Provides natural protection from UV rays." },
      { title: "Skin Nourishing", desc: "Infused with essential nutrients to nourish your skin." }
    ],
    ingredients: [
      { name: "Sandalwood & Red Sandalwood", desc: "Soothe and enhance skin tone." },
      { name: "Vitamin E & Saffron", desc: "Nourish and brighten complexion." }
    ],
    whyChoose: [
      { title: "All Skin Types", desc: "Safe and nourishing for dry, oily, or sensitive skin." },
      { title: "Comprehensive Care", desc: "Offers moisturizing, nourishing, and protective benefits." }
    ],
    ritual: [
      "Take a generous amount of Ayurway Shoba Body Lotion.",
      "Gently massage the lotion into your skin using circular motions.",
      "Allow the lotion to fully absorb into your skin for maximum benefits.",
      "Apply daily after showering or whenever your skin needs hydration."
    ]
  },
  {
    slug: "ayurway-ashirwada-foot-cream",
    name: "Ayurway Ashirwada Foot Cream",
    category: "Body Care",
    price: 1250,
    size: "100 g",
    stars: 4.9,
    tagline: "Are your heels cracked, dry, or rough? Do your feet feel dull compared to the rest of your body? Ayurway Ashirwada Foot Cream is the perfect solution.",
    notes: ["Herbal Extracts", "Deep Moisturization"],
    about: "Are your heels cracked, dry, or rough? Do your feet feel dull compared to the rest of your body? Ayurway Ashirwada Foot Cream is the perfect solution. Made with natural Ayurvedic ingredients and modern technology, it helps repair cracked heels, soften rough skin, and deeply moisturise your feet. Safe, gentle, and easy to use, it is suitable for daily care even during pregnancy and for children leaving your feet soft, healthy, and well-nourished.",
    benefits: [
      { title: "Repairs Cracked Heels", desc: "Effectively heals cracked and damaged skin." },
      { title: "Softens Rough Skin", desc: "Helps smooth and restore rough, hardened feet." },
      { title: "Deep Hydration", desc: "Moisturises dry skin and prevents further dryness." }
    ],
    ingredients: [
      { name: "Natural Herbal Extracts", desc: "Heal and soften rough skin areas." }
    ],
    whyChoose: [
      { title: "Ayurvedic Formula", desc: "Made with natural herbal ingredients for safe care." },
      { title: "Pregnancy-Friendly", desc: "Safe daily care for all age groups including pregnant mothers." }
    ],
    ritual: [
      "Clean your feet thoroughly and dry them well.",
      "Apply a sufficient amount of cream to the affected areas.",
      "Gently massage until fully absorbed.",
      "Use daily, preferably at night, for best results."
    ]
  },
  {
    slug: "baby-soap",
    name: "Herbal Baby Soap",
    category: "Body Care",
    price: 800,
    size: "100 g",
    stars: 4.9,
    tagline: "Ayurway Baby Soap is a gentle glycerin-based soap specially made for babies using traditional Ayurvedic Rath Thel (herbal oil).",
    notes: ["Rath Thel", "Glycerin", "Herbal Extracts"],
    about: "Ayurway Baby Soap is a gentle glycerin-based soap specially made for babies using traditional Ayurvedic Rath Thel (herbal oil). It carefully cleanses delicate skin while keeping it soft, moisturised, and protected.",
    benefits: [
      { title: "Gentle Cleansing", desc: "Cleans baby's skin without causing dryness or irritation." },
      { title: "Moisturising", desc: "Glycerin helps retain moisture and keeps skin soft." },
      { title: "Skin Protection", desc: "Helps protect delicate baby skin from dryness and irritation." }
    ],
    ingredients: [
      { name: "Rath Thel (Herbal Oil)", desc: "Traditional Ayurvedic oil used for nourishing and protecting skin." },
      { name: "Glycerin", desc: "Helps lock in moisture and maintain soft, hydrated skin." }
    ],
    whyChoose: [
      { title: "Baby-Friendly Formula", desc: "Specially designed for delicate and sensitive baby skin." },
      { title: "Mild & Gentle", desc: "Does not strip natural oils from the skin." }
    ],
    ritual: [
      "Wet your baby’s skin with lukewarm water.",
      "Gently apply the soap and lather softly.",
      "Rinse thoroughly with clean water.",
      "Pat dry with a soft towel."
    ]
  },
  {
    slug: "brazilian-waxing",
    name: "Brazilian Waxing Kit",
    category: "Body Care",
    price: 2800,
    size: "Kit",
    stars: 4.8,
    tagline: "Salon-grade hair removal with a soothing herbal after-oil.",
    notes: ["Low temp wax", "Aloe after-oil"],
    about: "Salon-grade hair removal kit providing smooth and easy hair removal at home.",
    benefits: [{ title: "Smooth Hair Removal", desc: "Effective and long-lasting." }],
    ingredients: [{ name: "Natural Wax Resins", desc: "Gentle hair removal." }],
    whyChoose: [{ title: "Salon Grade", desc: "Professional results at home." }],
    ritual: ["Warm wax, apply in direction of hair growth, and pull off smoothly."]
  },

  // --- FACE CARE ---
  {
    slug: "ayurway-saffron-jojoba-night-serum",
    name: "Saffron Jojoba Night Serum",
    category: "Face Care",
    price: 2350,
    size: "20 ml",
    stars: 4.9,
    tagline: "Transform your nighttime skincare routine with Ayurway Saffron Jojoba Night Serum, a luxurious blend designed to nourish and rejuvenate your skin while you sleep.",
    notes: ["Saffron", "Cold-pressed jojoba", "Vitamin E"],
    about: "Transform your nighttime skincare routine with Ayurway Saffron Jojoba Night Serum, a luxurious blend designed to nourish and rejuvenate your skin while you sleep. This potent serum harnesses the power of natural ingredients to provide deep hydration and essential nutrients, ensuring you wake up with a radiant, youthful complexion.",
    benefits: [
      { title: "Hydrating", desc: "Deeply moisturizes your skin, locking in essential moisture to prevent dryness and flakiness." },
      { title: "Anti-Aging", desc: "Reduces the appearance of fine lines and wrinkles, promoting a smoother, more youthful look." },
      { title: "Soothing", desc: "Calms and soothes irritated skin, reducing redness and inflammation for a balanced, even tone." },
      { title: "Wrinkle Removal", desc: "Effectively diminishes the visibility of wrinkles, enhancing your skin’s texture and firmness." }
    ],
    ingredients: [
      { name: "Saffron", desc: "Powerful antioxidant properties for skin-enhancing radiance." },
      { name: "Jojoba Oil", desc: "Provides deep hydration and mimics natural skin oils." }
    ],
    whyChoose: [
      { title: "100% Natural", desc: "Crafted from the finest natural ingredients, free from harmful chemicals and preservatives." },
      { title: "Overnight Recovery", desc: "Designed to work while you sleep, accelerating skin recovery and renewal." },
      { title: "Pure Ingredients", desc: "Enriched with the goodness of saffron and jojoba." }
    ],
    ritual: [
      "Begin with a clean face, free from makeup and impurities.",
      "Dispense a few drops of the serum onto your fingertips.",
      "Gently massage the serum into your face and neck, focusing on fine lines.",
      "Allow the serum to absorb fully into your skin overnight."
    ],
    bestseller: true
  },
  {
    slug: "ayurway-saffron-niacinamide-night-serum",
    name: "Saffron Niacinamide Night Serum",
    category: "Face Care",
    price: 2350,
    size: "20 ml",
    stars: 4.9,
    tagline: "Unveil brighter, healthier-looking skin with Ayurway Saffron Niacinamide Night Serum, a powerful overnight treatment designed to repair, hydrate, and restore your skin while you sleep.",
    notes: ["Saffron", "Niacinamide", "Liquorice"],
    about: "Unveil brighter, healthier-looking skin with Ayurway Saffron Niacinamide Night Serum, a powerful overnight treatment designed to repair, hydrate, and restore your skin while you sleep. Enriched with the natural goodness of saffron and the skin-renewing benefits of niacinamide, this lightweight serum works deeply to improve skin tone, reduce dullness, and enhance your natural glow. Wake up to refreshed, radiant, and revitalized skin every morning.",
    benefits: [
      { title: "Brightening", desc: "Saffron helps reduce dark spots and pigmentation, promoting a naturally radiant complexion." },
      { title: "Skin Repair", desc: "Works overnight to restore and rejuvenate tired, dull skin." },
      { title: "Hydration", desc: "Maintains moisture balance, leaving your skin soft and nourished." },
      { title: "Barrier Strengthening", desc: "Supports and strengthens the skin barrier against environmental stressors." }
    ],
    ingredients: [
      { name: "Saffron", desc: "Known for natural brightening properties and reducing pigmentation." },
      { name: "Niacinamide", desc: "A powerful form of Vitamin B3 that improves skin elasticity and strengthens the skin barrier." }
    ],
    whyChoose: [
      { title: "Targeted Night Care", desc: "Specially formulated to work during your skin’s natural repair cycle at night." },
      { title: "Lightweight Formula", desc: "Absorbs quickly without feeling greasy or heavy." },
      { title: "Glow Boosting", desc: "Revives dull and uneven skin tone." }
    ],
    ritual: [
      "Start with a clean, dry face before bedtime.",
      "Apply a few drops onto your fingertips.",
      "Gently massage onto your face and neck in upward motions.",
      "Leave on overnight for best results."
    ]
  },
  {
    slug: "ayurway-swetha-facewash-with-real-saffron",
    name: "Swetha Saffron Face Wash",
    category: "Face Care",
    price: 1150,
    size: "100 ml",
    stars: 4.8,
    tagline: "Unveil your skin’s natural radiance with Ayurway Shwetha Real Saffron Face Wash, a luxurious blend of powerful natural ingredients designed to cleanse, nourish, and rejuvenate your skin.",
    notes: ["Real Saffron", "Sandalwood", "Green Tea", "Liquorice", "Vitamin E"],
    about: "Unveil your skin’s natural radiance with Ayurway Shwetha Real Saffron Face Wash, a luxurious blend of powerful natural ingredients designed to cleanse, nourish, and rejuvenate your skin. Suitable for all skin types, this face wash combines the brightening properties of saffron with the soothing and antioxidant-rich benefits of sandalwood, green tea, liquorice, and vitamin E. Experience a refreshing and revitalizing cleanse with every wash.",
    benefits: [
      { title: "Brightening", desc: "Saffron and liquorice work together to enhance your skin’s complexion and reduce pigmentation." },
      { title: "Cleansing", desc: "Effectively removes dirt, excess oil, and impurities, leaving skin clean and refreshed." },
      { title: "Nourishing", desc: "Enriched with vitamin E to deeply nourish and hydrate your skin." },
      { title: "Soothing", desc: "Sandalwood and green tea provide calming and anti-inflammatory properties." }
    ],
    ingredients: [
      { name: "Saffron", desc: "Renowned for improving skin tone and reducing dark spots." },
      { name: "Sandalwood", desc: "Soothes and cools the skin, reducing inflammation." },
      { name: "Green Tea", desc: "Rich in antioxidants protecting against environmental damage." },
      { name: "Liquorice", desc: "Helps lighten dark spots and even out skin tone." }
    ],
    whyChoose: [
      { title: "Natural Ingredients", desc: "Formulated with high-quality natural ingredients." },
      { title: "Comprehensive Care", desc: "Offers brightening, cleansing, nourishing, and soothing benefits." },
      { title: "Gentle Formula", desc: "Free from harsh chemicals, suitable for sensitive skin." }
    ],
    ritual: [
      "Start with a damp face.",
      "Squeeze a small amount of face wash onto your palm.",
      "Gently massage the face wash into your skin using circular motions.",
      "Rinse thoroughly with water and pat dry.",
      "For best results, use morning and night."
    ]
  },
  {
    slug: "ayurway-megaha-face-wash",
    name: "Ayurway Megaha Face Wash",
    category: "Face Care",
    price: 900,
    size: "100 ml",
    stars: 4.8,
    tagline: "Revitalize your skincare routine with Ayurway Mega Face Wash, expertly formulated to deliver a deep cleanse without over-drying your skin.",
    notes: ["Nutgrass", "Deep Cleansing", "Oil Control"],
    about: "Revitalize your skincare routine with Ayurway Mega Face Wash, expertly formulated to deliver a deep cleanse without over-drying your skin. Infused with the natural goodness of Nutgrass, this face wash penetrates deeply to clean pores and help prevent pimples, making it an ideal choice for those with pimple-prone and oily skin.",
    benefits: [
      { title: "Deep Cleansing", desc: "Effectively removes dirt, excess oil, and impurities from your skin." },
      { title: "Non-Drying", desc: "Cleanses without stripping your skin of its natural moisture." },
      { title: "Pore Penetration", desc: "Penetrates deep into pores to clear out impurities and prevent pimples." },
      { title: "Oil Control", desc: "Controls excess oil production, ensuring skin stays matte." }
    ],
    ingredients: [
      { name: "Nutgrass", desc: "Known for anti-inflammatory and antibacterial properties to soothe skin and control oil." }
    ],
    whyChoose: [
      { title: "Natural Ingredients", desc: "Enriched with natural Nutgrass without harsh chemical additives." },
      { title: "Balanced Formula", desc: "Cleanses deeply without causing dryness, suitable for daily use." }
    ],
    ritual: [
      "Start with a damp face.",
      "Squeeze a small amount of the face wash onto your palm.",
      "Gently massage into skin focusing on oily areas.",
      "Rinse thoroughly with water.",
      "Gently pat your face dry with a clean towel."
    ]
  },
  {
    slug: "ayurway-tee-tree-and-manjistha-toner",
    name: "Tea Tree and Manjistha Toner",
    category: "Face Care",
    price: 850,
    size: "100 ml",
    stars: 4.7,
    tagline: "Unleash the power of natural ingredients with the Tea Tree and Manjistha Toner, specially formulated to maintain your skin’s pH balance while providing antibacterial protection.",
    notes: ["Tea Tree", "Manjistha", "Rose Water"],
    about: "Unleash the power of natural ingredients with the Tea Tree and Manjistha Toner, specially formulated to maintain your skin’s pH balance while providing antibacterial protection. This alcohol-free toner is gentle yet effective, making it suitable for all skin types, including sensitive and acne-prone skin. Experience the refreshing and soothing benefits as it helps reduce pimples and enhances your skin’s overall health.",
    benefits: [
      { title: "Natural Antibacterial Protection", desc: "Utilizes tea tree extract to help reduce and prevent pimples." },
      { title: "Alcohol-Free", desc: "Maintains skin's natural pH balance without dryness or irritation." },
      { title: "Hydrating and Soothing", desc: "Rose water and deionized water provide hydration and soothe skin." }
    ],
    ingredients: [
      { name: "Tea Tree Extract", desc: "Antibacterial and anti-inflammatory properties to combat acne." },
      { name: "Manjistha Extract", desc: "Ayurvedic herb promoting skin health and natural glow." },
      { name: "Rose Water", desc: "Hydrates and provides a calming effect." }
    ],
    whyChoose: [
      { title: "Alcohol-Free Formula", desc: "Gentle on skin, preserving natural moisture." },
      { title: "Natural Ingredients", desc: "Combines tea tree and manjistha with hydrating rose water." }
    ],
    ritual: [
      "Apply a generous amount onto a cotton pad and wipe gently over the skin, focusing on areas prone to pimples.",
      "Alternatively, spray directly onto skin and allow to dry naturally."
    ]
  },
  {
    slug: "licorice-toner",
    name: "Licorice Toner",
    category: "Face Care",
    price: 850,
    size: "120 ml",
    stars: 4.8,
    tagline: "Refresh and hydrate your skin with Ayurway Licorice Toner, a gentle herbal formula specially designed for dry and normal skin.",
    notes: ["Licorice Extract", "Herbal Extracts", "Hydrating Agents"],
    about: "Refresh and hydrate your skin with Ayurway Licorice Toner, a gentle herbal formula specially designed for dry and normal skin. This soothing toner helps restore moisture balance, calm the skin, and enhance your natural glow, leaving your face feeling soft, fresh, and revitalised after every use.",
    benefits: [
      { title: "Hydration", desc: "Replenishes moisture and prevents dryness." },
      { title: "Soothing Care", desc: "Calms irritation and refreshes the skin." },
      { title: "Brightening", desc: "Licorice helps improve skin tone and adds a natural glow." },
      { title: "Prepares Skin", desc: "Perfectly preps your skin for serums and moisturisers." }
    ],
    ingredients: [
      { name: "Licorice Extract", desc: "Helps brighten skin and even out tone." },
      { name: "Hydrating Agents", desc: "Maintain moisture balance for soft, supple skin." }
    ],
    whyChoose: [
      { title: "Herbal Formula", desc: "Made with natural ingredients for gentle daily care." },
      { title: "Perfect for Dry Skin", desc: "Designed to hydrate without stripping natural oils." }
    ],
    ritual: [
      "After cleansing, apply a small amount onto a cotton pad or your hands.",
      "Gently wipe or pat over your face and neck.",
      "Follow with your serum or moisturiser for best results."
    ]
  },
  {
    slug: "apsara-day-cream",
    name: "Ayurway Apsara Day Cream",
    category: "Face Care",
    price: 2350,
    size: "50 g",
    stars: 4.9,
    tagline: "Experience the luxurious care of Ayurway Apsara Day Cream, a premium skincare solution designed to nourish, protect, and rejuvenate your skin.",
    notes: ["Niacinamide", "Licorice", "Saffron"],
    about: "Experience the luxurious care of Ayurway Apsara Day Cream, a premium skincare solution designed to nourish, protect, and rejuvenate your skin. Enriched with the natural goodness of niacinamide, licorice, and saffron, this day cream is perfect for dry and normal skin types. Enjoy the benefits of sun protection, deep moisturization, anti-aging, and brightening with a formula free from bleaching agents, parabens, heavy metals, and formaldehyde.",
    benefits: [
      { title: "Sun Protection", desc: "Shields skin from harmful UV rays." },
      { title: "Moisturizing", desc: "Provides intense hydration leaving skin soft and supple." },
      { title: "Anti-Aging", desc: "Reduces fine lines and wrinkles." },
      { title: "Brightening", desc: "Enhances skin radiance for an even-toned complexion." }
    ],
    ingredients: [
      { name: "Niacinamide", desc: "Deeply hydrates and supports skin elasticity." },
      { name: "Licorice", desc: "Brightens skin and reduces hyperpigmentation." },
      { name: "Saffron", desc: "Improves texture and provides a natural glow." }
    ],
    whyChoose: [
      { title: "Safe and Clean", desc: "Free from harmful chemicals like parabens and heavy metals." },
      { title: "Dry and Normal Skin", desc: "Tailored to meet the needs of dry and normal skin types." }
    ],
    ritual: [
      "Start with clean, dry skin.",
      "Take a small amount of cream and apply to face and neck.",
      "Massage in upward circular motions until fully absorbed.",
      "Use every morning to protect your skin throughout the day."
    ]
  },
  {
    slug: "diwyangana-day-cream",
    name: "Diwyangana Day Cream",
    category: "Face Care",
    price: 2350,
    size: "50 g",
    stars: 4.7,
    tagline: "Discover the perfect balance of care and protection with Ayurway Diwyangana Day Cream, a specially formulated skincare solution for oily and combination skin types.",
    notes: ["Vitamin B5", "Sandalwood", "Saffron"],
    about: "Discover the perfect balance of care and protection with Ayurway Diwyangana Day Cream, a specially formulated skincare solution for oily and combination skin types. Infused with Vitamin B5, sandalwood and saffron, this day cream offers sun protection, deep moisturization, anti-aging and brightening support while remaining free from bleaching agents, parabens, heavy metals and formaldehyde.",
    benefits: [
      { title: "Sun Protection", desc: "Shields skin from harmful UV rays." },
      { title: "Moisturizing", desc: "Provides lightweight yet effective hydration." },
      { title: "Anti-Aging", desc: "Helps reduce fine lines and supports youthfulness." },
      { title: "Brightening", desc: "Enhances skin radiance." }
    ],
    ingredients: [
      { name: "Vitamin B5", desc: "Deeply hydrates and soothes skin." },
      { name: "Sandalwood", desc: "Calms skin and reduces oiliness." },
      { name: "Saffron", desc: "Rich in antioxidants for glow and pigmentation care." }
    ],
    whyChoose: [
      { title: "Oily & Combination Skin", desc: "Tailored to support hydration without excess oil." },
      { title: "Clean Formula", desc: "Free from parabens and bleaching agents." }
    ],
    ritual: [
      "Cleanse your face and neck.",
      "Apply a small amount of cream evenly to dry skin.",
      "Massage gently until fully absorbed.",
      "Use daily in the morning as part of your skincare routine."
    ]
  },
  {
    slug: "lodhara-cream",
    name: "Lodhara Acne Cream",
    category: "Face Care",
    price: 2350,
    size: "50 g",
    stars: 4.8,
    tagline: "Achieve clear, healthy skin with Ayurway Lodhra Acne Treatment Cream, a powerful blend designed to combat acne and promote skin repair.",
    notes: ["Salicylic Acid", "Lodhra", "Coriander", "Saffron"],
    about: "Achieve clear, healthy skin with Ayurway Lodhra Acne Treatment Cream, a powerful blend designed to combat acne and promote skin repair. Formulated with the natural goodness of Lodhra (Symplocos racemosa), coriander, saffron, and the acne-fighting properties of salicylic acid, this cream targets acne and pimples effectively. For optimal results, pair it with Ayurway Tea Tree and Manjistha Toner and Ayurway Mega Face Wash.",
    benefits: [
      { title: "Acne Removal", desc: "Effectively reduces acne and pimples." },
      { title: "Pimple Repair", desc: "Promotes healing and repair of acne-affected skin." }
    ],
    ingredients: [
      { name: "Salicylic Acid", desc: "Exfoliates skin, unclogs pores, and reduces inflammation." },
      { name: "Lodhra", desc: "Anti-inflammatory and astringent properties." },
      { name: "Coriander", desc: "Fights acne-causing bacteria." },
      { name: "Saffron", desc: "Brightens skin and reduces acne scar pigmentation." }
    ],
    whyChoose: [
      { title: "Natural Blend", desc: "Utilizes natural ingredients to treat and soothe skin." }
    ],
    ritual: [
      "Wash face with Ayurway Mega Face Wash to remove dirt and excess oil.",
      "Apply Ayurway Tea Tree and Manjistha Toner to balance your skin’s pH.",
      "Take a pea-sized amount of Lodhra Cream and gently apply to affected areas.",
      "Gently massage the cream into the skin until fully absorbed.",
      "Use twice a day, morning and night, for best results."
    ]
  },

  // --- HAIR CARE ---
  {
    slug: "ayurway-hair-oil",
    name: "Ayurway Hair Oil",
    category: "Hair Care",
    price: 2150,
    size: "100 ml",
    stars: 4.9,
    tagline: "Discover the secret to beautiful, healthy hair with Ayurway Hair Oil, crafted from 100% natural ingredients based on ancient Ayurvedic recipes.",
    notes: ["Natural Herbs", "Hair Fall Control", "Anti-Dandruff"],
    about: "Discover the secret to beautiful, healthy hair with Ayurway Hair Oil, crafted from 100% natural ingredients based on ancient Ayurvedic recipes. This versatile hair oil is designed to address a variety of hair concerns while promoting overall hair health. Whether you’re dealing with hair fall, dandruff, or dry, damaged hair, Ayurway Hair Oil is your go-to solution for luscious, shiny locks.",
    benefits: [
      { title: "Hair Fall Control", desc: "Strengthens hair from roots, reducing hair fall." },
      { title: "Anti-Dandruff", desc: "Combats dandruff keeping scalp clean and flake-free." },
      { title: "Scalp Heat Control", desc: "Balances scalp heat and prevents irritation." },
      { title: "Shiny, Healthy Hair", desc: "Enhances the natural shine and softness of your hair." }
    ],
    ingredients: [
      { name: "Traditional Ayurvedic Herbs", desc: "Blended for comprehensive hair health." }
    ],
    whyChoose: [
      { title: "Ancient Ayurvedic Recipe", desc: "Traditional methods ensuring maximum efficacy and safety." },
      { title: "100% Natural Ingredients", desc: "Free from harmful chemicals and synthetic additives." },
      { title: "Versatile Use", desc: "Suitable for addressing a wide range of hair concerns." }
    ],
    ritual: [
      "Pour a sufficient amount of Ayurway Hair Oil onto your palms.",
      "Gently massage the oil into your scalp and hair, ensuring even distribution.",
      "Leave the oil on for at least 30 minutes, or overnight for deeper conditioning.",
      "Rinse thoroughly with a mild shampoo."
    ],
    bestseller: true
  },
  {
    slug: "ayurway-leave-on-hair-oil",
    name: "Ayurway Leave On Hair Oil",
    category: "Hair Care",
    price: 1150,
    size: "50 ml",
    stars: 4.8,
    tagline: "Say goodbye to damaged, frizzy hair and hello to smooth, manageable locks with Ayurway Leave On Hair Oil.",
    notes: ["Natural Rose Oil", "Vitamin E", "Frizz Control"],
    about: "Say goodbye to damaged, frizzy hair and hello to smooth, manageable locks with Ayurway Leave On Hair Oil. This luxurious hair oil is designed to nourish and improve your hair’s health, making it ideal for those dealing with the challenges of frequent tying and stubborn hair. Made from 100% natural ingredients, it’s perfect for both adults and kids, providing a gentle and effective solution for easy combing and styling.",
    benefits: [
      { title: "Nourishes Hair", desc: "Deeply nourishes and hydrates hair." },
      { title: "Controls Frizz", desc: "Tames frizzy hair making it manageable." },
      { title: "Repairs Damage", desc: "Strengthens and repairs damaged hair." },
      { title: "Gentle on Kids' Hair", desc: "Makes combing and styling their hair trouble-free." }
    ],
    ingredients: [
      { name: "Natural Rose Oil", desc: "Adds pleasant fragrance and promotes scalp health." },
      { name: "Vitamin E", desc: "Nourishes and protects hair strands." }
    ],
    whyChoose: [
      { title: "100% Natural", desc: "Crafted from pure natural ingredients without harmful chemicals." },
      { title: "Ideal for All Ages", desc: "Suitable for both adults and children." },
      { title: "Easy Application", desc: "Convenient spray bottle for easy, mess-free application." }
    ],
    ritual: [
      "Spray once or twice onto your palm.",
      "Gently apply the oil to your hair, focusing on the ends.",
      "Comb through and style as desired."
    ]
  },
  {
    slug: "ayurway-hair-serum",
    name: "Ayurway Hair Serum",
    category: "Hair Care",
    price: 1500,
    size: "30 ml",
    stars: 4.8,
    tagline: "Discover the ultimate solution for hair fall control, dandruff, premature graying, and split ends with Ayurway Hair Serum.",
    notes: ["Almond", "Jojoba", "Avocado", "Rosemary", "Tea Tree"],
    about: "Discover the ultimate solution for hair fall control, dandruff, premature graying, and split ends with Ayurway Hair Serum. This 100% natural hair serum is formulated with a potent blend of nourishing oils, making it the perfect choice for those who prefer a non-greasy alternative to traditional Ayurvedic oils. With a unique combination of almond, jojoba, avocado, virgin coconut, sunflower, blackseed, rosemary, lavender, tea tree, cedarwood, and ylang-ylang oils, this serum provides comprehensive care for all your hair needs.",
    benefits: [
      { title: "Hair Fall Control", desc: "Strengthens hair follicles reducing hair fall." },
      { title: "Dandruff Solution", desc: "Combats dandruff keeping scalp clean." },
      { title: "Split Ends Solution", desc: "Nourishes and repairs split ends." },
      { title: "Premature Graying Solution", desc: "Helps to delay premature graying." }
    ],
    ingredients: [
      { name: "Almond, Jojoba & Avocado Oils", desc: "Deep hydration and nourishment." },
      { name: "Rosemary & Tea Tree Oils", desc: "Stimulate follicles and provide antimicrobial care." }
    ],
    whyChoose: [
      { title: "Natural Ingredients", desc: "Formulated with high-quality natural oils without preservatives." },
      { title: "Non-Greasy", desc: "Lightweight alternative to traditional heavy hair oils." },
      { title: "Comprehensive Care", desc: "Addresses multiple hair concerns simultaneously." }
    ],
    ritual: [
      "Dispense a few drops of Ayurway Hair Serum into your palm.",
      "Gently massage the serum into your scalp and hair, focusing on the roots and ends.",
      "For best results, leave the serum on overnight and wash it off in the morning.",
      "Can be used daily for ongoing care and maintenance."
    ]
  },
  {
    slug: "ayurway-amurtha-shampoo",
    name: "Amurtha Herbal Shampoo",
    category: "Hair Care",
    price: 1125,
    size: "200 ml",
    stars: 4.7,
    tagline: "Discover the ultimate in hair care with Ayurway Amurtha Shampoo, a unique formulation designed to cleanse, nourish, and revitalize your hair and scalp.",
    notes: ["Triphala", "Saffron", "Castor Oil", "Vitamin E"],
    about: "Discover the ultimate in hair care with Ayurway Amurtha Shampoo, a unique formulation designed to cleanse, nourish, and revitalize your hair and scalp. Suitable for all hair types, this shampoo harnesses the power of Triphala (a blend of Aralu, Bulu, and Nelli), saffron, castor oil, and vitamin E to provide a holistic approach to hair health. Experience the benefits of ancient Ayurvedic wisdom with every wash, and enjoy hair that is clean, healthy, and full of life.",
    benefits: [
      { title: "Cleansing", desc: "Gently cleanses hair and scalp removing impurities." },
      { title: "Nourishing", desc: "Deeply nourishes hair promoting healthy growth." },
      { title: "Strengthening", desc: "Strengthens hair follicles reducing breakage." },
      { title: "Revitalizing", desc: "Enhances natural shine and softness." }
    ],
    ingredients: [
      { name: "Triphala (Aralu, Bulu, Nelli)", desc: "Detoxifies and rejuvenates the scalp." },
      { name: "Saffron", desc: "Enhances hair health and imparts a natural shine." },
      { name: "Castor Oil", desc: "Deeply moisturizes and promotes thicker hair." },
      { name: "Vitamin E", desc: "Protects the hair from environmental damage." }
    ],
    whyChoose: [
      { title: "Ancient Formula", desc: "Combines Triphala with modern herbal safety standards." },
      { title: "All Hair Types", desc: "Gentle enough for daily use across all hair types." }
    ],
    ritual: [
      "Start with wet hair and scalp.",
      "Apply a generous amount of Ayurway Amurtha Shampoo.",
      "Gently massage into your scalp using circular motions, working it into a rich lather.",
      "Rinse thoroughly with water.",
      "Follow with a conditioner if needed."
    ]
  },
  {
    slug: "ayurway-amurtha-conditioner",
    name: "Amurtha Herbal Conditioner",
    category: "Hair Care",
    price: 1125,
    size: "200 ml",
    stars: 4.8,
    tagline: "Enhance your hair care routine with Ayurway Amurtha Conditioner, a luxurious formulation that nourishes, revitalizes, and strengthens your hair.",
    notes: ["Triphala", "Saffron", "Castor Oil", "Vitamin E"],
    about: "Enhance your hair care routine with Ayurway Amurtha Conditioner, a luxurious formulation that nourishes, revitalizes, and strengthens your hair. Suitable for all hair types, this conditioner features the potent Ayurvedic blend of Triphala (Aralu, Bulu, and Nelli), along with saffron, castor oil, and vitamin E. Designed to complement Ayurway Amurtha Shampoo, this conditioner ensures your hair remains healthy, smooth, and vibrant.",
    benefits: [
      { title: "Nourishing", desc: "Provides essential nutrients keeping hair healthy." },
      { title: "Detangling", desc: "Helps detangle hair for easy styling." },
      { title: "Strengthening", desc: "Strengthens hair follicles, reducing breakage." }
    ],
    ingredients: [
      { name: "Triphala", desc: "Ayurvedic blend rejuvenating scalp." },
      { name: "Vitamin E", desc: "Protects hair from environmental damage." }
    ],
    whyChoose: [
      { title: "Complements Shampoo", desc: "Designed to pair with Amurtha Shampoo for optimal results." },
      { title: "Suitable for All Hair Types", desc: "Gentle enough for daily use and suitable for all hair types." }
    ],
    ritual: [
      "Start by washing your hair with Ayurway Amurtha Shampoo.",
      "Apply a generous amount of conditioner to damp hair, focusing on the mid-lengths and ends.",
      "Gently massage into your hair and scalp.",
      "Leave on for 2-3 minutes to allow nutrients to absorb.",
      "Rinse thoroughly with water."
    ]
  },
  {
    slug: "suwakeshi-shampoo",
    name: "Suwakeshi Anti-Dandruff Shampoo",
    category: "Hair Care",
    price: 900,
    size: "100 ml",
    stars: 4.9,
    tagline: "Combat dandruff and enjoy healthier, shinier hair with Ayurway Suwa Keshi Anti Dandruff Shampoo.",
    notes: ["Seewakka", "Virgin Coconut Oil"],
    about: "Combat dandruff and enjoy healthier, shinier hair with Ayurway Suwa Keshi Anti Dandruff Shampoo. Infused with the powerful natural ingredients Seewakka (Saxifraga aizoon) and virgin coconut oil, this shampoo is designed to effectively cleanse your scalp, reduce dandruff, and nourish your hair. Experience the refreshing and soothing benefits of a shampoo that leaves your hair dandruff-free and beautifully radiant.",
    benefits: [
      { title: "Anti-Dandruff", desc: "Reduces dandruff and prevents recurrence." },
      { title: "Soothing", desc: "Calms irritated and itchy scalp." },
      { title: "Nourishing", desc: "Deeply nourishes your hair, enhancing its strength and shine." }
    ],
    ingredients: [
      { name: "Seewakka (Saxifraga aizoon)", desc: "Natural anti-dandruff and scalp-soothing herb." },
      { name: "Virgin Coconut Oil", desc: "Deeply moisturizes and adds shine." }
    ],
    whyChoose: [
      { title: "Natural Care", desc: "Effective dandruff control without harsh chemical sulfates." },
      { title: "Comprehensive Care", desc: "Offers anti-dandruff, cleansing, and nourishing benefits." }
    ],
    ritual: [
      "Start with wet hair and scalp.",
      "Apply a generous amount to your scalp and hair.",
      "Gently massage using circular motions, working it into a rich lather.",
      "Rinse thoroughly with water.",
      "Use regularly and follow with a conditioner if needed."
    ]
  },
  {
    slug: "little-princess-hair-oil",
    name: "Little Princess Hair Oil",
    category: "Hair Care",
    price: 1590,
    size: "100 ml",
    stars: 4.8,
    tagline: "Introducing Ayurway Little Princess Hair Oil, a powerful ancient Ayurvedic recipe tailored for modern times.",
    notes: ["Neem", "Aloe Vera", "Almond Oil", "Coconut Oil"],
    about: "Introducing Ayurway Little Princess Hair Oil, a powerful ancient Ayurvedic recipe tailored for modern times. Formulated specifically for children, this 100% natural hair oil is free from chemicals, preservatives, colors, and fragrances, making it safe for kids from six months and older. Enriched with a blend of nourishing oils and potent herbal ingredients, this hair oil not only promotes healthy, shiny hair but also nourishes the scalp and provides a cooling effect to the head.",
    benefits: [
      { title: "Healthy Hair", desc: "Promotes strong healthy hair growth from young age." },
      { title: "Cooling Effect", desc: "Soothes and calms the head." },
      { title: "Gentle for Kids", desc: "Safe formula suitable for children over 6 months." },
      { title: "Sepsis Control", desc: "Helps in controlling sepsis, ensuring a clean and healthy scalp." }
    ],
    ingredients: [
      { name: "Neem & Aloe Vera", desc: "Antiseptic and hydrating scalp care." },
      { name: "Almond & Coconut Oils", desc: "Nourish and strengthen roots." },
      { name: "Mint Leaves", desc: "Offers a refreshing and cooling effect." }
    ],
    whyChoose: [
      { title: "Chemical-Free", desc: "Zero artificial colors, fragrances, or preservatives." },
      { title: "Ancient Ayurvedic Recipe", desc: "Combines traditional wisdom with modern needs." }
    ],
    ritual: [
      "Dispense a small amount into your palm.",
      "Gently massage the oil into your child’s scalp and hair, focusing on roots and ends.",
      "Leave the oil in for a few hours before washing it out.",
      "Use regularly to maintain healthy, shiny hair."
    ]
  },

  // --- WELLNESS OILS ---
  {
    slug: "ayurway-jeewa-prana-oil",
    name: "Jeewa Prana Healing Oil",
    category: "Wellness Oils",
    price: 1950,
    size: "100 ml",
    stars: 4.8,
    tagline: "Experience the power of ancient Ayurvedic healing with Ayurway Jeewa Prana Oil, a potent medicinal oil designed to provide relief from various types of pain and discomfort.",
    notes: ["Sesame Oil", "Honey", "Neem", "Nelly Seeds"],
    about: "Experience the power of ancient Ayurvedic healing with Ayurway Jeewa Prana Oil, a potent medicinal oil designed to provide relief from various types of pain and discomfort. This all-natural remedy effectively addresses rheumatisms, neurasthenia, muscle atrophy, joint pain, hip pain, and neck pain. Additionally, it alleviates inflammation, muscle weakness, sprains, and general muscle pain, while strengthening the body.",
    benefits: [
      { title: "Pain Relief", desc: "Reduces pain from rheumatism, joint, hip, and neck pain." },
      { title: "Anti-Inflammatory", desc: "Reduces inflammation and swelling for faster recovery." },
      { title: "Muscle Strengthening", desc: "Alleviates muscle weakness and atrophy." },
      { title: "Sprain Relief", desc: "Provides quick relief for sprains and muscle strains." }
    ],
    ingredients: [
      { name: "Sesame Oil", desc: "Improves circulation and joint flexibility." },
      { name: "Honey & Neem", desc: "Soothing and anti-inflammatory properties." },
      { name: "Nelly Seeds", desc: "Traditionally used to support joint health." }
    ],
    whyChoose: [
      { title: "Ancient Formula", desc: "Based on time-honored Ayurvedic pain-relief recipes." },
      { title: "Comprehensive Pain Relief", desc: "Addresses a wide range of pain and discomfort issues." }
    ],
    ritual: [
      "Treat the fomentation pack in steam before use.",
      "Apply the steam-treated fomentation pack to the affected area for optimal results.",
      "Massage oil gently into the skin."
    ],
    bestseller: true
  },
  {
    slug: "cuticle-and-nail-oil",
    name: "Cuticle and Nail Oil",
    category: "Wellness Oils",
    price: 1350,
    size: "20 ml",
    stars: 4.7,
    tagline: "Ayurway Cuticle Oil is a natural Ayurvedic solution designed to strengthen weak, brittle nails, promote healthy growth, and nourish dry cuticles.",
    notes: ["Coconut Oil", "Sweet Almond Oil", "Sesame Oil"],
    about: "It deeply hydrates, improves nail texture, and protects against damage caused by chemicals and poor nutrition, helping reduce breakage, peeling, and dullness for stronger, smoother, and healthier-looking nails.",
    benefits: [
      { title: "Strengthens Nails", desc: "Helps reduce breakage, brittleness, and peeling." },
      { title: "Promotes Growth", desc: "Supports healthy and faster nail growth." },
      { title: "Deep Nourishment", desc: "Hydrates and softens dry, hard cuticles." }
    ],
    ingredients: [
      { name: "Coconut Oil", desc: "Deeply moisturises and nourishes cuticles and nail beds." },
      { name: "Sweet Almond Oil", desc: "Rich in vitamins that strengthen nails and improve shine." },
      { name: "Sesame Oil", desc: "Helps repair damage and supports healthy nail growth." }
    ],
    whyChoose: [
      { title: "Natural Solution", desc: "Ayurvedic formula for brittle and weak nails." }
    ],
    ritual: [
      "Clean and dry your hands or feet before application.",
      "Apply a small amount of oil to each cuticle and nail bed.",
      "Gently massage for a few minutes to improve absorption.",
      "Leave it on overnight for best results."
    ]
  },

  // --- FEMININE CARE ---
  {
    slug: "pivithuru-feminine-wash",
    name: "Pivithuru Feminine Wash",
    category: "Feminine Care",
    price: 975,
    size: "100 g",
    stars: 4.8,
    tagline: "Discover the perfect balance of care, protection, and natural wellness with Ayurway PIVITHURU Feminine Wash, a gentle daily hygiene solution specially crafted for intimate care.",
    notes: ["Pancha Walka", "Manjistha", "pH Balance"],
    about: "Formulated with powerful Ayurvedic ingredients such as Pancha Walka and Manjistha, this feminine wash supports cleansing, soothing, and maintaining the health of delicate skin while respecting your body’s natural balance.",
    benefits: [
      { title: "pH Balance Protection", desc: "Helps maintain the natural acidic pH (3.8–4.5) of the intimate area." },
      { title: "Gentle Cleansing", desc: "Cleans effectively without causing dryness or irritation." },
      { title: "Odour Control", desc: "Supports freshness throughout the day." }
    ],
    ingredients: [
      { name: "Pancha Walka", desc: "A traditional Ayurvedic blend known for its cleansing and skin-protective properties." },
      { name: "Manjistha", desc: "Renowned for its soothing, purifying, and skin-supportive benefits." }
    ],
    whyChoose: [
      { title: "Natural Ingredients", desc: "Crafted with carefully selected Ayurvedic ingredients." },
      { title: "Safe & Gentle", desc: "Free from harsh chemicals that can disrupt sensitive skin." }
    ],
    ritual: [
      "Apply a small amount to the external intimate area.",
      "Gently cleanse and rinse thoroughly with water.",
      "Use daily for best results."
    ]
  },

  // --- SUPPLEMENTS ---
  {
    slug: "hello-beauty-capsule",
    name: "Hello Beauty Capsule",
    category: "Supplements",
    price: 2600,
    size: "60 capsules",
    stars: 4.8,
    tagline: "Hello Beauty Capsule is a 100% natural nutritional supplement designed to promote healthy, glowing skin from within.",
    notes: ["Herbal Extracts", "Skin Clarity"],
    about: "Hello Beauty Capsule is a 100% natural nutritional supplement designed to promote healthy, glowing skin from within. It supports skin clarity, nourishment, and overall wellness.",
    benefits: [
      { title: "Skin Brightening", desc: "Helps improve complexion and promote naturally glowing skin." },
      { title: "Skin Health", desc: "Supports overall skin nourishment and repair." },
      { title: "Natural Wellness", desc: "Enhances beauty from within using herbal ingredients." }
    ],
    ingredients: [
      { name: "Herbal Extracts", desc: "Natural ingredients that support skin health and glow." }
    ],
    whyChoose: [
      { title: "100% Natural", desc: "Made with completely natural ingredients." },
      { title: "Beauty from Within", desc: "Targets skin health internally." },
      { title: "Safe & Effective", desc: "Free from harmful chemicals." }
    ],
    ritual: [
      "Take as directed by a healthcare professional.",
      "Use regularly for best results."
    ],
    bestseller: true
  },
  {
    slug: "moringa-capsule",
    name: "Moringa Capsule",
    category: "Supplements",
    price: 2000,
    size: "60 capsules",
    stars: 4.9,
    tagline: "Ayurway Moringa Capsule is a natural source of calcium and a powerful immunity booster. It supports overall health, strength, and daily wellness.",
    notes: ["Moringa Extract", "Calcium", "Immunity"],
    about: "Ayurway Moringa Capsule is a natural source of calcium and a powerful immunity booster. It supports overall health, strength, and daily wellness.",
    benefits: [
      { title: "Rich in Calcium", desc: "Supports bone strength and health." },
      { title: "Boosts Immunity", desc: "Enhances the body’s natural defence system." },
      { title: "Overall Wellness", desc: "Improves energy and general health." }
    ],
    ingredients: [
      { name: "Moringa Extract", desc: "A nutrient-rich natural ingredient packed with vitamins and minerals." }
    ],
    whyChoose: [
      { title: "Natural Nutrition", desc: "Provides essential nutrients from a natural source." },
      { title: "Immunity Support", desc: "Helps strengthen the immune system." },
      { title: "Daily Health", desc: "Suitable for regular wellness support." }
    ],
    ritual: [
      "Take as directed by a healthcare professional.",
      "Use daily for best results."
    ]
  },
  {
    slug: "garcinia-slimming-capsule",
    name: "Garcinia Slimming Capsule",
    category: "Supplements",
    price: 2350,
    size: "90 capsules",
    stars: 4.7,
    tagline: "Ayurway Garcinia Slimming Capsule is a 100% natural product designed to support weight management and reduce body fat safely and effectively.",
    notes: ["Garcinia Extract", "Weight Management"],
    about: "Ayurway Garcinia Slimming Capsule is a 100% natural product designed to support weight management and reduce body fat safely and effectively.",
    benefits: [
      { title: "Weight Management", desc: "Helps reduce body weight naturally." },
      { title: "Fat Reduction", desc: "Supports the reduction of excess body fat." },
      { title: "Metabolism Boost", desc: "Helps improve metabolism and energy levels." }
    ],
    ingredients: [
      { name: "Garcinia Extract", desc: "Known for its natural fat-burning and appetite control properties." }
    ],
    whyChoose: [
      { title: "Natural Slimming", desc: "100% herbal formula for weight control." },
      { title: "Safe Use", desc: "Free from harmful chemicals." },
      { title: "Effective Support", desc: "Helps manage weight with regular use." }
    ],
    ritual: [
      "Take as directed by a healthcare professional.",
      "Use consistently along with a balanced diet."
    ]
  },
  {
    slug: "mahargha-goraka-capsule",
    name: "Mahargha (Goraka Capsule)",
    category: "Supplements",
    price: 2550,
    size: "60 capsules",
    stars: 4.9,
    tagline: "Ayurway Mahargha (Goraka Capsule) is a natural Ayurvedic supplement designed to support weight management and help control cholesterol levels.",
    notes: ["Goraka", "Cholesterol Control"],
    about: "Made using traditional Goraka (Garcinia) extracts, it promotes a healthier body and overall wellness. Ayurway Mahargha (Goraka Capsule) is a natural Ayurvedic supplement designed to support weight management and help control cholesterol levels.",
    benefits: [
      { title: "Weight Management", desc: "Helps reduce excess body weight naturally." },
      { title: "Cholesterol Control", desc: "Supports maintaining healthy cholesterol levels." },
      { title: "Metabolism Support", desc: "Enhances metabolic activity for better fat burning." }
    ],
    ingredients: [
      { name: "Goraka (Garcinia)", desc: "A natural ingredient known for weight control and cholesterol management." },
      { name: "Herbal Extracts", desc: "Support overall health and body balance." }
    ],
    whyChoose: [
      { title: "Ayurvedic Formula", desc: "Based on traditional herbal knowledge." },
      { title: "Natural & Safe", desc: "Made with herbal ingredients and free from harmful chemicals." },
      { title: "Dual Benefit", desc: "Supports both weight loss and cholesterol control." }
    ],
    ritual: [
      "Take as directed by a healthcare professional.",
      "Use regularly along with a balanced diet and healthy lifestyle."
    ]
  },

  // --- NATURAL FOODS ---
  {
    slug: "fresh-honey-200g",
    name: "Fresh Honey 200g",
    category: "Natural Foods",
    price: 1150,
    size: "200 g",
    stars: 4.8,
    tagline: "Ayurway Fresh Honey is pure, natural honey sourced to retain its rich nutrients and natural sweetness.",
    notes: ["Pure Honey", "Raw", "Natural Energy"],
    about: "Ayurway Fresh Honey is pure, natural honey sourced to retain its rich nutrients and natural sweetness. It supports overall wellness while adding a healthy touch to your daily diet.",
    benefits: [
      { title: "Natural Energy", desc: "Provides a quick and healthy energy boost." },
      { title: "Rich in Nutrients", desc: "Contains natural vitamins, minerals, and antioxidants." },
      { title: "Supports Immunity", desc: "Helps strengthen the immune system naturally." }
    ],
    ingredients: [
      { name: "Pure Honey", desc: "100% natural honey with no additives or preservatives." }
    ],
    whyChoose: [
      { title: "Pure & Natural", desc: "No added sugar or artificial ingredients." },
      { title: "High Quality", desc: "Carefully sourced to maintain purity and taste." }
    ],
    ritual: [
      "Consume directly or mix with warm water.",
      "Add to tea, milk, or meals as a natural sweetener.",
      "Use daily for health and wellness benefits."
    ]
  },
  {
    slug: "fresh-honey-400g",
    name: "Fresh Honey 400g",
    category: "Natural Foods",
    price: 2150,
    size: "400 g",
    stars: 4.9,
    tagline: "Ayurway Fresh Honey is pure, natural honey sourced to retain its rich nutrients and natural sweetness.",
    notes: ["Pure Honey", "Raw"],
    about: "Ayurway Fresh Honey is pure, natural honey sourced to retain its rich nutrients and natural sweetness. It supports overall wellness while adding a healthy touch to your daily diet.",
    benefits: [
      { title: "Natural Energy", desc: "Provides a quick and healthy energy boost." },
      { title: "Rich in Nutrients", desc: "Contains natural vitamins, minerals, and antioxidants." },
      { title: "Supports Immunity", desc: "Helps strengthen the immune system naturally." }
    ],
    ingredients: [
      { name: "Pure Honey", desc: "100% natural honey with no additives or preservatives." }
    ],
    whyChoose: [
      { title: "Pure & Natural", desc: "No added sugar or artificial ingredients." },
      { title: "High Quality", desc: "Carefully sourced to maintain purity and taste." }
    ],
    ritual: [
      "Consume directly or mix with warm water.",
      "Add to tea, milk, or meals as a natural sweetener.",
      "Use daily for health and wellness benefits."
    ]
  },
  {
    slug: "fresh-honey-800g",
    name: "Fresh Honey 800g",
    category: "Natural Foods",
    price: 3550,
    size: "800 g",
    stars: 4.9,
    tagline: "Ayurway Fresh Honey is pure, natural honey sourced to retain its rich nutrients and natural sweetness.",
    notes: ["Pure Honey"],
    about: "Ayurway Fresh Honey is pure, natural honey sourced to retain its rich nutrients and natural sweetness. It supports overall wellness while adding a healthy touch to your daily diet.",
    benefits: [
      { title: "Natural Energy", desc: "Provides a quick and healthy energy boost." },
      { title: "Rich in Nutrients", desc: "Contains natural vitamins, minerals, and antioxidants." },
      { title: "Supports Immunity", desc: "Helps strengthen the immune system naturally." }
    ],
    ingredients: [
      { name: "Pure Honey", desc: "100% natural honey with no additives or preservatives." }
    ],
    whyChoose: [
      { title: "Pure & Natural", desc: "No added sugar or artificial ingredients." },
      { title: "High Quality", desc: "Carefully sourced to maintain purity and taste." }
    ],
    ritual: [
      "Consume directly or mix with warm water.",
      "Add to tea, milk, or meals as a natural sweetener.",
      "Use daily for health and wellness benefits."
    ]
  },
  {
    slug: "honey-garlic",
    name: "Honey & Garlic",
    category: "Natural Foods",
    price: 1950,
    size: "250 g",
    stars: 4.8,
    tagline: "Ayurway Honey & Garlic is a powerful natural blend known for boosting immunity and supporting overall health.",
    notes: ["Pure Honey", "Garlic"],
    about: "Combining the goodness of pure honey and garlic, this traditional remedy helps strengthen the body and promote wellness naturally.",
    benefits: [
      { title: "Boosts Immunity", desc: "Helps strengthen the body’s natural defence system." },
      { title: "Supports Heart Health", desc: "Garlic is known to support healthy cholesterol levels." },
      { title: "Natural Healing", desc: "Promotes overall wellness and vitality." }
    ],
    ingredients: [
      { name: "Pure Honey", desc: "Provides natural energy and supports immunity." },
      { name: "Garlic", desc: "Known for its medicinal properties and health benefits." }
    ],
    whyChoose: [
      { title: "Natural Formula", desc: "Made using traditional ingredients with no harmful additives." },
      { title: "Trusted Remedy", desc: "Inspired by traditional Ayurvedic practices." }
    ],
    ritual: [
      "Take a small spoon daily, preferably in the morning.",
      "Can be consumed directly or with warm water.",
      "Use regularly for best results."
    ]
  },
  {
    slug: "aged-honey-200g",
    name: "Aged Honey 200g (6+ Months)",
    category: "Natural Foods",
    price: 1200,
    size: "200 g",
    stars: 5.0,
    tagline: "Ayurway Aged Honey is naturally matured for over 6 months, enhancing its medicinal value and potency.",
    notes: ["Aged Pure Honey"],
    about: "Known in Ayurveda for its therapeutic benefits, it supports digestion, immunity, and overall wellness.",
    benefits: [
      { title: "Boosts Immunity", desc: "Strengthens the body’s natural defence system." },
      { title: "Supports Digestion", desc: "Helps improve digestion and gut health." },
      { title: "Weight Management", desc: "Traditionally used to support fat metabolism." }
    ],
    ingredients: [
      { name: "Aged Pure Honey", desc: "Naturally matured honey with enhanced Ayurvedic properties." }
    ],
    whyChoose: [
      { title: "6+ Months Aged", desc: "Carefully matured to increase effectiveness." },
      { title: "100% Natural", desc: "No additives or artificial ingredients." },
      { title: "Ayurvedic Value", desc: "Used in traditional remedies for health benefits." }
    ],
    ritual: [
      "Consume a small spoon daily.",
      "Mix with warm water for better results.",
      "Use regularly as part of a healthy routine."
    ],
    bestseller: true
  },
  {
    slug: "aged-honey-400g",
    name: "Aged Honey 400g (6+ Months)",
    category: "Natural Foods",
    price: 2250,
    size: "400 g",
    stars: 4.9,
    tagline: "Ayurway Aged Honey is naturally matured for over 6 months, enhancing its medicinal value and potency.",
    notes: ["Aged Pure Honey"],
    about: "Known in Ayurveda for its therapeutic benefits, it supports digestion, immunity, and overall wellness.",
    benefits: [
      { title: "Boosts Immunity", desc: "Strengthens the body’s natural defence system." },
      { title: "Supports Digestion", desc: "Helps improve digestion and gut health." },
      { title: "Weight Management", desc: "Traditionally used to support fat metabolism." }
    ],
    ingredients: [
      { name: "Aged Pure Honey", desc: "Naturally matured honey with enhanced Ayurvedic properties." }
    ],
    whyChoose: [
      { title: "6+ Months Aged", desc: "Carefully matured to increase effectiveness." },
      { title: "100% Natural", desc: "No additives or artificial ingredients." },
      { title: "Ayurvedic Value", desc: "Used in traditional remedies for health benefits." }
    ],
    ritual: [
      "Consume a small spoon daily.",
      "Mix with warm water for better results.",
      "Use regularly as part of a healthy routine."
    ]
  },
  {
    slug: "aged-honey-800g",
    name: "Aged Honey 800g (6+ Months)",
    category: "Natural Foods",
    price: 4200,
    size: "800 g",
    stars: 5.0,
    tagline: "Ayurway Aged Honey is naturally matured for over 6 months, enhancing its medicinal value and potency.",
    notes: ["Aged Pure Honey"],
    about: "Known in Ayurveda for its therapeutic benefits, it supports digestion, immunity, and overall wellness.",
    benefits: [
      { title: "Boosts Immunity", desc: "Strengthens the body’s natural defence system." },
      { title: "Supports Digestion", desc: "Helps improve digestion and gut health." },
      { title: "Weight Management", desc: "Traditionally used to support fat metabolism." }
    ],
    ingredients: [
      { name: "Aged Pure Honey", desc: "Naturally matured honey with enhanced Ayurvedic properties." }
    ],
    whyChoose: [
      { title: "6+ Months Aged", desc: "Carefully matured to increase effectiveness." },
      { title: "100% Natural", desc: "No additives or artificial ingredients." },
      { title: "Ayurvedic Value", desc: "Used in traditional remedies for health benefits." }
    ],
    ritual: [
      "Consume a small spoon daily.",
      "Mix with warm water for better results.",
      "Use regularly as part of a healthy routine."
    ]
  },

  // --- NUTS, SEEDS & BERRIES ---
  {
    slug: "cranberry",
    name: "Dried Cranberry",
    category: "Nuts, Seeds & Berries",
    price: 700,
    size: "100 g",
    stars: 4.8,
    tagline: "Ayurway Dried Cranberry is a nutrient-rich natural product known for its refreshing taste and health benefits.",
    notes: ["Dried Cranberry"],
    variants: [
      { size: "100g", price: 700 },
      { size: "250g", price: 1400 },
      { size: "500g", price: 2500 },
      { size: "1Kg", price: 4900 }
    ],
    about: "Ayurway Dried Cranberry is a nutrient-rich natural product known for its refreshing taste and health benefits. It supports overall wellness and is especially beneficial for maintaining urinary tract health.",
    benefits: [
      { title: "Supports Urinary Health", desc: "Helps maintain a healthy urinary system." },
      { title: "Rich in Antioxidants", desc: "Protects the body from free radical damage." },
      { title: "Boosts Immunity", desc: "Supports the body’s natural defence system." }
    ],
    ingredients: [
      { name: "Dried Cranberry", desc: "Natural dried fruit rich in vitamins and antioxidants." }
    ],
    whyChoose: [
      { title: "Natural & Healthy", desc: "Made from high-quality natural ingredients." },
      { title: "Daily Wellness", desc: "Supports overall health and vitality." }
    ],
    ritual: [
      "Consume directly as a snack.",
      "Add to meals, desserts, or drinks.",
      "Use daily for health benefits."
    ]
  },
  {
    slug: "blueberry",
    name: "Dried Blueberry",
    category: "Nuts, Seeds & Berries",
    price: 900,
    size: "100 g",
    stars: 4.8,
    tagline: "Ayurway Dried Blueberry is a delicious and nutrient-packed fruit product rich in antioxidants.",
    notes: ["Dried Blueberry"],
    variants: [
      { size: "100g", price: 900 },
      { size: "250g", price: 1850 },
      { size: "500g", price: 3375 },
      { size: "1Kg", price: 6700 }
    ],
    about: "Ayurway Dried Blueberry is a delicious and nutrient-packed fruit product rich in antioxidants. It helps support brain function, skin health, and overall wellness.",
    benefits: [
      { title: "Brain Support", desc: "Helps improve memory and cognitive function." },
      { title: "Rich in Antioxidants", desc: "Protects the body from oxidative stress." },
      { title: "Skin Health", desc: "Supports healthy, glowing skin." }
    ],
    ingredients: [
      { name: "Dried Blueberry", desc: "A dried superfruit packed with vitamins and antioxidants." }
    ],
    whyChoose: [
      { title: "Premium Quality", desc: "Carefully selected for taste and nutrition." },
      { title: "Healthy Snack", desc: "A natural alternative to processed snacks." }
    ],
    ritual: [
      "Consume directly as a snack.",
      "Add to smoothies, desserts, or cereals.",
      "Enjoy daily for wellness benefits."
    ]
  },
  {
    slug: "blueberry-cranberry-mix",
    name: "Dried Blueberry & Cranberry Mix",
    category: "Nuts, Seeds & Berries",
    price: 800,
    size: "100 g",
    stars: 4.9,
    tagline: "Ayurway Dried Blueberry & Cranberry Mix is a delicious combination of two superfruits packed with antioxidants and nutrients.",
    notes: ["Dried Blueberry", "Dried Cranberry"],
    variants: [
      { size: "100g", price: 800 },
      { size: "250g", price: 2400 },
      { size: "500g", price: 3250 }
    ],
    about: "Ayurway Dried Blueberry & Cranberry Mix is a delicious combination of two superfruits packed with antioxidants and nutrients. It supports overall health while offering a tasty and refreshing snack option. Contains equal amounts of dried blueberries and dried cranberries.",
    benefits: [
      { title: "Double Antioxidants", desc: "Combines the benefits of both blueberries and cranberries." },
      { title: "Boosts Immunity", desc: "Supports the body’s natural defence system." },
      { title: "Healthy Snack", desc: "A nutritious and tasty alternative to junk food." }
    ],
    ingredients: [
      { name: "Dried Blueberry", desc: "Rich in vitamins and antioxidants." },
      { name: "Dried Cranberry", desc: "Supports urinary and overall health." }
    ],
    whyChoose: [
      { title: "Two-in-One Benefit", desc: "Enjoy combined health benefits in one product." },
      { title: "Natural & Tasty", desc: "No harmful additives, just natural goodness." }
    ],
    ritual: [
      "Consume directly as a snack.",
      "Add to yogurt, cereals, or desserts.",
      "Use daily for health benefits."
    ]
  },
  {
    slug: "mix-nuts",
    name: "Mix Nuts",
    category: "Nuts, Seeds & Berries",
    price: 2750,
    size: "500 g",
    stars: 4.9,
    tagline: "Ayurway Mix Nuts is a premium blend of carefully selected nuts, providing a rich source of nutrients, healthy fats, and energy for daily wellness.",
    notes: ["Mixed Nuts"],
    variants: [
      { size: "500g", price: 2750 },
      { size: "1Kg", price: 5400 }
    ],
    about: "Ayurway Mix Nuts is a premium blend of carefully selected nuts, providing a rich source of nutrients, healthy fats, and energy for daily wellness.",
    benefits: [
      { title: "Energy Boost", desc: "Provides long-lasting natural energy." },
      { title: "Heart Health", desc: "Supports healthy cholesterol levels." },
      { title: "Rich in Nutrients", desc: "Packed with vitamins, minerals, and healthy fats." }
    ],
    ingredients: [
      { name: "Mixed Nuts", desc: "A blend of high-quality almonds, cashews, walnuts, and more." }
    ],
    whyChoose: [
      { title: "Premium Quality", desc: "Carefully selected for taste and nutrition." },
      { title: "Healthy Snack", desc: "Perfect alternative to processed snacks." }
    ],
    ritual: [
      "Consume directly as a snack.",
      "Add to cereals, desserts, or smoothies.",
      "Use daily for a healthy lifestyle."
    ]
  },
  {
    slug: "almond",
    name: "Almond",
    category: "Nuts, Seeds & Berries",
    price: 1700,
    size: "250 g",
    stars: 4.8,
    tagline: "Ayurway Almonds are high-quality nuts rich in nutrients, known for supporting brain function, heart health, and overall wellness.",
    notes: ["Almonds"],
    variants: [
      { size: "250g", price: 1700 },
      { size: "500g", price: 3300 },
      { size: "1Kg", price: 6500 }
    ],
    about: "Ayurway Almonds are high-quality nuts rich in nutrients, known for supporting brain function, heart health, and overall wellness.",
    benefits: [
      { title: "Brain Health", desc: "Supports memory and cognitive function." },
      { title: "Heart Health", desc: "Helps maintain healthy cholesterol levels." },
      { title: "Rich Nutrition", desc: "Packed with protein, fiber, and healthy fats." }
    ],
    ingredients: [
      { name: "Almonds", desc: "Premium quality natural almonds." }
    ],
    whyChoose: [
      { title: "Natural & Pure", desc: "No additives or preservatives." },
      { title: "Daily Nutrition", desc: "Perfect for everyday health support." }
    ],
    ritual: [
      "Eat directly as a snack.",
      "Soak overnight for better absorption.",
      "Add to meals or desserts."
    ]
  },
  {
    slug: "walnuts",
    name: "Walnuts",
    category: "Nuts, Seeds & Berries",
    price: 1350,
    size: "250 g",
    stars: 4.9,
    tagline: "Ayurway Walnuts are nutrient-rich nuts known for supporting brain health and overall wellness with their high omega-3 content.",
    notes: ["Walnuts"],
    variants: [
      { size: "250g", price: 1350 },
      { size: "500g", price: 2600 },
      { size: "1Kg", price: 5200 }
    ],
    about: "Ayurway Walnuts are nutrient-rich nuts known for supporting brain health and overall wellness with their high omega-3 content.",
    benefits: [
      { title: "Brain Support", desc: "Improves memory and brain function." },
      { title: "Omega-3 Rich", desc: "Supports heart and overall health." },
      { title: "Antioxidant Power", desc: "Protects the body from oxidative stress." }
    ],
    ingredients: [
      { name: "Walnuts", desc: "High-quality natural walnuts." }
    ],
    whyChoose: [
      { title: "Premium Quality", desc: "Carefully selected nuts." },
      { title: "Healthy Choice", desc: "Ideal for daily nutrition." }
    ],
    ritual: [
      "Consume directly.",
      "Add to salads, desserts, or smoothies.",
      "Use daily for health benefits."
    ]
  },
  {
    slug: "macadamia",
    name: "Macadamia",
    category: "Nuts, Seeds & Berries",
    price: 2550,
    size: "250 g",
    stars: 4.8,
    tagline: "Ayurway Macadamia nuts are premium-quality nuts rich in healthy fats and nutrients, supporting heart health and providing a delicious energy boost.",
    notes: ["Macadamia Nuts"],
    variants: [
      { size: "250g", price: 2550 },
      { size: "500g", price: 5000 },
      { size: "1Kg", price: 9750 }
    ],
    about: "Ayurway Macadamia nuts are premium-quality nuts rich in healthy fats and nutrients, supporting heart health and providing a delicious energy boost.",
    benefits: [
      { title: "Healthy Fats", desc: "Rich in monounsaturated fats for heart health." },
      { title: "Energy Boost", desc: "Provides sustained energy." },
      { title: "Nutrient Dense", desc: "Packed with vitamins and minerals." }
    ],
    ingredients: [
      { name: "Macadamia Nuts", desc: "Premium quality macadamia nuts." }
    ],
    whyChoose: [
      { title: "Luxury Quality", desc: "High-end premium nuts." },
      { title: "Healthy Snack", desc: "Nutritious and satisfying." }
    ],
    ritual: [
      "Eat directly as a snack.",
      "Add to desserts or salads.",
      "Enjoy daily for wellness."
    ]
  },
  {
    slug: "pistachio",
    name: "Pistachio",
    category: "Nuts, Seeds & Berries",
    price: 1850,
    size: "250 g",
    stars: 4.9,
    tagline: "Ayurway Pistachios are delicious and nutrient-rich nuts known for supporting heart health, digestion, and overall wellness.",
    notes: ["Pistachios"],
    variants: [
      { size: "250g", price: 1850 },
      { size: "500g", price: 3600 },
      { size: "1Kg", price: 7100 }
    ],
    about: "Ayurway Pistachios are delicious and nutrient-rich nuts known for supporting heart health, digestion, and overall wellness.",
    benefits: [
      { title: "Heart Health", desc: "Supports healthy cholesterol levels." },
      { title: "Digestive Health", desc: "Rich in fiber for better digestion." },
      { title: "Rich in Antioxidants", desc: "Protects the body from free radicals." }
    ],
    ingredients: [
      { name: "Pistachios", desc: "High-quality natural pistachio nuts." }
    ],
    whyChoose: [
      { title: "Premium Quality", desc: "Carefully selected for freshness." },
      { title: "Healthy Snack", desc: "Great alternative to processed foods." }
    ],
    ritual: [
      "Consume directly as a snack.",
      "Add to desserts or meals.",
      "Use daily for health benefits."
    ]
  },
  {
    slug: "sunflower-seeds",
    name: "Sunflower Seeds",
    category: "Nuts, Seeds & Berries",
    price: 950,
    size: "250 g",
    stars: 4.8,
    tagline: "Ayurway Sunflower Seeds are nutrient-rich and packed with healthy fats, vitamins, and minerals that support overall health and wellness.",
    notes: ["Sunflower Seeds"],
    variants: [
      { size: "250g", price: 950 },
      { size: "500g", price: 1700 },
      { size: "1Kg", price: 3200 }
    ],
    about: "Ayurway Sunflower Seeds are nutrient-rich and packed with healthy fats, vitamins, and minerals that support overall health and wellness.",
    benefits: [
      { title: "Heart Health", desc: "Supports healthy cholesterol levels." },
      { title: "Rich in Nutrients", desc: "Packed with vitamin E, magnesium, and healthy fats." },
      { title: "Energy Boost", desc: "Provides natural energy throughout the day." }
    ],
    ingredients: [
      { name: "Sunflower Seeds", desc: "High-quality natural sunflower seeds." }
    ],
    whyChoose: [
      { title: "Natural & Pure", desc: "No additives or preservatives." },
      { title: "Healthy Snack", desc: "Perfect for daily nutrition." }
    ],
    ritual: [
      "Eat directly as a snack.",
      "Add to salads, cereals, or smoothies.",
      "Use daily for health benefits."
    ]
  },
  {
    slug: "pumpkin-seeds",
    name: "Pumpkin Seeds",
    category: "Nuts, Seeds & Berries",
    price: 1000,
    size: "250 g",
    stars: 4.9,
    tagline: "Ayurway Pumpkin Seeds are a powerful superfood rich in nutrients that support immunity, heart health, and overall wellness.",
    notes: ["Pumpkin Seeds"],
    variants: [
      { size: "250g", price: 1000 },
      { size: "500g", price: 1800 },
      { size: "1Kg", price: 3300 }
    ],
    about: "Ayurway Pumpkin Seeds are a powerful superfood rich in nutrients that support immunity, heart health, and overall wellness.",
    benefits: [
      { title: "Boosts Immunity", desc: "Supports the body’s natural defence system." },
      { title: "Rich in Magnesium", desc: "Helps maintain strong bones and muscles." },
      { title: "Heart Health", desc: "Supports cardiovascular wellness." }
    ],
    ingredients: [
      { name: "Pumpkin Seeds", desc: "Premium quality natural pumpkin seeds." }
    ],
    whyChoose: [
      { title: "Superfood", desc: "Packed with essential nutrients." },
      { title: "Healthy Lifestyle", desc: "Perfect addition to daily diet." }
    ],
    ritual: [
      "Consume directly as a snack.",
      "Add to smoothies, salads, or meals.",
      "Use daily for best results."
    ]
  },
  {
    slug: "hazelnuts",
    name: "Hazelnuts",
    category: "Nuts, Seeds & Berries",
    price: 3000,
    size: "250 g",
    stars: 4.8,
    tagline: "Ayurway Hazelnuts are premium-quality nuts rich in healthy fats, vitamins, and antioxidants that support heart and brain health.",
    notes: ["Hazelnuts"],
    variants: [
      { size: "250g", price: 3000 },
      { size: "500g", price: 5900 },
      { size: "1Kg", price: 11700 }
    ],
    about: "Ayurway Hazelnuts are premium-quality nuts rich in healthy fats, vitamins, and antioxidants that support heart and brain health.",
    benefits: [
      { title: "Heart Health", desc: "Supports healthy cholesterol levels." },
      { title: "Brain Function", desc: "Enhances cognitive performance." },
      { title: "Rich in Antioxidants", desc: "Protects against oxidative stress." }
    ],
    ingredients: [
      { name: "Hazelnuts", desc: "High-quality natural hazelnuts." }
    ],
    whyChoose: [
      { title: "Premium Quality", desc: "Carefully selected nuts." },
      { title: "Healthy Choice", desc: "Ideal for daily nutrition." }
    ],
    ritual: [
      "Eat directly as a snack.",
      "Add to desserts or meals.",
      "Use daily for health benefits."
    ]
  },
  {
    slug: "chia-seeds",
    name: "Chia Seeds",
    category: "Nuts, Seeds & Berries",
    price: 950,
    size: "250 g",
    stars: 4.9,
    tagline: "Ayurway Chia Seeds are a superfood rich in fiber, omega-3 fatty acids, and nutrients that support digestion, energy, and overall health.",
    notes: ["Chia Seeds"],
    variants: [
      { size: "250g", price: 950 },
      { size: "500g", price: 1800 },
      { size: "1Kg", price: 3600 }
    ],
    about: "Ayurway Chia Seeds are a superfood rich in fiber, omega-3 fatty acids, and nutrients that support digestion, energy, and overall health.",
    benefits: [
      { title: "Digestive Health", desc: "High in fiber for better digestion." },
      { title: "Omega-3 Rich", desc: "Supports heart and brain health." },
      { title: "Energy Boost", desc: "Provides long-lasting energy." }
    ],
    ingredients: [
      { name: "Chia Seeds", desc: "Natural nutrient-dense chia seeds." }
    ],
    whyChoose: [
      { title: "Superfood", desc: "Packed with essential nutrients." },
      { title: "Daily Nutrition", desc: "Supports overall wellness." }
    ],
    ritual: [
      "Soak in water before consumption.",
      "Add to smoothies, yogurt, or desserts.",
      "Use daily for best results."
    ]
  },
  {
    slug: "flax-seeds",
    name: "Flax Seeds",
    category: "Nuts, Seeds & Berries",
    price: 650,
    size: "250 g",
    stars: 4.8,
    tagline: "Ayurway Flax Seeds are rich in omega-3 fatty acids, fiber, and nutrients that support heart health, digestion, and overall wellness.",
    notes: ["Flax Seeds"],
    variants: [
      { size: "250g", price: 650 },
      { size: "500g", price: 1200 },
      { size: "1Kg", price: 2400 }
    ],
    about: "Ayurway Flax Seeds are rich in omega-3 fatty acids, fiber, and nutrients that support heart health, digestion, and overall wellness.",
    benefits: [
      { title: "Heart Health", desc: "Supports healthy cholesterol levels." },
      { title: "Digestive Support", desc: "Improves digestion with high fiber content." },
      { title: "Rich in Omega-3", desc: "Supports brain and overall health." }
    ],
    ingredients: [
      { name: "Flax Seeds", desc: "High-quality natural flax seeds." }
    ],
    whyChoose: [
      { title: "Natural Superfood", desc: "Packed with essential nutrients." },
      { title: "Healthy Lifestyle", desc: "Perfect for daily diet." }
    ],
    ritual: [
      "Consume ground or soaked.",
      "Add to smoothies, cereals, or meals.",
      "Use daily for health benefits."
    ]
  }
];

export const categories = [
  "Face Care",
  "Hair Care",
  "Body Care",
  "Feminine Care",
  "Wellness Oils",
  "Supplements",
  "Natural Foods",
  "Nuts, Seeds & Berries",
];

export const formatLKR = (value) => `LKR ${value.toLocaleString("en-LK")}`;