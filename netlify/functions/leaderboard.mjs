// GET /api/leaderboard?scope=day|all&puzzle=N&me=<playerId>
// Returns names and scores only; player ids are never sent back.
// Scores are recalculated from each round's outcomes with the current points table (see netlify/lib/scores.mjs).
import { getStore } from "@netlify/blobs";
import { puzzleNumber } from "../../public/game.mjs";
import { allRounds, totals } from "../lib/scores.mjs";

const json = (obj, status = 200) =>
  new Response(JSON.stringify(obj), { status, headers: { "content-type": "application/json", "cache-control": "no-store" } });

export default async (req) => {
  const url = new URL(req.url);
  const scope = url.searchParams.get("scope") === "all" ? "all" : "day";
  const me = url.searchParams.get("me") || "";
  const today = puzzleNumber();
  const store = getStore({ name: "wada-quiz", consistency: "strong" });
  const rounds = await allRounds(store);

  if (scope === "day") {
    let puzzle = parseInt(url.searchParams.get("puzzle") || today, 10);
    if (!Number.isInteger(puzzle) || puzzle < 1 || puzzle > today) puzzle = today;
    const rows = rounds.filter((r) => r.puzzle === puzzle).map((r) => ({
      name: r.entry.name, mode: r.entry.mode, points: r.entry.points, marks: r.entry.marks, at: r.entry.at, me: r.id === me }));
    rows.sort((a, b) => b.points - a.points || (a.at < b.at ? -1 : 1));
    rows.forEach((r, k) => { r.rank = k + 1; delete r.at; });
    return json({ scope, puzzle, today, players: rows.length, rows: rows.slice(0, 50), mine: rows.find((r) => r.me) || null });
  }

  const rows = totals(rounds, today).map(({ id, ...p }) => ({ ...p, me: id === me }));
  rows.sort((a, b) => b.total - a.total || b.average - a.average);
  rows.forEach((r, k) => (r.rank = k + 1));
  return json({ scope, today, players: rows.length, rows: rows.slice(0, 50), mine: rows.find((r) => r.me) || null });
};

export const config = { path: "/api/leaderboard" };
