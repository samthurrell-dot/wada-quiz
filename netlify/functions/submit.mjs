// POST /api/submit — scores a finished daily round on the server and records it.
// The page sends its answers; the score is worked out here, so it can't be faked by editing the page.
import { getStore } from "@netlify/blobs";
import { dailyQuestions, puzzleNumber, scoreRound, QUESTIONS } from "../../public/game.mjs";

const json = (obj, status = 200) =>
  new Response(JSON.stringify(obj), { status, headers: { "content-type": "application/json", "cache-control": "no-store" } });

export const cleanName = (n) =>
  String(n || "").replace(/[<>"'&`\u0000-\u001f\u007f]/g, "").replace(/\s+/g, " ").trim().slice(0, 20);
export const validId = (id) => typeof id === "string" && /^[A-Za-z0-9-]{16,64}$/.test(id);

export default async (req) => {
  if (req.method !== "POST") return json({ error: "Send scores with POST." }, 405);
  let body;
  try { body = await req.json(); } catch { return json({ error: "That request couldn't be read." }, 400); }
  const { playerId, name, puzzle, mode, answers } = body || {};

  if (!validId(playerId)) return json({ error: "Missing player id." }, 400);
  const nm = cleanName(name);
  if (nm.length < 2) return json({ error: "Choose a name of at least 2 characters." }, 400);
  if (mode !== "pick" && mode !== "type") return json({ error: "Unknown mode." }, 400);
  const today = puzzleNumber();
  if (!Number.isInteger(puzzle) || puzzle < today - 1 || puzzle > today)
    return json({ error: "That puzzle has closed. Scores count on the day (UK time)." }, 400);
  if (!Array.isArray(answers) || answers.length !== QUESTIONS) return json({ error: "A round has 10 answers." }, 400);

  const questions = dailyQuestions(puzzle);
  const result = scoreRound(questions, mode, answers);
  const store = getStore({ name: "wada-quiz", consistency: "strong" });

  const dayKey = `day/${puzzle}/${playerId}`;
  const entry = { name: nm, mode, points: result.points, base: result.base, marks: result.marks, at: new Date().toISOString() };
  const write = await store.setJSON(dayKey, entry, { onlyIfNew: true });
  if (write && write.modified === false) {
    const existing = await store.get(dayKey, { type: "json" });
    return json({ error: "You've already played today's puzzle.", entry: existing, puzzle }, 409);
  }

  // running totals for the all-time table
  const pKey = `player/${playerId}`;
  const p = (await store.get(pKey, { type: "json" })) || { total: 0, played: 0, best: 0, streak: 0, bestStreak: 0, last: null };
  p.name = nm;
  p.total += result.points;
  p.played += 1;
  p.best = Math.max(p.best, result.points);
  p.streak = p.last === puzzle - 1 ? p.streak + 1 : p.last === puzzle ? p.streak : 1;
  p.bestStreak = Math.max(p.bestStreak || 0, p.streak);
  p.last = Math.max(p.last || 0, puzzle);
  await store.setJSON(pKey, p);

  // rank for today
  const { blobs } = await store.list({ prefix: `day/${puzzle}/` });
  const all = await Promise.all(blobs.slice(0, 1000).map((b) => store.get(b.key, { type: "json" })));
  const better = all.filter((e) => e && (e.points > entry.points || (e.points === entry.points && e.at < entry.at))).length;

  return json({ entry, puzzle, rank: better + 1, of: all.filter(Boolean).length, player: { name: p.name, total: p.total, played: p.played, streak: p.streak } });
};

export const config = { path: "/api/submit" };
