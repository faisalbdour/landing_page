# 🚀 TheTruePrompt Landing Page - Hosting Guide

Complete step-by-step guide to host your landing page with a custom domain.

---

## 📋 Prerequisites

- [ ] Landing page files ready (`index.html`, `styles.css`)
- [ ] Git installed on your computer
- [ ] GitHub account
- [ ] Custom domain purchased (or ready to purchase)

---

## Step 1: Set Up Git & GitHub (5 minutes)

### 1.1 Initialize Git Repository

Open Command Prompt in your project folder:

```bash
cd C:\Users\faisa\OneDrive\Desktop\Cursor

# Initialize git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit - TheTruePrompt landing page"
```

### 1.2 Create GitHub Repository

1. Go to [github.com](https://github.com)
2. Click "+" → "New repository"
3. Name: `thetreueprompt-landing` (or any name)
4. Leave everything default
5. Click "Create repository"

### 1.3 Push to GitHub

Copy the commands from GitHub (should look like this):

```bash
git remote add origin https://github.com/YOUR-USERNAME/thetreueprompt-landing.git
git branch -M main
git push -u origin main
```

✅ **Your code is now on GitHub!**

---

## Step 2: Deploy to Netlify (5 minutes)

### 2.1 Sign Up for Netlify

1. Go to [netlify.com](https://netlify.com)
2. Click "Sign up"
3. Choose "Sign up with GitHub"
4. Authorize Netlify

### 2.2 Deploy Your Site

1. Click "Add new site" → "Import an existing project"
2. Choose "GitHub"
3. Select your repository: `thetreueprompt-landing`
4. Build settings:
   - **Build command:** Leave empty (static site)
   - **Publish directory:** `/` (root)
5. Click "Deploy site"

⏳ Wait 1-2 minutes for deployment...

✅ **Your site is now live!**
- You'll get a URL like: `https://random-name-12345.netlify.app`

### 2.3 Change Site Name (Optional)

1. Go to "Site settings" → "General" → "Site details"
2. Click "Change site name"
3. Enter: `thetreueprompt` (if available)
4. Now your site is: `https://thetreueprompt.netlify.app`

---

## Step 3: Buy a Custom Domain (10 minutes)

### 3.1 Choose a Domain Name

Ideas:
- `thetreueprompt.com`
- `treueprompt.io`
- `treueprompt.agency`
- `gettreueprompt.com`

### 3.2 Purchase Domain

**Recommended: Namecheap**

1. Go to [namecheap.com](https://namecheap.com)
2. Search for your domain
3. Add to cart (~$10-15/year)
4. **IMPORTANT:** Enable "WhoisGuard" (free privacy protection)
5. Complete purchase

**Alternative Options:**
- [Google Domains](https://domains.google.com) - $12/year
- [Cloudflare](https://cloudflare.com/products/registrar) - $8-10/year
- [Porkbun](https://porkbun.com) - $7-12/year

---

## Step 4: Connect Custom Domain to Netlify (15 minutes)

### 4.1 Add Domain in Netlify

1. Go to your Netlify site dashboard
2. Click "Domain settings"
3. Click "Add custom domain"
4. Enter your domain: `thetreueprompt.com`
5. Click "Verify" → "Add domain"

### 4.2 Configure DNS

Netlify will show you two options:

#### **Option A: Use Netlify DNS (Recommended - Easiest)**

1. Netlify will display nameservers like:
   ```
   dns1.p01.nsone.net
   dns2.p01.nsone.net
   dns3.p01.nsone.net
   dns4.p01.nsone.net
   ```

2. Go to your domain registrar (Namecheap):
   - Login → "Domain List"
   - Click "Manage" next to your domain
   - Click "Nameservers" → "Custom DNS"
   - Replace with Netlify's nameservers (all 4)
   - Save

3. Back in Netlify:
   - Click "Verify DNS configuration"

⏳ **Wait 24-48 hours for DNS to propagate**
- Usually takes 1-2 hours, but can take up to 48 hours

#### **Option B: Keep Current DNS (Advanced)**

Add these DNS records at your registrar:

1. **For main domain** (`thetreueprompt.com`):
   ```
   Type: A
   Host: @
   Value: 75.2.60.5
   TTL: Automatic
   ```

2. **For www subdomain** (`www.thetreueprompt.com`):
   ```
   Type: CNAME
   Host: www
   Value: [your-site].netlify.app
   TTL: Automatic
   ```

### 4.3 Enable HTTPS/SSL

1. In Netlify → "Domain settings" → "HTTPS"
2. Click "Verify DNS configuration"
3. Once verified, click "Provision certificate"
4. Wait 1-2 minutes

✅ **Your site now has HTTPS!**

---

## Step 5: Final Configuration (5 minutes)

### 5.1 Set Primary Domain

In Netlify:
1. "Domain settings"
2. Under "Primary domain", select:
   - `thetreueprompt.com` (without www)
   - OR `www.thetreueprompt.com` (with www)
3. Enable "Redirect automatically to primary domain"

### 5.2 Test Your Site

Visit:
- `https://thetreueprompt.com` ✅
- `https://www.thetreueprompt.com` ✅ (should redirect)
- `http://thetreueprompt.com` ✅ (should redirect to HTTPS)

---

## ✅ You're Live!

Your landing page is now:
- 🌐 Accessible via your custom domain
- 🔒 Secured with HTTPS/SSL
- ⚡ Hosted on fast CDN
- 🔄 Auto-deploys when you push to GitHub

---

## 🔄 How to Update Your Site

Whenever you make changes:

```bash
# Make your changes to index.html or styles.css

# Commit changes
git add .
git commit -m "Update landing page"

# Push to GitHub
git push

# Netlify automatically detects and deploys! (takes ~1 minute)
```

---

## 🛠️ Troubleshooting

### DNS Not Working?
- Wait 24-48 hours for full propagation
- Check DNS propagation: [whatsmydns.net](https://whatsmydns.net)
- Clear your browser cache: Ctrl+Shift+Delete

### HTTPS Certificate Pending?
- Wait 10-15 minutes after DNS is verified
- Netlify auto-provisions Let's Encrypt certificate

### Form Not Submitting?
- Your N8N webhook should still work
- Test in browser console (F12) to see any errors

### Changes Not Showing?
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Check GitHub - did your push succeed?
- Check Netlify "Deploys" tab - is deployment successful?

---

## 💰 Total Cost Breakdown

| Item | Cost | Frequency |
|------|------|-----------|
| **Domain** | $10-15 | Per year |
| **Hosting (Netlify)** | $0 | Forever |
| **SSL Certificate** | $0 | Forever |
| **GitHub** | $0 | Forever |
| **Total** | **$10-15** | **Per year** |

---

## 🎯 Next Steps

1. **Set up email forwarding** (if needed)
   - In your domain registrar, forward `hello@thetreueprompt.com` to your Gmail

2. **Add Google Analytics** (optional)
   - Get tracking code from [analytics.google.com](https://analytics.google.com)
   - Add before `</head>` in `index.html`

3. **Set up monitoring** (optional)
   - [UptimeRobot](https://uptimerobot.com) - Free uptime monitoring

4. **Create professional email** (optional)
   - Google Workspace: $6/month
   - Zoho Mail: Free for 1 user

---

## 📞 Support Resources

- **Netlify Support**: [netlify.com/support](https://netlify.com/support)
- **Namecheap Support**: [namecheap.com/support](https://namecheap.com/support)
- **DNS Checker**: [whatsmydns.net](https://whatsmydns.net)
- **SSL Checker**: [ssllabs.com/ssltest](https://ssllabs.com/ssltest)

---

## 🎉 Congratulations!

Your TheTruePrompt landing page is now live on the internet with your custom domain! 🚀

**Your Site:**
- URL: `https://thetreueprompt.com`
- Hosting: Netlify
- Source: GitHub
- SSL: ✅ Enabled
- Auto-deploy: ✅ Active

Share your site with the world! 🌍
