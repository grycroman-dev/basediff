/**
 * Download counter system.
 *
 * ARCHITECTURE:
 * - Reads counts from api/downloads.json (or a real API endpoint).
 * - Displays total and per-platform counts.
 * - Tracks clicks on download buttons and increments counts.
 *
 * For PRODUCTION, replace the fetch URL with your real API endpoint, e.g.:
 *   GET  /api/downloads        → returns JSON with counts
 *   POST /api/downloads/track  → increments a platform counter
 *
 * The current implementation uses a local JSON file as a fallback demo
 * and localStorage for client-side tracking.
 */
(function () {
  /* var API_URL = 'api/downloads.json'; */  // Replace with real endpoint
  var API_URL = '/api/downloads.php';

  var LS_KEY = 'basediff-dl-counts';

  // Default fallback data
  var defaults = {
    total: 12847,
    platforms: {
      portable: 1823,
      win32: 2156,
      win64: 6412,
      linux: 2456
    }
  };

  /**
   * Format number with locale separator (e.g. 12 847)
   */
  function fmt(n) {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '\u00A0');
  }

  /**
   * Animated count-up
   */
  function animateValue(el, target, duration) {
    duration = duration || 1200;
    var startTime = null;

    function step(ts) {
      if (!startTime) startTime = ts;
      var progress = Math.min((ts - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = fmt(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = fmt(target);
    }

    requestAnimationFrame(step);
  }

  /**
   * Render counts to DOM
   */
  function render(data) {
      // 1. Celkový počet (pro Hero a sekci)
      var totalEl = document.getElementById('download-count');
      var totalElSection = document.getElementById('download-count-section');
      if (totalEl) totalEl.textContent = data.total.toLocaleString();
      if (totalElSection) totalElSection.textContent = data.total.toLocaleString();
    
      // 2. Čísla pro jednotlivé karty
      document.querySelectorAll('.dl-card').forEach(function(card) {
        var platform = card.getAttribute('data-platform');
        
        // Máme pro tuto kartu data z API?
        if (data.platforms && data.platforms[platform] !== undefined) {
          var countEl = card.querySelector('.platform-count');
          if (countEl) {
            countEl.textContent = data.platforms[platform].toLocaleString();
          }
        }
      });
    }

  /**
   * Load counts – try API first, then localStorage, then defaults
   */
  function loadCounts() {
  fetch(API_URL + '?t=' + Date.now())
    .then(function (res) {
      if (!res.ok) throw new Error('API not available');
      return res.json();
    })
    .then(function (data) {
      render(data);
    })
    .catch(function () {
      render(defaults);
    });
}


  /**
   * Get local increments from localStorage
   */
  function getLocalIncrements() {
    try {
      return JSON.parse(localStorage.getItem(LS_KEY)) || {};
    } catch (e) {
      return {};
    }
  }

  /**
   * Merge base data with local increments
   */
  function mergeData(base, increments) {
    var result = {
      total: base.total || 0,
      platforms: Object.assign({}, base.platforms || {})
    };
    Object.keys(increments).forEach(function (key) {
      if (result.platforms[key] !== undefined) {
        result.platforms[key] += increments[key];
        result.total += increments[key];
      }
    });
    return result;
  }

  /**
   * Track a download click (client-side)
   * In production, also POST to your API.
   */
  function trackDownload(platform) {
    // Save locally
    var local = getLocalIncrements();
    local[platform] = (local[platform] || 0) + 1;
    localStorage.setItem(LS_KEY, JSON.stringify(local));

    // In production, uncomment:
    // fetch('/api/downloads/track', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ platform: platform })
    // });
  }

  /**
   * Bind download button clicks
   */
  document.querySelectorAll('[data-dl-track]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var platform = btn.getAttribute('data-dl-track');
      trackDownload(platform);
    });
  });

  // ── Observe download section to trigger counter animation ──
  var dlSection = document.getElementById('download');
  if (dlSection && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          loadCounts();
          observer.disconnect();
        }
      });
    }, { threshold: 0.2 });
    observer.observe(dlSection);
  } else {
    loadCounts();
  }

  // Also load for hero (visible immediately)
  var heroEl = document.getElementById('download-count');
  if (heroEl) {
    setTimeout(function () { loadCounts(); }, 500);
  }
})();
