<?php

header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");
header("Content-Type: application/json");

$db = new SQLite3('../data/downloads.db');

// Table for total counts (existing)
$db->exec("
    CREATE TABLE IF NOT EXISTS downloads (
        platform TEXT PRIMARY KEY,
        count INTEGER DEFAULT 0
    )
");

// Table for logs (if it doesn't exist)
$db->exec("
    CREATE TABLE IF NOT EXISTS download_logs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        platform TEXT NOT NULL,
        country CHAR(2) DEFAULT '??',
        created_at TEXT NOT NULL
    )
");

// ── Total counts per platform ──
$result = $db->query("SELECT platform, count FROM downloads");

$platforms = [];
$total = 0;

while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
    $platforms[$row['platform']] = (int) $row['count'];
    $total += (int) $row['count'];
}

// ── TOP 10 countries from download_logs ──
$countries = [];
$result = $db->query("
    SELECT country, COUNT(*) as count
    FROM download_logs
    GROUP BY country
    ORDER BY count DESC
    LIMIT 10
");

while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
    $countries[$row['country']] = (int) $row['count'];
}

$db->close();

echo json_encode([
    'total' => $total,
    'platforms' => $platforms,
    'countries' => $countries,
    'updated' => date('c'),
]);
