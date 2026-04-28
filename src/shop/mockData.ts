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
    id: "case-cyber-001",
    name: "Cyber Neon V1",
    price: 35.0,
    image: "/cases/cyber.png",
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
    id: "case-retro-002",
    name: "Arcade 99",
    price: 30.0,
    image: "/cases/retro.png",
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
    image: "/cases/minimal.png",
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
    image: "/cases/cyber.png",
    supportedModels: ["iPhone 14"],
    description: "The evolved version of our bestselling cyber design. Enhanced with deeper neon penetration and a more complex grid structure. Features UV-reactive elements that glow under blacklight for an extra layer of cyberpunk authenticity.",
    stock: 15,
    deliveryDays: 4,
    reviews: [
      { id: "r9", author: "NightOwl", rating: 5, comment: "The UV reaction is insane at parties!", date: "2024-01-13" },
    ],
  },
  {
    id: "case-retro-005",
    name: "Synthwave Sunset",
    price: 30.0,
    image: "/cases/retro.png",
    supportedModels: ["iPhone 15 Pro", "Galaxy S24"],
    description: "Cruise into the sunset with this vaporwave-inspired masterpiece. Gradient skies of pink and purple meet geometric wireframe mountains. The glossy finish enhances the dreamy aesthetic while providing solid protection.",
    stock: 27,
    deliveryDays: 3,
    reviews: [
      { id: "r10", author: "VaporDreams", rating: 5, comment: "So aesthetic! Matches my whole vibe.", date: "2024-01-16" },
      { id: "r11", author: "SunsetRider", rating: 4, comment: "Beautiful colors, but attracts fingerprints.", date: "2024-01-09" },
    ],
  },
  {
    id: "case-minimal-006",
    name: "Void Drop",
    price: 40.0,
    image: "/cases/minimal.png",
    supportedModels: ["iPhone 14", "Pixel 8"],
    description: "Stare into the void and let it stare back. This deep black minimalist design features subtle geometric patterns that only reveal themselves at certain angles. Premium silicone material with shock-absorbing corners.",
    stock: 41,
    deliveryDays: 2,
    reviews: [
      { id: "r12", author: "DarkAesthetic", rating: 5, comment: "Mysterious and elegant. Love the hidden patterns.", date: "2024-01-15" },
      { id: "r13", author: "ProtectionFirst", rating: 5, comment: "Dropped my phone multiple times, not a scratch!", date: "2024-01-07" },
      { id: "r14", author: "StealthMode", rating: 4, comment: "Great case, but wish it was slightly thinner.", date: "2024-01-03" },
    ],
  },

  {
    id: "case-floral-007",
    name: "Jardin Secret",
    price: 42.0,
    image: "/cases/minimal.png",
    supportedModels: ["iPhone 15 Pro", "iPhone 14", "Samsung S24 Ultra"],
    description: "Un jardin botanique miniaturisé sur votre téléphone. Illustration florale délicate aux tons pastel, imprimée en haute définition sur coque rigide mate anti-rayures.",
    stock: 28,
    deliveryDays: 3,
    reviews: [
      { id: "r15", author: "LauraB", rating: 5, comment: "Magnifique ! Tout le monde me demande où je l'ai eu.", date: "2024-02-01" },
      { id: "r16", author: "FlowerPower", rating: 5, comment: "Exactement ce que je cherchais, très élégant.", date: "2024-01-28" },
    ],
  },
  {
    id: "case-astro-008",
    name: "Cosmos Drift",
    price: 38.0,
    image: "/cases/cyber.png",
    supportedModels: ["iPhone 15 Pro", "Samsung S24 Ultra", "Pixel 8 Pro"],
    description: "Voyagez à travers les galaxies avec ce design spatial immersif. Nébuleuses, étoiles et planètes en impression HD sur fond noir profond mat.",
    stock: 35,
    deliveryDays: 3,
    reviews: [
      { id: "r17", author: "StarGazer", rating: 5, comment: "Superbe qualité d'impression, les couleurs sont vives.", date: "2024-02-03" },
      { id: "r18", author: "CosmicVibes", rating: 4, comment: "Très beau design, livraison rapide.", date: "2024-01-30" },
    ],
  },
  {
    id: "case-marble-009",
    name: "White Marble",
    price: 45.0,
    image: "/cases/minimal.png",
    supportedModels: ["iPhone 15 Pro", "iPhone 14", "iPhone 15", "Samsung S24"],
    description: "L'élégance du marbre blanc de Carrare en version nomade. Veinures naturelles reproduites à l'identique, finition brillante premium. Un classique intemporel.",
    stock: 50,
    deliveryDays: 2,
    reviews: [
      { id: "r19", author: "LuxeLover", rating: 5, comment: "Parfait pour un look professionnel chic.", date: "2024-02-05" },
      { id: "r20", author: "MarbleArch", rating: 5, comment: "Qualité exceptionnelle, exactement comme sur les photos.", date: "2024-02-02" },
      { id: "r21", author: "CleanStyle", rating: 4, comment: "Très belle coque, légère et solide.", date: "2024-01-29" },
    ],
  },
  {
    id: "case-desert-010",
    name: "Sahara Gold",
    price: 36.0,
    image: "/cases/retro.png",
    supportedModels: ["iPhone 14", "Samsung S24 Ultra", "OnePlus 12"],
    description: "Les dunes dorées du Sahara capturées en une seule image. Dégradé de sable et d'or avec motifs berbères subtils gravés en relief sur les bords.",
    stock: 20,
    deliveryDays: 4,
    reviews: [
      { id: "r22", author: "DesertWind", rating: 5, comment: "Authentique et magnifique, je suis fier de la montrer.", date: "2024-02-04" },
      { id: "r23", author: "TunisieStyle", rating: 5, comment: "Très fier de ce design tunisien !", date: "2024-01-31" },
    ],
  },
  {
    id: "case-wave-011",
    name: "Ocean Wave",
    price: 33.0,
    image: "/cases/cyber.png",
    supportedModels: ["iPhone 15", "iPhone 15 Pro", "Samsung S24", "Pixel 8"],
    description: "La grande vague d'Hokusai réinterprétée en style contemporain. Bleus profonds et écume blanche, finition mate ultra-résistante aux chocs.",
    stock: 42,
    deliveryDays: 3,
    reviews: [
      { id: "r24", author: "SurfDude", rating: 4, comment: "Super design, correspond bien aux photos.", date: "2024-02-06" },
      { id: "r25", author: "BlueMind", rating: 5, comment: "Coque robuste et vraiment belle.", date: "2024-02-01" },
    ],
  },
  {
    id: "case-geo-012",
    name: "Golden Geo",
    price: 39.0,
    image: "/cases/minimal.png",
    supportedModels: ["iPhone 15 Pro", "iPhone 14", "Samsung S24 Ultra", "Xiaomi 14"],
    description: "Architecture géométrique dorée sur fond crème nacré. Formes épurées et angles précis pour un design contemporain sophistiqué. Coque rigide PC premium.",
    stock: 33,
    deliveryDays: 2,
    reviews: [
      { id: "r26", author: "GeoPerfect", rating: 5, comment: "Moderne et élégant, beaucoup de compliments.", date: "2024-02-07" },
      { id: "r27", author: "MinimalistPro", rating: 5, comment: "Exactement dans mon style. Parfaite.", date: "2024-02-03" },
    ],
  },
  {
    id: "case-vintage-013",
    name: "Carte Postale",
    price: 34.0,
    image: "/cases/retro.png",
    supportedModels: ["iPhone 14", "iPhone 15", "Samsung S24", "Pixel 8 Pro"],
    description: "Une carte postale vintage de Tunis années 60, couleurs sépia et détails rétro. Imprimée sur coque mate épaisseur standard avec protection renforcée des coins.",
    stock: 15,
    deliveryDays: 4,
    reviews: [
      { id: "r28", author: "NostalgieFan", rating: 5, comment: "Superbe ! Ça rappelle vraiment l'ancienne Tunisie.", date: "2024-02-08" },
      { id: "r29", author: "RetroVibes22", rating: 4, comment: "Très original comme cadeau.", date: "2024-02-04" },
    ],
  },
  {
    id: "case-abstract-014",
    name: "Ink Flow",
    price: 37.0,
    image: "/cases/cyber.png",
    supportedModels: ["iPhone 15 Pro", "Samsung S24 Ultra", "OnePlus 12", "Xiaomi 14"],
    description: "Encre en liberté — marbrures organiques noires et blanches avec touches d'or qui évoquent la calligraphie arabe contemporaine. Chaque pièce est unique.",
    stock: 22,
    deliveryDays: 3,
    reviews: [
      { id: "r30", author: "InkMaster", rating: 5, comment: "Design artistique vraiment unique et raffiné.", date: "2024-02-09" },
      { id: "r31", author: "ArtLover", rating: 5, comment: "On dirait une vraie œuvre d'art sur mon téléphone.", date: "2024-02-05" },
    ],
  },
  {
    id: "case-terracotta-015",
    name: "Terra Sidi Bou",
    price: 41.0,
    image: "/cases/minimal.png",
    supportedModels: ["iPhone 15", "iPhone 14", "Samsung S24"],
    description: "Les tonalités chaleureuses des murs de Sidi Bou Said — bleu cobalt et blanc immaculé en motifs géométriques inspirés des zelliges tunisiens.",
    stock: 18,
    deliveryDays: 3,
    reviews: [
      { id: "r32", author: "SidiBouFan", rating: 5, comment: "Magnifique hommage à notre culture !", date: "2024-02-10" },
      { id: "r33", author: "TunisianPride", rating: 5, comment: "Qualité top et livraison rapide.", date: "2024-02-06" },
    ],
  },
  {
    id: "case-neon-016",
    name: "Neon Oasis",
    price: 35.0,
    image: "/cases/cyber.png",
    supportedModels: ["Samsung S24 Ultra", "iPhone 15 Pro", "Pixel 8 Pro", "OnePlus 12"],
    description: "Une oasis néon dans la nuit du désert. Couleurs électriques sur fond sombre, imprimées en UV réactif pour un effet lumineux en boîte de nuit.",
    stock: 30,
    deliveryDays: 3,
    reviews: [
      { id: "r34", author: "ClubKid", rating: 5, comment: "Époustouflant en UV ! Tout le monde veut la même.", date: "2024-02-08" },
      { id: "r35", author: "NightLife", rating: 4, comment: "Super design, léger et bien protégé.", date: "2024-02-05" },
    ],
  },
  {
    id: "case-lineart-017",
    name: "Line Portrait",
    price: 43.0,
    image: "/cases/minimal.png",
    supportedModels: ["iPhone 15 Pro", "iPhone 14", "Samsung S24", "Pixel 8"],
    description: "Portrait minimaliste en traits continus — l'art du line art porté à son paroxysme. Noir sur blanc ivoire, finition mate veloutée au toucher.",
    stock: 25,
    deliveryDays: 2,
    reviews: [
      { id: "r36", author: "DrawingFan", rating: 5, comment: "Élégance absolue. Simple et percutant.", date: "2024-02-11" },
      { id: "r37", author: "PureStyle", rating: 5, comment: "Parfait avec une tenue sobre, ça fait son effet.", date: "2024-02-07" },
    ],
  },
  {
    id: "case-mosaic-018",
    name: "Zellige Bleu",
    price: 44.0,
    image: "/cases/retro.png",
    supportedModels: ["iPhone 15 Pro", "iPhone 15", "Samsung S24 Ultra", "Xiaomi 14"],
    description: "L'art millénaire du zellige marocano-tunisien revisité en design contemporain. Mosaïque bleue et dorée en impression haute définition mate, inspiration artisanale.",
    stock: 12,
    deliveryDays: 4,
    reviews: [
      { id: "r38", author: "ArtisanLover", rating: 5, comment: "Superbe ! Ça représente parfaitement notre patrimoine.", date: "2024-02-12" },
      { id: "r39", author: "MosaicFan", rating: 5, comment: "Qualité impressionnante, très fidèle aux photos.", date: "2024-02-08" },
      { id: "r40", author: "NorthAfrica", rating: 4, comment: "Très beau, livraison soignée.", date: "2024-02-04" },
    ],
  },
];
