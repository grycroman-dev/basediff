/**
 * Mobile hamburger menu with full functionality.
 */
(function () {
  var hamburger = document.getElementById('nav-hamburger');
  var menu = document.getElementById('mobile-menu');
  var icon = document.getElementById('hamburger-icon');
  if (!hamburger || !menu) return;

  var open = false;

  function toggle() {
    open = !open;
    menu.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', String(open));
    icon.classList.toggle('fa-bars', !open);
    icon.classList.toggle('fa-xmark', open);
  }

  function close() {
    if (!open) return;
    open = false;
    menu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    icon.classList.add('fa-bars');
    icon.classList.remove('fa-xmark');
  }

  hamburger.addEventListener('click', function (e) { e.stopPropagation(); toggle(); });
  menu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', close); });
  document.addEventListener('click', function (e) {
    if (open && !menu.contains(e.target) && !hamburger.contains(e.target)) close();
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
})();
