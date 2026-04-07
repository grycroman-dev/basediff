<?php
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    exit(json_encode(["status" => "error", "error" => "Invalid request"]));
}

// ── Honeypot ochrana ──
if (!empty($_POST['website'])) {
    exit(json_encode(["status" => "ok"]));
}

$type    = $_POST['type']    ?? 'general';
$version = $_POST['version'] ?? 'unknown';
$os      = $_POST['os']      ?? 'unknown';
$message = $_POST['message'] ?? '';
$email   = $_POST['email']   ?? '';

if (empty(trim($message))) {
    exit(json_encode(["status" => "error", "error" => "Message is empty"]));
}

// Sanitace
$type    = htmlspecialchars(strip_tags(trim($type)));
$version = htmlspecialchars(strip_tags(trim($version)));
$os      = htmlspecialchars(strip_tags(trim($os)));
$message = htmlspecialchars(strip_tags(trim($message)));
$email   = filter_var(trim($email), FILTER_SANITIZE_EMAIL);

// Rate limiting
$ip = $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
$rateLimitFile = sys_get_temp_dir() . '/feedback_' . md5($ip) . '.txt';
$now = time();
$attempts = [];

if (file_exists($rateLimitFile)) {
    $attempts = array_filter(
        explode("\n", file_get_contents($rateLimitFile)),
        function($t) use ($now) { return $t && ($now - (int)$t) < 3600; }
    );
}

if (count($attempts) >= 5) {
    exit(json_encode(["status" => "error", "error" => "Too many requests. Please try again later."]));
}

$attempts[] = $now;
file_put_contents($rateLimitFile, implode("\n", $attempts));

// ── PHPMailer funkce ──
require_once __DIR__ . '/PHPMailer/PHPMailer.php';
require_once __DIR__ . '/PHPMailer/SMTP.php';
require_once __DIR__ . '/PHPMailer/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

function sendEmail($to, $subject, $body, $replyTo = null) {
    $mail = new PHPMailer(true);
    try {
        $mail->isSMTP();
        $mail->Host       = 'smtp.hostinger.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'noreply@basediff.com'; // ← tvůj Hostinger email
        $mail->Password   = '>8Ns|>@Ft';           // ← heslo k emailu
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;
        $mail->CharSet    = 'UTF-8';

        $mail->setFrom('noreply@basediff.com', 'BaseDiff');
        if ($replyTo) $mail->addReplyTo($replyTo);
        $mail->addAddress($to);
        $mail->Subject = $subject;
        $mail->Body    = $body;
        $mail->send();
        return true;
    } catch (Exception $e) {
        error_log("PHPMailer error: " . $mail->ErrorInfo);
        return false;
    }
}

try {
    // ── Databáze ──
    $db = new SQLite3(__DIR__ . '/../data/feedback.db');
    $db->exec("CREATE TABLE IF NOT EXISTS feedback (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        type TEXT,
        version TEXT,
        os TEXT,
        message TEXT,
        email TEXT,
        country TEXT,
        created_at TEXT
    )");

    // GeoIP
    $country = '??';
    if ($ip !== '127.0.0.1' && $ip !== '::1') {
        $geo = @file_get_contents("http://ip-api.com/json/{$ip}?fields=status,countryCode");
        if ($geo) {
            $geoData = json_decode($geo, true);
            if ($geoData && $geoData['status'] === 'success') {
                $country = $geoData['countryCode'];
            }
        }
    }

    $stmt = $db->prepare("INSERT INTO feedback (type, version, os, message, email, country, created_at)
                          VALUES (:type, :version, :os, :message, :email, :country, datetime('now'))");
    $stmt->bindValue(':type',    $type);
    $stmt->bindValue(':version', $version);
    $stmt->bindValue(':os',      $os);
    $stmt->bindValue(':message', $message);
    $stmt->bindValue(':email',   $email);
    $stmt->bindValue(':country', $country);
    $stmt->execute();
    $db->close();

    // ── Email notifikace PRO TEBE ──
    $adminSubject = '[BaseDiff Feedback] ' . ucfirst($type) . ' — v' . $version . ' (' . $os . ')';
    $adminBody    = "New feedback received!\n\n"
                  . "Type:    " . $type    . "\n"
                  . "Version: " . $version . "\n"
                  . "OS:      " . $os      . "\n"
                  . "Country: " . $country . "\n"
                  . "Email:   " . ($email ?: 'not provided') . "\n\n"
                  . "Message:\n" . $message . "\n\n"
                  . "---\nSent from basediff.com/feedback";

    sendEmail('info@basediff.com', $adminSubject, $adminBody, $email ?: null);

    // ── Email notifikace PRO UŽIVATELE ──
    if (!empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $userSubject = 'Thank you for your feedback — BaseDiff';
        $userBody    = "Hello,\n\n"
                     . "Thank you for your feedback! We have received your message and will get back to you soon.\n\n"
                     . "Your message:\n"
                     . "\"" . $message . "\"\n\n"
                     . "---\n"
                     . "BaseDiff Team\n"
                     . "https://basediff.com\n"
                     . "info@basediff.com";

        sendEmail($email, $userSubject, $userBody, 'info@basediff.com');
    }

    echo json_encode(["status" => "ok"]);

} catch (\Exception $e) {
    error_log("Feedback error: " . $e->getMessage());
    echo json_encode(["status" => "error", "error" => "Database error"]);
}
