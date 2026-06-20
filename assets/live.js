/* ============================================================
   World Cup Hub — live data (API-Football / api-sports.io)
   ------------------------------------------------------------
   Runs straight in the browser. No server needed.
   Load this AFTER assets/data.js and BEFORE assets/app.js,
   then call goLive() before your page renders. See data-guide.html.

   Free tier: 100 requests/day. The World Cup is league=1, season=2026.
   Get a key at https://dashboard.api-football.com  (free signup)
   ============================================================ */

const API = {
  key:  "2bad7765ca1b7925e1ad88da91b66708",
  base: "https://v3.football.api-sports.io",
  league: 1,
  season: 2026
};

/* API-Football gives team NAMES, not ISO codes. The site's flag()
   helper wants two-letter codes (or GB-ENG / GB-SCT). This maps the
   names the API uses for the 48 World Cup teams to the right code. */
const NAME_TO_CODE = {
  "Argentina":"AR","Australia":"AU","Austria":"AT","Belgium":"BE",
  "Bosnia and Herzegovina":"BA","Brazil":"BR","Cabo Verde":"CV","Canada":"CA",
  "Colombia":"CO","Croatia":"HR","Curacao":"CW","Curaçao":"CW",
  "Czech Republic":"CZ","Czechia":"CZ","DR Congo":"CD","Congo DR":"CD",
  "Ecuador":"EC","Egypt":"EG","England":"GB-ENG","France":"FR","Germany":"DE",
  "Ghana":"GH","Haiti":"HT","Iran":"IR","IR Iran":"IR","Iraq":"IQ",
  "Ivory Coast":"CI","Cote D'Ivoire":"CI","Japan":"JP","Jordan":"JO",
  "Korea Republic":"KR","South Korea":"KR","Mexico":"MX","Morocco":"MA",
  "Netherlands":"NL","New Zealand":"NZ","Norway":"NO","Panama":"PA",
  "Paraguay":"PY","Portugal":"PT","Qatar":"QA","Saudi Arabia":"SA",
  "Scotland":"GB-SCT","Senegal":"SN","South Africa":"ZA","Spain":"ES",
  "Sweden":"SE","Switzerland":"CH","Tunisia":"TN","Turkey":"TR",
  "Türkiye":"TR","United States":"US","USA":"US","Uruguay":"UY",
  "Uzbekistan":"UZ"
};
function codeFor(name) { return NAME_TO_CODE[name] || (name || "").slice(0, 2).toUpperCase(); }

/* API status.short -> our three states.
   Finished: FT, AET, PEN.  Live: 1H, HT, 2H, ET, BT, P, LIVE, SUSP, INT.
   Everything else (NS, TBD, PST, CANC) we treat as upcoming. */
const LIVE_CODES = ["1H", "HT", "2H", "ET", "BT", "P", "LIVE", "SUSP", "INT"];
const DONE_CODES = ["FT", "AET", "PEN"];

function apiHeaders() { return { headers: { "x-apisports-key": API.key } }; }

function get(path, params) {
  const url = new URL(API.base + path);
  url.searchParams.set("league", API.league);
  url.searchParams.set("season", API.season);
  Object.entries(params || {}).forEach(([k, v]) => url.searchParams.set(k, v));
  return fetch(url, apiHeaders()).then(r => r.json());
}

/* one API fixture -> the shape matchCard() expects */
function toMatch(fx) {
  const short = fx.fixture.status.short;
  const live = LIVE_CODES.includes(short);
  const done = DONE_CODES.includes(short);
  const home = fx.teams.home.name, away = fx.teams.away.name;
  const dt = new Date(fx.fixture.date);
  // round looks like "Group Stage - 1"; group letter is not in fixtures,
  // so derive it later from standings. Keep round text for now.
  return {
    id: fx.fixture.id,
    group: "",
    date: dt.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
    home: home, hc: codeFor(home),
    away: away, ac: codeFor(away),
    hs: fx.goals.home, as: fx.goals.away,
    status: live ? "LIVE" : (done ? "FT" : "UP"),
    minute: live && fx.fixture.status.elapsed ? fx.fixture.status.elapsed + "'" : null,
    venue: [fx.fixture.venue.name, fx.fixture.venue.city].filter(Boolean).join(", ") || "TBD",
    time: dt.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }),
    tv: null,
    hl: done ? "https://www.youtube.com/results?search_query=" +
        encodeURIComponent(home + " " + away + " World Cup 2026 highlights") : null
  };
}

/* build a name -> group-letter map from standings, then tag matches */
function tagGroups(matches, groups) {
  const nameToGroup = {};
  Object.entries(groups).forEach(([letter, rows]) =>
    rows.forEach(r => { nameToGroup[r.team] = letter; }));
  matches.forEach(m => { m.group = nameToGroup[m.home] || nameToGroup[m.away] || ""; });
}

async function goLive() {
  try {
    // 1) standings -> WC.groups
    const sd = await get("/standings");
    const tables = sd.response?.[0]?.league?.standings || [];
    const groups = {};
    tables.forEach(table => {
      table.forEach(row => {
        const letter = (row.group || "Group ?").replace("Group ", "").trim();
        (groups[letter] = groups[letter] || []).push({
          team: row.team.name,
          code: codeFor(row.team.name),
          p: row.all.played, w: row.all.win, d: row.all.draw, l: row.all.lose,
          gf: row.all.goals.for, ga: row.all.goals.against, pts: row.points
        });
      });
    });
    if (Object.keys(groups).length) WC.groups = groups;

    // 2) fixtures -> WC.matches
    const fd = await get("/fixtures");
    const fixtures = fd.response || [];
    if (fixtures.length) {
      const matches = fixtures.map(toMatch);
      tagGroups(matches, WC.groups);
      WC.matches = matches;
    }
  } catch (e) {
    console.warn("Live data unavailable, showing seed data.", e);
  }
}

if (typeof window !== "undefined") { window.goLive = goLive; window.API = API; }
