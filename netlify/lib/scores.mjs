// Shared scoring for the leaderboard and submit functions.
// Points are always worked out from each round's stored outcome codes (marks), never from the points saved at the time,
// so a change to the points table re-scores every past round the same way.
// Players can join devices: alias/<oldId> points at the id they now play as, and rounds are merged under that id.
import { roundPoints } from "../../public/game.mjs";

export const pointsOf = (e) => (Array.isArray(e.marks) && e.marks.length ? roundPoints(e.mode, e.marks) : e.points || 0);

export async function aliases(store) {
  const { blobs } = await store.list({ prefix: "alias/" });
  const map = new Map();
  await Promise.all(blobs.map(async (b) => { const v = await store.get(b.key, { type: "json" }); if (v && v.to) map.set(b.key.slice(6), v.to); }));
  return map;
}
// follow alias links to the id a player now uses (guards against loops)
export function canon(map, id) { let x = id; for (let i = 0; i < 10 && map.has(x); i++) x = map.get(x); return x; }

// Read every stored round, merged by player: [{puzzle, id, entry}]. If joined devices both played a day, the first round counts.
export async function allRounds(store, map) {
  map = map || (await aliases(store));
  const { blobs } = await store.list({ prefix: "day/" });
  const rows = (await Promise.all(blobs.slice(0, 5000).map(async (b) => {
    const [, puzzle, id] = b.key.split("/");
    const entry = await store.get(b.key, { type: "json" });
    return entry && { puzzle: Number(puzzle), id: canon(map, id), entry: { ...entry, points: pointsOf(entry) } };
  }))).filter(Boolean);
  const first = new Map();
  for (const r of rows) { const k = r.puzzle + "/" + r.id, f = first.get(k); if (!f || (r.entry.at || "") < (f.entry.at || "")) first.set(k, r); }
  return [...first.values()];
}

// All-time totals per player from their rounds
export function totals(rounds, today) {
  const by = new Map();
  for (const r of rounds) {
    const p = by.get(r.id) || { id: r.id, name: r.entry.name, total: 0, played: 0, best: 0, days: new Set(), lastAt: "" };
    p.total += r.entry.points; p.played += 1; p.best = Math.max(p.best, r.entry.points); p.days.add(r.puzzle);
    if ((r.entry.at || "") >= p.lastAt) { p.lastAt = r.entry.at || ""; p.name = r.entry.name; }
    by.set(r.id, p);
  }
  return [...by.values()].map((p) => {
    let streak = 0, d = p.days.has(today) ? today : today - 1;
    while (p.days.has(d)) { streak++; d--; }
    return { id: p.id, name: p.name, total: p.total, played: p.played, best: p.best,
      average: Math.round((p.total / Math.max(1, p.played)) * 10) / 10, streak };
  });
}
