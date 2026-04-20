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
    die("Database not found at: " . htmlspecialchars($dbPath));
}

try {
    $db = new SQLite3($dbPath);

    // Check if table exists
    $tables = $db->query("SELECT name FROM sqlite_master WHERE type='table'");
    echo "<h3>Tables in database:</h3><ul>";
    while ($t = $tables->fetchArray()) {
        echo "<li>" . $t['name'] . "</li>";
    }
    echo "</ul>";

    // Show feedback
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
