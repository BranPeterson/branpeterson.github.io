# World Cup Hub

A multi page site that tracks the FIFA World Cup 2026: live scores, full schedule,
group standings, Football Manager style player profiles, tactical formation boards,
and links to match highlights.

Built as a Kyonic Designs project. No build step, no framework, no dependencies.
Just open `index.html` (or serve it locally, see below).

## Pages

| File | What it does |
|------|--------------|
| `index.html` | Live page: hero, score ticker, latest games, recent results |
| `schedule.html` | All matches, filterable by group and status |
| `standings.html` | All 12 group tables, auto sorted |
| `players.html` | FM style player profiles with attribute bars and search |
| `tactics.html` | Formation boards on a tactical pitch |
| `data-guide.html` | Step by step guide to wiring in live data |

## How it works

Everything reads from one file: `assets/data.js`. That file holds a single `WC`
object with `matches`, `groups`, `players` and `formations`. The pages never
hard code data, they render from `WC`. To update scores by hand, edit `data.js`.

## Going live with real scores

`assets/live.js` is already included. It fetches from API-Football and pours the
result into the same `WC` object, so the pages do not change. To turn it on:

1. Get a free key at https://dashboard.api-football.com/register (100 calls/day).
2. Paste your key into the `API.key` line at the top of `assets/live.js`.
3. On each page, uncomment the `<script src="assets/live.js"></script>` line.
   The home page is already set up to use it (see the `start()` function): it
   calls `goLive()` first, then renders, and refreshes every 60 seconds during
   live games. If the fetch fails, it falls back to the seed data automatically.

The full walkthrough, including why API-Football works without a server and how
to hide the key later, is on the `data-guide.html` page.

### Important: do not open with file://

API-Football rejects requests from `file://`. To test live data, serve the folder:

    python -m http.server 8000      # then visit http://localhost:8000
    # or
    npx serve

On GitHub Pages this is a non issue, since Pages serves over https.

## Hosting on GitHub Pages

1. Make a new repo, e.g. `world-cup-hub`.
2. Drop these files in the root (keep the `assets` folder).
3. Push, then go to Settings, Pages, and set the source to your main branch root.
4. Your site goes live at `yourname.github.io/world-cup-hub/`.

## Updating the seed data by hand

Edit `assets/data.js`:

- **Scores:** find the match in `matches`, set `hs` / `as`, change `status` to
  `"FT"`, add a `hl` highlight link.
- **Standings:** edit the group rows in `groups`. Tables sort themselves.
- **Players:** add objects to `players`. Attributes are on the 1 to 20 scale.
- **Formations:** add to `formations`. `spots` use pitch percentages, keeper at
  the bottom, team attacks upward.

Players and formations stay hand curated even when live, since the free API tier
does not include attribute level scouting data.

Data seeded June 17, 2026. Not affiliated with FIFA.
