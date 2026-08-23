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
  { slug: "ayurway-saffron", name: "Pure Kesar Saffron", category: "Skincare", price: 6900, size: "1 g", tagline: "Hand-picked threads, the brand's signature luminance ingredient.", notes: ["Kesar saffron", "Grade A1 threads", "Radiance"], bestseller: true },
  { slug: "ayurway-saffron-jojoba-night-serum", name: "Saffron & Jojoba Night Serum", category: "Skincare", price: 5400, size: "30 ml", tagline: "An overnight elixir that restores glow while you sleep.", notes: ["Saffron", "Cold-pressed jojoba", "Vitamin E"], bestseller: true },
  { slug: "ayurway-saffron-niacinamide-night-serum", name: "Saffron & Niacinamide Night Serum", category: "Skincare", price: 5900, size: "30 ml", tagline: "Evens tone and refines pores with 5% niacinamide.", notes: ["Saffron", "Niacinamide 5%", "Liquorice"], bestseller: true },
  { slug: "ayurway-swetha-facewash-with-real-saffron", name: "Swetha Saffron Face Wash", category: "Skincare", price: 2950, size: "100 ml", tagline: "A gentle brightening cleanse with real saffron threads.", notes: ["Saffron", "Aloe vera", "Sulphate free"] },
  { slug: "ayurway-megaha-face-wash", name: "Megaha Clarifying Face Wash", category: "Skincare", price: 2750, size: "100 ml", tagline: "Balances oil and calms breakouts for combination skin.", notes: ["Neem", "Tea tree", "Turmeric"] },
  { slug: "ayurway-tee-tree-and-manjistha-toner", name: "Tea Tree & Manjistha Toner", category: "Skincare", price: 3200, size: "120 ml", tagline: "A purifying mist that tightens and cools the skin.", notes: ["Tea tree", "Manjistha", "Rose water"] },
  { slug: "licorice-toner", name: "Liquorice Brightening Toner", category: "Skincare", price: 3200, size: "120 ml", tagline: "Softens pigmentation and revives dull complexions.", notes: ["Liquorice root", "Glycerine", "Cucumber"] },
  { slug: "apsara-day-cream", name: "Apsara Day Cream", category: "Skincare", price: 4300, size: "50 g", tagline: "Weightless daily hydration with a soft-focus finish.", notes: ["Sandalwood", "Shea butter", "SPF herbs"] },
  { slug: "diwyangana-day-cream", name: "Diwyangana Day Cream", category: "Skincare", price: 4600, size: "50 g", tagline: "A rich ayurvedic cream for mature, thirsty skin.", notes: ["Ashwagandha", "Almond oil", "Honey"] },
  { slug: "lodhara-cream", name: "Lodhara Repair Cream", category: "Skincare", price: 4900, size: "50 g", tagline: "Firms and repairs with the classical lodhra herb.", notes: ["Lodhra bark", "Kumkumadi", "Beeswax"] },
  { slug: "ayurway-hair-oil", name: "Ayurway Classic Hair Oil", category: "Hair", price: 3400, size: "200 ml", tagline: "A twelve-herb decoction simmered in cold-pressed coconut.", notes: ["Bhringraj", "Curry leaf", "Coconut"], bestseller: true },
  { slug: "ayurway-leave-on-hair-oil", name: "Leave-On Hair Oil", category: "Hair", price: 3600, size: "100 ml", tagline: "A non-greasy finishing oil for shine and frizz control.", notes: ["Argan", "Hibiscus", "Vitamin E"] },
  { slug: "ayurway-hair-serum", name: "Ayurway Hair Serum", category: "Hair", price: 3900, size: "50 ml", tagline: "Strengthens the root and calms an irritated scalp.", notes: ["Rosemary", "Amla", "Peptides"] },
  { slug: "ayurway-amurtha-shampoo", name: "Amurtha Herbal Shampoo", category: "Hair", price: 3100, size: "250 ml", tagline: "A sulphate-free cleanse built on kohomba and hibiscus.", notes: ["Kohomba", "Hibiscus", "Sulphate free"] },
  { slug: "ayurway-amurtha-conditioner", name: "Amurtha Herbal Conditioner", category: "Hair", price: 3100, size: "250 ml", tagline: "Detangles and seals moisture with aloe and shea.", notes: ["Aloe vera", "Shea", "Silicone free"] },
  { slug: "suwakeshi-shampoo", name: "Suwakeshi Anti-Hairfall Shampoo", category: "Hair", price: 3300, size: "250 ml", tagline: "A daily wash formulated to reduce seasonal hair fall.", notes: ["Bhringraj", "Fenugreek", "Nelli"] },
  { slug: "little-princess-hair-oil", name: "Little Princess Hair Oil", category: "Hair", price: 2400, size: "100 ml", tagline: "A featherlight oil made for children's delicate hair.", notes: ["Coconut", "Sesame", "Tear-free"] },
  { slug: "ayurway-jeewa-prana-oil", name: "Jeewa Prana Body Oil", category: "Body", price: 4200, size: "200 ml", tagline: "A warming abhyanga oil for the evening ritual.", notes: ["Sesame", "Ginger", "Cinnamon"], bestseller: true },
  { slug: "ayurway-shoba-body-lotion", name: "Shoba Body Lotion", category: "Body", price: 3500, size: "250 ml", tagline: "Silken hydration that absorbs in seconds.", notes: ["Cocoa butter", "Aloe", "Sandalwood"] },
  { slug: "ayurway-ashirwada-foot-cream", name: "Ashirwada Foot Cream", category: "Body", price: 2600, size: "100 g", tagline: "Softens cracked heels overnight.", notes: ["Urea", "Neem", "Peppermint"] },
  { slug: "cuticle-and-nail-oil", name: "Cuticle & Nail Oil", category: "Body", price: 2200, size: "15 ml", tagline: "A pocket-sized oil for strong nails and soft cuticles.", notes: ["Jojoba", "Sweet almond", "Lemon"] },
  { slug: "pivithuru-feminine-wash", name: "Pivithuru Feminine Wash", category: "Body", price: 2400, size: "150 ml", tagline: "pH-balanced intimate care with gentle herbs.", notes: ["Aloe", "Tea tree", "pH 4.5"] },
  { slug: "baby-soap", name: "Herbal Baby Soap", category: "Body", price: 950, size: "100 g", tagline: "A mild cold-process bar for newborn skin.", notes: ["Virgin coconut", "Chamomile", "Fragrance free"] },
  { slug: "brazilian-waxing", name: "Brazilian Waxing Kit", category: "Body", price: 4800, size: "Kit", tagline: "Salon-grade hair removal with a soothing herbal after-oil.", notes: ["Low temperature wax", "Aloe after-oil", "Strips"] },
  { slug: "hello-beauty-capsule", name: "Hello Beauty Capsules", category: "Wellness", price: 4500, size: "60 capsules", tagline: "Beauty from within — skin, hair and nails.", notes: ["Collagen support", "Biotin", "Amla"], bestseller: true },
  { slug: "moringa-capsule", name: "Moringa Capsules", category: "Wellness", price: 2900, size: "60 capsules", tagline: "A daily green multivitamin from Sri Lankan moringa.", notes: ["Moringa leaf", "Iron", "Antioxidants"] },
  { slug: "garcinia-slimming-capsule", name: "Garcinia Slimming Capsules", category: "Wellness", price: 3400, size: "60 capsules", tagline: "Supports metabolism alongside a balanced diet.", notes: ["Garcinia", "Green tea", "Ginger"] },
  { slug: "mahargha-goraka-capsule", name: "Mahargha Goraka Capsules", category: "Wellness", price: 3200, size: "60 capsules", tagline: "Traditional goraka for digestion and appetite balance.", notes: ["Goraka", "Cumin", "Fennel"] },
  { slug: "fresh-honey-200g", name: "Fresh Wild Honey 200g", category: "Honey", price: 1650, size: "200 g", tagline: "Raw, unfiltered honey from highland hives.", notes: ["Raw", "Unheated", "Single origin"] },
  { slug: "fresh-honey-400g", name: "Fresh Wild Honey 400g", category: "Honey", price: 2950, size: "400 g", tagline: "Raw, unfiltered honey from highland hives.", notes: ["Raw", "Unheated", "Single origin"] },
  { slug: "fresh-honey-800g", name: "Fresh Wild Honey 800g", category: "Honey", price: 5400, size: "800 g", tagline: "The family jar of raw highland honey.", notes: ["Raw", "Unheated", "Single origin"] },
  { slug: "aged-honey-200g", name: "Aged Wild Honey 200g", category: "Honey", price: 2100, size: "200 g", tagline: "Slow-matured honey with a deep caramel finish.", notes: ["Aged 12 months", "Raw", "Dark amber"], bestseller: true },
  { slug: "aged-honey-400g", name: "Aged Wild Honey 400g", category: "Honey", price: 3800, size: "400 g", tagline: "Slow-matured honey with a deep caramel finish.", notes: ["Aged 12 months", "Raw", "Dark amber"] },
  { slug: "aged-honey-800g", name: "Aged Wild Honey 800g", category: "Honey", price: 6900, size: "800 g", tagline: "Our most collected jar, matured for a full year.", notes: ["Aged 12 months", "Raw", "Dark amber"] },
  { slug: "honey-garlic", name: "Honey Infused Garlic", category: "Honey", price: 2450, size: "250 g", tagline: "Fermented garlic cloves steeped in raw honey.", notes: ["Immunity", "Fermented", "Raw honey"] },
  { slug: "almond", name: "California Almonds", category: "Nuts & Seeds", price: 2200, size: "250 g", tagline: "Whole raw almonds, unsalted and unroasted.", notes: ["Raw", "Unsalted", "Vitamin E"] },
  { slug: "pistachio", name: "Roasted Pistachios", category: "Nuts & Seeds", price: 3400, size: "250 g", tagline: "Lightly roasted and sea-salted.", notes: ["Roasted", "Lightly salted", "Protein"] },
  { slug: "walnuts", name: "Walnut Halves", category: "Nuts & Seeds", price: 3100, size: "250 g", tagline: "Omega-rich halves for baking and bowls.", notes: ["Raw", "Omega-3", "Whole halves"] },
  { slug: "hazelnuts", name: "Hazelnuts", category: "Nuts & Seeds", price: 3300, size: "250 g", tagline: "Sweet, buttery kernels with a crisp bite.", notes: ["Raw", "Unsalted", "Whole"] },
  { slug: "macadamia", name: "Macadamia Nuts", category: "Nuts & Seeds", price: 4700, size: "200 g", tagline: "The most indulgent nut in the pantry.", notes: ["Raw", "Buttery", "Whole"] },
  { slug: "mix-nuts", name: "House Mixed Nuts", category: "Nuts & Seeds", price: 3200, size: "300 g", tagline: "Our five-nut blend for everyday grazing.", notes: ["Five nuts", "No additives", "Resealable"] },
  { slug: "cranberry", name: "Dried Cranberries", category: "Nuts & Seeds", price: 1900, size: "250 g", tagline: "Tart, ruby berries with no added colour.", notes: ["Dried", "No colour added", "Antioxidants"] },
  { slug: "blueberry", name: "Dried Blueberries", category: "Nuts & Seeds", price: 2600, size: "200 g", tagline: "Deep-sweet berries for breakfasts and baking.", notes: ["Dried", "Antioxidants", "No colour added"] },
  { slug: "blueberry-cranberry-mix", name: "Blueberry & Cranberry Mix", category: "Nuts & Seeds", price: 2400, size: "250 g", tagline: "A sweet-tart berry duo in one jar.", notes: ["Dried", "Berry blend", "Resealable"] },
  { slug: "chia-seeds", name: "Chia Seeds", category: "Nuts & Seeds", price: 1400, size: "250 g", tagline: "Fibre-dense seeds for puddings and smoothies.", notes: ["Fibre", "Omega-3", "Raw"] },
  { slug: "flax-seeds", name: "Flax Seeds", category: "Nuts & Seeds", price: 1200, size: "250 g", tagline: "Golden-brown seeds for hormonal balance.", notes: ["Lignans", "Omega-3", "Raw"] },
  { slug: "pumpkin-seeds", name: "Pumpkin Seeds", category: "Nuts & Seeds", price: 1600, size: "250 g", tagline: "Green kernels rich in zinc and magnesium.", notes: ["Zinc", "Raw", "Unsalted"] },
  { slug: "sunflower-seeds", name: "Sunflower Seeds", category: "Nuts & Seeds", price: 1300, size: "250 g", tagline: "A crisp everyday seed for salads and breads.", notes: ["Raw", "Unsalted", "Vitamin E"] },
];

export const categories = [
  "Skincare",
  "Hair",
  "Body",
  "Wellness",
  "Honey",
  "Nuts & Seeds",
];

export const formatLKR = (value) => `LKR ${value.toLocaleString("en-LK")}`;