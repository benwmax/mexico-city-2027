(function () {
  var T = window.TRIP;

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function list(items) { return '<ul class="clean">' + items.map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("") + "</ul>"; }
  function pill(text, cls) { return '<span class="pill ' + (cls || "") + '">' + esc(text) + "</span>"; }

  function daysUntil() {
    var ms = new Date(T.start + "T00:00:00") - new Date();
    return Math.max(0, Math.ceil(ms / 86400000));
  }

  // Papel picado banner along the top of the hero.
  function papel() {
    var cols = ["#d9467a", "#f2a541", "#2a9d8f", "#c8553d", "#4b6fd1"];
    var out = "";
    for (var i = 0; i < 15; i++) {
      var x = -10 + i * 58;
      var sag = 6 + Math.sin(i / 14 * Math.PI) * 14;
      out += '<g transform="translate(' + x + " " + (sag - 4) + ')">' +
        '<path d="M0 0h44v34l-8-6-6 6-8-6-8 6-6-6-8 6z" fill="' + cols[i % 5] + '" opacity=".92"/>' +
        '<circle cx="22" cy="12" r="4" fill="#fff" opacity=".75"/></g>';
    }
    return '<svg class="papel" viewBox="0 0 800 60" preserveAspectRatio="xMidYMin slice" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M-10 4 Q400 40 810 4" stroke="#ffe2a8" stroke-width="1.5" fill="none" opacity=".7"/>' + out + "</svg>";
  }

  // Illustrated skyline: Popocatépetl, Torre Latinoamericana, Bellas Artes, the Ángel and jacarandas.
  function skyline() {
    return '<svg viewBox="60 120 600 340" preserveAspectRatio="xMidYMax meet" role="img" aria-label="Illustrated Mexico City skyline at sunset" xmlns="http://www.w3.org/2000/svg">' +
      '<circle class="sun" cx="560" cy="250" r="130" fill="#ffd27a" opacity=".3"/>' +
      '<circle cx="560" cy="250" r="64" fill="#ffd98c"/>' +
      // volcano
      '<path d="M-1500 372 L0 372 L110 340 L220 366 L310 312 L362 236 L388 218 L416 236 L474 316 L570 352 L690 330 L800 366 L2300 366 V460 H-1500Z" fill="#6a2f66" opacity=".92"/>' +
      '<path d="M362 236 L388 218 L416 236 L402 244 L388 234 L374 246Z" fill="#f7e4d6" opacity=".9"/>' +
      // far buildings
      '<g fill="#472250">' +
      '<rect x="20" y="330" width="26" height="130"/><rect x="50" y="318" width="22" height="142"/><rect x="330" y="340" width="30" height="120"/>' +
      '<rect x="360" y="326" width="22" height="134"/><rect x="640" y="326" width="28" height="134"/><rect x="672" y="342" width="36" height="118"/>' +
      '<rect x="716" y="320" width="24" height="140"/><rect x="744" y="338" width="40" height="122"/></g>' +
      // Torre Latinoamericana
      '<g fill="#34183f"><rect x="228" y="330" width="52" height="130"/><rect x="238" y="278" width="32" height="54"/>' +
      '<rect x="246" y="246" width="16" height="34"/><rect x="253" y="196" width="2.4" height="52"/><rect x="249" y="212" width="10" height="2"/></g>' +
      // Bellas Artes
      '<g fill="#34183f"><rect x="468" y="368" width="150" height="92"/><path d="M490 368 Q543 296 596 368Z"/>' +
      '<rect x="538" y="288" width="10" height="16"/><path d="M533 288 Q543 274 553 288Z"/>' +
      '<path d="M470 368 Q488 346 506 368Z"/><path d="M580 368 Q598 346 616 368Z"/></g>' +
      '<g fill="#f6b24f" opacity=".85"><rect x="240" y="300" width="4" height="6"/><rect x="256" y="300" width="4" height="6"/>' +
      '<rect x="240" y="350" width="4" height="6"/><rect x="258" y="372" width="4" height="6"/><rect x="496" y="392" width="5" height="8"/>' +
      '<rect x="520" y="392" width="5" height="8"/><rect x="570" y="392" width="5" height="8"/><rect x="594" y="392" width="5" height="8"/></g>' +
      // front layer: the Ángel
      '<g fill="#1f0f29"><rect x="96" y="420" width="70" height="40"/><rect x="108" y="404" width="46" height="16"/>' +
      '<rect x="124" y="262" width="14" height="144"/><rect x="118" y="256" width="26" height="9"/></g>' +
      '<g fill="#f6c25f"><path d="M131 222 L106 204 L116 244 L131 238Z"/><path d="M131 222 L156 204 L146 244 L131 238Z"/>' +
      '<rect x="127" y="214" width="8" height="42" rx="3"/><circle cx="131" cy="208" r="6"/>' +
      '<path d="M135 220 L150 196" stroke="#f6c25f" stroke-width="4" stroke-linecap="round"/><circle cx="152" cy="192" r="6" fill="none" stroke="#f6c25f" stroke-width="2.5"/></g>' +
      // jacaranda trees
      '<g fill="#7b3a86"><circle cx="30" cy="428" r="34"/><circle cx="64" cy="440" r="30"/><circle cx="214" cy="440" r="32"/><circle cx="660" cy="436" r="34"/>' +
      '<circle cx="700" cy="446" r="30"/><circle cx="770" cy="432" r="36"/></g>' +
      '<g fill="#9d58ad" opacity=".8"><circle cx="38" cy="418" r="14"/><circle cx="206" cy="430" r="13"/><circle cx="666" cy="426" r="14"/><circle cx="764" cy="422" r="15"/></g>' +
      '<rect x="-1500" y="446" width="3800" height="14" fill="#1f0f29"/></svg>';
  }

  // little illustrated icons
  var ICON = {
    taco: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M5 34a19 19 0 0 1 38 0z" fill="#f2a541"/><path d="M10 34a14 14 0 0 1 28 0z" fill="#e0643f"/><path d="M12 28c3-5 7-6 9-3 2-4 7-4 9 0 2-2 5-1 6 3z" fill="#2a9d8f"/><rect x="4" y="34" width="40" height="3" rx="1.5" fill="#c8553d"/></svg>',
    pyramid: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 7 41 38H7z" fill="#e0643f"/><path d="M24 7 41 38H24z" fill="#c8553d"/><path d="M14 31h20M18 24h12M21 17h6" stroke="#f6c25f" stroke-width="2.4" stroke-linecap="round"/><rect x="4" y="38" width="40" height="4" rx="2" fill="#6a2f66"/></svg>',
    sun: '<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="10" fill="#f2a541"/><g stroke="#e0643f" stroke-width="3" stroke-linecap="round"><path d="M24 5v6M24 37v6M5 24h6M37 24h6M10.5 10.5l4.2 4.2M33.3 33.3l4.2 4.2M10.5 37.5l4.2-4.2M33.3 14.7l4.2-4.2"/></g></svg>'
  };

  function reveal(html) { return '<div class="reveal">' + html + "</div>"; }

  function home() {
    var n = daysUntil();
    var events = T.guide.events.slice(0, 2).map(function (e) {
      return '<div class="tile"><h3>' + esc(e[0]) + '</h3><p class="muted" style="margin-bottom:.3rem">' + esc(e[1]) + "</p><p>" + esc(e[2]) + "</p></div>";
    }).join("");
    var news = T.news.map(function (x) {
      return "<li><time>" + esc(x.date) + "</time><h3>" + esc(x.title) + "</h3><p>" + esc(x.body) + "</p></li>";
    }).join("");
    var decisions = T.decisions.length
      ? T.decisions.map(function (d) {
          return '<div class="decision"><h3>' + esc(d.q) + "</h3><ul>" +
            d.options.map(function (o) { return "<li>" + esc(o) + "</li>"; }).join("") +
            '</ul><p class="note">' + esc(d.note) + "</p></div>";
        }).join("") + '<p class="note" style="margin-top:.8rem">Reply in the family group chat to weigh in.</p>'
      : '<p class="lead">Nothing waiting on anyone right now.</p>';

    return '<section class="hero">' + papel() +
      '<div class="hero-copy"><p class="eyebrow">Family trip · Fall 2027</p><h1>Mexico City</h1>' +
      '<p class="tag">Six of us. One unforgettable week.</p>' +
      '<div class="hero-meta"><div><b>' + n + '</b><span>days to go</span></div>' +
      '<div class="when"><span>Proposed</span><b>Oct 21 – 26, 2027</b></div></div>' +
      '<button class="btn-cta" type="button" data-scroll="story">See the plan ↓</button></div>' +
      '<div class="hero-art">' + skyline() + "</div></section>" +

      '<div class="story" id="story">' +

      '<section class="section">' + reveal(
        '<p class="kicker">Why Mexico City</p><h2>A city that has it all</h2>' +
        '<p class="lead">One of the great food cities, thousands of years of history, and a color and energy you have to see in person.</p>' +
        '<div class="tile-row three">' +
        '<div class="tile">' + ICON.taco + '<h3>Food worth the flight</h3><p>Street tacos, buzzing markets and world-famous restaurants, all within a short ride.</p></div>' +
        '<div class="tile">' + ICON.pyramid + '<h3>History everywhere</h3><p>Aztec ruins, the pyramids of Teotihuacán, Frida Kahlo and world-class museums.</p></div>' +
        '<div class="tile">' + ICON.sun + '<h3>Right time to go</h3><p>The rainy season is winding down, and the city starts dressing up for Día de Muertos.</p></div></div>') + "</section>" +

      '<section class="section">' + reveal(
        '<p class="kicker">When we go</p><h2>The week before the crowds</h2>' +
        '<div class="feature"><span class="chip">Proposed</span><h3>Oct 21 – 26, 2027</h3>' +
        "<ul><li>Altars, marigolds and parades are building across the city.</li><li>We're home before Grand Prix and Día de Muertos weekend packs the place.</li></ul>" +
        '<a href="#/dates">See the dates →</a></div>') + "</section>" +

      '<section class="section">' + reveal(
        '<p class="kicker">Where we stay</p><h2>One hotel, a room for each couple</h2>' +
        '<div class="feature teal"><span class="chip">Top pick</span><h3>Condesa</h3>' +
        "<p>Leafy streets, parks, cafés and great restaurants, and easy to get anywhere from. Condesa DF is the first choice, with a few other options ready.</p>" +
        '<a href="#/stay">See the hotels →</a></div>') + "</section>" +

      '<section class="section">' + reveal(
        '<p class="kicker">What we\'ll do</p><h2>Look what\'s happening that week</h2>' +
        '<div class="tile-row two">' + events + "</div>" +
        '<p class="note" style="margin-top:.8rem">A day-by-day itinerary is coming soon.</p>' +
        '<p><a href="#/guide">More in the guide →</a></p>') + "</section>" +

      '<section class="section">' + reveal('<p class="kicker">What\'s new</p><h2>Latest updates</h2><ul class="timeline">' + news + "</ul>") + "</section>" +

      '<section class="section">' + reveal('<p class="kicker">Your input</p><h2>Decisions we need</h2>' + decisions) + "</section>" +

      '<section class="section">' + reveal(
        '<p class="kicker">What\'s next</p><h2>Coming up</h2><div class="card">' + list(T.guide.todo.slice(0, 4)) + "</div>") + "</section>" +
      "</div>";
  }

  function dates() {
    return '<div class="page"><h1>Dates</h1><p class="muted">F1 week overlaps Día de Muertos in 2027, so that stretch is the busiest of the fall.</p>' +
      T.dates.map(function (d) {
        return '<div class="card ' + (d.pick ? "accent" : "") + '"><h3>' + esc(d.name) + " " +
          pill(d.tag, d.pick ? "pick" : "") + "</h3>" + list(d.why) + "</div>";
      }).join("") + "</div>";
  }

  function flights() {
    var f = T.flights;
    return '<div class="page"><h1>Getting there</h1><p>' + esc(f.summary) + "</p>" +
      '<div class="card"><h3>Airlines, DFW to Mexico City</h3><div class="table-wrap"><table><tr><th>Airline</th><th>Nonstops</th><th>Note</th></tr>' +
      f.airlines.map(function (a) { return "<tr><td>" + esc(a[0]) + "</td><td>" + esc(a[1]) + "</td><td>" + esc(a[2]) + "</td></tr>"; }).join("") +
      "</table></div></div>" +
      '<div class="card accent"><h3>Booking six seats on one flight</h3>' + list(f.tips) + "</div>" +
      '<div class="card"><h3>Booking</h3><p>' + esc(f.booking) + "</p></div></div>";
  }

  function stay() {
    var h = T.hotels;
    return '<div class="page"><h1>Where we stay</h1><p>' + esc(h.summary) + "</p>" +
      h.list.map(function (x) {
        return '<div class="card ' + (x.pick ? "accent" : "") + '"><h3>' + esc(x.name) + " " + (x.pick ? pill("Top pick", "pick") : "") + "</h3>" +
          '<p class="muted">' + esc(x.area) + "</p><p>" + esc(x.note) + "</p></div>";
      }).join("") +
      '<div class="card"><h3>Booking tips</h3>' + list(h.tips) + "</div>" +
      '<div class="card"><h3>Booking</h3><p>' + esc(h.booking) + "</p></div></div>";
  }

  function guide() {
    var g = T.guide;
    return '<div class="page"><h1>Guide</h1><h2>Events around our dates</h2>' +
      g.events.map(function (e) {
        return '<div class="card"><h3>' + esc(e[0]) + '</h3><p class="muted">' + esc(e[1]) + "</p><p>" + esc(e[2]) + "</p></div>";
      }).join("") +
      '<h2>Good to know</h2><div class="card">' + list(g.notes) + "</div>" +
      '<h2>To-do</h2><div class="card">' + list(g.todo) + "</div></div>";
  }

  var ROUTES = [
    ["", "Home", home],
    ["dates", "Dates", dates],
    ["flights", "Getting there", flights],
    ["stay", "Stay", stay],
    ["guide", "Guide", guide]
  ];

  function setupReveal() {
    var els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      Array.prototype.forEach.call(els, function (el) { el.classList.add("in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    Array.prototype.forEach.call(els, function (el) { io.observe(el); });
  }

  function render() {
    var hash = location.hash.replace(/^#\/?/, "");
    var route = ROUTES.filter(function (r) { return r[0] === hash; })[0] || ROUTES[0];
    document.getElementById("view").innerHTML = route[2]();
    document.getElementById("tabs").innerHTML = ROUTES.map(function (r) {
      return '<a href="#/' + r[0] + '"' + (r === route ? ' aria-current="page"' : "") + ">" + esc(r[1]) + "</a>";
    }).join("");
    document.getElementById("foot").textContent = "Plans are still taking shape. Last updated " + T.updated + ".";
    document.title = (route[0] ? route[1] + " · " : "") + "Mexico City 2027";
    window.scrollTo(0, 0);
    setupReveal();
  }

  document.addEventListener("click", function (e) {
    var b = e.target.closest && e.target.closest("[data-scroll]");
    if (b) {
      var el = document.getElementById(b.getAttribute("data-scroll"));
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });

  window.addEventListener("hashchange", render);
  render();
})();
