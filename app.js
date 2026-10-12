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

  // A thin string of outlined pennants in gold.
  function papel() {
    var out = "";
    for (var i = 0; i < 15; i++) {
      var x = -10 + i * 58;
      var sag = 6 + Math.sin(i / 14 * Math.PI) * 14;
      out += '<path transform="translate(' + x + " " + (sag - 2) + ')" d="M0 0h40v26l-7-5-6 5-7-5-7 5-6-5-7 5z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>';
    }
    return '<svg class="papel" viewBox="0 0 800 50" preserveAspectRatio="xMidYMin slice" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M-10 4 Q400 36 810 4" stroke="currentColor" stroke-width="1" fill="none" opacity=".6"/>' + out + "</svg>";
  }

  // Line-art skyline: Popocatépetl, Torre Latinoamericana, Bellas Artes and the Ángel, in ink with a gold sun.
  function skyline() {
    var f = 'fill="var(--bg)" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"';
    var g = 'stroke="var(--gold)" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"';
    return '<svg viewBox="60 120 600 340" preserveAspectRatio="xMidYMax meet" role="img" aria-label="Line drawing of the Mexico City skyline" xmlns="http://www.w3.org/2000/svg">' +
      '<circle cx="560" cy="250" r="64" fill="none" ' + g + '/>' +
      '<circle cx="560" cy="250" r="84" fill="none" ' + g + ' stroke-dasharray="1 7" opacity=".8"/>' +
      '<path d="M-1500 372 H0 L110 340 L220 366 L310 312 L362 236 L388 218 L416 236 L474 316 L570 352 L690 330 L800 366 H2300" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>' +
      '<path d="M362 236 L374 246 L388 234 L402 244 L416 236" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>' +
      '<g opacity=".45"><rect x="20" y="330" width="26" height="130" ' + f + '/><rect x="50" y="318" width="22" height="142" ' + f + '/>' +
      '<rect x="330" y="340" width="30" height="120" ' + f + '/><rect x="360" y="326" width="22" height="134" ' + f + '/>' +
      '<rect x="640" y="326" width="28" height="134" ' + f + '/><rect x="672" y="342" width="36" height="118" ' + f + '/>' +
      '<rect x="716" y="320" width="24" height="140" ' + f + '/><rect x="744" y="338" width="40" height="122" ' + f + "/></g>" +
      // tower
      '<rect x="228" y="330" width="52" height="130" ' + f + '/><rect x="238" y="278" width="32" height="54" ' + f + '/><rect x="246" y="246" width="16" height="34" ' + f + "/>" +
      '<path d="M254 246 V196 M249 212 H259" fill="none" stroke="currentColor" stroke-width="1.6"/>' +
      '<path d="M236 350h10M236 370h10M262 350h10M262 370h10M246 296h6M258 296h6" stroke="currentColor" stroke-width="1.2" opacity=".6"/>' +
      // Bellas Artes
      '<rect x="468" y="368" width="150" height="92" ' + f + '/><path d="M490 368 Q543 296 596 368" ' + f + '/><path d="M538 304 V288 M533 288 Q543 274 553 288" fill="none" stroke="currentColor" stroke-width="1.6"/>' +
      '<path d="M488 392v34M512 392v34M574 392v34M598 392v34" stroke="currentColor" stroke-width="1.2" opacity=".6"/>' +
      // the Ángel
      '<rect x="96" y="420" width="70" height="40" ' + f + '/><rect x="108" y="404" width="46" height="16" ' + f + '/><rect x="124" y="262" width="14" height="144" ' + f + '/><rect x="118" y="256" width="26" height="9" ' + f + "/>" +
      '<path d="M131 222 L106 204 L116 244 L131 238 L146 244 L156 204Z" fill="var(--bg)" ' + g + '/><path d="M131 214 V256" ' + g + '/><circle cx="131" cy="207" r="6" fill="var(--bg)" ' + g + '/>' +
      '<path d="M135 220 L150 196" ' + g + '/><circle cx="152" cy="192" r="5" fill="none" ' + g + "/>" +
      '<path d="M-1500 446 H2300" stroke="currentColor" stroke-width="2"/></svg>';
  }

  // little line icons
  var ICON = {
    taco: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 33a18 18 0 0 1 36 0z"/><path d="M12 27c3-4 6-5 8-3 2-4 6-4 8 0 2-2 5-1 6 3"/><path d="M4 37h40"/></svg>',
    pyramid: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M24 8 41 38H7z"/><path d="M14 31h20M18 24h12M21 17h6"/><path d="M4 41h40"/></svg>',
    sun: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true"><circle cx="24" cy="24" r="9"/><path d="M24 6v6M24 36v6M6 24h6M36 24h6M11.3 11.3l4.2 4.2M32.5 32.5l4.2 4.2M11.3 36.7l4.2-4.2M32.5 15.5l4.2-4.2"/></svg>'
  };

  function reveal(html) { return '<div class="reveal">' + html + "</div>"; }

  function home() {
    var n = daysUntil();
    var events = T.guide.events.map(function (e) {
      return '<div class="tile"><h3>' + esc(e[0]) + '</h3><p class="muted" style="margin-bottom:.3rem">' + esc(e[1]) + "</p><p>" + esc(e[2]) + "</p></div>";
    }).join("");
    return '<section class="hero">' + papel() +
      '<div class="hero-copy"><p class="eyebrow">Family trip · Fall 2027</p><h1>Mexico City</h1>' +
      '<p class="tag">Six of us. One unforgettable week.</p>' +
      '<div class="hero-meta"><div><b>' + n + '</b><span>days to go</span></div>' +
      '<div class="when"><span>Proposed</span><b>Thu Oct 21 –<br>Tue Oct 26</b></div></div>' +
      '<button class="btn-cta" type="button" data-scroll="story">See the plan ↓</button></div>' +
      '<div class="hero-art">' + skyline() + "</div></section>" +

      '<div class="story" id="story">' +

      '<section class="section">' + reveal(
        '<p class="kicker"><i>01</i>Why Mexico City</p><h2>A city that has it all</h2>' +
        '<p class="lead">One of the great food cities, thousands of years of history, and a color and energy you have to see in person.</p>' +
        '<div class="tile-row three">' +
        '<div class="tile">' + ICON.taco + '<h3>Food worth the flight</h3><p>Street tacos, buzzing markets and world-famous restaurants, all within a short ride.</p></div>' +
        '<div class="tile">' + ICON.pyramid + '<h3>History everywhere</h3><p>Aztec ruins, the pyramids of Teotihuacán, Frida Kahlo and world-class museums.</p></div>' +
        '<div class="tile">' + ICON.sun + '<h3>Right time to go</h3><p>The rainy season is winding down, and the city starts dressing up for Día de Muertos.</p></div></div>') + "</section>" +

      '<section class="section">' + reveal(
        '<p class="kicker"><i>02</i>When we go</p><h2>The week before the crowds</h2>' +
        '<div class="feature"><span class="chip">Proposed</span><h3>Thu Oct 21 –<br>Tue Oct 26, 2027</h3>' +
        "<ul>" + T.dates.filter(function (d) { return d.pick; })[0].why.map(function (w) { return "<li>" + esc(w) + "</li>"; }).join("") + "</ul>" +
        "</div>" +
        (function () {
          var b = T.dates.filter(function (d) { return d.tag === "Backup"; })[0];
          return b ? '<div class="decision"><span class="chip">Backup plan</span><h3>' + esc(b.name.replace(", 2027", "")) + "</h3><ul>" +
            b.why.map(function (w) { return "<li>" + esc(w) + "</li>"; }).join("") +
            '</ul><p class="note">Prices will likely decide which week we book.</p></div>' : "";
        })()) + "</section>" +

      '<section class="section">' + reveal(
        '<p class="kicker"><i>03</i>What we\'ll do</p><h2>Look what\'s happening that week</h2>' +
        '<div class="tile-row two">' + events + "</div>" +
        '<p class="note" style="margin-top:.8rem">A rough sketch of the days is on the Itinerary page. The full plan comes once the dates and hotel are set.</p>' +
        '<p><a href="#/itinerary">Itinerary →</a> &nbsp; <a href="#/experiences">Experiences →</a> &nbsp; <a href="#/food">Food guide →</a></p>') + "</section>" +
      '<section class="section band">' + reveal('<p class="kicker"><i>04</i>Good to know</p><h2>Before we go</h2><div class="tile-row two">' + T.guide.notes.map(function (n) { var i = n.indexOf(": "); return '<div class="tile"><h3>' + esc(n.slice(0, i)) + "</h3><p>" + esc(n.slice(i + 2)) + "</p></div>"; }).join("") + "</div>") + "</section>" +

      "</div>";
  }

  // Hidden: dates now live on the home page. Add ["dates", "Proposed Dates", dates] back to ROUTES to show it.
  function dates() {
    return '<div class="page"><h1>Proposed Dates</h1><p class="muted">F1 week overlaps Día de Muertos in 2027, so that stretch is the busiest of the fall.</p>' +
      T.dates.map(function (d) {
        return '<div class="card ' + (d.pick ? "accent" : "") + '"><h3>' + esc(d.name) + " " +
          pill(d.tag, d.pick ? "pick" : "") + "</h3>" + list(d.why) + "</div>";
      }).join("") + "</div>";
  }

  function flights() {
    var f = T.flights;
    return '<div class="page"><h1>Flights</h1><p>' + esc(f.summary) + "</p>" +
      '<div class="card"><h3>Airlines, DFW to Mexico City</h3><div class="table-wrap"><table><tr><th>Airline</th><th>Nonstops</th><th>Note</th></tr>' +
      f.airlines.map(function (a) { return "<tr><td>" + esc(a[0]) + "</td><td>" + esc(a[1]) + "</td><td>" + esc(a[2]) + "</td></tr>"; }).join("") +
      "</table></div></div></div>";
  }

  // Hidden until lodging is decided: add ["stay", "Stay", stay] back to ROUTES to show it.
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

  function experiences() {
    var x = T.experiences;
    return '<div class="page"><h1>Experiences</h1><p>' + esc(x.summary) + '</p><div class="cards">' +
      x.list.map(function (e) {
        var shown = e.tips.slice(0, 3), rest = e.tips.slice(3);
        return '<div class="card"><p class="chip">' + esc(e.kind) + "</p><h3>" + esc(e.name) + "</h3>" +
          '<dl class="facts"><div><dt>When</dt><dd>' + esc(e.when) + '</dd></div><div class="book"><dt>Booking</dt><dd>' + esc(e.book) + "</dd></div></dl>" +
          "<p>" + esc(e.how) + "</p>" + list(shown) +
          (rest.length ? '<details class="more"><summary>More tips</summary>' + list(rest) + "</details>" : "") + "</div>";
      }).join("") + "</div></div>";
  }

  function itinerary() {
    var x = T.itinerary;
    return '<div class="page"><h1>Itinerary</h1><p>' + esc(x.summary) + "</p>" +
      "<h2>" + esc(x.title) + '</h2><p class="muted">' + esc(x.note) + "</p>" +
      '<div class="flat"><ul class="timeline" style="margin:0">' +
      x.days.map(function (d) { return "<li><time>" + esc(d[0]) + "</time><p>" + esc(d[1]) + "</p></li>"; }).join("") +
      "</ul></div></div>";
  }

  function links(r) {
    return '<p class="links">' + (r.links || []).concat([["Map", "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(r.name + " " + r.area + " Mexico City")]]).map(function (l) {
      return '<a href="' + esc(l[1]) + '" target="_blank" rel="noopener">' + esc(l[0]) + " ↗</a>";
    }).join("") + "</p>";
  }

  function food() {
    var f = T.food;
    var walk = function (r) { return /^Walk in/.test(r.book); };
    var plan = f.eat.filter(function (r) { return !walk(r); }), easy = f.eat.filter(walk);
    function chip(id, label) { return '<button type="button" data-scroll="' + id + '">' + label + "</button>"; }
    return '<div class="page"><h1>Food</h1><p>' + esc(f.summary) + "</p>" +
      '<nav class="chips" aria-label="On this page">' + chip("eat", "What to eat") + chip("plan", "Plan ahead") + chip("walk", "Walk in") + chip("markets", "Markets") + chip("tips", "Eating well") + "</nav>" +
      '<h2 id="eat">What to eat</h2>' +
      '<div class="flat"><ul class="clean">' + f.dishes.map(function (d) {
        return "<li><b>" + esc(d[0]) + '</b><br><span class="muted">' + esc(d[1]) + "</span></li>";
      }).join("") + "</ul></div>" +
      '<h2 id="plan">Plan ahead</h2><p class="muted">Book these early. Dates for each are on the card.</p><div class="cards">' +
      plan.map(function (r) {
        return '<div class="card ' + (r.special ? "accent" : "") + '"><h3>' + esc(r.name) + "</h3>" +
          '<p class="muted">' + esc(r.area) + " · " + esc(r.style) + "</p><p>" + esc(r.note) + "</p>" +
          (r.more ? '<p class="muted">' + esc(r.more) + "</p>" : "") +
          '<p class="bookline"><b>Booking:</b> ' + esc(r.book) + "</p>" + links(r) + "</div>";
      }).join("") + "</div>" +
      '<h2 id="walk">Walk in</h2><p class="muted">No reservation needed.</p><div class="flat"><ul class="clean">' +
      easy.map(function (r) {
        return "<li><b>" + esc(r.name) + '</b> <span class="muted">' + esc(r.area) + " · " + esc(r.style) + "</span><br>" + esc(r.note) + links(r) + "</li>";
      }).join("") + "</ul></div>" +
      '<h2 id="markets">Markets</h2>' +
      '<div class="flat"><ul class="clean">' + f.markets.map(function (m) {
        return "<li><b>" + esc(m[0]) + '</b><br><span class="muted">' + esc(m[1]) + "</span></li>";
      }).join("") + "</ul></div>" +
      "<h2>Street stalls</h2><div class=\"flat\">" + list(f.stalls) + "</div>" +
      '<h2 id="tips">Eating well</h2><div class="flat">' + list(f.tips) + "</div>" +
      "<h2>When to book</h2><div class=\"card accent\">" + list(f.book) + "</div></div>";
  }

  function around() {
    var x = T.around, p = x.airport;
    return '<div class="page"><h1>Getting around</h1><p>' + esc(x.summary) + "</p>" +
      '<div class="card accent"><h3>' + esc(p.title) + "</h3>" + list(p.steps) + "</div>" +
      "<h2>In the city</h2>" +
      '<div class="flat"><ul class="clean">' + x.modes.map(function (m) {
        return "<li><b>" + esc(m[0]) + '</b><br><span class="muted">' + esc(m[1]) + "</span></li>";
      }).join("") + "</ul></div>" +
      "<h2>Scams and risks to know</h2>" +
      '<div class="flat"><ul class="clean">' + x.scams.map(function (m) {
        return "<li><b>" + esc(m[0]) + '</b><br><span class="muted">' + esc(m[1]) + "</span></li>";
      }).join("") + "</ul></div>" +
      "<h2>Staying safe</h2>" +
      '<div class="flat">' + list(x.tips) + "</div></div>";
  }

  var ROUTES = [
    ["", "Home", home],
    ["flights", "Flights", flights],
    ["itinerary", "Itinerary", itinerary],
    ["experiences", "Experiences", experiences],
    ["food", "Food", food],
    ["around", "Getting around", around]
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

  // Slide-over menu for phones (the tab row is hidden below 640px).
  function setMenu(open, silent) {
    var d = document.getElementById("drawer"), s = document.getElementById("scrim"), b = document.getElementById("menu-btn");
    if (!d) return;
    var was = d.classList.contains("open");
    d.classList.toggle("open", open);
    if (open) d.removeAttribute("inert"); else d.setAttribute("inert", "");
    s.hidden = !open;
    document.body.classList.toggle("menu-open", open);
    b.setAttribute("aria-expanded", open ? "true" : "false");
    if (silent) return;
    if (open) document.getElementById("menu-close").focus();
    else if (was) b.focus();
  }
  document.getElementById("menu-btn").addEventListener("click", function () { setMenu(true); });
  document.getElementById("menu-close").addEventListener("click", function () { setMenu(false); });
  document.getElementById("scrim").addEventListener("click", function () { setMenu(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });
  window.matchMedia("(min-width: 640px)").addEventListener("change", function (m) { if (m.matches) setMenu(false, true); });

  function render() {
    var hash = location.hash.replace(/^#\/?/, "");
    var route = ROUTES.filter(function (r) { return r[0] === hash; })[0] || ROUTES[0];
    document.getElementById("view").innerHTML = route[2]();
    var navHtml = ROUTES.map(function (r) {
      return '<a href="#/' + r[0] + '"' + (r === route ? ' aria-current="page"' : "") + ">" + esc(r[1]) + "</a>";
    }).join("");
    document.getElementById("tabs").innerHTML = navHtml;
    document.getElementById("drawer-nav").innerHTML = navHtml;
    setMenu(false, true);
    document.getElementById("foot").textContent = "Plans are still taking shape. Last updated " + T.updated + ".";
    document.title = (route[0] ? route[1] + " · " : "") + "Mexico City 2027";
    window.scrollTo(0, 0);
    setupReveal();
    var cur = document.querySelector("#tabs [aria-current]");
    if (cur && cur.scrollIntoView) cur.scrollIntoView({ block: "nearest", inline: "center" });
    tabFade();
  }

  // Fade the tab bar edges only when tabs are scrolled out of view.
  function tabFade() {
    var t = document.getElementById("tabs");
    if (!t) return;
    t.classList.toggle("fade-r", t.scrollLeft + t.clientWidth < t.scrollWidth - 4);
    t.classList.toggle("fade-l", t.scrollLeft > 4);
  }
  document.getElementById("tabs").addEventListener("scroll", tabFade, { passive: true });
  window.addEventListener("resize", tabFade);

  document.addEventListener("click", function (e) {
    var b = e.target.closest && e.target.closest("[data-scroll]");
    if (b) {
      var el = document.getElementById(b.getAttribute("data-scroll"));
      if (el) {
        var bar = document.querySelector(".chrome");
        var top = el.getBoundingClientRect().top + window.pageYOffset - (bar ? bar.offsetHeight : 0);
        window.scrollTo({ top: top, behavior: "smooth" });
      }
    }
  });

  // "Add to Home Screen" banner: steps on iPhone, a one-tap button where the browser allows it.
  (function () {
    var UA = navigator.userAgent || "";
    var isIOS = /iphone|ipad|ipod/i.test(UA) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    var isAndroid = /android/i.test(UA);
    var standalone = window.navigator.standalone === true || (window.matchMedia && window.matchMedia("(display-mode: standalone)").matches);
    if (standalone || !(isIOS || isAndroid)) return;
    var deferred = null, shown = false;
    var link = document.getElementById("install-link");
    function dismissed() { try { return localStorage.getItem("installDismissed") === "1"; } catch (e) { return false; } }
    function remember() { try { localStorage.setItem("installDismissed", "1"); } catch (e) {} }
    var SHARE = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-label="Share" role="img" style="vertical-align:-3px"><path d="M12 15V4M8 8l4-4 4 4M6 11H5a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-1"/></svg>';
    function close() {
      var el = document.getElementById("install");
      if (el) el.remove();
      shown = false;
    }
    function open() {
      if (shown) return;
      shown = true;
      var body;
      if (deferred) body = "<p>Install this site as an app so it opens full screen from your home screen.</p>";
      else if (isIOS) body = "<ol><li>Tap the Share button " + SHARE + " in Safari's toolbar.</li><li>Scroll down and tap <b>Add to Home Screen</b>.</li><li>Tap <b>Add</b>.</li></ol>";
      else body = "<ol><li>Tap the <b>⋮</b> menu in Chrome.</li><li>Tap <b>Add to Home screen</b> or <b>Install app</b>.</li></ol>";
      var el = document.createElement("div");
      el.id = "install"; el.className = "install"; el.setAttribute("role", "dialog"); el.setAttribute("aria-label", "Add to Home Screen");
      el.innerHTML = '<img src="/apple-touch-icon.png" alt="" width="48" height="48"><div class="install-body"><h3>Keep the trip handy</h3>' + body +
        '<div class="install-actions">' + (deferred ? '<button type="button" class="install-go">Install</button>' : "") + '<button type="button" class="install-no">' + (deferred ? "Not now" : "Got it") + "</button></div></div>";
      document.body.appendChild(el);
      el.querySelector(".install-no").addEventListener("click", function () { remember(); close(); });
      var go = el.querySelector(".install-go");
      if (go) go.addEventListener("click", function () {
        deferred.prompt();
        deferred.userChoice.then(function () { deferred = null; remember(); close(); });
      });
    }
    window.addEventListener("beforeinstallprompt", function (e) { e.preventDefault(); deferred = e; });
    window.addEventListener("appinstalled", function () { remember(); close(); if (link) link.hidden = true; });
    if (link) { link.hidden = false; link.querySelector("button").addEventListener("click", open); }
    if (!dismissed()) setTimeout(open, 1800);
  })();

  window.addEventListener("hashchange", render);
  render();
})();
