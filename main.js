/* Víctor Álvarez Calvo — web personal. Patrón IIFE, sin módulos. Cada init va protegido por safe(). */
(function () {
  "use strict";

  function safe(fn, name) {
    try { fn(); } catch (e) { if (window.console) console.warn("[web] fallo en " + name, e); }
  }

  /* Gradiente que sigue al cursor (y al dedo en móvil). */
  function initGradient() {
    var root = document.documentElement, raf = null, tx = 50, ty = 45;
    function apply() {
      raf = null;
      root.style.setProperty("--mx", tx + "%");
      root.style.setProperty("--my", ty + "%");
    }
    function move(x, y) {
      tx = (x / window.innerWidth) * 100;
      ty = (y / window.innerHeight) * 100;
      if (!raf) raf = requestAnimationFrame(apply);
    }
    document.addEventListener("mousemove", function (e) { move(e.clientX, e.clientY); }, { passive: true });
    document.addEventListener("touchmove", function (e) {
      if (e.touches[0]) move(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });
  }

  /* Filas desplegables (experiencia, formación, portfolio). Acordeón accesible. */
  function initRows() {
    var rows = document.querySelectorAll(".row");
    rows.forEach(function (row, i) {
      var head = row.querySelector(".row-head");
      if (!head) return;
      var open = row.getAttribute("data-open") === "true";
      row.classList.toggle("open", open);
      head.setAttribute("aria-expanded", String(open));
      head.addEventListener("click", function () {
        var isOpen = row.classList.toggle("open");
        head.setAttribute("aria-expanded", String(isOpen));
      });
    });
  }

  /* Aparición al hacer scroll: umbral bajo + red de seguridad a los 6 s. */
  function initReveal() {
    var els = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
    if (!els.length) return;
    function showAll() { els.forEach(function (el) { el.classList.add("in"); }); }
    if (!("IntersectionObserver" in window)) { showAll(); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.05, rootMargin: "0px 0px -4% 0px" });
    els.forEach(function (el) { io.observe(el); });
    setTimeout(showAll, 6000);
  }

  /* Cifras con cuenta ascendente. El valor final ya está escrito en el HTML. */
  function initCount() {
    var els = document.querySelectorAll("[data-count]");
    if (!els.length || !("IntersectionObserver" in window)) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        io.unobserve(en.target);
        var el = en.target, end = parseInt(el.getAttribute("data-count"), 10);
        var suffix = el.getAttribute("data-suffix") || "";
        var start = performance.now(), dur = 1400;
        function tick(t) {
          var p = Math.min((t - start) / dur, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(end * eased) + suffix;
          if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.05 });
    els.forEach(function (el) { io.observe(el); });
  }

  /* Línea de tiempo con paginación (1 / 2). Sin JS se muestran los dos paneles seguidos. */
  function initTimeline() {
    var panels = document.querySelectorAll(".tl-panel");
    if (!panels.length) return;
    var labels = ["SMX · 1 / 2", "ASIX · 2 / 2"], cur = 1;
    var count = document.getElementById("tl-count");
    function show(i) {
      cur = (i + panels.length) % panels.length;
      panels.forEach(function (p, k) { p.classList.toggle("on", k === cur); });
      if (count) count.textContent = labels[cur];
    }
    var prev = document.getElementById("tl-prev"), next = document.getElementById("tl-next");
    if (prev) prev.addEventListener("click", function () { show(cur - 1); });
    if (next) next.addEventListener("click", function () { show(cur + 1); });
    show(1);
  }

  function initYear() {
    var y = document.getElementById("year");
    if (y && !y.textContent) y.textContent = new Date().getFullYear();
  }

  function boot() {
    safe(initGradient, "gradient");
    safe(initRows, "rows");
    safe(initReveal, "reveal");
    safe(initCount, "count");
    safe(initTimeline, "timeline");
    safe(initYear, "year");
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
