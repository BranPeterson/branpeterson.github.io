/* ============================================================
   World Cup Hub — shared rendering helpers
   ============================================================ */

/* country code -> flag emoji (handles England/Scotland subdivisions) */
function flag(code) {
  if (!code) return "\u{1F3F3}";
  if (code === "GB-ENG") return "\u{1F3F4}\u{E0067}\u{E0062}\u{E0065}\u{E006E}\u{E0067}\u{E007F}";
  if (code === "GB-SCT") return "\u{1F3F4}\u{E0067}\u{E0062}\u{E0073}\u{E0063}\u{E0074}\u{E007F}";
  const cc = code.slice(0, 2).toUpperCase();
  return String.fromCodePoint(...[...cc].map(c => 0x1F1E6 + c.charCodeAt(0) - 65));
}

function el(html) { const t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstChild; }

/* ---- top navigation (shared across pages) ---- */
function mountNav(active) {
  const links = [
    ["index.html", "Live"],
    ["schedule.html", "Schedule"],
    ["standings.html", "Standings"],
    ["players.html", "Players"],
    ["tactics.html", "Tactics"],
    ["data-guide.html", "Go Live"]
  ];
  const bar = el(`<header class="topbar"><div class="topbar-inner">
    <a class="brand" href="index.html"><span class="brand-mark">⚽</span>WORLD&nbsp;<small>CUP</small>&nbsp;HUB</a>
    <nav class="nav">${links.map(([h, t]) =>
      `<a href="${h}" class="${h === active ? "active" : ""}">${t}</a>`).join("")}</nav>
  </div></header>`);
  document.body.prepend(bar);
}

function mountFoot() {
  const f = el(`<footer class="foot"><div class="foot-inner">
    <span>World Cup Hub · a Kyonic Designs build · data seeded ${WC.meta.lastUpdated}</span>
    <span>Not affiliated with FIFA. Built for ${WC.meta.name}.</span>
  </div></footer>`);
  document.body.append(f);
}

/* ---- match card ---- */
function matchCard(m) {
  const decided = m.status === "FT";
  const homeWin = decided && m.hs > m.as;
  const awayWin = decided && m.as > m.hs;
  const badge = m.status === "LIVE"
    ? `<span class="badge live">● Live ${m.minute || ""}</span>`
    : m.status === "UP"
      ? `<span class="badge up">${m.time || "Upcoming"}</span>`
      : `<span class="badge ft">Full time</span>`;
  const sH = m.hs == null ? "–" : m.hs;
  const sA = m.as == null ? "–" : m.as;
  const foot = m.status === "UP"
    ? `<div class="match-foot"><span class="venue"><span>${m.venue}</span></span>${m.tv ? `<span class="kick">${m.tv}</span>` : ""}</div>`
    : `<div class="match-foot"><span class="venue"><span>${m.venue}</span></span>${m.hl ? `<a class="hl-link" href="${m.hl}" target="_blank" rel="noopener">Highlights ↗</a>` : (m.status === "LIVE" ? `<span class="kick">In progress</span>` : "")}</div>`;
  return el(`<article class="match">
    <div class="match-top"><span class="match-grp">Group ${m.group} · ${m.date}</span>${badge}</div>
    <div class="row">
      <div class="team-line ${decided ? (homeWin ? "win" : (awayWin ? "dim" : "")) : ""}"><span class="flag">${flag(m.hc)}</span>${m.home}</div>
      <div class="score ${awayWin ? "dim" : ""}">${sH}</div>
    </div>
    <div class="row">
      <div class="team-line ${decided ? (awayWin ? "win" : (homeWin ? "dim" : "")) : ""}"><span class="flag">${flag(m.ac)}</span>${m.away}</div>
      <div class="score ${homeWin ? "dim" : ""}">${sA}</div>
    </div>
    ${foot}
  </article>`);
}

/* ---- standings: sort by pts, then GD, then GF ---- */
function sortGroup(rows) {
  return [...rows].sort((a, b) =>
    b.pts - a.pts || (b.gf - b.ga) - (a.gf - a.ga) || b.gf - a.gf || a.team.localeCompare(b.team));
}

function groupCard(key, rows) {
  const sorted = sortGroup(rows);
  const body = sorted.map((r, i) => {
    const gd = r.gf - r.ga;
    const qual = i < 2;
    return `<tr class="${qual ? "qual" : ""}">
      <td><span class="tn"><span class="pos">${i + 1}</span><span class="flag" style="font-size:16px;width:auto">${flag(r.code)}</span>${r.team}</span></td>
      <td>${r.p}</td><td>${r.w}</td><td>${r.d}</td><td>${r.l}</td>
      <td>${r.gf}:${r.ga}</td><td>${gd > 0 ? "+" + gd : gd}</td>
      <td class="pts">${r.pts}</td></tr>`;
  }).join("");
  return el(`<div class="panel group-card">
    <h3><span class="tag">${key}</span> Group ${key}</h3>
    <table class="standings">
      <thead><tr><th>Team</th><th>P</th><th>W</th><th>D</th><th>L</th><th>G</th><th>GD</th><th>Pts</th></tr></thead>
      <tbody>${body}</tbody>
    </table>
  </div>`);
}

/* ---- player card (collapsed) ---- */
function playerCard(p) {
  const t = p.tournament;
  const topAttrs = Object.entries(p.attrs).sort((a, b) => b[1] - a[1]).slice(0, 6);
  const attrHtml = topAttrs.map(([k, v]) =>
    `<div class="attr"><span class="label">${k}</span><span class="val">${v}</span>
     <span class="bar"><i style="width:${(v / 20) * 100}%"></i></span></div>`).join("");
  return el(`<article class="pcard" tabindex="0">
    <div class="pcard-head">
      <div class="pnum">${p.number}</div>
      <div class="pmeta">
        <h3>${p.name}</h3>
        <div class="sub"><span class="pos-pill">${p.pos}</span><span class="flag" style="font-size:15px;width:auto">${flag(p.tc)}</span>${p.team} · ${p.role}</div>
      </div>
      <div style="margin-left:auto;text-align:right">
        <div class="form-pill" style="color:var(--win);font-size:20px">${p.form.toFixed(1)}</div>
        <div style="font-size:9px;color:var(--mute);text-transform:uppercase;letter-spacing:.06em">Form</div>
      </div>
    </div>
    <div class="pcard-body">
      <div class="statline">
        <div class="stat"><b>${t.apps}</b><span>Apps</span></div>
        <div class="stat"><b>${t.goals}</b><span>Goals</span></div>
        <div class="stat"><b>${t.assists}</b><span>Assists</span></div>
        <div class="stat"><b>${t.mins}</b><span>Mins</span></div>
      </div>
      <div class="attrs">${attrHtml}</div>
      <p style="font-size:12.5px;color:var(--mute);margin-top:12px;line-height:1.55">${p.note}</p>
      <div style="font-size:11px;color:var(--mute-2);margin-top:10px;display:flex;gap:14px;flex-wrap:wrap">
        <span>Age ${p.age}</span><span>${p.height}</span><span>${p.foot} foot</span><span>${p.club}</span>
      </div>
    </div>
  </article>`);
}

/* ---- formation pitch ---- */
function pitchBoard(f) {
  const spots = f.spots.map(s =>
    `<div class="spot ${s.pos === "GK" ? "gk" : ""}" style="left:${s.x}%;top:${100 - s.y}%">
       <div class="dot">${s.n}</div><div class="nm">${s.name}</div>
     </div>`).join("");
  return el(`<div class="panel" style="padding:16px">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;gap:10px;flex-wrap:wrap">
      <div style="display:flex;align-items:center;gap:10px">
        <span class="flag" style="font-size:22px;width:auto">${flag(f.tc)}</span>
        <div><div style="font-family:'Archivo',sans-serif;font-weight:800;font-size:17px">${f.team}</div>
        <div style="font-size:12px;color:var(--mute)">${f.manager}</div></div>
      </div>
      <span class="badge" style="background:var(--green);color:#cfeede;font-size:13px;letter-spacing:.05em">${f.shape}</span>
    </div>
    <div class="pitch">
      <div class="pmark center-circle"></div>
      <div class="center-line"></div>
      <div class="pmark box-top"></div>
      <div class="pmark box-bot"></div>
      ${spots}
    </div>
    <p style="font-size:12.5px;color:var(--mute);margin-top:12px"><b style="color:var(--chalk)">Plan ·</b> ${f.style}</p>
  </div>`);
}
