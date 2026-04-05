# SEO Guide: Boosting Your Website Visibility (SIORA)

This guide explains the SEO concepts shared in the checklist and how they are handled in this project.

---

## 🛠️ Step-by-Step Manual Setup (Aapko Ye Karna Hai)

Google aur Bing ko ye batane ke liye ki aap is site ke owner hain, aapko ye steps follow karne honge:

### 1. Google Search Console Setup
1.  **Visit**: [Google Search Console](https://search.google.com/search-console).
2.  **Add Property**: Apna domain (e.g., `siora.in`) enter karein.
3.  **Verification**: Google aapko ek `HTML tag` ya `File` dega.
    - Agar wo file dete hain, to use `public/` folder mein save kar dein.
    - Agar wo meta tag dete hain, to use `src/app/layout.tsx` ke `<head>` mein paste kar dein.
4.  **Submit Sitemap**: Setup ke baad "Sitemaps" section mein jayein aur `sitemap.xml` likh kar submit kar dein.

### 2. Bing Webmaster Tools Setup
1.  **Visit**: [Bing Webmaster Tools](https://www.bing.com/webmasters).
2.  **Login**: Aap apne Google Search Console account se login karke saara data import kar sakte hain (Sabse asaan tarika).
3.  **Verify**: Verification complete hone ke baad Bing automatic indexing shuru kar dega.

---

## 🛠️ Automated Features (Jo Maine Implement Kar Diye Hain)

Maine ye advanced features implement kar diye hain taaki aapki site Google par fast rank kare:

### 1. JSON-LD Structured Data (Schema)
**What it is:** Google ko batana ki SIORA ek "Architecture & Design" business hai.
**Action:** `layout.tsx` mein add kar diya gaya hai. Isse Google search mein aapke business ka name aur location "Rich Results" (Card style) mein dikhne ke chances badh jate hain.

### 2. Dynamic Sitemap (`sitemap.xml`)
**What it is:** Aapke saare projects (Private Residence, Boutique Office, etc.) ki list automatic Google ko milti rahegi.
**File:** `src/app/sitemap.ts`.

### 3. Open Graph (Social Sharing)
**What it is:** WhatsApp ya FB par link share karte waqt achha sa preview dikhega.
**File:** `src/app/layout.tsx` (Metadata section).

### 4. Canonical Tags
**What it is:** Google ko ye batana ki "siora.in" hi main address hai, taaki "www.siora.in" ya kisi aur version se confusion na ho.
**Action:** `layout.tsx` mein `alternates: { canonical: ... }` add kar diya hai.

### 5. IndexNow Integration
**What it is:** Bing ko turant update bhejne ke liye utility.
**Files:** 
- `public/indexnow-key.txt`: Yahan aap apna Bing API key paste kar sakte hain.
- `src/lib/seo.ts`: Isme `notifySearchEngines` function hai jo updates bhejta hai.

---

## 📝 Next Steps for "Achhe Se" SEO:
1.  **Image Alt Text**: Maine saari images mein description add kar di hai, lekin naye projects add karte waqt `alt` tag zaroori bharna.
2.  **Domain Deployment**: Jab aap site live karein, to `layout.tsx` aur `sitemap.ts` mein `https://siora.in` ko apne asli domain se replace kar dena.

> [!IMPORTANT]
> SEO ek slow process it. Is setup ke baad 1-2 hafte mein aap Google par apni site dekh payenge.
