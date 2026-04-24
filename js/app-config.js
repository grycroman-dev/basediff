/**
 * BaseDiff global configuration
 * Automatically loads latest version info from version.json
 */

window.BaseDiffConfig = {
  version: "2.0.5",
  releaseDateText: "April 2026",

  init: async function () {
    try {
      const response = await fetch('/version.json?t=' + Date.now());
      const data = await response.json();

      this.version = data.latest_version;
      this.releaseDateText = data.release_date_text;

      // Pokud existuje setLang (i18n stránky), použijeme ho
      if (window.setLang) {
        const currentLang = localStorage.getItem('basediff-lang') || 'en';
        window.setLang(currentLang, true);
      }

      // Vždy aktualizujeme nav-version (pro stránky bez setLang)
      var elNav = document.getElementById('nav-version');
      if (elNav) elNav.textContent = 'v' + this.version;

    } catch (e) {
      console.error("Could not load version info", e);
    }
  }
};

window.BaseDiffConfig.init();
