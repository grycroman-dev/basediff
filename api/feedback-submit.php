<?php
header("Content-Type: application/json");

// ── Configuration ──
if (file_exists(__DIR__ . '/config.php')) {
    require_once __DIR__ . '/config.php';
} else {
    // Fallback constants if config is missing (useful for testing, but warn)
    define('SMTP_USER', 'fallback@example.com');
    define('SMTP_PASS', 'fallback');
    define('SMTP_HOST', 'localhost');
    define('SMTP_PORT', 587);
    define('ADMIN_EMAIL', 'info@basediff.com');
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit(json_encode(["status" => "error", "error" => "Invalid request method"]));
}

// ── CSRF-ish: Check origin/referer ──
$referer = $_SERVER['HTTP_REFERER'] ?? '';
if (!empty($referer) && !str_contains($referer, 'basediff.com')) {
    // Just a basic check, can be bypassed by spoofing but blocks simple cross-site attacks
    error_log("Possible CSRF blocked from: " . $referer);
    exit(json_encode(["status" => "error", "error" => "Security breach detected"]));
}

// ── Honeypot protección ──
if (!empty($_POST['website'])) {
    exit(json_encode(["status" => "ok"])); // Fake success for bots
}

// ── Inputs validation & trimming ──
$type = trim($_POST['type'] ?? 'general');
$version = trim($_POST['version'] ?? 'unknown');
$os = trim($_POST['os'] ?? 'unknown');
$message = trim($_POST['message'] ?? '');
$email = trim($_POST['email'] ?? '');

// Limit lengths (Prevent DB bloat)
if (strlen($message) > 5000)
    $message = substr($message, 0, 5000);
if (strlen($email) > 150)
    $email = substr($email, 0, 150);
if (strlen($version) > 20)
    $version = substr($version, 0, 20);

if (empty($message)) {
    exit(json_encode(["status" => "error", "error" => "Message is required"]));
}

// Strict type check
$allowed_types = ['general', 'bug', 'feature'];
if (!in_array($type, $allowed_types)) {
    $type = 'general';
}

// Better email validation
if (!empty($email) && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    exit(json_encode(["status" => "error", "error" => "Invalid email format"]));
}

// Sanitization
$type = htmlspecialchars(strip_tags($type));
$version = htmlspecialchars(strip_tags($version));
$os = htmlspecialchars(strip_tags($os));
$message = htmlspecialchars(strip_tags($message));
$email = filter_var($email, FILTER_SANITIZE_EMAIL);

// ── Rate limiting per IP ──
$ip = $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
$rateLimitFile = sys_get_temp_dir() . '/basediff_fb_' . md5($ip) . '.txt';
$now = time();
$attempts = [];

if (file_exists($rateLimitFile)) {
    $attempts = array_filter(
        explode("\n", file_get_contents($rateLimitFile)),
        function ($t) use ($now) {
            return !empty($t) && (is_numeric($t)) && ($now - (int) $t) < 3600; }
    );
}

if (count($attempts) >= 5) {
    http_response_code(429);
    exit(json_encode(["status" => "error", "error" => "Too many requests. Please try again after an hour."]));
}

$attempts[] = $now;
file_put_contents($rateLimitFile, implode("\n", $attempts));

// ── PHPMailer ──
require_once __DIR__ . '/PHPMailer/PHPMailer.php';
require_once __DIR__ . '/PHPMailer/SMTP.php';
require_once __DIR__ . '/PHPMailer/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

/**
 * Sends a secure email using credentials from config.php
 */
function sendEmail($to, $subject, $body, $replyTo = null)
{
    $mail = new PHPMailer(true);
    try {
        $mail->isSMTP();
        $mail->Host = SMTP_HOST;
        $mail->SMTPAuth = true;
        $mail->Username = SMTP_USER;
        $mail->Password = SMTP_PASS;
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = SMTP_PORT;
        $mail->CharSet = 'UTF-8';

        $mail->setFrom(SMTP_USER, 'BaseDiff Feedback');
        if ($replyTo && filter_var($replyTo, FILTER_VALIDATE_EMAIL)) {
            $mail->addReplyTo($replyTo);
        }

        $mail->addAddress($to);
        $mail->Subject = $subject;
        $mail->Body = $body;
        $mail->send();
        return true;
    } catch (Exception $e) {
        error_log("PHPMailer error: " . $mail->ErrorInfo);
        return false;
    }
}

try {
    // ── Database storage ──
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

    // Simple GeoIP
    $country = '??';
    if ($ip !== '127.0.0.1' && $ip !== '::1') {
        // Using @ as fallback if API is down or restricted
        $geo = @file_get_contents("http://ip-api.com/json/{$ip}?fields=status,countryCode");
        if ($geo) {
            $geoData = json_decode($geo, true);
            if ($geoData && isset($geoData['status']) && $geoData['status'] === 'success') {
                $country = $geoData['countryCode'];
            }
        }
    }

    $stmt = $db->prepare("INSERT INTO feedback (type, version, os, message, email, country, created_at)
                          VALUES (:type, :version, :os, :message, :email, :country, datetime('now'))");
    $stmt->bindValue(':type', $type);
    $stmt->bindValue(':version', $version);
    $stmt->bindValue(':os', $os);
    $stmt->bindValue(':message', $message);
    $stmt->bindValue(':email', $email);
    $stmt->bindValue(':country', $country);
    $stmt->execute();
    $db->close();

    // ── Notify Admin ──
    $adminSubject = '[BaseDiff Feedback] ' . ucfirst($type) . ' — v' . $version . ' (' . $os . ')';
    $adminBody = "New feedback received!\n\n"
        . "Type:    " . $type . "\n"
        . "Version: " . $version . "\n"
        . "OS:      " . $os . "\n"
        . "Country: " . $country . "\n"
        . "Email:   " . ($email ?: 'not provided') . "\n\n"
        . "Message:\n" . $message . "\n\n"
        . "---\nSent from basediff.com/feedback";

    sendEmail(ADMIN_EMAIL, $adminSubject, $adminBody, $email ?: null);

    // ── Notify User (Confirm receipt) ──
    if (!empty($email)) {
        $userSubject = 'Thank you for your feedback — BaseDiff';
        $userBody = "Hello,\n\n"
            . "Thank you for your feedback! We have received your message and will review it soon.\n\n"
            . "Your message copy:\n"
            . "\"" . $message . "\"\n\n"
            . "---\n"
            . "BaseDiff Team\n"
            . "https://basediff.com\n"
            . "info@basediff.com";

        sendEmail($email, $userSubject, $userBody, ADMIN_EMAIL);
    }

    echo json_encode(["status" => "ok"]);

} catch (\Exception $e) {
    error_log("Feedback processing error: " . $e->getMessage());
    echo json_encode(["status" => "error", "error" => "An internal error occurred. Please try again later."]);
}

