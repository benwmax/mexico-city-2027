// Admin view of who has opened the site. Send the ADMIN_KEY in the x-admin-key header.
const crypto = require("crypto");
const { redis, configured } = require("./_redis");

const TRAVELERS = ["Bobby", "Tina", "Andi", "Ben", "Connor", "Josh"];

function sameKey(a, b) {
  const x = Buffer.from(String(a));
  const y = Buffer.from(String(b));
  return x.length === y.length && crypto.timingSafeEqual(x, y);
}

module.exports = async (req, res) => {
  res.setHeader("Cache-Control", "no-store");
  const admin = process.env.ADMIN_KEY;
  if (!admin) return res.status(503).json({ error: "ADMIN_KEY is not set in Vercel yet." });
  if (!sameKey(req.headers["x-admin-key"] || "", admin)) {
    return res.status(401).json({ error: "Wrong key." });
  }
  if (!configured()) {
    return res.status(200).json({ connected: false, travelers: TRAVELERS.map((name) => ({ name })) });
  }
  const rows = await Promise.all(
    TRAVELERS.map(async (name) => {
      const raw = await redis(["GET", `visitor:${name}`]);
      let rec = null;
      try { rec = raw ? JSON.parse(raw) : null; } catch (e) { rec = null; }
      return rec
        ? { name, firstSeen: rec.firstSeen, lastSeen: rec.lastSeen, visits: rec.visits, devices: (rec.devices || []).length }
        : { name };
    })
  );
  return res.status(200).json({ connected: true, travelers: rows });
};
