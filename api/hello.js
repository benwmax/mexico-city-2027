// Records that a traveler opened the site. Body: { name, device }.
const { redis } = require("./_redis");

const TRAVELERS = ["Bobby", "Tina", "Andi", "Ben", "Connor", "Josh"];

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false });
  }
  const body = typeof req.body === "string" ? safeParse(req.body) : req.body || {};
  const name = body.name;
  const device = typeof body.device === "string" ? body.device.slice(0, 64) : "";
  if (!TRAVELERS.includes(name) || !device) {
    return res.status(400).json({ ok: false });
  }

  try {
    const key = `visitor:${name}`;
    const raw = await redis(["GET", key]);
    const now = new Date().toISOString();
    const rec = raw ? safeParse(raw) : { firstSeen: now, visits: 0, devices: [] };
    rec.lastSeen = now;
    rec.visits = (rec.visits || 0) + 1;
    rec.devices = Array.isArray(rec.devices) ? rec.devices : [];
    if (!rec.devices.includes(device)) rec.devices = [...rec.devices, device].slice(-5);
    await redis(["SET", key, JSON.stringify(rec)]);
  } catch (e) {
    // Tracking is best effort; never break the site for visitors.
  }
  return res.status(200).json({ ok: true });
};

function safeParse(s) {
  try { return JSON.parse(s) || {}; } catch (e) { return {}; }
}
