# AirTech Hitachi — Corporate Engineering Website

An engineering-first corporate website for **AirTech**, an Exclusive Authorized Hitachi Air Conditioning Dealer based in Chennai, Tamil Nadu, India.

---

## 🌟 Highlights & Architecture

- **Clean Static Core**: Pure modern HTML5, CSS3, Vanilla JavaScript, and Bootstrap 5.3 (no heavy framework overhead, lightning-fast load times).
- **OEM Engineering Standards**: Features complete residential (Inverter Split & Cassette) and commercial (Hitachi Set-Free VRF, Chillers, AHUs) system portfolios.
- **Micro-Interactions & Custom Cursor**: Custom 6-fold dendritic snow-crystal interactive cursor engine with smooth lerp physics and reactive hover blooms.
- **Fluid Client Marquee**: Standardized 450x150 high-DPI client logo ticker with seamless infinite loop animation.
- **Enterprise FAQ & Split AC Unit Preview**: Interactive AC unit console simulator showing thermal loads, mode shifts, and diagnostic questions.
- **Comprehensive Governance**: Fully formatted, compliant Terms & Conditions page aligned with brand aesthetics.
- **Fully Responsive & Accessible**: Optimized for mobile, tablet, and desktop viewing with WCAG-compliant contrast and semantic markup.

---

## 📁 Repository Structure

```text
├── assets/
│   └── images/
│       ├── clients/              # Client partner & enterprise marks
│       ├── airtech-logo.png      # Official brand identities
│       └── ...                   # Hero, project, and certification assets
├── css/
│   ├── style.css                 # Master agency stylesheet
│   ├── bootstrap.min.css         # Bootstrap 5.3 UI framework
│   └── aos.css                   # Scroll animation styles
├── js/
│   ├── main.js                   # Interactive engines (cursor, sliders, counters)
│   ├── bootstrap.bundle.min.js   # Bootstrap components
│   └── aos.js                    # Animate-On-Scroll library
├── index.html                    # Homepage (Residential, Commercial, Why Us, Testimonials)
├── faq.html                      # Technical HVAC & AMC Knowledge Base
├── terms-and-conditions.html     # Legal & Website Governance
├── sitemap.xml                   # SEO XML Sitemap
├── robots.txt                    # Search crawler rules
├── server.js                     # Lightweight local preview server
└── .gitignore                    # Production git ignore policy
```

---

## 🚀 Local Development

To run the site locally:

### Option 1: Native Node.js Server
```bash
node server.js
```
Then open `http://localhost:3000/` in your browser.

### Option 2: Any Static Web Server
You can also use Python or any simple HTTP server:
```bash
# Python 3
python -m http.server 3000

# or npx serve
npx serve .
```

---

## 🌐 Deployment Options

### 1. GitHub Pages (Free & Instant)
1. Push this repository to GitHub.
2. In your GitHub repository, navigate to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
4. Select `main` branch and `/ (root)` folder, then click **Save**.
5. Your website will be live in 1–2 minutes at `https://<your-username>.github.io/<repo-name>/`.

### 2. Vercel
1. Import your GitHub repository into Vercel.
2. Framework Preset: **Other** (Static).
3. Root Directory: `./`.
4. Click **Deploy**.

### 3. Netlify
1. Connect your GitHub repository to Netlify.
2. Build command: *(leave empty)*.
3. Publish directory: `./`.
4. Click **Deploy Site**.

### 4. Cloudflare Pages
1. In Cloudflare Dashboard, go to **Workers & Pages** > **Create application** > **Pages**.
2. Connect to GitHub, select this repository.
3. Build output directory: `.`.
4. Click **Save and Deploy**.

---

## 🔒 Security & Privacy Notice

- This repository is sanitized of all private keys, API credentials, and internal contact information.
- All telephone endpoints utilize standard public contact placeholders.
