<?php
/**
 * Main API Entry Point
 * Routes requests to appropriate endpoints
 */

// Enable error reporting for debugging (disable in production)
ini_set('display_errors', 0);
error_reporting(E_ALL);

// Set headers
header('Content-Type: application/json');

// Load configuration
require_once __DIR__ . '/config.php';

// Handle CORS
$allowed_origins = $config['cors_whitelist'];
$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';

if (in_array($origin, $allowed_origins)) {
    header("Access-Control-Allow-Origin: $origin");
} else {
    // Default to first allowed origin if origin not in whitelist
    header("Access-Control-Allow-Origin: " . $allowed_origins[0]);
}

header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Max-Age: 86400'); // 24 hours

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Get the request path
$request_uri = $_SERVER['REQUEST_URI'];
$request_method = $_SERVER['REQUEST_METHOD'];

// Simple routing
if ($request_method === 'POST' && (strpos($request_uri, '/contact') !== false || $request_uri === '/' || $request_uri === '/index.php')) {
    require_once __DIR__ . '/contact.php';
    exit;
}

// Default response for unknown routes
http_response_code(404);
echo json_encode([
    'success' => false,
    'message' => 'Endpoint not found'
]);
