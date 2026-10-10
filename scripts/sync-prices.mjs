#!/usr/bin/env node
// Builds src/data/products.json — the single product + price file the site reads.
//
// Modes (runs automatically before `npm run build` via the "prebuild" script):
//   1. PRICE_SHEET_CSV_URL is set  -> download the published Google Sheet CSV,
//      validate it, and write src/data/products.json.
//   2. `--csv <file>` is passed     -> same, from a local CSV file (for testing).
//   3. Neither                      -> validate the existing src/data/products.json only.
//
// Any validation error exits with code 1, which fails the build. On Vercel that
// means the last good deployment stays live and nothing broken is published.
// No dependencies: plain Node 18+.

import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT_FILE = path.join(ROOT, "src", "data", "products.json");

export const CATEGORIES = ["sariya", "cement"];
export const UNITS = ["bar", "bag", "bucket", "piece"];
export const PRICE_BASES = ["kg", "bag", "bucket", "piece"];
export const AVAILABILITY = ["in_stock", "out_of_stock", "ask"];
const REQUIRED_COLUMNS = ["id", "active", "category", "name", "unit", "price", "price_basis"];
const MAX_PRICE = 1_000_000;
const PRICE_CHANGE_WARN = 0.25; // warn when a price moves more than 25% vs the last saved file

// ---------- CSV ----------
export function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;
  const s = text.replace(/^﻿/, "");
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (inQuotes) {
      if (c === '"') {
        if (s[i + 1] === '"') { field += '"'; i++; } else inQuotes = false;
      } else field += c;
    } else if (c === '"') inQuotes = true;
    else if (c === ",") { row.push(field); field = ""; }
    else if (c === "\n" || c === "\r") {
      if (c === "\r" && s[i + 1] === "\n") i++;
      row.push(field); rows.push(row); row = []; field = "";
    } else field += c;
  }
  if (inQuotes) throw new Error("CSV has an unclosed quote");
  if (field !== "" || row.length) { row.push(field); rows.push(row); }
  return rows.filter((r) => r.some((v) => v.trim() !== ""));
}

// ---------- helpers ----------
const todayInIndia = () =>
  new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Kolkata" }).format(new Date()); // YYYY-MM-DD

function parseBool(v) {
  const t = v.trim().toLowerCase();
  if (["true", "yes", "y", "1"].includes(t)) return true;
  if (["false", "no", "n", "0"].includes(t)) return false;
  return undefined;
}

function parseNumber(v) {
  const t = v.replace(/[₹,\s]/g, "");
  if (t === "") return null;
  const n = Number(t);
  return Number.isFinite(n) ? n : NaN;
}

// Accepts 2026-10-10, 10/10/2026 or 10-10-2026 (day first, as Google Sheets shows dates for India).
function parseDate(v) {
  const t = v.trim();
  if (t === "") return null;
  let y, m, d;
  let match = t.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
  if (match) [, y, m, d] = match;
  else if ((match = t.match(/^(\d{1,2})[/-](\d{1,2})[/-](\d{4})$/))) [, d, m, y] = match;
  else return NaN;
  const iso = `${y}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
  const check = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(check.getTime()) || check.toISOString().slice(0, 10) !== iso) return NaN;
  return iso;
}

// ---------- validation ----------
export function rowsToProducts(rows, { today = todayInIndia() } = {}) {
  const errors = [];
  const warnings = [];
  if (rows.length < 2) return { errors: ["The sheet has no product rows."], warnings, products: [] };

  const header = rows[0].map((h) => h.trim().toLowerCase().replace(/\s+/g, "_"));
  const missing = REQUIRED_COLUMNS.filter((c) => !header.includes(c));
  if (missing.length) return { errors: [`Missing column(s): ${missing.join(", ")}`], warnings, products: [] };
  const col = (r, name) => {
    const i = header.indexOf(name);
    return i === -1 ? "" : (r[i] ?? "").trim();
  };

  const seen = new Set();
  const products = [];
  rows.slice(1).forEach((r, idx) => {
    const line = idx + 2; // spreadsheet row number
    const err = (msg) => errors.push(`Row ${line}: ${msg}`);
    const id = col(r, "id");
    const active = parseBool(col(r, "active"));

    if (!/^[a-z0-9][a-z0-9-]{1,59}$/.test(id)) return err(`id "${id}" must be lowercase letters, digits and dashes`);
    if (seen.has(id)) return err(`id "${id}" is used twice`);
    seen.add(id);
    if (active === undefined) return err(`active must be TRUE or FALSE (got "${col(r, "active")}")`);
    if (!active) return; // hidden products are left out of the site

    const category = col(r, "category").toLowerCase();
    const unit = col(r, "unit").toLowerCase();
    const priceBasis = col(r, "price_basis").toLowerCase();
    const name = col(r, "name");
    const price = parseNumber(col(r, "price"));
    const unitWeightKg = parseNumber(col(r, "unit_weight_kg"));
    const gstRaw = col(r, "gst_included");
    const gstIncluded = gstRaw === "" ? null : parseBool(gstRaw);
    const availability = (col(r, "availability") || "ask").toLowerCase();
    const updatedOn = parseDate(col(r, "updated_on"));
    const sortOrder = parseNumber(col(r, "sort_order"));
    const features = col(r, "features").split("|").map((f) => f.trim()).filter(Boolean);
    const bestFor = col(r, "best_for");

    const before = errors.length;
    if (!CATEGORIES.includes(category)) err(`category must be one of ${CATEGORIES.join(", ")}`);
    if (!name || name.length > 80) err("name is required (max 80 characters)");
    if (!UNITS.includes(unit)) err(`unit must be one of ${UNITS.join(", ")}`);
    if (!PRICE_BASES.includes(priceBasis)) err(`price_basis must be one of ${PRICE_BASES.join(", ")}`);
    if (Number.isNaN(price)) err(`price "${col(r, "price")}" is not a number`);
    else if (price !== null && (price <= 0 || price > MAX_PRICE)) err(`price ${price} is out of range`);
    if (Number.isNaN(unitWeightKg) || (unitWeightKg !== null && unitWeightKg <= 0)) err("unit_weight_kg must be a positive number");
    if (priceBasis === "kg" && !unitWeightKg) err("unit_weight_kg is required when price_basis is kg");
    if (priceBasis !== "kg" && priceBasis !== unit) err(`price_basis "${priceBasis}" must be kg or match unit "${unit}"`);
    if (gstIncluded === undefined) err("gst_included must be TRUE, FALSE or empty");
    if (!AVAILABILITY.includes(availability)) err(`availability must be one of ${AVAILABILITY.join(", ")}`);
    if (Number.isNaN(updatedOn)) err(`updated_on "${col(r, "updated_on")}" is not a valid date (use 2026-10-10 or 10/10/2026)`);
    else if (updatedOn && updatedOn > today) err(`updated_on ${updatedOn} is in the future`);
    if (Number.isNaN(sortOrder)) err("sort_order must be a number");
    if (bestFor.length > 300) err("best_for is longer than 300 characters");
    if (features.length > 6 || features.some((f) => f.length > 120)) err("features: at most 6 items of 120 characters, separated by |");
    if (errors.length > before) return;

    if (price === null) warnings.push(`Row ${line}: ${id} has no price — shown as "Price on request".`);
    products.push({
      id,
      category,
      brand: col(r, "brand"),
      name,
      variant: col(r, "variant"),
      unit,
      unitLabel: col(r, "unit_label") || unit,
      unitWeightKg,
      price,
      priceBasis,
      gstIncluded,
      availability,
      updatedOn,
      sortOrder: sortOrder ?? 999,
      image: col(r, "image"),
      bestFor,
      features,
    });
  });

  for (const c of CATEGORIES) {
    if (!products.some((p) => p.category === c)) errors.push(`No active ${c} products — refusing to publish an empty ${c} page.`);
  }
  products.sort((a, b) => a.sortOrder - b.sortOrder || a.name.localeCompare(b.name));
  return { errors, warnings, products };
}

// Validates an already-built products.json (mode 3) using the same rules.
export function productsToRows(products) {
  const header = ["id", "active", "category", "brand", "name", "variant", "unit", "unit_label", "unit_weight_kg", "price", "price_basis", "gst_included", "availability", "updated_on", "sort_order", "image", "best_for", "features"];
  const rows = products.map((p) => [
    p.id, "TRUE", p.category, p.brand ?? "", p.name, p.variant ?? "", p.unit, p.unitLabel ?? "",
    p.unitWeightKg == null ? "" : String(p.unitWeightKg), p.price == null ? "" : String(p.price), p.priceBasis,
    p.gstIncluded == null ? "" : String(p.gstIncluded), p.availability ?? "", p.updatedOn ?? "",
    String(p.sortOrder ?? ""), p.image ?? "", p.bestFor ?? "", (p.features ?? []).join("|"),
  ]);
  return [header, ...rows];
}

function priceWarnings(oldProducts, newProducts) {
  const old = new Map(oldProducts.map((p) => [p.id, p.price]));
  return newProducts
    .filter((p) => old.get(p.id) && p.price && Math.abs(p.price - old.get(p.id)) / old.get(p.id) > PRICE_CHANGE_WARN)
    .map((p) => `${p.id}: price changed from ${old.get(p.id)} to ${p.price} — please double-check.`);
}

async function readSaved() {
  try {
    return JSON.parse(await readFile(OUT_FILE, "utf8"));
  } catch {
    return null;
  }
}

async function fetchCsv(url) {
  if (!/^https:\/\/docs\.google\.com\/spreadsheets\//.test(url)) {
    throw new Error("PRICE_SHEET_CSV_URL must be a https://docs.google.com/spreadsheets/... 'Publish to web' CSV link");
  }
  const res = await fetch(url, { signal: AbortSignal.timeout(20000), redirect: "follow" });
  if (!res.ok) throw new Error(`Could not download the price sheet (HTTP ${res.status})`);
  const text = await res.text();
  if (/^\s*<(!doctype|html)/i.test(text)) throw new Error("The link returned a web page, not CSV. Use File > Share > Publish to web > CSV.");
  return text;
}

async function main() {
  const args = process.argv.slice(2);
  const csvArg = args.includes("--csv") ? args[args.indexOf("--csv") + 1] : null;
  const url = process.env.PRICE_SHEET_CSV_URL?.trim();
  const saved = await readSaved();

  let csvText = null;
  let source;
  if (csvArg) { csvText = await readFile(csvArg, "utf8"); source = `file ${csvArg}`; }
  else if (url) { csvText = await fetchCsv(url); source = "Google Sheet"; }

  if (csvText === null) {
    if (!saved) throw new Error(`${path.relative(ROOT, OUT_FILE)} is missing and PRICE_SHEET_CSV_URL is not set.`);
    const { errors } = rowsToProducts(productsToRows(saved.products ?? []));
    if (errors.length) throw new Error(`products.json is invalid:\n  ${errors.join("\n  ")}`);
    console.log(`[prices] PRICE_SHEET_CSV_URL not set — using saved products.json (${saved.products.length} products, valid).`);
    return;
  }

  const { errors, warnings, products } = rowsToProducts(parseCsv(csvText));
  if (errors.length) throw new Error(`Price sheet has ${errors.length} problem(s); nothing was published:\n  ${errors.join("\n  ")}`);
  warnings.push(...priceWarnings(saved?.products ?? [], products));
  warnings.forEach((w) => console.warn(`[prices] warning: ${w}`));

  await writeFile(OUT_FILE, JSON.stringify({ schemaVersion: 1, products }, null, 2) + "\n");
  console.log(`[prices] ${products.length} products from ${source} written to src/data/products.json`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch((e) => {
    console.error(`[prices] ERROR: ${e.message}`);
    process.exit(1);
  });
}
