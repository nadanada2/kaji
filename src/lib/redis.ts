import Redis from 'ioredis';

const redis = new Redis({
  host: 'localhost', // ou un service cloud gratuit comme Upstash
  port: 6379,
});

export default redis;