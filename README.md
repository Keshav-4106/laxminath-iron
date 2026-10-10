# Laxminath Iron website

Product catalogue and WhatsApp enquiry site for Laxminath Iron, Bassi (Chittorgarh, Rajasthan):
Polaad QST Fe 550D TMT Sariya and MP Birla Cement.

## Run locally

```
npm install
npm run dev
```

`npm run build` writes the production site to `dist/` in four steps:

1. `scripts/sync-prices.mjs` — pulls or checks product prices (runs automatically as `prebuild`).
2. `vite build` — the normal browser build.
3. `vite build --ssr src/entry-server.jsx` — a temporary server build used only for step 4.
4. `scripts/prerender.mjs` — writes one HTML file per page (`index.html`, `sariya.html`, `cement.html`, `contact.html`, `enquiry.html`, `404.html`) with that page's title, description, canonical, share image and text already in place. It fails the build if a page is missing a title, description or canonical, or has duplicates.

To check a production build locally: `npm run build` then `npm run preview`, and use "View page source" — each page should show its own `<title>`.

## Where things live

- `src/config/site.js` — domain, phone/WhatsApp number, address, hours and shared wording (GST, delivery, price disclaimer). Change business details here.
- `src/data/products.json` — every product and indicative price (generated; see `price-sheet/README.md`).
- `src/data/catalog.js` — how pages read products; product picture keys.
- `scripts/sync-prices.mjs` — runs before every build: pulls the Google Sheet (when `PRICE_SHEET_CSV_URL` is set) and validates it.
- `public/robots.txt` and `public/sitemap.xml` — contain the domain too; update them when `SITE_URL` changes.
- `src/components/PageSeo.jsx` — per-page title, description, canonical and share-preview tags.
- `public/og/` — 1200 × 630 share images used in WhatsApp/Facebook previews.
- Hosting: Cloudflare Pages (build command `npm run build`, output `dist`). Pages serves `/sariya` from `sariya.html` and uses `404.html` for unknown addresses. `public/_headers` caches hashed assets for a year; `.node-version` pins Node 22.
- `.github/workflows/daily-price-rebuild.yml` — rebuilds the site every morning so sheet prices go live even if nobody presses "Publish prices".
