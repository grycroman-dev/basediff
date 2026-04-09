/**
 * Internationalization (CZ / EN)
 */
(function () {

  var KEY = 'basediff-lang';

  var T = {
    cs: {
      nav_sql_compare: 'Porovnání SQL Server schémat',
      nav_sql_compare_short: 'Zjistit více',
      nav_pg_compare: 'Porovnání PostgreSQL schémat',
      nav_pg_compare_short: 'Zjistit více',
      page_title: 'BaseDiff — Porovnání databázových schémat a generování skriptů',

      why_label: 'Proč BaseDiff',
      why_title_html: 'Proč vývojáři používají <span class="gradient">BaseDiff</span>',
      why_sub: 'BaseDiff je navržen pro vývojáře a správce databází, kteří potřebují rychlý a spolehlivý způsob porovnání databázových schémat a generování SQL migračních skriptů.',
      why_c1_title: 'Porovnání databázových schémat',
      why_c1_desc: 'Porovnávejte databázová schémata mezi prostředími jako vývoj, staging a produkce. BaseDiff rychle odhalí rozdíly v tabulkách, indexech, omezeních, pohledech, procedurách a triggerech.',
      why_c2_title: 'Automatické SQL migrační skripty',
      why_c2_desc: 'Generujte SQL skripty pro synchronizaci databázových struktur. Nástroj automaticky vytváří příkazy CREATE, ALTER a DROP na základě zjištěných rozdílů schémat.',
      why_c3_title: 'Podpora SQL Server a PostgreSQL',
      why_c3_desc: 'BaseDiff aktuálně podporuje Microsoft SQL Server a PostgreSQL. Podpora MySQL, Oracle a SQLite je plánována v budoucnu.',
      why_c4_title: 'Vizuální nástroj pro porovnání schémat',
      why_c4_desc: 'Snadno prozkoumejte rozdíly mezi zdrojovou a cílovou databází pomocí vizuální stromové struktury a podrobných SQL náhledů.',

      cookie_settings: 'Nastavení cookies',
      cookie_banner_text: 'Tento web používá cookies pro analýzu návštěvnosti. Můžete je přijmout nebo odmítnout.',
      cookie_accept: 'Přijmout',
      cookie_reject: 'Odmítnout',
      dl_macos_sub: 'Přenosná 64-bit',
      dl_btn_targz: 'Stáhnout .tar.gz',
      coffee_title: 'Líbí se ti BaseDiff?',
      coffee_desc: 'Software je zdarma. Pokud ti ušetřil čas, můžeš nás podpořit kávou. ☕',
      coffee_btn: 'Kup nám kafe',
      nav_features: 'Funkce',
      nav_databases: 'Databáze',
      nav_screenshots: 'Náhledy',
      nav_download: 'Stáhnout',
      nav_privacy: 'Privacy Policy',
      nav_terms: 'Podmínky užití',
      nav_cookies: 'Cookies',
      nav_faq: 'FAQ',
      hero_badge: 'v2.0.3 — Windows · Linux · macOS',
      hero_h1_1: 'Porovnej schémata.',
      hero_h1_2: 'Generuj skripty.',
      hero_sub: 'Nástroj pro porovnání databázových schémat a generování aktualizačních skriptů. Rychlý, přesný, multiplatformní.',
      hero_btn_download: 'Stáhnout zdarma',
      hero_btn_more: 'Zjistit více',
      hero_downloads_label: 'stažení',
      term_analyzing: 'Analyzuji schémata...',
      term_found: 'Nalezeny 4 rozdíly',
      term_success: '✓ Aktualizační skript vygenerován → update.sql',
      stat_objects: 'Typů DB objektů',
      stat_dbs: 'Podporované databáze',
      stat_platforms: 'Platformy',
      stat_exports: 'Formáty exportu',
      features_label: 'Funkce',
      features_title_html: 'Vše pro správu <span class="gradient">databázových schémat</span>',
      features_sub: 'Od porovnání až po export – BaseDiff pokryje celý workflow bez nutnosti psát SQL ručně.',
      f1_title: 'Porovnání schémat',
      f1_desc: 'Vizuální porovnání dvou databázových schémat s přehledným zobrazením rozdílů. Prohození zdroje a cíle jedním klikem.',
      f2_title: 'Generování skriptů',
      f2_desc: 'Automatické generování ALTER, CREATE a DROP skriptů pro synchronizaci databází.',
      f3_title: 'Bleskově rychlé',
      f3_desc: 'Optimalizovaný engine pro analýzu i rozsáhlých databázových struktur během sekund.',
      f4_title: 'Bezpečné',
      f4_desc: 'Náhled změn před aplikací. Žádné neočekávané modifikace vaší databáze.',
      f5_title: 'Editace skriptů',
      f5_desc: 'Upravuj vygenerované skripty před exportem. Zvol přesně, co se zahrne do výstupu.',
      f6_title: 'Uložení projektu',
      f6_desc: 'Ulož konfiguraci porovnání do JSON a kdykoli se k projektu vrať. Offline režim podporován.',
      f7_title: 'Flexibilní export',
      f7_desc: 'Export do jednoho souboru nebo oddělených souborů (create, alter, drop, datová migrace).',
      f8_title: 'Query Tool',
      f8_desc: 'Sestavuj SQL dotazy včetně JOINů a použij je přímo v migračních skriptech.',
      f9_title: 'Témata a jazyky',
      f9_desc: 'Světlý a tmavý režim. Rozhraní v češtině a angličtině.',
      objects_label: 'Sledované objekty',
      objects_title_html: 'Kompletní pokrytí <span class="gradient">databázových objektů</span>',
      objects_sub: 'Vyber si, které objekty a vlastnosti chceš zahrnout do porovnání.',
      obj_tables: 'Tabulky',
      obj_indexes: 'Indexy',
      obj_constraints: 'Omezení (FK, CK, UQ)',
      obj_views: 'Pohledy',
      obj_procedures: 'Uložené procedury',
      obj_functions: 'Funkce',
      obj_triggers: 'Triggery',
      obj_migrations: 'Migrace',
      db_label: 'Podporované databáze',
      db_title_html: 'Pracuj s databázemi, <span class="gradient">které znáš</span>',
      db_sub: 'Aktuálně podporujeme MS SQL Server a PostgreSQL. Podpora dalších databází se připravuje.',
      db_mssql_sub: 'Windows Auth & SQL Auth',
      db_pg_sub: 'Plná podpora schémat',
      db_planned: 'Připravujeme',
      db_available: '<i class="fa-solid fa-check"></i> Dostupné',
      db_soon: '<i class="fa-solid fa-clock"></i> Brzy',
      screens_label: 'Náhledy aplikace',
      screens_title_html: 'Podívej se, <span class="gradient">jak to vypadá</span>',
      screen1: 'Hlavní okno – stromy schémat a update skripty',
      screen2: 'Výběr zdrojové a cílové databáze',
      screen3: 'Export update skriptů do souborů',
      screen4: 'Nastavení sledovaných objektů (F4)',
      screen5: 'Query Tool – sestavování dotazů',
      screen6: "Editor migračních dat",
      dl_label: 'Stáhnout',
      dl_title_html: 'Začni používat <span class="gradient">BaseDiff ještě dnes</span>',
      dl_sub: 'Po instalaci nakonfiguruj připojení a vytvoř první srovnávací projekt.',
      dl_total_label: 'Celkem stažení:',
      dl_portable_sub: 'Přenosná 64-bit',
      dl_portable32_sub: 'Přenosná 32-bit',
      dl_win32_sub: 'Instalátor 32-bit',
      dl_win64_sub: 'Instalátor 64-bit',
      dl_linux_sub: 'AppImage x86_64',
      dl_linux_portable_sub: 'Přenosná x86_64',
      dl_recommended: '<i class="fa-solid fa-star"></i> Doporučeno',
      dl_btn_zip: 'Stáhnout ZIP',
      dl_btn_exe: 'Stáhnout .exe',
      dl_btn_appimage: 'Stáhnout AppImage',
      faq_label: 'FAQ',
      faq_title_html: 'Často kladené <span class="gradient">dotazy</span>',
      faq_q1: 'Je BaseDiff skutečně zdarma?',
      faq_a1_html: 'Ano, BaseDiff je zdarma pro osobní i komerční použití. Původně jsme ho vyvinuli pro vlastní potřebu a sami ho denně používáme na našich projektech, ale rozhodli jsme se ho sdílet i s ostatními. Pokud vám ušetří práci a čas, budeme rádi za jakoukoli zpětnou vazbu, náměty na vylepšení nebo podporu přes <a href="https://ko-fi.com/basediff" target="_blank" rel="noopener" class="footer-link">„Buy me a coffee“</a>.',
      faq_q2: 'Jsou moje databázová data v bezpečí?',
      faq_a2: 'Naprosto. BaseDiff je desktopová aplikace, která běží lokálně na vašem počítači. Připojení k databázi probíhá přímo z vašeho stroje a žádná data ani schémata se nikdy neposílají na naše servery.',
      faq_q3: 'Které databáze aplikace podporuje?',
      faq_a3: 'Aktuálně plně podporujeme Microsoft SQL Server a PostgreSQL (včetně specifik jako triggery nebo funkce). Podpora pro další databáze (např. MySQL) je v plánu.',
      faq_q4: 'Funguje BaseDiff i na macOS a Linuxu?',
      faq_a4: 'Ano, BaseDiff je od začátku vyvíjen jako multiplatformní nástroj. Nabízíme verze pro Windows, Linux i macOS.',
      faq_q5: 'Musím být při porovnávání připojen k internetu?',
      faq_a5: 'Ne. Internet potřebujete pouze ke stažení aplikace. Samotné porovnávání schémat a generování skriptů probíhá zcela offline ve vaší síti.',
      faq_q6: 'Můžu si vygenerovaný SQL skript před spuštěním upravit?',
      faq_a6: 'Samozřejmě. BaseDiff vám umožní skript nejprve prohlédnout, editovat a pak ho buď vyexportovat do souboru, nebo zkopírovat do schránky.',
      footer_desc: 'Nástroj pro porovnání a synchronizaci databázových struktur.',

      privacy_label: 'Ochrana osobních údajů',
      privacy_title: 'Privacy Policy',
      privacy_updated: 'Poslední aktualizace: duben 2026',
      privacy_s1_title: '1. Provozovatel webu',
      privacy_s2_title: '2. Jaké údaje zpracováváme',
      privacy_s2_p1: 'Web BaseDiff nevyžaduje registraci ani vytvoření účtu. Osobní údaje nejsou sbírány přímo.',
      privacy_s2_p2: 'Webový server automaticky zaznamenává technické informace:',
      privacy_s2_li1: 'IP adresa návštěvníka',
      privacy_s2_li2: 'Typ a verze prohlížeče',
      privacy_s2_li3: 'Navštívené stránky a čas návštěvy',
      privacy_s2_li4: 'Počet stažení softwaru (anonymně, bez vazby na osobu)',
      privacy_s2_p3: 'Tyto informace slouží výhradně k technickému provozu a bezpečnosti webu.',
      privacy_s3_title: '3. Analytické nástroje',
      privacy_s3_p1: 'V budoucnu plánujeme nasazení analytického nástroje (Google Analytics nebo alternativa). O této změně budeme uživatele informovat aktualizací těchto zásad a zobrazením cookie banneru.',
      privacy_s3_p2: 'Bez vašeho souhlasu nebudou analytické nástroje aktivovány.',
      privacy_s4_title: '4. Platební služby (Ko-fi / Stripe)',
      privacy_s4_p1: 'Pokud se rozhodnete podpořit projekt prostřednictvím Ko-fi, platba je zpracována třetí stranou. Platební údaje nejsou ukládány na našem webu.',
      privacy_s4_li1: 'Ko-fi Privacy Policy:',
      privacy_s4_li2: 'Stripe Privacy Policy:',
      privacy_s5_title: '5. Cookies',
      privacy_s5_p1: 'Web používá pouze technické cookies nezbytné pro fungování stránky (uložení jazyka a tématu). Tyto cookies nevyžadují souhlas.',
      privacy_s5_link: 'Více informací o cookies →',
      privacy_s6_title: '6. Vaše práva (GDPR)',
      privacy_s6_p1: 'Pokud jsou zpracovávány vaše osobní údaje, máte právo na:',
      privacy_s6_li1: 'Přístup k osobním údajům',
      privacy_s6_li2: 'Opravu nebo výmaz údajů',
      privacy_s6_li3: 'Omezení zpracování',
      privacy_s6_li4: 'Podání stížnosti u dozorového úřadu (ÚOOÚ)',
      privacy_s6_contact: 'Kontakt:',
      privacy_s7_title: '7. Změny těchto zásad',
      privacy_s7_p1: 'Tyto zásady mohou být aktualizovány. Datum poslední aktualizace je uvedeno nahoře.'
    },
    en: {
      nav_sql_compare: 'SQL Server Comparison',
      nav_sql_compare_short: 'Learn more',
      nav_pg_compare: 'PostgreSQL Comparison',
      nav_pg_compare_short: 'Learn more',
      page_title: 'BaseDiff — Database schema comparison and script generation',

      why_label: "Why BaseDiff",
      why_title_html: "Why developers use <span class='gradient'>BaseDiff</span>",
      why_sub: "BaseDiff is designed for developers and database administrators who need a fast and reliable way to compare database schemas and generate SQL migration scripts.",
      why_c1_title: 'Database schema comparison',
      why_c1_desc: 'Compare database schemas between environments such as development, staging and production. BaseDiff quickly detects differences in tables, indexes, constraints, views, procedures and triggers.',
      why_c2_title: 'Automatic SQL migration scripts',
      why_c2_desc: 'Generate SQL scripts to synchronize database structures. The tool automatically produces CREATE, ALTER and DROP statements based on detected schema differences.',
      why_c3_title: 'Supports SQL Server and PostgreSQL',
      why_c3_desc: 'BaseDiff currently supports Microsoft SQL Server and PostgreSQL. Support for MySQL, Oracle and SQLite is planned in future versions.',
      why_c4_title: 'Visual schema diff tool',
      why_c4_desc: 'Easily explore differences between source and target databases using a visual tree structure and detailed SQL previews.',

      cookie_settings: 'Cookie settings',
      cookie_banner_text: 'This website uses cookies for traffic analysis. You can accept or reject them.',
      cookie_accept: 'Accept',
      cookie_reject: 'Reject',
      dl_macos_sub: 'Portable 64-bit',
      dl_btn_targz: 'Download .tar.gz',
      coffee_title: 'Do you like BaseDiff?',
      coffee_desc: 'The software is free. If it saved you time, you can support us with a coffee. ☕',
      coffee_btn: 'Buy us a coffee',
      nav_features: 'Features',
      nav_databases: 'Databases',
      nav_privacy: 'Privacy Policy',
      nav_terms: 'Terms of Use',
      nav_cookies: 'Cookies',
      nav_faq: 'FAQ',
      nav_screenshots: 'Previews',
      nav_download: 'Download',
      hero_badge: 'v2.0.3 — Windows · Linux · macOS',
      hero_h1_1: 'Compare schemas.',
      hero_h1_2: 'Generate scripts.',
      hero_sub: 'A tool for comparing database schemas and generating update scripts. Fast, precise, cross-platform.',
      hero_btn_download: 'Download for free',
      hero_btn_more: 'Learn more',
      hero_downloads_label: 'downloads',
      term_analyzing: 'Analyzing schemas...',
      term_found: 'Found 4 differences',
      term_success: '✓ Update script generated → update.sql',
      stat_objects: 'DB object types',
      stat_dbs: 'Supported databases',
      stat_platforms: 'Platforms',
      stat_exports: 'Export formats',
      features_label: 'Features',
      features_title_html: 'Everything for managing <span class="gradient">database schemas</span>',
      features_sub: 'From comparison to export – BaseDiff covers the entire workflow without writing SQL manually.',
      f1_title: 'Schema comparison',
      f1_desc: 'Visual comparison of two database schemas with a clear display of differences. Swap source and target with one click.',
      f2_title: 'Script generation',
      f2_desc: 'Automatic generation of ALTER, CREATE and DROP scripts to synchronize databases.',
      f3_title: 'Blazing fast',
      f3_desc: 'Optimized engine for analyzing even large database structures in seconds.',
      f4_title: 'Safe',
      f4_desc: 'Preview changes before applying. No unexpected modifications to your database.',
      f5_title: 'Script editing',
      f5_desc: 'Edit generated scripts before export. Choose exactly what to include in the output.',
      f6_title: 'Save project',
      f6_desc: 'Save comparison config to JSON and return anytime. Offline mode supported.',
      f7_title: 'Flexible export',
      f7_desc: 'Export to a single file or separate files (create, alter, drop, data migration).',
      f8_title: 'Query Tool',
      f8_desc: 'Build SQL queries including JOINs and use them directly in migration scripts.',
      f9_title: 'Themes & languages',
      f9_desc: 'Light and dark mode. Interface in Czech and English.',
      objects_label: 'Tracked objects',
      objects_title_html: 'Complete coverage of <span class="gradient">database objects</span>',
      objects_sub: 'Choose which objects and properties to include in comparison.',
      obj_tables: 'Tables',
      obj_indexes: 'Indexes',
      obj_constraints: 'Constraints (FK, CK, UQ)',
      obj_views: 'Views',
      obj_procedures: 'Stored procedures',
      obj_functions: 'Functions',
      obj_triggers: 'Triggers',
      obj_migrations: 'Migrations',
      db_label: 'Supported databases',
      db_title_html: 'Work with databases <span class="gradient">you know</span>',
      db_sub: 'Currently supporting MS SQL Server and PostgreSQL. More databases coming soon.',
      db_mssql_sub: 'Windows Auth & SQL Auth',
      db_pg_sub: 'Full schema support',
      db_planned: 'Coming soon',
      db_available: '<i class="fa-solid fa-check"></i> Available',
      db_soon: '<i class="fa-solid fa-clock"></i> Soon',
      screens_label: 'App previews',
      screens_title_html: 'See <span class="gradient">how it looks</span>',
      screen1: 'Main window – schema trees and update scripts',
      screen2: 'Source and target database selection',
      screen3: 'Export update scripts to files',
      screen4: 'Tracked objects settings (F4)',
      screen5: 'Query Tool – building queries',
      screen6: "Migration Data Editor",
      dl_label: 'Download',
      dl_title_html: 'Start using <span class="gradient">BaseDiff today</span>',
      dl_sub: 'After installation, configure connections and create your first comparison project.',
      dl_total_label: 'Total downloads:',
      dl_portable_sub: 'Portable 64-bit',
      dl_portable32_sub: 'Portable 32-bit',
      dl_win32_sub: '32-bit installer',
      dl_win64_sub: '64-bit installer',
      dl_linux_sub: 'AppImage x86_64',
      dl_linux_portable_sub: 'Portable x86_64',
      dl_recommended: '<i class="fa-solid fa-star"></i> Recommended',
      dl_btn_zip: 'Download ZIP',
      dl_btn_exe: 'Download .exe',
      dl_btn_appimage: 'Download AppImage',
      faq_label: 'FAQ',
      faq_title_html: 'Frequently Asked <span class="gradient">Questions</span>',
      faq_q1: 'Is BaseDiff really free?',
      faq_a1_html: 'Yes, BaseDiff is free for both personal and commercial use. We originally developed it for our own internal needs and use it daily on our projects, but decided to share it with the community. If BaseDiff saves you time and effort, we appreciate any feedback, suggestions for improvement, or support via <a href="https://ko-fi.com/basediff" target="_blank" rel="noopener" class="footer-link">"Buy me a coffee"</a>.',
      faq_q2: 'Is my database data safe?',
      faq_a2: 'Absolutely. BaseDiff is a desktop application that runs locally on your computer. The connection to the database is direct from your machine, and no data or schemas are ever sent to our servers.',
      faq_q3: 'Which databases does the application support?',
      faq_a3: 'Currently we fully support Microsoft SQL Server and PostgreSQL (including specifics like triggers or functions). Support for other databases (e.g. MySQL) is planned.',
      faq_q4: 'Does BaseDiff work on macOS and Linux?',
      faq_a4: 'Yes, BaseDiff has been developed as a cross-platform tool from the start. We offer versions for Windows, Linux, and macOS.',
      faq_q5: 'Do I need to be connected to the internet while comparing?',
      faq_a5: 'No. You only need the internet to download the app. The actual schema comparison and script generation take place entirely offline on your network.',
      faq_q6: 'Can I edit the generated SQL script before running it?',
      faq_a6: 'Of course. BaseDiff allows you to first preview and edit the script, and then either export it to a file or copy it to the clipboard.',
      footer_desc: 'A tool for comparing and synchronizing database structures.'
    }
  };

  function updateVersionInfo(lang) {
    var config = window.BaseDiffConfig;
    if (!config || !config.version) return; // Kontrola, zda jsou data připravena

    // 1. Meta info (Version 2.0 • Released: March 2026)
    var elMeta = document.getElementById('hero-meta');
    if (elMeta) {
      var releaseText = config.releaseDateText[lang] || config.releaseDateText.en;
      var labels = {
        cs: { version: 'Verze', released: 'Vydáno' },
        en: { version: 'Version', released: 'Released' }
      };
      var t = labels[lang] || labels.en;
      elMeta.textContent = t.version + ' ' + config.version + ' • ' + t.released + ': ' + releaseText;
    }

    // 2. Navbar version (e.g., v2.0)
    var elNav = document.getElementById('nav-version');
    if (elNav) elNav.textContent = 'v' + config.version;

    // 3. Hero badge (e.g., v2.0 — Windows · Linux · macOS)
    var elBadge = document.getElementById('hero-badge');
    if (elBadge) elBadge.textContent = 'v' + config.version + ' — Windows · Linux · macOS';
  }

  function apply(lang, isInit) {
    var dict = T[lang];
    if (!dict) return;
    document.getElementById('root-html').setAttribute('lang', lang);
    localStorage.setItem(KEY, lang);
    document.querySelectorAll('.lang-switch button').forEach(function (b) {
      b.classList.toggle('active', b.getAttribute('data-lang') === lang);
    });
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      if (!dict[k]) return;
      if (k.endsWith('_html') || dict[k].indexOf('<') !== -1) {
        el.innerHTML = dict[k];
      } else {
        el.textContent = dict[k];
      }
    });

    updateVersionInfo(lang);

    if (dict.page_title) {
      document.title = dict.page_title;
    }

    if (!isInit) {
      // Při změně jazyka přesměruj na čistou URL (bez /en/ /cs/)
      // aby po reloadu URL neovlivňovala detekci jazyka
      // Zapamatuj si aktuální sekci (hash) pro scroll po reloadu
      var currentHash = window.location.hash || '';
      window.location.href = '/' + currentHash;
      //window.location.href = '/';
      return;
    }
  }

  // ── Inicializace jazyka ──
  var pathParts = window.location.pathname.split('/');
  var langFromUrl = null;

  for (var i = 0; i < pathParts.length; i++) {
    var part = pathParts[i].toLowerCase();
    if (part === 'en' || part === 'cs') {
      langFromUrl = part;
      break;
    }
  }

  var initialLang = langFromUrl || localStorage.getItem(KEY) || 'en';

  // Pokud jazyk pochází z URL, uložíme ho do localStorage
  if (langFromUrl) {
    localStorage.setItem(KEY, langFromUrl);
  }

  // VŽDY voláme apply s isInit = true (žádný reload při inicializaci!)
  apply(initialLang, true);

  document.querySelectorAll('.lang-switch button').forEach(function (b) {
    b.addEventListener('click', function () {
      apply(b.getAttribute('data-lang'), false);
    });
  });

  window.setLang = apply;

})();
