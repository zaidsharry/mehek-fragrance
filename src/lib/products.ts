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
  gender: "Unisex" | "Men" | "Women";
  season: string;
  occasion: string;
  timeOfDay: "Day" | "Night" | "Day & Night";
  longevity: number; // 0-10
  projection: number; // 0-10
  description: string;
  top: string[];
  heart: string[];
  base: string[];
  featured: { icon: string; name: string }[]; // 4 signature notes for hover reveal
  image: string;
  accent: string; // hex-ish oklch for accent glow
};

export const products: Product[] = [
  {
    id: "noir-oud",
    name: "Noir Oud",
    subtitle: "Extrait de Parfum",
    price: 12500,
    size: "100 ml",
    gender: "Unisex",
    season: "Autumn · Winter",
    occasion: "Evening · Formal",
    timeOfDay: "Night",
    longevity: 9,
    projection: 8,
    description:
      "A shadowed opulence of aged agarwood, smoked leather and a golden thread of saffron. Noir Oud lingers on skin like candlelight on velvet — quietly imperial.",
    top: ["Saffron", "Pink Pepper", "Bergamot"],
    heart: ["Bulgarian Rose", "Cambodian Oud", "Cinnamon"],
    base: ["Sandalwood", "Amber", "Smoked Leather"],
    featured: [
      { icon: "🪵", name: "Oud" },
      { icon: "🌹", name: "Rose" },
      { icon: "🧡", name: "Saffron" },
      { icon: "🥃", name: "Leather" },
    ],
    image: p1,
    accent: "0.65 0.17 55",
  },
  {
    id: "rouge-velours",
    name: "Rouge Velours",
    subtitle: "Eau de Parfum",
    price: 9800,
    size: "75 ml",
    gender: "Women",
    season: "Winter · Spring",
    occasion: "Romantic · Evening",
    timeOfDay: "Night",
    longevity: 8,
    projection: 7,
    description:
      "A crimson bouquet of Turkish rose and dark berries, wrapped in warm praline and cashmere musk. A whispered scarlet.",
    top: ["Blackcurrant", "Raspberry", "Bergamot"],
    heart: ["Turkish Rose", "Peony", "Praline"],
    base: ["Cashmere Musk", "Patchouli", "Vanilla"],
    featured: [
      { icon: "🌹", name: "Rose" },
      { icon: "🫐", name: "Blackcurrant" },
      { icon: "🍬", name: "Praline" },
      { icon: "🤍", name: "Musk" },
    ],
    image: p2,
    accent: "0.55 0.22 20",
  },
  {
    id: "vert-imperial",
    name: "Vert Impérial",
    subtitle: "Eau de Parfum",
    price: 11200,
    size: "100 ml",
    gender: "Men",
    season: "Spring · Summer",
    occasion: "Signature · Day",
    timeOfDay: "Day",
    longevity: 8,
    projection: 8,
    description:
      "Cool green mandarin cuts through vetiver roots and smoked iris — a modern aristocrat in a garden after rain.",
    top: ["Mandarin", "Cardamom", "Basil"],
    heart: ["Iris", "Lavender", "Violet Leaf"],
    base: ["Vetiver", "Cedar", "Ambroxan"],
    featured: [
      { icon: "🍊", name: "Mandarin" },
      { icon: "🌿", name: "Vetiver" },
      { icon: "💜", name: "Iris" },
      { icon: "🌲", name: "Cedar" },
    ],
    image: p3,
    accent: "0.55 0.14 145",
  },
  {
    id: "cuir-noir",
    name: "Cuir Noir",
    subtitle: "Extrait de Parfum",
    price: 13400,
    size: "100 ml",
    gender: "Men",
    season: "Autumn · Winter",
    occasion: "Formal · Night",
    timeOfDay: "Night",
    longevity: 10,
    projection: 8,
    description:
      "Suede-soft leather laced with pipe tobacco, sweet birch tar and a curl of vanilla smoke. The scent of a private study at midnight.",
    top: ["Bergamot", "Black Pepper", "Cardamom"],
    heart: ["Leather", "Tobacco Absolute", "Jasmine"],
    base: ["Birch Tar", "Vanilla", "Labdanum"],
    featured: [
      { icon: "🥃", name: "Leather" },
      { icon: "🚬", name: "Tobacco" },
      { icon: "🌫️", name: "Smoke" },
      { icon: "🤎", name: "Vanilla" },
    ],
    image: p4,
    accent: "0.45 0.10 55",
  },
  {
    id: "soleil-dor",
    name: "Soleil d'Or",
    subtitle: "Eau de Parfum",
    price: 10600,
    size: "100 ml",
    gender: "Women",
    season: "Spring · Summer",
    occasion: "Signature · Day",
    timeOfDay: "Day",
    longevity: 7,
    projection: 7,
    description:
      "Orange blossom in golden hour — tuberose, neroli and warm honeyed amber. Sunlight rendered wearable.",
    top: ["Neroli", "Bitter Orange", "Bergamot"],
    heart: ["Orange Blossom", "Tuberose", "Ylang Ylang"],
    base: ["Honey", "Amber", "White Musk"],
    featured: [
      { icon: "🌼", name: "Orange Blossom" },
      { icon: "🍯", name: "Honey" },
      { icon: "☀️", name: "Neroli" },
      { icon: "🤍", name: "Musk" },
    ],
    image: p5,
    accent: "0.82 0.15 82",
  },
  {
    id: "nuit-royale",
    name: "Nuit Royale",
    subtitle: "Extrait de Parfum",
    price: 12900,
    size: "100 ml",
    gender: "Unisex",
    season: "All Seasons",
    occasion: "Evening · Signature",
    timeOfDay: "Night",
    longevity: 9,
    projection: 7,
    description:
      "Blue iris and star anise drift over ambergris and warm woods — a moonlit corridor of a private palace.",
    top: ["Star Anise", "Bergamot", "Cardamom"],
    heart: ["Blue Iris", "Violet", "Osmanthus"],
    base: ["Ambergris", "Sandalwood", "Papyrus"],
    featured: [
      { icon: "💙", name: "Iris" },
      { icon: "⭐", name: "Star Anise" },
      { icon: "🌊", name: "Ambergris" },
      { icon: "🪵", name: "Sandalwood" },
    ],
    image: p6,
    accent: "0.55 0.14 260",
  },
  {
    id: "ambre-royal",
    name: "Ambre Royal",
    subtitle: "Extrait de Parfum",
    price: 11800,
    size: "100 ml",
    gender: "Unisex",
    season: "Autumn · Winter",
    occasion: "Signature",
    timeOfDay: "Day & Night",
    longevity: 10,
    projection: 8,
    description:
      "Molten amber, benzoin resin and Madagascan vanilla, gilded with a single drop of labdanum. Warmth that clings like silk.",
    top: ["Bergamot", "Pink Pepper", "Cinnamon"],
    heart: ["Amber", "Benzoin", "Labdanum"],
    base: ["Vanilla", "Tonka Bean", "Sandalwood"],
    featured: [
      { icon: "🧡", name: "Amber" },
      { icon: "🍯", name: "Benzoin" },
      { icon: "🤎", name: "Vanilla" },
      { icon: "🌰", name: "Tonka" },
    ],
    image: p7,
    accent: "0.70 0.17 55",
  },
  {
    id: "rose-eternelle",
    name: "Rose Éternelle",
    subtitle: "Eau de Parfum",
    price: 10400,
    size: "75 ml",
    gender: "Women",
    season: "Spring · Summer",
    occasion: "Romantic · Day",
    timeOfDay: "Day & Night",
    longevity: 7,
    projection: 6,
    description:
      "Grasse rose absolute layered with lychee, peony and pink musk — soft, sunlit, unforgettable.",
    top: ["Lychee", "Pink Pepper", "Pear"],
    heart: ["Grasse Rose", "Peony", "Magnolia"],
    base: ["Pink Musk", "Cedar", "White Amber"],
    featured: [
      { icon: "🌹", name: "Rose" },
      { icon: "🌸", name: "Peony" },
      { icon: "🍐", name: "Pear" },
      { icon: "🤍", name: "Musk" },
    ],
    image: p8,
    accent: "0.70 0.14 15",
  },
  {
    id: "santal-mystique",
    name: "Santal Mystique",
    subtitle: "Extrait de Parfum",
    price: 12200,
    size: "100 ml",
    gender: "Unisex",
    season: "Autumn · Winter",
    occasion: "Signature",
    timeOfDay: "Day & Night",
    longevity: 9,
    projection: 7,
    description:
      "Creamy Mysore sandalwood polished with vanilla bourbon and a whisper of incense. Meditation, distilled.",
    top: ["Cardamom", "Pink Pepper", "Bergamot"],
    heart: ["Mysore Sandalwood", "Incense", "Cocoa"],
    base: ["Vanilla Bourbon", "Cashmere Musk", "Tonka"],
    featured: [
      { icon: "🪵", name: "Sandalwood" },
      { icon: "🕯️", name: "Incense" },
      { icon: "🤎", name: "Vanilla" },
      { icon: "🌰", name: "Tonka" },
    ],
    image: p9,
    accent: "0.60 0.12 60",
  },
  {
    id: "velours-prive",
    name: "Velours Privé",
    subtitle: "Extrait de Parfum",
    price: 14200,
    size: "100 ml",
    gender: "Unisex",
    season: "Autumn · Winter",
    occasion: "Private Collection",
    timeOfDay: "Night",
    longevity: 10,
    projection: 9,
    description:
      "The house's private reserve — cassis, black rose and oud, sealed under a decadent film of ambroxan and myrrh.",
    top: ["Cassis", "Black Pepper", "Bergamot"],
    heart: ["Black Rose", "Cambodian Oud", "Myrrh"],
    base: ["Ambroxan", "Patchouli", "Dark Amber"],
    featured: [
      { icon: "🍇", name: "Cassis" },
      { icon: "🌹", name: "Black Rose" },
      { icon: "🪵", name: "Oud" },
      { icon: "🧡", name: "Amber" },
    ],
    image: p10,
    accent: "0.45 0.16 20",
  },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);
export const formatPrice = (n: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);
