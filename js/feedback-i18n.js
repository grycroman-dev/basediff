/**
 * Feedback page i18n (EN / CZ)
 */
(function () {
  var KEY = 'basediff-lang';

  var T = {
    en: {
      feedback_version_placeholder: 'e.g. 2.0.1',
      feedback_title: 'Help us improve BaseDiff',
      feedback_sub: 'Have a suggestion, found a bug, or just want to say hi?',
      feedback_type_label: 'Feedback Type',
      feedback_type_general: '💬 General Feedback',
      feedback_type_bug: '🐛 Bug Report',
      feedback_type_feature: '✨ Feature Request',
      feedback_version_label: 'App Version',
      feedback_os_label: 'Operating System',
      feedback_os_windows: 'Windows',
      feedback_os_linux: 'Linux',
      feedback_os_macos: 'macOS',
      feedback_os_other: 'Other',
      feedback_message_label: 'Message',
      feedback_message_placeholder: 'Tell us more...',
      feedback_email_label: 'Email (optional)',
      feedback_email_placeholder: 'your@email.com',
      feedback_submit: 'Send Feedback',
      feedback_success: 'Thank you! Your feedback has been sent. We\'ll get back to you soon.',
      feedback_error: 'Error: ',
      nav_features: 'Features',
      nav_databases: 'Databases',
      nav_download: 'Download',
      nav_privacy: 'Privacy Policy',
      nav_terms: 'Terms of Use',
      nav_cookies: 'Cookies',
      nav_faq: 'FAQ',
      cookie_settings: 'Cookie settings',
      cookie_banner_text: 'This website uses cookies for traffic analysis. You can accept or reject them.',
      cookie_accept: 'Accept',
      cookie_reject: 'Reject',
      footer_desc: 'A tool for comparing and synchronizing database structures.'
    },
    cs: {
      feedback_version_placeholder: 'např. 2.0.1',
      feedback_title: 'Pomozte nám vylepšit BaseDiff',
      feedback_sub: 'Máte návrh, našli jste chybu, nebo nám chcete jen napsat?',
      feedback_type_label: 'Typ zpětné vazby',
      feedback_type_general: '💬 Obecná zpětná vazba',
      feedback_type_bug: '🐛 Nahlášení chyby',
      feedback_type_feature: '✨ Požadavek na funkci',
      feedback_version_label: 'Verze aplikace',
      feedback_os_label: 'Operační systém',
      feedback_os_windows: 'Windows',
      feedback_os_linux: 'Linux',
      feedback_os_macos: 'macOS',
      feedback_os_other: 'Jiný',
      feedback_message_label: 'Zpráva',
      feedback_message_placeholder: 'Řekněte nám více...',
      feedback_email_label: 'Email (volitelný)',
      feedback_email_placeholder: 'vas@email.cz',
      feedback_submit: 'Odeslat zpětnou vazbu',
      feedback_success: 'Děkujeme! Vaše zpětná vazba byla odeslána. Brzy se vám ozveme.',
      feedback_error: 'Chyba: ',
      nav_features: 'Funkce',
      nav_databases: 'Databáze',
      nav_download: 'Stáhnout',
      nav_privacy: 'Privacy Policy',
      nav_terms: 'Podmínky užití',
      nav_cookies: 'Cookies',
      nav_faq: 'FAQ',
      cookie_settings: 'Nastavení cookies',
      cookie_banner_text: 'Tento web používá cookies pro analýzu návštěvnosti. Můžete je přijmout nebo odmítnout.',
      cookie_accept: 'Přijmout',
      cookie_reject: 'Odmítnout',
      footer_desc: 'Nástroj pro porovnání a synchronizaci databázových struktur.'
    }
  };

  function updateVersionInfo() {
    var config = window.BaseDiffConfig;
    if (!config || !config.version) { setTimeout(updateVersionInfo, 100); return; }
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
      el.textContent = dict[k];
    });

    // Přeložíme placeholder atributy
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-placeholder');
      if (dict[k]) el.placeholder = dict[k];
    });

    // Přeložíme option hodnoty v selectech
    document.querySelectorAll('[data-i18n-options]').forEach(function (el) {
      var keys = el.getAttribute('data-i18n-options').split(',');
      var options = el.querySelectorAll('option');
      options.forEach(function (opt, i) {
        if (keys[i] && dict[keys[i].trim()]) {
          opt.textContent = dict[keys[i].trim()];
        }
      });
    });

    updateVersionInfo();

    if (!isInit) {
      // Zachováme URL parametry i hash při přepnutí jazyka
      var currentSearch = window.location.search || '';
      var currentHash = window.location.hash || '';
      window.location.href = '/feedback.html' + currentSearch + currentHash;
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
  if (langFromUrl) localStorage.setItem(KEY, langFromUrl);

  // Spustíme až po načtení DOMu
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      apply(initialLang, true);
    });
  } else {
    apply(initialLang, true);
  }

  document.querySelectorAll('.lang-switch button').forEach(function (b) {
    b.addEventListener('click', function () {
      apply(b.getAttribute('data-lang'), false);
    });
  });

  window.setLang = apply;
})();

