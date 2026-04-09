/**
 * SQL Server comparison page i18n (EN / CZ)
 */
(function () {
  var KEY = 'basediff-lang';

  var T = {
    en: {
      sql_feat_tables_title: 'Tables & Columns',
      sql_feat_tables_desc: 'Tracks data types including varchar(max), nvarchar(50), decimal(18,2). Detects nullable, default values, collation, column order and identity (seed, increment, NOT FOR REPLICATION).',
      sql_feat_indexes_title: 'Indexes',
      sql_feat_indexes_desc: 'Detects CLUSTERED and NONCLUSTERED indexes, uniqueness and composite indexes with correct column order. Distinguishes primary keys from regular indexes.',
      sql_feat_constraints_title: 'Constraints',
      sql_feat_constraints_desc: 'Full support for PRIMARY KEY, FOREIGN KEY (including schema, table and column references), UNIQUE and CHECK constraints. Tracks WITH CHECK vs WITH NOCHECK status and NOT FOR REPLICATION flag.',
      sql_feat_procs_title: 'Procedures & Functions',
      sql_feat_procs_desc: 'Compares complete SQL definitions and parameter signatures including exact types and lengths. Distinguishes Scalar (FN), Inline Table-Valued (IF) and Multistatement (TF) functions.',
      sql_feat_triggers_title: 'Triggers',
      sql_feat_triggers_desc: 'Detects trigger timing (AFTER / INSTEAD OF) and event scope (INSERT, UPDATE, DELETE). Tracks enabled/disabled state and full trigger body definition.',
      sql_feat_auth_title: 'Authentication',
      sql_feat_auth_desc: 'Connect using Windows Authentication or SQL Server Authentication. Supports all SQL Server editions including Express, Standard and Enterprise.',
      sql_feat_views_title: 'Views',
      sql_feat_views_desc: 'Compares complete SELECT definitions of views including schema assignment. Detects any change in view logic instantly.',
      sql_feat_export_title: 'Flexible Export',
      sql_feat_export_desc: 'Export to a single file or separate files for CREATE, ALTER, DROP and data migration scripts. Copy to clipboard or save to disk.',

      nav_features: 'Features',
      nav_databases: 'Databases',
      nav_screenshots: 'Previews',
      nav_comparison: 'Comparison',
      nav_download: 'Download',
      nav_privacy: 'Privacy Policy',
      nav_terms: 'Terms of Use',
      nav_cookies: 'Cookies',
      nav_changelog: 'Changelog',
      nav_sql_compare: 'SQL Server Comparison',
      nav_pg_compare: 'PostgreSQL Comparison',
      nav_faq: 'FAQ',
      cookie_settings: 'Cookie settings',
      cookie_banner_text: 'This website uses cookies for traffic analysis. You can accept or reject them.',
      cookie_accept: 'Accept',
      cookie_reject: 'Reject',
      footer_desc: 'A tool for comparing and synchronizing database structures.',

      sql_hero_badge: 'SQL Server Schema Comparison',
      sql_hero_h1_1: 'Compare SQL Server',
      sql_hero_h1_2: 'Schemas & Generate Scripts',
      sql_hero_sub: 'BaseDiff analyzes two SQL Server databases, detects structural differences and generates ready-to-use migration scripts automatically.',
      sql_hero_btn_download: 'Download BaseDiff',
      sql_hero_btn_screenshots: 'See screenshots',

      sql_term_analyzing: 'Comparing SQL Server schemas...',
      sql_term_found: 'Found 5 differences',
      sql_term_success: '✓ Migration script generated → update_prod.sql',

      sql_features_label: 'SQL Server Features',
      sql_features_title_html: 'Everything you need for <span class="gradient">SQL Server schema management</span>',
      sql_features_sub: 'BaseDiff supports both Windows Authentication and SQL Server Authentication for seamless integration into your workflow.',
      sql_f1_title: 'Schema Comparison',
      sql_f1_desc: 'Compare database schemas between development, staging and production environments. Detect differences in tables, indexes, constraints, views, procedures and triggers.',
      sql_f2_title: 'Migration Scripts',
      sql_f2_desc: 'Automatically generate CREATE, ALTER and DROP statements based on detected differences. Edit scripts before export and choose exactly what to include.',
      sql_f3_title: 'Authentication',
      sql_f3_desc: 'Connect using Windows Authentication or SQL Server Authentication. Supports all SQL Server editions including Express, Standard and Enterprise.',
      sql_f4_title: 'All Object Types',
      sql_f4_desc: 'Compare tables, indexes, foreign keys, check constraints, unique constraints, views, stored procedures, functions and triggers.',
      sql_f5_title: 'Flexible Export',
      sql_f5_desc: 'Export to a single file or separate files for CREATE, ALTER, DROP and data migration scripts. Copy to clipboard or save to disk.',
      sql_f6_title: 'Visual Diff',
      sql_f6_desc: 'Explore differences using a visual tree structure. See source and target SQL definitions side by side with the generated update script.',

      sql_how_label: 'How It Works',
      sql_how_title_html: 'Compare schemas in <span class="gradient">three simple steps</span>',
      sql_step1_title: '1. Connect databases',
      sql_step1_desc: 'Configure source and target SQL Server connections. Use Windows Auth or SQL Auth. Swap source and target with one click.',
      sql_step2_title: '2. Compare schemas',
      sql_step2_desc: 'BaseDiff analyzes both schemas and displays all differences in a clear tree structure. Review each object and its SQL definition.',
      sql_step3_title: '3. Generate & export scripts',
      sql_step3_desc: 'Review generated migration scripts, edit if needed and export to files. Apply scripts to synchronize your target database.',

      sql_preview_label: 'Preview',
      sql_preview_title_html: 'See <span class="gradient">BaseDiff in action</span>',
      sql_screen1: 'SQL Server schema comparison — main window',
      sql_screen2: 'Source and target database selection',
      sql_screen3: 'Export migration scripts to files',

      sql_cta_label: 'Get Started',
      sql_cta_title_html: 'Start comparing <span class="gradient">SQL Server schemas today</span>',
      sql_cta_sub: 'Download BaseDiff for free and generate your first migration script in minutes.',
      sql_cta_windows: 'Download for Windows',
      sql_cta_linux: 'Download for Linux',
      sql_cta_macos: 'Download for macOS'
    },

    cs: {
      sql_feat_tables_title: 'Tabulky a sloupce',
      sql_feat_tables_desc: 'Sleduje datové typy včetně varchar(max), nvarchar(50), decimal(18,2). Detekuje nullable, výchozí hodnoty, collation, pořadí sloupců a identity (seed, increment, NOT FOR REPLICATION).',
      sql_feat_indexes_title: 'Indexy',
      sql_feat_indexes_desc: 'Detekuje CLUSTERED a NONCLUSTERED indexy, unikátnost a složené indexy se správným pořadím sloupců. Rozlišuje primární klíče od ostatních indexů.',
      sql_feat_constraints_title: 'Omezení',
      sql_feat_constraints_desc: 'Plná podpora PRIMARY KEY, FOREIGN KEY (včetně referencí na schéma, tabulku a sloupec), UNIQUE a CHECK omezení. Sleduje stav WITH CHECK vs WITH NOCHECK a příznak NOT FOR REPLICATION.',
      sql_feat_procs_title: 'Procedury a funkce',
      sql_feat_procs_desc: 'Porovnává kompletní SQL definice a signatury parametrů včetně přesných typů a délek. Rozlišuje Scalar (FN), Inline Table-Valued (IF) a Multistatement (TF) funkce.',
      sql_feat_triggers_title: 'Triggery',
      sql_feat_triggers_desc: 'Detekuje timing triggeru (AFTER / INSTEAD OF) a rozsah událostí (INSERT, UPDATE, DELETE). Sleduje stav enabled/disabled a kompletní definici těla triggeru.',
      sql_feat_auth_title: 'Autentizace',
      sql_feat_auth_desc: 'Připojení pomocí Windows Authentication nebo SQL Server Authentication. Podporuje všechny edice SQL Serveru včetně Express, Standard a Enterprise.',
      sql_feat_views_title: 'Pohledy',
      sql_feat_views_desc: 'Porovnává kompletní SELECT definice pohledů včetně přiřazení schématu. Okamžitě detekuje jakoukoli změnu v logice pohledu.',
      sql_feat_export_title: 'Flexibilní export',
      sql_feat_export_desc: 'Export do jednoho souboru nebo oddělených souborů pro CREATE, ALTER, DROP a skripty datové migrace. Kopírování do schránky nebo uložení na disk.',

      nav_features: 'Funkce',
      nav_databases: 'Databáze',
      nav_screenshots: 'Náhledy',
      nav_comparison: 'Srovnání',
      nav_download: 'Stáhnout',
      nav_privacy: 'Privacy Policy',
      nav_terms: 'Podmínky užití',
      nav_cookies: 'Cookies',
      nav_changelog: 'Changelog',
      nav_sql_compare: 'Srovnání SQL Serveru',
      nav_pg_compare: 'Srovnání PostgreSQL',
      nav_faq: 'FAQ',
      cookie_settings: 'Nastavení cookies',
      cookie_banner_text: 'Tento web používá cookies pro analýzu návštěvnosti. Můžete je přijmout nebo odmítnout.',
      cookie_accept: 'Přijmout',
      cookie_reject: 'Odmítnout',
      footer_desc: 'Nástroj pro porovnání a synchronizaci databázových struktur.',

      sql_hero_badge: 'Porovnání schémat SQL Server',
      sql_hero_h1_1: 'Porovnej schémata',
      sql_hero_h1_2: 'SQL Serveru a generuj skripty',
      sql_hero_sub: 'BaseDiff analyzuje dvě databáze SQL Server, detekuje strukturální rozdíly a automaticky generuje migrační skripty.',
      sql_hero_btn_download: 'Stáhnout BaseDiff',
      sql_hero_btn_screenshots: 'Zobrazit náhledy',

      sql_term_analyzing: 'Porovnávám schémata SQL Serveru...',
      sql_term_found: 'Nalezeno 5 rozdílů',
      sql_term_success: '✓ Migrační skript vygenerován → update_prod.sql',

      sql_features_label: 'Funkce pro SQL Server',
      sql_features_title_html: 'Vše pro správu <span class="gradient">schémat SQL Serveru</span>',
      sql_features_sub: 'BaseDiff podporuje Windows Authentication i SQL Server Authentication pro bezproblémovou integraci do vašeho workflow.',
      sql_f1_title: 'Porovnání schémat',
      sql_f1_desc: 'Porovnávejte databázová schémata mezi prostředími vývoje, stagingu a produkce. Detekujte rozdíly v tabulkách, indexech, omezeních, pohledech, procedurách a triggerech.',
      sql_f2_title: 'Migrační skripty',
      sql_f2_desc: 'Automaticky generujte příkazy CREATE, ALTER a DROP na základě zjištěných rozdílů. Skripty můžete upravit před exportem.',
      sql_f3_title: 'Autentizace',
      sql_f3_desc: 'Připojte se pomocí Windows Authentication nebo SQL Server Authentication. Podporuje všechny edice SQL Serveru včetně Express, Standard a Enterprise.',
      sql_f4_title: 'Všechny typy objektů',
      sql_f4_desc: 'Porovnávejte tabulky, indexy, cizí klíče, check omezení, unikátní omezení, pohledy, uložené procedury, funkce a triggery.',
      sql_f5_title: 'Flexibilní export',
      sql_f5_desc: 'Exportujte do jednoho souboru nebo oddělených souborů pro CREATE, ALTER, DROP a datové migrační skripty.',
      sql_f6_title: 'Vizuální porovnání',
      sql_f6_desc: 'Prozkoumejte rozdíly pomocí vizuální stromové struktury. Zobrazte zdrojové a cílové SQL definice vedle sebe.',

      sql_how_label: 'Jak to funguje',
      sql_how_title_html: 'Porovnejte schémata ve <span class="gradient">třech jednoduchých krocích</span>',
      sql_step1_title: '1. Připojte databáze',
      sql_step1_desc: 'Nakonfigurujte zdrojové a cílové připojení k SQL Serveru. Použijte Windows Auth nebo SQL Auth. Zdroj a cíl prohodíte jedním klikem.',
      sql_step2_title: '2. Porovnejte schémata',
      sql_step2_desc: 'BaseDiff analyzuje obě schémata a zobrazí všechny rozdíly v přehledné stromové struktuře.',
      sql_step3_title: '3. Generujte a exportujte skripty',
      sql_step3_desc: 'Zkontrolujte vygenerované migrační skripty, upravte je a exportujte do souborů.',

      sql_preview_label: 'Náhled',
      sql_preview_title_html: 'Podívejte se na <span class="gradient">BaseDiff v akci</span>',
      sql_screen1: 'Porovnání schémat SQL Serveru — hlavní okno',
      sql_screen2: 'Výběr zdrojové a cílové databáze',
      sql_screen3: 'Export migračních skriptů do souborů',

      sql_cta_label: 'Začínáme',
      sql_cta_title_html: 'Začněte porovnávat <span class="gradient">schémata SQL Serveru ještě dnes</span>',
      sql_cta_sub: 'Stáhněte si BaseDiff zdarma a vygenerujte svůj první migrační skript během pár minut.',
      sql_cta_windows: 'Stáhnout pro Windows',
      sql_cta_linux: 'Stáhnout pro Linux',
      sql_cta_macos: 'Stáhnout pro macOS'
    }
  };

  function updateVersionInfo(lang) {
    var config = window.BaseDiffConfig;
    if (!config || !config.version) return;

    var elNav = document.getElementById('nav-version');
    if (elNav) elNav.textContent = 'v' + config.version;

    var elBadge = document.getElementById('hero-badge');
    var dict = T[lang] || T.en;
    if (elBadge && dict.sql_hero_badge) {
      elBadge.textContent = 'v' + config.version + ' — ' + dict.sql_hero_badge;
    }
  }

  function apply(lang, isInit) {
    var dict = T[lang];
    if (!dict) return;

    localStorage.setItem(KEY, lang);
    document.getElementById('root-html').setAttribute('lang', lang);

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

    if (!isInit) {
      // Zapamatuj si aktuální sekci pro scroll po přesměrování
      var currentHash = window.location.hash || '';
      window.location.href = '/compare-sql-server-schemas.html' + currentHash;
      return;
    }
  }

  // ── Inicializace jazyka ──

  // 1. Zjistíme jazyk z URL (např. /en/ nebo /cs/)
  var pathParts = window.location.pathname.split('/');
  var langFromUrl = null;

  for (var i = 0; i < pathParts.length; i++) {
    var part = pathParts[i].toLowerCase();
    if (part === 'en' || part === 'cs') {
      langFromUrl = part;
      break;
    }
  }

  // 2. Priorita: URL → localStorage → výchozí 'en'
  var initialLang = langFromUrl || localStorage.getItem(KEY) || 'en';

  // 3. Pokud jazyk pochází z URL, uložíme ho do localStorage
  if (langFromUrl) {
    localStorage.setItem(KEY, langFromUrl);
  }

  // 4. VŽDY voláme apply s isInit = true (žádný reload při inicializaci!)
  apply(initialLang, true);

  // 5. Event listenery pro tlačítka
  document.querySelectorAll('.lang-switch button').forEach(function (b) {
    b.addEventListener('click', function () {
      apply(b.getAttribute('data-lang'), false);
    });
  });

  window.setLang = apply;
})();


