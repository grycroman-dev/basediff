/**
 * Stats page — loads download + telemetry data
 */
(function () {

  // Footer year
  var yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Format number
  function fmt(n) {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '\u00A0');
  }

  // Animated count
  function animateValue(el, target) {
    var duration = 1200;
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

  // ── Country code to name mapping ──
  var COUNTRY_NAMES = {
    'AF': 'Afghanistan', 'AX': 'Åland Islands', 'AL': 'Albania', 'DZ': 'Algeria',
    'AS': 'American Samoa', 'AD': 'Andorra', 'AO': 'Angola', 'AI': 'Anguilla',
    'AQ': 'Antarctica', 'AG': 'Antigua and Barbuda', 'AR': 'Argentina', 'AM': 'Armenia',
    'AW': 'Aruba', 'AU': 'Australia', 'AT': 'Austria', 'AZ': 'Azerbaijan',
    'BS': 'Bahamas', 'BH': 'Bahrain', 'BD': 'Bangladesh', 'BB': 'Barbados',
    'BY': 'Belarus', 'BE': 'Belgium', 'BZ': 'Belize', 'BJ': 'Benin',
    'BM': 'Bermuda', 'BT': 'Bhutan', 'BO': 'Bolivia', 'BA': 'Bosnia and Herzegovina',
    'BW': 'Botswana', 'BV': 'Bouvet Island', 'BR': 'Brazil', 'IO': 'British Indian Ocean Territory',
    'BN': 'Brunei', 'BG': 'Bulgaria', 'BF': 'Burkina Faso', 'BI': 'Burundi',
    'CV': 'Cape Verde', 'KH': 'Cambodia', 'CM': 'Cameroon', 'CA': 'Canada',
    'KY': 'Cayman Islands', 'CF': 'Central African Republic', 'TD': 'Chad', 'CL': 'Chile',
    'CN': 'China', 'CX': 'Christmas Island', 'CC': 'Cocos Islands', 'CO': 'Colombia',
    'KM': 'Comoros', 'CG': 'Congo', 'CD': 'Congo (DRC)', 'CK': 'Cook Islands',
    'CR': 'Costa Rica', 'CI': 'Côte d\'Ivoire', 'HR': 'Croatia', 'CU': 'Cuba',
    'CW': 'Curaçao', 'CY': 'Cyprus', 'CZ': 'Czech Republic', 'DK': 'Denmark',
    'DJ': 'Djibouti', 'DM': 'Dominica', 'DO': 'Dominican Republic', 'EC': 'Ecuador',
    'EG': 'Egypt', 'SV': 'El Salvador', 'GQ': 'Equatorial Guinea', 'ER': 'Eritrea',
    'EE': 'Estonia', 'SZ': 'Eswatini', 'ET': 'Ethiopia', 'FK': 'Falkland Islands',
    'FO': 'Faroe Islands', 'FJ': 'Fiji', 'FI': 'Finland', 'FR': 'France',
    'GF': 'French Guiana', 'PF': 'French Polynesia', 'GA': 'Gabon', 'GM': 'Gambia',
    'GE': 'Georgia', 'DE': 'Germany', 'GH': 'Ghana', 'GI': 'Gibraltar',
    'GR': 'Greece', 'GL': 'Greenland', 'GD': 'Grenada', 'GP': 'Guadeloupe',
    'GU': 'Guam', 'GT': 'Guatemala', 'GG': 'Guernsey', 'GN': 'Guinea',
    'GW': 'Guinea-Bissau', 'GY': 'Guyana', 'HT': 'Haiti', 'HN': 'Honduras',
    'HK': 'Hong Kong', 'HU': 'Hungary', 'IS': 'Iceland', 'IN': 'India',
    'ID': 'Indonesia', 'IR': 'Iran', 'IQ': 'Iraq', 'IE': 'Ireland',
    'IM': 'Isle of Man', 'IL': 'Israel', 'IT': 'Italy', 'JM': 'Jamaica',
    'JP': 'Japan', 'JE': 'Jersey', 'JO': 'Jordan', 'KZ': 'Kazakhstan', '??': 'Unknown'
  };

  // ── Updated buildBarChart function with tooltips ──
  function buildBarChart(containerId, data) {
    var container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';

    var max = 0;
    var items = [];
    for (var key in data) {
      items.push({ label: key, value: data[key] });
      if (data[key] > max) max = data[key];
    }

    if (items.length === 0) {
      container.innerHTML = '<div class="stats-empty"><i class="fa-solid fa-chart-bar"></i>No data yet</div>';
      return;
    }

    items.forEach(function (item) {
      var pct = max > 0 ? (item.value / max * 100) : 0;

      // Flag and tooltip with country name
      var displayLabel = item.label;
      var tooltipText = COUNTRY_NAMES[item.label] || item.label;

      if (item.label.length === 2) {
        var flagUrl = (item.label === '??')
          ? 'https://flagcdn.com/24x18/un.png'
          : 'https://flagcdn.com/24x18/' + item.label.toLowerCase() + '.png';

        displayLabel = '<span class="stats-country-wrap" data-tooltip="' + tooltipText + '">' +
          '<img src="' + flagUrl + '" class="stats-flag" alt="' + item.label + '">' +
          '<span>' + item.label + '</span>' +
          '</span>';
      }

      var row = document.createElement('div');
      row.className = 'stats-bar-row';
      row.innerHTML =
        '<div class="stats-bar-label">' + displayLabel + '</div>' +
        '<div class="stats-bar-track"><div class="stats-bar-fill" style="width:' + pct + '%"></div></div>' +
        '<div class="stats-bar-value">' + fmt(item.value) + '</div>';
      container.appendChild(row);
    });
  }



  // Build daily chart
  function buildDailyChart(containerId, data) {
    var container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';

    var keys = Object.keys(data).sort();
    if (keys.length === 0) {
      container.innerHTML = '<div class="stats-empty"><i class="fa-solid fa-chart-bar"></i>No data yet</div>';
      return;
    }

    var max = 0;
    keys.forEach(function (k) { if (data[k] > max) max = data[k]; });

    keys.forEach(function (k) {
      var pct = max > 0 ? (data[k] / max * 100) : 0;
      var bar = document.createElement('div');
      bar.className = 'stats-daily-bar';
      bar.style.height = Math.max(pct, 1) + '%';
      bar.innerHTML = '<div class="tooltip">' + k + ': ' + data[k] + '</div>';
      container.appendChild(bar);
    });
  }

  // ── Load download stats (cache-busted) ──
  fetch('/api/downloads.php?t=' + Date.now())
    .then(function (r) { return r.json(); })
    .then(function (data) {
      var el;

      // Total sum (already in JSON from PHP)
      el = document.getElementById('stats-dl-total');
      if (el) animateValue(el, data.total || 0);

      // Windows sum (all versions: x64, x86, portable x64, portable x86)
      var winTotal = (data.platforms['win64'] || 0) +
        (data.platforms['win32'] || 0) +
        (data.platforms['win64-portable'] || 0) +
        (data.platforms['win32-portable'] || 0);
      el = document.getElementById('stats-dl-windows');
      if (el) animateValue(el, winTotal);

      // Linux sum (AppImage + Portable)
      var linuxTotal = (data.platforms['linux'] || 0) + (data.platforms['linux-portable'] || 0);
      el = document.getElementById('stats-dl-linux');
      if (el) animateValue(el, linuxTotal);

      // macOS (portable only)
      el = document.getElementById('stats-dl-macos');
      if (el) animateValue(el, data.platforms['macos-portable'] || 0);

      // Portable total (all portable versions across OS)
      var portableTotal = (data.platforms['win64-portable'] || 0) +
        (data.platforms['win32-portable'] || 0) +
        (data.platforms['linux-portable'] || 0) +
        (data.platforms['macos-portable'] || 0);
      el = document.getElementById('stats-dl-portable');
      if (el) animateValue(el, portableTotal);

      // Bar chart - Map keys to chart labels
      var chartData = {};
      if (data.platforms['win64']) chartData['Windows x64'] = data.platforms['win64'];
      if (data.platforms['win32']) chartData['Windows x86'] = data.platforms['win32'];
      if (data.platforms['linux']) chartData['Linux AppImage'] = data.platforms['linux'];
      if (data.platforms['win64-portable']) chartData['Win x64 Portable'] = data.platforms['win64-portable'];
      if (data.platforms['win32-portable']) chartData['Win x86 Portable'] = data.platforms['win32-portable'];
      if (data.platforms['linux-portable']) chartData['Linux Portable'] = data.platforms['linux-portable'];
      if (data.platforms['macos-portable']) chartData['macOS Portable'] = data.platforms['macos-portable'];

      buildBarChart('dl-bar-chart', chartData);
      // ── TOP 10 countries ──
      if (data.countries) {
        buildBarChart('countries-bar-chart', data.countries);
      }
    })


  // ── Load telemetry stats ──
  fetch('/api/telemetry-stats.php?t=' + Date.now() + '&days=30')
    .then(function (r) { return r.json(); })
    .then(function (data) {
      var el;

      el = document.getElementById('stats-tel-total');
      if (el) animateValue(el, data.total || 0);

      el = document.getElementById('stats-tel-windows');
      if (el) animateValue(el, data.platforms.windows || 0);

      el = document.getElementById('stats-tel-linux');
      if (el) animateValue(el, data.platforms.linux || 0);

      el = document.getElementById('stats-tel-macos');
      if (el) animateValue(el, data.platforms.macos || 0);

      // Version chart
      buildBarChart('version-bar-chart', data.versions || {});

      // Daily chart
      buildDailyChart('daily-chart', data.daily || {});
    })
    .catch(function () {
      document.getElementById('version-bar-chart').innerHTML =
        '<div class="stats-empty"><i class="fa-solid fa-circle-exclamation"></i>Could not load telemetry data</div>';
    });

})();
