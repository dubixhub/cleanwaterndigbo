<?php
/**
 * Environment Configuration Template
 * 
 * IMPORTANT: Copy this file to .env.php and update with your actual credentials
 * NEVER commit .env.php to version control!
 */

return [
    // Email addresses
    'EMAIL_FROM' => 'info@cleanwaterndigbo.org',
    'EMAIL_TO' => 'info@cleanwaterndigbo.org',
    
    // Email password (for SMTP auth if needed)
    'EMAIL_PASSWORD' => 'Clean0813958911#',
    
    // Namecheap SMTP settings (Secure SSL/TLS)
    'SMTP_HOST' => 'cleanwaterndigbo.org',
    'SMTP_PORT' => 465,
    'SMTP_AUTH' => true,
    'SMTP_SECURE' => 'ssl', // Use 'ssl' for port 465, 'tls' for port 587
    
    // CORS whitelist (allowed origins)
    'CORS_WHITELIST' => [
        'https://cleanwaterndigbo.org',
        'https://www.cleanwaterndigbo.org',
        'http://localhost:8080',
        'http://127.0.0.1:8080',
    ],
    
    // Rate limiting
    'RATE_LIMIT_MAX' => 5, // Max requests per IP
    'RATE_LIMIT_WINDOW' => 3600, // Time window in seconds (1 hour = 3600)
];
