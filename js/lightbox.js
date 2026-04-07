/**
 * Lightbox gallery with keyboard, touch swipe, prev/next navigation
 * and fullscreen support.
 * Supports dark/light theme switching via data-lightbox-base attribute.
 */
(function () {
  var overlay = document.getElementById('lightbox-overlay');
  var img = document.getElementById('lightbox-img');
  var caption = document.getElementById('lightbox-caption');
  var counter = document.getElementById('lightbox-counter');
  var btnClose = document.getElementById('lightbox-close');
  var btnPrev = document.getElementById('lightbox-prev');
  var btnNext = document.getElementById('lightbox-next');
  if (!overlay) return;

  // Fullscreen button
  var btnFullscreen = document.createElement('button');
  btnFullscreen.className = 'lightbox-fullscreen';
  btnFullscreen.setAttribute('aria-label', 'Fullscreen');
  btnFullscreen.innerHTML = '<i class="fa-solid fa-expand"></i>';
  overlay.appendChild(btnFullscreen);

  var cards = [].slice.call(document.querySelectorAll('[data-lightbox], [data-lightbox-base]'));
  var idx = 0;

  function getTheme() {
    return document.documentElement.getAttribute('data-theme') === 'light' ? 'l' : 'd';
  }

  function getSrc(card) {
    var base = card.getAttribute('data-lightbox-base');
    if (base) {
      return '/img/' + base + '-' + getTheme() + '.webp';
    }
    return card.getAttribute('data-lightbox');
  }

  function show() {
    var c = cards[idx];
    var span = c.querySelector('.cap span');
    img.src = getSrc(c);
    img.alt = span ? span.textContent : '';
    caption.textContent = span ? span.textContent : '';
    counter.textContent = (idx + 1) + ' / ' + cards.length;
  }

  function open(i) {
    idx = i;
    show();
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    // Exit fullscreen if active
    if (isFullscreen()) exitFullscreen();
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  function prev() { idx = (idx - 1 + cards.length) % cards.length; show(); }
  function next() { idx = (idx + 1) % cards.length; show(); }

  // ── Fullscreen API ──
  function isFullscreen() {
    return !!(
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement
    );
  }

  function enterFullscreen() {
    var el = overlay;
    if (el.requestFullscreen) el.requestFullscreen();
    else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
    else if (el.mozRequestFullScreen) el.mozRequestFullScreen();
    else if (el.msRequestFullscreen) el.msRequestFullscreen();
  }

  function exitFullscreen() {
    if (document.exitFullscreen) document.exitFullscreen();
    else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
    else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
    else if (document.msExitFullscreen) document.msExitFullscreen();
  }

  function toggleFullscreen() {
    if (isFullscreen()) {
      exitFullscreen();
    } else {
      enterFullscreen();
    }
  }

  function updateFullscreenIcon() {
    var icon = btnFullscreen.querySelector('i');
    if (isFullscreen()) {
      icon.className = 'fa-solid fa-compress';
      btnFullscreen.setAttribute('aria-label', 'Exit fullscreen');
    } else {
      icon.className = 'fa-solid fa-expand';
      btnFullscreen.setAttribute('aria-label', 'Fullscreen');
    }
  }

  // Fullscreen change events
  document.addEventListener('fullscreenchange', updateFullscreenIcon);
  document.addEventListener('webkitfullscreenchange', updateFullscreenIcon);
  document.addEventListener('mozfullscreenchange', updateFullscreenIcon);
  document.addEventListener('MSFullscreenChange', updateFullscreenIcon);

  // ── Event listeners ──
  cards.forEach(function (c, i) {
    c.addEventListener('click', function () { open(i); });
  });

  btnClose.addEventListener('click', close);
  btnFullscreen.addEventListener('click', function (e) { e.stopPropagation(); toggleFullscreen(); });
  btnPrev.addEventListener('click', function (e) { e.stopPropagation(); prev(); });
  btnNext.addEventListener('click', function (e) { e.stopPropagation(); next(); });
  overlay.addEventListener('click', function (e) { if (e.target === overlay) close(); });

  document.addEventListener('keydown', function (e) {
    if (!overlay.classList.contains('open')) return;
    if (e.key === 'Escape') {
      if (isFullscreen()) {
        // Fullscreen API handles ESC automatically, but we catch it here too
        exitFullscreen();
      } else {
        close();
      }
    }
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
    if (e.key === 'f' || e.key === 'F') toggleFullscreen();
  });

  // Touch swipe
  var tx = 0;
  overlay.addEventListener('touchstart', function (e) {
    tx = e.changedTouches[0].screenX;
  }, { passive: true });
  overlay.addEventListener('touchend', function (e) {
    var d = e.changedTouches[0].screenX - tx;
    if (Math.abs(d) > 50) { d > 0 ? prev() : next(); }
  }, { passive: true });

  // Theme observer
  var themeObserver = new MutationObserver(function () {
    if (overlay.classList.contains('open')) {
      show();
    }
  });
  themeObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme']
  });

})();
