# Wada you know about colour?

A daily colour puzzle. Name ten of Sanzo Wada's colours from cryptic clues; scores go on a shared leaderboard.

## What's in the folder

| Path | What it is |
|---|---|
| `public/index.html` | The game page |
| `public/game.mjs` | Colours, clues, daily puzzle selection and scoring. Used by the page **and** the server, so both always agree |
| `netlify/functions/submit.mjs` | Receives a finished daily round, **works out the score itself**, and saves it (`/api/submit`) |
| `netlify/functions/leaderboard.mjs` | Today's table and the all-time table (`/api/leaderboard`) |
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

- Each colour: 3 points with no hints, 2 with the cryptic clue, 1 with both hints, 0 if wrong.
- **Type mode doubles the score** (up to 60). Pick mode is up to 30. The multiplier lives in `MULTIPLIER` in `public/game.mjs` if you want to change it.
- Only **Today's puzzle** counts. Each player gets one go per day; a second attempt is refused by the server.
- A new puzzle starts at midnight UK time. Puzzle No. 1 is 28 September 2026.
- The all-time table ranks by total points, and also shows days played, average and current streak.

## Players and fair play

- Players choose a display name; no sign-up. Each device gets a random private id, kept in the browser.
- The page sends its answers, not its score. The server checks the answers against the day's colours, so editing the page can't produce a fake score.
- What the server **can't** check is whether someone looked a name up, or said they used no hints when they did. It's a game among friends, so that's accepted.
- If someone plays on a new phone, they get a new id (and a fresh all-time total).

## Managing scores

In Netlify: **your project → Blobs → `wada-quiz`**.

- `day/<puzzle number>/<player id>`: one entry per player per day
- `player/<player id>`: running totals and name

Delete an entry there to remove a score or an unwanted name.

## Credits

Colour names and values from [Matt DesLauriers' open dataset](https://github.com/mattdesl/dictionary-of-colour-combinations) of *A Dictionary of Color Combinations* (Sanzo Wada, Seigensha), MIT licence.
