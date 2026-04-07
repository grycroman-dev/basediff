<?php
/**
 * BaseDiff Telemetry
 * - Receives anonymous version + OS info
 * - Stores in SQLite database
 * - No personal data, no IP logging
 *
 * Usage from app:
 * GET /api/telemetry.php?v=2.0&os=windows
 *
 * Response:
 * {"status":"ok"}
 */

// CORS
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=utf-8');

// Allowed values
$allowedOS = ['windows', 'linux', 'macos'];

// Get parameters
$version = $_GET['v'] ?? '';
$os = strtolower($_GET['os'] ?? '');

// Validate version (e.g. 2.0, 2.1.3)
if (!preg_match('/^\d+\.\d+(\.\d+)?$/', $version)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid version']);
    exit;
}

// Validate OS
if (!in_array($os, $allowedOS)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid OS']);
    exit;
}

// Date
$date = date('Y-m-d');

// Database
$dbPath = __DIR__ . '/../data/telemetry.db';

// Create data directory if needed
if (!is_dir(dirname($dbPath))) {
    mkdir(dirname($dbPath), 0755, true);
}

try {
    $db = new SQLite3($dbPath);
    $db->busyTimeout(5000);

    $db->exec("
        CREATE TABLE IF NOT EXISTS telemetry (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            version TEXT NOT NULL,
            os TEXT NOT NULL,
            date TEXT NOT NULL
        )
    ");

    // Create index for faster queries
    $db->exec("CREATE INDEX IF NOT EXISTS idx_telemetry_date ON telemetry(date)");

    // Insert record
    $stmt = $db->prepare("
        INSERT INTO telemetry (version, os, date)
        VALUES (:version, :os, :date)
    ");
    $stmt->bindValue(':version', $version, SQLITE3_TEXT);
    $stmt->bindValue(':os', $os, SQLITE3_TEXT);
    $stmt->bindValue(':date', $date, SQLITE3_TEXT);
    $stmt->execute();
    $db->close();
} catch (Exception $e) {
    error_log("Telemetry error: " . $e->getMessage());
    http_response_code(500);
    exit(json_encode(['error' => 'Internal server error']));
}


echo json_encode(['status' => 'ok']);
