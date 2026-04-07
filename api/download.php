<?php

$files = [
    "linux-portable" => "../downloads/BaseDiff_Linux-x86_64_Portable.tar.gz",
    "macos-portable" => "../downloads/BaseDiff_MacOS-x64_Portable.zip",
    "win64-portable" => "../downloads/BaseDiff_Win-x64_Portable.zip",
    "win32-portable" => "../downloads/BaseDiff_Win-x86_Portable.zip",
    "linux" => "../downloads/BaseDiffSetup_Linux-x86_64.AppImage",
    "win64" => "../downloads/BaseDiffSetup_Win-x64.exe",
    "win32" => "../downloads/BaseDiffSetup_Win-x86.exe"
];

$platform = $_GET['file'] ?? "";

if (!isset($files[$platform])) {
    http_response_code(404);
    exit("Unknown file");
}

// ── Zjištění země ──
$ip = $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
$country = '??';
if ($ip !== '127.0.0.1' && $ip !== '::1') {
    $geo_json = @file_get_contents("http://ip-api.com/json/{$ip}?fields=status,countryCode");
    if ($geo_json) {
        $geo_data = json_decode($geo_json, true);
        if ($geo_data && isset($geo_data['status']) && $geo_data['status'] === 'success') {
            $country = $geo_data['countryCode'];
        }
    }
}

try {
    // ── Databáze ──
    $db = new SQLite3(__DIR__ . '/../data/downloads.db');
    $db->busyTimeout(5000); // Wait up to 5s if locked

    // Tabulka pro celkové počty
    $db->exec("CREATE TABLE IF NOT EXISTS downloads (platform TEXT PRIMARY KEY, count INTEGER DEFAULT 0)");

    // Tabulka pro logy s detaily
    $db->exec("CREATE TABLE IF NOT EXISTS download_logs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        platform TEXT NOT NULL,
        country CHAR(2) DEFAULT '??',
        created_at TEXT NOT NULL
    )");

    // Inkrementuj celkový počet (Prepared Statement!)
    $stmt1 = $db->prepare("
        INSERT INTO downloads (platform, count)
        VALUES (:platform, 1)
        ON CONFLICT(platform)
        DO UPDATE SET count = count + 1
    ");
    $stmt1->bindValue(':platform', $platform, SQLITE3_TEXT);
    $stmt1->execute();

    // Zaloguj detail
    $stmt2 = $db->prepare("
        INSERT INTO download_logs (platform, country, created_at)
        VALUES (:platform, :country, datetime('now'))
    ");
    $stmt2->bindValue(':platform', $platform, SQLITE3_TEXT);
    $stmt2->bindValue(':country', $country, SQLITE3_TEXT);
    $stmt2->execute();

    $db->close();
} catch (Exception $e) {
    // Slapped silently to ensure file download still starts
    error_log("Download track error: " . $e->getMessage());
}


// ── Odeslání souboru ──
$file = $files[$platform];

header("Cache-Control: no-cache, no-store, must-revalidate");
header("Pragma: no-cache");
header("Expires: 0");
header("Content-Type: application/octet-stream");
header("Content-Disposition: attachment; filename=\"" . basename($file) . "\"");
readfile($file);

exit;
