// Un simple cache en mémoire (comme Redis simplifié)
const cache = new Map<string, { value: any; expiry: number }>();

export function setCache(key: string, value: any, ttlSeconds = 3600) {
  const expiry = Date.now() + ttlSeconds * 1000;
  cache.set(key, { value, expiry });
}

export function getCache(key: string) {
  const entry = cache.get(key);
  if (!entry) return null;
  if (Date.now() > entry.expiry) {
    cache.delete(key);
    return null;
  }
  return entry.value;
}

export function delCache(key: string) {
  cache.delete(key);
}