/**
 * Cookie Consent Banner
 * - Shows banner if user hasn't made a choice
 * - Loads Google Analytics ONLY after consent
 * - Saves preference to localStorage
 */
(function () {
  var KEY = 'basediff-cookie-consent';
  var GA_ID = 'G-MTHEC4DSQL';

  var banner = document.getElementById('cookie-banner');
  var acceptBtn = document.getElementById('cookie-accept');
  var rejectBtn = document.getElementById('cookie-reject');

  // Expose globally FIRST — before any return
  window.openCookieSettings = function () {
    localStorage.removeItem(KEY);
    location.reload();
  };

  if (!banner) return;

  var consent = localStorage.getItem(KEY);

  if (consent === 'accepted') {
    loadGA();
    return;
  }

  if (consent === 'rejected') {
    return;
  }

  banner.style.display = 'block';

  if (acceptBtn) {
    acceptBtn.addEventListener('click', function () {
      localStorage.setItem(KEY, 'accepted');
      hideBanner();
      loadGA();
    });
  }

  if (rejectBtn) {
    rejectBtn.addEventListener('click', function () {
      localStorage.setItem(KEY, 'rejected');
      hideBanner();
    });
  }

  function hideBanner() {
    banner.classList.add('hiding');
    setTimeout(function () {
      banner.style.display = 'none';
    }, 400);
  }

  function loadGA() {
    if (document.getElementById('ga-script')) return;

    var script = document.createElement('script');
    script.id = 'ga-script';
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(script);

    script.onload = function () {
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', GA_ID);
    };
  }

})();
