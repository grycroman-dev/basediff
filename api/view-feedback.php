<?php
// ZABEZPEČENÍ: Přidej jednoduché heslo do URL, aby ti tam nikdo nekoukal
// basediff.com/api/view-feedback.php?pw=mojetajneheslo123

if (($_GET['pw'] ?? '') !== 'mojetajneheslo123') {
    die("Unauthorized");
}

// Zkusíme najít databázi na více místech
$paths = [
    __DIR__ . '/../../data/feedback.db',
    __DIR__ . '/../data/feedback.db',
    dirname(__DIR__) . '/data/feedback.db',
];

$dbPath = null;
foreach ($paths as $path) {
    if (file_exists($path)) {
        $dbPath = $path;
        break;
    }
}

if (!$dbPath) {
    // Ukáže nám kde PHP hledá soubor
    die("Database not found. Tried:<br>" . implode("<br>", $paths));
}

try {
    $db = new SQLite3($dbPath);
    
    // Zkontroluj zda tabulka existuje
    $tables = $db->query("SELECT name FROM sqlite_master WHERE type='table'");
    echo "<h3>Tables in database:</h3><ul>";
    while ($t = $tables->fetchArray()) {
        echo "<li>" . $t['name'] . "</li>";
    }
    echo "</ul>";

    // Zobraz feedback
    $results = $db->query("SELECT * FROM feedback ORDER BY id DESC LIMIT 50");
    echo "<h2>Feedback List</h2>";
    echo "<table border='1' cellpadding='5' style='border-collapse:collapse; font-family:sans-serif; font-size:13px;'>";
    echo "<tr style='background:#333;color:#fff'><th>ID</th><th>Type</th><th>Ver</th><th>OS</th><th>Message</th><th>Email</th><th>Country</th><th>Date</th></tr>";

    while ($row = $results->fetchArray(SQLITE3_ASSOC)) {
        echo "<tr>";
        foreach ($row as $val) {
            echo "<td style='max-width:300px'>" . htmlspecialchars($val ?? '') . "</td>";
        }
        echo "</tr>";
    }
    echo "</table>";

} catch (Exception $e) {
    die("Error: " . $e->getMessage());
}
