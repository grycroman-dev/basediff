/**
 * Theme toggle (dark/light)
 * Saves preference to localStorage, respects system preference.
 */
(function () {
  var KEY = 'basediff-theme';
  var html = document.documentElement;
  var toggle = document.getElementById('theme-toggle');

  function getInitial() {
    var saved = localStorage.getItem(KEY);
    if (saved) return saved;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches
      ? 'light' : 'dark';
  }

  function apply(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem(KEY, theme);
  }

  apply(getInitial());

  if (toggle) {
    toggle.addEventListener('click', function () {
      apply(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    });
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
    if (!localStorage.getItem(KEY)) apply(e.matches ? 'dark' : 'light');
  });
})();
