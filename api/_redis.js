// Minimal Upstash Redis REST client (works with the Upstash / Vercel KV integration env vars).
// If no database is connected yet, calls return null and the site still works.
function creds() {
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
  return url && token ? { url, token } : null;
}

async function redis(command) {
  const c = creds();
  if (!c) return null;
  const res = await fetch(c.url, {
    method: "POST",
    headers: { Authorization: `Bearer ${c.token}`, "content-type": "application/json" },
    body: JSON.stringify(command),
  });
  if (!res.ok) throw new Error(`redis ${res.status}`);
  const body = await res.json();
  return body.result;
}

module.exports = { redis, configured: () => !!creds() };
