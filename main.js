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
      "about.title": "De técnico en SMX a especializarme en <em>ciberseguridad</em>", "card.title": "Ficha rápida", "card.loc": "Ubicación", "card.role": "Rol actual", "card.role.v": "Técnico informático (media jornada)", "card.company": "Empresa", "card.base": "Formación base", "card.now": "En curso", "card.now.v": "ASIX · Ciberseguridad (2º curso)", "card.lang": "Idiomas",
      "profile.1": "Técnico informático con formación en <mark>sistemas microinformáticos y redes</mark>, ahora estudiando administración de redes y <mark>ciberseguridad</mark>.",
      "profile.2": "Trabajo como auxiliar de TI en BandIT Solutions: soporte técnico, hardware y software, redes y conectividad, y gestión de usuarios. Antes diseñé páginas en WordPress y creé cursos online en Moodle. Constante, con ganas de aprender y de crecer en el sector.",
      "sec.exp": "Experiencia", "exp.hint": "Pulsa una fila", "date.today": "hoy",
      "exp.title": "Experiencia <em>profesional</em>", "exp.lead": "Soporte técnico, redes y gestión de usuarios en empresa; webs y cursos online durante las prácticas.", "type.part": "Media jornada", "type.intern": "Prácticas",
      "xp.1": "Soporte técnico a usuarios y equipos, gestión de hardware y software, redes y conectividad, y gestión de usuarios.",
      "xp.2": "Prácticas en soporte técnico: hardware y software, redes y conectividad, y gestión de usuarios.",
      "xp.3": "Diseño y gestión de contenidos en WordPress, preparación y configuración de equipos informáticos, y creación y gestión de cursos online en Moodle.",
      "chip.hwsw": "Hardware y software", "chip.net": "Redes y conectividad", "chip.setup": "Preparación de equipos",
      "job.part": "Técnico informático a media jornada", "job.intern": "Técnico informático en prácticas", "tag.current": "Actual",
      "l.support": "Soporte técnico", "l.hwsw": "Gestión de hardware y software", "l.net": "Gestión de redes y conectividad", "l.users": "Gestión de usuarios",
      "l.wp": "Diseño de páginas web en WordPress", "l.content": "Gestión de contenidos de WordPress",
      "l.setup": "Configuración y preparación de equipos informáticos", "l.moodle": "Gestión y creación de cursos (vía Moodle)",
      "sec.edu": "Formación", "ver.title": "Versiones", "ver.page": "Versiones · alcasite", "sec.cert": "Certificaciones", "cert.ccna": "Preparación de la certificación Cisco CCNA: fundamentos de redes, direccionamiento IP, switching, routing y seguridad básica.", "tag.ongoing": "En curso", "tag.done": "Finalizado", "tag.complete": "Completo", "tag.year2": "2º curso",
      "edu.asix": "Grado Superior en Administración de Sistemas Informáticos en Red. Cursando segundo año.",
      "edu.smx": "Grado Medio en Sistemas Microinformáticos y Redes.", "edu.eso": "Educación Secundaria Obligatoria.",
      "sec.timeline": "Línea de tiempo", "tl.prev": "Anterior", "tl.next": "Siguiente",
      "tl.p1.date": "Septiembre 2023 – Junio 2025", "tl.p1.title": "SMX: de cero a técnico",
      "tl.p2.date": "Septiembre 2025 – mayo 2027", "lane.cert": "Certificaciones", "bar.ccna": "CCNA · en curso", "tl.p2.title": "ASIX: especialización y trabajo real",
      "lane.edu": "Formación", "lane.exp": "Experiencia", "lane.done": "Finalizado",
      "bar.smx1": "1º SMX · Sep–Jun", "bar.smx2": "2º SMX · Sep–May", "bar.study": "Study FP · prácticas", "bar.title": "Título SMX",
      "bar.asix1": "1º ASIX · Sep–Jun", "bar.asix2": "2º ASIX · en curso", "bar.bandit1": "BandIT · prácticas", "bar.bandit2": "BandIT · parcial",
      "bar.portfolio": "Portfolio · activo", "bar.web": "Web personal",
      "stat.1": "ciclos formativos de informática", "stat.2": "puestos en empresa, entre prácticas y empleo",
      "stat.3": "archivos de prácticas documentados", "stat.4": "idiomas: castellano, catalán e inglés",
      "sec.areas": "Áreas",
      "marq.label": "Herramientas con las que trabajo",
      "sec.projects": "Proyectos", "proj.url": "Hellen Bold · vista previa en desarrollo", "proj.tabs": "Capturas del proyecto", "proj.t1": "Portada", "proj.t2": "Catálogo", "proj.t3": "Cómo comprar", "proj.s1": "Un carrusel de portadas que se arrastra.", "proj.s2": "Seis novelas organizadas por series.", "proj.s3": "Pedido directo o Amazon (Kindle y tapa blanda).", "proj.alt1": "Captura de la portada de la web de Hellen Bold", "proj.alt2": "Captura del catálogo de novelas de la web de Hellen Bold", "proj.alt3": "Captura de la sección Cómo comprar de la web de Hellen Bold", "proj.type": "Web · Autora de novelas", "proj.desc": "Web para una autora de novelas: catálogo de seis títulos agrupados por series y dos formas de conseguir cada libro. La estoy desarrollando yo.", "proj.more": "También incluye secciones de autora, redes, newsletter y contacto, con tema claro y oscuro.", "proj.status": "En desarrollo", "proj.f1": "novelas en el catálogo", "proj.f2": "formas de conseguir cada libro", "proj.f3": "temas: claro y oscuro", "cur.view": "Ver", "cur.open": "Abrir", "hg.status": "En desarrollo · lanzamiento público muy pronto", "hg.type": "App web · Finanzas personales", "hg.tag": "Tu sueldo, con <em>margen</em> para respirar.", "hg.desc": "Una app web para llevar las cuentas del mes sin hojas de cálculo: apuntas lo que entra, los gastos fijos y lo que pasa por la tarjeta, y te dice cada día cuánto te queda de verdad. La estoy desarrollando yo y se lanzará pronto para todo el público.", "hg.more": "Los datos se guardan en tu propio navegador. Incluye previsión del mes por categorías, objetivo de ahorro, gastos fijos mensuales o anuales, copia de seguridad, exportación a Excel, PDF y CSV, y modo claro y oscuro.", "hg.f1": "perfiles en el mismo navegador", "hg.f2": "categorías para clasificar cada gasto", "hg.f3": "formatos para exportar: Excel, PDF y CSV", "hg.r1": "Finanzas personales", "hg.r2": "Previsión del mes", "hg.r3": "Tus datos, en tu navegador", "hg.url": "Holgura · beta en desarrollo", "hg.tabs": "Capturas de la app", "hg.t1": "Inicio", "hg.s1": "Lo que te queda este mes, nada más entrar.", "hg.t2": "Mi mes", "hg.s2": "Ingresos, fijos, gastos del día a día y dónde se va el dinero.", "hg.t3": "Gastos fijos", "hg.s3": "Se repiten solos cada mes y se marcan cuando se cobran.", "hg.t4": "Previsión", "hg.s4": "Lo que crees que gastarás y cuánto te sobraría.", "hg.alt1": "Captura de la portada de Holgura con el resumen del mes", "hg.alt2": "Captura del panel mensual de Holgura con movimientos y gasto por categorías", "hg.alt3": "Captura de la lista de gastos fijos mensuales de Holgura", "hg.alt4": "Captura de la previsión del mes de Holgura",
      "sec.stack": "Con qué trabajo", "st.ms": "Microsoft", "st.infra": "Infraestructura", "st.support": "Soporte", "st.way": "Forma de trabajar", "s.assist": "Asistencia informática", "s.hw": "Instalación de hardware informático", "s.doc": "Documentación", "s.team": "Trabajo en equipo", "st.tools": "Herramientas", "s.vpn": "Red privada virtual (VPN)", "s.remote": "Escritorio remoto", "s.incid": "Gestión de incidencias",
      "a.1.t": "Soporte", "a.1.p": "Hardware, software y usuarios. Dejar los equipos funcionando y que nadie se quede parado.",
      "a.2.t": "Redes", "a.2.p": "Conectividad y configuración de redes, del armario rack al router.",
      "a.3.t": "Ciberseguridad", "a.3.p": "Hacking ético, WebGoat, cortafuegos y alta disponibilidad con OPNsense.",
      "pf.asix.small": "Sistemas operativos, redes, bases de datos, seguridad",
      "pf.asix.body": "Actividades de primero ya publicadas; las de segundo se van añadiendo. <a href=\"" + L + "/tree/main/ASIX\">Ver ASIX →</a>",
      "pf.smx.small": "Equipos, sistemas, redes, servicios y web",
      "pf.smx.body": "Primer y segundo curso, más el proyecto final. <a href=\"" + L + "/tree/main/SMX\">Ver SMX →</a>",
      "sec.contact": "Contacto", "contact.p": "Escríbeme y te respondo.", "copy.btn": "Copiar", "copy.ok": "Copiado", "footer.role": "Técnico informático · ASIX",
      "footer.legal": "Aviso legal", "footer.privacy": "Privacidad", "footer.cookies": "Cookies", "legal.back": "← Volver al inicio", "legal.title": "Aviso legal, privacidad y cookies · alcasite",
      "skills.title": "Aptitudes de formación · alcasite", "btn.skills": "Ver aptitudes de formación →", "menu.label": "Menú", "skills.back": "← Volver a la web", "skills.h1": "Aptitudes de formación", "skills.lead": "Lo que he aprendido y practicado en los ciclos SMX y ASIX, tal y como lo tengo recogido en mi LinkedIn.", "skills.smx": "Sistemas Microinformáticos y Redes", "skills.asix": "Administración de Sistemas Informáticos en Red", "skills.soon": "Próximamente: iré añadiendo las aptitudes de ASIX a medida que avance el curso.",
      "g.os": "Sistemas operativos", "g.net": "Redes", "g.srv": "Servicios", "g.virt": "Virtualización y hardware", "g.dev": "Programación y web", "g.db": "Bases de datos", "k.db": "Bases de datos", "k.reldb": "Base de datos relacional",
      "k.networks": "Redes informáticas", "k.subnets": "Subredes", "k.netsec": "Seguridad de redes", "k.firewalls": "Cortafuegos", "k.dns": "Servidor DNS", "k.dhcp": "Servidor DHCP", "k.web": "Servidores web", "k.mail": "Servidor de correo", "k.vm": "Gestión de Máquinas Virtuales", "k.hw": "Hardware",
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
      "about.title": "De tècnic en SMX a especialitzar-me en <em>ciberseguretat</em>", "card.title": "Fitxa ràpida", "card.loc": "Ubicació", "card.role": "Rol actual", "card.role.v": "Tècnic informàtic (mitja jornada)", "card.company": "Empresa", "card.base": "Formació base", "card.now": "En curs", "card.now.v": "ASIX · Ciberseguretat (2n curs)", "card.lang": "Idiomes",
      "profile.1": "Tècnic informàtic amb formació en <mark>sistemes microinformàtics i xarxes</mark>, ara estudiant administració de xarxes i <mark>ciberseguretat</mark>.",
      "profile.2": "Treballo com a auxiliar de TI a BandIT Solutions: suport tècnic, maquinari i programari, xarxes i connectivitat, i gestió d'usuaris. Abans vaig dissenyar pàgines amb WordPress i vaig crear cursos en línia a Moodle. Constant, amb ganes d'aprendre i de créixer al sector.",
      "sec.exp": "Experiència", "exp.hint": "Prem una fila", "date.today": "avui",
      "exp.title": "Experiència <em>professional</em>", "exp.lead": "Suport tècnic, xarxes i gestió d'usuaris en empresa; webs i cursos en línia durant les pràctiques.", "type.part": "Mitja jornada", "type.intern": "Pràctiques",
      "xp.1": "Suport tècnic a usuaris i equips, gestió de maquinari i programari, xarxes i connectivitat, i gestió d'usuaris.",
      "xp.2": "Pràctiques en suport tècnic: maquinari i programari, xarxes i connectivitat, i gestió d'usuaris.",
      "xp.3": "Disseny i gestió de continguts amb WordPress, preparació i configuració d'equips informàtics, i creació i gestió de cursos en línia a Moodle.",
      "chip.hwsw": "Maquinari i programari", "chip.net": "Xarxes i connectivitat", "chip.setup": "Preparació d'equips",
      "job.part": "Tècnic informàtic a mitja jornada", "job.intern": "Tècnic informàtic en pràctiques", "tag.current": "Actual",
      "l.support": "Suport tècnic", "l.hwsw": "Gestió de maquinari i programari", "l.net": "Gestió de xarxes i connectivitat", "l.users": "Gestió d'usuaris",
      "l.wp": "Disseny de pàgines web amb WordPress", "l.content": "Gestió de continguts de WordPress",
      "l.setup": "Configuració i preparació d'equips informàtics", "l.moodle": "Gestió i creació de cursos (via Moodle)",
      "sec.edu": "Formació", "ver.title": "Versions", "ver.page": "Versions · alcasite", "sec.cert": "Certificacions", "cert.ccna": "Preparació de la certificació Cisco CCNA: fonaments de xarxes, adreçament IP, switching, routing i seguretat bàsica.", "tag.ongoing": "En curs", "tag.done": "Finalitzat", "tag.complete": "Complet", "tag.year2": "2n curs",
      "edu.asix": "Cicle Formatiu de Grau Superior en Administració de Sistemes Informàtics en Xarxa. Cursant segon any.",
      "edu.smx": "Cicle Formatiu de Grau Mitjà en Sistemes Microinformàtics i Xarxes.", "edu.eso": "Educació Secundària Obligatòria.",
      "sec.timeline": "Línia de temps", "tl.prev": "Anterior", "tl.next": "Següent",
      "tl.p1.date": "Setembre 2023 – Juny 2025", "tl.p1.title": "SMX: de zero a tècnic",
      "tl.p2.date": "Setembre 2025 – maig 2027", "lane.cert": "Certificacions", "bar.ccna": "CCNA · en curs", "tl.p2.title": "ASIX: especialització i feina real",
      "lane.edu": "Formació", "lane.exp": "Experiència", "lane.done": "Finalitzat",
      "bar.smx1": "1r SMX · Set–Juny", "bar.smx2": "2n SMX · Set–Maig", "bar.study": "Study FP · pràctiques", "bar.title": "Títol SMX",
      "bar.asix1": "1r ASIX · Set–Juny", "bar.asix2": "2n ASIX · en curs", "bar.bandit1": "BandIT · pràctiques", "bar.bandit2": "BandIT · parcial",
      "bar.portfolio": "Portfoli · actiu", "bar.web": "Web personal",
      "stat.1": "cicles formatius d'informàtica", "stat.2": "llocs en empresa, entre pràctiques i feina",
      "stat.3": "fitxers de pràctiques documentats", "stat.4": "idiomes: castellà, català i anglès",
      "sec.areas": "Àrees",
      "marq.label": "Eines amb les quals treballo",
      "sec.projects": "Projectes", "proj.url": "Hellen Bold · vista prèvia en desenvolupament", "proj.tabs": "Captures del projecte", "proj.t1": "Portada", "proj.t2": "Catàleg", "proj.t3": "Com comprar", "proj.s1": "Un carrusel de portades que s'arrossega.", "proj.s2": "Sis novel·les organitzades per sèries.", "proj.s3": "Comanda directa o Amazon (Kindle i tapa tova).", "proj.alt1": "Captura de la portada del web d'Hellen Bold", "proj.alt2": "Captura del catàleg de novel·les del web d'Hellen Bold", "proj.alt3": "Captura de la secció Com comprar del web d'Hellen Bold", "proj.type": "Web · Autora de novel·les", "proj.desc": "Web per a una autora de novel·les: catàleg de sis títols agrupats per sèries i dues maneres d'aconseguir cada llibre. La desenvolupo jo.", "proj.more": "També inclou seccions d'autora, xarxes, newsletter i contacte, amb tema clar i fosc.", "proj.status": "En desenvolupament", "proj.f1": "novel·les al catàleg", "proj.f2": "maneres d'aconseguir cada llibre", "proj.f3": "temes: clar i fosc", "cur.view": "Veure", "cur.open": "Obrir", "hg.status": "En desenvolupament · llançament públic molt aviat", "hg.type": "App web · Finances personals", "hg.tag": "El teu sou, amb <em>marge</em> per respirar.", "hg.desc": "Una app web per portar els comptes del mes sense fulls de càlcul: hi apuntes el que entra, les despeses fixes i el que passa per la targeta, i et diu cada dia quant et queda de veritat. La desenvolupo jo i es llançarà aviat per a tothom.", "hg.more": "Les dades es guarden al teu propi navegador. Inclou previsió del mes per categories, objectiu d'estalvi, despeses fixes mensuals o anuals, còpia de seguretat, exportació a Excel, PDF i CSV, i mode clar i fosc.", "hg.f1": "perfils al mateix navegador", "hg.f2": "categories per classificar cada despesa", "hg.f3": "formats per exportar: Excel, PDF i CSV", "hg.r1": "Finances personals", "hg.r2": "Previsió del mes", "hg.r3": "Les teves dades, al teu navegador", "hg.url": "Holgura · beta en desenvolupament", "hg.tabs": "Captures de l'app", "hg.t1": "Inici", "hg.s1": "El que et queda aquest mes, només entrar.", "hg.t2": "El meu mes", "hg.s2": "Ingressos, fixos, despeses del dia a dia i on van els diners.", "hg.t3": "Despeses fixes", "hg.s3": "Es repeteixen soles cada mes i es marquen quan es cobren.", "hg.t4": "Previsió", "hg.s4": "El que creus que gastaràs i quant et sobraria.", "hg.alt1": "Captura de la portada d'Holgura amb el resum del mes", "hg.alt2": "Captura del tauler mensual d'Holgura amb moviments i despesa per categories", "hg.alt3": "Captura de la llista de despeses fixes mensuals d'Holgura", "hg.alt4": "Captura de la previsió del mes d'Holgura",
      "sec.stack": "Amb què treballo", "st.ms": "Microsoft", "st.infra": "Infraestructura", "st.support": "Suport", "st.way": "Manera de treballar", "s.assist": "Assistència informàtica", "s.hw": "Instal·lació de maquinari informàtic", "s.doc": "Documentació", "s.team": "Treball en equip", "st.tools": "Eines", "s.vpn": "Xarxa privada virtual (VPN)", "s.remote": "Escriptori remot", "s.incid": "Gestió d'incidències",
      "a.1.t": "Suport", "a.1.p": "Maquinari, programari i usuaris. Deixar els equips funcionant i que ningú es quedi aturat.",
      "a.2.t": "Xarxes", "a.2.p": "Connectivitat i configuració de xarxes, de l'armari rack al router.",
      "a.3.t": "Ciberseguretat", "a.3.p": "Hacking ètic, WebGoat, tallafocs i alta disponibilitat amb OPNsense.",
      "pf.asix.small": "Sistemes operatius, xarxes, bases de dades, seguretat",
      "pf.asix.body": "Activitats de primer ja publicades; les de segon s'hi van afegint. <a href=\"" + L + "/tree/main/ASIX\">Veure ASIX →</a>",
      "pf.smx.small": "Equips, sistemes, xarxes, serveis i web",
      "pf.smx.body": "Primer i segon curs, més el projecte final. <a href=\"" + L + "/tree/main/SMX\">Veure SMX →</a>",
      "sec.contact": "Contacte", "contact.p": "Escriu-me i et responc.", "copy.btn": "Copiar", "copy.ok": "Copiat", "footer.role": "Tècnic informàtic · ASIX",
      "footer.legal": "Avís legal", "footer.privacy": "Privacitat", "footer.cookies": "Cookies", "legal.back": "← Tornar a l'inici", "legal.title": "Avís legal, privacitat i cookies · alcasite",
      "skills.title": "Aptituds de formació · alcasite", "btn.skills": "Veure aptituds de formació →", "menu.label": "Menú", "skills.back": "← Tornar a la web", "skills.h1": "Aptituds de formació", "skills.lead": "El que he après i practicat als cicles SMX i ASIX, tal com ho tinc recollit al meu LinkedIn.", "skills.smx": "Sistemes Microinformàtics i Xarxes", "skills.asix": "Administració de Sistemes Informàtics en Xarxa", "skills.soon": "Pròximament: aniré afegint les aptituds d'ASIX a mesura que avanci el curs.",
      "g.os": "Sistemes operatius", "g.net": "Xarxes", "g.srv": "Serveis", "g.virt": "Virtualització i maquinari", "g.dev": "Programació i web", "g.db": "Bases de dades", "k.db": "Bases de dades", "k.reldb": "Base de dades relacional",
      "k.networks": "Xarxes informàtiques", "k.subnets": "Subxarxes", "k.netsec": "Seguretat de xarxes", "k.firewalls": "Tallafocs", "k.dns": "Servidor DNS", "k.dhcp": "Servidor DHCP", "k.web": "Servidors web", "k.mail": "Servidor de correu", "k.vm": "Gestió de màquines virtuals", "k.hw": "Maquinari",
      "theme.toLight": "Canviar a tema clar", "theme.toDark": "Canviar a tema fosc", "lang.label": "Idioma",
      "months": ["GEN","FEB","MAR","ABR","MAI","JUN","JUL","AGO","SET","OCT","NOV","DES"]
    },
    en: {
      "meta.title": "Víctor Álvarez Calvo · IT Technician",
      "meta.desc": "IT technician (SMX) and ASIX student. Support, networks and cybersecurity.",
      "nav.profile": "Profile", "nav.path": "Journey", "nav.portfolio": "Portfolio", "nav.contact": "Contact",
      "hero.role": "IT technician", "hero.year": "ASIX · 2nd year",
      "hero.sub": "I fix computers, set up networks and study how systems break so I can learn to protect them.",
      "hero.cta1": "View portfolio", "hero.cta2": "Get in touch", "hero.scroll": "Scroll ↓",
      "sec.profile": "Profile",
      "about.title": "From SMX technician to specializing in <em>cybersecurity</em>", "card.title": "Quick facts", "card.loc": "Location", "card.role": "Current role", "card.role.v": "IT technician (part-time)", "card.company": "Company", "card.base": "Base training", "card.now": "Ongoing", "card.now.v": "ASIX · Cybersecurity (2nd year)", "card.lang": "Languages",
      "profile.1": "IT technician trained in <mark>microcomputer systems and networks</mark>, now studying network administration and <mark>cybersecurity</mark>.",
      "profile.2": "I work as an IT assistant at BandIT Solutions: technical support, hardware and software, networks and connectivity, and user management. Before that I built WordPress sites and created online courses in Moodle. Persistent, eager to learn and to grow in the industry.",
      "sec.exp": "Experience", "exp.hint": "Click a row", "date.today": "present",
      "exp.title": "Professional <em>experience</em>", "exp.lead": "Technical support, networks and user management in a company; websites and online courses during internships.", "type.part": "Part-time", "type.intern": "Internship",
      "xp.1": "Technical support for users and equipment, hardware and software management, networks and connectivity, and user management.",
      "xp.2": "Internship in technical support: hardware and software, networks and connectivity, and user management.",
      "xp.3": "WordPress design and content management, computer setup and configuration, and creation and management of online courses in Moodle.",
      "chip.hwsw": "Hardware and software", "chip.net": "Networks and connectivity", "chip.setup": "Computer setup",
      "job.part": "Part-time IT technician", "job.intern": "IT technician (internship)", "tag.current": "Current",
      "l.support": "Technical support", "l.hwsw": "Hardware and software management", "l.net": "Network and connectivity management", "l.users": "User management",
      "l.wp": "WordPress website design", "l.content": "WordPress content management",
      "l.setup": "Computer setup and preparation", "l.moodle": "Course creation and management (via Moodle)",
      "sec.edu": "Education", "ver.title": "Versions", "ver.page": "Versions · alcasite", "sec.cert": "Certifications", "cert.ccna": "Preparing for the Cisco CCNA certification: network fundamentals, IP addressing, switching, routing and basic security.", "tag.ongoing": "Ongoing", "tag.done": "Completed", "tag.complete": "Complete", "tag.year2": "2nd year",
      "edu.asix": "Higher Vocational Diploma in Network Systems Administration. Currently in the second year.",
      "edu.smx": "Intermediate Vocational Diploma in Microcomputer Systems and Networks.", "edu.eso": "Compulsory Secondary Education.",
      "sec.timeline": "Timeline", "tl.prev": "Previous", "tl.next": "Next",
      "tl.p1.date": "September 2023 – June 2025", "tl.p1.title": "SMX: from zero to technician",
      "tl.p2.date": "September 2025 – May 2027", "lane.cert": "Certifications", "bar.ccna": "CCNA · ongoing", "tl.p2.title": "ASIX: specialization and real work",
      "lane.edu": "Education", "lane.exp": "Experience", "lane.done": "Completed",
      "bar.smx1": "SMX Y1 · Sep–Jun", "bar.smx2": "SMX Y2 · Sep–May", "bar.study": "Study FP · internship", "bar.title": "SMX diploma",
      "bar.asix1": "ASIX Y1 · Sep–Jun", "bar.asix2": "ASIX Y2 · ongoing", "bar.bandit1": "BandIT · internship", "bar.bandit2": "BandIT · part-time",
      "bar.portfolio": "Portfolio · active", "bar.web": "Personal site",
      "stat.1": "IT vocational programmes", "stat.2": "company positions, internships and employment",
      "stat.3": "documented practice files", "stat.4": "languages: Spanish, Catalan and English",
      "sec.areas": "Areas",
      "marq.label": "Tools I work with",
      "sec.projects": "Projects", "proj.url": "Hellen Bold · preview in development", "proj.tabs": "Project screenshots", "proj.t1": "Home", "proj.t2": "Catalog", "proj.t3": "How to buy", "proj.s1": "A cover carousel you can drag.", "proj.s2": "Six novels organised by series.", "proj.s3": "Direct order or Amazon (Kindle and paperback).", "proj.alt1": "Screenshot of the Hellen Bold website home page", "proj.alt2": "Screenshot of the novel catalog on the Hellen Bold website", "proj.alt3": "Screenshot of the How to buy section on the Hellen Bold website", "proj.type": "Website · Novelist", "proj.desc": "Website for a novelist: a catalog of six titles grouped into series and two ways to get each book. I am building it myself.", "proj.more": "It also includes author, social media, newsletter and contact sections, with light and dark themes.", "proj.status": "In development", "proj.f1": "novels in the catalog", "proj.f2": "ways to get each book", "proj.f3": "themes: light and dark", "cur.view": "View", "cur.open": "Open", "hg.status": "In development · public launch very soon", "hg.type": "Web app · Personal finance", "hg.tag": "Your salary, with <em>room</em> to breathe.", "hg.desc": "A web app to keep track of your month without spreadsheets: you log what comes in, your fixed bills and what goes on the card, and every day it tells you how much you really have left. I am building it myself and it will launch to the public soon.", "hg.more": "Your data is saved in your own browser. It includes a monthly forecast by category, a savings goal, monthly or yearly fixed expenses, backups, export to Excel, PDF and CSV, and light and dark modes.", "hg.f1": "profiles in the same browser", "hg.f2": "categories to sort every expense", "hg.f3": "export formats: Excel, PDF and CSV", "hg.r1": "Personal finance", "hg.r2": "Monthly forecast", "hg.r3": "Your data, in your browser", "hg.url": "Holgura · beta in development", "hg.tabs": "App screenshots", "hg.t1": "Home", "hg.s1": "What you have left this month, right away.", "hg.t2": "My month", "hg.s2": "Income, fixed bills, day-to-day spending and where the money goes.", "hg.t3": "Fixed expenses", "hg.s3": "They repeat every month and get ticked off when charged.", "hg.t4": "Forecast", "hg.s4": "What you expect to spend and how much you would have left.", "hg.alt1": "Screenshot of the Holgura home page with the month summary", "hg.alt2": "Screenshot of the Holgura monthly dashboard with transactions and spending by category", "hg.alt3": "Screenshot of the Holgura list of monthly fixed expenses", "hg.alt4": "Screenshot of the Holgura monthly forecast",
      "sec.stack": "What I work with", "st.ms": "Microsoft", "st.infra": "Infrastructure", "st.support": "Support", "st.way": "Way of working", "s.assist": "IT assistance", "s.hw": "Computer hardware installation", "s.doc": "Documentation", "s.team": "Teamwork", "st.tools": "Tools", "s.vpn": "Virtual private network (VPN)", "s.remote": "Remote desktop", "s.incid": "Incident management",
      "a.1.t": "Support", "a.1.p": "Hardware, software and users. Keeping machines running so nobody is left stuck.",
      "a.2.t": "Networks", "a.2.p": "Connectivity and network configuration, from the rack cabinet to the router.",
      "a.3.t": "Cybersecurity", "a.3.p": "Ethical hacking, WebGoat, firewalls and high availability with OPNsense.",
      "pf.asix.small": "Operating systems, networks, databases, security",
      "pf.asix.body": "First-year work already published; second-year work is being added. <a href=\"" + L + "/tree/main/ASIX\">View ASIX →</a>",
      "pf.smx.small": "Hardware, systems, networks, services and web",
      "pf.smx.body": "First and second year, plus the final project. <a href=\"" + L + "/tree/main/SMX\">View SMX →</a>",
      "sec.contact": "Contact", "contact.p": "Write to me and I'll reply.", "copy.btn": "Copy", "copy.ok": "Copied", "footer.role": "IT technician · ASIX",
      "footer.legal": "Legal notice", "footer.privacy": "Privacy", "footer.cookies": "Cookies", "legal.back": "← Back to home", "legal.title": "Legal notice, privacy and cookies · alcasite",
      "skills.title": "Training skills · alcasite", "btn.skills": "View training skills →", "menu.label": "Menu", "skills.back": "← Back to the site", "skills.h1": "Training skills", "skills.lead": "What I have learned and practised in the SMX and ASIX programmes, as listed on my LinkedIn.", "skills.smx": "Microcomputer Systems and Networks", "skills.asix": "Network Systems Administration", "skills.soon": "Coming soon: I will add the ASIX skills as the course progresses.",
      "g.os": "Operating systems", "g.net": "Networking", "g.srv": "Services", "g.virt": "Virtualization and hardware", "g.dev": "Programming and web", "g.db": "Databases", "k.db": "Databases", "k.reldb": "Relational database",
      "k.networks": "Computer networks", "k.subnets": "Subnets", "k.netsec": "Network security", "k.firewalls": "Firewalls", "k.dns": "DNS server", "k.dhcp": "DHCP server", "k.web": "Web servers", "k.mail": "Mail server", "k.vm": "Virtual machine management", "k.hw": "Hardware",
      "theme.toLight": "Switch to light theme", "theme.toDark": "Switch to dark theme", "lang.label": "Language",
      "months": ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"]
    }
  };
  var LANG = "es";
  function T(k) { var d = I18N[LANG] || I18N.es; return d[k] != null ? d[k] : I18N.es[k]; }

  /* Meses abreviados con año (SEP 25) en la línea de tiempo; se pinta al cargar y al cambiar de idioma. */
  function renderMonths() {
    document.querySelectorAll(".tl-months").forEach(function (box) {
      var start = parseInt(box.getAttribute("data-start") || "0", 10), months = T("months");
      var year0 = parseInt(box.getAttribute("data-year") || "0", 10);
      Array.prototype.forEach.call(box.children, function (s, i) {
        var idx = start + i, yy = year0 ? String((year0 + Math.floor(idx / 12)) % 100) : "";
        if (yy.length === 1) yy = "0" + yy;
        s.innerHTML = months[idx % 12] + (yy ? ' <i>' + yy + '</i>' : "");
      });
    });
  }

  /* Selector de idioma: aplica las traducciones sin recargar y recuerda la elección. */
  function applyLang(lang) {
    if (!I18N[lang]) lang = "es";
    LANG = lang;
    document.documentElement.setAttribute("lang", lang);
    document.querySelectorAll("[data-i18n]").forEach(function (el) { var v = T(el.getAttribute("data-i18n")); if (v != null) el.textContent = v; });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) { var v = T(el.getAttribute("data-i18n-html")); if (v != null) el.innerHTML = v; });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) { var v = T(el.getAttribute("data-i18n-aria")); if (v != null) el.setAttribute("aria-label", v); });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) { var v = T(el.getAttribute("data-i18n-alt")); if (v != null) el.setAttribute("alt", v); });
    renderMonths();
    var pg = document.body.getAttribute("data-page");
    document.title = pg === "legal" ? T("legal.title") : pg === "skills" ? T("skills.title") : pg === "versions" ? T("ver.page") : T("meta.title");
    var md = document.querySelector('meta[name="description"]'); if (md) md.setAttribute("content", T("meta.desc"));
    var sel = document.getElementById("lang");
    if (sel) { sel.value = lang; sel.setAttribute("aria-label", T("lang.label")); var sr = document.querySelector(".lang-wrap .sr"); if (sr) sr.textContent = T("lang.label"); }
    if (window.__langUI) window.__langUI(lang);
    var th = document.getElementById("theme");
    if (th) th.setAttribute("aria-label", document.documentElement.getAttribute("data-theme") === "light" ? T("theme.toDark") : T("theme.toLight"));
    if (window.__afterLang) window.__afterLang();
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

  /* Gradiente: tres capas que siguen al cursor con transform. Si el ratón está quieto
     (o en móvil) vagan solas con un movimiento lento. Solo se anima con el hero visible. */
  function initGradient() {
    var hero = document.querySelector(".hero");
    var blobs = document.querySelectorAll(".hero-gradient .blob");
    if (!hero || blobs.length < 3) return;
    var W = window.innerWidth, H = window.innerHeight;
    var mouse = { x: -1, y: -1, t: 0 };
    var pos = [{ x: W * 0.5, y: H * 0.45 }, { x: W * 0.62, y: H * 0.33 }, { x: W * 0.36, y: H * 0.6 }];
    var offs = [[0, 0], [0.12, -0.12], [-0.14, 0.14]], lag = [0.28, 0.2, 0.15];
    var running = false, visible = true, t0 = performance.now();
    function frame(now) {
      if (!running) return;
      var idle = mouse.x < 0 || now - mouse.t > 2200;
      var tx0, ty0, k = idle ? 0.22 : 1;
      if (idle) {
        tx0 = W * (0.5 + 0.26 * Math.sin((now - t0) / 4200));
        ty0 = H * (0.42 + 0.2 * Math.cos((now - t0) / 5300));
      } else { tx0 = mouse.x; ty0 = mouse.y; }
      for (var i = 0; i < 3; i++) {
        var tx = tx0 + offs[i][0] * W, ty = ty0 + offs[i][1] * H;
        pos[i].x += (tx - pos[i].x) * lag[i] * k;
        pos[i].y += (ty - pos[i].y) * lag[i] * k;
        blobs[i].style.transform = "translate3d(" + pos[i].x.toFixed(1) + "px," + pos[i].y.toFixed(1) + "px,0)";
      }
      requestAnimationFrame(frame);
    }
    function sync() {
      var should = visible && !document.hidden;
      if (should && !running) { running = true; requestAnimationFrame(frame); }
      else if (!should) running = false;
    }
    document.addEventListener("mousemove", function (e) { mouse.x = e.clientX; mouse.y = e.clientY; mouse.t = performance.now(); }, { passive: true });
    document.addEventListener("touchmove", function (e) { if (e.touches[0]) { mouse.x = e.touches[0].clientX; mouse.y = e.touches[0].clientY; mouse.t = performance.now(); } }, { passive: true });
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
      function toggle() {
        var isOpen = row.classList.toggle("open");
        head.setAttribute("aria-expanded", String(isOpen));
      }
      head.addEventListener("click", function (e) { if (e.target.closest("a")) return; toggle(); });
      head.addEventListener("keydown", function (e) {
        if (e.target !== head || (e.key !== "Enter" && e.key !== " ")) return;
        e.preventDefault(); toggle();
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
    els.forEach(function (el) { var p = el.parentElement; var i = p ? Array.prototype.indexOf.call(p.children, el) : 0; if (i > 0 && i < 6) el.style.transitionDelay = (i * 70) + "ms"; });
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
      if (meta) meta.setAttribute("content", light ? "#f2efe7" : "#0b0c0e");
    }
    btn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      paint();
    });
    paint();
  }

  /* Menú desplegable con todas las secciones (mejora progresiva: sin JS queda el nav corto). */
  function initMenu() {
    var right = document.querySelector(".bar-right");
    if (!right) return;
    var page = document.body.getAttribute("data-page");
    var base = page ? "index.html" : "";
    var items = [
      ["#perfil", "sec.profile", "Perfil", "01"], ["#proyectos", "sec.projects", "Proyectos", "02"], ["#experiencia", "sec.exp", "Experiencia", "03"],
      ["#formacion", "sec.edu", "Formación", "04"], ["#certificaciones", "sec.cert", "Certificaciones", "05"], ["#timeline", "sec.timeline", "Línea de tiempo", "06"],
      ["#stack", "sec.stack", "Con qué trabajo", "07"], ["#areas", "sec.areas", "Áreas", "08"],
      ["#portfolio", "nav.portfolio", "Portfolio", "09"], ["#contacto", "sec.contact", "Contacto", "10"],
      null,
      ["aptitudes.html", "skills.h1", "Aptitudes de formación", "→"], ["versiones.html", "ver.title", "Versiones", "→"],
      ["legal.html#aviso", "footer.legal", "Aviso legal", "·"], ["legal.html#privacidad", "footer.privacy", "Privacidad", "·"],
      ["legal.html#cookies", "footer.cookies", "Cookies", "·"]
    ];
    var btn = document.createElement("button");
    btn.type = "button"; btn.className = "menu-btn";
    btn.setAttribute("aria-expanded", "false"); btn.setAttribute("aria-controls", "site-menu");
    btn.innerHTML = '<span data-i18n="menu.label">Menú</span> <i aria-hidden="true">☰</i>';
    var panel = document.createElement("nav");
    panel.id = "site-menu"; panel.className = "menu-panel"; panel.hidden = true; panel.setAttribute("aria-label", "Menú");
    items.forEach(function (it) {
      if (!it) { var sep = document.createElement("div"); sep.className = "m-sep"; panel.appendChild(sep); return; }
      var a = document.createElement("a");
      a.href = it[0].charAt(0) === "#" ? base + it[0] : it[0];
      a.innerHTML = '<span class="m-n">' + it[3] + '</span><span data-i18n="' + it[1] + '">' + it[2] + '</span>';
      panel.appendChild(a);
    });
    var lang = right.querySelector(".lang-wrap");
    right.insertBefore(btn, lang || null);
    document.body.appendChild(panel);
    function set(open) { panel.hidden = !open; btn.setAttribute("aria-expanded", String(open)); }
    btn.addEventListener("click", function (e) { e.stopPropagation(); set(panel.hidden); });
    panel.addEventListener("click", function (e) { if (e.target.closest("a")) set(false); });
    document.addEventListener("click", function (e) { if (!panel.hidden && !panel.contains(e.target)) set(false); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !panel.hidden) { set(false); btn.focus(); } });
  }

  /* Pantalla de carga: se muestra un mínimo para que se aprecie y se retira al terminar de cargar. */
  function initSplash() {
    var s = document.getElementById("splash");
    if (!s) return;
    var start = (window.performance && performance.now) ? performance.now() : 0;
    var MIN = 1400, closed = false;
    function close() {
      if (closed) return; closed = true;
      s.classList.add("is-done");
      setTimeout(function () { if (s.parentNode) s.parentNode.removeChild(s); }, 1100);
    }
    function ready() {
      var elapsed = (window.performance && performance.now) ? performance.now() - start : MIN;
      setTimeout(close, Math.max(0, MIN - elapsed));
    }
    if (document.readyState === "complete") ready();
    else window.addEventListener("load", ready);
    setTimeout(close, 4500);
  }

  /* Progreso de lectura, barra de navegación sólida al hacer scroll y sección actual resaltada. */
  function initScrollUI() {
    var bar = document.querySelector(".bar");
    var prog = document.querySelector(".progress span");
    var ticking = false;
    function update() {
      ticking = false;
      var y = window.scrollY || window.pageYOffset;
      if (bar) bar.classList.toggle("is-solid", y > 24);
      if (prog) {
        var h = document.documentElement.scrollHeight - window.innerHeight;
        prog.style.transform = "scaleX(" + (h > 0 ? Math.min(1, y / h) : 0) + ")";
      }
    }
    window.addEventListener("scroll", function () { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    window.addEventListener("resize", update);
    update();

    if (!("IntersectionObserver" in window)) return;
    var map = {};
    document.querySelectorAll('.bar nav a[href^="#"], #site-menu a[href^="#"]').forEach(function (a) {
      var id = a.getAttribute("href").slice(1);
      (map[id] = map[id] || []).push(a);
    });
    var trail = { timeline: "trayectoria" };
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        document.querySelectorAll(".is-current").forEach(function (a) { a.classList.remove("is-current"); });
        [en.target.id, trail[en.target.id]].forEach(function (id) {
          (map[id] || []).forEach(function (a) { a.classList.add("is-current"); });
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
    Object.keys(map).concat(["timeline"]).forEach(function (id) {
      var sec = document.getElementById(id);
      if (sec) io.observe(sec);
    });
  }

  /* Capturas del proyecto: índice numerado con avance automático.
     El tiempo lo lleva JS (no una animación CSS): solo se detiene si la sección no se ve o la pestaña está oculta,
     nunca por tener el ratón encima, así que no puede quedarse a medias. */
  function initShots() {
    var steps = document.querySelectorAll(".proj-step");
    var shots = document.querySelectorAll(".shot-view .shot");
    var host = document.querySelector(".project");
    var count = document.querySelector(".shot-count");
    if (!steps.length || steps.length !== shots.length || !host) return;
    var DURATION = 5200, cur = 0, elapsed = 0, last = 0, visible = false, raf = 0;
    function pad(n) { return (n < 10 ? "0" : "") + n; }
    function paint() {
      steps.forEach(function (s, k) {
        var f = s.querySelector(".step-fill");
        if (f) f.style.transform = "scaleX(" + (k === cur ? Math.min(1, elapsed / DURATION).toFixed(4) : 0) + ")";
      });
    }
    function show(i) {
      cur = i; elapsed = 0;
      steps.forEach(function (s, k) {
        s.classList.toggle("is-active", k === i);
        s.setAttribute("aria-selected", String(k === i));
      });
      shots.forEach(function (s, k) { s.classList.toggle("is-on", k === i); });
      if (count) count.textContent = pad(i + 1) + " / " + pad(steps.length);
      paint();
    }
    function tick(now) {
      raf = 0;
      if (!visible || document.hidden) return;
      var dt = Math.min(now - last, 250); /* evita saltos tras una pausa */
      last = now;
      elapsed += dt;
      if (elapsed >= DURATION) show((cur + 1) % steps.length); else paint();
      raf = requestAnimationFrame(tick);
    }
    function run() {
      if (raf || !visible || document.hidden) return;
      last = performance.now();
      raf = requestAnimationFrame(tick);
    }
    steps.forEach(function (s, k) { s.addEventListener("click", function () { show(k); run(); }); });
    document.addEventListener("visibilitychange", run);
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (en) { visible = en[0].isIntersecting; if (visible) run(); }, { threshold: 0.25 }).observe(host);
    } else { visible = true; run(); }
    show(0);
  }
  /* Símbolo del hero: se inclina hacia el cursor (perspectiva 3D) y flota suavemente en reposo. */
  function initHeroMark() {
    var obj = document.querySelector(".hm-obj"), hero = document.querySelector(".hero");
    if (!obj || !hero) return;
    var tx = 0, ty = 0, cx = 0, cy = 0, havePointer = false, visible = true, running = false, t0 = performance.now();
    var touch = window.matchMedia("(hover: none)").matches;
    document.addEventListener("pointermove", function (e) {
      if (e.pointerType === "touch") return;
      havePointer = true;
      tx = (e.clientX / window.innerWidth - 0.5) * 2 * 12;   /* giro horizontal */
      ty = -(e.clientY / window.innerHeight - 0.5) * 2 * 9;  /* giro vertical */
    }, { passive: true });
    function frame(now) {
      if (!running) return;
      var t = (now - t0) / 1000;
      var goalX = havePointer ? tx : Math.sin(t * 0.6) * 6;
      var goalY = havePointer ? ty : Math.cos(t * 0.5) * 4;
      if (touch && !havePointer) goalY += Math.max(-18, Math.min(18, -(window.scrollY / window.innerHeight) * 16));
      cx += (goalX - cx) * 0.08; cy += (goalY - cy) * 0.08;
      var lift = Math.sin(t * 1.1) * 7;
      obj.style.transform = "rotateX(" + cy.toFixed(2) + "deg) rotateY(" + cx.toFixed(2) + "deg) translateY(" + lift.toFixed(1) + "px)";
      requestAnimationFrame(frame);
    }
    function sync() {
      var should = visible && !document.hidden;
      if (should && !running) { running = true; requestAnimationFrame(frame); }
      else if (!should) running = false;
    }
    document.addEventListener("visibilitychange", sync);
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (en) { visible = en[0].isIntersecting; sync(); }, { threshold: 0 }).observe(hero);
    }
    sync();
  }

  /* Tarjetas de áreas: al apilarse, la anterior se encoge y se oscurece un poco. */
  function initAreaCards() {
    var cards = document.querySelectorAll(".acard");
    if (cards.length < 2) return;
    var mq = window.matchMedia("(min-width: 721px)"), ticking = false, R = 420;
    function update() {
      ticking = false;
      cards.forEach(function (c, i) {
        if (i === cards.length - 1) { c.style.transform = ""; c.style.setProperty("--p", 0); return; }
        var topI = parseFloat(getComputedStyle(c).top) || (88 + i * 24);
        var nextTop = cards[i + 1].getBoundingClientRect().top;
        var p = Math.max(0, Math.min(1, (R - (nextTop - (topI + 24))) / R));
        c.style.transform = "scale(" + (1 - 0.05 * p).toFixed(4) + ")";
        c.style.setProperty("--p", p.toFixed(3));
      });
    }
    window.addEventListener("scroll", function () { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    window.addEventListener("resize", update);
    update();
  }

  /* Menú de idioma propio (botón con globo + lista con marca). El <select> original queda oculto
     como fuente de verdad y como respaldo si falla el JS. */
  function initLangMenu() {
    var sel = document.getElementById("lang");
    var wrap = sel && sel.closest(".lang-wrap");
    if (!sel || !wrap) return;
    var LANGS = [["es", "ES", "Castellano"], ["ca", "CA", "Català"], ["en", "EN", "English"]];
    var ICON = {
      globe: '<svg class="ico" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.6 2.6 4 5.8 4 9s-1.4 6.4-4 9c-2.6-2.6-4-5.8-4-9s1.4-6.4 4-9z"/></svg>',
      chev: '<svg class="ico chev" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>',
      check: '<svg class="ico chk" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>'
    };
    var btn = document.createElement("button");
    btn.type = "button"; btn.className = "lang-btn";
    btn.setAttribute("aria-haspopup", "menu"); btn.setAttribute("aria-expanded", "false"); btn.setAttribute("aria-controls", "lang-menu");
    btn.innerHTML = ICON.globe + '<span class="lang-code">ES</span>' + ICON.chev;
    var menu = document.createElement("div");
    menu.id = "lang-menu"; menu.className = "lang-menu"; menu.setAttribute("role", "menu"); menu.hidden = true;
    LANGS.forEach(function (l) {
      var it = document.createElement("button");
      it.type = "button"; it.className = "lang-item"; it.setAttribute("role", "menuitemradio");
      it.setAttribute("data-lang", l[0]); it.setAttribute("aria-checked", "false");
      it.innerHTML = "<span>" + l[2] + "</span>" + ICON.check;
      menu.appendChild(it);
    });
    wrap.classList.add("is-custom");
    wrap.appendChild(btn); wrap.appendChild(menu);

    function items() { return Array.prototype.slice.call(menu.querySelectorAll(".lang-item")); }
    function set(open) {
      menu.hidden = !open;
      btn.setAttribute("aria-expanded", String(open));
      if (open) { var cur = menu.querySelector('[aria-checked="true"]') || items()[0]; cur.focus(); }
    }
    window.__langUI = function (lang) {
      var found = LANGS.filter(function (l) { return l[0] === lang; })[0] || LANGS[0];
      btn.querySelector(".lang-code").textContent = found[1];
      btn.setAttribute("aria-label", T("lang.label") + ": " + found[2]);
      items().forEach(function (it) { it.setAttribute("aria-checked", String(it.getAttribute("data-lang") === found[0])); });
    };
    btn.addEventListener("click", function (e) { e.stopPropagation(); set(menu.hidden); });
    menu.addEventListener("click", function (e) {
      var it = e.target.closest(".lang-item");
      if (!it) return;
      sel.value = it.getAttribute("data-lang");
      sel.dispatchEvent(new Event("change"));
      set(false); btn.focus();
    });
    document.addEventListener("click", function (e) { if (!menu.hidden && !wrap.contains(e.target)) set(false); });
    document.addEventListener("keydown", function (e) {
      if (menu.hidden) return;
      if (e.key === "Escape") { set(false); btn.focus(); return; }
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        var list = items(), i = list.indexOf(document.activeElement);
        i = e.key === "ArrowDown" ? (i + 1) % list.length : (i - 1 + list.length) % list.length;
        list[i].focus();
      }
    });
    window.__langUI(sel.value || "es");
  }

  /* ===================== Movimiento ligado al scroll =====================
     Un único bucle (requestAnimationFrame) reparte el progreso del scroll entre
     las escenas: fondo por capítulo, viaje horizontal de Holgura, libro de Hellen Bold,
     palabras que se encienden, línea de la experiencia y el título de contacto. */
  var REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var scenes = [];
  function clamp01(v) { return v < 0 ? 0 : v > 1 ? 1 : v; }
  /* progreso de un elemento entre dos puntos de la ventana (fracciones de alto) */
  function prog(el, start, end) {
    var r = el.getBoundingClientRect(), H = window.innerHeight;
    var a = r.top - H * start, b = r.bottom - H * end;
    return clamp01(-a / ((b - a) || 1));
  }
  function initMotion() {
    var ticking = false;
    function run() { ticking = false; scenes.forEach(function (fn) { fn(); }); }
    function ask() { if (!ticking) { ticking = true; requestAnimationFrame(run); } }
    window.addEventListener("scroll", ask, { passive: true });
    window.addEventListener("resize", ask);
    window.addEventListener("load", ask);
    window.__motion = ask;
    ask();
  }

  /* Títulos de sección: suben desde una máscara al entrar en pantalla. */
  function initTitleMasks() {
    var els = document.querySelectorAll(".sec-title, .about-title, .xp-title, .contact-title, .ch-title .lm, .hb-title .lm");
    if (!els.length) return;
    els.forEach(function (el) {
      if (el.classList.contains("lm")) return;
      var m = document.createElement("span");
      m.className = "lmask";
      el.parentNode.insertBefore(m, el);
      m.appendChild(el);
    });
    var targets = document.querySelectorAll(".lmask, .ch-title .lm, .hb-title .lm");
    if (!("IntersectionObserver" in window) || REDUCED) { targets.forEach(function (t) { t.classList.add("in"); }); return; }
    var io = new IntersectionObserver(function (en) {
      en.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -8% 0px" });
    targets.forEach(function (t, i) { t.style.setProperty("--d", (i % 2) * 0.08 + "s"); io.observe(t); });
  }

  /* Perfil: las palabras se van encendiendo con el scroll. Se rehace al cambiar de idioma. */
  function initWords() {
    var ps = Array.prototype.slice.call(document.querySelectorAll(".about-p"));
    if (!ps.length || REDUCED) return;
    var all = [];
    function split() {
      all = [];
      ps.forEach(function (p) {
        (function walk(node) {
          Array.prototype.slice.call(node.childNodes).forEach(function (n) {
            if (n.nodeType === 3) {
              var frag = document.createDocumentFragment();
              n.textContent.split(/(\s+)/).forEach(function (w) {
                if (!w.trim()) { frag.appendChild(document.createTextNode(w)); return; }
                var s = document.createElement("span"); s.className = "w"; s.textContent = w; frag.appendChild(s);
              });
              n.parentNode.replaceChild(frag, n);
            } else if (n.nodeType === 1 && !n.classList.contains("w")) walk(n);
          });
        })(p);
        p.classList.add("words");
      });
      all = Array.prototype.slice.call(document.querySelectorAll(".about-p .w"));
    }
    split();
    window.__afterLang = function () { split(); if (window.__motion) window.__motion(); };
    var box = ps[0].parentNode;
    scenes.push(function () {
      var p = prog(box, 0.85, 0.5), lit = Math.round(p * all.length);
      for (var i = 0; i < all.length; i++) all[i].classList.toggle("on", i < lit);
    });
  }

  /* Experiencia: la línea vertical se dibuja al bajar. */
  function initSpine() {
    var xp = document.querySelector(".xp");
    if (!xp) return;
    if (REDUCED) { xp.style.setProperty("--draw", 1); return; }
    scenes.push(function () { xp.style.setProperty("--draw", prog(xp, 0.7, 0.7).toFixed(3)); });
  }

  /* Con qué trabajo: cada fila se «instala» al entrar en pantalla. La etiqueta se escribe
     con un cursor de terminal, las herramientas se cargan una a una y el contador llega a n/n. */
  function initStack() {
    var rows = Array.prototype.slice.call(document.querySelectorAll("#stack .stack-row"));
    if (!rows.length) return;
    var items = rows.map(function (row) {
      var h = row.querySelector("h3"), lis = Array.prototype.slice.call(row.querySelectorAll("li"));
      var key = h.getAttribute("data-i18n");
      /* la traducción pasa al texto interior para poder añadir el contador al lado */
      h.removeAttribute("data-i18n");
      h.innerHTML = '<span class="st-txt"' + (key ? ' data-i18n="' + key + '"' : "") + '></span><span class="st-ok" aria-hidden="true"></span>';
      var txt = h.firstChild, ok = h.lastChild;
      txt.textContent = key ? T(key) : "";
      lis.forEach(function (li, i) { li.style.setProperty("--i", i); });
      ok.textContent = "0/" + lis.length;
      return { row: row, txt: txt, ok: ok, key: key, n: lis.length };
    });
    function finish(it) {
      it.row.classList.add("is-on", "is-done");
      it.txt.classList.remove("typing");
      if (it.key) it.txt.textContent = T(it.key);
      it.ok.textContent = "✓ " + it.n + "/" + it.n;
    }
    function play(it) {
      var full = it.key ? T(it.key) : it.txt.textContent, c = 0;
      it.txt.textContent = ""; it.txt.classList.add("typing");
      (function type() {
        it.txt.textContent = full.slice(0, ++c);
        if (c < full.length) setTimeout(type, 38); else it.txt.classList.remove("typing");
      })();
      setTimeout(function () {
        it.row.classList.add("is-on");
        for (var k = 1; k <= it.n; k++) (function (k) {
          setTimeout(function () { if (!it.row.classList.contains("is-done")) it.ok.textContent = k + "/" + it.n; }, 250 + k * 110);
        })(k);
        setTimeout(function () { finish(it); }, 450 + it.n * 110);
      }, Math.min(full.length * 38, 500));
    }
    if (REDUCED || !("IntersectionObserver" in window)) { items.forEach(finish); return; }
    var io = new IntersectionObserver(function (en) {
      var q = 0; /* si entran varias filas a la vez, se instalan una detrás de otra */
      en.forEach(function (e) {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        items.forEach(function (it) { if (it.row === e.target) setTimeout(function () { play(it); }, q++ * 260); });
      });
    }, { rootMargin: "0px 0px -12% 0px" });
    items.forEach(function (it) { io.observe(it.row); });
  }

  /* Contacto: el título crece hasta su tamaño al llegar. */
  function initContactScale() {
    var t = document.querySelector(".contact-title"), sec = document.getElementById("contacto");
    if (!t || !sec || REDUCED) return;
    scenes.push(function () {
      var p = prog(t.parentNode, 1, 0.62);
      t.style.transform = "scale(" + (0.62 + 0.38 * p).toFixed(4) + ")";
      t.style.opacity = (0.25 + 0.75 * p).toFixed(3);
    });
  }

  /* Capítulos: al entrar en un proyecto (Holgura, Hellen Bold) cambia el color de fondo de toda la página. */
  function initChapters() {
    var chs = document.querySelectorAll("[data-chapter]");
    if (!chs.length) return;
    var root = document.documentElement;
    scenes.push(function () {
      var H = window.innerHeight;
      chs.forEach(function (sec) {
        var r = sec.getBoundingClientRect();
        root.classList.toggle("in-" + sec.getAttribute("data-chapter"), r.top < H * 0.55 && r.bottom > H * 0.45);
      });
    });
  }

  /* Holgura: la sección se queda fija y las capturas pasan en horizontal, como pestañas
     que se acercan girando. En móvil (o con movimiento reducido) es un carrusel que se desliza con el dedo. */
  function initHScroll() {
    document.querySelectorAll(".hs").forEach(function (hs) {
      var track = hs.querySelector(".hs-track"), sticky = hs.querySelector(".hs-sticky");
      var stops = Array.prototype.slice.call(track.querySelectorAll("figure.hs-stop"));
      var path = hs.querySelector(".hs-path"), num = hs.querySelector(".hs-n"), total = hs.querySelector(".hs-total");
      var bar = hs.querySelector(".hs-bar i");
      var mq = window.matchMedia("(min-width: 901px)");
      var len = path ? path.getTotalLength() : 0;
      if (path) { path.style.strokeDasharray = len; path.style.strokeDashoffset = len; }
      var dist = 0, cur = 0, target = 0, loop = 0, on = false;
      function pad(n) { return (n < 10 ? "0" : "") + n; }
      if (total) total.textContent = pad(stops.length);
      function layout() {
        on = mq.matches && !REDUCED;
        hs.classList.toggle("is-pinned", on);
        if (!on) { hs.style.height = ""; track.style.transform = ""; stops.forEach(function (s) { s.querySelector(".frame").style.transform = ""; s.querySelector(".frame").style.opacity = ""; s.querySelector(".cap").style.transform = ""; s.querySelector(".cap").style.opacity = ""; }); return; }
        dist = Math.max(0, track.scrollWidth - sticky.clientWidth);
        hs.style.height = (dist + window.innerHeight) + "px";
      }
      function paint() {
        var W = sticky.clientWidth;
        track.style.transform = "translate3d(" + (-cur * dist).toFixed(1) + "px,0,0)";
        if (path) path.style.strokeDashoffset = (len * (1 - cur)).toFixed(1);
        if (bar) bar.style.transform = "scaleX(" + cur.toFixed(4) + ")";
        var active = 1;
        stops.forEach(function (st, i) {
          var x = st.offsetLeft - cur * dist;
          var t = clamp01((W * 0.95 - x) / (W * 0.6));
          var c = clamp01((W * 0.8 - x) / (W * 0.35));
          var fr = st.querySelector(".frame"), cap = st.querySelector(".cap");
          fr.style.transform = "perspective(1400px) rotateY(" + (-18 * (1 - t)).toFixed(2) + "deg) scale(" + (0.86 + 0.14 * t).toFixed(4) + ")";
          fr.style.opacity = (0.35 + 0.65 * t).toFixed(3);
          cap.style.transform = "translateY(" + (40 * (1 - c)).toFixed(1) + "px)";
          cap.style.opacity = c.toFixed(3);
          if (x < W * 0.55) active = i + 1;
        });
        if (num) num.textContent = pad(active);
      }
      function tick() {
        cur += (target - cur) * 0.12;
        if (Math.abs(target - cur) < 0.0005) cur = target;
        paint();
        loop = cur !== target ? requestAnimationFrame(tick) : 0;
      }
      scenes.push(function () {
        if (!on) return;
        var r = hs.getBoundingClientRect();
        target = clamp01(-r.top / ((hs.offsetHeight - window.innerHeight) || 1));
        if (!loop) loop = requestAnimationFrame(tick);
      });
      window.addEventListener("resize", layout);
      window.addEventListener("load", layout);
      if (mq.addEventListener) mq.addEventListener("change", layout);
      track.querySelectorAll("img").forEach(function (img) { if (!img.complete) img.addEventListener("load", layout); });
      layout();
    });
  }

  /* Hellen Bold: el libro se queda fijo a un lado y pasa de página según el capítulo que se lee al otro. */
  function initBook() {
    var story = document.querySelector(".hb-story");
    if (!story) return;
    var steps = Array.prototype.slice.call(story.querySelectorAll(".hb-step"));
    var pages = Array.prototype.slice.call(story.querySelectorAll(".hb-page"));
    var sheet = story.querySelector(".hb-sheet"), folio = story.querySelector(".hb-folio-n");
    var ROMAN = ["I", "II", "III", "IV", "V", "VI"], cur = -1, timer = 0;
    function show(i) {
      if (i === cur) return;
      var turn = cur !== -1;
      cur = i;
      steps.forEach(function (s, k) { s.classList.toggle("is-on", k === i); });
      pages.forEach(function (p, k) { p.classList.toggle("is-on", k <= i); });
      if (folio) folio.textContent = ROMAN[i] || String(i + 1);
      if (turn && !REDUCED) {
        sheet.classList.remove("is-turning");
        void sheet.offsetWidth; /* reinicia la animación del pliegue */
        sheet.classList.add("is-turning");
        clearTimeout(timer);
        timer = setTimeout(function () { sheet.classList.remove("is-turning"); }, 1000);
      }
    }
    scenes.push(function () {
      var H = window.innerHeight, a = 0;
      steps.forEach(function (s, k) { if (s.getBoundingClientRect().top < H * 0.55) a = k; });
      show(a);
    });
    show(0);
  }

  /* Cintas inclinadas: se desplazan con el scroll. */
  function initRibbon() {
    if (REDUCED) return;
    document.querySelectorAll(".ribbon-track").forEach(function (tr) {
      var base = tr.innerHTML, guard = 0;
      while (tr.scrollWidth < window.innerWidth * 2.4 && guard++ < 8) tr.innerHTML += base;
      scenes.push(function () {
        var p = prog(tr.parentNode, 1, 0);
        tr.style.transform = "translate3d(" + (-p * 50).toFixed(3) + "%,0,0)";
      });
    });
  }

  /* Barra superior: se esconde al bajar y vuelve al subir. */
  function initBarHide() {
    var bar = document.querySelector(".bar");
    if (!bar) return;
    var last = window.scrollY || 0;
    scenes.push(function () {
      var y = window.scrollY || 0;
      var menuOpen = document.querySelector("#site-menu:not([hidden]), #lang-menu:not([hidden])");
      bar.classList.toggle("is-hidden", y > 300 && y > last + 2 && !menuOpen);
      if (y < last - 2 || y <= 300) bar.classList.remove("is-hidden");
      last = y;
    });
  }

  /* Botones magnéticos: se dejan llevar un poco hacia el ratón (solo con ratón). */
  function initMagnetic() {
    if (REDUCED || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    document.querySelectorAll(".btn, .links a, .copy, .tl-pager button").forEach(function (b) {
      b.addEventListener("pointermove", function (e) {
        var r = b.getBoundingClientRect();
        b.style.transform = "translate(" + ((e.clientX - r.left - r.width / 2) * 0.25).toFixed(1) + "px," + ((e.clientY - r.top - r.height / 2) * 0.3).toFixed(1) + "px)";
      });
      b.addEventListener("pointerleave", function () { b.style.transform = ""; });
    });
  }

  /* Botón para copiar el correo de contacto. */
  function initCopy() {
    var btn = document.querySelector(".copy[data-copy]");
    if (!btn || !navigator.clipboard) { if (btn) btn.hidden = true; return; }
    var timer = 0;
    btn.addEventListener("click", function () {
      navigator.clipboard.writeText(btn.getAttribute("data-copy")).then(function () {
        btn.textContent = T("copy.ok"); btn.classList.add("is-ok");
        clearTimeout(timer);
        timer = setTimeout(function () { btn.textContent = T("copy.btn"); btn.classList.remove("is-ok"); }, 1800);
      }, function () { /* sin permiso de portapapeles: el enlace mailto sigue disponible */ });
    });
  }

  function initYear() {
    var y = document.getElementById("year");
    if (y && !y.textContent) y.textContent = new Date().getFullYear();
  }

  function boot() {
    safe(initSplash, "splash");
    safe(initGradient, "gradient");
    safe(initRows, "rows");
    safe(initReveal, "reveal");
    safe(initCount, "count");
    safe(initTimeline, "timeline");
    safe(initTheme, "theme");
    safe(initMenu, "menu");
    safe(initHeroMark, "heromark");
    safe(initAreaCards, "areacards");
    safe(initShots, "shots");
    safe(initScrollUI, "scrollui");
    safe(initLangMenu, "langmenu");
    safe(initLang, "lang");
    safe(renderMonths, "months");
    safe(initCopy, "copy");
    safe(initTitleMasks, "titlemasks");
    safe(initWords, "words");
    safe(initSpine, "spine");
    safe(initStack, "stack");
    safe(initRibbon, "ribbon");
    safe(initContactScale, "contactscale");
    safe(initChapters, "chapters");
    safe(initHScroll, "hscroll");
    safe(initBook, "book");
    safe(initBarHide, "barhide");
    safe(initMagnetic, "magnetic");
    safe(initMotion, "motion");
    safe(initYear, "year");
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
