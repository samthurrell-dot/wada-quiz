// POST /api/link {from, to}: join two devices into one player.
// "from" is this device's private id, "to" is the id from the link opened on it (another device's private id).
// Holding both private ids is the proof that they belong to the same person. Past rounds are merged by the leaderboard.
import { getStore } from "@netlify/blobs";
const validId = (id) => typeof id === "string" && /^[A-Za-z0-9-]{16,64}$/.test(id);
import { aliases, canon, allRounds } from "../lib/scores.mjs";

const json = (obj, status = 200) =>
  new Response(JSON.stringify(obj), { status, headers: { "content-type": "application/json", "cache-control": "no-store" } });

export default async (req) => {
  if (req.method !== "POST") return json({ error: "Use POST." }, 405);
  let body; try { body = await req.json(); } catch { return json({ error: "That request couldn't be read." }, 400); }
  const { from, to } = body || {};
  if (!validId(from) || !validId(to)) return json({ error: "That link isn't valid." }, 400);
  const store = getStore({ name: "wada-quiz", consistency: "strong" });
  const map = await aliases(store);
  const target = canon(map, to), self = canon(map, from);
  if (target === self) return json({ ok: true, to: target, already: true });
  await store.setJSON(`alias/${self}`, { to: target, at: new Date().toISOString() });
  map.set(self, target);
  const rounds = (await allRounds(store, map)).filter((r) => r.id === target).sort((a, b) => (a.entry.at < b.entry.at ? 1 : -1));
  return json({ ok: true, to: target, name: rounds[0] ? rounds[0].entry.name : null, rounds: rounds.length });
};

export const config = { path: "/api/link" };
