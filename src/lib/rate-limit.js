
const rateLimitMap = new Map();

/**
 * Basic in-memory rate limiter for serverless environments.
 * Note: This resets when the serverless function restarts.
 * For production, consider using Redis (Upstash) for shared state.
 */
export async function rateLimit(ip, limit = 5, windowMs = 60000) {
  const now = Date.now();
  const userData = rateLimitMap.get(ip) || { count: 0, lastReset: now };

  if (now - userData.lastReset > windowMs) {
    userData.count = 1;
    userData.lastReset = now;
  } else {
    userData.count++;
  }

  rateLimitMap.set(ip, userData);

  return {
    success: userData.count <= limit,
    count: userData.count,
    limit,
    remaining: Math.max(0, limit - userData.count),
  };
}
