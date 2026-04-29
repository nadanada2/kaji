import { getCache, setCache } from '@/lib/memoryCache';
import { NextResponse } from 'next/server';

export async function GET() {
  // Tenter de récupérer une valeur mise en cache
  const cachedData = getCache('demo-timestamp');

  if (cachedData) {
    return NextResponse.json({
      source: 'cache',
      value: cachedData,
      message: 'Donnée lue depuis le cache (moins de 30 secondes)'
    });
  }

  // Sinon, générer une nouvelle valeur et la mettre en cache 30 secondes
  const freshData = { timestamp: Date.now(), random: Math.random() };
  setCache('demo-timestamp', freshData, 30); // expire après 30s

  return NextResponse.json({
    source: 'database (simulé)',
    value: freshData,
    message: 'Donnée fraîchement générée – sera en cache pour 30s'
  });
}