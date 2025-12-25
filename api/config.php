<?php
/**
 * Configuration Loader
 * Loads environment variables and application config
 */

// Try to load .env.php if it exists, otherwise use defaults
$env_file = __DIR__ . '/.env.php';
$env = [];

if (file_exists($env_file)) {
    $env = require $env_file;
}

// Configuration array with defaults
$config = [
    // Email settings
    'email_from' => $env['EMAIL_FROM'] ?? 'info@cleanwaterndigbo.org',
    'email_to' => $env['EMAIL_TO'] ?? 'info@cleanwaterndigbo.org',
    'email_password' => $env['EMAIL_PASSWORD'] ?? '',
    
    // SMTP settings for Namecheap
    'smtp_host' => $env['SMTP_HOST'] ?? 'cleanwaterndigbo.org',
    'smtp_port' => $env['SMTP_PORT'] ?? 465,
    'smtp_auth' => $env['SMTP_AUTH'] ?? true,
    'smtp_secure' => $env['SMTP_SECURE'] ?? 'ssl', // 'ssl' or 'tls'
    
    // CORS whitelist
    'cors_whitelist' => $env['CORS_WHITELIST'] ?? [
        'https://cleanwaterndigbo.org',
        'https://www.cleanwaterndigbo.org',
        'http://localhost:8080',
        'http://127.0.0.1:8080'
    ],
    
    // Rate limiting
    'rate_limit_max' => $env['RATE_LIMIT_MAX'] ?? 5, // Max requests per time window
    'rate_limit_window' => $env['RATE_LIMIT_WINDOW'] ?? 3600, // Time window in seconds (1 hour)
    
    // Logging
    'log_file' => __DIR__ . '/logs/api.log',
];

return $config;
