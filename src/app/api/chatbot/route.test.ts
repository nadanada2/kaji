import { catalogue, Coque } from '@/data/coques';

// Copie de la fonction computeScore (à extraire plus tard)
function computeScore(coque: Coque, prefs: any) {
  let score = 0;
  if (prefs.style && coque.style.includes(prefs.style)) score += 10;
  if (prefs.couleur && coque.couleur.includes(prefs.couleur)) score += 10;
  if (prefs.matiere && coque.matiere.includes(prefs.matiere)) score += 10;
  if (prefs.usage && coque.usage.includes(prefs.usage)) score += 10;
  if (prefs.budget && coque.budget === prefs.budget) score += 15;
  if (prefs.protection && coque.protection === prefs.protection) score += 15;
  return score;
}

describe('Moteur de recommandation', () => {
  test('retourne la meilleure coque pour un utilisateur', () => {
    const prefs = {
      style: 'cyberpunk',
      couleur: 'vif',
      matiere: 'polycarbonate',
      usage: 'soirée',
      budget: 'moyen',
      protection: 'légère'
    };
    let best = null;
    let bestScore = -1;
    for (const coque of catalogue) {
      const score = computeScore(coque, prefs);
      if (score > bestScore) {
        bestScore = score;
        best = coque;
      }
    }
    expect(best).not.toBeNull();
    expect(best?.nom).toMatch(/Cyber Neon/i);
  });
});