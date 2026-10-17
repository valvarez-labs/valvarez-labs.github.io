/* Víctor Álvarez Calvo — web personal. Patrón IIFE, sin módulos. Cada init va protegido por safe(). */
(function () {
  "use strict";

  /* ---------- Traducciones ---------- */
  var L = "https://github.com/valvarez-labs/VictorAlvarez-IT-Portfolio";
  var I18N = {
    es: {
      "meta.title": "Víctor Álvarez Calvo · Técnico informático",
      "meta.desc": "Técnico informático (SMX) y estudiante de ASIX. Soporte, redes y ciberseguridad.",
      "nav.profile": "Perfil", "nav.path": "Trayectoria", "nav.portfolio": "Portfolio", "nav.contact": "Contacto",
      "hero.role": "Técnico informático", "hero.year": "ASIX · 2º curso",
      "hero.sub": "Arreglo equipos, configuro redes y estudio cómo se rompen los sistemas para aprender a protegerlos.",
      "hero.cta1": "Ver portfolio", "hero.cta2": "Contactar", "hero.scroll": "Scroll ↓",
      "sec.profile": "Perfil",
      "profile.1": "Técnico informático con formación en <mark>sistemas microinformáticos y redes</mark>, ahora estudiando administración de redes y <mark>ciberseguridad</mark>.",
      "profile.2": "Trabajo como auxiliar de TI en BandIT Solutions: soporte técnico, hardware y software, redes y conectividad, y gestión de usuarios. Antes diseñé páginas en WordPress y creé cursos online en Moodle. Constante, con ganas de aprender y de crecer en el sector.",
      "sec.exp": "Experiencia", "exp.hint": "Pulsa una fila", "date.today": "hoy",
      "job.part": "Técnico informático a media jornada", "job.intern": "Técnico informático en prácticas", "tag.current": "Actual",
      "l.support": "Soporte técnico", "l.hwsw": "Gestión de hardware y software", "l.net": "Gestión de redes y conectividad", "l.users": "Gestión de usuarios",
      "l.wp": "Diseño de páginas web en WordPress", "l.content": "Gestión de contenidos de WordPress",
      "l.setup": "Configuración y preparación de equipos informáticos", "l.moodle": "Gestión y creación de cursos (vía Moodle)",
      "sec.edu": "Formación", "tag.ongoing": "En curso", "tag.done": "Finalizado", "tag.complete": "Completo", "tag.year2": "2º curso",
      "edu.asix": "Grado Superior en Administración de Sistemas Informáticos en Red. Cursando segundo año.",
      "edu.smx": "Grado Medio en Sistemas Microinformáticos y Redes.", "edu.eso": "Educación Secundaria Obligatoria.",
      "sec.timeline": "Línea de tiempo", "tl.prev": "Anterior", "tl.next": "Siguiente",
      "tl.p1.date": "Septiembre 2023 – Junio 2025", "tl.p1.title": "SMX: de cero a técnico",
      "tl.p2.date": "Septiembre 2025 – hoy", "tl.p2.title": "ASIX: especialización y trabajo real",
      "lane.edu": "Formación", "lane.exp": "Experiencia", "lane.done": "Finalizado",
      "bar.smx1": "1º SMX · Sep–Jun", "bar.smx2": "2º SMX · Sep–May", "bar.study": "Study FP · prácticas", "bar.title": "Título SMX",
      "bar.asix1": "1º ASIX · Sep–Jun", "bar.asix2": "2º ASIX · en curso", "bar.bandit1": "BandIT · prácticas", "bar.bandit2": "BandIT · parcial",
      "bar.portfolio": "Portfolio · activo", "bar.web": "Web personal",
      "stat.1": "ciclos formativos de informática", "stat.2": "puestos en empresa, entre prácticas y empleo",
      "stat.3": "archivos de prácticas documentados", "stat.4": "idiomas: castellano, catalán e inglés",
      "sec.areas": "Áreas",
      "a.1.t": "Soporte", "a.1.p": "Hardware, software y usuarios. Dejar los equipos funcionando y que nadie se quede parado.",
      "a.2.t": "Redes", "a.2.p": "Conectividad y configuración de redes, del armario rack al router.",
      "a.3.t": "Ciberseguridad", "a.3.p": "Hacking ético, WebGoat, cortafuegos y alta disponibilidad con OPNsense.",
      "pf.asix.small": "Sistemas operativos, redes, bases de datos, seguridad",
      "pf.asix.body": "Actividades de primero ya publicadas; las de segundo se van añadiendo. <a href=\"" + L + "/tree/main/ASIX\">Ver ASIX →</a>",
      "pf.smx.small": "Equipos, sistemas, redes, servicios y web",
      "pf.smx.body": "Primer y segundo curso, más el proyecto final. <a href=\"" + L + "/tree/main/SMX\">Ver SMX →</a>",
      "sec.contact": "Contacto", "contact.p": "Escríbeme y te respondo.", "footer.role": "Técnico informático · ASIX",
      "theme.toLight": "Cambiar a tema claro", "theme.toDark": "Cambiar a tema oscuro", "lang.label": "Idioma",
      "months": ["ENE","FEB","MAR","ABR","MAY","JUN","JUL","AGO","SEP","OCT","NOV","DIC"]
    },
    ca: {
      "meta.title": "Víctor Álvarez Calvo · Tècnic informàtic",
      "meta.desc": "Tècnic informàtic (SMX) i estudiant d'ASIX. Suport, xarxes i ciberseguretat.",
      "nav.profile": "Perfil", "nav.path": "Trajectòria", "nav.portfolio": "Portfoli", "nav.contact": "Contacte",
      "hero.role": "Tècnic informàtic", "hero.year": "ASIX · 2n curs",
      "hero.sub": "Arreglo equips, configuro xarxes i estudio com es trenquen els sistemes per aprendre a protegir-los.",
      "hero.cta1": "Veure el portfoli", "hero.cta2": "Contactar", "hero.scroll": "Scroll ↓",
      "sec.profile": "Perfil",
      "profile.1": "Tècnic informàtic amb formació en <mark>sistemes microinformàtics i xarxes</mark>, ara estudiant administració de xarxes i <mark>ciberseguretat</mark>.",
      "profile.2": "Treballo com a auxiliar de TI a BandIT Solutions: suport tècnic, maquinari i programari, xarxes i connectivitat, i gestió d'usuaris. Abans vaig dissenyar pàgines amb WordPress i vaig crear cursos en línia a Moodle. Constant, amb ganes d'aprendre i de créixer al sector.",
      "sec.exp": "Experiència", "exp.hint": "Prem una fila", "date.today": "avui",
      "job.part": "Tècnic informàtic a mitja jornada", "job.intern": "Tècnic informàtic en pràctiques", "tag.current": "Actual",
      "l.support": "Suport tècnic", "l.hwsw": "Gestió de maquinari i programari", "l.net": "Gestió de xarxes i connectivitat", "l.users": "Gestió d'usuaris",
      "l.wp": "Disseny de pàgines web amb WordPress", "l.content": "Gestió de continguts de WordPress",
      "l.setup": "Configuració i preparació d'equips informàtics", "l.moodle": "Gestió i creació de cursos (via Moodle)",
      "sec.edu": "Formació", "tag.ongoing": "En curs", "tag.done": "Finalitzat", "tag.complete": "Complet", "tag.year2": "2n curs",
      "edu.asix": "Cicle Formatiu de Grau Superior en Administració de Sistemes Informàtics en Xarxa. Cursant segon any.",
      "edu.smx": "Cicle Formatiu de Grau Mitjà en Sistemes Microinformàtics i Xarxes.", "edu.eso": "Educació Secundària Obligatòria.",
      "sec.timeline": "Línia de temps", "tl.prev": "Anterior", "tl.next": "Següent",
      "tl.p1.date": "Setembre 2023 – Juny 2025", "tl.p1.title": "SMX: de zero a tècnic",
      "tl.p2.date": "Setembre 2025 – avui", "tl.p2.title": "ASIX: especialització i feina real",
      "lane.edu": "Formació", "lane.exp": "Experiència", "lane.done": "Finalitzat",
      "bar.smx1": "1r SMX · Set–Juny", "bar.smx2": "2n SMX · Set–Maig", "bar.study": "Study FP · pràctiques", "bar.title": "Títol SMX",
      "bar.asix1": "1r ASIX · Set–Juny", "bar.asix2": "2n ASIX · en curs", "bar.bandit1": "BandIT · pràctiques", "bar.bandit2": "BandIT · parcial",
      "bar.portfolio": "Portfoli · actiu", "bar.web": "Web personal",
      "stat.1": "cicles formatius d'informàtica", "stat.2": "llocs en empresa, entre pràctiques i feina",
      "stat.3": "fitxers de pràctiques documentats", "stat.4": "idiomes: castellà, català i anglès",
      "sec.areas": "Àrees",
      "a.1.t": "Suport", "a.1.p": "Maquinari, programari i usuaris. Deixar els equips funcionant i que ningú es quedi aturat.",
      "a.2.t": "Xarxes", "a.2.p": "Connectivitat i configuració de xarxes, de l'armari rack al router.",
      "a.3.t": "Ciberseguretat", "a.3.p": "Hacking ètic, WebGoat, tallafocs i alta disponibilitat amb OPNsense.",
      "pf.asix.small": "Sistemes operatius, xarxes, bases de dades, seguretat",
      "pf.asix.body": "Activitats de primer ja publicades; les de segon s'hi van afegint. <a href=\"" + L + "/tree/main/ASIX\">Veure ASIX →</a>",
      "pf.smx.small": "Equips, sistemes, xarxes, serveis i web",
      "pf.smx.body": "Primer i segon curs, més el projecte final. <a href=\"" + L + "/tree/main/SMX\">Veure SMX →</a>",
      "sec.contact": "Contacte", "contact.p": "Escriu-me i et responc.", "footer.role": "Tècnic informàtic · ASIX",
      "theme.toLight": "Canviar a tema clar", "theme.toDark": "Canviar a tema fosc", "lang.label": "Idioma",
      "months": ["GEN","FEB","MAR","ABR","MAIG","JUNY","JUL","AGO","SET","OCT","NOV","DES"]
    },
    en: {
      "meta.title": "Víctor Álvarez Calvo · IT Technician",
      "meta.desc": "IT technician (SMX) and ASIX student. Support, networks and cybersecurity.",
      "nav.profile": "Profile", "nav.path": "Journey", "nav.portfolio": "Portfolio", "nav.contact": "Contact",
      "hero.role": "IT technician", "hero.year": "ASIX · 2nd year",
      "hero.sub": "I fix computers, set up networks and study how systems break so I can learn to protect them.",
      "hero.cta1": "View portfolio", "hero.cta2": "Get in touch", "hero.scroll": "Scroll ↓",
      "sec.profile": "Profile",
      "profile.1": "IT technician trained in <mark>microcomputer systems and networks</mark>, now studying network administration and <mark>cybersecurity</mark>.",
      "profile.2": "I work as an IT assistant at BandIT Solutions: technical support, hardware and software, networks and connectivity, and user management. Before that I built WordPress sites and created online courses in Moodle. Persistent, eager to learn and to grow in the industry.",
      "sec.exp": "Experience", "exp.hint": "Click a row", "date.today": "present",
      "job.part": "Part-time IT technician", "job.intern": "IT technician (internship)", "tag.current": "Current",
      "l.support": "Technical support", "l.hwsw": "Hardware and software management", "l.net": "Network and connectivity management", "l.users": "User management",
      "l.wp": "WordPress website design", "l.content": "WordPress content management",
      "l.setup": "Computer setup and preparation", "l.moodle": "Course creation and management (via Moodle)",
      "sec.edu": "Education", "tag.ongoing": "Ongoing", "tag.done": "Completed", "tag.complete": "Complete", "tag.year2": "2nd year",
      "edu.asix": "Higher Vocational Diploma in Network Systems Administration. Currently in the second year.",
      "edu.smx": "Intermediate Vocational Diploma in Microcomputer Systems and Networks.", "edu.eso": "Compulsory Secondary Education.",
      "sec.timeline": "Timeline", "tl.prev": "Previous", "tl.next": "Next",
      "tl.p1.date": "September 2023 – June 2025", "tl.p1.title": "SMX: from zero to technician",
      "tl.p2.date": "September 2025 – present", "tl.p2.title": "ASIX: specialization and real work",
      "lane.edu": "Education", "lane.exp": "Experience", "lane.done": "Completed",
      "bar.smx1": "SMX Y1 · Sep–Jun", "bar.smx2": "SMX Y2 · Sep–May", "bar.study": "Study FP · internship", "bar.title": "SMX diploma",
      "bar.asix1": "ASIX Y1 · Sep–Jun", "bar.asix2": "ASIX Y2 · ongoing", "bar.bandit1": "BandIT · internship", "bar.bandit2": "BandIT · part-time",
      "bar.portfolio": "Portfolio · active", "bar.web": "Personal site",
      "stat.1": "IT vocational programmes", "stat.2": "company positions, internships and employment",
      "stat.3": "documented practice files", "stat.4": "languages: Spanish, Catalan and English",
      "sec.areas": "Areas",
      "a.1.t": "Support", "a.1.p": "Hardware, software and users. Keeping machines running so nobody is left stuck.",
      "a.2.t": "Networks", "a.2.p": "Connectivity and network configuration, from the rack cabinet to the router.",
      "a.3.t": "Cybersecurity", "a.3.p": "Ethical hacking, WebGoat, firewalls and high availability with OPNsense.",
      "pf.asix.small": "Operating systems, networks, databases, security",
      "pf.asix.body": "First-year work already published; second-year work is being added. <a href=\"" + L + "/tree/main/ASIX\">View ASIX →</a>",
      "pf.smx.small": "Hardware, systems, networks, services and web",
      "pf.smx.body": "First and second year, plus the final project. <a href=\"" + L + "/tree/main/SMX\">View SMX →</a>",
      "sec.contact": "Contact", "contact.p": "Write to me and I'll reply.", "footer.role": "IT technician · ASIX",
      "theme.toLight": "Switch to light theme", "theme.toDark": "Switch to dark theme", "lang.label": "Language",
      "months": ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"]
    }
  };
  var LANG = "es";
  function T(k) { var d = I18N[LANG] || I18N.es; return d[k] != null ? d[k] : I18N.es[k]; }

  /* Selector de idioma: aplica las traducciones sin recargar y recuerda la elección. */
  function applyLang(lang) {
    if (!I18N[lang]) lang = "es";
    LANG = lang;
    document.documentElement.setAttribute("lang", lang);
    document.querySelectorAll("[data-i18n]").forEach(function (el) { var v = T(el.getAttribute("data-i18n")); if (v != null) el.textContent = v; });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) { var v = T(el.getAttribute("data-i18n-html")); if (v != null) el.innerHTML = v; });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) { var v = T(el.getAttribute("data-i18n-aria")); if (v != null) el.setAttribute("aria-label", v); });
    document.querySelectorAll(".tl-months").forEach(function (box) {
      var start = parseInt(box.getAttribute("data-start") || "0", 10), months = T("months");
      Array.prototype.forEach.call(box.children, function (s, i) { s.textContent = months[(start + i) % 12]; });
    });
    document.title = T("meta.title");
    var md = document.querySelector('meta[name="description"]'); if (md) md.setAttribute("content", T("meta.desc"));
    var sel = document.getElementById("lang");
    if (sel) { sel.value = lang; sel.setAttribute("aria-label", T("lang.label")); var sr = document.querySelector(".lang-wrap .sr"); if (sr) sr.textContent = T("lang.label"); }
    var th = document.getElementById("theme");
    if (th) th.setAttribute("aria-label", document.documentElement.getAttribute("data-theme") === "light" ? T("theme.toDark") : T("theme.toLight"));
  }
  function initLang() {
    var saved = null;
    try { saved = localStorage.getItem("lang"); } catch (e) {}
    var sel = document.getElementById("lang");
    if (sel) sel.addEventListener("change", function () {
      applyLang(sel.value);
      try { localStorage.setItem("lang", sel.value); } catch (e) {}
    });
    if (saved && I18N[saved] && saved !== "es") applyLang(saved);
    else if (sel) sel.value = "es";
  }
  function safe(fn, name) {
    try { fn(); } catch (e) { if (window.console) console.warn("[web] fallo en " + name, e); }
  }

  /* Gradiente: tres capas que se desplazan solo con transform (barato para la GPU).
     Se anima únicamente mientras el hero es visible y la pestaña está activa. */
  function initGradient() {
    var hero = document.querySelector(".hero");
    var blobs = document.querySelectorAll(".hero-gradient .blob");
    if (!hero || blobs.length < 3) return;
    var W = window.innerWidth, H = window.innerHeight;
    var target = { x: W * 0.5, y: H * 0.45 };
    var pos = [{ x: W * 0.5, y: H * 0.45 }, { x: W * 0.62, y: H * 0.33 }, { x: W * 0.36, y: H * 0.6 }];
    var offs = [[0, 0], [0.12, -0.12], [-0.14, 0.14]], lag = [0.28, 0.2, 0.15];
    var running = false, visible = true, t0 = performance.now();
    function frame(now) {
      if (!running) return;
      var drift = Math.sin((now - t0) / 4000);
      for (var i = 0; i < 3; i++) {
        var tx = target.x + offs[i][0] * W + drift * 24 * (i + 1);
        var ty = target.y + offs[i][1] * H + Math.cos((now - t0) / 5000) * 18 * (i + 1);
        pos[i].x += (tx - pos[i].x) * lag[i];
        pos[i].y += (ty - pos[i].y) * lag[i];
        blobs[i].style.transform = "translate3d(" + pos[i].x.toFixed(1) + "px," + pos[i].y.toFixed(1) + "px,0)";
      }
      requestAnimationFrame(frame);
    }
    function sync() {
      var should = visible && !document.hidden;
      if (should && !running) { running = true; requestAnimationFrame(frame); }
      else if (!should) running = false;
    }
    function move(x, y) { target.x = x; target.y = y; }
    document.addEventListener("mousemove", function (e) { move(e.clientX, e.clientY); }, { passive: true });
    document.addEventListener("touchmove", function (e) { if (e.touches[0]) move(e.touches[0].clientX, e.touches[0].clientY); }, { passive: true });
    window.addEventListener("resize", function () { W = window.innerWidth; H = window.innerHeight; }, { passive: true });
    document.addEventListener("visibilitychange", sync);
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (en) { visible = en[0].isIntersecting; sync(); }, { threshold: 0 }).observe(hero);
    }
    sync();
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

  /* Selector de tema claro / oscuro. Se recuerda en localStorage (si está disponible). */
  function initTheme() {
    var root = document.documentElement, btn = document.getElementById("theme");
    var meta = document.querySelector('meta[name="theme-color"]');
    if (!btn) return;
    function paint() {
      var light = root.getAttribute("data-theme") === "light";
      btn.textContent = light ? "☾" : "☀";
      btn.setAttribute("aria-label", light ? T("theme.toDark") : T("theme.toLight"));
      if (meta) meta.setAttribute("content", light ? "#f4f4f0" : "#0a0a0a");
    }
    btn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      paint();
    });
    paint();
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
    safe(initTheme, "theme");
    safe(initLang, "lang");
    safe(initYear, "year");
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
