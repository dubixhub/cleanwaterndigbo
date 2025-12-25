# API Deployment Guide

Complete guide for deploying and configuring the PHP API for the contact form.

## Overview

The API is deployed to the **api.cleanwaterndigbo.org** subdomain and handles contact form submissions with:
- ✅ Email delivery using PHP's native `mail()` function
- ✅ CORS support for cross-origin requests
- ✅ Rate limiting (5 requests per hour per IP)
- ✅ Input validation and sanitization
- ✅ Security headers and file protection

---

## Deployment Steps

### 1. Automatic Deployment via GitHub Actions

The API deploys automatically when you push changes to the `api/` folder:

```bash
git add api/
git commit -m "Deploy API updates"
git push origin main
```

**What happens:**
1. GitHub Actions detects changes in `api/` folder
2. Deploys files to `/api.cleanwaterndigbo.org/` on your Namecheap server
3. API becomes live at `https://api.cleanwaterndigbo.org`

### 2. Create Environment Configuration

After first deployment, you need to create `.env.php` on your server:

#### Option A: Using cPanel File Manager

1. Log into Namecheap → Hosting → cPanel
2. Open **File Manager**
3. Navigate to `/api.cleanwaterndigbo.org/`
4. Click **New File** → Name it `.env.php`
5. Right-click → **Edit**
6. Copy and paste this configuration:

```php
<?php
return [
    'EMAIL_FROM' => 'info@cleanwaterndigbo.org',
    'EMAIL_TO' => 'info@cleanwaterndigbo.org',
    'EMAIL_PASSWORD' => 'Clean0813958911#',
    'SMTP_HOST' => 'cleanwaterndigbo.org',
    'SMTP_PORT' => 465,
    'SMTP_AUTH' => true,
    'SMTP_SECURE' => 'ssl',
    'CORS_WHITELIST' => [
        'https://cleanwaterndigbo.org',
        'https://www.cleanwaterndigbo.org',
        'http://localhost:8080',
        'http://127.0.0.1:8080',
    ],
    'RATE_LIMIT_MAX' => 5,
    'RATE_LIMIT_WINDOW' => 3600,
];
?>
```

7. Save the file
8. Set permissions to **644** (read/write for owner, read for others)

#### Option B: Using SFTP/FileZilla

1. Connect to your server via SFTP
2. Navigate to `/api.cleanwaterndigbo.org/`
3. Copy `.env.example.php` to `.env.php` locally
4. Update credentials in `.env.php`
5. Upload `.env.php` to the server
6. Set permissions to 644

---

## Testing the API

### Test with curl

```bash
curl -X POST https://api.cleanwaterndigbo.org/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test Subject",
    "message": "This is a test message"
  }'
```

**Expected response:**
```json
{
  "success": true,
  "message": "Message sent successfully! We will get back to you soon."
}
```

### Test from Frontend

1. Deploy your main app (with updated Contact.tsx)
2. Visit `https://cleanwaterndigbo.org/contact`
3. Fill out and submit the contact form
4. Check `info@cleanwaterndigbo.org` for the email

---

## Email Configuration

### Namecheap SMTP Settings (Already Configured)

The API is pre-configured to use Namecheap's SMTP server:

- **SMTP Host**: cleanwaterndigbo.org
- **SMTP Port**: 465 (SSL)
- **From Email**: info@cleanwaterndigbo.org
- **To Email**: info@cleanwaterndigbo.org

**Note**: PHP's `mail()` function on Namecheap shared hosting will automatically use the server's mail configuration. The credentials in `.env.php` are primarily for reference and future SMTP authentication if needed.

---

## Troubleshooting

### Issue: API returns 404

**Cause**: `.htaccess` rewrite rules not working

**Solution**:
1. Verify `.htaccess` file exists in `/api.cleanwaterndigbo.org/`
2. Check that `mod_rewrite` is enabled (usually is on Namecheap)
3. Test direct access: `https://api.cleanwaterndigbo.org/index.php`

### Issue: CORS errors in browser console

**Cause**: Origin not in whitelist

**Solution**:
1. Open `.env.php` on server
2. Add your domain to `CORS_WHITELIST` array
3. Example: `'https://yourdomain.com'`

### Issue: Emails not being delivered

**Solutions**:

1. **Check spam folder** - First place to look!

2. **Verify email credentials**:
   - Log into Namecheap → Email accounts
   - Confirm `info@cleanwaterndigbo.org` exists
   - Try sending a test email from webmail

3. **Check API logs**:
   - Navigate to `/api.cleanwaterndigbo.org/logs/api.log`
   - Look for error messages

4. **Verify SPF/DKIM records**:
   - Namecheap usually sets these up automatically
   - Check in cPanel → Email Deliverability

### Issue: Rate limit errors

**Cause**: Too many requests from same IP

**Solution**:
- Wait 1 hour for rate limit to reset
- Or manually delete `/api.cleanwaterndigbo.org/logs/rate_limit.json`
- Adjust `RATE_LIMIT_MAX` in `.env.php` if needed

### Issue: 500 Internal Server Error

**Causes & Solutions**:

1. **PHP syntax error**:
   - Check error logs in cPanel
   - Verify all PHP files uploaded correctly

2. **Missing .env.php**:
   - Create `.env.php` as described above

3. **File permissions**:
   - PHP files: 644
   - Directories: 755
   - `.env.php`: 644

---

## Security Best Practices

✅ **DO:**
- Keep `.env.php` permissions at 644
- Monitor the `logs/api.log` file regularly
- Update rate limits if you notice abuse
- Use SSL (https) for all API requests

❌ **DON'T:**
- Commit `.env.php` to Git (already in .gitignore)
- Share your email password publicly
- Disable CORS protection
- Remove input validation

---

## File Structure on Server

After deployment, your subdomain folder should look like:

```
/api.cleanwaterndigbo.org/
├── .htaccess              # Apache configuration
├── .env.php              # Your credentials (create manually)
├── .env.example.php      # Example config
├── index.php             # Main entry point
├── config.php            # Config loader
├── contact.php           # Contact endpoint
└── logs/                 # Auto-created on first request
    ├── api.log           # Error/success logs
    └── rate_limit.json   # Rate limiting data
```

---

## Monitoring & Maintenance

### Check Logs

Periodically check `/api.cleanwaterndigbo.org/logs/api.log` for:
- Failed email deliveries
- Rate limit violations
- Validation errors
- Suspicious activity

### Clear Old Logs

```bash
# Via SSH or cPanel File Manager
rm /api.cleanwaterndigbo.org/logs/api.log
rm /api.cleanwaterndigbo.org/logs/rate_limit.json
```

Files will be recreated automatically on next request.

---

## Advanced Configuration

### Changing Email Password

1. Update password in Namecheap cPanel → Email Accounts
2. Update `.env.php` on server with new password
3. No need to redeploy

### Adding More Allowed Origins

Edit `.env.php`:

```php
'CORS_WHITELIST' => [
    'https://cleanwaterndigbo.org',
    'https://www.cleanwaterndigbo.org',
    'https://staging.cleanwaterndigbo.org', // Add new domain
    'http://localhost:8080',
],
```

### Adjusting Rate Limits

Edit `.env.php`:

```php
'RATE_LIMIT_MAX' => 10,        // Allow 10 requests
'RATE_LIMIT_WINDOW' => 1800,   // Per 30 minutes
```

---

## Getting Help

- **Namecheap Support**: 24/7 live chat for hosting issues
- **Email Issues**: Check Namecheap Email Deliverability in cPanel
- **API Logs**: Always check `/logs/api.log` first
- **GitHub Actions**: Check the Actions tab for deployment errors

---

**Last Updated**: 2025-12-25
