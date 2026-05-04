<?php
/**
 * Internal feedback viewer
 * Usage: basediff.com/api/view-feedback.php?pw=YOUR_PASSWORD
 */

require_once __DIR__ . '/config.php';

if (($_GET['pw'] ?? '') !== FEEDBACK_VIEW_PW) {
    http_response_code(403);
    die("Unauthorized access.");
}

$dbPath = __DIR__ . '/../data/feedback.db';

if (!file_exists($dbPath)) {
    die("Database not found.");
}

try {
    $db = new SQLite3($dbPath);
    $db->busyTimeout(5000);
    $results = $db->query("SELECT * FROM feedback ORDER BY id DESC LIMIT 1000");
    
    $data = [];
    while ($row = $results->fetchArray(SQLITE3_ASSOC)) {
        $data[] = $row;
    }

    // Get unique values for filters
    $versions = array_filter(array_unique(array_column($data, 'version'))); sort($versions);
    $types = array_filter(array_unique(array_column($data, 'type'))); sort($types);
    $countries = array_filter(array_unique(array_column($data, 'country'))); sort($countries);
    $oss = array_filter(array_unique(array_column($data, 'os'))); sort($oss);

} catch (Exception $e) {
    die("Error: " . $e->getMessage());
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Feedback Admin — BaseDiff</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" />
    <script>
        (function() {
            var theme = localStorage.getItem('basediff-theme') || 
                (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
            document.documentElement.setAttribute('data-theme', theme);
        })();
    </script>
    <style>
        :root {
            --primary: #8b5cf6;
            --primary-dark: #7c3aed;
            --primary-rgb: 139, 92, 246;
            --font: 'Inter', system-ui, sans-serif;
            --radius: 12px;
            --transition: all 0.25s ease;
        }

        [data-theme="dark"] {
            --bg: #09090b;
            --bg2: #0f0f13;
            --card: rgba(17, 17, 20, 0.7);
            --border: rgba(255, 255, 255, 0.08);
            --text: #fafafa;
            --text2: #b4b4bc;
            --text3: #71717a;
            --row-hover: rgba(255, 255, 255, 0.03);
        }

        [data-theme="light"] {
            --bg: #f8fafc;
            --bg2: #f1f5f9;
            --card: #ffffff;
            --border: rgba(15, 23, 42, 0.1);
            --text: #0f172a;
            --text2: #334155;
            --text3: #64748b;
            --row-hover: rgba(15, 23, 42, 0.02);
        }

        body {
            font-family: var(--font);
            background: var(--bg);
            color: var(--text);
            margin: 0;
            padding: 0;
            line-height: 1.5;
            min-height: 100vh;
        }

        .container {
            max-width: 100%;
            padding: 1.5rem;
        }

        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
        }

        h1 {
            font-size: 1.25rem;
            font-weight: 800;
            margin: 0;
            display: flex;
            align-items: center;
            gap: 0.75rem;
            letter-spacing: -0.02em;
        }

        h1 i { color: var(--primary); }

        .header-actions {
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .theme-toggle {
            width: 36px;
            height: 36px;
            border-radius: 8px;
            background: var(--card);
            border: 1px solid var(--border);
            color: var(--text);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: var(--transition);
        }

        .theme-toggle:hover {
            border-color: var(--primary);
            color: var(--primary);
        }

        [data-theme="dark"] .theme-toggle .fa-moon { display: none; }
        [data-theme="light"] .theme-toggle .fa-sun { display: none; }

        /* FILTERS */
        .controls {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            margin-bottom: 1.5rem;
        }

        .filters {
            display: flex;
            flex-wrap: wrap;
            gap: 1.25rem;
            background: var(--card);
            padding: 1.25rem;
            border-radius: var(--radius);
            border: 1px solid var(--border);
            align-items: flex-end;
        }

        .filter-group {
            display: flex;
            flex-direction: column;
            gap: 0.4rem;
            flex-shrink: 0;
        }

        .filter-group.flex-grow {
            flex-grow: 1;
            min-width: 200px;
        }

        .filter-group label {
            font-size: 0.7rem;
            font-weight: 700;
            text-transform: uppercase;
            color: var(--text3);
            letter-spacing: 0.05em;
        }

        select, input {
            background: var(--bg);
            border: 1px solid var(--border);
            color: var(--text);
            padding: 0.5rem 0.75rem;
            border-radius: 6px;
            font-family: var(--font);
            font-size: 0.85rem;
            outline: none;
            transition: border-color 0.2s;
            width: 100%;
            box-sizing: border-box;
        }

        select { min-width: 130px; cursor: pointer; }

        select:focus, input:focus {
            border-color: var(--primary);
        }

        .search-wrapper {
            position: relative;
            width: 100%;
        }

        #filter-search {
            padding-right: 2.5rem;
        }

        .search-clear {
            position: absolute;
            right: 0.75rem;
            top: 50%;
            transform: translateY(-50%);
            background: none;
            border: none;
            color: var(--text3);
            cursor: pointer;
            padding: 4px;
            display: none;
            font-size: 0.8rem;
            transition: color 0.2s;
        }

        .search-clear:hover { color: var(--text); }
        .search-wrapper.has-text .search-clear { display: block; }

        /* PAGINATION */
        .pagination-bar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: var(--card);
            padding: 0.75rem 1.25rem;
            border-radius: var(--radius);
            border: 1px solid var(--border);
        }

        .pagination-controls {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .btn-page {
            background: var(--bg);
            border: 1px solid var(--border);
            color: var(--text);
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 6px;
            cursor: pointer;
            font-size: 0.85rem;
            transition: all 0.2s;
        }

        .btn-page:hover:not(:disabled) {
            border-color: var(--primary);
            color: var(--primary);
        }

        .btn-page.active {
            background: var(--primary);
            color: #fff;
            border-color: var(--primary);
        }

        .btn-page:disabled {
            opacity: 0.3;
            cursor: not-allowed;
        }

        /* TABLE */
        .table-container {
            background: var(--card);
            border-radius: var(--radius);
            border: 1px solid var(--border);
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0,0,0,0.05);
        }

        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 0.85rem;
            text-align: left;
        }

        th {
            background: rgba(255,255,255,0.02);
            padding: 0.85rem 1rem;
            font-weight: 700;
            color: var(--text2);
            border-bottom: 1px solid var(--border);
            white-space: nowrap;
        }

        [data-theme="light"] th {
            background: rgba(15,23,42,0.02);
        }

        td {
            padding: 1rem;
            border-bottom: 1px solid var(--border);
            vertical-align: top;
        }

        tr:last-child td { border-bottom: none; }

        tr:hover td { background: var(--row-hover); }

        .col-id { color: var(--text3); width: 60px; font-family: monospace; }
        .col-type { width: 100px; }
        .col-ver { width: 80px; }
        .col-os { width: 110px; }
        .col-country { width: 80px; }
        .col-date { width: 160px; white-space: nowrap; color: var(--text2); }
        .col-message { min-width: 300px; line-height: 1.6; }
        .col-email { width: 200px; }

        .type-badge {
            display: inline-block;
            padding: 0.2rem 0.5rem;
            border-radius: 4px;
            font-size: 0.6rem;
            font-weight: 800;
            text-transform: uppercase;
        }

        .type-general { background: rgba(var(--primary-rgb), 0.1); color: var(--primary); }
        .type-bug { background: rgba(248, 113, 113, 0.1); color: #ef4444; }
        .type-feature { background: rgba(34, 211, 238, 0.1); color: #0891b2; }

        .os-tag { display: flex; align-items: center; gap: 0.5rem; }
        .os-tag i { width: 16px; text-align: center; opacity: 0.7; font-size: 0.9rem; }
        .os-tag i.fa-circle-question { opacity: 0.4; }

        .email-link { color: var(--primary); text-decoration: none; }
        .email-link:hover { text-decoration: underline; }

        .flag { width: 16px; height: 11px; object-fit: cover; border-radius: 1px; vertical-align: middle; margin-right: 4px; }

        .empty-state { padding: 4rem; text-align: center; color: var(--text3); }

        .msg-text { white-space: pre-wrap; word-break: break-word; }

        .hidden { display: none; }

        .stats-summary { font-size: 0.8rem; color: var(--text3); }

        mark {
            background: #fef08a;
            color: #161616;
            padding: 0 2px;
            border-radius: 2px;
        }
        [data-theme="dark"] mark {
            background: #eab308;
            color: #000;
        }

        @media (max-width: 1024px) {
            .table-container { overflow-x: auto; }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1><i class="fa-solid fa-comment-dots"></i> Feedback Admin</h1>
            <div class="header-actions">
                <button class="theme-toggle" id="theme-toggle">
                    <i class="fa-solid fa-sun"></i>
                    <i class="fa-solid fa-moon"></i>
                </button>
            </div>
        </header>

        <div class="controls">
            <div class="filters">
                <div class="filter-group flex-grow">
                    <label>Search</label>
                    <div class="search-wrapper" id="search-wrapper">
                        <input type="text" id="filter-search" placeholder="Search messages or email...">
                        <button class="search-clear" id="search-clear" title="Clear search">
                            <i class="fa-solid fa-circle-xmark"></i>
                        </button>
                    </div>
                </div>
                <div class="filter-group">
                    <label>Type</label>
                    <select id="filter-type">
                        <option value="">All Types</option>
                        <?php foreach ($types as $t): ?>
                            <option value="<?php echo htmlspecialchars($t); ?>"><?php echo htmlspecialchars($t); ?></option>
                        <?php endforeach; ?>
                    </select>
                </div>
                <div class="filter-group">
                    <label>Version</label>
                    <select id="filter-ver">
                        <option value="">All Versions</option>
                        <?php foreach ($versions as $v): ?>
                            <option value="<?php echo htmlspecialchars($v); ?>"><?php echo htmlspecialchars($v); ?></option>
                        <?php endforeach; ?>
                    </select>
                </div>
                <div class="filter-group">
                    <label>OS</label>
                    <select id="filter-os">
                        <option value="">All OS</option>
                        <?php foreach ($oss as $o): ?>
                            <option value="<?php echo htmlspecialchars($o); ?>"><?php echo htmlspecialchars($o); ?></option>
                        <?php endforeach; ?>
                    </select>
                </div>
                <div class="filter-group">
                    <label>Country</label>
                    <select id="filter-country">
                        <option value="">All Countries</option>
                        <?php foreach ($countries as $c): ?>
                            <option value="<?php echo htmlspecialchars($c); ?>"><?php echo htmlspecialchars($c); ?></option>
                        <?php endforeach; ?>
                    </select>
                </div>
            </div>

            <div class="pagination-bar">
                <div class="filter-group" style="flex-direction:row; align-items:center; gap:0.75rem;">
                    <label>Rows per page:</label>
                    <select id="page-size" style="min-width: 80px; padding: 0.3rem 0.5rem; width: auto;">
                        <option value="10">10</option>
                        <option value="25" selected>25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                        <option value="0">All</option>
                    </select>
                </div>

                <div class="pagination-controls" id="pagination">
                    <!-- Dynamic -->
                </div>

                <div class="stats-summary" id="stats-count">
                    Loading...
                </div>
            </div>
        </div>

        <div class="table-container">
            <table id="feedback-table">
                <thead>
                    <tr>
                        <th class="col-id">ID</th>
                        <th class="col-type">Type</th>
                        <th class="col-ver">Version</th>
                        <th class="col-os">OS</th>
                        <th class="col-country">Country</th>
                        <th class="col-message">Message</th>
                        <th class="col-email">Email</th>
                        <th class="col-date">Date</th>
                    </tr>
                </thead>
                <tbody id="table-body">
                    <?php foreach ($data as $row): ?>
                        <tr class="feedback-row" 
                            data-type="<?php echo htmlspecialchars($row['type'] ?? ''); ?>"
                            data-ver="<?php echo htmlspecialchars($row['version'] ?? ''); ?>"
                            data-os="<?php echo htmlspecialchars($row['os'] ?? ''); ?>"
                            data-country="<?php echo htmlspecialchars($row['country'] ?? ''); ?>">
                            <td class="col-id">#<?php echo htmlspecialchars($row['id'] ?? ''); ?></td>
                            <td class="col-type">
                                <span class="type-badge type-<?php echo strtolower($row['type'] ?? 'general'); ?>">
                                    <?php echo htmlspecialchars($row['type'] ?? 'General'); ?>
                                </span>
                            </td>
                            <td class="col-ver">v<?php echo htmlspecialchars($row['version'] ?? ''); ?></td>
                            <td class="col-os">
                                <div class="os-tag">
                                    <?php 
                                        $os = strtolower($row['os'] ?? '');
                                        if (strpos($os, 'win') !== false) $osClass = 'fa-brands fa-windows';
                                        else if (strpos($os, 'mac') !== false || strpos($os, 'apple') !== false) $osClass = 'fa-brands fa-apple';
                                        else if (strpos($os, 'lin') !== false) $osClass = 'fa-brands fa-linux';
                                        else if (strpos($os, 'android') !== false) $osClass = 'fa-brands fa-android';
                                        else $osClass = 'fa-solid fa-circle-question';
                                    ?>
                                    <i class="<?php echo $osClass; ?>"></i>
                                    <span><?php echo htmlspecialchars($row['os'] ?? 'Unknown'); ?></span>
                                </div>
                            </td>
                            <td class="col-country">
                                <?php if (!empty($row['country']) && $row['country'] !== '??'): ?>
                                    <img src="https://flagcdn.com/24x18/<?php echo strtolower($row['country']); ?>.png" class="flag">
                                    <?php echo htmlspecialchars($row['country']); ?>
                                <?php else: ?>
                                    <span style="opacity:0.3">—</span>
                                <?php endif; ?>
                            </td>
                            <td class="col-message">
                                <div class="msg-text"><?php echo htmlspecialchars($row['message'] ?? ''); ?></div>
                            </td>
                            <td class="col-email">
                                <?php if (!empty($row['email'])): ?>
                                    <a href="mailto:<?php echo htmlspecialchars($row['email']); ?>" class="email-link">
                                        <?php echo htmlspecialchars($row['email']); ?>
                                    </a>
                                <?php else: ?>
                                    <span style="opacity:0.3">Anonymous</span>
                                <?php endif; ?>
                            </td>
                            <td class="col-date">
                                <i class="fa-regular fa-calendar-alt" style="margin-right: 5px; opacity: 0.5;"></i>
                                <?php echo htmlspecialchars($row['created_at'] ?? ''); ?>
                            </td>
                        </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
            <div id="no-results" class="empty-state hidden">
                <i class="fa-solid fa-magnifying-glass fa-3x" style="opacity:0.1; margin-bottom:1rem;"></i>
                <p>No records found matching the filters.</p>
            </div>
        </div>
    </div>

    <script>
        // Theme toggle
        document.getElementById('theme-toggle').addEventListener('click', function() {
            var html = document.documentElement;
            var current = html.getAttribute('data-theme');
            var next = current === 'dark' ? 'light' : 'dark';
            html.setAttribute('data-theme', next);
            localStorage.setItem('basediff-theme', next);
        });

        // State
        var currentPage = 1;
        var allRows = Array.from(document.querySelectorAll('.feedback-row'));
        var filteredRows = [...allRows];

        // Store original text
        allRows.forEach(row => {
            row._originalMsg = row.querySelector('.msg-text').innerHTML;
            var emailLink = row.querySelector('.email-link');
            row._originalEmail = emailLink ? emailLink.innerHTML : '';
        });

        // Elements
        var searchInput = document.getElementById('filter-search');
        var searchWrapper = document.getElementById('search-wrapper');
        var searchClear = document.getElementById('search-clear');
        var typeSelect = document.getElementById('filter-type');
        var verSelect = document.getElementById('filter-ver');
        var osSelect = document.getElementById('filter-os');
        var countrySelect = document.getElementById('filter-country');
        var pageSizeSelect = document.getElementById('page-size');
        var paginationEl = document.getElementById('pagination');
        var statsCount = document.getElementById('stats-count');
        var noResults = document.getElementById('no-results');

        function highlight(text, term) {
            if (!term) return text;
            var regex = new RegExp('(' + term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
            return text.replace(regex, '<mark>$1</mark>');
        }

        function updateDisplay() {
            var pageSize = parseInt(pageSizeSelect.value);
            if (pageSize === 0) pageSize = filteredRows.length;
            
            var totalPages = Math.ceil(filteredRows.length / pageSize) || 1;
            if (currentPage > totalPages) currentPage = totalPages;

            var start = (currentPage - 1) * pageSize;
            var end = start + pageSize;

            allRows.forEach(row => row.classList.add('hidden'));
            var pageRows = filteredRows.slice(start, end);
            pageRows.forEach(row => row.classList.remove('hidden'));

            statsCount.textContent = 'Showing ' + (filteredRows.length > 0 ? (start + 1) : 0) + '–' + Math.min(end, filteredRows.length) + ' of ' + filteredRows.length;
            noResults.classList.toggle('hidden', filteredRows.length > 0);

            renderPagination(totalPages);
        }

        function renderPagination(totalPages) {
            paginationEl.innerHTML = '';
            if (totalPages <= 1) return;

            var btnPrev = document.createElement('button');
            btnPrev.className = 'btn-page';
            btnPrev.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';
            btnPrev.disabled = currentPage === 1;
            btnPrev.onclick = () => { currentPage--; updateDisplay(); };
            paginationEl.appendChild(btnPrev);

            var start = Math.max(1, currentPage - 2);
            var end = Math.min(totalPages, start + 4);
            if (end === totalPages) start = Math.max(1, end - 4);

            for (let i = start; i <= end; i++) {
                var btn = document.createElement('button');
                btn.className = 'btn-page' + (i === currentPage ? ' active' : '');
                btn.textContent = i;
                btn.onclick = () => { currentPage = i; updateDisplay(); };
                paginationEl.appendChild(btn);
            }

            var btnNext = document.createElement('button');
            btnNext.className = 'btn-page';
            btnNext.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';
            btnNext.disabled = currentPage === totalPages;
            btnNext.onclick = () => { currentPage++; updateDisplay(); };
            paginationEl.appendChild(btnNext);
        }

        function filterRows() {
            var search = searchInput.value.toLowerCase();
            var type = typeSelect.value;
            var ver = verSelect.value;
            var os = osSelect.value;
            var country = countrySelect.value;

            searchWrapper.classList.toggle('has-text', search.length > 0);

            filteredRows = allRows.filter(row => {
                var rowType = row.getAttribute('data-type');
                var rowVer = row.getAttribute('data-ver');
                var rowOs = row.getAttribute('data-os');
                var rowCountry = row.getAttribute('data-country');
                var rowText = row._originalMsg.toLowerCase();
                var rowEmail = row._originalEmail.toLowerCase();

                var matchesSearch = !search || rowText.includes(search) || rowEmail.includes(search);
                var matchesType = !type || rowType === type;
                var matchesVer = !ver || rowVer === ver;
                var matchesOs = !os || rowOs === os;
                var matchesCountry = !country || rowCountry === country;

                if (matchesSearch && matchesType && matchesVer && matchesOs && matchesCountry) {
                    row.querySelector('.msg-text').innerHTML = highlight(row._originalMsg, search);
                    var emailLink = row.querySelector('.email-link');
                    if (emailLink) emailLink.innerHTML = highlight(row._originalEmail, search);
                    return true;
                }
                return false;
            });

            currentPage = 1;
            updateDisplay();
        }

        [searchInput, typeSelect, verSelect, osSelect, countrySelect].forEach(el => {
            el.addEventListener('input', filterRows);
        });
        
        searchClear.addEventListener('click', () => {
            searchInput.value = '';
            filterRows();
            searchInput.focus();
        });

        pageSizeSelect.addEventListener('change', () => { currentPage = 1; updateDisplay(); });

        updateDisplay();
    </script>
</body>
</html>
