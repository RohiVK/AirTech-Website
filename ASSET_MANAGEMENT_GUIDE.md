# AirTech — Website Asset & Logo Management Guide

This document is your complete, step-by-step handbook for updating photos, awards, banners, and logos across the **AirTech** website.

---

## 1. Quick Replacement: The Zero-Code Method

The simplest way to update any image on the website is to **replace the file in the `assets/images/` folder using the exact same filename**.

> [!TIP]
> If you name your new photo identically to the existing file (for example, `proprietor-portrait.jpg`) and overwrite it in `d:\Airtech Website\assets\images\`, your website updates automatically—**without touching a single line of HTML code**.

### Steps to Replace Any Image:
1. Prepare your photo according to the recommended dimensions and format below.
2. Rename your new image file to match the target file name (e.g., `hero-hvac.jpg`).
3. Copy/paste the new file into:
   ```
   d:\Airtech Website\assets\images\
   ```
4. Click **Replace the file in the destination**.
5. Hard-refresh your browser (`Ctrl + F5` on Windows) to clear the browser cache and see the new image instantly.

---

## 2. Complete Inventory of All Images

Here is the exact map of every photo used on the website, where it appears, what it shows, and the ideal dimensions:

| File Name | Website Section & Location | Description / Purpose | Ideal Dimensions | Ideal Ratio |
| :--- | :--- | :--- | :--- | :--- |
| **`proprietor-portrait.jpg`** | **The Man Behind AirTech**<br>(About Us Section) | Professional executive portrait of **P.V. Kumar** | `800 × 1000 px`<br>(min `600 × 750 px`) | **4:5 or 3:4**<br>(Vertical Portrait) |
| **`residential-ac.jpg`** | **Consultative Sizing**<br>(Residential Section) | High-end living room interior showing clean wall installation space | `1200 × 800 px`<br>(or `1024 × 683 px`) | **3:2**<br>(Horizontal Landscape) |
| **`commercial-hvac.jpg`** | **Commercial VRF**<br>(Commercial Section) | Commercial VRF outdoor condenser banks or corporate building chiller layout | `1200 × 800 px` | **3:2**<br>(Horizontal Landscape) |
| **`hero-hvac.jpg`** | **Hero Section**<br>(Top Landing Banner) | Modern architectural residence or high-tech climate engineering visual | `1200 × 800 px`<br>to `1920 × 1080 px` | **3:2 or 16:9**<br>(Landscape) |
| **`about-company.jpg`** | **About Us Operations**<br>(Company Intro) | AirTech technical workshop, testing tools, or Chennai engineering team | `1200 × 600 px`<br>to `1600 × 800 px` | **2:1**<br>(Wide Landscape) |
| **`award-trophy-1.jpg`** | **Awards Carousel — Slide 1** | Hitachi Best Dealer Award for Sales & Engineering Trophy | `800 × 600 px` | **4:3**<br>(Standard) |
| **`award-trophy-2.jpg`** | **Awards Carousel — Slide 2** | Legacy 20-Year Milestone Trophy / Plaque | `800 × 600 px` | **4:3**<br>(Standard) |
| **`award-trophy-3.jpg`** | **Awards Carousel — Slide 3** | Regional Engineering Performance Honor Plaque | `800 × 600 px` | **4:3**<br>(Standard) |
| **`award-trophy-4.jpg`** | **Awards Carousel — Slide 4** | Hitachi Dealer Convention Felicitation & Shield | `800 × 600 px` | **4:3**<br>(Standard) |

---

## 3. Logo Formats & Requirements

Currently, the site uses a clean, responsive inline SVG brand badge. When you have your official high-resolution logo files ready, here is exactly what format is required for each placement:

### A. Main Navigation Bar (Header)
- **Background Environment:** Pure white (`#ffffff`) sticky navbar.
- **Recommended File Format:**
  - **Option 1 (Best):** **Vector SVG (`.svg`)** — infinite sharpness on Retina/4K screens, small file size (~3KB).
  - **Option 2:** **Transparent PNG (`.png`)** — exported at **300 DPI** or `@2x` resolution with an alpha transparency background.
- **Orientation:** **Horizontal / Landscape Lockup** (Mark + Brand Name side-by-side).
- **Target Dimensions:**
  - Height: **`44px` to `50px`**
  - Width: **`180px` to `240px`**
- **Color Palette:** Full brand color scheme:
  - Primary Green: `#5FBB46`
  - Vibrant Turquoise: `#1BADB4`
  - Deep Navy Charcoal: `#263238` (or dark slate)

### B. Footer Logo
- **Background Environment:** Dark slate charcoal background (`#1c282d`).
- **Recommended File Format:** **Vector SVG (`.svg`)** or **Transparent PNG (`.png`)**.
- **Color Variant:**
  - **Inverted / Light Theme Logo:** Pure white text (`#FFFFFF`) with turquoise or light green accent marks so it pops against the dark footer.
- **Target Dimensions:** Height: **`40px` to `48px`**, Width: **`180px` to `240px`**.

### C. Browser Tab Icon (Favicon)
- **File Names:** `favicon.ico` or `favicon.svg` (and `apple-touch-icon.png` for iPhone bookmarks).
- **Format:** Square ratio (`1:1`).
- **Dimensions:** `32 × 32 px` and `512 × 512 px` (high-res PNG).

---

## 4. How to Swap the Logo in Code (When You Have the File)

When you receive your official logo files (e.g., `airtech-logo-header.png` and `airtech-logo-footer.png`), drop them into `d:\Airtech Website\assets\images\` and make this one-line change in `index.html`:

### In `index.html` — Header Logo (around line 103):
Replace the current code block:
```html
<!-- CURRENT CODE -->
<a class="navbar-brand py-0 me-0" href="#hero" aria-label="AirTech Home">
  <div class="brand-logo-frame" data-logo-slot="header">
    <div class="d-flex align-items-center gap-3">
      ...
    </div>
  </div>
</a>
```
With your new image tag:
```html
<!-- UPDATED WITH YOUR LOGO -->
<a class="navbar-brand py-0 me-0" href="#hero" aria-label="AirTech Home">
  <img src="assets/images/airtech-logo-header.png" 
       alt="AirTech Air-Conditioning" 
       height="48" 
       style="max-height: 48px; width: auto; object-fit: contain;">
</a>
```

### In `index.html` — Footer Logo (around line 1603):
```html
<!-- UPDATED WITH YOUR FOOTER LOGO -->
<div class="mb-3">
  <img src="assets/images/airtech-logo-footer.png" 
       alt="AirTech Air-Conditioning" 
       height="44" 
       style="max-height: 44px; width: auto; object-fit: contain;">
</div>
```

---

## 5. Pro Tips for High-Speed Website Performance

1. **Keep File Sizes Small:**
   - Photographs (`.jpg` or `.webp`) should ideally be **under 250 KB**.
   - Transparent graphics/logos (`.png`) should be **under 100 KB**.
   - Vector logos (`.svg`) are typically **under 10 KB**.
2. **Free Compression Tools:**
   - Before uploading photos taken from modern smartphones or DSLRs (which can be 5 MB to 15 MB), run them through [TinyPNG](https://tinypng.com/) or Google's [Squoosh](https://squoosh.app/) to compress them without any noticeable loss in clarity.
3. **Keep Original Backups:**
   - Keep a separate folder on your computer for original master-resolution photos and raw logo files (`.ai`, `.eps`, `.psd`).
