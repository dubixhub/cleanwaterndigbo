# Quick Setup Guide

## Required GitHub Secrets

Add these secrets to your GitHub repository (Settings → Secrets and variables → Actions):

1. **SFTP_HOST** - Your server hostname (e.g., `server123.web-hosting.com`)
2. **SFTP_PORT** - SFTP port (typically `21098` for Namecheap)
3. **SFTP_USERNAME** - Your cPanel username
4. **SFTP_PASSWORD** - Your cPanel password
5. **SFTP_REMOTE_PATH** - Remote directory (e.g., `/public_html/`)

## Finding Your Credentials

### Namecheap cPanel:
1. Log into Namecheap → Hosting List → Select domain → cPanel
2. Look for **FTP Accounts** section
3. Find your FTP server hostname and port
4. Use your cPanel username and password

### Common Remote Paths:
- Main domain: `/public_html/`
- Subdomain: `/public_html/subdomain/`
- Addon domain: `/public_html/addondomain.com/`

## Test Before Deploying

Use FileZilla to test your connection:
1. Download [FileZilla](https://filezilla-project.org/)
2. Protocol: FTP with explicit TLS
3. Use your credentials to connect
4. Verify you can access the remote path

## Deployment

Once secrets are configured:
- **Automatic**: Push to `main` branch
- **Manual**: GitHub → Actions → Run workflow

For detailed instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)
