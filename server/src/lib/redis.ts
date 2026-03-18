
 import { Redis } from "ioredis";

const createRedis = () => {
  const redisUri = process.env.REDIS_URL || "redis://localhost:6380";
  if (!redisUri) throw new Error("REDIS_URI NOT FOUND");

  const redis = new Redis(redisUri);

  redis.on("connecting", () => console.log("Connecting Redis"));
  redis.on("ready", () => console.log("Redis Connected Successfully"));
  redis.on("error", () => console.log("Redis Connection Failed"));

  return redis;
};

export { createRedis };
