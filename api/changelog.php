<?php
header("Content-Type: application/json");
header("Cache-Control: public, max-age=3600");

$file = __DIR__ . '/../data/changelog.json';

if (!file_exists($file)) {
    http_response_code(404);
    echo json_encode(["error" => "Changelog not found"]);
    exit;
}

echo file_get_contents($file);
