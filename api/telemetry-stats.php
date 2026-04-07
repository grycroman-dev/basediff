<?php
/**
 * BaseDiff Telemetry Stats
 * Returns aggregated anonymous statistics
 *
 * GET /api/telemetry-stats.php
 * GET /api/telemetry-stats.php?days=30
 */
 
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=utf-8');
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");

$dbPath = __DIR__ . '/../data/telemetry.db';

if (!file_exists($dbPath)) {
    echo json_encode([
        'total' => 0,
        'versions' => [],
        'platforms' => [],
        'daily' => []
    ]);
    exit;
}

$db = new SQLite3($dbPath);

// How many days to look back (default 30)
$days = intval($_GET['days'] ?? 30);
if ($days < 1 || $days > 365) $days = 30;

$since = date('Y-m-d', strtotime("-{$days} days"));

// Total launches
$result = $db->querySingle(
    "SELECT COUNT(*) FROM telemetry WHERE date >= '$since'"
);
$total = (int)$result;

// Total all time
$totalAllTime = (int)$db->querySingle(
    "SELECT COUNT(*) FROM telemetry"
);

// Per version
$versions = [];
$result = $db->query(
    "SELECT version, COUNT(*) as cnt
     FROM telemetry
     WHERE date >= '$since'
     GROUP BY version
     ORDER BY cnt DESC"
);
while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
    $versions[$row['version']] = (int)$row['cnt'];
}

// Per OS
$platforms = [];
$result = $db->query(
    "SELECT os, COUNT(*) as cnt
     FROM telemetry
     WHERE date >= '$since'
     GROUP BY os
     ORDER BY cnt DESC"
);
while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
    $platforms[$row['os']] = (int)$row['cnt'];
}

// Daily counts (last N days)
$daily = [];
$result = $db->query(
    "SELECT date, COUNT(*) as cnt
     FROM telemetry
     WHERE date >= '$since'
     GROUP BY date
     ORDER BY date ASC"
);
while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
    $daily[$row['date']] = (int)$row['cnt'];
}

$db->close();

echo json_encode([
    'period_days' => $days,
    'total' => $total,
    'total_all_time' => $totalAllTime,
    'versions' => $versions,
    'platforms' => $platforms,
    'daily' => $daily
], JSON_PRETTY_PRINT);
