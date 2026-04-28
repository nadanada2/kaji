// src/shop/mockData.ts
export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface CaseProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  supportedModels: string[];
  description: string;
  stock: number;
  deliveryDays: number;
  reviews: Review[];
}

export const SUPPORTED_MODELS = [
  "All",
  "iPhone 15 Pro",
  "iPhone 14",
  "Galaxy S24",
  "Pixel 8",
];

export const MOCK_CASES: CaseProduct[] = [
  {
    id: "case-terracotta-015",
    name: "Terra Sidi Bou",
    price: 41.0,
    image: "/cases/terra-sidi-bou.png",
    supportedModels: ["iPhone 15 Pro", "Pixel 8"],
    description: "Inspired by the terracotta rooftops of Sidi Bou Said. A warm, artistic design that captures Mediterranean charm.",
    stock: 12,
    deliveryDays: 4,
    reviews: [],
  },
  
  {
    id: "case-mosaic-018",
    name: "Zellige Bleu",
    price: 44.0,
    image: "/cases/zellige-bleu.png",
    supportedModels: ["iPhone 14", "Galaxy S24"],
    description: "Traditional Zellige mosaic patterns in brilliant blue tones. A masterpiece of Moroccan craftsmanship adapted for your phone.",
    stock: 9,
    deliveryDays: 5,
    reviews: [],
  },
  {
    id: "case-lineart-017",
    name: "Line Portrait",
    price: 43.0,
    image: "/cases/line-portrait.png",
    supportedModels: ["Pixel 8", "iPhone 15 Pro"],
    description: "Minimalist line art portrait of a woman's face. Sophisticated and artistic, perfect for the modern creative.",
    stock: 17,
    deliveryDays: 3,
    reviews: [],
  },
  {
    id: "case-minimal-006",
    name: "Void Drop",
    price: 40.0,
    image: "/cases/void-drop.png",
    supportedModels: ["Galaxy S24", "iPhone 14"],
    description: "A deep, dark void with a single drop of light. This case is for those who find beauty in darkness and simplicity. The matte texture feels like velvet.",
    stock: 15,
    deliveryDays: 2,
    reviews: [
      { id: "r11", author: "DarkKnight", rating: 4, comment: "Very stealthy look. Feels great in hand.", date: "2024-01-19" },
    ],
  },
  {
    id: "case-retro-005",
    name: "Synthwave Sunset",
    price: 30.0,
    image: "/cases/synthwave-sunset.png",
    supportedModels: ["Pixel 8", "iPhone 15 Pro"],
    description: "A vibrant synthwave design featuring a blazing sunset over a neon-drenched grid. Perfect for those who live their lives one retro wave at a time.",
    stock: 41,
    deliveryDays: 3,
    reviews: [
      { id: "r10", author: "OutrunDriver", rating: 5, comment: "The colors are so vivid. Brings me back to the 80s!", date: "2024-01-18" },
    ],
  },
  {
    id: "case-retro-002",
    name: "Arcade 99",
    price: 30.0,
    image: "/cases/arcade-99.png",
    supportedModels: ["iPhone 14", "iPhone 15 Pro", "Pixel 8"],
    description: "Nostalgic tribute to the golden age of arcade gaming. Features pixel-perfect 8-bit graphics with vibrant retro colors. The matte texture provides excellent grip while reminiscing about those late-night gaming sessions.",
    stock: 18,
    deliveryDays: 2,
    reviews: [
      { id: "r4", author: "RetroGamer", rating: 5, comment: "Takes me back to the arcade! Quality is top notch.", date: "2024-01-12" },
      { id: "r5", author: "PixelMaster", rating: 5, comment: "The 8-bit art is so detailed. Love it!", date: "2024-01-08" },
    ],
  },
  {
    id: "case-minimal-003",
    name: "Brutalist Matte",
    price: 40.0,
    image: "/cases/brutalist-matte.png",
    supportedModels: ["iPhone 15 Pro", "Galaxy S24", "Pixel 8"],
    description: "Embrace the power of negative space with this brutally minimalist design. Clean lines, monochromatic palette, and a soft-touch matte finish that resists fingerprints. For those who believe less is more.",
    stock: 32,
    deliveryDays: 2,
    reviews: [
      { id: "r6", author: "MinimalistMike", rating: 5, comment: "Exactly what I was looking for. Clean and professional.", date: "2024-01-14" },
      { id: "r7", author: "DesignPro", rating: 4, comment: "Beautiful design, but shows scratches easily.", date: "2024-01-11" },
      { id: "r8", author: "SimpleLife", rating: 5, comment: "Perfect for business meetings. Subtle yet stylish.", date: "2024-01-06" },
    ],
  },
  {
    id: "case-cyber-004",
    name: "Cyber Neon V2",
    price: 35.0,
    image: "/cases/cyber-neon-v2.png",
    supportedModels: ["iPhone 14"],
    description: "The next evolution of neon cyberpunk aesthetics. Enhanced glow effects and a refined grid pattern that reacts differently under various lighting conditions. A must-have for cyberpunk enthusiasts.",
    stock: 0,
    deliveryDays: 5,
    reviews: [
      { id: "r9", author: "NeoCity", rating: 5, comment: "Even better than V1! The glow is insane.", date: "2024-01-20" },
    ],
  },
  
  
  {
    id: "case-floral-007",
    name: "Jardin Secret",
    price: 42.0,
    image: "/cases/jardin-secret.png",
    supportedModels: ["iPhone 15 Pro", "Pixel 8"],
    description: "A secret garden blooming with intricate floral patterns and delicate pastel colors. This case adds a touch of romance and nature to your daily tech.",
    stock: 11,
    deliveryDays: 4,
    reviews: [
      { id: "r12", author: "FloraLover", rating: 5, comment: "Absolutely gorgeous! The details are stunning.", date: "2024-01-17" },
    ],
  },
  {
    id: "case-astro-008",
    name: "Cosmos Drift",
    price: 38.0,
    image: "/cases/cosmos-drift.png",
    supportedModels: ["iPhone 14", "Galaxy S24"],
    description: "Drift through the cosmos with this deep space design. Features nebulae, stars, and a sense of infinite depth. A conversation starter for any astronomy fan.",
    stock: 27,
    deliveryDays: 2,
    reviews: [
      { id: "r13", author: "Stargazer", rating: 5, comment: "The depth effect is amazing. Looks 3D!", date: "2024-01-16" },
    ],
  },
  {
    id: "case-marble-009",
    name: "White Marble",
    price: 45.0,
    image: "/cases/white-marble.png",
    supportedModels: ["iPhone 15 Pro", "Pixel 8", "iPhone 14"],
    description: "Elegant white marble with subtle gold veining. A timeless classic that brings sophistication to any device. The glossy finish adds a touch of luxury.",
    stock: 22,
    deliveryDays: 3,
    reviews: [
      { id: "r14", author: "LuxuryLife", rating: 5, comment: "Feels premium and looks expensive. Love it.", date: "2024-01-15" },
    ],
  },
  {
    id: "case-desert-010",
    name: "Sahara Gold",
    price: 36.0,
    image: "/cases/sahara-gold.png",
    supportedModels: ["Galaxy S24", "iPhone 14"],
    description: "Inspired by the golden dunes of the Sahara. This case features a beautiful gradient of warm sands and golden hues.",
    stock: 31,
    deliveryDays: 2,
    reviews: [],
  },
  {
    id: "case-wave-011",
    name: "Ocean Wave",
    price: 33.0,
    image: "/cases/ocean-wave.png",
    supportedModels: ["Pixel 8", "iPhone 15 Pro"],
    description: "A traditional Japanese wave pattern (Seigaiha) in deep blue tones. Symbolizing good luck and tranquility, this case is both artistic and protective.",
    stock: 19,
    deliveryDays: 3,
    reviews: [],
  },
  {
    id: "case-geo-012",
    name: "Golden Geo",
    price: 39.0,
    image: "/cases/golden-geo.png",
    supportedModels: ["iPhone 14", "Galaxy S24"],
    description: "Geometric patterns in warm beige and gold accents. A perfect blend of modern art and classic elegance.",
    stock: 26,
    deliveryDays: 2,
    reviews: [],
  },
  {
    id: "case-vintage-013",
    name: "Carte Postale",
    price: 34.0,
    image: "/cases/carte-postale.png",
    supportedModels: ["iPhone 15 Pro", "Pixel 8"],
    description: "A vintage postcard design evoking travel and nostalgia. Features retro typography and faded pastel colors.",
    stock: 42,
    deliveryDays: 2,
    reviews: [],
  },
  {
    id: "case-abstract-014",
    name: "Ink Flow",
    price: 37.0,
    image: "/cases/ink-flow.png",
    supportedModels: ["Galaxy S24", "iPhone 14"],
    description: "Abstract ink wash patterns in black and beige. For the artistically inclined who appreciate fluid, organic designs.",
    stock: 23,
    deliveryDays: 3,
    reviews: [],
  },
  {
    id: "case-cyber-001",
    name: "Cyber Neon V1",
    price: 35.0,
    image: "/cases/cyber-neon-v1.png",
    supportedModels: ["iPhone 15 Pro", "Galaxy S24"],
    description: "Futuristic cyberpunk design with neon grid patterns and glowing accents. Made from premium polycarbonate with a glossy finish that makes the neon colors pop. Perfect for night owls and tech enthusiasts who want their device to stand out in the dark.",
    stock: 24,
    deliveryDays: 3,
    reviews: [
      { id: "r1", author: "NeoRunner", rating: 5, comment: "Absolutely love the neon glow! Gets compliments everywhere I go.", date: "2024-01-15" },
      { id: "r2", author: "CyberPunk2077", rating: 4, comment: "Great design, but wish it had more grip.", date: "2024-01-10" },
      { id: "r3", author: "TechNinja", rating: 5, comment: "Perfect for my setup. Matches my RGB keyboard perfectly!", date: "2024-01-05" },
    ],
  },
  
  {
    id: "case-neon-016",
    name: "Neon Oasis",
    price: 35.0,
    image: "/cases/neon-oasis.png",
    supportedModels: ["iPhone 14", "Galaxy S24"],
    description: "A retro neon oasis in the desert. Vibrant pinks, purples, and cyans bring this dreamy landscape to life.",
    stock: 34,
    deliveryDays: 2,
    reviews: [],
  },
  
  
];