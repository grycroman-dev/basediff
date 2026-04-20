/**
 * Legal pages i18n (CZ / EN / DE)
 * Used by: privacy.html, terms.html, cookies.html, stats.html
 */
(function () {
  var KEY = 'basediff-lang';

  var T = {
    cs: {
      nav_sql_compare: 'Porovnání SQL Server schémat',
      nav_pg_compare: 'Porovnání PostgreSQL schémat',
      nav_changelog: 'Changelog',
      stats_label: 'Statistiky',
      stats_title: 'Statistiky BaseDiff',
      stats_sub: 'Živá data o stahování a používání.',
      stats_downloads_title: 'Stahování',
      stats_total: 'Celkem stažení',
      stats_by_platform: 'Stažení podle platformy',
      stats_telemetry_title: 'Používání aplikace (posledních 30 dní)',
      stats_launches: 'Celkem spuštění',
      stats_by_version: 'Spuštění podle verze',
      stats_daily: 'Denní spuštění (posledních 30 dní)',
      stats_by_country: 'Stažení podle zemí',

      company_address_line1: 'Hasičská 930/53, Hrabůvka',
      company_address_line2: '700 30 Ostrava',
      company_country: 'Česká republika',
      company_id: 'IČ: 27396649',
      company_vat: 'DIČ: CZ27396649',

      cookie_settings: 'Nastavení cookies',
      cookie_banner_text: 'Tento web používá cookies pro analýzu návštěvnosti. Můžete je přijmout nebo odmítnout.',
      cookie_accept: 'Přijmout',
      cookie_reject: 'Odmítnout',

      nav_features: 'Funkce',
      nav_databases: 'Databáze',
      nav_screenshots: 'Náhledy',
      nav_comparison: 'Srovnání',
      nav_download: 'Stáhnout',
      nav_privacy: 'Privacy Policy',
      nav_terms: 'Podmínky užití',
      nav_cookies: 'Cookies',
      nav_faq: 'FAQ',
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
      privacy_s3_p1: 'Web může používat analytické nástroje, jako je Google Analytics, pro pochopení toho, jak návštěvníci web používají, a pro zlepšení jeho funkčnosti.',
      privacy_s3_p2: 'Analytické cookies jsou aktivovány pouze poté, co uživatel udělí souhlas prostřednictvím cookie banneru.',
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
      privacy_s7_title: '7. Telemetrie aplikace',
      privacy_s7_p1: 'Aplikace BaseDiff při spuštění odesílá anonymní informaci o verzi aplikace a operačním systému. Nejsou sbírány žádné osobní údaje, IP adresy ani identifikátory.',
      privacy_s8_title: '8. Změny těchto zásad',
      privacy_s8_p1: 'Tyto zásady mohou být aktualizovány. Datum poslední aktualizace je uvedeno nahoře.',

      terms_label: 'Podmínky užití',
      terms_title: 'Podmínky užití',
      terms_updated: 'Poslední aktualizace: duben 2026',
      terms_s1_title: '1. Úvod',
      terms_s1_p1: 'Tyto podmínky užití upravují používání webu BaseDiff a softwaru BaseDiff. Stažením nebo používáním softwaru vyjadřujete souhlas s těmito podmínkami.',
      terms_s2_title: '2. Licence k softwaru',
      terms_s2_p1: 'BaseDiff je distribuován jako freeware. Software je poskytován zdarma pro osobní i komerční použití.',
      terms_s2_p2: 'Je povoleno:',
      terms_s2_li1: 'Stáhnout a používat software zdarma',
      terms_s2_li2: 'Používat software pro osobní i komerční účely',
      terms_s2_li3: 'Sdílet odkaz na oficiální stránku stažení',
      terms_s2_p3: 'Není povoleno:',
      terms_s2_li4: 'Redistribuovat upravené verze softwaru',
      terms_s2_li5: 'Vydávat software za vlastní produkt',
      terms_s2_li6: 'Šířit software zavádějícím způsobem',
      terms_s3_title: '3. Vyloučení záruky',
      terms_s3_p1: 'Software je poskytován „tak jak je" (AS-IS), bez jakékoli záruky.',
      terms_s3_p2: 'Před použitím aktualizačních skriptů doporučujeme vždy provést zálohu databáze.',
      terms_s4_title: '4. Odkazy na třetí strany',
      terms_s4_p1: 'Web může obsahovat odkazy na služby třetích stran. Za obsah a podmínky těchto služeb neneseme odpovědnost.',
      terms_s5_title: '5. Rozhodné právo',
      terms_s5_p1: 'Tyto podmínky se řídí právem České republiky.',
      terms_s6_title: '6. Změny podmínek',
      terms_s6_p1: 'Vyhrazujeme si právo tyto podmínky kdykoli aktualizovat.',
      terms_s7_title: '7. Kontakt',

      cookies_label: 'Cookies',
      cookies_title: 'Cookie Policy',
      cookies_updated: 'Poslední aktualizace: duben 2026',
      cookies_s1_title: '1. Co jsou cookies',
      cookies_s1_p1: 'Cookies jsou malé textové soubory ukládané do vašeho prohlížeče při návštěvě webu.',
      cookies_s2_title: '2. Technické cookies (nezbytné)',
      cookies_s2_p1: 'Web BaseDiff používá pouze technické cookies nezbytné pro správné fungování stránky.',
      cookies_s2_li1: 'basediff-lang — uložení zvoleného jazyka (CZ/EN/DE)',
      cookies_s2_li2: 'basediff-theme — uložení zvoleného barevného tématu (světlé/tmavé)',
      cookies_s2_p2: 'Tyto hodnoty jsou ukládány do localStorage prohlížeče.',
      cookies_s3_title: '3. Analytické cookies',
      cookies_s3_p1: 'Web může používat Google Analytics pro měření návštěvnosti. Analytické cookies jsou aktivovány pouze po vašem výslovném souhlasu prostřednictvím cookie banneru.',
      cookies_s3_p2: 'Bez vašeho souhlasu nejsou analytické cookies aktivní.',
      cookies_s4_title: '4. Správa cookies',
      cookies_s4_p1: 'Cookies můžete spravovat nebo smazat v nastavení vašeho prohlížeče.',
      cookies_s5_title: '5. Kontakt',
      cookies_s5_p1: 'Máte-li dotazy ohledně cookies, kontaktujte nás:'
    },

    en: {
      nav_sql_compare: 'SQL Server Comparison',
      nav_pg_compare: 'PostgreSQL Comparison',
      nav_changelog: 'Changelog',
      stats_label: 'Statistics',
      stats_title: 'BaseDiff Statistics',
      stats_sub: 'Live download and usage data.',
      stats_downloads_title: 'Downloads',
      stats_total: 'Total downloads',
      stats_by_platform: 'Downloads by platform',
      stats_telemetry_title: 'App Usage (last 30 days)',
      stats_launches: 'Total launches',
      stats_by_version: 'Launches by version',
      stats_daily: 'Daily launches (last 30 days)',
      stats_by_country: 'Downloads by country',

      company_address_line1: 'Hasičská 930/53, Hrabůvka',
      company_address_line2: '700 30 Ostrava',
      company_country: 'Czech Republic',
      company_id: 'ID: 27396649',
      company_vat: 'VAT: CZ27396649',

      cookie_settings: 'Cookie settings',
      cookie_banner_text: 'This website uses cookies for traffic analysis. You can accept or reject them.',
      cookie_accept: 'Accept',
      cookie_reject: 'Reject',

      nav_features: 'Features',
      nav_databases: 'Databases',
      nav_screenshots: 'Previews',
      nav_comparison: 'Comparison',
      nav_download: 'Download',
      nav_privacy: 'Privacy Policy',
      nav_terms: 'Terms of Use',
      nav_cookies: 'Cookies',
      nav_faq: 'FAQ',
      footer_desc: 'A tool for comparing and synchronizing database structures.',

      privacy_label: 'Privacy',
      privacy_title: 'Privacy Policy',
      privacy_updated: 'Last updated: April 2026',
      privacy_s1_title: '1. Website Operator',
      privacy_s2_title: '2. Data We Collect',
      privacy_s2_p1: 'The BaseDiff website does not require registration or account creation. Personal data is not collected directly.',
      privacy_s2_p2: 'The web server automatically records technical information:',
      privacy_s2_li1: 'Visitor IP address',
      privacy_s2_li2: 'Browser type and version',
      privacy_s2_li3: 'Pages visited and time of visit',
      privacy_s2_li4: 'Software download count (anonymous, not linked to a person)',
      privacy_s2_p3: 'This information is used solely for technical operation and website security.',
      privacy_s3_title: '3. Analytics Tools',
      privacy_s3_p1: 'The website may use analytics tools such as Google Analytics to understand how visitors use the site and to improve its functionality.',
      privacy_s3_p2: 'Analytics cookies are only activated after the user gives consent through the cookie banner.',
      privacy_s4_title: '4. Payment Services (Ko-fi / Stripe)',
      privacy_s4_p1: 'If you choose to support the project via Ko-fi, payment is processed by a third party. Payment data is not stored on our website.',
      privacy_s4_li1: 'Ko-fi Privacy Policy:',
      privacy_s4_li2: 'Stripe Privacy Policy:',
      privacy_s5_title: '5. Cookies',
      privacy_s5_p1: 'The website uses only technical cookies necessary for functionality (language and theme preferences). These cookies do not require consent.',
      privacy_s5_link: 'More information about cookies →',
      privacy_s6_title: '6. Your Rights (GDPR)',
      privacy_s6_p1: 'If your personal data is processed, you have the right to:',
      privacy_s6_li1: 'Access your personal data',
      privacy_s6_li2: 'Correct or delete your data',
      privacy_s6_li3: 'Restrict processing',
      privacy_s6_li4: 'File a complaint with a supervisory authority',
      privacy_s6_contact: 'Contact:',
      privacy_s7_title: '7. Application Telemetry',
      privacy_s7_p1: 'The BaseDiff application sends anonymous information about the app version and operating system at startup. No personal data, IP addresses or identifiers are collected.',
      privacy_s8_title: '8. Changes to This Policy',
      privacy_s8_p1: 'This policy may be updated. The date of the last update is shown above.',

      terms_label: 'Terms of Use',
      terms_title: 'Terms of Use',
      terms_updated: 'Last updated: April 2026',
      terms_s1_title: '1. Introduction',
      terms_s1_p1: 'These Terms of Use govern the use of the BaseDiff website and software. By downloading or using the software, you agree to these terms.',
      terms_s2_title: '2. Software License',
      terms_s2_p1: 'BaseDiff is distributed as freeware. The software is provided free of charge for personal and commercial use.',
      terms_s2_p2: 'You may:',
      terms_s2_li1: 'Download and use the software for free',
      terms_s2_li2: 'Use the software for personal and commercial purposes',
      terms_s2_li3: 'Share links to the official download page',
      terms_s2_p3: 'You may not:',
      terms_s2_li4: 'Redistribute modified versions of the software',
      terms_s2_li5: 'Present the software as your own product',
      terms_s2_li6: 'Distribute the software in a misleading way',
      terms_s3_title: '3. Disclaimer of Warranty',
      terms_s3_p1: 'The software is provided "as is", without any warranty of any kind.',
      terms_s3_p2: 'We recommend always backing up your database before applying update scripts.',
      terms_s4_title: '4. Third-Party Links',
      terms_s4_p1: 'The website may contain links to third-party services. We are not responsible for their content or policies.',
      terms_s5_title: '5. Governing Law',
      terms_s5_p1: 'These terms are governed by the laws of the Czech Republic.',
      terms_s6_title: '6. Changes to Terms',
      terms_s6_p1: 'We reserve the right to update these terms at any time.',
      terms_s7_title: '7. Contact',

      cookies_label: 'Cookies',
      cookies_title: 'Cookie Policy',
      cookies_updated: 'Last updated: April 2026',
      cookies_s1_title: '1. What Are Cookies',
      cookies_s1_p1: 'Cookies are small text files stored in your browser when you visit a website.',
      cookies_s2_title: '2. Technical Cookies (Necessary)',
      cookies_s2_p1: 'The BaseDiff website uses only technical cookies necessary for proper functionality.',
      cookies_s2_li1: 'basediff-lang — stores your chosen language (English)',
      cookies_s2_li2: 'basediff-theme — stores your chosen color theme (light/dark)',
      cookies_s2_p2: 'These values are stored in your browser\'s localStorage.',
      cookies_s3_title: '3. Analytics Cookies',
      cookies_s3_p1: 'The website may use Google Analytics for traffic measurement. Analytics cookies are only activated after your explicit consent through the cookie banner.',
      cookies_s3_p2: 'Without your consent, analytics cookies are not active.',
      cookies_s4_title: '4. Managing Cookies',
      cookies_s4_p1: 'You can manage or delete cookies in your browser settings.',
      cookies_s5_title: '5. Contact',
      cookies_s5_p1: 'If you have questions about cookies, please contact us:'
    }
  };

  // ── Aktualizace verze v navbaru ──
  // Retry mechanismus — app-config.js načítá version.json asynchronně
  function updateVersionInfo() {
    var config = window.BaseDiffConfig;
    if (!config || !config.version) {
      setTimeout(updateVersionInfo, 100);
      return;
    }
    var elNav = document.getElementById('nav-version');
    if (elNav) elNav.textContent = 'v' + config.version;
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

    // Zavoláme aktualizaci verze
    updateVersionInfo();

    if (!isInit) {
      var currentFile = window.location.pathname.split('/').pop() || 'index.html';
      var currentHash = window.location.hash || '';
      window.location.href = '/' + currentFile + currentHash;
      return;
    }
  }

  // ── Inicializace jazyka ──
  // Forced English only
  var initialLang = 'en';

  /*
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
  */

  apply(initialLang, true);

  // Zavoláme znovu samostatně — pro případ, že app-config ještě nebyl připraven
  updateVersionInfo();

  document.querySelectorAll('.lang-switch button').forEach(function (b) {
    b.addEventListener('click', function () {
      apply(b.getAttribute('data-lang'), false);
    });
  });

  window.setLang = apply;
})();

