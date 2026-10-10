# Price sheet (Google Sheets → website)

The website reads every product and price from `src/data/products.json`.
That file is created from a Google Sheet each time the site is built, so you can change prices without touching code.

## How it works

1. You edit prices in the Google Sheet.
2. The site is rebuilt on Cloudflare Pages: every morning at 7:45 AM automatically, or straight away from the sheet's **Website → Publish prices now** menu.
3. Before building, `scripts/sync-prices.mjs` downloads the sheet and checks every row. Bad data (a missing price column, a typo like `3OO`, a duplicate ID, an empty category, a date in the future) **stops the build**, so the last good version of the site stays live.
4. If the sheet is not connected (`PRICE_SHEET_CSV_URL` not set), the build uses the saved `src/data/products.json` instead.

## One-time setup (Phase 6)

1. **Create the sheet.** In Google Sheets: **File → Settings → Locale: India** (do this first, so dates read day/month/year), then **File → Import → Upload** `products-template.csv` → "Replace current sheet". Rename the tab `Products`.
2. **Publish it.** **File → Share → Publish to web** → choose the `Products` tab (not "Entire document") and **Comma-separated values (.csv)** → **Publish**. Copy the link. Under "Published content and settings", keep **Automatically republish when changes are made** ticked.
3. **Test it on your computer** (PowerShell, in the project folder):
   ```
   $env:PRICE_SHEET_CSV_URL = "<the link>"
   npm run prices
   Remove-Item Env:PRICE_SHEET_CSV_URL
   ```
   You should see `9 products from Google Sheet written to src/data/products.json`. `git diff src/data/products.json` should show no changes.
4. **Tell Cloudflare.** Workers & Pages → your project → **Settings → Variables and Secrets** (Production) → add `PRICE_SHEET_CSV_URL` = the link → Save.
5. **Create a deploy hook.** Same project → **Settings → Builds → Add deploy hook** → name `prices`, branch `main` → copy the URL. Treat it like a password: anyone with it can rebuild the site.
6. **Daily rebuild.** On GitHub: repository → **Settings → Secrets and variables → Actions → New repository secret** → name `CLOUDFLARE_DEPLOY_HOOK`, value = the deploy hook URL.
7. **"Publish prices" button.** In the sheet: **Extensions → Apps Script**, paste `publish-button.gs` from this folder, save. Then **Project Settings (gear) → Script Properties → Add** `DEPLOY_HOOK_URL` = the deploy hook URL. Reload the sheet: a **Website** menu appears. The first click asks you to authorise the script.
8. Keep edit access to the sheet for your own Google account only. The published CSV is read-only and only contains what the website shows anyway.

## Daily routine

1. Change **price** and **updated_on** for the products whose rate changed.
2. Wait about 5 minutes (Google takes a few minutes to update the published CSV).
3. **Website → Publish prices now**, or do nothing and the 7:45 AM rebuild picks it up.
4. About 2 minutes later, check the site: the "Indicative rates last updated" line shows the new date.

If a build fails, Cloudflare emails you and the old prices stay live. The build log (Workers & Pages → project → Deployments → the failed one) lists the exact row and problem, e.g. `Row 4: price "3OO" is not a number`.

## Columns

| Column | What to put | Example |
| --- | --- | --- |
| id | Fixed product code. Never change it once live. Lowercase, digits, dashes. | `sariya-12mm` |
| name | Product name shown on the site | `MP Birla Chetak PPC` |
| variant | Size or variant (rebar size) | `12mm` |
| price | Indicative price in rupees. **Leave empty** to show "Price on request". | `58` |
| price_basis | What the price is per: `kg`, `bag`, `bucket` or `piece` | `kg` |
| updated_on | Date you last checked this price | `2026-10-10` or `10/10/2026` |
| availability | `in_stock`, `out_of_stock` (customers can't add it) or `ask` | `in_stock` |
| active | `TRUE` to show, `FALSE` to hide the product | `TRUE` |
| category | `sariya` or `cement` | `cement` |
| brand | Brand name | `MP Birla` |
| unit | What the customer counts: `bar`, `bag`, `bucket`, `piece` | `bag` |
| unit_label | How the unit is described | `50 kg Bag` |
| unit_weight_kg | Weight of one unit; **required when price_basis is kg** | `10.65` |
| gst_included | `TRUE` (shows "incl. GST"), `FALSE` (shows "+ GST") or empty (shows nothing) | |
| sort_order | Order on the page (smaller first) | `30` |
| image | Picture key: `birla-chetak`, `perfect-plus`, `perfect-plus-iwp`, or empty | `perfect-plus` |
| best_for | One sentence of guidance (cement cards) | |
| features | Up to 6 short points separated by a pipe character (\|) | Point one\|Point two |

Daily work is usually just **price** and **updated_on**.

## Test a sheet locally

```
npm run prices -- --csv path/to/downloaded.csv
```

This checks the file and rewrites `src/data/products.json`. Run `npm run prices` with no arguments to check the saved file only.
