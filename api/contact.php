<?php
/**
 * Contact Form Endpoint
 * Handles contact form submissions with validation, rate limiting, and email delivery
 */

// Load configuration
$config = require __DIR__ . '/config.php';

// Helper function to log errors
function logError($message) {
    global $config;
    $log_dir = dirname($config['log_file']);
    if (!is_dir($log_dir)) {
        @mkdir($log_dir, 0755, true);
    }
    $timestamp = date('Y-m-d H:i:s');
    $log_message = "[$timestamp] $message\n";
    @file_put_contents($config['log_file'], $log_message, FILE_APPEND);
}

// Helper function to sanitize input
function sanitizeInput($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data, ENT_QUOTES, 'UTF-8');
    return $data;
}

// Helper function for rate limiting
function checkRateLimit($ip) {
    global $config;
    $rate_file = __DIR__ . '/logs/rate_limit.json';
    $rate_dir = dirname($rate_file);
    
    if (!is_dir($rate_dir)) {
        @mkdir($rate_dir, 0755, true);
    }
    
    $now = time();
    $window = $config['rate_limit_window'];
    $max_requests = $config['rate_limit_max'];
    
    // Load existing rate limit data
    $rate_data = [];
    if (file_exists($rate_file)) {
        $content = file_get_contents($rate_file);
        $rate_data = json_decode($content, true) ?: [];
    }
    
    // Clean up old entries
    $rate_data = array_filter($rate_data, function($timestamp) use ($now, $window) {
        return ($now - $timestamp) < $window;
    });
    
    // Check IP's request count
    $ip_requests = array_filter($rate_data, function($timestamp, $key) use ($ip) {
        return strpos($key, $ip . '_') === 0;
    }, ARRAY_FILTER_USE_BOTH);
    
    if (count($ip_requests) >= $max_requests) {
        return false; // Rate limit exceeded
    }
    
    // Add current request
    $rate_data[$ip . '_' . uniqid()] = $now;
    
    // Save rate limit data
    file_put_contents($rate_file, json_encode($rate_data));
    
    return true; // Rate limit OK
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Method not allowed'
    ]);
    exit;
}

// Get client IP
$client_ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';

// Check rate limit
if (!checkRateLimit($client_ip)) {
    http_response_code(429);
    echo json_encode([
        'success' => false,
        'message' => 'Too many requests. Please try again later.'
    ]);
    logError("Rate limit exceeded for IP: $client_ip");
    exit;
}

// Get and decode JSON input
$json_input = file_get_contents('php://input');
$data = json_decode($json_input, true);

// Validate input
$errors = [];

if (empty($data['name'])) {
    $errors[] = 'Name is required';
}

if (empty($data['email'])) {
    $errors[] = 'Email is required';
} elseif (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Invalid email format';
}

if (empty($data['message'])) {
    $errors[] = 'Message is required';
}

// Check if there are validation errors
if (!empty($errors)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Validation failed',
        'errors' => $errors
    ]);
    exit;
}

// Sanitize inputs
$name = sanitizeInput($data['name']);
$email = sanitizeInput($data['email']);
$subject = sanitizeInput($data['subject'] ?? 'Contact Form Submission');
$message = sanitizeInput($data['message']);

// Prepare email
$to = $config['email_to'];
$email_subject = "Contact Form: $subject";

// Create email body
$email_body = "You have received a new message from the contact form:\n\n";
$email_body .= "Name: $name\n";
$email_body .= "Email: $email\n";
$email_body .= "Subject: $subject\n\n";
$email_body .= "Message:\n$message\n\n";
$email_body .= "---\n";
$email_body .= "Sent from: {$_SERVER['HTTP_HOST']}\n";
$email_body .= "IP Address: $client_ip\n";
$email_body .= "Time: " . date('Y-m-d H:i:s') . "\n";

// Email headers
$headers = [];
$headers[] = "From: {$config['email_from']}";
$headers[] = "Reply-To: $email";
$headers[] = "X-Mailer: PHP/" . phpversion();
$headers[] = "MIME-Version: 1.0";
$headers[] = "Content-Type: text/plain; charset=UTF-8";

// Configure PHP mail to use SMTP (if credentials provided)
if (!empty($config['email_password'])) {
    ini_set('SMTP', $config['smtp_host']);
    ini_set('smtp_port', $config['smtp_port']);
    
    // Note: PHP's mail() doesn't support SMTP authentication directly
    // For full SMTP with auth, you'd need PHPMailer or similar
    // But on Namecheap, the server is already configured to send from your domain
}

// Send email
$mail_sent = mail($to, $email_subject, $email_body, implode("\r\n", $headers));

if ($mail_sent) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Message sent successfully! We will get back to you soon.'
    ]);
    logError("Contact form submitted successfully from: $email (IP: $client_ip)");
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Failed to send message. Please try again later or contact us directly.'
    ]);
    logError("Failed to send email from: $email (IP: $client_ip)");
}
