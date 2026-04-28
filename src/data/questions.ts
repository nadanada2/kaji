export type Etape = {
  id: 'style' | 'couleur' | 'matiere' | 'usage' | 'budget' | 'protection';
  texte: string;
  options: { value: string; label: string }[];
};

export const questions: Etape[] = [
  {
    id: 'style',
    texte: "Quel style de coque préférez-vous ? 🎨",
    options: [
      { value: "minimaliste", label: "Minimaliste (sobre, élégant)" },
      { value: "artistique", label: "Artistique (motifs, illustrations)" },
      { value: "cyberpunk", label: "Cyberpunk / Néon (futuriste)" },
      { value: "premium", label: "Premium (marbre, textures raffinées)" }
    ]
  },
  {
    id: 'couleur',
    texte: "Quelle ambiance de couleurs vous tente le plus ? 🌈",
    options: [
      { value: "noir", label: "Noir / Gris / Monochrome" },
      { value: "pastel", label: "Pastel (doux, romantique)" },
      { value: "vif", label: "Vif / Néon (qui attire l'œil)" },
      { value: "multicolore", label: "Multicolore / Dégradé" }
    ]
  },
  {
    id: 'matiere',
    texte: "Et niveau matière, vous êtes plutôt ? 🤚",
    options: [
      { value: "silicone", label: "Silicone (souple, bonne protection)" },
      { value: "polycarbonate", label: "Polycarbonate (rigide, fin)" },
      { value: "cuir", label: "Cuir / Végétal (élégant)" }
    ]
  },
  {
    id: 'usage',
    texte: "Pour quelle utilisation principale ? 📱",
    options: [
      { value: "quotidien", label: "Usage quotidien (tout le temps)" },
      { value: "sport", label: "Sport / Extérieur (robuste)" },
      { value: "travail", label: "Travail / Pro (sobre)" },
      { value: "soirée", label: "Soirées / Événements (clinquant)" }
    ]
  },
  {
  id: 'budget',
  texte: "Quel budget avez-vous en tête ? 💰",
  options: [
    { value: "petit", label: "~30-40 TND" },
    { value: "moyen", label: "~40-55 TND" },
    { value: "grand", label: "55 TND et plus" }
  ]
},
  {
    id: 'protection',
    texte: "Quel niveau de protection souhaitez-vous ? 🛡️",
    options: [
      { value: "légère", label: "Légère (fine, esthétique)" },
      { value: "moyenne", label: "Moyenne (équilibrée)" },
      { value: "renforcée", label: "Renforcée (antichoc, robuste)" }
    ]
  }
];