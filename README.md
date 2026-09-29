# Wada you know about colour?

A daily colour puzzle. Name ten of Sanzo Wada's colours from cryptic clues; scores go on a shared leaderboard.

## What's in the folder

| Path | What it is |
|---|---|
| `public/index.html` | The game page |
| `public/learn/` | The Learn section: four story pages about Wada’s colours. They are built in the `wada-mix` repo (`python3 source/build.py` writes them to `export/learn/`); copy them here to update |
| `public/game.mjs` | Colours, clues, daily puzzle selection and scoring. Used by the page **and** the server, so both always agree |
| `netlify/functions/submit.mjs` | Receives a finished daily round, **works out the score itself**, and saves it (`/api/submit`) |
| `netlify/functions/leaderboard.mjs` | Today's table and the all-time table (`/api/leaderboard`) |
| `netlify/functions/link.mjs` | Joins two devices into one player (`/api/link`) |
| `netlify/lib/scores.mjs` | Works out points and all-time totals from the stored rounds |
| `netlify.toml` | Tells Netlify where the page and functions are |
| `package.json` | One dependency: `@netlify/blobs`, Netlify's built-in storage |

No database or accounts to set up: scores are kept in Netlify Blobs, which switches on automatically when the site is deployed.

## Deploy option 1: GitHub + Netlify (recommended)

1. Create a new GitHub repository (for example `wada-quiz`) and upload everything in this folder to it (not `node_modules`).
2. In Netlify: **Add new project → Import an existing project → GitHub**, and pick the repository.
3. Leave the settings as they are (they come from `netlify.toml`) and press **Deploy**.
4. Optional: **Project configuration → Change project name** to get a nicer address, e.g. `wada-quiz.netlify.app`.

Every time you change a file on GitHub, Netlify redeploys by itself.

## Deploy option 2: from your computer with the Netlify CLI

In this folder:

```
npm install
npx netlify-cli login
npx netlify-cli deploy --prod
```

Answer the questions to create a new project. The CLI prints your site's address at the end.

> Netlify Drop (dragging a folder onto the Netlify page) will **not** work here: it only publishes plain files, so the leaderboard functions wouldn't run.

## How scoring works

- Each colour: 6 points with no hints, 3 with the cryptic clue, 1 with both hints, 0 if wrong. An unhinted answer is worth two clued ones.
- In pick mode the hints don't show the word count, since that would often give the answer away.
- **Type mode doubles the score** (up to 120). Pick mode is up to 60. The points live in `POINTS` and the multiplier in `MULTIPLIER` in `public/game.mjs`.
- Every round stores what happened on each colour (no hints, clue, both hints, wrong), and the leaderboard works out points from that each time it loads. So if you change `POINTS`, all past rounds are re-scored the same way.
- Only **Today's puzzle** counts. Each player gets one go per day; a second attempt is refused by the server.
- A new puzzle starts at midnight UK time. Puzzle No. 1 is 28 September 2026.
- The all-time table ranks by total points, and also shows days played, average and current streak.

## Players and fair play

- Players choose a display name; no sign-up. Each device gets a random private id, kept in the browser.
- The page sends its answers, not its score. The server checks the answers against the day's colours, so editing the page can't produce a fake score.
- What the server **can't** check is whether someone looked a name up, or said they used no hints when they did. It's a game among friends, so that's accepted.
- Each device gets its own id. To join two devices, open **Leaderboard → Playing on more than one device?**, copy the link and open it on the other device. The server records `alias/<old id>` → the id to play as, and the leaderboard merges past rounds (if both devices played the same day, the first round counts).

## Managing scores

In Netlify: **your project → Blobs → `wada-quiz`**.

- `day/<puzzle number>/<player id>`: one entry per player per day
- `player/<player id>`: running totals and name

Delete an entry there to remove a score or an unwanted name.

## Credits

Colour names and values from [Matt DesLauriers' open dataset](https://github.com/mattdesl/dictionary-of-colour-combinations) of *A Dictionary of Color Combinations* (Sanzo Wada, Seigensha), MIT licence.
