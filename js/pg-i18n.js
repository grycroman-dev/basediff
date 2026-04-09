/**
 * PostgreSQL comparison page i18n (EN / CZ)
 */
(function () {
  var KEY = 'basediff-lang';

  var T = {
    en: {
      pg_feat_tables_title: 'Tables & Columns',
      pg_feat_tables_desc: 'Tracks data types including character varying(50), decimal(18,2). Detects nullable, default values, collation and column order. Supports both legacy nextval sequences and modern GENERATED ALWAYS AS IDENTITY (PostgreSQL 10+).',
      pg_feat_triggers_title: 'Triggers & Trigger Functions',
      pg_feat_triggers_desc: 'Analyzes both the trigger definition and the associated trigger function (pg_get_functiondef). Detects timing (BEFORE / AFTER), event scope (INSERT, UPDATE, DELETE, TRUNCATE) and enabled/disabled state.',
      pg_feat_functions_title: 'Functions & Procedures',
      pg_feat_functions_desc: 'Distinguishes all PostgreSQL function types via prokind: standard functions (f), procedures (p), aggregate functions (a) and window functions (w). Compares full definitions and parameter signatures.',
      pg_feat_constraints_title: 'Constraints',
      pg_feat_constraints_desc: 'Full support for PRIMARY KEY, FOREIGN KEY (including schema, table and column references), UNIQUE, CHECK (pg_get_expr) and EXCLUSION constraints.',
      pg_feat_extensions_title: 'Extension Filtering',
      pg_feat_extensions_desc: 'Intelligently filters objects from extensions such as PostGIS, Unaccent and TimescaleDB. Automatically ignores system schemas (pg_catalog, pg_toast, information_schema) for a clean comparison.',
      pg_feat_indexes_title: 'Indexes',
      pg_feat_indexes_desc: 'Detects unique and composite indexes using indisunique and indisprimary. Supports multi-column indexes with correct column order.',
      pg_feat_views_title: 'Views',
      pg_feat_views_desc: 'Compares complete view definitions via pg_get_viewdef. Filters materialized views and views from extensions for a clean result.',
      pg_feat_export_title: 'Flexible Export',
      pg_feat_export_desc: 'Export to a single file or separate files for CREATE, ALTER, DROP and data migration scripts. Copy to clipboard or save to disk.',

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

      pg_hero_badge: 'PostgreSQL Schema Comparison',
      pg_hero_h1_1: 'Compare PostgreSQL',
      pg_hero_h1_2: 'Schemas & Generate Scripts',
      pg_hero_sub: 'BaseDiff analyzes two PostgreSQL databases, detects structural differences and generates ready-to-use migration scripts automatically.',
      pg_hero_btn_download: 'Download BaseDiff',
      pg_hero_btn_screenshots: 'See screenshots',

      pg_term_analyzing: 'Comparing PostgreSQL schemas...',
      pg_term_found: 'Found 5 differences',
      pg_term_success: '✓ Migration script generated → update_prod.sql',

      pg_features_label: 'PostgreSQL Features',
      pg_features_title_html: 'Everything you need for <span class="gradient">PostgreSQL schema management</span>',
      pg_features_sub: 'BaseDiff supports full PostgreSQL schema comparison including schemas, tables, indexes, views, functions and triggers.',
      pg_f1_title: 'Schema Comparison',
      pg_f1_desc: 'Compare PostgreSQL schemas between development, staging and production environments. Detect differences in tables, indexes, constraints, views, functions and triggers.',
      pg_f2_title: 'Migration Scripts',
      pg_f2_desc: 'Automatically generate CREATE, ALTER and DROP statements based on detected differences. Edit scripts before export and choose exactly what to include.',
      pg_f3_title: 'Multiple Schemas',
      pg_f3_desc: 'Full support for PostgreSQL schemas (namespaces). Compare objects across different schemas including public, custom and system schemas.',
      pg_f4_title: 'Functions & Triggers',
      pg_f4_desc: 'Compare stored functions, procedures and triggers. Detect changes in function signatures, return types and trigger definitions.',
      pg_f5_title: 'Flexible Export',
      pg_f5_desc: 'Export to a single file or separate files for CREATE, ALTER, DROP and data migration scripts. Copy to clipboard or save to disk.',
      pg_f6_title: 'Visual Diff',
      pg_f6_desc: 'Explore differences using a visual tree structure. See source and target SQL definitions side by side with the generated update script.',

      pg_how_label: 'How It Works',
      pg_how_title_html: 'Compare schemas in <span class="gradient">three simple steps</span>',
      pg_step1_title: '1. Connect databases',
      pg_step1_desc: 'Configure source and target PostgreSQL connections. Enter host, port, database name and credentials. Swap source and target with one click.',
      pg_step2_title: '2. Compare schemas',
      pg_step2_desc: 'BaseDiff analyzes both PostgreSQL schemas and displays all differences in a clear tree structure. Review each object and its SQL definition.',
      pg_step3_title: '3. Generate & export scripts',
      pg_step3_desc: 'Review generated migration scripts, edit if needed and export to files. Apply scripts to synchronize your target PostgreSQL database.',

      pg_preview_label: 'Preview',
      pg_preview_title_html: 'See <span class="gradient">BaseDiff in action</span>',
      pg_screen1: 'PostgreSQL schema comparison — main window',
      pg_screen2: 'Source and target database selection',
      pg_screen3: 'Export migration scripts to files',

      pg_cta_label: 'Get Started',
      pg_cta_title_html: 'Start comparing <span class="gradient">PostgreSQL schemas today</span>',
      pg_cta_sub: 'Download BaseDiff for free and generate your first migration script in minutes.',
      pg_cta_windows: 'Download for Windows',
      pg_cta_linux: 'Download for Linux',
      pg_cta_macos: 'Download for macOS'
    },

    cs: {
      pg_feat_tables_title: 'Tabulky a sloupce',
      pg_feat_tables_desc: 'Sleduje datové typy včetně character varying(50), decimal(18,2). Detekuje nullable, výchozí hodnoty, collation a pořadí sloupců. Podporuje sekvence nextval i moderní GENERATED ALWAYS AS IDENTITY (PostgreSQL 10+).',
      pg_feat_triggers_title: 'Triggery a trigger funkce',
      pg_feat_triggers_desc: 'Analyzuje definici triggeru i přidruženou trigger funkci (pg_get_functiondef). Detekuje timing (BEFORE / AFTER), rozsah událostí (INSERT, UPDATE, DELETE, TRUNCATE) a stav enabled/disabled.',
      pg_feat_functions_title: 'Funkce a procedury',
      pg_feat_functions_desc: 'Rozlišuje všechny typy PostgreSQL funkcí přes prokind: standardní funkce (f), procedury (p), agregační funkce (a) a okenní funkce (w). Porovnává kompletní definice a signatury parametrů.',
      pg_feat_constraints_title: 'Omezení',
      pg_feat_constraints_desc: 'Plná podpora PRIMARY KEY, FOREIGN KEY (včetně referencí na schéma, tabulku a sloupec), UNIQUE, CHECK (pg_get_expr) a EXCLUSION omezení.',
      pg_feat_extensions_title: 'Filtrování rozšíření',
      pg_feat_extensions_desc: 'Inteligentně filtruje objekty z rozšíření jako PostGIS, Unaccent a TimescaleDB. Automaticky ignoruje systémová schémata (pg_catalog, pg_toast, information_schema) pro čisté porovnání.',
      pg_feat_indexes_title: 'Indexy',
      pg_feat_indexes_desc: 'Detekuje unikátní a složené indexy pomocí indisunique a indisprimary. Podporuje vícesloupcové indexy se správným pořadím sloupců.',
      pg_feat_views_title: 'Pohledy',
      pg_feat_views_desc: 'Porovnává kompletní definice pohledů přes pg_get_viewdef. Filtruje materializované pohledy a pohledy z rozšíření pro čistý výsledek.',
      pg_feat_export_title: 'Flexibilní export',
      pg_feat_export_desc: 'Export do jednoho souboru nebo oddělených souborů pro CREATE, ALTER, DROP a skripty datové migrace. Kopírování do schránky nebo uložení na disk.',

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

      pg_hero_badge: 'Porovnání schémat PostgreSQL',
      pg_hero_h1_1: 'Porovnej schémata',
      pg_hero_h1_2: 'PostgreSQL a generuj skripty',
      pg_hero_sub: 'BaseDiff analyzuje dvě databáze PostgreSQL, detekuje strukturální rozdíly a automaticky generuje migrační skripty.',
      pg_hero_btn_download: 'Stáhnout BaseDiff',
      pg_hero_btn_screenshots: 'Zobrazit náhledy',

      pg_term_analyzing: 'Porovnávám schémata PostgreSQL...',
      pg_term_found: 'Nalezeno 5 rozdílů',
      pg_term_success: '✓ Migrační skript vygenerován → update_prod.sql',

      pg_features_label: 'Funkce pro PostgreSQL',
      pg_features_title_html: 'Vše pro správu <span class="gradient">schémat PostgreSQL</span>',
      pg_features_sub: 'BaseDiff podporuje plné porovnání schémat PostgreSQL včetně tabulek, indexů, pohledů, funkcí a triggerů.',
      pg_f1_title: 'Porovnání schémat',
      pg_f1_desc: 'Porovnávejte schémata PostgreSQL mezi prostředími vývoje, stagingu a produkce. Detekujte rozdíly v tabulkách, indexech, omezeních, pohledech, funkcích a triggerech.',
      pg_f2_title: 'Migrační skripty',
      pg_f2_desc: 'Automaticky generujte příkazy CREATE, ALTER a DROP na základě zjištěných rozdílů. Skripty můžete upravit před exportem.',
      pg_f3_title: 'Více schémat',
      pg_f3_desc: 'Plná podpora pro schémata PostgreSQL (namespace). Porovnávejte objekty napříč různými schématy včetně public, vlastních a systémových.',
      pg_f4_title: 'Funkce a triggery',
      pg_f4_desc: 'Porovnávejte uložené funkce, procedury a triggery. Detekujte změny v signaturách funkcí, návratových typech a definicích triggerů.',
      pg_f5_title: 'Flexibilní export',
      pg_f5_desc: 'Exportujte do jednoho souboru nebo oddělených souborů pro CREATE, ALTER, DROP a datové migrační skripty.',
      pg_f6_title: 'Vizuální porovnání',
      pg_f6_desc: 'Prozkoumejte rozdíly pomocí vizuální stromové struktury. Zobrazte zdrojové a cílové SQL definice vedle sebe.',

      pg_how_label: 'Jak to funguje',
      pg_how_title_html: 'Porovnejte schémata ve <span class="gradient">třech jednoduchých krocích</span>',
      pg_step1_title: '1. Připojte databáze',
      pg_step1_desc: 'Nakonfigurujte zdrojové a cílové připojení k PostgreSQL. Zadejte host, port, název databáze a přihlašovací údaje.',
      pg_step2_title: '2. Porovnejte schémata',
      pg_step2_desc: 'BaseDiff analyzuje obě schémata PostgreSQL a zobrazí všechny rozdíly v přehledné stromové struktuře.',
      pg_step3_title: '3. Generujte a exportujte skripty',
      pg_step3_desc: 'Zkontrolujte vygenerované migrační skripty, upravte je a exportujte do souborů.',

      pg_preview_label: 'Náhled',
      pg_preview_title_html: 'Podívejte se na <span class="gradient">BaseDiff v akci</span>',
      pg_screen1: 'Porovnání schémat PostgreSQL — hlavní okno',
      pg_screen2: 'Výběr zdrojové a cílové databáze',
      pg_screen3: 'Export migračních skriptů do souborů',

      pg_cta_label: 'Začínáme',
      pg_cta_title_html: 'Začněte porovnávat <span class="gradient">schémata PostgreSQL ještě dnes</span>',
      pg_cta_sub: 'Stáhněte si BaseDiff zdarma a vygenerujte svůj první migrační skript během pár minut.',
      pg_cta_windows: 'Stáhnout pro Windows',
      pg_cta_linux: 'Stáhnout pro Linux',
      pg_cta_macos: 'Stáhnout pro macOS'
    }
  };

  function updateVersionInfo(lang) {
    var config = window.BaseDiffConfig;
    if (!config || !config.version) {
      setTimeout(function () { updateVersionInfo(lang); }, 100);
      return;
    }
    var elNav = document.getElementById('nav-version');
    if (elNav) elNav.textContent = 'v' + config.version;

    var elBadge = document.getElementById('hero-badge');
    var dict = T[lang] || T.en;
    if (elBadge && dict.pg_hero_badge) {
      elBadge.textContent = 'v' + config.version + ' — ' + dict.pg_hero_badge;
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
      var currentHash = window.location.hash || '';
      window.location.href = '/compare-postgresql-schemas.html' + currentHash;
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

  if (langFromUrl) {
    localStorage.setItem(KEY, langFromUrl);
  }

  apply(initialLang, true);

  document.querySelectorAll('.lang-switch button').forEach(function (b) {
    b.addEventListener('click', function () {
      apply(b.getAttribute('data-lang'), false);
    });
  });

  window.setLang = apply;
})();

