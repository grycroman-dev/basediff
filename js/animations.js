/**
 * AOS init + stat counter + back to top + navbar scroll
 */
(function () {

  // ── AOS ──
  AOS.init({
    duration: 700,
    easing: 'ease-out-cubic',
    once: true,
    offset: 80,
    disable: function () {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
  });

  // ── Footer year ──
  var yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ── Stat counter animation ──
  var counters = document.querySelectorAll('.counter');
  var animated = false;

  function animateCounters() {
    if (animated) return;
    counters.forEach(function (el) {
      var target = parseInt(el.getAttribute('data-target'), 10);
      var duration = 1500;
      var startTime = null;

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = Math.min((timestamp - startTime) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * target);
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = target;
        }
      }

      requestAnimationFrame(step);
    });
    animated = true;
  }

  var statsSection = document.querySelector('.stats');
  if (statsSection && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      });
    }, { threshold: 0.3 });
    observer.observe(statsSection);
  }

  // ── Back to top ──
  var backToTop = document.getElementById('back-to-top');

  // ── Navbar scroll effect ──
  var navbar = document.getElementById('navbar');

  // ── Combined scroll listener (better performance) ──
  window.addEventListener('scroll', function () {
    var y = window.scrollY;

    // Back to top visibility
    if (backToTop) {
      if (y > 500) {
        backToTop.classList.add('show');
      } else {
        backToTop.classList.remove('show');
      }
    }

    // Navbar scroll effect
    if (navbar) {
      if (y > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  });

  // Back to top click
  if (backToTop) {
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

})();
