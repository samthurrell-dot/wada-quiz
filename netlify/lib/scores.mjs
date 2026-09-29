// Shared scoring for the leaderboard and submit functions.
// Points are always worked out from each round's stored outcome codes (marks), never from the points saved at the time,
// so a change to the points table re-scores every past round the same way.
import { roundPoints } from "../../public/game.mjs";

export const pointsOf = (e) => (Array.isArray(e.marks) && e.marks.length ? roundPoints(e.mode, e.marks) : e.points || 0);

// Read every stored round: [{puzzle, id, entry}]
export async function allRounds(store) {
  const { blobs } = await store.list({ prefix: "day/" });
  const rows = await Promise.all(blobs.slice(0, 5000).map(async (b) => {
    const [, puzzle, id] = b.key.split("/");
    const entry = await store.get(b.key, { type: "json" });
    return entry && { puzzle: Number(puzzle), id, entry: { ...entry, points: pointsOf(entry) } };
  }));
  return rows.filter(Boolean);
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
