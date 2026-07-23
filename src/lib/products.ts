import p1 from "@/assets/perfume-1.jpg";
import p2 from "@/assets/perfume-2.jpg";
import p3 from "@/assets/perfume-3.jpg";
import p4 from "@/assets/perfume-4.jpg";
import p5 from "@/assets/perfume-5.jpg";
import p6 from "@/assets/perfume-6.jpg";
import p7 from "@/assets/perfume-7.jpg";
import p8 from "@/assets/perfume-8.jpg";
import p9 from "@/assets/perfume-9.jpg";
import p10 from "@/assets/perfume-10.jpg";

export type Product = {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  size: string;
  gender: "Home" | "Vehicle" | "Personal";
  season: string;
  occasion: string;
  timeOfDay: "Daily" | "Weekly" | "Everyday Use";
  longevity: number; // 0-10 → efficacy
  projection: number; // 0-10 → freshness
  description: string;
  top: string[];   // Key Ingredients
  heart: string[]; // Surfaces / Uses
  base: string[];  // Benefits
  featured: { icon: string; name: string }[]; // 4 signature ingredients for hover reveal
  image: string;
  accent: string; // oklch accent for glow
};

export const products: Product[] = [
  {
    id: "cleanora-floor",
    name: "Cleanora Floor Cleaner",
    subtitle: "Premium Phenyl",
    price: 349,
    size: "1 L",
    gender: "Home",
    season: "All Seasons",
    occasion: "Kitchen · Living Room · Bathroom",
    timeOfDay: "Daily",
    longevity: 9,
    projection: 8,
    description:
      "A concentrated floor cleaner that lifts grease and grime while leaving behind a bright, lemon-mint sparkle. Safe on marble, tile and vitrified surfaces — kind to hands, hard on dirt.",
    top: ["Lemon Peel", "Mint Extract", "Purified Water"],
    heart: ["Marble", "Tile", "Vitrified", "Concrete"],
    base: ["Streak-Free", "Anti-Bacterial", "Long-Lasting Freshness"],
    featured: [
      { icon: "🍋", name: "Lemon" },
      { icon: "🌿", name: "Mint" },
      { icon: "💧", name: "Water" },
      { icon: "🫧", name: "Bubbles" },
    ],
    image: p1,
    accent: "0.62 0.13 235",
  },
  {
    id: "hygix-toilet",
    name: "Hygix Toilet Cleaner",
    subtitle: "Deep-Action Formula",
    price: 199,
    size: "500 ml",
    gender: "Home",
    season: "All Seasons",
    occasion: "Bathroom · Sanitation",
    timeOfDay: "Weekly",
    longevity: 10,
    projection: 8,
    description:
      "A powerful thick-gel formula that clings to every curve of the bowl, dissolving hard-water stains and neutralising odour with a crisp eucalyptus finish.",
    top: ["Eucalyptus Oil", "Active Blue", "Purified Water"],
    heart: ["Ceramic", "Porcelain", "Under-Rim"],
    base: ["99.9% Germ Kill", "Stain Removal", "Odour Control"],
    featured: [
      { icon: "🌿", name: "Eucalyptus" },
      { icon: "💧", name: "Water" },
      { icon: "🫧", name: "Bubbles" },
      { icon: "🌱", name: "Tea" },
    ],
    image: p2,
    accent: "0.48 0.16 255",
  },
  {
    id: "clearon-glass",
    name: "Clearon Glass Cleaner",
    subtitle: "Streak-Free Spray",
    price: 249,
    size: "500 ml",
    gender: "Home",
    season: "All Seasons",
    occasion: "Windows · Mirrors · Screens",
    timeOfDay: "Weekly",
    longevity: 8,
    projection: 9,
    description:
      "A quick-evaporating blue spray for windows, mirrors and screens. Cuts fingerprints, dust and water spots — leaves nothing behind but pure clarity.",
    top: ["Purified Water", "Iso-Alcohol", "Blue Bloom"],
    heart: ["Glass", "Mirrors", "Screens", "Chrome"],
    base: ["Zero Streaks", "Fast-Dry", "Anti-Fog"],
    featured: [
      { icon: "💧", name: "Water" },
      { icon: "🫧", name: "Bubbles" },
      { icon: "🍋", name: "Lemon" },
      { icon: "🌿", name: "Mint" },
    ],
    image: p3,
    accent: "0.62 0.13 235",
  },
  {
    id: "laundryx-detergent",
    name: "LaundryX Detergent",
    subtitle: "Concentrated Liquid",
    price: 499,
    size: "1 L",
    gender: "Home",
    season: "All Seasons",
    occasion: "Whites · Colours · Delicates",
    timeOfDay: "Everyday Use",
    longevity: 9,
    projection: 8,
    description:
      "A high-efficiency liquid detergent with cold-active enzymes that lift stains at 20°C. Safe for top-load, front-load and hand wash — kind to fibres, tough on dirt.",
    top: ["Enzyme Complex", "Lavender", "Cotton Softener"],
    heart: ["Cotton", "Linen", "Silk", "Denim"],
    base: ["Cold-Active", "Colour-Safe", "Long-Lasting Scent"],
    featured: [
      { icon: "💜", name: "Lavender" },
      { icon: "☁️", name: "Cotton" },
      { icon: "🫧", name: "Bubbles" },
      { icon: "💧", name: "Water" },
    ],
    image: p4,
    accent: "0.48 0.16 255",
  },
  {
    id: "fabrix-conditioner",
    name: "Fabrix Fabric Conditioner",
    subtitle: "Silk-Soft Finish",
    price: 379,
    size: "1 L",
    gender: "Home",
    season: "All Seasons",
    occasion: "Post-Wash · All Fabrics",
    timeOfDay: "Everyday Use",
    longevity: 8,
    projection: 9,
    description:
      "A gentle post-wash conditioner infused with jasmine and white cotton essence. Softens fibres, reduces static and leaves clothes with a lasting bouquet.",
    top: ["Jasmine Bloom", "Cotton Musk", "Purified Water"],
    heart: ["Cotton", "Wool", "Synthetics", "Delicates"],
    base: ["Static-Free", "Wrinkle-Reduce", "Lasting Fragrance"],
    featured: [
      { icon: "🌸", name: "Jasmine" },
      { icon: "☁️", name: "Cotton" },
      { icon: "💜", name: "Lavender" },
      { icon: "💧", name: "Water" },
    ],
    image: p5,
    accent: "0.65 0.14 155",
  },
  {
    id: "blackguard-phenyl",
    name: "Blackguard Black Phenyl",
    subtitle: "Industrial Disinfectant",
    price: 299,
    size: "1 L",
    gender: "Home",
    season: "All Seasons",
    occasion: "Floors · Drains · Outdoor",
    timeOfDay: "Weekly",
    longevity: 10,
    projection: 9,
    description:
      "A heavy-duty black phenyl for large surfaces, drains and outdoor areas. Pine-forward, penetrating and long-lasting — the workhorse of the range.",
    top: ["Pine Oil", "Coal Tar", "Eucalyptus"],
    heart: ["Cement", "Terrazzo", "Drainage", "Garages"],
    base: ["Deep Disinfection", "Insect Repel", "Extended Freshness"],
    featured: [
      { icon: "🌲", name: "Pine" },
      { icon: "🌿", name: "Eucalyptus" },
      { icon: "🌱", name: "Tea" },
      { icon: "💧", name: "Water" },
    ],
    image: p6,
    accent: "0.35 0.14 250",
  },
  {
    id: "dishlux-dish",
    name: "Dishlux Dishwash Liquid",
    subtitle: "Grease-Cutting Gel",
    price: 179,
    size: "500 ml",
    gender: "Home",
    season: "All Seasons",
    occasion: "Utensils · Cookware · Glassware",
    timeOfDay: "Daily",
    longevity: 9,
    projection: 9,
    description:
      "A vibrant lime-and-mint dishwash gel that cuts through grease in seconds. Rich foam, quick rinse, kind on hands — the everyday hero of the kitchen sink.",
    top: ["Lime", "Mint", "Aloe Vera"],
    heart: ["Steel", "Non-Stick", "Glass", "Ceramic"],
    base: ["Grease-Cut", "Hand-Safe", "Squeaky Rinse"],
    featured: [
      { icon: "🟢", name: "Lime" },
      { icon: "🌿", name: "Mint" },
      { icon: "🍃", name: "Aloe" },
      { icon: "🫧", name: "Bubbles" },
    ],
    image: p7,
    accent: "0.65 0.14 155",
  },
  {
    id: "autogloss-carwash",
    name: "AutoGloss Car Shampoo",
    subtitle: "pH-Neutral Wash & Wax",
    price: 599,
    size: "1 L",
    gender: "Vehicle",
    season: "All Seasons",
    occasion: "Cars · Bikes · SUVs",
    timeOfDay: "Weekly",
    longevity: 8,
    projection: 10,
    description:
      "A premium two-bucket car shampoo with integrated carnauba gloss. Rich blue foam lifts road film without stripping wax — a showroom finish, every wash.",
    top: ["Carnauba Wax", "Blue Foam", "Sea-Salt Neutral"],
    heart: ["Paint", "Chrome", "Alloys", "Glass"],
    base: ["Streak-Free Dry", "Wax Boost", "Hydrophobic"],
    featured: [
      { icon: "💧", name: "Water" },
      { icon: "🫧", name: "Bubbles" },
      { icon: "🧂", name: "Salt" },
      { icon: "🌿", name: "Mint" },
    ],
    image: p8,
    accent: "0.48 0.16 255",
  },
  {
    id: "sparkle-pro-multi",
    name: "Sparkle Pro Multi-Surface",
    subtitle: "All-Purpose Cleaner",
    price: 299,
    size: "500 ml",
    gender: "Home",
    season: "All Seasons",
    occasion: "Countertops · Appliances · Everywhere",
    timeOfDay: "Daily",
    longevity: 8,
    projection: 8,
    description:
      "One spray, every surface. A gentle-yet-effective multi-surface formula with green-tea antioxidants — for kitchens, offices and everything in between.",
    top: ["Green Tea", "Orange Peel", "Purified Water"],
    heart: ["Granite", "Steel", "Wood", "Laminate"],
    base: ["Multi-Surface", "Residue-Free", "Fresh Citrus"],
    featured: [
      { icon: "🌱", name: "Tea" },
      { icon: "🍊", name: "Orange" },
      { icon: "🍋", name: "Lemon" },
      { icon: "🫧", name: "Bubbles" },
    ],
    image: p9,
    accent: "0.65 0.14 155",
  },
  {
    id: "purehands-wash",
    name: "PureHands Hand Wash",
    subtitle: "Aloe & Botanicals",
    price: 229,
    size: "250 ml",
    gender: "Personal",
    season: "All Seasons",
    occasion: "Home · Office · Salon",
    timeOfDay: "Everyday Use",
    longevity: 7,
    projection: 9,
    description:
      "A creamy botanical hand wash with aloe vera and jasmine. Kills germs while replenishing moisture — leaves hands soft, fresh and lightly perfumed.",
    top: ["Aloe Vera", "Jasmine", "Sea Salt"],
    heart: ["Hands", "Wrists", "Nails"],
    base: ["Germ Kill", "Moisturising", "Skin-Kind"],
    featured: [
      { icon: "🍃", name: "Aloe" },
      { icon: "🌸", name: "Jasmine" },
      { icon: "🧂", name: "Salt" },
      { icon: "💧", name: "Water" },
    ],
    image: p10,
    accent: "0.62 0.13 235",
  },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);
export const formatPrice = (n: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);
