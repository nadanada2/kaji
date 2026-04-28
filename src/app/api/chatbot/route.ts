import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { questions } from '@/data/questions';
import { catalogue, type Coque } from '@/data/coques';

type UserPrefs = {
  style?: string;
  couleur?: string;
  matiere?: string;
  usage?: string;
  budget?: string;
  protection?: string;
};

type ConversationState = {
  stepIndex: number;
  prefs: UserPrefs;
  done: boolean;
};

function computeScore(coque: Coque, prefs: UserPrefs): number {
  let score = 0;
  if (prefs.style && coque.style.includes(prefs.style)) score += 10;
  if (prefs.couleur && coque.couleur.includes(prefs.couleur)) score += 10;
  if (prefs.matiere && coque.matiere.includes(prefs.matiere)) score += 10;
  if (prefs.usage && coque.usage.includes(prefs.usage)) score += 10;
  if (prefs.budget && coque.budget === prefs.budget) score += 15;
  if (prefs.protection && coque.protection === prefs.protection) score += 15;
  return score;
}

function findBestCoque(prefs: UserPrefs): Coque | null {
  let best: Coque | null = null;
  let bestScore = -1;
  for (const coque of catalogue) {
    const score = computeScore(coque, prefs);
    if (score > bestScore) {
      bestScore = score;
      best = coque;
    }
  }
  return best;
}

export async function POST(request: NextRequest) {
  try {
    const { choice, conversationState } = await request.json();
    let state: ConversationState = conversationState || { stepIndex: 0, prefs: {}, done: false };

    // Si ce n'est pas la première étape et qu'un choix valide est reçu
    if (choice && !state.done && state.stepIndex > 0) {
      const prevStepId = questions[state.stepIndex - 1]?.id;
      if (prevStepId) {
        state.prefs[prevStepId] = choice;
      }
    }

    let reply = "";
    let newState = { ...state };

    if (state.stepIndex < questions.length) {
      // Poser la question courante
      const currentQ = questions[state.stepIndex];
      reply = JSON.stringify({
        type: 'question',
        text: currentQ.texte,
        options: currentQ.options
      });
      newState.stepIndex += 1;
    } else if (!state.done) {
      // Toutes les questions posées → recommandation
      const best = findBestCoque(state.prefs);
      if (best) {
        reply = `🎉 **Voici la coque parfaite pour vous :**\n\n**${best.nom}**\n\n➡️ Retrouvez-la dans notre boutique en recherchant son nom. Merci d'avoir utilisé l'assistant Kaji ! 🐯`;
      } else {
        reply = "Désolé, nous n'avons pas trouvé de coque correspondant exactement à vos critères. Essayez de recommencer.";
      }
      newState.done = true;
    } else {
      reply = "Merci ! Pour une nouvelle recommandation, rechargez la page.";
      newState = state;
    }

    return NextResponse.json({ reply, newState });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}