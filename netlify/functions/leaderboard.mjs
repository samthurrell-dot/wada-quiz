// GET /api/leaderboard?scope=day|all&puzzle=N&me=<playerId>
// Returns names and scores only; player ids are never sent back.
import { getStore } from "@netlify/blobs";
import { puzzleNumber } from "../../public/game.mjs";

const json = (obj, status = 200) =>
  new Response(JSON.stringify(obj), { status, headers: { "content-type": "application/json", "cache-control": "no-store" } });

export default async (req) => {
  const url = new URL(req.url);
  const scope = url.searchParams.get("scope") === "all" ? "all" : "day";
  const me = url.searchParams.get("me") || "";
  const today = puzzleNumber();
  const store = getStore({ name: "wada-quiz", consistency: "strong" });

  if (scope === "day") {
    let puzzle = parseInt(url.searchParams.get("puzzle") || today, 10);
    if (!Number.isInteger(puzzle) || puzzle < 1 || puzzle > today) puzzle = today;
    const { blobs } = await store.list({ prefix: `day/${puzzle}/` });
    const rows = (await Promise.all(blobs.slice(0, 1000).map(async (b) => {
      const e = await store.get(b.key, { type: "json" });
      return e && { name: e.name, mode: e.mode, points: e.points, marks: e.marks, at: e.at, me: b.key.endsWith("/" + me) };
    }))).filter(Boolean);
    rows.sort((a, b) => b.points - a.points || (a.at < b.at ? -1 : 1));
    rows.forEach((r, k) => { r.rank = k + 1; delete r.at; });
    return json({ scope, puzzle, today, players: rows.length, rows: rows.slice(0, 50), mine: rows.find((r) => r.me) || null });
  }

  const { blobs } = await store.list({ prefix: "player/" });
  const rows = (await Promise.all(blobs.slice(0, 2000).map(async (b) => {
    const p = await store.get(b.key, { type: "json" });
    if (!p) return null;
    const streak = p.last >= today - 1 ? p.streak : 0;
    return { name: p.name, total: p.total, played: p.played, average: Math.round((p.total / Math.max(1, p.played)) * 10) / 10, best: p.best, streak, me: b.key === "player/" + me };
  }))).filter(Boolean);
  rows.sort((a, b) => b.total - a.total || b.average - a.average);
  rows.forEach((r, k) => (r.rank = k + 1));
  return json({ scope, today, players: rows.length, rows: rows.slice(0, 50), mine: rows.find((r) => r.me) || null });
};

export const config = { path: "/api/leaderboard" };
