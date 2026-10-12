(function () {
  var T = window.TRIP;
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  // papel picado banner
  (function banner() {
    var colors = ["#c8553d", "#2a9d8f", "#f2a541", "#1f4e8c", "#d9467a"];
    var svg = "";
    colors.forEach(function (c, i) {
      var x = i * 60;
      svg += '<path d="M' + (x + 4) + ' 0h52v22l-4 4 4 4-4 4-22-6-22 6-4-4 4-4-4-4z" fill="' + c + '"/>' +
        '<circle cx="' + (x + 30) + '" cy="11" r="4" fill="#fbf3e4" opacity=".85"/>';
    });
    var full = '<svg xmlns="http://www.w3.org/2000/svg" width="300" height="34" viewBox="0 0 300 34">' + svg + "</svg>";
    document.getElementById("banner").style.backgroundImage =
      "url(\"data:image/svg+xml," + encodeURIComponent(full) + "\")";
    document.getElementById("banner").style.backgroundSize = "300px 34px";
  })();

  var ROUTES = [
    ["", "Home", home],
    ["dates", "Dates", dates],
    ["flights", "Flights", flights],
    ["stay", "Stay", stay],
    ["guide", "Guide", guide]
  ];

  function pill(text, tone) { return '<span class="pill ' + (tone || "") + '">' + esc(text) + "</span>"; }
  function list(items) { return "<ul class=\"clean\">" + items.map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("") + "</ul>"; }

  function daysUntil() {
    var ms = new Date(T.start + "T00:00:00") - new Date();
    return Math.max(0, Math.ceil(ms / 86400000));
  }

  function home() {
    var n = daysUntil();
    return '<section class="hero"><h1>Mexico City, fall 2027</h1>' +
      '<div class="count">' + n + '</div><div class="sub">days until we land (if we go Oct 21)</div></section>' +
      '<div class="card hot"><h3>Where things stand</h3><ul class="clean">' +
      T.status.map(function (s) { return "<li>" + esc(s.label) + ": " + pill(s.value, s.tone) + "</li>"; }).join("") +
      "</ul></div>" +
      '<div class="card accent"><h3>What we decided</h3>' + list(T.decided) + "</div>" +
      '<div class="card"><h3>Next up</h3>' + list(T.guide.todo.slice(0, 3)) +
      '<p class="note" style="margin-top:.6rem">Last updated ' + esc(T.updated) + ".</p></div>";
  }

  function dates() {
    return "<h1>Dates</h1><p class=\"muted\">F1 week overlaps Día de Muertos in 2027, so that stretch is the most expensive of the fall.</p>" +
      T.dates.map(function (d) {
        return '<div class="card ' + (d.pick ? "accent" : "") + '"><h3>' + esc(d.name) + " " +
          pill(d.tag, d.pick ? "pick" : "") + "</h3>" + list(d.why) +
          '<p class="muted" style="margin-top:.6rem"><b>Estimate:</b> ' + esc(d.cost) + "</p></div>";
      }).join("");
  }

  function flights() {
    var f = T.flights;
    return "<h1>Flights</h1><p>" + esc(f.summary) + "</p>" +
      '<div class="card"><h3>Airlines, DFW to Mexico City</h3><div class="table-wrap"><table><tr><th>Airline</th><th>Nonstops</th><th>Note</th></tr>' +
      f.airlines.map(function (a) { return "<tr><td>" + esc(a[0]) + "</td><td>" + esc(a[1]) + "</td><td>" + esc(a[2]) + "</td></tr>"; }).join("") +
      "</table></div></div>" +
      '<div class="card"><h3>Typical fares, per person round trip</h3><div class="table-wrap"><table><tr><th>When</th><th>Estimate</th></tr>' +
      f.fares.map(function (a) { return "<tr><td>" + esc(a[0]) + "</td><td>" + esc(a[1]) + "</td></tr>"; }).join("") +
      '</table></div><p class="note" style="margin-top:.6rem">Planning estimates, not quotes.</p></div>' +
      '<div class="card accent"><h3>Booking six seats on one flight</h3>' + list(f.tips) + "</div>" +
      '<div class="card"><h3>Booking</h3><p>' + esc(f.booking) + "</p></div>";
  }

  function stay() {
    var h = T.hotels;
    return "<h1>Where we stay</h1><p>" + esc(h.summary) + "</p>" +
      h.list.map(function (x) {
        return '<div class="card ' + (x.pick ? "accent" : "") + '"><h3>' + esc(x.name) + " " + (x.pick ? pill("Top pick", "pick") : "") + "</h3>" +
          '<p class="muted">' + esc(x.area) + " · " + esc(x.rate) + " per night</p><p>" + esc(x.note) + "</p></div>";
      }).join("") +
      '<div class="card"><h3>Booking tips</h3>' + list(h.tips) + "</div>" +
      '<div class="card"><h3>Booking</h3><p>' + esc(h.booking) + "</p></div>";
  }

  function guide() {
    var g = T.guide;
    return "<h1>Guide</h1><h2>Events around our dates</h2>" +
      g.events.map(function (e) {
        return '<div class="card"><h3>' + esc(e[0]) + "</h3><p class=\"muted\">" + esc(e[1]) + "</p><p>" + esc(e[2]) + "</p></div>";
      }).join("") +
      '<h2>Good to know</h2><div class="card">' + list(g.notes) + "</div>" +
      '<h2>To-do</h2><div class="card">' + list(g.todo) + "</div>";
  }

  function render() {
    var hash = location.hash.replace(/^#\/?/, "");
    var route = ROUTES.filter(function (r) { return r[0] === hash; })[0] || ROUTES[0];
    document.getElementById("view").innerHTML = route[2]();
    document.getElementById("tabs").innerHTML = ROUTES.map(function (r) {
      return '<a href="#/' + r[0] + '"' + (r === route ? ' aria-current="page"' : "") + ">" + esc(r[1]) + "</a>";
    }).join("");
    document.title = (route[0] ? route[1] + " · " : "") + "Mexico City 2027";
    window.scrollTo(0, 0);
  }

  window.addEventListener("hashchange", render);
  render();
})();
