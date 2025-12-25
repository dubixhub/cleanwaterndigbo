# Deployment Guide - Namecheap Hosting via GitHub Actions

This guide explains how to automatically deploy your React application to Namecheap shared hosting using GitHub Actions and SFTP over SSL.

## Prerequisites

1. A Namecheap shared hosting account (or compatible cPanel hosting)
2. GitHub repository with your code
3. FTP/SFTP credentials from Namecheap

## Getting Your Namecheap SFTP Credentials

### 1. Log into Namecheap cPanel
- Go to your Namecheap account
- Navigate to "Hosting List" → Select your domain → Click "cPanel"

### 2. Find Your SFTP Details
In cPanel, look for the **FTP Accounts** section:

- **SFTP Host**: Usually in format `server123.web-hosting.com` or similar
  - You can find this in your cPanel welcome email
  - Or in cPanel → "FTP Accounts" → Look for "FTP Server"
  
- **SFTP Port**: Typically `21098` for Namecheap (SSL/TLS Explicit encryption)
  - Standard FTP uses port `21`, but we're using SFTP for security
  
- **Username**: Your cPanel username (often `username@yourdomain.com` or just `cpanel-username`)
  
- **Password**: Your cPanel password
  
- **Remote Path**: The directory where your website files should go
  - For main domain: `/public_html`
  - For subdomain: `/public_html/subdomain`
  - For addon domain: `/public_html/addondomain.com`

## Setting Up GitHub Secrets

GitHub Secrets are used to securely store sensitive credentials. **Never commit credentials directly to your code!**

### Step-by-Step:

1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add the following secrets one by one:

| Secret Name | Description | Example Value |
|------------|-------------|---------------|
| `SFTP_HOST` | Your Namecheap server hostname | `server123.web-hosting.com` |
| `SFTP_PORT` | SFTP port number | `21098` |
| `SFTP_USERNAME` | Your cPanel/FTP username | `username@yourdomain.com` |
| `SFTP_PASSWORD` | Your cPanel/FTP password | `YourSecurePassword123!` |
| `SFTP_REMOTE_PATH` | Remote directory path | `/public_html/` |

> **Note**: Make sure to include trailing slashes for paths (e.g., `/public_html/`)

## How the Deployment Works

1. **Trigger**: When you push code to the `main` branch, GitHub Actions is triggered
2. **Build**: The workflow runs `npm ci` and `npm run build` to create production files
3. **Deploy**: The `dist` folder contents are uploaded to your Namecheap server via SFTP
4. **Live**: Your website is automatically updated!

## Manual Deployment Trigger

You can also manually trigger a deployment:

1. Go to your repository on GitHub
2. Click **Actions** tab
3. Select **Deploy to Namecheap via SFTP** workflow
4. Click **Run workflow** → Select branch → Click **Run workflow**

## Testing Your SFTP Connection

Before setting up GitHub Actions, test your SFTP connection using FileZilla or another FTP client:

### Using FileZilla:

1. Download and install [FileZilla Client](https://filezilla-project.org/)
2. Open FileZilla
3. Go to **File** → **Site Manager** → **New Site**
4. Configure:
   - **Protocol**: FTP - File Transfer Protocol
   - **Host**: Your `SFTP_HOST`
   - **Port**: Your `SFTP_PORT` (e.g., 21098)
   - **Encryption**: Use explicit FTP over TLS if available (or "Require explicit FTP over TLS")
   - **Logon Type**: Normal
   - **User**: Your `SFTP_USERNAME`
   - **Password**: Your `SFTP_PASSWORD`
5. Click **Connect**
6. Navigate to your `SFTP_REMOTE_PATH` (e.g., `/public_html`)

If the connection succeeds, your credentials are correct!

## Troubleshooting

### Deployment Fails with "Connection Refused"

**Possible causes:**
- Wrong `SFTP_PORT` - Try `21098`, `22`, or `21`
- Firewall blocking connections
- Incorrect `SFTP_HOST`

**Solution:** 
- Verify your SFTP details in cPanel
- Test connection with FileZilla first

### Files Not Appearing on Website

**Possible causes:**
- Wrong `SFTP_REMOTE_PATH`
- Files deployed to incorrect directory

**Solution:**
- Verify your remote path in cPanel File Manager
- Common paths: `/public_html/` for main domain
- Make sure path has trailing slash: `/public_html/` not `/public_html`

### Build Fails

**Possible causes:**
- Missing dependencies
- Build errors in code

**Solution:**
- Run `npm run build` locally to test
- Check GitHub Actions logs for specific errors
- Ensure all dependencies are in `package.json`

### Authentication Fails

**Possible causes:**
- Incorrect username or password
- Username format wrong (might need `@domain.com` suffix)

**Solution:**
- Double-check credentials in GitHub Secrets
- Try both `username` and `username@domain.com` formats
- Reset FTP password in cPanel if needed

## Manual Deployment (Fallback)

If GitHub Actions is not working, you can deploy manually:

### Option 1: Using FileZilla
1. Build locally: `npm run build`
2. Connect to your server via FileZilla (see "Testing Your SFTP Connection")
3. Navigate to your remote path (e.g., `/public_html`)
4. Upload all files from your local `dist` folder to the remote directory

### Option 2: Using cPanel File Manager
1. Build locally: `npm run build`
2. Zip your `dist` folder
3. Log into cPanel → File Manager
4. Navigate to your target directory (e.g., `/public_html`)
5. Upload the zip file
6. Extract the zip file
7. Move contents from `dist` folder to parent directory if needed

## Directory Structure on Server

After deployment, your Namecheap server should look like this:

```
/public_html/
  ├── index.html
  ├── assets/
  │   ├── index-abc123.js
  │   ├── index-def456.css
  │   └── ...
  ├── favicon.ico
  └── robots.txt
```

## Important Notes

- **Clean Deployments**: The workflow uses `dangerous-clean-slate: false` to preserve files not in your build
- **HTTPS/SSL**: Namecheap provides free SSL certificates - enable in cPanel for https://
- **Custom Domain**: Configure your domain's DNS in Namecheap dashboard to point to hosting
- **Build Time**: First deployment may take 2-5 minutes depending on project size

## Security Best Practices

✅ **DO:**
- Use GitHub Secrets for all credentials
- Use FTPS (FTP over SSL/TLS) protocol
- Keep your cPanel password strong and unique
- Regularly update dependencies

❌ **DON'T:**
- Commit credentials to your repository
- Use plain FTP (unencrypted)
- Share your GitHub Secrets
- Disable SSL/TLS verification unless absolutely necessary

## Getting Help

- **Namecheap Support**: Available 24/7 via live chat
- **GitHub Actions Logs**: Check the Actions tab in your repository for detailed error messages
- **Community**: Check Namecheap knowledge base and GitHub Discussions

---

**Last Updated**: 2025-12-25
