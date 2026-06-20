/* ============================================================
   World Cup Hub — seed data
   Real 2026 FIFA World Cup data (Canada / Mexico / USA)
   Sources: FIFA, ESPN, CBS Sports, Yahoo Sports (mid-June 2026)

   This file is the single source of truth for the static build.
   To go live, replace the arrays below with API responses.
   See pages/data-guide.html for the full wiring walkthrough.
   ============================================================ */

const WC = {
  meta: {
    name: "FIFA World Cup 2026",
    hosts: "Canada · Mexico · United States",
    teams: 48,
    matches: 104,
    window: "June 11 – July 19, 2026",
    lastUpdated: "June 17, 2026"
  },

  /* ---- GROUPS (12 groups of 4) ----
     Standings reflect matches played through June 17.
     p = played, w/d/l, gf/ga = goals for/against, pts = points */
  groups: {
    A: [
      { team: "Mexico", code: "MX", p: 1, w: 1, d: 0, l: 0, gf: 2, ga: 0, pts: 3 },
      { team: "Korea Republic", code: "KR", p: 1, w: 1, d: 0, l: 0, gf: 2, ga: 1, pts: 3 },
      { team: "Czechia", code: "CZ", p: 1, w: 0, d: 0, l: 1, gf: 1, ga: 2, pts: 0 },
      { team: "South Africa", code: "ZA", p: 1, w: 0, d: 0, l: 1, gf: 0, ga: 2, pts: 0 }
    ],
    B: [
      { team: "Canada", code: "CA", p: 1, w: 0, d: 1, l: 0, gf: 1, ga: 1, pts: 1 },
      { team: "Bosnia & Herzegovina", code: "BA", p: 1, w: 0, d: 1, l: 0, gf: 1, ga: 1, pts: 1 },
      { team: "Switzerland", code: "CH", p: 1, w: 0, d: 1, l: 0, gf: 1, ga: 1, pts: 1 },
      { team: "Qatar", code: "QA", p: 1, w: 0, d: 1, l: 0, gf: 1, ga: 1, pts: 1 }
    ],
    C: [
      { team: "Scotland", code: "GB-SCT", p: 1, w: 1, d: 0, l: 0, gf: 1, ga: 0, pts: 3 },
      { team: "Brazil", code: "BR", p: 1, w: 0, d: 1, l: 0, gf: 1, ga: 1, pts: 1 },
      { team: "Morocco", code: "MA", p: 1, w: 0, d: 1, l: 0, gf: 1, ga: 1, pts: 1 },
      { team: "Haiti", code: "HT", p: 1, w: 0, d: 0, l: 1, gf: 0, ga: 1, pts: 0 }
    ],
    D: [
      { team: "United States", code: "US", p: 1, w: 1, d: 0, l: 0, gf: 4, ga: 1, pts: 3 },
      { team: "Australia", code: "AU", p: 1, w: 1, d: 0, l: 0, gf: 2, ga: 0, pts: 3 },
      { team: "Türkiye", code: "TR", p: 1, w: 0, d: 0, l: 1, gf: 0, ga: 2, pts: 0 },
      { team: "Paraguay", code: "PY", p: 1, w: 0, d: 0, l: 1, gf: 1, ga: 4, pts: 0 }
    ],
    E: [
      { team: "Germany", code: "DE", p: 1, w: 1, d: 0, l: 0, gf: 7, ga: 1, pts: 3 },
      { team: "Ivory Coast", code: "CI", p: 1, w: 1, d: 0, l: 0, gf: 1, ga: 0, pts: 3 },
      { team: "Ecuador", code: "EC", p: 1, w: 0, d: 0, l: 1, gf: 0, ga: 1, pts: 0 },
      { team: "Curaçao", code: "CW", p: 1, w: 0, d: 0, l: 1, gf: 1, ga: 7, pts: 0 }
    ],
    F: [
      { team: "Sweden", code: "SE", p: 1, w: 1, d: 0, l: 0, gf: 5, ga: 1, pts: 3 },
      { team: "Netherlands", code: "NL", p: 1, w: 0, d: 1, l: 0, gf: 2, ga: 2, pts: 1 },
      { team: "Japan", code: "JP", p: 1, w: 0, d: 1, l: 0, gf: 2, ga: 2, pts: 1 },
      { team: "Tunisia", code: "TN", p: 1, w: 0, d: 0, l: 1, gf: 1, ga: 5, pts: 0 }
    ],
    G: [
      { team: "Belgium", code: "BE", p: 1, w: 0, d: 1, l: 0, gf: 1, ga: 1, pts: 1 },
      { team: "Egypt", code: "EG", p: 1, w: 0, d: 1, l: 0, gf: 1, ga: 1, pts: 1 },
      { team: "Iran", code: "IR", p: 1, w: 0, d: 1, l: 0, gf: 2, ga: 2, pts: 1 },
      { team: "New Zealand", code: "NZ", p: 1, w: 0, d: 1, l: 0, gf: 2, ga: 2, pts: 1 }
    ],
    H: [
      { team: "Saudi Arabia", code: "SA", p: 1, w: 0, d: 1, l: 0, gf: 1, ga: 1, pts: 1 },
      { team: "Uruguay", code: "UY", p: 1, w: 0, d: 1, l: 0, gf: 1, ga: 1, pts: 1 },
      { team: "Spain", code: "ES", p: 1, w: 0, d: 1, l: 0, gf: 0, ga: 0, pts: 1 },
      { team: "Cabo Verde", code: "CV", p: 1, w: 0, d: 1, l: 0, gf: 0, ga: 0, pts: 1 }
    ],
    I: [
      { team: "France", code: "FR", p: 1, w: 1, d: 0, l: 0, gf: 2, ga: 0, pts: 3 },
      { team: "Norway", code: "NO", p: 1, w: 1, d: 0, l: 0, gf: 3, ga: 1, pts: 3 },
      { team: "Senegal", code: "SN", p: 1, w: 0, d: 0, l: 1, gf: 0, ga: 2, pts: 0 },
      { team: "Iraq", code: "IQ", p: 1, w: 0, d: 0, l: 1, gf: 1, ga: 3, pts: 0 }
    ],
    J: [
      { team: "Argentina", code: "AR", p: 1, w: 1, d: 0, l: 0, gf: 3, ga: 0, pts: 3 },
      { team: "Austria", code: "AT", p: 1, w: 1, d: 0, l: 0, gf: 3, ga: 1, pts: 3 },
      { team: "Jordan", code: "JO", p: 1, w: 0, d: 0, l: 1, gf: 1, ga: 3, pts: 0 },
      { team: "Algeria", code: "DZ", p: 1, w: 0, d: 0, l: 1, gf: 0, ga: 3, pts: 0 }
    ],
    K: [
      { team: "Portugal", code: "PT", p: 1, w: 0, d: 1, l: 0, gf: 1, ga: 1, pts: 1 },
      { team: "Congo DR", code: "CD", p: 1, w: 0, d: 1, l: 0, gf: 1, ga: 1, pts: 1 },
      { team: "Colombia", code: "CO", p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, pts: 0 },
      { team: "Uzbekistan", code: "UZ", p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, pts: 0 }
    ],
    L: [
      { team: "England", code: "GB-ENG", p: 1, w: 1, d: 0, l: 0, gf: 4, ga: 2, pts: 3 },
      { team: "Croatia", code: "HR", p: 1, w: 0, d: 0, l: 1, gf: 2, ga: 4, pts: 0 },
      { team: "Ghana", code: "GH", p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, pts: 0 },
      { team: "Panama", code: "PA", p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, pts: 0 }
    ]
  },

  /* ---- MATCHES ----
     status: "FT" finished | "LIVE" in progress | "UP" upcoming
     For upcoming games, hs/as are null and time/tv carry kickoff info. */
  matches: [
    // Matchday 1
    { id: 1, group: "A", date: "Jun 11", home: "Mexico", hc: "MX", away: "South Africa", ac: "ZA", hs: 2, as: 0, status: "FT", venue: "Estadio Azteca, Mexico City", hl: "https://www.youtube.com/results?search_query=Mexico+South+Africa+World+Cup+2026+highlights" },
    { id: 2, group: "A", date: "Jun 11", home: "Korea Republic", hc: "KR", away: "Czechia", ac: "CZ", hs: 2, as: 1, status: "FT", venue: "Estadio Akron, Guadalajara", hl: "https://www.youtube.com/results?search_query=Korea+Czechia+World+Cup+2026+highlights" },
    { id: 3, group: "B", date: "Jun 12", home: "Canada", hc: "CA", away: "Bosnia & Herzegovina", ac: "BA", hs: 1, as: 1, status: "FT", venue: "BMO Field, Toronto", hl: "https://www.youtube.com/results?search_query=Canada+Bosnia+World+Cup+2026+highlights" },
    { id: 4, group: "D", date: "Jun 12", home: "United States", hc: "US", away: "Paraguay", ac: "PY", hs: 4, as: 1, status: "FT", venue: "SoFi Stadium, Los Angeles", hl: "https://www.youtube.com/results?search_query=USA+Paraguay+World+Cup+2026+highlights" },
    { id: 5, group: "B", date: "Jun 13", home: "Switzerland", hc: "CH", away: "Qatar", ac: "QA", hs: 1, as: 1, status: "FT", venue: "Levi's Stadium, San Francisco Bay", hl: "https://www.youtube.com/results?search_query=Switzerland+Qatar+World+Cup+2026+highlights" },
    { id: 6, group: "C", date: "Jun 13", home: "Brazil", hc: "BR", away: "Morocco", ac: "MA", hs: 1, as: 1, status: "FT", venue: "MetLife Stadium, New York/New Jersey", hl: "https://www.youtube.com/results?search_query=Brazil+Morocco+World+Cup+2026+highlights" },
    { id: 7, group: "C", date: "Jun 14", home: "Haiti", hc: "HT", away: "Scotland", ac: "GB-SCT", hs: 0, as: 1, status: "FT", venue: "Gillette Stadium, Boston", hl: "https://www.youtube.com/results?search_query=Haiti+Scotland+World+Cup+2026+highlights" },
    { id: 8, group: "D", date: "Jun 14", home: "Australia", hc: "AU", away: "Türkiye", ac: "TR", hs: 2, as: 0, status: "FT", venue: "BC Place, Vancouver", hl: "https://www.youtube.com/results?search_query=Australia+Turkiye+World+Cup+2026+highlights" },
    { id: 9, group: "E", date: "Jun 14", home: "Germany", hc: "DE", away: "Curaçao", ac: "CW", hs: 7, as: 1, status: "FT", venue: "NRG Stadium, Houston", hl: "https://www.youtube.com/results?search_query=Germany+Curacao+World+Cup+2026+highlights" },
    { id: 10, group: "E", date: "Jun 14", home: "Ivory Coast", hc: "CI", away: "Ecuador", ac: "EC", hs: 1, as: 0, status: "FT", venue: "Lincoln Financial Field, Philadelphia", hl: "https://www.youtube.com/results?search_query=Ivory+Coast+Ecuador+World+Cup+2026+highlights" },
    { id: 11, group: "F", date: "Jun 14", home: "Netherlands", hc: "NL", away: "Japan", ac: "JP", hs: 2, as: 2, status: "FT", venue: "AT&T Stadium, Dallas", hl: "https://www.youtube.com/results?search_query=Netherlands+Japan+World+Cup+2026+highlights" },
    { id: 12, group: "F", date: "Jun 14", home: "Sweden", hc: "SE", away: "Tunisia", ac: "TN", hs: 5, as: 1, status: "FT", venue: "Arrowhead Stadium, Kansas City", hl: "https://www.youtube.com/results?search_query=Sweden+Tunisia+World+Cup+2026+highlights" },
    { id: 13, group: "G", date: "Jun 15", home: "Belgium", hc: "BE", away: "Egypt", ac: "EG", hs: 1, as: 1, status: "FT", venue: "Lumen Field, Seattle", hl: "https://www.youtube.com/results?search_query=Belgium+Egypt+World+Cup+2026+highlights" },
    { id: 14, group: "G", date: "Jun 15", home: "Iran", hc: "IR", away: "New Zealand", ac: "NZ", hs: 2, as: 2, status: "FT", venue: "BC Place, Vancouver", hl: "https://www.youtube.com/results?search_query=Iran+New+Zealand+World+Cup+2026+highlights" },
    { id: 15, group: "H", date: "Jun 15", home: "Spain", hc: "ES", away: "Cabo Verde", ac: "CV", hs: 0, as: 0, status: "FT", venue: "Estadio BBVA, Monterrey", hl: "https://www.youtube.com/results?search_query=Spain+Cabo+Verde+World+Cup+2026+highlights" },
    { id: 16, group: "H", date: "Jun 15", home: "Saudi Arabia", hc: "SA", away: "Uruguay", ac: "UY", hs: 1, as: 1, status: "FT", venue: "Estadio Akron, Guadalajara", hl: "https://www.youtube.com/results?search_query=Saudi+Arabia+Uruguay+World+Cup+2026+highlights" },
    { id: 17, group: "I", date: "Jun 16", home: "France", hc: "FR", away: "Senegal", ac: "SN", hs: 2, as: 0, status: "FT", venue: "MetLife Stadium, New York/New Jersey", hl: "https://www.youtube.com/results?search_query=France+Senegal+World+Cup+2026+highlights" },
    { id: 18, group: "I", date: "Jun 16", home: "Norway", hc: "NO", away: "Iraq", ac: "IQ", hs: 3, as: 1, status: "FT", venue: "Gillette Stadium, Boston", hl: "https://www.youtube.com/results?search_query=Norway+Iraq+World+Cup+2026+highlights" },
    { id: 19, group: "J", date: "Jun 16", home: "Argentina", hc: "AR", away: "Algeria", ac: "DZ", hs: 3, as: 0, status: "FT", venue: "AT&T Stadium, Dallas", hl: "https://www.youtube.com/results?search_query=Argentina+Algeria+Messi+hat+trick+World+Cup+2026+highlights" },
    { id: 20, group: "J", date: "Jun 17", home: "Austria", hc: "AT", away: "Jordan", ac: "JO", hs: 3, as: 1, status: "FT", venue: "Arrowhead Stadium, Kansas City", hl: "https://www.youtube.com/results?search_query=Austria+Jordan+World+Cup+2026+highlights" },
    { id: 21, group: "K", date: "Jun 17", home: "Portugal", hc: "PT", away: "Congo DR", ac: "CD", hs: 1, as: 1, status: "FT", venue: "NRG Stadium, Houston", hl: "https://www.youtube.com/results?search_query=Portugal+Congo+DR+Ronaldo+World+Cup+2026+highlights" },
    { id: 22, group: "L", date: "Jun 17", home: "England", hc: "GB-ENG", away: "Croatia", ac: "HR", hs: 4, as: 2, status: "FT", venue: "AT&T Stadium, Dallas", hl: "https://www.youtube.com/results?search_query=England+Croatia+World+Cup+2026+highlights" },
    // Live / later today
    { id: 23, group: "L", date: "Jun 17", home: "Ghana", hc: "GH", away: "Panama", ac: "PA", hs: 1, as: 0, status: "LIVE", minute: "63'", venue: "BMO Field, Toronto", hl: null },
    { id: 24, group: "K", date: "Jun 17", home: "Uzbekistan", hc: "UZ", away: "Colombia", ac: "CO", hs: null, as: null, status: "UP", time: "10:00 PM ET", tv: "FS1", venue: "Estadio Azteca, Mexico City", hl: null },
    // Matchday 2 (selected upcoming)
    { id: 25, group: "A", date: "Jun 18", home: "Czechia", hc: "CZ", away: "South Africa", ac: "ZA", hs: null, as: null, status: "UP", time: "12:00 PM ET", tv: "Fox", venue: "Mercedes-Benz Stadium, Atlanta", hl: null },
    { id: 26, group: "B", date: "Jun 18", home: "Switzerland", hc: "CH", away: "Bosnia & Herzegovina", ac: "BA", hs: null, as: null, status: "UP", time: "3:00 PM ET", tv: "Fox", venue: "SoFi Stadium, Los Angeles", hl: null },
    { id: 27, group: "B", date: "Jun 18", home: "Canada", hc: "CA", away: "Qatar", ac: "QA", hs: null, as: null, status: "UP", time: "6:00 PM ET", tv: "FS1", venue: "BC Place, Vancouver", hl: null },
    { id: 28, group: "A", date: "Jun 18", home: "Mexico", hc: "MX", away: "Korea Republic", ac: "KR", hs: null, as: null, status: "UP", time: "11:00 PM ET", tv: "Fox", venue: "Estadio Akron, Guadalajara", hl: null },
    { id: 29, group: "D", date: "Jun 19", home: "United States", hc: "US", away: "Australia", ac: "AU", hs: null, as: null, status: "UP", time: "3:00 PM ET", tv: "Fox", venue: "Lumen Field, Seattle", hl: null },
    { id: 30, group: "C", date: "Jun 19", home: "Brazil", hc: "BR", away: "Haiti", ac: "HT", hs: null, as: null, status: "UP", time: "9:00 PM ET", tv: "FS1", venue: "Lincoln Financial Field, Philadelphia", hl: null }
  ],

  /* ---- PLAYER PROFILES (FM-style) ----
     ratings 1-20 like Football Manager attribute scale.
     This is a curated sample set - extend freely. */
  players: [
    {
      id: "messi", name: "Lionel Messi", team: "Argentina", tc: "AR", pos: "RW",
      number: 10, age: 38, height: "1.70m", foot: "Left", club: "Inter Miami CF",
      role: "Advanced Playmaker", form: 9.4,
      tournament: { apps: 1, goals: 3, assists: 0, mins: 90 },
      attrs: { Finishing: 18, Dribbling: 20, Passing: 20, Vision: 20, Technique: 20, Composure: 20, Pace: 13, Stamina: 12, Strength: 11, Workrate: 12 },
      note: "Oldest player to score a World Cup hat-trick. Still the metronome of the Argentina build-up, dropping deep to dictate then ghosting onto the final ball."
    },
    {
      id: "mbappe", name: "Kylian Mbappé", team: "France", tc: "FR", pos: "ST",
      number: 10, age: 27, height: "1.78m", foot: "Right", club: "Real Madrid",
      role: "Complete Forward", form: 9.1,
      tournament: { apps: 1, goals: 2, assists: 0, mins: 88 },
      attrs: { Finishing: 19, Dribbling: 19, Passing: 15, Vision: 16, Technique: 18, Composure: 18, Pace: 20, Stamina: 16, Strength: 15, Workrate: 15 },
      note: "Devastating in transition. Scored a brace against Senegal. The reference point for France's direct, vertical attacking plan."
    },
    {
      id: "haaland", name: "Erling Haaland", team: "Norway", tc: "NO", pos: "ST",
      number: 9, age: 25, height: "1.95m", foot: "Left", club: "Manchester City",
      role: "Target Forward", form: 8.9,
      tournament: { apps: 1, goals: 2, assists: 0, mins: 90 },
      attrs: { Finishing: 20, Dribbling: 14, Passing: 12, Vision: 13, Technique: 15, Composure: 18, Pace: 18, Stamina: 16, Strength: 19, Workrate: 15 },
      note: "Norway's first World Cup in decades and he announced it with a brace. Wins everything in the box and stretches lines in behind."
    },
    {
      id: "bellingham", name: "Jude Bellingham", team: "England", tc: "GB-ENG", pos: "AM",
      number: 10, age: 22, height: "1.86m", foot: "Right", club: "Real Madrid",
      role: "Box-to-Box Midfielder", form: 8.7,
      tournament: { apps: 1, goals: 1, assists: 1, mins: 90 },
      attrs: { Finishing: 16, Dribbling: 17, Passing: 17, Vision: 17, Technique: 17, Composure: 17, Pace: 15, Stamina: 18, Strength: 16, Workrate: 18 },
      note: "Drove England past Croatia in a 4-2 thriller. Arrives late in the box and presses relentlessly from an advanced eight."
    },
    {
      id: "vini", name: "Vinícius Júnior", team: "Brazil", tc: "BR", pos: "LW",
      number: 7, age: 25, height: "1.76m", foot: "Right", club: "Real Madrid",
      role: "Inside Forward", form: 8.2,
      tournament: { apps: 1, goals: 1, assists: 0, mins: 90 },
      attrs: { Finishing: 16, Dribbling: 19, Passing: 15, Vision: 15, Technique: 18, Composure: 15, Pace: 19, Stamina: 16, Strength: 13, Workrate: 14 },
      note: "Bailed Brazil out against Morocco. One-on-one threat down the left who collapses defensive blocks toward him."
    },
    {
      id: "pulisic", name: "Christian Pulisic", team: "United States", tc: "US", pos: "LW",
      number: 10, age: 27, height: "1.77m", foot: "Right", club: "AC Milan",
      role: "Wide Playmaker", form: 8.5,
      tournament: { apps: 1, goals: 1, assists: 2, mins: 90 },
      attrs: { Finishing: 15, Dribbling: 17, Passing: 16, Vision: 16, Technique: 17, Composure: 16, Pace: 17, Stamina: 16, Strength: 13, Workrate: 16 },
      note: "Ran the show in a 4-1 opening win over Paraguay. The hosts' creative hub, cutting inside to combine or feed the overlap."
    }
  ],

  /* ---- FORMATIONS (tactical board) ----
     Coordinates are % of pitch: x left->right, y own goal->opp goal.
     The pitch renderer flips so the team attacks upward. */
  formations: [
    {
      team: "Argentina", tc: "AR", shape: "4-3-3", manager: "Lionel Scaloni",
      style: "Possession with a low block to spring Messi in the half-space.",
      spots: [
        { n: 23, name: "E. Martínez", pos: "GK", x: 50, y: 8 },
        { n: 4, name: "Molina", pos: "RB", x: 82, y: 26 },
        { n: 13, name: "Romero", pos: "CB", x: 62, y: 20 },
        { n: 19, name: "Otamendi", pos: "CB", x: 38, y: 20 },
        { n: 3, name: "Tagliafico", pos: "LB", x: 18, y: 26 },
        { n: 7, name: "De Paul", pos: "CM", x: 66, y: 45 },
        { n: 5, name: "Fernández", pos: "DM", x: 50, y: 40 },
        { n: 20, name: "Mac Allister", pos: "CM", x: 34, y: 45 },
        { n: 10, name: "Messi", pos: "RW", x: 78, y: 68 },
        { n: 9, name: "Álvarez", pos: "ST", x: 50, y: 78 },
        { n: 11, name: "Garnacho", pos: "LW", x: 22, y: 68 }
      ]
    },
    {
      team: "England", tc: "GB-ENG", shape: "4-2-3-1", manager: "Thomas Tuchel",
      style: "Controlled build-up, Bellingham roaming behind a mobile striker.",
      spots: [
        { n: 1, name: "Pickford", pos: "GK", x: 50, y: 8 },
        { n: 2, name: "Walker", pos: "RB", x: 82, y: 26 },
        { n: 5, name: "Stones", pos: "CB", x: 62, y: 20 },
        { n: 6, name: "Guéhi", pos: "CB", x: 38, y: 20 },
        { n: 3, name: "Lewis", pos: "LB", x: 18, y: 26 },
        { n: 4, name: "Rice", pos: "DM", x: 62, y: 40 },
        { n: 8, name: "Wharton", pos: "DM", x: 38, y: 40 },
        { n: 7, name: "Saka", pos: "RW", x: 80, y: 62 },
        { n: 10, name: "Bellingham", pos: "AM", x: 50, y: 60 },
        { n: 11, name: "Gordon", pos: "LW", x: 20, y: 62 },
        { n: 9, name: "Kane", pos: "ST", x: 50, y: 80 }
      ]
    },
    {
      team: "France", tc: "FR", shape: "4-3-3", manager: "Didier Deschamps",
      style: "Sit, absorb, then release Mbappé into space at pace.",
      spots: [
        { n: 1, name: "Maignan", pos: "GK", x: 50, y: 8 },
        { n: 2, name: "Koundé", pos: "RB", x: 82, y: 26 },
        { n: 4, name: "Upamecano", pos: "CB", x: 62, y: 20 },
        { n: 5, name: "Saliba", pos: "CB", x: 38, y: 20 },
        { n: 22, name: "Hernández", pos: "LB", x: 18, y: 26 },
        { n: 8, name: "Tchouaméni", pos: "DM", x: 50, y: 40 },
        { n: 14, name: "Camaóo", pos: "CM", x: 66, y: 46 },
        { n: 6, name: "Zaire-Emery", pos: "CM", x: 34, y: 46 },
        { n: 7, name: "Dembélé", pos: "RW", x: 78, y: 66 },
        { n: 10, name: "Mbappé", pos: "ST", x: 50, y: 80 },
        { n: 11, name: "Barcola", pos: "LW", x: 22, y: 66 }
      ]
    }
  ]
};

if (typeof window !== "undefined") window.WC = WC;
